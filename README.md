# Learning with AI

A static, four-module learning course adapted from the supplied **AI Modules** Google Doc. The top-level tabs match its four native tabs:

| Module | Scenes | Decisions |
| --- | ---: | ---: |
| AI in Education | 5 | 6 |
| AI Scribes | 6 | 6 |
| AI for Research | 7 | 8 |
| AI Ethics, Privacy, and Health Equity | 7 | 8 |

The site retains the existing visual style and uses scripted stories, neutral multiple-choice messages, immediate Correct/Incorrect feedback and a Continue control after every answer. The scribe note review uses five checkboxes. Each module tracks completed scenes separately. Students can switch modules at any point. Time estimates come from the outline and have not been measured.

Live site: https://arvinzaker.github.io/flex_ai_education_module/ . GitHub Pages serves `main` from the repository root; `.nojekyll` and relative assets support the repository subpath. No build step, backend, accounts, API keys or dependency installation is needed. Preview locally with `python -m http.server 8000`.

## Source and offline copy

Source: [AI Modules](https://docs.google.com/document/d/1RiM3ESKn9kHTSzPT4lZvKlXfSxUhvb2NR19EZBhnr5o/edit), read November 8, 2026. All four native tabs, their scene scripts, decisions, feedback, tables, implementation notes and reference lists were inspected. Their native tab IDs and document revision are retained locally.

The complete original Word export is `sources/friend-module-2026-11-08.docx`. A readable text copy, structured paragraph/table copy, metadata and SHA-256 manifest use the same filename stem. The Word export passed ZIP integrity checks, contains all four module titles and four tables, and preserves the entire source document. These local planning files are ignored by Git and are not published with the site. No Google Doc content, comments, formatting or metadata was changed.

The source has two incomplete bibliography entries: the Endocrine Society entry says “2453 onward”; the Carey entry omits the beginning of the page range. The website uses concise source titles with the original links. Completing those entries in the Google Doc is a suggested editorial change, not a change performed here. The learning conversations are clearly labelled as scripted AI output.

## Archive and implementation

Before editing the active implementation, all 11 tracked active files were copied into `archive/2026-11-08_134911/` with source/copy SHA-256 equality verified. The snapshot was committed as `6d286ca` before the four-module UI changes. It includes the original app, assets, references, all 19 unchanged Luna recordings, their retained JSON and the runnable HTML quiz. Earlier archives remain unchanged.

`scenarios.js` contains the new structured module content, source tab identifiers, scene context, choices, answer keys, feedback and references. `app.js` handles navigation and interaction; `styles.css` supplies the responsive layout. `index.html` loads only the current content and interface. Previous recorded-response files remain preserved but are not loaded by the new course. The new scripted examples are not represented as recorded Luna runs.

The four tabs expose selected state and support Left/Right, Home and End keys. On phones, all four remain visible in a two-column layout. The note review compares the full fictional encounter with its draft, identifies four errors and distinguishes the accurately recorded home blood pressure. The research scene includes its illustrative R code and, after an attempt, the incorrect and logarithmic confidence-limit calculations. The ethics scenes preserve the almost-four-hour referral journey and fictional 400/60/24/36 dashboard, including 24 / 60 = 40% completion.

Only completed scene IDs persist under `learning-with-ai-four-modules-v1`. Choices stay in the tab and clear on reload. Reset applies to the selected module. There are no live AI calls, microphone features, analytics, uploads, editable patient-information fields or third-party runtime requests. GitHub handles normal static hosting traffic.

## Source checks and limits

The course is an educational draft adapted from the supplied scripts. It has not undergone faculty clinical review or a medical-student usability study. Browser checks verify software behaviour, not clinical validation. Numerical teaching datasets and patient encounters are fictional except where a published study is explicitly named. References remain linked beside the relevant modules and in their consolidated source views.

Relevant passages inspected for the adaptation:

- [UBC MDUP Gen AI Guideline](https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Generative-Artificial-Intelligence-Gen-AI-Guideline-1.pdf), January 19, 2026, p. 2, section 4: “should not be used independently in Years 1–3” and “may be used only in exceptional circumstances”. Supports the scribe module's year-specific distinction; the surrounding passage specifies educational-lead approval, preceptor agreement, patient consent and platform requirements. The policy panel comes from the supplied scribe script.
- [UBC Clinical Documentation Guideline](https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Large-Language-Models-LLMs-in-Clinical-Documentation-Guideline-1.pdf), January 19, 2026, p. 1: “Students must independently generate all written clinical documentation.” Appendix A explicitly includes grammar, structure and clarity editing among prohibited clinical-note uses. Supports the source script's distinction between observing an approved scribe workflow and using a general-purpose LLM to edit a student note.
- [Endocrine Society official primary aldosteronism guidance](https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2), Essential Points and recommendations 1–3 with technical remarks: “in more severe forms, hypokalemia”; “low potassium may lead to a falsely low aldosterone.” Supports the normal-potassium correction and the distinction between a clue and the diagnosis. The broader screening recommendation is conditional, with contextual feasibility and interpretation considerations; the module does not adopt a numeric screening cutoff.
- [Cochrane Handbook, chapter 6](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06), §§6.1.2.1, 6.3.1–6.3.2 and 6.8: “Analyses of ratio measures are performed on the natural log scale.” Supports the log-hazard-ratio teaching example. The 95% normal-approximation confidence-limit calculation is illustrative, taken from the supplied script; no meta-analysis is run or new pooling decision adopted. Statistical settings must be reviewed for a real dataset.
- [Abràmoff et al. pivotal trial](https://pmc.ncbi.nlm.nih.gov/articles/PMC6550188/), Results, Diagnostic accuracy, Table 2 and its explanatory text. Verified short quotation: “Sensitivity 87.2%” and “Specificity 90.7%”. These are study-specific estimates from the analyzable sample and prespecified logistic-regression procedure, not performance guarantees for the hypothetical BC system. The surrounding insufficient-image-quality results were also inspected. This was a targeted result check, not a claim to have read the whole paper and supplements.
- [ICMJE, Use of Artificial Intelligence in Publishing](https://www.icmje.org/recommendations/browse/artificial-intelligence/), general principles: “Authors should not list or cite AI and AI-assisted technologies as an author” (line-break normalization). Supports the authorship decision; the adjacent principles support transparency and human review. The example disclosure must match the actual tools and work performed.
- [Canadian privacy regulators' joint resolution](https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20260915_aihealth), September 15, 2026, Context and consent recommendations. The text identifies re-identification, nonrepresentative input data and oversight concerns, and calls for “clear and meaningful communications” when consent is required. Supports the privacy/equity examples without asserting a particular vendor's storage or training practices.
- [Health Canada's National Strategy for Eye Care](https://www.canada.ca/en/health-canada/services/publications/health-system-services/national-strategy-eye-care.html), June 4, 2026, Executive Summary, State of eye care: “travel distances, and affordability challenges.” Supports the access-barrier discussion; the four-hour trip and program numbers remain fictional.

Publisher access blocked retrieval of the full EMPEROR-Preserved article and the CPSBC AI guidance during this pass. Their source links remain available for further clinical review. The research extraction example is retained as a scripted teaching example from the supplied outline; no claim of a completed full-paper review is made. The UI, offline source preservation and publication do not depend on completing those external reviews.

## Verification

The four-module browser walkthrough passed all 129 answer outcomes: 97 single-choice outcomes and all 32 combinations in the five-checkbox note review. It also completed each module with an initial incorrect choice, verified Continue after every answer, all 25 scene completion flags, independent progress, answer clearing on reload, keyboard tab navigation and unknown-route fallback.

Twenty-seven representative views passed at 375, 768 and 1440 pixels with no page overflow or JavaScript errors. All four tabs remained visible. The code viewer, formula comparison, source panels, fictional travel journey and referral denominator were checked. Screenshots of the desktop tabs, note review, mobile ethics scene and mobile code viewer were inspected. Runtime requests stayed on the local static site. These are developer checks, not a formal accessibility audit or an actual student study.

Pre-publication checks found and corrected keyboard focus being overwritten during route rendering, missing empty follow-up fields in four multi-question scenes, and an early return hiding the code viewer. The first attempted text replacement for the code viewer did not apply; an exact patch was then saved and the viewer was checked directly before the passing full walkthrough. None of those drafts was published.

Syntax and whitespace checks passed. Archive and offline-copy hashes were checked separately. The full planning document remains local and ignored by Git.

## Presentation check against the supplied design

A later comparison with the source instructions found that the initial four-tab adaptation matched the topics and decisions but hid several core story elements inside expanders. The main flow now shows Alex's and patients' source dialogue, the education module's organized table/mechanism/corrected reply, the research PICO framework with supervisor decisions, and the original-versus-edited writing comparison. The formula correction follows the answer explanation.

The ethics module now shows the initial screening journey, positive and ungradable screening-result cards, and a qualitative comparison based on the source's observation about older patients with cataracts. The outline supplies no numeric subgroup performance or access rates; the display identifies those as missing instead of fabricating a comparison dataset. The later four-hour referral barrier and fictional program dashboard remain in place.

The saved presentation changes passed all 129 existing answer outcomes and 27 responsive views, plus focused checks of the requested visible examples and five additional phone-width views. Writing, conversation and equity screenshots were inspected. These corrections improve alignment with the written design; actual student usability feedback and faculty review remain outstanding.

## Learn, then apply

Each module now explains its purpose and key terms before the activities. Each of the 25 scenes begins with a short teaching passage and a concrete instruction for applying it. These passages summarize the supplied outline; they are newly written teaching copy, not quotations or recorded AI answers. The original scene scripts, references, choices and answer keys are unchanged.

The full pre-decision scene is visible in the main flow. Dialogue keeps its speaker labels, AI replies and illustrative code remain visible, and the post-answer continuation is expanded by default. References stay available separately. This is a presentation change requested by the user, not a claim that the revised course has undergone learner validation.

For research teaching, the checked Cochrane Handbook chapter 5, Key Points, calls for data that “faithfully represent the source”; this supports checking extractions against the actual report. ICMJE, Use of Artificial Intelligence in Publishing, states that “humans are ultimately responsible” for reviewing AI-assisted content. These passages support source checking and researcher responsibility, not any new numerical threshold or assessment method. Existing module references and the offline outline retain the broader content provenance.

Chat formatting correction: full scenes now group typed student prompts, named human speakers, AI responses and screening results into labelled bubbles, retaining narration between turns. The complete scene stays visible after teaching. Post-answer continuations use the same renderer. A source-text browser check covered all 29 scene/decision views; all 25 phone-width scenes fit without page overflow. Desktop student/AI and mobile patient-dialogue screenshots were inspected.

Conversation usability polish removes overlapping featured replies, keeps one visible continuation before Continue, formats short AI lists as bullets and adds a keyboard-accessible decision shortcut. Wide conversation tables scroll within their container. Full-source checks covered 29 views and 25 phone scenes; all 129 answer outcomes and 27 responsive views passed. Focus, nine-item list preservation and a single post-answer table were checked directly. Desktop feedback and phone conversation screenshots were inspected.
