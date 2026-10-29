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
const PROMPTING =
  "https://www.aacom.org/medical-education/ai-hub/ai-foundations/interacting-with-ai";
const EVALUATION =
  "https://www.aacom.org/medical-education/ai-hub/ai-foundations/evaluating-ai-output";
const RESPONSIBLE =
  "https://www.aacom.org/medical-education/ai-hub/ai-foundations/module-3";
const NIH = "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/";
const MERCK =
  "https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/overview-of-disorders-of-potassium-concentration";
const OPENSTAX =
  "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-8-endocrine-regulation-of-kidney-function";
const references = [
  {
    id: 1,
    title: "AACOM (2026). Interacting with AI: Prompts & Process.",
    short: "AACOM: Prompts & Process",
    url: PROMPTING,
    locator:
      "Introduction to Contextual Prompting; A Practical Clinical Prompting Framework; Prompt Iteration",
    supports:
      "Supports stating your level, goal, context and desired response, and refining the next message. It does not prove that these scripted examples improve learning.",
  },
  {
    id: 2,
    title: "AACOM (2026). Evaluating AI Output: Applying Critical Thinking.",
    short: "AACOM: Evaluating AI Output",
    url: EVALUATION,
    locator:
      "The Importance of Evaluating AI Output; Example Prompt RACCCA Evaluation",
    supports:
      "Supports checking the accuracy, completeness and cited evidence of a fluent response. No scoring framework from this page is implemented here.",
  },
  {
    id: 3,
    title: "AACOM (2026). Responsible Use of AI in Medical Education.",
    short: "AACOM: Responsible Use",
    url: RESPONSIBLE,
    locator:
      "Ethical & Transparent Use; Data Stewardship and Security; Smart Use Tips",
    supports:
      "Supports following course/institution policies, protecting patient information, and independently verifying references.",
  },
  {
    id: 4,
    title:
      "Pashler H et al. (2007). Organizing Instruction and Study to Improve Student Learning. Institute of Education Sciences.",
    short: "IES: Study and retrieval practice",
    url: IES,
    locator: "Recommendations 5b and 7",
    supports:
      "Supports retrieval practice and explanatory questions in general. It does not validate an AI tutor or this module.",
  },
  {
    id: 5,
    title:
      "NIH Office of Dietary Supplements (2022). Potassium: Fact Sheet for Health Professionals.",
    short: "NIH ODS: Potassium",
    url: NIH,
    locator: "Interactions with Medications → ACE inhibitors and ARBs",
    supports:
      "States that these drugs can reduce urinary potassium excretion and lead to hyperkalemia; identifies impaired kidney function as an additional risk.",
  },
  {
    id: 6,
    title:
      "Lewis JL III (updated December 2025). Overview of Disorders of Potassium Concentration. Merck Manual Professional Edition.",
    short: "Merck Manual: Potassium concentration",
    url: MERCK,
    locator: "Potassium shifts; Potassium metabolism",
    supports:
      "Supports insulin-mediated uptake into cells, the distinction between concentration and body potassium, and the effect of distal sodium delivery on excretion.",
  },
  {
    id: 7,
    title:
      "Betts JG et al. (2022). Anatomy and Physiology 2e. OpenStax. Section 25.8, Endocrine Regulation of Kidney Function.",
    short: "OpenStax: Kidney hormone regulation",
    url: OPENSTAX,
    locator: "Renin–Angiotensin–Aldosterone",
    supports:
      "Supports angiotensin II/aldosterone signalling and aldosterone’s promotion of sodium reabsorption and potassium excretion. The detailed ENaC diagram is supported by the course lecture below.",
  },
  {
    id: 8,
    title:
      "Poinen K (undated). Potassium Disorders. UBC MEDD, Year 2, Week 49. Course lecture.",
    short: "Poinen: Potassium Disorders",
    url: null,
    locator: "Slides 14–16, 18–19 and 24",
    supports:
      "Supplied course source for ENaC/pump orientation, the lumen-negative gradient, flow/delivery, and the post-meal potassium response. This source is not publicly hosted; the PDF is not uploaded.",
  },
  {
    id: 9,
    title: "FSMB and NBME (February 2021). USMLE Step 1 Sample Test Questions.",
    short: "USMLE: Sample item 62",
    url: USMLE,
    locator: "Item 62, printed p. 29; answer key, printed p. 49",
    supports:
      "Supplies the separate simulated examination case and answer. The learning prompts and staged presentation are authored for this module.",
  },
  {
    id: 10,
    title: "CDC (15 May 2024). Diagnosing von Willebrand Disease.",
    short: "CDC: Diagnosing VWD",
    url: CDC,
    locator: "Screening tests; Diagnostic tests",
    supports:
      "Supports the case debrief and the deliberately incorrect statement/correction in the note exercise.",
  },
  {
    id: 11,
    title: "Google AI for Developers (2026). Prompt design strategies.",
    short: "Google: Prompt design",
    url: "https://ai.google.dev/gemini-api/docs/prompting-strategies",
    locator: "Clear and specific instructions; Constraints; Response format; Prompt iteration strategies",
    supports: "Supports specifying the task, response format and constraints, then refining the prompt. Developer guidance for Gemini, not a guarantee across models or a medical accuracy standard.",
  },
];
function evidence(ids) {
  return `<p class="evidence-refs" aria-label="Supporting sources">${ids
    .map((id) => {
      const r = references.find((r) => r.id === id);
      return `<a href="${r.url || "#about"}" ${
        r.url ? 'target="_blank" rel="noopener noreferrer"' : ""
      } title="${esc(r.title + " " + r.locator)}">[${id}] ${esc(r.short)}</a>`;
    })
    .join(" · ")}</p>`;
}
function teaching(title, text, ids) {
  const practising = (route === "getting-started" && introChoice !== null) ||
    (["tutor", "gaps", "recall", "notes"].includes(route) && treeState[window.SCENARIOS[scenario].id]?.length) ||
    (route === "recall" && (quizChecked || quizIndex > 0));
  const content = `<div class="lesson-explanation"><h2>${title}</h2>${text}${evidence(ids)}</div>`;
  return practising
    ? `<details class="teaching-review"><summary>Review the explanation</summary>${content}</details>`
    : content;
}
function coaching(text) {
  return `<aside class="choice-coaching" role="status"><p>${text}</p></aside>`;
}
const lessons = [
  [
    "getting-started",
    "Your first study chat",
    "",
    "↗",
    "Learn what to send, how to follow up, and what to check.",
  ],
  [
    "tutor",
    "Ask for useful help",
    "5–7 min",
    "✳",
    "Tell the chatbot your level and the help you want.",
  ],
  [
    "gaps",
    "Communicate your gaps",
    "5–7 min",
    "↗",
    "Tell it exactly where the explanation stopped making sense.",
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
  caseOpen = new Set();
let introChoice = null,
  introFollow = false,
  introVerified = null;
const session = {};
function link(url, text) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text} ↗</a>`;
}
function source(url, text) {
  return `<p class="source">${link(url, text)}</p>`;
}
function heading(step, title, description) {
  const index = lessons.findIndex((l) => l[0] === route);
  const label = index >= 0 ? `Step ${index + 1} of ${lessons.length}` : "";
  return `<div class="page-heading">${label ? `<p class="step-label">${label}</p>` : ""}<h1>${title}</h1>${description ? `<p class="lede">${description}</p>` : ""}</div>`;
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
  const index = lessons.findIndex((l) => l[0] === id);
  const previous = index > 0 ? lessons[index - 1][0] : "overview";
  return `<div class="complete-row"><a href="#${previous}" class="back-link">← Back</a><button class="button" data-complete="${id}" data-next="${next}">${next === "reflection" ? "Finish & reflect" : "Continue"} →</button></div>`;
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
  $(
    "#progress-text"
  ).textContent = `${completed.length} / ${lessons.length} completed`;
}

function overview() {
  const next = lessons.find((l) => !completed.includes(l[0]))?.[0] || "getting-started";
  return heading("", "Learn to study with AI", "A practical introduction to asking, following up and checking what a chatbot tells you.") +
    `<div class="welcome"><p>You have finished a lecture, but one part still does not make sense. You could ask a chatbot to explain it. What should you tell it? What should you do if the answer is unclear—or sounds convincing but is wrong?</p>
    <p>Work through a study conversation, then practise asking for explanations, quizzes and clinical reasoning. You will choose prepared messages and see how the conversation changes. The replies are pre-written examples.</p>
    <p>By the end, you should be able to describe your learning gap, steer the next reply, attempt an answer before seeing feedback, and check a claim against its source.</p>
    <button class="button" data-go="${next}">${completed.length ? "Continue learning" : "Begin"} →</button>
    <details class="optional"><summary>Try the opening exercise first</summary><p>Write your approach before seeing the examples. You can compare it with your answers at the end.</p><a href="#baseline">Open the starting exercise →</a></details></div>`;
}
function introduction() {
  return (
    heading(
      "01 / YOUR FIRST STUDY CHAT",
      "Start with one learning need",
      ""
    ) +
    teaching(
      "How to start",
      `<p>A chatbot is an AI tool you talk to through messages. Your message is the <b>prompt</b>; its answer is the <b>reply</b>. In a real chatbot, type in the message box and press Send. Here, select a prepared message to try the same interaction.</p>
      <p>Start by telling it <b>where you are in your learning</b> and <b>what you want help with</b>. “Explain ACE inhibitors” leaves the scope open. Adding “I know they reduce angiotensin II, but I cannot explain the potassium effect” identifies the connection you need. Asking for plain language sets the level of detail.</p>
      <p>The conversation continues after the first reply. A <b>follow-up</b> is your next message: name an unclear word, ask about a missing step, or request a question to test yourself. You will try each of these moves. When using a real tool, follow your course rules and keep patient information out of the chat.</p>`,
      [1, 3]
    ) +
    `<section class="panel">${introChoice === null ? "<h2>Try your first message</h2><p>You know that ACE inhibitors reduce angiotensin II, a hormone signal. You want to understand why blood potassium can rise. Choose what you would send.</p>" : "<h2>Your conversation</h2>"}
 ${
   introChoice === null
     ? `<div class="tree-options"><button class="tree-choice" data-intro-choice="0">Explain ACE inhibitors.</button><button class="tree-choice" data-intro-choice="1">I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I do not understand the potassium effect. Explain that connection using plain language.</button></div>`
     : `${
         introFollow
           ? '<details class="conversation-history"><summary>Earlier exchange</summary>'
           : ""
       }<div class="chat student-chat"><span class="eyebrow">YOUR MESSAGE</span><p>${
         introChoice === 0
           ? "Explain ACE inhibitors."
           : "I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I do not understand the potassium effect. Explain that connection using plain language."
       }</p></div>
 <div class="chat tutor-chat"><span class="eyebrow">CHATBOT</span><p>${
   introChoice === 0
     ? "ACE inhibitors reduce the conversion of angiotensin I to angiotensin II. Angiotensin II helps stimulate aldosterone, which promotes potassium secretion into urine."
     : "Angiotensin II stimulates aldosterone. Aldosterone helps the kidney secrete potassium into urine. Reducing that signal can reduce potassium excretion, allowing potassium in blood to rise."
 }</p>${evidence([5, 7])}</div>
 ${
   introChoice === 0 && !introFollow
     ? coaching(
         "This request leaves the chatbot to choose the scope. Add what you already understand and the connection you want explained."
       )
     : ""
 }${introFollow ? "</details>" : ""}
 ${
   !introFollow
     ? `<div class="tree-options"><span class="label">The word “secrete” is unclear. Send a follow-up.</span><button class="tree-choice" id="intro-follow">What does “secrete potassium” mean here? Explain the direction in one sentence.</button></div>`
     : `<div class="chat student-chat"><span class="eyebrow">YOUR FOLLOW-UP</span><p>What does “secrete potassium” mean here? Explain the direction in one sentence.</p></div><div class="chat tutor-chat"><span class="eyebrow">CHATBOT</span><p>In this kidney pathway, secretion means potassium moves into tubular fluid so it can leave in urine.</p>${evidence(
         [8]
       )}</div><p><b>Now check it.</b> Open the NIH source below, find “Interactions with Medications,” then the ACE inhibitor/ARB subsection. Compare its statement about urinary potassium excretion with the reply.</p>${evidence(
         [5]
       )}<div class="tree-options"><span class="label">Why should you open the source?</span><button class="tree-choice" data-intro-verify="1">A confident reply can still be wrong. I need to check that the source supports the claim.</button><button class="tree-choice" data-intro-verify="0">The chatbot supplied a link, so the claim is already verified.</button></div>${
         introVerified === null
           ? ""
           : `<div class="feedback" role="status"><p>${
               introVerified
                 ? "You identified the right check: the passage must support the claim. Open NIH’s ACE inhibitor/ARB section and compare its wording about urinary potassium excretion. Then choose Continue to learn how to specify the response you want."
                 : "A citation can be incorrect or irrelevant. Open NIH’s ACE inhibitor/ARB section and compare the passage with the reply. Then select the other answer here, or choose Continue after checking the source."
             }</p>${evidence([2, 3])}</div>`
       }`
 }
 <button class="text-button" data-intro-choice="${
   introChoice === 0 ? 1 : 0
 }">Try the other first message</button>`
 }
 </section>` +
    finish("getting-started", "tutor")
  );
}
function comparison() {
  const s = window.SCENARIOS[scenario];
  return `<div class="section-head"><h2>${
    s.topic
  }</h2><p>Two ways to start the same conversation</p></div><div class="comparison">${[
    "A",
    "B",
  ]
    .map(
      (v) =>
        `<article class="compare-card ${
          v === "B" ? "b" : ""
        }"><div class="compare-header"><b>${
          v === "A" ? "First message" : "Other message"
        }</b></div><div class="compare-body"><div class="eyebrow">THE PROMPT</div><p class="prompt-text">“${esc(
          v === "A" ? s.a : s.b
        )}”</p><div class="response"><div class="label">CHATBOT</div><p>${esc(
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
  const showOpeningHelp = selected === "A" && next === undefined;
  const showFinalHelp =
    state[2] && endings[next].answers[state[2] - 1].suboptimal;
  const ending = state[2] ? endings[next].answers[state[2] - 1] : null;
  const advice = showOpeningHelp
    ? s.openingAdvice
    : showFinalHelp
    ? endings[next].answers[state[2] - 1].advice
    : "";

  return `<section class="panel" style="margin-top:25px"><div class="section-head"><div><h2>${
    state[2] ? "Your conversation" : "Try it"
  }</h2></div><button class="text-button" id="tree-reset">Restart conversation</button></div>${
    s.containsError
      ? '<p class="exercise-note">The next reply contains an overstatement. Choose how to challenge it.</p>'
      : ""
  }<div class="conversation"><p class="scenario-context">${esc(s.topic)}</p>${
    selected === undefined
      ? `<div class="tree-options"><span class="label">What would you send?</span><button class="tree-choice" data-tree-start="A">${esc(
          s.a
        )}</button><button class="tree-choice" data-tree-start="B">${esc(
          s.b
        )}</button></div>`
      : `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${esc(
          selected === "A" ? s.a : s.b
        )}</p></div><div class="chat tutor-chat"><span class="eyebrow">CHATBOT</span><p>${esc(
          s["response" + selected]
        )}</p></div>${
          next === undefined
            ? `<div class="tree-options"><span class="label">What would you send next?</span>${endings
                .map(
                  (x, i) =>
                    `<button class="tree-choice" data-tree-next="${i}">${esc(
                      x.prompt
                    )} <span aria-hidden="true">↗</span></button>`
                )
                .join("")}</div>`
            : `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${
                endings[next].prompt
              }</p></div><div class="chat tutor-chat"><span class="eyebrow">CHATBOT</span><p>${
                endings[next].reply
              }</p></div>${
                state[2]
                  ? `<div class="chat student-chat"><span class="eyebrow">YOU</span><p>${esc(
                      endings[next].answers[state[2] - 1].text
                    )}</p></div><div class="chat tutor-chat"><span class="eyebrow">CHATBOT</span><p>${esc(
                      endings[next].answers[state[2] - 1].feedback
                    )}</p></div>`
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
  }</div>${advice ? coaching(advice) : ""}${ending ? `<div class="next-action" role="status"><h3>What to do next</h3><p>${esc(ending.nextAction)} ${route === "recall" ? "Then choose Try the short check below." : route === "notes" ? "Then choose Make a study resource below." : "Then choose Continue below, or restart to compare a different message."}</p></div>` : ""}${evidence(s.references)}</section>`;
}
function conversationPractice(content) {
  if (session[route + "-practice"]) {
    return `<button class="text-button" id="back-conversation">← Revisit the conversation</button>${content}`;
  }
  const done = treeState[window.SCENARIOS[scenario].id]?.[2];
  return tree() + (done ? `<div class="complete-row"><button class="button" id="next-practice">${route === "recall" ? "Try the short check" : "Make a study resource"} →</button></div>` : "");
}
function tutor(gaps = false) {
  return (
    heading(
      gaps
        ? "03 / FOLLOW UP WHEN YOU ARE STUCK"
        : "02 / ASK FOR THE HELP YOU NEED",
      gaps ? "Ask a useful follow-up" : "Ask for the help you need",
      ""
    ) +
    teaching(
      gaps ? "Name the missing step" : "Choose the kind of help you need",
      gaps
        ? `<p>Read the reply against your goal. Decide what is missing: background you needed, a mechanism step, an example, or the requested format. Then tell the chatbot what to keep and what to change.</p>
        <p>For a missing link, send: <b>“I understand that sodium enters the kidney cell. I do not understand how that helps potassium enter urine. Keep the explanation focused on that electrical connection.”</b> For too much detail: <b>“Keep the mechanism, but define the terms first and leave out treatment.”</b></p>
        <p>If you want a different structure, show it: <b>“Rewrite this as blood side → cell → tubular fluid, and label the transporter at each crossing.”</b> If you want a question instead of an explanation: <b>“Stop explaining. Ask me to predict the next step and wait.”</b> You can make these requests in the same conversation.</p>
        <p>When the reply meets your request, explain the idea yourself or apply it to a new situation. If it still misses the point, name the remaining mismatch. A clearer format makes an answer easier to use; check its medical content separately.</p>`
        : `<p>A model responds to the instructions and information you give it. Decide what a useful reply should contain before you send the message. “Be my tutor” leaves the actual teaching task open. Specify the behaviour you want.</p>
        <ol class="prompt-principles">
          <li><b>Name the task.</b> Ask for an explanation, a comparison or a quiz. “Explain why blood potassium can rise after ACE inhibition” gives the reply a topic and purpose.</li>
          <li><b>Give the relevant context.</b> State your level, what you understand and the missing connection. This tells the model where to begin and which background to skip.</li>
          <li><b>Describe the output.</b> Ask for plain language, an arrow chain or a comparison table. If you want a particular structure, show it: “Change → kidney effect → blood effect.”</li>
          <li><b>Set the interaction and source boundaries.</b> Say “Ask one question and wait,” or “Use the excerpt below and flag anything it does not support.” Supply the excerpt when you want it used.</li>
        </ol>
        <p>For example: <b>“I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but not why potassium can rise. Explain that link in plain language using Change → kidney effect → blood effect. Then ask one question and wait for my answer.”</b> Each sentence sets a different part of the response.</p>
        <p>After the reply, check whether it did the requested job. If it is too broad, narrow the task. If a step is missing, name that step. If the format is wrong, show the format again. These instructions steer the response; factual claims still need checking against a source. Try this with the prepared messages below.</p>`,
      gaps ? [1, 11] : [1, 2, 11]
    ) +
    tree() +
    `<details><summary>Compare both opening prompts side by side</summary>${comparison()}</details>` +
    finish(gaps ? "gaps" : "tutor", gaps ? "recall" : "gaps")
  );
}
const quiz = [
  {
    level: "1 · Recognize",
    q: "You want a quiz partner. Which instruction asks the chatbot to wait for your answer?",
    options: [
      "Explain everything, then ask whether I understand.",
      "Ask one question, wait for my answer, then give feedback.",
      "Give me the correct answers to memorize.",
    ],
    correct: 1,
    why: "The second instruction asks for one question and places your attempt before feedback. Asking “Do you understand?” does not require you to retrieve or explain anything.",
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
  const allAnswered = quiz.every((_, i) => Object.hasOwn(quizAnswers, i));
  return (
    heading(
      "04 / ASK THE CHATBOT TO QUIZ YOU",
      "Ask for a question, then attempt it",
      ""
    ) +
    teaching(
      "Turn an explanation into practice",
      `<p>Reading an answer and producing one from memory are different tasks. <b>Active recall</b> means trying to retrieve the answer yourself. To practise it in a chat, ask for a question and explicitly tell the chatbot to wait.</p>
      <p>Send: <b>“Ask me one question about potassium handling. Wait for my answer before explaining. If I make an error, explain that step and ask a new question about it.”</b> Then make an attempt—even if incomplete. Ask for a hint if needed, and check unfamiliar feedback against your course source.</p>
      <p>Once you can explain the mechanism, ask for a new situation that requires you to apply it. Below, first try a quiz conversation, then check which instructions keep the learner actively involved.</p>`,
      [1, 4]
    ) +
    conversationPractice(`<h2 class="practice-heading">Check your approach</h2><div class="panel"><div class="section-head"><span class="step-label">Question ${
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
              ? "That instruction fits the task"
              : "Revisit this instruction"
          }</h3><p>${q.why}</p><p class="quiz-next-action">${!allAnswered ? "Choose Next question to try the next situation." : quizMissed.size ? "Choose Revisit a missed item to practise the instruction you missed, then Continue to the case." : "You have completed the three questions. Choose Continue to use these instructions in a clinical case."}</p></div><div class="actions">${
            !allAnswered && quizIndex < quiz.length - 1
              ? '<button class="button" id="quiz-next">Next question ↗</button>'
              : ""
          }${
            quizMissed.size
              ? '<button class="button secondary" id="quiz-revisit">Revisit a missed item</button>'
              : ""
          }<button class="text-button" id="quiz-restart">Start again</button></div>`
        : ""
    }</div><details class="panel soft"><summary>Try this with your course notes</summary><p>Close a short section of your notes. Explain its main idea from memory. Reopen the source and check what you omitted or misstated. Ask the chatbot to wait for that attempt before giving an explanation.</p>${source(
      IES,
      "IES, recommendations 5b and 7"
    )}</details>` +
    evidence([1, 4]) +
    finish("recall", "case"))
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
      "05 / REASON THROUGH A CASE",
      "Reason through a case",
      ""
    ) +
    teaching(
      "Make the case a reasoning exercise",
      `<p>Asking “What is the diagnosis?” gives away the decision you need to practise. Instead, ask the chatbot to present a fictional case in stages and hold back its answer while you reason through it.</p>
      <p>Send: <b>“Use this fictional case for learning. Let me propose possible diagnoses and explain why. Give findings only when I request them. Ask how each finding changes my thinking. Do not reveal the diagnosis until I finish or ask.”</b> When using a supplied case, also ask it to say when a requested fact is unavailable.</p>
      <p>A <b>differential diagnosis</b> is your list of possible explanations. Start with that list, request information that could distinguish the possibilities, then revise your list using the findings. In this USMLE example, use the buttons to request evidence and the four fields to record those steps. Choose a hint if the clinical content is new.</p>`,
      [1]
    ) +
    `<div class="case-layout"><section><div class="panel"><div class="case-stage">Initial presentation</div><h2>The case</h2><p>A 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding.</p>${field(
      "initial",
      "1. Initial differential and reasons",
      session.initial,
      "Which explanations are possible? What supports each?"
    )}${field(
      "request",
      "2. What information would you request, and why?",
      session.request,
      "Name the finding and explain how it could change your differential."
    )}<div class="case-tabs">${Object.entries(
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
      .join("")}</div><p class="source">Case source: ${link(
      USMLE + "#page=30",
      "USMLE sample booklet, item 62, printed p. 29"
    )}. The booklet includes the answer.</p></div><div class="panel soft">${select(
      "hint-level",
      "Choose your support",
      ["No hints", "Socratic questions", "Guided hints"],
      session["hint-level"] || "No hints"
    )}<button class="button secondary" id="case-hint">Show selected support</button><div id="hint-output" role="status"></div></div></section><section class="panel"><div class="case-stage">Reassess after the findings</div>${field(
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
    finish("case", "notes")
  );
}
function debrief() {
  return `<div class="feedback"><div class="eyebrow">SOURCE-BASED DEBRIEF</div><h3>Source answer: von Willebrand disease</h3><p>The official answer key identifies von Willebrand disease (option E) for item 62.</p>${source(
    USMLE + "#page=50",
    "USMLE answer key, printed p. 49, item 62"
  )}<h3 style="margin-top:20px">Why the screening results do not settle it</h3><p>CDC explains that screening results can be normal, including aPTT in mild disease. Low hemoglobin can accompany heavy bleeding. Confirmation uses specific testing, including VWF antigen, VWF activity, and factor VIII activity.</p>${source(
    CDC,
    "CDC, “Screening tests” and “Diagnostic tests”"
  )}<h3 style="margin-top:20px">Compare the reasoning process</h3><ul><li>Did you explain how bleeding beyond menstruation affects your differential?</li><li>Did you distinguish a normal screen from excluding every bleeding disorder?</li><li>Did you identify which specific evidence is still missing?</li><li>What result would change your leading explanation?</li></ul><p>Revise any reasoning entry that missed an important finding or overstated the screening tests. Then choose Continue to practise checking a generated study resource.</p></div>`;
}
const sampleNote =
  "Screening blood tests can be normal in von Willebrand disease. Specific diagnostic tests are needed. aPTT can be normal in mild disease. PT is normal in most affected people.";
function notes() {
  return (
    heading(
      "06 / CHECK AN AI ANSWER",
      "Check before you learn from it",
      ""
    ) +
    teaching(
      "Check a claim before studying from it",
      `<p>A clear, confident reply can still contain an error. Asking “Are you sure?” gives you another AI reply; it does not independently verify the first one. Ask for the source, open it, and find the passage that supports the exact claim.</p>
      <p>When making study materials, give the chatbot a note you are allowed to use and ask it to stay within that source. For example: <b>“Using only this note, make a flashcard. Keep the answer hidden until I attempt it. Identify the sentence supporting the answer.”</b> Compare the result with the original before learning from it.</p>
      <p>First, practise challenging an overstated potassium claim. Then transform the sample note and correct a second error using the linked CDC reference. Check the wording carefully: “can be normal” and “rules out disease” make different claims.</p>`,
      [1, 2, 3]
    ) +
    conversationPractice(`<h2 class="practice-heading">Make and check a study resource</h2><div class="grid2"><div class="panel"><div class="eyebrow">THE SOURCE NOTE</div><h2>Screening is not confirmation</h2><p>${sampleNote}</p>${source(
      CDC,
      "Source: CDC, screening tests, aPTT and PT sections"
    )}<p class="label">Transform the sample note</p><div class="resource-tabs" role="group" aria-label="Study resource">${[
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
    )}<p>Compare your correction with that passage and revise it if needed. Then choose Finish & reflect to apply the same checks to your own study approach.</p></div></div></div>` +
    finish("notes", "reflection"))
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
    "Write a message asking for help with a topic you know. Include your level, what you understand and the specific gap.",
  ],
  [
    "Active learning",
    "Write a message asking the chatbot to quiz you, wait for an attempt, give feedback and revisit an error.",
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
        : "Before seeing the example, try these short tasks using any topic you know. “I am not sure yet” is a valid starting answer. Responses clear on reload."
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
        : '<button class="button" data-go="getting-started">Continue to the guided example ↗</button><button class="text-button" data-go="getting-started">Skip these questions</button>'
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
      )}</div><p>Use your written answers to decide which step you still need to practise.</p></div></div>` +
    (post
      ? `<div class="principle"><span class="star" aria-hidden="true">✳</span><div><p>Use this in your next study session</p><small>Choose one topic, state your gap, ask for an attempt before feedback, and check the answer against your source.</small></div></div>`
      : "")
  );
}
function about() {
  return heading("", "Sources & about", "Open a reference to check the explanation against the original.") +
    `<section class="panel"><h2>Learning with AI</h2><p>For further guidance, start with AACOM’s prompting guide [1] and its guide to evaluating a reply [2].</p>
    <ol class="reference-list">${references.filter((r) => r.url).map((r) => `<li id="reference-${r.id}" value="${r.id}"><p>${link(r.url, r.title)}</p><p>${esc(r.locator)}.</p></li>`).join("")}</ol>
    <p>[8] ${references.find((r) => r.id === 8).title} Slides 14–16, 18–19 and 24. This supplied course lecture informed the renal mechanisms and is not publicly hosted.</p></section>
    <section class="panel"><h2>About the examples</h2><p>The conversations are pre-written teaching examples; a live model may respond differently. Medical content is linked to course and public sources. The module has not had independent faculty review or student testing.</p>
    <p>Only completion flags are saved in your browser. Written exercises clear on reload. No messages are sent to an AI service. Use fictional cases and course material when trying these approaches elsewhere.</p>
    <details><summary>Design evidence</summary><p>The revision draws on ten papers about medical education and online course design. The source passages, their scope and the resulting changes are documented in the <a href="https://github.com/ArvinZaker/flex_ai_education_module/blob/main/README.md#simpler-navigation-and-fuller-teaching" target="_blank" rel="noopener noreferrer">design notes</a>.</p></details></section>`;
}
function saveSession() {
  document
    .querySelectorAll("[data-session]")
    .forEach((el) => (session[el.id] = el.value));
  if ($("#hint-level")) session["hint-level"] = $("#hint-level").value;
}
function render() {
  saveSession();
  clearTimeout(toastTimer);
  $("#toast").textContent = "";
  const previousRoute = route;
  route = location.hash.slice(1) || "overview";
  if (!knownRoutes.includes(route)) route = "overview";
  if (route === "tutor") scenario = 0;
  if (route === "gaps") scenario = 1;
  if (route === "recall") scenario = 2;
  if (route === "notes") scenario = 3;
  updateNav();
  const views = {
    overview,
    baseline: () => assessment(false),
    tutor: () => tutor(false),
    gaps: () => tutor(true),
    recall,
    case: clinical,
    "getting-started": introduction,
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
  if (route === previousRoute) {
    const reply = [...document.querySelectorAll(".tutor-chat")]
      .filter((el) => !el.closest("details:not([open])")).at(-1);
    const focusTarget = reply || $("#main");
    focusTarget.setAttribute("tabindex", "-1");
    focusTarget.focus({ preventScroll: true });
  }
  if (route !== previousRoute) {
    $(".contents").open = false;
    $("#main").focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}
document.addEventListener("input", (e) => {
  if (e.target.dataset.session) session[e.target.id] = e.target.value;
});
document.addEventListener("change", (e) => {
  if (e.target.id === "hint-level") session["hint-level"] = e.target.value;
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
  if (e.target.closest('a[href="#main"]')) {
    e.preventDefault();
    $("#main").focus();
    return;
  }
  if (e.target.closest("#navigation a")) $(".contents").open = false;
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.introChoice !== undefined) {
    introChoice = Number(b.dataset.introChoice);
    introFollow = false;
    introVerified = null;
    render();
    return;
  }
  if (b.dataset.introVerify !== undefined) {
    introVerified = Number(b.dataset.introVerify);
    render();
    return;
  }
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
    case "next-practice":
      session[route + "-practice"] = true;
      render();
      window.scrollTo(0, 0);
      $("#main").focus({ preventScroll: true });
      break;
    case "back-conversation":
      session[route + "-practice"] = false;
      render();
      window.scrollTo(0, 0);
      break;
    case "tree-reset":
      delete treeState[window.SCENARIOS[scenario].id];
      render();
      break;
    case "tree-alternative":
      treeState[window.SCENARIOS[scenario].id].length = 1;
      render();
      break;
    case "intro-follow":
      introFollow = true;
      render();
      break;
    case "reset":
      if (confirm("Clear module progress and all responses in this tab?")) {
        completed = [];
        introChoice = null;
        introFollow = false;
        introVerified = null;
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
render();
