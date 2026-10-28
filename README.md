# Learning With AI

A static learning module for first-year medical students new to chatbots. Students choose prepared messages and see the conversation continue. Kidney physiology supplies the example content; the learning task is deciding what to ask, how to follow up, and how to verify a reply. All conversations are authored scripts. No live model, account, API key, or build step is required.

## GitHub Pages

Publish `main` → `/(root)` in repository Settings → Pages → Deploy from a branch. The expected URL is https://arvinzaker.github.io/flex_ai_education_module/ . Relative asset paths and hash navigation support the repository subpath. `.nojekyll` disables Jekyll processing. [GitHub's static-site instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), “Static site generators,” state: “GitHub Pages publishes any static files that you push to your repository.”

Local preview: `python -m http.server 8000`, then visit http://localhost:8000 . No dependencies need installation.

## Learning path

1. **Your first study chat.** Define prompt, reply and follow-up; choose a first message, request a clarification, and open a supporting source.
2. **Ask for the help you need.** Compare a broad request with a message that gives existing knowledge and a specific gap.
3. **Communicate your gaps.** Ask for a definition, a different format, one missing step, or a check of a misconception.
4. **Active recall.** Ask a chatbot to quiz you and wait for an attempt before giving feedback.
5. **Clinical reasoning.** Apply the interaction to a separate, sourced USMLE sample case while keeping its answer concealed.
6. **Notes and critical evaluation.** Transform a source note and correct an intentionally incorrect statement against the source.

The four study-conversation topics are starting a chat, fixing an unclear explanation, requesting a quiz, and challenging an overstated reply. Every branch is a message a student could send to a chatbot. Each topic has two opening choices, three follow-up choices, and two subsequent messages, giving 48 scripted paths. The final reply concludes the example; Previous turns preserves the earlier exchange. The final topic deliberately contains an incorrect absolute claim and labels the exercise accordingly.

Opening and closing exercises cover the same five requested skill domains. They are ungraded reflection; no automated medical grading or validated learning score is included. The six-step route includes a new introduction in place of the removed voice activity. Its completion time has not been measured, so the previous 40–50 minute claim is no longer displayed.

## References and claim support

Named, numbered references and relevant sections are displayed in the module. Education sources support interaction guidance. Medical sources support renal and case facts. The example conversations are authored illustrations, not recorded model runs or empirical A/B results. No claim of improved learning, model compliance, or faculty approval is made.

### Guidance on using chatbots for learning

- **AACOM. Interacting with AI: Prompts & Process. May 27, 2026.** [Public guide](https://www.aacom.org/medical-education/ai-hub/ai-foundations/interacting-with-ai). Inspected “Introduction to Contextual Prompting,” the four-part practical framework and “Prompt Iteration.” Verified quotation: “What do I already know?” supports beginning with existing understanding. “Specify the output format or role” supports asking for a particular response. These are guidance for medical educators adapted into student examples; they do not validate this module or guarantee model behavior. The guide’s broader claims about chain-of-thought or patient safety are not adopted here.
- **AACOM. Evaluating AI Output: Applying Critical Thinking. June 3, 2026.** [Public guide](https://www.aacom.org/medical-education/ai-hub/ai-foundations/evaluating-ai-output). Inspected the introduction, evaluation criteria and example critique. Verified quotation: “their outputs are not inherently accurate, complete or appropriate” supports independently checking a fluent response. The module does not implement the source's RACCCA scoring rubric.
- **AACOM. Responsible Use of AI in Medical Education. April 20, 2026.** [Public guide](https://www.aacom.org/medical-education/ai-hub/ai-foundations/module-3). Inspected institutional policy, data stewardship and Smart Use Tips. Verified quotation: “Ask AI to provide sources and verify them independently” supports opening and checking references rather than accepting a citation as proof. The module uses fictional/course content and tells learners to follow their institution’s rules.
- **Pashler H et al. Organizing Instruction and Study to Improve Student Learning. IES, 2007.** [Practice guide recommendations](https://ies.ed.gov/ncee/wwc/PracticeGuide/1), recommendations 5b and 7. Verified short quotations: “Use quizzes to re-expose students to key content” and “Ask deep explanatory questions.” Supports retrieval and explanatory exercises in general, not this specific chatbot workflow or its duration.

### Medical content

- **NIH Office of Dietary Supplements. Potassium: Fact Sheet for Health Professionals. Updated June 2, 2022.** [Source](https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/), Interactions with Medications → ACE inhibitors and ARBs. Verified quotation: “These medications reduce urinary potassium excretion, which can lead to hyperkalemia.” Supports the drug-excretion direction. The next paragraph identifies impaired kidney function as an additional risk.
- **Lewis JL III. Overview of Disorders of Potassium Concentration. Merck Manual Professional Edition. Updated December 2025.** [Source](https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/overview-of-disorders-of-potassium-concentration), Potassium shifts and Potassium metabolism. Verified quotation: “Insulin moves potassium into cells” supports redistribution. The metabolism section supports increased distal sodium delivery promoting potassium excretion. It does not alone support every claim about flow or the full volume-depletion interaction.
- **Betts JG et al. Anatomy and Physiology 2e. OpenStax, 2022. Section 25.8.** [Source](https://openstax.org/books/anatomy-and-physiology-2e/pages/25-8-endocrine-regulation-of-kidney-function), Renin–Angiotensin–Aldosterone. Inspected relevant paragraphs with surrounding context. Verified short quotation: “promoting its excretion” refers to potassium in the aldosterone paragraph. Supports the angiotensin II–aldosterone–potassium connection. No source figures or extended passages are reproduced.
- **Poinen K. Potassium Disorders. UBC MEDD Week 49 course lecture, undated.** User-supplied local file: `/home/arvin/2TBstorage/University/UBC MEDD lecture pdf/Y2 Term 1 Week 49/049_-_4.2_potassium_disorders_-_dr._krishna_poinen.pdf`. Relevant potassium-handling text and slides 14 and 16 rendered and inspected. Slides 14–16, 18–19 and 24 support the principal-cell transporter positions, electrical gradient, distal flow/delivery, and post-meal response. Verified short quotation, slide 16: “Lumen more negative therefore favours K+ secretion into lumen.” The course lecture supplies medical facts, not instructions for how to use AI. The review-notes folder was inspected but did not supply the detailed renal content used. Source SHA-256: `2d7ba1455a9394a71f4dd6545de95b38ad59b738ae25d376da6311ff33ad6b8c`. Source files remain private and unchanged.
- **FSMB/NBME. USMLE Step 1 Sample Test Questions. February 2021.** [Source](https://www.usmle.org/pdfs/step-1/samples_step1.pdf), full selected item 62 and lab table, printed p. 29; answer key, printed p. 49. Verified key quotation: “62. E”. The selected option is von Willebrand disease. The source supports the exam answer, not a real clinical diagnosis or an unsupported “hard” rating. The module condenses the item and does not bundle the booklet.
- **CDC. Diagnosing von Willebrand Disease. May 15, 2024.** [Source](https://www.cdc.gov/von-willebrand/diagnosis/), Screening tests and Diagnostic tests. Verified quotation: “Screening tests are often normal in VWD, and more specific tests are required.” Supports the debrief, source note, and correction of the intentionally incorrect screening claim.

References are attached to the claims they support. Where public sources cover only part of an explanation, the supplied course source is identified separately. NCBI/PMC full-text retrieval for an additional physiology review was blocked by CAPTCHA; Europe PMC/publisher alternatives returned access errors. Those snippets were not used as evidence.

## Three student-perspective review rounds

These are agent walkthroughs from the perspective of a first-year student, not feedback from enrolled students.

1. **Can I start without knowing chatbots?** The previous page jumped into a renal playground without explaining the interaction. Added prompt/reply/follow-up definitions, a single concrete study need, a guided first exchange, a plain-language follow-up, and an opening source-check task. Wording now addresses a first-year learner. Browser walkthrough covers both initial messages and both source-check choices.
2. **Do my choices teach me how to use the chatbot?** The previous trees became kidney quizzes. Rewrote all four trees so choices are messages requesting clarification, targeted explanations, attempts, hints, quizzes or evidence. Each continuation answers that specific message. The final reply includes a short explanation of the learning behavior. Earlier turns remain accessible. The case and notes pages now show how to ask for those activities in a real study chat. Browser walkthrough covers all 48 paths and the retained quiz/case gates.
3. **Can I verify and transfer what I learned?** Bare source labels and private lecture references were insufficient for an external learner. Added numbered, named references with public URLs, relevant sections and an explanation of their scope. Added a References & help navigation item, an explicit public-versus-course-source distinction, and a source-opening task. Removed all active speech controls/code and the obsolete duration claim. Check the correction source, opening/closing comparison, mobile layouts and progress persistence before delivery.

## Privacy and implementation

Only completed lesson IDs are saved to local storage under `learning-with-ai-progress-v1`. Written exercises remain in this tab and clear on reload. Reset clears both. There are no live AI calls, analytics, microphone controls or audio features. GitHub handles normal static hosting traffic.

`index.html` loads `styles.css`, `scenarios.js` and `app.js`. The removed voice implementation is preserved only under `archive/2026-10-28_015844/`; source/copy SHA-256 equality was verified before removal, with `SHA256SUMS` retained. The archive is not referenced by the app. Local `REQUIREMENTS.md` tracks the requests and is ignored by Git.

Review used the installed `strict-agent` and `review-scientific-manuscript` guidance. The requested `review-agent` skill was not present in the installed skill folders. No independent faculty review, student usability study, or formal accessibility audit has been completed.

### Final verification

All three walkthroughs passed in headless Chromium. Round 1 covered the starting route, opening responses, both guided-example prompt choices, follow-up and source-check choices. Round 2 covered all 48 conversation paths, accessible history, quiz feedback gates, case concealment/finish checks and case-to-notes navigation. Round 3 covered nine public references, the private-source disclosure, CDC correction link, before/after response retention, no progress bars, one completion counter, no speech route, and six representative views at 375, 768 and 1440 pixels without horizontal overflow. No JavaScript page errors occurred.

Visual review identified an omitted visible follow-up and an unnecessarily long initial exchange. The selected follow-up now stays beside its reply and earlier turns collapse under Earlier exchange. A stale notification from a previous activity is cleared when the view changes. These fixes passed focused checks, and final desktop/mobile screenshots were inspected. Chromium frame/screenshot waits stalled during an intermediate regression attempt; the final interaction checks passed with GPU rendering disabled, and final screenshots were captured successfully. This does not replace a real student usability study.

Syntax checks: `node --check app.js`, `node --check scenarios.js`. Whitespace check: `git diff --check`. Archived voice-source hashes were rechecked with `sha256sum -c SHA256SUMS` (all three matched).

## Teaching text and feedback revision

Each of the six activities now begins with a short explanation of what to type and how to use the response. The opening explains the message box and follow-up messages. Later explanations cover specifying a task, naming a gap, requesting one question at a time, setting case boundaries and checking generated notes. These passages use the already inspected AACOM/IES guidance above; no new efficacy claims are introduced. The prose was reviewed using strict-agent and write-scientific-manuscripts for direct wording, repetition, evidence and scope. This is learner-facing prose, so the manuscript skill's specialist register does not apply.

Prompt choices have no A/B, broad/specific, or quality labels. Conversation replies are labelled Chatbot. Separate module coaching appears after an opening A choice or a flagged suboptimal verification choice, and remains absent after the other choices. Generic completion takeaways were removed. Citations remain adjacent as compact named links; full reference details and section locators remain on References & help.

Browser verification passed all 48 paths, neutral choice labels, absence of premature coaching, coaching after each designated suboptimal choice, no coaching after useful choices, six teaching explanations, one current chatbot reply and mobile fit. Desktop and mobile screenshots were inspected. Syntax and whitespace checks passed.
