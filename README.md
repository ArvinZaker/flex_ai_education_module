# Learning With AI: From Effective Prompting to Clinical Reasoning

A static, interactive module for first- and second-year medical students. Target lesson duration: 40–50 minutes, plus optional starting and closing reflection. No build step, account, API key, or live model connection.

## Publish on GitHub Pages

1. Push these files to `main` in `ArvinZaker/flex_ai_education_module`.
2. Open repository **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Open the URL GitHub reports. For this repository, the expected project URL is `https://arvinzaker.github.io/flex_ai_education_module/`.

The site uses relative asset paths and hash navigation, so it works under the repository subpath. The root `.nojekyll` file disables Jekyll processing. There are no package dependencies to install. GitHub documents the entry-file and static hosting requirements in [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), “Creating your site” and “Static site generators.” Verified technical quotation: “GitHub Pages publishes any static files that you push to your repository.” This supports the static deployment approach, not educational validity.

For local preview, run `python -m http.server 8000` in this directory, then visit `http://localhost:8000`. Opening `index.html` directly works for the lessons; browser speech features may require a secure context or localhost.

## What is implemented

- Six linked lesson pages and browser-local completion tracking.
- Four fixed A/B prompt-response comparisons, drafted by one Luna/low content task. These are illustrative authored examples, not recorded model calls or empirical A/B test results.
- Four conversation trees with fixed opening prompts, three next-prompt choices and a continued follow-up turn. Students cannot edit playground prompts. Responses are fully pre-generated.
- Three sequential practice questions that move from recognition to application and evaluation, with attempts before feedback and revisiting missed items. Complexity labels describe task structure, not calibrated difficulty.
- A staged clinical reasoning workspace adapted from a freely available official USMLE sample item. History, examination and investigations are revealed on request. Three support levels and explicit answer reveal are available. Free-text reasoning is not automatically graded.
- Optional browser dictation and read-aloud, editable transcript, and a complete text alternative. This is not a live voice AI conversation.
- Fixed study-guide, flashcard, concept-map and practice-question transformations of a source-backed sample note, with an intentionally incorrect claim to correct.
- Comparable opening and closing exercises in the five requested skill domains. These are reflective activities without a validated score or pass threshold.

## Content and evidence review

Reviewed against the passages below on 2026-10-28 using `review-scientific-manuscript` and `strict-agent` in the main session. No manuscript or student-results dataset exists; this was a review of module content, clinical accuracy, source alignment and inference limits. The requested `review-agent` skill was not present in the installed skill folders searched and could not be run. This review is not faculty review, endorsement, psychometric validation, or a measured learning-outcomes evaluation.

### Clinical case

[Official USMLE Step 1 sample questions](https://www.usmle.org/pdfs/step-1/samples_step1.pdf), booklet updated February 2021, item 62, printed p. 29 (PDF page 30), and answer key, printed p. 49 (PDF page 50). The full selected item, lab table, choices and matching key were inspected. No claim is made to have reviewed all unrelated booklet questions. The stem is condensed into a short adaptation; omitted findings are not treated as absent. No new clinical findings are invented. The original item is copyrighted by FSMB/NBME; it is linked, not bundled or reproduced in full. This module is not affiliated with USMLE.

Verified short quotation from the key: “62. E”. Item 62 labels E as von Willebrand disease. This supports the exam answer only, not confirmation of a real patient's diagnosis or a claim that this question has a high difficulty rating.

### Clinical explanation and critical-appraisal exercise

[CDC, Diagnosing von Willebrand Disease](https://www.cdc.gov/von-willebrand/diagnosis/), May 15, 2024. Inspected the full short page, including screening and diagnostic test sections. Verified quotation: “Screening tests are often normal in VWD, and more specific tests are required.” Locator: Screening tests, introductory paragraph. This supports challenging the intentional error that a normal aPTT rules out disease. The aPTT subsection specifically describes normal results in mild disease. The diagnostic-tests list supports mentioning VWF antigen/activity and factor VIII activity. The CBC subsection supports low hemoglobin after heavy bleeding. These passages do not establish the module's effectiveness.

### Retrieval and explanatory questions

[IES What Works Clearinghouse, Organizing Instruction and Study to Improve Student Learning](https://ies.ed.gov/ncee/wwc/PracticeGuide/1), September 2007, recommendation 5b and recommendation 7 with their expanded descriptions. Verified quotations: “Use quizzes to re-expose students to key content.” and “Ask deep explanatory questions.” These support the general use of retrieval exercises and explanatory prompts. The overview describes applicability to content-heavy subjects and includes postsecondary grades. Applying these ideas to this particular AI module is a design translation, not direct trial evidence. The source does not validate our item count, 40–50 minute target, task ordering, hint scripts, assessments, or generated comparisons. Those implement the user's proposed module and are not scientific acceptance rules.

### Human agency and AI education

[UNESCO, Guidance for generative AI in education and research, publication overview](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research), September 7, 2023, updated January 16, 2026, “Towards a human-centered approach.” Verified short quotation: “ethical validation and pedagogical design processes”. The surrounding paragraph discusses human agency, age-appropriate use and privacy. This supports the general design emphasis only. The publication overview, not the entire underlying report, was inspected and is the source cited in the module. It does not prove that our prompts improve reasoning.

### Browser speech

[MDN, SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), introductory compatibility warning, server-processing note, `lang`, `start`, `stop`, `abort`, `result` and `error` entries; [Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API), speech-recognition and speech-synthesis sections. Verified quotation: “Your audio is sent to a web service for recognition processing”. This supports the notice before optional dictation. Browser support is detected; text remains available. Speech defaults are browser implementation behavior, not scientific settings.

### Consequential review decisions

- Confirmed inference risk: illustrative A/B examples could be mistaken for measured results. They are labelled as authored fixed examples throughout, and no efficacy percentages, experiment claims or model-compliance promises are made.
- Confirmed scope limit: a sample answer key establishes the exam answer, not a clinical diagnosis. The debrief distinguishes these and cites CDC for diagnostic-test limitations.
- Confirmed provenance limit: no faculty review is available. The module identifies its source review and does not describe the content as faculty-approved.
- Assessment limitation: the five-domain exercises reflect the user’s objectives. No custom automated scoring, grading threshold, medical accuracy classifier, or validated improvement claim is introduced.
- Timing limitation: the supplied lower bounds sum to `5+5+7+10+6+7=40`; upper bounds sum to `7+7+8+12+8+8=50`. The time is a target, not an observed completion result. Optional opening/closing exercises add time.
- Difficulty limitation: the free question is not assigned an unsupported “hard” rating. Clinical reasoning is emphasized through explanation and uncertainty rather than claiming measured item difficulty.

## Privacy and data behavior

`app.js` stores only completed lesson IDs under `learning-with-ai-progress-v1`. All free-text responses and transcripts remain in the current tab's memory and are cleared on reload. Reset clears completion and in-memory responses. No analytics, remote fonts, cookies, app-server requests or live AI calls are included. Browser dictation is optional and may send audio to the browser provider's recognition service; read-aloud processing depends on the browser/selected voice. The module does not save an audio file. Use only fictional or course material. Hosting traffic follows the host's policies.

## Maintained files

`index.html` loads `styles.css`, `scenarios.js`, and `app.js` using relative paths. `assets/favicon.svg` is a code-native decorative mark. `scenarios.js` contains the four fixed comparisons. `app.js` contains navigation, activities, source links, session-only responses, conversation trees, progress, and speech controls. This README is the project entrypoint and source-review record. Local task requirements are kept in the ignored `REQUIREMENTS.md`.

## Local verification

Browser checks passed in headless Chromium on 2026-10-28:

- All 10 views render without JavaScript errors.
- All 24 conversation paths (4 scenarios × 2 opening prompts × 3 next-prompt options) reach the continued follow-up. The playground contains no editable prompt input.
- Quiz feedback stays hidden before an attempt; missed-item revisiting works.
- Clinical findings reveal on request, support modes respond, incomplete reasoning cannot finish, and completed entries open the debrief.
- All four note resources render; practice answers and the correction require attempts before comparison.
- Written responses remain across in-tab navigation, are escaped when redisplayed, and clear on reload. Completion flags persist; written content is not saved to local storage.
- Representative pages have no horizontal overflow at 375, 768 and 1440 pixels. Desktop, mobile and conversation screenshots were visually inspected.
- Requests during these checks were only to local static files. Microphone capture and audible playback were not tested. No independent accessibility audit, student trial, or live Pages deployment check is implied.

Syntax checks: `node --check app.js` and `node --check scenarios.js`. Whitespace check: `git diff --check`.
