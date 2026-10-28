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
  return `<section class="lesson-explanation"><h2>${title}</h2><p>${text}</p>${evidence(
    ids
  )}</section>`;
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
  return `<div class="page-heading"><div class="step-label">${step}</div><h1>${title}</h1>${
    description ? `<p class="lede">${description}</p>` : ""
  }</div>`;
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
    ["about", "References & help"],
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
  return (
    heading(
      "A GUIDE FOR MEDICAL STUDENTS NEW TO AI",
      "How to study with a chatbot",
      "Learn what to ask, how to respond, and how to check an answer. No previous chatbot experience is needed."
    ) +
    `<section class="panel"><h2>Your starting situation</h2><p>Imagine you have finished a kidney lecture. An ACE inhibitor is a medicine that reduces a hormone signal called angiotensin II. You want help connecting that change to potassium in the blood. We will use that learning gap to practise a study conversation.</p><p>A <b>prompt</b> is the message you send. The chatbot’s <b>reply</b> is its answer. A <b>follow-up</b> is your next message when you need a clearer explanation, a question, or evidence.</p><div class="actions"><button class="button" data-go="baseline">Start with a short attempt ↗</button><button class="text-button" data-go="getting-started">Go straight to the guided example</button></div><p class="hint">You will choose from prepared messages. All replies here are scripted; no account or live AI connection is needed.</p>${evidence(
      [1, 2]
    )}</section>
 <details><summary>See the learning path</summary><div class="cards">${lessons
   .map(
     (l) =>
       `<a class="lesson-card" href="#${l[0]}"><span class="card-icon" aria-hidden="true">${l[3]}</span><div><h3>${l[1]}</h3><p>${l[4]}</p></div><span aria-hidden="true">↗</span></a>`
   )
   .join("")}</div></details>`
  );
}
function introduction() {
  return (
    heading(
      "01 / YOUR FIRST STUDY CHAT",
      "Start with one learning need",
      "Read the situation, choose a message, then follow the conversation."
    ) +
    teaching(
      "How a study chat works",
      "Open a chatbot permitted by your course. Type a message in its message box and send it. Read the reply, then use the same conversation to ask about a missing step or request a different explanation. Start with your level, what you know, and one learning goal. Use fictional examples and keep patient information out of the chat.",
      [1, 3]
    ) +
    `<section class="panel"><p><b>Your goal:</b> understand why an ACE inhibitor can raise blood potassium. You do not need to know the answer to practise the conversation.</p>
 ${
   introChoice === null
     ? `<div class="tree-options"><span class="label">What would you send?</span><button class="tree-choice" data-intro-choice="0">Explain ACE inhibitors.</button><button class="tree-choice" data-intro-choice="1">I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I do not understand the potassium effect. Explain that connection using plain language.</button></div>`
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
         introVerified !== 0
           ? ""
           : `<div class="feedback" role="status"><p>${
               introVerified
                 ? "Yes. A link is a starting point. Check that it opens, is relevant, and actually supports the statement."
                 : "A citation can be incorrect or irrelevant. Open it and compare the relevant passage before relying on the reply."
             }</p>${evidence([2, 3])}</div>`
       }`
 }
 <button class="text-button" data-intro-choice="${
   introChoice === 0 ? 1 : 0
 }">Try the other first message</button>`
 }
 </section><details><summary>Take this approach to a real study chat</summary><ol><li>Choose one course topic and think about what you already understand.</li><li>Send your level, learning gap, and the kind of help you want.</li><li>Read the reply and ask a focused follow-up.</li><li>Check factual claims against the original course source or a reputable reference.</li><li>Try explaining the idea yourself, or ask for a question that waits for your answer.</li></ol>${evidence(
   [1, 2, 4]
 )}</details>` +
    finish("getting-started", "tutor")
  );
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
  const advice = showOpeningHelp
    ? s.openingAdvice
    : showFinalHelp
    ? endings[next].answers[state[2] - 1].advice
    : "";

  return `<section class="panel" style="margin-top:25px"><div class="section-head"><div><h2>${
    state[2]
      ? "Conversation"
      : selected === undefined
      ? "Choose a prompt"
      : "Choose your response"
  }</h2></div><button class="text-button" id="tree-reset">Restart conversation</button></div>${
    s.containsError
      ? '<p class="notice warning">This exercise includes a deliberately overstated reply for you to challenge.</p>'
      : ""
  }<div class="conversation"><p class="scenario-context">${esc(s.topic)}</p>${
    selected === undefined
      ? `<div class="tree-options"><span class="label">Choose what to send</span><button class="tree-choice" data-tree-start="A">${esc(
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
  }</div>${advice ? coaching(advice) : ""}${evidence(s.references)}</section>`;
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
      gaps ? "Tell it where you got lost" : "Give the chatbot a clear task",
      gaps
        ? "Read the reply and identify the first step you cannot explain. Send that gap as your next message: “I understand sodium entry, but not how it affects potassium. Explain that link.” You can ask for a definition, a shorter explanation, or an example without restarting the whole topic."
        : "Before sending a question, decide what you want to do: understand a mechanism, practise recall, or work through a case. State your training level and existing knowledge, then ask for that activity. If you provide course material, ask the chatbot to use it and flag anything it cannot support.",
      [1]
    ) +
    `<div class="chips" role="group" aria-label="Choose a conversation scenario">${window.SCENARIOS.map(
      (x, i) =>
        `<button class="chip" data-scenario="${i}" aria-pressed="${
          i === scenario
        }">${x.title}</button>`
    ).join("")}</div>` +
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
      "04 / ASK THE CHATBOT TO QUIZ YOU",
      "Active recall",
      "After an explanation, ask the chatbot to test you. Specify one question at a time and feedback after your attempt. Practise choosing those instructions below."
    ) +
    teaching(
      "Ask for an attempt before the answer",
      "In the same chat, send: “Ask me one question about this topic and wait for my answer. Then explain any error and ask another question on the point I missed.” Try answering from memory. Check the feedback against your course source before using it to revise.",
      [1, 4]
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
    }</div><details class="panel soft"><summary>Try this with your course notes</summary><p>Close a short section of your notes. Explain its main idea from memory. Reopen the source and check what you omitted or misstated. Ask the chatbot to wait for that attempt before giving an explanation.</p>${source(
      IES,
      "IES, recommendations 5b and 7"
    )}</details>` +
    evidence([1, 4]) +
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
      "05 / REASON THROUGH A CASE",
      "Clinical reasoning",
      "Next, use a chatbot as a reasoning coach: ask it to hold back the answer while you gather evidence. This separate USMLE sample case lets you practise that approach."
    ) +
    teaching(
      "Set the rules before starting a case",
      "Tell the chatbot the case is fictional. Ask it to reveal findings only when requested and hold back the diagnosis. Explain your own possibilities first, ask for the finding that would distinguish them, then revise your view when new information appears. The example below lets you practise those steps.",
      [1]
    ) +
    `<div class="case-layout"><section><div class="panel"><div class="case-stage">SIMULATED EXAM CASE / INITIAL PRESENTATION</div><h2>The case</h2><p>A 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding.</p><p class="hint">List possible explanations (your differential), then request findings. You may use the hints if this clinical content is new.</p><div class="case-tabs">${Object.entries(
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
    `<details><summary>How would I ask this in a real study chat?</summary><p>“Use this fictional case for learning. Ask me for an initial differential, meaning possible explanations. Let me request findings. Ask why each finding matters. Do not reveal the diagnosis until I finish or ask.”</p>${evidence(
      [1, 9]
    )}</details>` +
    finish("case", "notes")
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
const sampleNote =
  "Screening blood tests can be normal in von Willebrand disease. Specific diagnostic tests are needed. aPTT can be normal in mild disease. PT is normal in most affected people.";
function notes() {
  return (
    heading(
      "06 / CHECK AN AI ANSWER",
      "Notes & critical evaluation",
      "Finally, ask for a study resource from a source note. Compare the resource with that source, then challenge an incorrect statement."
    ) +
    teaching(
      "Keep the original note beside the result",
      "Provide a short note you are allowed to use. Ask for one study format, such as flashcards, and require each answer to match a passage in that note. Read both side by side. If the chatbot adds a claim or citation, open the source and check that it actually supports the claim.",
      [1, 2, 3]
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
    `<details><summary>How would I ask this in a real study chat?</summary><p>“Using only the source note I provide, make a flashcard. Keep the answer separate so I can attempt it first. Tell me which sentence in the note supports the answer.”</p>${evidence(
      [1, 2, 4]
    )}</details>` +
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
      )}</div><p>These are the module’s learning goals, not a validated assessment instrument. Progress records activity completion only.</p></div></div>` +
    (post
      ? `<div class="principle"><span class="star" aria-hidden="true">✳</span><div><p>Explain. Question. Reason. Verify.</p><small>Take a prompt you selected here into your next study session, using fictional or course content.</small></div></div>`
      : "")
  );
}
function about() {
  return (
    heading(
      "REFERENCES & HELP",
      "Read and check the sources",
      "Education guidance supports how to approach the conversation. Physiology sources support the medical explanations. The example chats are authored teaching scripts."
    ) +
    `<section class="panel"><h2>External resources</h2><p>Start with AACOM’s prompting guide [1], then its guide to evaluating an answer [2]. These resources were written for medical educators; this module adapts selected guidance for students.</p><ol class="reference-list">${references
      .filter((r) => r.url)
      .map(
        (r) =>
          `<li id="reference-${r.id}" value="${r.id}"><p>${link(
            r.url,
            r.title
          )}</p><p><b>Relevant section:</b> ${esc(r.locator)}.</p><p>${esc(
            r.supports
          )}</p></li>`
      )
      .join("")}</ol><h2>Supplied course source</h2><p>[8] ${
      references.find((r) => r.id === 8).title
    } Slides 14–16, 18–19 and 24. This source informed the renal detail but is not publicly hosted. It is not a substitute for the linked public references.</p></section>
 <section class="panel"><h2>What these examples can show</h2><p>The fixed conversations demonstrate ways to ask, follow up, attempt an answer, and check evidence. They are not recorded model runs or a study of learning effectiveness. A live chatbot may respond differently. No faculty approval or validated assessment is claimed.</p><h2>Your information</h2><p>Use only fictional cases or course content. Only lesson-completion flags are saved in this browser. Written exercises stay in this tab and clear on reload. No live AI calls, analytics, microphone or audio controls are included. Use Reset to clear progress.</p><p>The pathway has a beginner introduction and five study activities. Completion time has not been measured.</p></section>`
  );
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
  if (route !== previousRoute && route === "tutor") scenario = 0;
  if (route !== previousRoute && route === "gaps") scenario = 1;
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
  $("#main").focus({ preventScroll: true });
  window.scrollTo(0, 0);
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
