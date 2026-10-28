"use strict";
const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
const USMLE = "https://www.usmle.org/pdfs/step-1/samples_step1.pdf";
const CDC = "https://www.cdc.gov/von-willebrand/diagnosis/";
const IES = "https://ies.ed.gov/ncee/wwc/PracticeGuide/1";
const UNESCO =
  "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research";
const lessons = [
  [
    "tutor",
    "Personalize your tutor",
    "5–7 min",
    "✳",
    "Set the level. Shape the explanation.",
  ],
  [
    "gaps",
    "Communicate your gaps",
    "5–7 min",
    "↗",
    "Make what you know and do not know visible.",
  ],
  [
    "recall",
    "Active recall",
    "7–8 min",
    "▤",
    "Attempt an answer before seeing the explanation.",
  ],
  [
    "case",
    "Clinical reasoning",
    "10–12 min",
    "⌘",
    "Gather evidence. Reconsider your conclusion.",
  ],
  [
    "voice",
    "Practice aloud",
    "6–8 min",
    "≋",
    "Explain your thinking, then review your transcript.",
  ],
  [
    "notes",
    "Notes & critical evaluation",
    "7–8 min",
    "◇",
    "Transform a note. Challenge a confident error.",
  ],
];
const knownRoutes = [
  "overview",
  "baseline",
  ...lessons.map((l) => l[0]),
  "reflection",
  "about",
];
const storageKey = "learning-with-ai-progress-v1";
let completed = [];
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (Array.isArray(saved))
    completed = saved.filter((x) => lessons.some((l) => l[0] === x));
} catch {}
let route = "",
  scenario = 0,
  quizIndex = 0,
  quizChecked = false,
  quizMissed = new Set(),
  quizAnswers = {},
  caseRevealed = false,
  caseOpen = new Set(),
  recognition = null,
  recording = false;
const session = {};
function link(url, text) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`;
}
function source(url, text) {
  return `<p class="source">${link(url, text)}</p>`;
}
function heading(step, title, description) {
  return `<div class="page-heading"><div class="step-label">${step}</div><h1>${title}</h1><p class="lede">${description}</p></div>`;
}
function field(id, label, value = "", placeholder = "") {
  return `<div class="field"><label for="${id}">${label}</label><textarea id="${id}" data-session="${id}" placeholder="${esc(
    placeholder
  )}">${esc(value)}</textarea></div>`;
}
function select(id, label, values, current) {
  return `<div class="field"><label for="${id}">${label}</label><select id="${id}">${values
    .map((v) => `<option${v === current ? " selected" : ""}>${esc(v)}</option>`)
    .join("")}</select></div>`;
}
function finish(id, next) {
  return `<div class="complete-row"><span>Finish the activity, then record your progress.</span><div class="actions"><button class="button secondary" data-complete="${id}">${
    completed.includes(id) ? "✓ Lesson completed" : "Mark lesson complete"
  }</button><button class="button" data-go="${next}">Continue <span aria-hidden="true">↗</span></button></div></div>`;
}
let toastTimer;
function toast(text) {
  $("#toast").textContent = text;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ($("#toast").textContent = ""), 4500);
}
function updateNav() {
  $("#navigation").innerHTML = [
    ["overview", "Start here"],
    ...lessons.map((l) => [l[0], l[1]]),
    ["reflection", "Your takeaways"],
  ]
    .map(
      (l, i) =>
        `<a class="nav-link ${route === l[0] ? "active" : ""}" href="#${
          l[0]
        }" ${
          route === l[0] ? 'aria-current="page"' : ""
        }><span class="nav-number">${
          i === 0 ? "↗" : String(i).padStart(2, "0")
        }</span>${l[1]}${
          completed.includes(l[0])
            ? '<span class="nav-check" aria-label="completed">✓</span>'
            : ""
        }</a>`
    )
    .join("");
  $("#progress-text").textContent = `${completed.length} / 6`;
  $("#progress").value = completed.length;
}
function overview() {
  return `<section class="hero"><div><span class="pill">FOR YEAR 1 & 2 MEDICAL STUDENTS</span><h1>Learn with AI.<br><em>Think for yourself.</em></h1><p class="lede">From effective prompting to clinical reasoning. Explore how to make an AI tutor ask better questions, challenge your thinking, and leave the learning in your hands.</p><div class="meta"><span>◷ &nbsp;40–50 min target</span><span>◉ &nbsp;Self-paced</span><span>6 activities</span></div><button class="button" data-go="baseline">Begin the module <span aria-hidden="true">↗</span></button></div><div class="hero-art" aria-label="Learning loop: explain, question, reason, verify"><div class="orbit"></div><div class="orbit second"></div><div class="art-center"><span>✳</span><small>YOUR THINKING<br>AT THE CENTRE</small></div><div class="art-chip chip1">↗ &nbsp;“Here is what I understand…”</div><div class="art-chip chip2">◇ &nbsp;“What am I missing?”</div><div class="art-chip chip3">↺ &nbsp;“Let me try that again.”</div><div class="art-caption">EXPLAIN · QUESTION · REASON · VERIFY</div></div></section><div class="principle"><span class="star" aria-hidden="true">✳</span><div><p>Your job is to do the thinking. Give AI a role in the process.</p><small>The educational goal of this module: remain responsible for explaining, questioning, reasoning, and verifying.</small></div></div><div class="section-head"><h2>Your learning path</h2><p>Six connected activities. One AI tutor playground.</p></div><div class="cards">${lessons
    .map(
      (l, i) =>
        `<article class="lesson-card ${
          l[0] === "case" ? "featured" : ""
        }"><div class="card-top"><span>0${i + 1} &nbsp; / &nbsp; ${
          l[2]
        }</span><span class="card-icon" aria-hidden="true">${
          l[3]
        }</span></div><h3>${l[1]}</h3><p>${
          l[4]
        }</p><a class="card-link" href="#${l[0]}">${
          completed.includes(l[0])
            ? "Revisit activity"
            : l[0] === "case"
            ? "Enter the case"
            : "Explore activity"
        }<span aria-hidden="true">↗</span></a></article>`
    )
    .join(
      ""
    )}</div><p class="status-note">The playground uses authored, pre-generated examples. The case uses a freely available official USMLE sample. No live AI chat is connected. Timing is a design target and has not been tested with students.</p>`;
}
function comparison() {
  const s = window.SCENARIOS[scenario];
  return `<div class="chips" role="group" aria-label="Choose a pre-generated scenario">${window.SCENARIOS.map(
    (x, i) =>
      `<button class="chip" data-scenario="${i}" aria-pressed="${
        i === scenario
      }">${x.title}</button>`
  ).join("")}</div><div class="section-head"><h2>${
    s.topic
  }</h2><p>Illustrative A/B comparison · scripted responses</p></div><div class="comparison">${[
    "A",
    "B",
  ]
    .map(
      (v) =>
        `<article class="compare-card ${
          v === "B" ? "b" : ""
        }"><div class="compare-header"><span class="letter">${v}</span><b>${
          v === "A" ? "Broad request" : "Specific learning request"
        }</b></div><div class="compare-body"><div class="eyebrow">THE PROMPT</div><p class="prompt-text">“${esc(
          v === "A" ? s.a : s.b
        )}”</p><div class="response"><div class="label">PRE-GENERATED TUTOR RESPONSE</div><p>${esc(
          s["response" + v]
        )}</p></div></div></article>`
    )
    .join(
      ""
    )}</div><div class="takeaway"><span aria-hidden="true">↗</span><p><b>What changed?</b> ${esc(
    s.takeaway
  )} These examples illustrate requested behavior; they do not establish that a live model will comply or that learning improves.</p></div>`;
}
const treeState = {};
function tree() {
  const s = window.SCENARIOS[scenario];
  const state = treeState[s.id] || [];
  const selected = state[0];
  const next = state[1];
  const endings = [
    {
      prompt: "Ask me to explain my current understanding first.",
      reply:
        "Explain the main idea in your own words. Which part can you explain confidently, and which part would you check against your course source? I will wait for your attempt.",
      follow: "I can explain the main idea, but I am unsure about applying it.",
      end: "Choose one fictional course question. Explain the first step you would take and why. What information would help you decide whether that step fits?",
    },
    {
      prompt: "Help me identify what evidence is missing.",
      reply:
        "What conclusion are you considering? Name the evidence you already have and one piece of information that is missing. How might that missing information change your conclusion?",
      follow: "I would like to compare alternatives before deciding.",
      end: "State two alternatives and the finding that would help distinguish them. Explain what result would make you revise your current view. Check factual claims against the supplied course source.",
    },
    {
      prompt: "Quiz me one question at a time and wait.",
      reply:
        "Without looking back at your notes, what is the central idea you are trying to learn? Give your best attempt before we compare it with the source.",
      follow: "I tried recalling it. Now help me decide what to revisit.",
      end: "Compare your attempt with the original note. Which point was accurate, which was missing, and which needs correction? Choose the gap you want to try recalling again.",
    },
  ];
  return `<section class="panel" style="margin-top:25px"><div class="section-head"><div><div class="eyebrow">CHOOSE YOUR NEXT MOVE</div><h2>A conversation you can steer</h2></div><button class="text-button" id="tree-reset">Restart conversation</button></div><p class="hint">Every choice and reply is pre-generated. Choose a prompt to begin, then decide what the student asks next. There is no editable prompt or live AI.</p><div class="conversation"><div class="chat tutor-chat"><span class="eyebrow">TUTOR</span><p>Choose how you would like to approach this activity: ${esc(
    s.topic.toLowerCase()
  )}.</p></div>${
    selected === undefined
      ? `<div class="tree-options"><span class="label">Choose your opening prompt</span><button class="tree-choice" data-tree-start="A"><b>A · Broad request</b>${esc(
          s.a
        )}</button><button class="tree-choice" data-tree-start="B"><b>B · Specific learning request</b>${esc(
          s.b
        )}</button></div>`
      : `<div class="chat student-chat"><span class="eyebrow">YOUR SELECTED PROMPT</span><p>${esc(
          selected === "A" ? s.a : s.b
        )}</p></div><div class="chat tutor-chat"><span class="eyebrow">PRE-GENERATED TUTOR</span><p>${esc(
          s["response" + selected]
        )}</p></div>${
          next === undefined
            ? `<div class="tree-options"><span class="label">What would you ask next?</span>${endings
                .map(
                  (x, i) =>
                    `<button class="tree-choice" data-tree-next="${i}">${x.prompt} <span aria-hidden="true">↗</span></button>`
                )
                .join("")}</div>`
            : `<div class="chat student-chat"><span class="eyebrow">YOUR NEXT PROMPT</span><p>${
                endings[next].prompt
              }</p></div><div class="chat tutor-chat"><span class="eyebrow">PRE-GENERATED TUTOR</span><p>${
                endings[next].reply
              }</p></div>${
                state[2]
                  ? `<div class="chat student-chat"><span class="eyebrow">YOUR SELECTED FOLLOW-UP</span><p>${endings[next].follow}</p></div><div class="chat tutor-chat"><span class="eyebrow">PRE-GENERATED TUTOR</span><p>${endings[next].end}</p></div><div class="takeaway"><p>Notice how your choices changed the requested activity. Try the other opening prompt or another follow-up to compare the scripts. A live model may behave differently.</p></div>`
                  : `<div class="tree-options"><span class="label">Continue the conversation</span><button class="tree-choice" id="tree-follow">${endings[next].follow} <span aria-hidden="true">↗</span></button><button class="tree-choice" id="tree-alternative">Try another next prompt</button></div>`
              }`
        }`
  }</div></section>`;
}
function tutor(gaps = false) {
  return (
    heading(
      gaps
        ? "02 / COMMUNICATE YOUR GAPS · 5–7 MIN"
        : "01 / AI TUTOR PLAYGROUND · 5–7 MIN",
      gaps
        ? "Say what you know.<br>Locate the gap."
        : "Choose a prompt.<br>See where it leads.",
      gaps
        ? "Choose how the student communicates current knowledge, uncertainty, and the help they want next. Follow a scripted conversation and compare another path."
        : "Explore four pre-generated “what if I write X versus Y?” scenarios. Select an opening prompt, read the reply, and choose the next turn. All prompts and replies come from a fixed list."
    ) +
    `<div class="chips" role="group" aria-label="Choose a conversation scenario">${window.SCENARIOS.map(
      (x, i) =>
        `<button class="chip" data-scenario="${i}" aria-pressed="${
          i === scenario
        }">${x.title}</button>`
    ).join("")}</div>` +
    tree() +
    `<details><summary>Compare both opening prompts side by side</summary>${comparison()}</details>` +
    source(
      IES,
      "Educational basis: IES practice guide, recommendations 5b and 7 (retrieval and explanatory questions)"
    ) +
    finish(gaps ? "gaps" : "tutor", gaps ? "recall" : "gaps")
  );
}
const quiz = [
  {
    level: "1 · Recognize",
    q: "You want a quiz partner. Which instruction most clearly asks the tutor to wait for your retrieval attempt?",
    options: [
      "Explain everything, then ask whether I understand.",
      "Ask one question, wait for my answer, then give feedback.",
      "Give me the correct answers to memorize.",
    ],
    correct: 1,
    why: "The second instruction explicitly places an attempt before feedback. This checks whether you can specify the interaction you want; it does not measure medical knowledge.",
  },
  {
    level: "2 · Apply",
    q: "You understand a definition but struggle to use it in a case. Which prompt communicates that gap?",
    options: [
      "Teach me medicine.",
      "I understand the definition. Ask me to apply it to this case and explain the step where my reasoning breaks down.",
      "Make the answer longer.",
    ],
    correct: 1,
    why: "The second prompt states existing knowledge, names the difficulty, and asks for a specific learning activity.",
  },
  {
    level: "3 · Evaluate",
    q: "An AI gives a confident conclusion while a finding needed to support it is missing. What would you ask next?",
    options: [
      "Which evidence supports that conclusion, what is missing, and what could change it?",
      "Use more confident wording.",
      "Repeat the diagnosis without explaining.",
    ],
    correct: 0,
    why: "The first prompt asks for evidence, uncertainty, and revision. It matches this module’s stated goal of keeping verification with the learner.",
  },
];
function recall() {
  const q = quiz[quizIndex];
  return (
    heading(
      "03 / ACTIVE RECALL · 7–8 MIN",
      "Try first.<br>Get feedback second.",
      "Use the short practice sequence to recognize, apply, and evaluate learning instructions. These are authored checks of this module’s goals, with a fixed progression in task complexity."
    ) +
    `<div class="panel"><div class="section-head"><span class="step-label">QUESTION ${
      quizIndex + 1
    } OF ${quiz.length}</span><span class="demo-tag">${
      q.level
    }</span></div><h2>${
      q.q
    }</h2><form id="quiz-form"><fieldset style="border:0;padding:0;margin:0"><legend class="hint">Choose an answer before checking feedback.</legend><div class="option-list">${q.options
      .map(
        (x, i) =>
          `<label class="option"><input type="radio" name="quiz-answer" value="${i}" required ${
            quizAnswers[quizIndex] === i ? "checked" : ""
          } ${quizChecked ? "disabled" : ""}>${x}</label>`
      )
      .join("")}</div></fieldset><button class="button" type="submit" ${
      quizChecked ? "disabled" : ""
    }>Check my answer ↗</button></form>${
      quizChecked
        ? `<div class="feedback" role="status"><h3>${
            quizAnswers[quizIndex] === q.correct
              ? "Matches the requested behavior"
              : "Revisit this instruction"
          }</h3><p>${q.why}</p></div><div class="actions">${
            quizIndex < quiz.length - 1
              ? '<button class="button" id="quiz-next">Next question ↗</button>'
              : '<span class="hint">You have attempted the practice sequence.</span>'
          }${
            quizMissed.size
              ? '<button class="button secondary" id="quiz-revisit">Revisit a missed item</button>'
              : ""
          }<button class="text-button" id="quiz-restart">Start again</button></div>`
        : ""
    }</div><div class="panel soft"><h3>Transfer this to your course notes</h3><p>Close a short section of your notes. Explain its main idea from memory. Reopen the source and check what you omitted or misstated. Ask your tutor to wait for that attempt before giving an explanation.</p>${source(
      IES,
      "IES, recommendation 5b: quizzing with active retrieval; recommendation 7: explanatory questions"
    )}</div>` +
    finish("recall", "case")
  );
}
const caseEvidence = {
  history: {
    title: "Additional history",
    html: "Symptoms have continued for five years; cycles are regular. A finger cut bled longer than expected. No easy bruising or weight change is reported. She uses an oral contraceptive.",
  },
  exam: {
    title: "Examination",
    html: "Mild conjunctival pallor; pelvic examination is unremarkable. Temperature 37.5°C, pulse 72/min, respiratory rate 12/min, blood pressure 120/66 mm Hg.",
  },
  labs: {
    title: "Investigations",
    html: '<table class="data-table"><tbody><tr><th scope="row">Hemoglobin</th><td>10.5 g/dL</td></tr><tr><th scope="row">MCV</th><td>70 μm³</td></tr><tr><th scope="row">Platelets</th><td>275,000/mm³</td></tr><tr><th scope="row">Platelet aggregation</th><td>Normal in the source item</td></tr><tr><th scope="row">PT / INR</th><td>10.5 sec / 1.0</td></tr><tr><th scope="row">PTT</th><td>28 sec</td></tr></tbody></table>',
  },
};
function clinical() {
  return (
    heading(
      "04 / CLINICAL REASONING LAB · 10–12 MIN",
      "Follow the evidence.<br>Keep the answer hidden.",
      "A staged, condensed adaptation of official USMLE Step 1 sample item 62 (February 2021 booklet). The question asks for the hematologic cause of heavy menstrual bleeding. The staging and prompts are authored learning activities; difficulty has not been calibrated."
    ) +
    `<div class="case-layout"><section><div class="panel"><div class="case-stage">SIMULATED EXAM CASE / INITIAL PRESENTATION</div><h2>Heavy bleeding.<br>An incomplete picture.</h2><p>A 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding.</p><p class="hint">Generate a differential before requesting the remaining information. Only findings contained in the source are available.</p><div class="case-tabs">${Object.entries(
      caseEvidence
    )
      .map(
        ([id, x]) =>
          `<button data-evidence="${id}" aria-expanded="${caseOpen.has(
            id
          )}" aria-controls="evidence-${id}">${caseOpen.has(id) ? "✓ " : "+ "}${
            x.title
          }</button>`
      )
      .join("")}</div><div id="case-evidence">${Object.entries(caseEvidence)
      .map(
        ([id, x]) =>
          `<section id="evidence-${id}" class="evidence-card" ${
            caseOpen.has(id) ? "" : "hidden"
          }><h3>${x.title}</h3><div>${x.html}</div></section>`
      )
      .join("")}</div><p class="source">Case facts: ${link(
      USMLE + "#page=30",
      "USMLE sample booklet, item 62, printed p. 29"
    )}. Condensed summary; the full source contains additional details and may reveal the answer.</p><p class="hint">Other requests: “not supplied in the source,” never a generated negative finding.</p></div><div class="panel soft">${select(
      "hint-level",
      "Choose your support",
      ["No hints", "Socratic questions", "Guided hints"],
      session["hint-level"] || "No hints"
    )}<button class="button secondary" id="case-hint">Show selected support</button><div id="hint-output" role="status"></div></div></section><section class="panel"><div class="case-stage">YOUR REASONING JOURNAL / THIS SESSION ONLY</div>${field(
      "initial",
      "1. Initial differential and reasons",
      session.initial,
      "Which explanations are possible? What supports each?"
    )}${field(
      "request",
      "2. What information would you request, and why?",
      session.request,
      "Name the finding and explain how it could change your differential."
    )}${field(
      "updated",
      "3. Revise after the new findings",
      session.updated,
      "What moved up or down your list? Name the evidence that changed your mind."
    )}${field(
      "uncertainty",
      "4. Missing evidence and remaining uncertainty",
      session.uncertainty,
      "What is still unproven? How would you distinguish your leading alternatives?"
    )}<div class="actions"><button class="button" id="case-finish">Finish & open debrief ↗</button><button class="text-button" id="case-reveal">Reveal answer now</button></div><p class="hint">Finish asks you to complete all four entries and view the available findings. You may explicitly reveal the answer at any time. Entries are not automatically graded.</p><div id="case-debrief" ${
      caseRevealed ? "" : "hidden"
    }>${debrief()}</div></section></div>` +
    finish("case", "voice")
  );
}
function debrief() {
  return `<div class="feedback"><div class="eyebrow">SOURCE-BASED DEBRIEF</div><h3>Source answer: von Willebrand disease</h3><p>The official key gives E for item 62. This is the examination answer, not a confirmed clinical diagnosis.</p>${source(
    USMLE + "#page=50",
    "USMLE answer key, printed p. 49, item 62"
  )}<h3 style="margin-top:20px">Why the screening results do not settle it</h3><p>CDC explains that screening results can be normal, including aPTT in mild disease. Low hemoglobin can accompany heavy bleeding. Confirmation uses specific testing, including VWF antigen, VWF activity, and factor VIII activity.</p>${source(
    CDC,
    "CDC, “Screening tests” and “Diagnostic tests”"
  )}<h3 style="margin-top:20px">Compare the reasoning process</h3><ul><li>Did you explain how bleeding beyond menstruation affects your differential?</li><li>Did you distinguish a normal screen from excluding every bleeding disorder?</li><li>Did you identify which specific evidence is still missing?</li><li>What result would change your leading explanation?</li></ul><p class="hint">This debrief was checked against the linked sources. It has not undergone independent faculty review. No generated results or treatment recommendations are added.</p></div>`;
}
function voice() {
  return (
    heading(
      "05 / VOICE LEARNING · 6–8 MIN",
      "Explain it aloud.<br>Listen to your reasoning.",
      "Practice explaining a course concept or giving an oral case summary. Use browser dictation where available, or type the same explanation. Feedback below is a self-review scaffold, not an AI assessment."
    ) +
    `<div class="grid2"><div class="panel"><h2>Your oral practice station</h2>${select(
      "voice-task",
      "Practice mode",
      [
        "Explain a concept",
        "Present your case reasoning",
        "Oral examination rehearsal",
      ],
      session["voice-task"] || "Explain a concept"
    )}<p id="voice-cue">${voiceCue(
      session["voice-task"]
    )}</p><div class="voice-orb" aria-hidden="true">≋</div><div class="voice-controls"><label class="option"><input type="checkbox" id="speech-consent">I understand that browser dictation may send audio to the browser provider’s speech service. I will use only fictional or course content.</label><div class="actions"><button class="button" id="voice-start">Start dictation</button><button class="button secondary" id="voice-stop" disabled>Stop</button></div><p class="hint" id="speech-status" role="status"></p></div><p class="source">${link(
      "https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition",
      "MDN: speech recognition availability and server-based processing"
    )}. This is dictation, not a live voice AI conversation. The module does not record or store an audio file.</p></div><div class="panel">${field(
      "transcript",
      "Transcript / text alternative",
      session.transcript,
      "Type here, or start dictation. Review and correct recognition errors before using the text."
    )}<div class="actions"><button class="button secondary" id="voice-speak">Read transcript aloud</button><button class="text-button" id="voice-silence">Stop reading</button></div><div class="notice">Feedback is based on your own review against your course source. The module does not verify the transcript’s medical accuracy.</div><h3>Review your explanation</h3><div class="checklist">${[
      "I explained the main idea in my own words.",
      "I connected each conclusion to supporting information.",
      "I stated what I am unsure about.",
      "I checked my explanation against the original course source.",
    ]
      .map((x) => `<label><input type="checkbox">${x}</label>`)
      .join("")}</div>${field(
      "voice-next",
      "What would you change on a second attempt?",
      session["voice-next"]
    )}</div></div>` +
    finish("voice", "notes")
  );
}
function voiceCue(mode) {
  return mode === "Present your case reasoning"
    ? "Summarize the case evidence, explain your leading alternatives, and state what remains uncertain."
    : mode === "Oral examination rehearsal"
    ? "Explain what evidence supports your conclusion, then answer: “What finding would change your mind?”"
    : "Choose a concept from your own course. Explain the main idea without reading, then identify one part you need to check.";
}
const sampleNote =
  "Screening blood tests can be normal in von Willebrand disease. Specific diagnostic tests are needed. aPTT can be normal in mild disease. PT is normal in most affected people.";
function notes() {
  return (
    heading(
      "06 / NOTES & CRITICAL EVALUATION · 7–8 MIN",
      "Make a study resource.<br>Then check every claim.",
      "Explore fixed transformations of a short, source-backed sample note. Next, identify and correct a deliberately incorrect tutor statement. No arbitrary notes are sent to a model."
    ) +
    `<div class="grid2"><div class="panel"><div class="eyebrow">THE SOURCE NOTE</div><h2>Screening is not confirmation</h2><p>${sampleNote}</p>${source(
      CDC,
      "Source: CDC, screening tests, aPTT and PT sections"
    )}<div class="notice">This note and its transformations are pre-generated from the linked source. Every resource is a study aid to check against the original.</div><p class="label">Transform the sample note</p><div class="resource-tabs" role="group" aria-label="Study resource">${[
      "Study guide",
      "Flashcards",
      "Concept map",
      "Practice question",
    ]
      .map(
        (x, i) =>
          `<button data-resource="${i}" aria-pressed="${i === 0}">${x}</button>`
      )
      .join("")}</div><div id="resource">${resource(
      0
    )}</div></div><div class="panel"><div class="eyebrow">CHALLENGE THE RESPONSE</div><h2>A confident mistake</h2><div class="notice warning"><b>Intentionally incorrect statement:</b><br>“A normal aPTT rules out von Willebrand disease, so no specific testing is needed.”</div>${field(
      "error-reason",
      "What is wrong, and how would you verify it?",
      session["error-reason"]
    )}${field(
      "error-correction",
      "Write a corrected statement with its source",
      session["error-correction"]
    )}<button class="button" id="check-error">Compare with the source ↗</button><div id="error-feedback" hidden class="feedback" role="status"><h3>Compare your correction</h3><p>A normal aPTT does not exclude mild von Willebrand disease. Specific testing is needed to establish the diagnosis. Check whether your wording preserves that distinction and identifies the source.</p>${source(
      CDC,
      "CDC, “Activated partial thromboplastin time (APTT) test” and “Diagnostic tests”"
    )}<p class="hint">This comparison is fixed. It does not automatically judge your written answer.</p></div></div></div>` +
    finish("notes", "reflection")
  );
}
function resource(index) {
  return [
    "<h3>Study guide</h3><ol><li>Distinguish screening from specific diagnostic tests.</li><li>Remember the limitation of a normal aPTT in mild disease.</li><li>Return to the source before drawing a conclusion.</li></ol>",
    '<div class="flashcard"><span class="eyebrow">RECALL BEFORE REVEAL</span><p>Does a normal aPTT exclude mild von Willebrand disease?</p><button class="button secondary" id="flip-card">Reveal answer</button><div id="flash-answer" hidden>No. A normal aPTT can occur in mild disease. Specific diagnostic tests are needed.</div></div>',
    '<div class="concept-map" aria-label="Screening tests branch to normal results and need for specific tests"><div class="concept-node">Screening tests</div><div aria-hidden="true">↓</div><div class="concept-branches"><div class="concept-node">May be normal</div><div class="concept-node">Do not establish the specific diagnosis</div></div><div aria-hidden="true">↓</div><div class="concept-node">Specific diagnostic testing</div></div>',
    `<h3>Practice question</h3><p>Why should you avoid using a normal aPTT alone to exclude mild disease?</p>${field(
      "note-answer",
      "Your attempt",
      session["note-answer"]
    )}<button class="button secondary" id="note-reveal">Compare answer</button><p id="note-answer-key" hidden>Mild disease can have a normal aPTT. Specific tests are needed to make the diagnosis. See the source note.</p>`,
  ][index];
}
const domains = [
  [
    "Prompting",
    "Which elements would you choose in a tutor request? Explain why training level, existing understanding, uncertainty, and a specific learning goal may matter.",
  ],
  [
    "Active learning",
    "Describe when the tutor should ask a question, wait for an attempt, give feedback, and revisit errors.",
  ],
  [
    "Clinical reasoning",
    "State an initial explanation, a missing finding you would request, and how a possible result could change your differential.",
  ],
  [
    "Critical appraisal",
    "Describe what you would check when a confident AI conclusion lacks supporting evidence.",
  ],
  [
    "Metacognition",
    "Separate what you know from what you suspect and what you need to learn.",
  ],
];
function assessment(post = false) {
  const prefix = post ? "post" : "pre";
  return (
    heading(
      post
        ? "YOUR TAKEAWAYS / AFTER THE MODULE"
        : "BEFORE YOU BEGIN / A STARTING POINT",
      post
        ? "What changed in<br>your approach?"
        : "Start with<br>your own attempt.",
      post
        ? "Repeat the same kinds of tasks, then compare your own before-and-after responses. These exercises support reflection; there is no validated score or pass threshold."
        : "Choose a course concept and a fictional case you know. Try these tasks without the module’s examples. Your text stays in this tab’s memory and is cleared by a page reload."
    ) +
    `<div class="panel">${domains
      .map(
        ([name, instruction], i) =>
          `<section class="assessment-item"><h3>${
            i + 1
          }. ${name}</h3><p>${instruction}</p>${field(
            prefix + "-" + i,
            "Your response",
            session[prefix + "-" + i]
          )}${
            post
              ? `<details><summary>Your starting response</summary><p>${esc(
                  session["pre-" + i] ||
                    "No starting response is available in this tab. You may have skipped it or reloaded the page."
                )}</p></details>`
              : ""
          }</section>`
      )
      .join("")}<div class="actions">${
      post
        ? '<button class="button" id="compare-assessments">Open reflection checklist ↗</button>'
        : '<button class="button" data-go="tutor">Keep my attempts & continue ↗</button><button class="text-button" data-go="tutor">Skip the starting exercise</button>'
    }</div><div id="assessment-feedback" hidden class="feedback"><h3>Review your evidence of learning</h3><div class="checklist">${[
      "I named a specific learning need.",
      "I asked for an attempt before feedback.",
      "I linked a revised conclusion to new information.",
      "I requested support and checked a claim.",
      "I distinguished knowledge, uncertainty, and missing evidence.",
    ]
      .map((x) => `<label><input type="checkbox">${x}</label>`)
      .join(
        ""
      )}</div><p>These are the module’s learning goals, not a validated assessment instrument. Progress records activity completion only.</p></div></div>` +
    (post
      ? `<div class="principle"><span class="star" aria-hidden="true">✳</span><div><p>Explain. Question. Reason. Verify.</p><small>Take a prompt you selected here into your next study session, using fictional or course content.</small></div></div>`
      : "")
  );
}
function about() {
  return (
    heading(
      "ABOUT THIS MODULE",
      "Sources, scope<br>and your privacy.",
      "A static educational module with pre-generated examples. No live model, API key, account, or application backend is required."
    ) +
    `<div class="panel"><h2>What the sources support</h2><ul><li><b>Clinical case and answer:</b> ${link(
      USMLE + "#page=30",
      "USMLE Step 1 sample booklet, February 2021, item 62 (printed p. 29)"
    )}; answer key, printed p. 49. The module condenses the case and changes its presentation into stages. It does not reproduce the full item or claim USMLE endorsement.</li><li><b>Clinical debrief, note and correction:</b> ${link(
      CDC,
      "CDC: Diagnosing von Willebrand disease, May 15, 2024"
    )}, screening tests and diagnostic tests. Supports normal-screen limitations and specific testing.</li><li><b>Retrieval and explanatory questions:</b> ${link(
      IES,
      "IES: Organizing Instruction and Study to Improve Student Learning"
    )}, recommendations 5b and 7. General educational guidance; it does not establish effectiveness of this module or of these AI prompts.</li><li><b>Human agency and educational validation:</b> ${link(
      UNESCO,
      "UNESCO: Guidance for generative AI in education and research, publication overview"
    )}. Supports the general design emphasis on human agency, privacy, and pedagogical validation. This module has not been independently validated.</li></ul><h3>How to read the A/B comparisons</h3><p>One Luna/low content task drafted four pairs, followed by editorial and source-scope review. They are pre-generated illustrative tutor responses. They are not actual runs of the displayed prompts, an experiment, or measured evidence of model behavior. Students select prompts and follow-ups from a fixed list to explore pre-generated conversation trees.</p><p>Lesson times come from the proposed module plan. They total 40–50 minutes before optional starting and closing exercises. No student timing or learning outcomes have been collected. The clinical question has no verified difficulty rating here.</p></div><div class="panel"><h2>Privacy and speech</h2><p>Use only course content, fictional cases, and sample notes. Do not enter names or identifiable patient information. The app stores only six lesson-completion flags in this browser’s local storage. All written responses and transcripts remain in memory in the current tab and disappear on reload. Reset clears progress and in-memory responses. No analytics, trackers, remote fonts, or AI requests are included.</p><p>Optional dictation requires an explicit checkbox and a start action. Depending on the browser, audio can be processed by the browser provider’s speech service. Read-aloud uses the browser’s installed speech engine, whose processing depends on the selected browser/voice. The text pathway provides the same activities. GitHub serves the static files and handles normal hosting traffic.</p>${source(
      "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API",
      "MDN, speech recognition and speech synthesis"
    )}<p class="hint">This is educational practice with a simulated exam case. It has not undergone faculty review and is not a patient-care tool.</p></div>`
  );
}
function saveSession() {
  document
    .querySelectorAll("[data-session]")
    .forEach((el) => (session[el.id] = el.value));
  if ($("#hint-level")) session["hint-level"] = $("#hint-level").value;
  if ($("#voice-task")) session["voice-task"] = $("#voice-task").value;
}
function stopSpeech() {
  if (recognition) {
    recognition.abort();
    recognition = null;
  }
  recording = false;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
function render() {
  saveSession();
  stopSpeech();
  route = location.hash.slice(1) || "overview";
  if (!knownRoutes.includes(route)) route = "overview";
  updateNav();
  const views = {
    overview,
    baseline: () => assessment(false),
    tutor: () => tutor(false),
    gaps: () => tutor(true),
    recall,
    case: clinical,
    voice,
    notes,
    reflection: () => assessment(true),
    about,
  };
  $("#main").innerHTML = views[route]();
  document.title = `${
    route === "overview"
      ? "Learning With AI"
      : lessons.find((l) => l[0] === route)?.[1] || "Learning With AI"
  } · Medical Education`;
  if (route === "voice") voiceSupport();
  $("#main").focus({ preventScroll: true });
  window.scrollTo(0, 0);
}
function voiceSupport() {
  const supported = window.SpeechRecognition || window.webkitSpeechRecognition;
  $("#voice-start").disabled = !supported;
  $("#speech-status").textContent = supported
    ? "Ready. Review the speech-service notice before starting."
    : "Dictation is unavailable in this browser. Type your explanation in the transcript box.";
  if (!("speechSynthesis" in window)) {
    $("#voice-speak").disabled = true;
    $("#voice-silence").disabled = true;
  }
}
function startDictation() {
  if (!$("#speech-consent").checked) {
    toast("Read and accept the speech-service notice, or use the text box.");
    return;
  }
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Speech || recording) return;
  recognition = new Speech();
  recognition.lang = document.documentElement.lang;
  recognition.onresult = (e) => {
    const parts = [];
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) parts.push(e.results[i][0].transcript);
    }
    const el = $("#transcript");
    if (el) {
      el.value = [el.value, ...parts].filter(Boolean).join(" ");
      session.transcript = el.value;
    }
  };
  recognition.onend = () => {
    recording = false;
    if ($("#speech-status")) {
      $("#speech-status").textContent =
        "Stopped. Review and correct the transcript.";
      $("#voice-start").disabled = false;
      $("#voice-stop").disabled = true;
    }
  };
  recognition.onerror = (e) => {
    if ($("#speech-status"))
      $(
        "#speech-status"
      ).textContent = `Dictation could not continue (${e.error}). Use the text box.`;
  };
  try {
    recognition.start();
    recording = true;
    $("#voice-start").disabled = true;
    $("#voice-stop").disabled = false;
    $("#speech-status").textContent = "Listening. Use Stop to finish.";
  } catch {
    recording = false;
    $("#speech-status").textContent =
      "Could not start dictation. Use the text box.";
  }
}
document.addEventListener("input", (e) => {
  if (e.target.dataset.session) session[e.target.id] = e.target.value;
});
document.addEventListener("change", (e) => {
  if (e.target.id === "hint-level") session["hint-level"] = e.target.value;
  if (e.target.id === "voice-task") {
    session["voice-task"] = e.target.value;
    $("#voice-cue").textContent = voiceCue(e.target.value);
  }
});
document.addEventListener("submit", (e) => {
  if (e.target.id !== "quiz-form") return;
  e.preventDefault();
  const checked = $('input[name="quiz-answer"]:checked');
  if (!checked) return;
  quizAnswers[quizIndex] = Number(checked.value);
  quizChecked = true;
  if (quizAnswers[quizIndex] !== quiz[quizIndex].correct)
    quizMissed.add(quizIndex);
  else quizMissed.delete(quizIndex);
  render();
});
document.addEventListener("click", async (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.go) {
    location.hash = b.dataset.go;
    return;
  }
  if (b.dataset.complete) {
    if (!completed.includes(b.dataset.complete))
      completed.push(b.dataset.complete);
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed));
    } catch {
      toast(
        "Browser storage is unavailable. Progress is kept for this tab only."
      );
    }
    updateNav();
    b.textContent = "✓ Lesson completed";
    toast("Lesson marked complete.");
    return;
  }
  if (b.dataset.scenario !== undefined) {
    saveSession();
    scenario = Number(b.dataset.scenario);
    render();
    return;
  }
  if (b.dataset.evidence) {
    const id = b.dataset.evidence;
    caseOpen.add(id);
    b.setAttribute("aria-expanded", "true");
    b.textContent = "✓ " + caseEvidence[id].title;
    $("#evidence-" + id).hidden = false;
    return;
  }
  if (b.dataset.treeStart) {
    treeState[window.SCENARIOS[scenario].id] = [b.dataset.treeStart];
    render();
    return;
  }
  if (b.dataset.treeNext !== undefined) {
    treeState[window.SCENARIOS[scenario].id][1] = Number(b.dataset.treeNext);
    render();
    return;
  }
  if (b.dataset.resource !== undefined) {
    saveSession();
    document
      .querySelectorAll("[data-resource]")
      .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    $("#resource").innerHTML = resource(Number(b.dataset.resource));
    return;
  }
  switch (b.id) {
    case "tree-reset":
      delete treeState[window.SCENARIOS[scenario].id];
      render();
      break;
    case "tree-follow":
      treeState[window.SCENARIOS[scenario].id][2] = true;
      render();
      break;
    case "tree-alternative":
      treeState[window.SCENARIOS[scenario].id].length = 1;
      render();
      break;
    case "reset":
      if (confirm("Clear module progress and all responses in this tab?")) {
        stopSpeech();
        completed = [];
        Object.keys(session).forEach((k) => delete session[k]);
        Object.keys(treeState).forEach((k) => delete treeState[k]);
        quizIndex = 0;
        quizChecked = false;
        quizAnswers = {};
        quizMissed.clear();
        caseOpen.clear();
        caseRevealed = false;
        try {
          localStorage.removeItem(storageKey);
        } catch {}
        $("#main").innerHTML = "";
        render();
        toast("Progress and responses cleared.");
      }
      break;

    case "quiz-next":
      quizIndex++;
      quizChecked = Object.hasOwn(quizAnswers, quizIndex);
      render();
      break;
    case "quiz-revisit":
      quizIndex = [...quizMissed][0];
      quizChecked = false;
      delete quizAnswers[quizIndex];
      render();
      break;
    case "quiz-restart":
      quizIndex = 0;
      quizChecked = false;
      quizAnswers = {};
      quizMissed.clear();
      render();
      break;
    case "case-hint": {
      const level = $("#hint-level").value;
      $("#hint-output").innerHTML = `<p class="notice">${
        level === "No hints"
          ? "Hints are off. Continue with your own reasoning."
          : level === "Socratic questions"
          ? "Which finding does your leading explanation fail to account for? What does a screening test actually establish?"
          : "Compare the bleeding history with the screening results. Avoid treating an available screening result as the answer to every diagnostic question. Name the additional evidence you would need."
      }</p>`;
      break;
    }
    case "case-finish":
      saveSession();
      if (
        caseOpen.size < 3 ||
        !["initial", "request", "updated", "uncertainty"].every((k) =>
          session[k]?.trim()
        )
      ) {
        toast(
          "View all three evidence groups and complete the four entries, or choose Reveal answer now."
        );
        break;
      }
    // Explicit reveal and completed reasoning both open the same source-based debrief.
    case "case-reveal":
      caseRevealed = true;
      $("#case-debrief").hidden = false;
      $("#case-debrief").scrollIntoView({ block: "nearest" });
      break;
    case "voice-start":
      startDictation();
      break;
    case "voice-stop":
      recognition?.stop();
      break;
    case "voice-speak":
      if (!$("#transcript").value.trim()) {
        toast("Add a transcript first.");
        break;
      }
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance($("#transcript").value);
        utterance.lang = document.documentElement.lang;
        window.speechSynthesis.speak(utterance);
      }
      break;
    case "voice-silence":
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      break;
    case "flip-card":
      $("#flash-answer").hidden = false;
      b.hidden = true;
      break;
    case "note-reveal":
      if (!$("#note-answer").value.trim()) {
        toast("Attempt the question first.");
        break;
      }
      $("#note-answer-key").hidden = false;
      break;
    case "check-error":
      if (
        !$("#error-reason").value.trim() ||
        !$("#error-correction").value.trim()
      ) {
        toast("Write your explanation and correction before comparing.");
        break;
      }
      $("#error-feedback").hidden = false;
      break;
    case "compare-assessments":
      $("#assessment-feedback").hidden = false;
      break;
  }
});
window.addEventListener("hashchange", render);
window.addEventListener("pagehide", stopSpeech);
render();
