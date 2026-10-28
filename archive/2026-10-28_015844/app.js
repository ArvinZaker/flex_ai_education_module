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
  return `<div class="complete-row"><button class="button" data-complete="${id}" data-next="${next}">Continue ↗</button></div>`;
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
      (l) =>
        `<a class="nav-link ${route === l[0] ? "active" : ""}" href="#${
          l[0]
        }" ${route === l[0] ? 'aria-current="page"' : ""}>${l[1]}</a>`
    )
    .join("");
  $("#progress-text").textContent = `${completed.length} / 6 completed`;
}

function overview() {
  return `<section class="hero"><div><span class="pill">YEAR 1 & 2 MEDICAL STUDENTS</span><h1>Learning with AI</h1><p class="lede">Use kidney-week RAAS problems to practice prompts, predictions, and explanations.</p><div class="meta"><span>40–50 min target</span><span>Self-paced</span></div><button class="button" data-go="baseline">Start learning ↗</button></div></section><div class="section-head"><h2>Activities</h2></div><div class="cards">${lessons
    .map(
      (l) =>
        `<a class="lesson-card ${l[0] === "case" ? "featured" : ""}" href="#${
          l[0]
        }"><span class="card-icon" aria-hidden="true">${l[3]}</span><div><h3>${
          l[1]
        }</h3><p>${l[4]}</p></div><span aria-hidden="true">↗</span></a>`
    )
    .join(
      ""
    )}</div><p class="status-note">Pre-generated conversations. Fictional case. No live AI.</p>`;
}
function comparison() {
  const s = window.SCENARIOS[scenario];
  return `<div class="section-head"><h2>${
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
        )}”</p><div class="response"><div class="label">TUTOR</div><p>${esc(
          s["response" + v]
        )}</p></div></div></article>`
    )
    .join(
      ""
    )}</div><div class="takeaway"><span aria-hidden="true">↗</span><p><b>What changed?</b> ${esc(
    s.takeaway
  )}</p></div>`;
}
const treeState = {};
function tree() {
  const s = window.SCENARIOS[scenario];
  const state = treeState[s.id] || [];
  const selected = state[0];
  const next = state[1];
  const endings = s.branches;
  return `<section class="panel" style="margin-top:25px"><div class="section-head"><div><h2>${
    state[2]
      ? "Feedback"
      : selected === undefined
      ? "Choose a prompt"
      : "Choose your response"
  }</h2></div><button class="text-button" id="tree-reset">Restart conversation</button></div><div class="conversation"><div class="chat tutor-chat"><span class="eyebrow">TUTOR</span><p>${esc(
    s.topic
  )}</p></div>${
    selected === undefined
      ? `<div class="tree-options"><span class="label">Choose your opening prompt</span><button class="tree-choice" data-tree-start="A"><b>A · Broad request</b>${esc(
          s.a
        )}</button><button class="tree-choice" data-tree-start="B"><b>B · Specific learning request</b>${esc(
          s.b
        )}</button></div>`
      : `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${esc(
          selected === "A" ? s.a : s.b
        )}</p></div><div class="chat tutor-chat"><span class="eyebrow">TUTOR</span><p>${esc(
          s["response" + selected]
        )}</p></div>${
          next === undefined
            ? `<div class="tree-options"><span class="label">What would you ask next?</span>${endings
                .map(
                  (x, i) =>
                    `<button class="tree-choice" data-tree-next="${i}">${esc(
                      x.prompt
                    )} <span aria-hidden="true">↗</span></button>`
                )
                .join("")}</div>`
            : `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${
                endings[next].prompt
              }</p></div><div class="chat tutor-chat"><span class="eyebrow">TUTOR</span><p>${
                endings[next].reply
              }</p></div>${
                state[2]
                  ? `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${esc(
                      endings[next].answers[state[2] - 1].text
                    )}</p></div><div class="chat tutor-chat"><span class="eyebrow">TUTOR</span><p>${esc(
                      endings[next].answers[state[2] - 1].feedback
                    )}</p></div><div class="takeaway"><p>Try another path to compare the replies.</p></div>`
                  : `<div class="tree-options"><span class="label">${
                      endings[next].follow
                    }</span>${endings[next].answers
                      .map(
                        (answer, i) =>
                          `<button class="tree-choice" data-tree-answer="${i}">${esc(
                            answer.text
                          )} ↗</button>`
                      )
                      .join(
                        ""
                      )}<button class="tree-choice" id="tree-alternative">Try another next prompt</button></div>`
              }`
        }`
  }</div><p class="source">${esc(s.sources)}${
    s.url ? ` · ${link(s.url, "NIH")}` : ""
  }</p></section>`;
}
function tutor(gaps = false) {
  return (
    heading(
      gaps
        ? "02 / COMMUNICATE YOUR GAPS · 5–7 MIN"
        : "01 / AI TUTOR PLAYGROUND · 5–7 MIN",
      gaps ? "Find the RAAS gap" : "RAAS tutor playground",
      gaps
        ? "Choose a prompt that pinpoints the mechanism you find confusing."
        : "Choose a kidney-week problem, then follow the prompts and predictions."
    ) +
    `<div class="chips" role="group" aria-label="Choose a conversation scenario">${window.SCENARIOS.map(
      (x, i) =>
        `<button class="chip" data-scenario="${i}" aria-pressed="${
          i === scenario
        }">${x.title}</button>`
    ).join("")}</div>` +
    tree() +
    `<details><summary>Compare both opening prompts side by side</summary>${comparison()}</details>` +
    source(IES, "Source: IES, recommendations 5b and 7") +
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
      "Active recall",
      "Choose an answer before opening the feedback."
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
    }</div><details class="panel soft"><summary>Try this with your course notes</summary><p>Close a short section of your notes. Explain its main idea from memory. Reopen the source and check what you omitted or misstated. Ask your tutor to wait for that attempt before giving an explanation.</p>${source(
      IES,
      "IES, recommendations 5b and 7"
    )}</details>` +
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
      "Clinical reasoning",
      "Gather findings and revise your differential. Adapted from USMLE sample item 62."
    ) +
    `<div class="case-layout"><section><div class="panel"><div class="case-stage">SIMULATED EXAM CASE / INITIAL PRESENTATION</div><h2>The case</h2><p>A 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding.</p><p class="hint">Write an initial differential, then request findings.</p><div class="case-tabs">${Object.entries(
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
    )}<div class="actions"><button class="button" id="case-finish">Finish & open debrief ↗</button><button class="text-button" id="case-reveal">Reveal answer now</button></div><p class="hint">View the findings and complete four entries to finish. Responses are self-reviewed.</p><div id="case-debrief" ${
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
      "Practice aloud",
      "Explain a concept aloud or in text, then review your explanation."
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
      "Notes & critical evaluation",
      "Choose a study format, then find and correct the tutor’s error."
    ) +
    `<div class="grid2"><div class="panel"><div class="eyebrow">THE SOURCE NOTE</div><h2>Screening is not confirmation</h2><p>${sampleNote}</p>${source(
      CDC,
      "Source: CDC, screening tests, aPTT and PT sections"
    )}<div class="notice">Check each study resource against the source.</div><p class="label">Transform the sample note</p><div class="resource-tabs" role="group" aria-label="Study resource">${[
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
      post ? "Your takeaways" : "Before you begin",
      post
        ? "Repeat the tasks and compare your earlier answers. This is ungraded reflection."
        : "Use a course concept and fictional case. Responses clear on reload."
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
                  session["pre-" + i] || "No earlier response in this tab."
                )}</p></details>`
              : ""
          }</section>`
      )
      .join("")}<div class="actions">${
      post
        ? '<button class="button" id="compare-assessments">Review my approach ↗</button>'
        : '<button class="button" data-go="tutor">Continue ↗</button><button class="text-button" data-go="tutor">Skip the starting exercise</button>'
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
    )}. Supports the general design emphasis on human agency, privacy, and pedagogical validation. This module has not been independently validated.</li></ul><h3>RAAS conversation sources</h3><p>RAAS means renin–angiotensin–aldosterone system.</p><p>The renal trees draw on Dr. Krishna Poinen’s Week 49 <i>Potassium Disorders</i> lecture, slides 14–16, 18–19 and 24. The relevant text and principal-cell diagrams were inspected. The source PDFs remain private and are not included in this site. Drug effects are also supported by the NIH potassium fact sheet, “Interactions with Medications.”</p><h3>How to read the A/B comparisons</h3><p>The initial generic examples were drafted with one Luna/low task. The current renal trees are authored from the inspected kidney-week source passages. They are pre-generated illustrative tutor responses. They are not actual runs of the displayed prompts, an experiment, or measured evidence of model behavior. Students select prompts and follow-ups from a fixed list to explore pre-generated conversation trees.</p><p>Lesson times come from the proposed module plan. They total 40–50 minutes before optional starting and closing exercises. No student timing or learning outcomes have been collected. The clinical question has no verified difficulty rating here.</p></div><div class="panel"><h2>Privacy and speech</h2><p>Use only course content, fictional cases, and sample notes. Do not enter names or identifiable patient information. The app stores only six lesson-completion flags in this browser’s local storage. All written responses and transcripts remain in memory in the current tab and disappear on reload. Reset clears progress and in-memory responses. No analytics, trackers, remote fonts, or AI requests are included.</p><p>Optional dictation requires an explicit checkbox and a start action. Depending on the browser, audio can be processed by the browser provider’s speech service. Read-aloud uses the browser’s installed speech engine, whose processing depends on the selected browser/voice. The text pathway provides the same activities. GitHub serves the static files and handles normal hosting traffic.</p>${source(
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
  const conversation = $(".conversation");
  if (conversation) {
    const turns = [...conversation.querySelectorAll(".chat")];
    if (turns.length > 2) {
      const history = document.createElement("details");
      history.className = "conversation-history";
      history.innerHTML = "<summary>Previous turns</summary>";
      turns.slice(0, -2).forEach((turn) => history.appendChild(turn));
      conversation.prepend(history);
    }
  }
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
    if (b.dataset.next) location.hash = b.dataset.next;
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
  if (b.dataset.treeAnswer !== undefined) {
    treeState[window.SCENARIOS[scenario].id][2] =
      Number(b.dataset.treeAnswer) + 1;
    render();
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
