/* Teaching decisions, recorded Luna references and deterministic source-based case continuations. */
window.MODULE = {
  "sources": {
    "prompting": {
      "title": "AACOM: Interacting with AI",
      "url": "https://www.aacom.org/medical-education/ai-hub/ai-foundations/interacting-with-ai",
      "section": "Contextual prompting; practical framework; prompt iteration"
    },
    "design": {
      "title": "Google: Prompt design strategies",
      "url": "https://ai.google.dev/gemini-api/docs/prompting-strategies",
      "section": "Clear instructions; constraints; response format; prompt iteration"
    },
    "evaluation": {
      "title": "AACOM: Evaluating AI output",
      "url": "https://www.aacom.org/medical-education/ai-hub/ai-foundations/evaluating-ai-output",
      "section": "Importance of evaluating output; accuracy and completeness"
    },
    "responsible": {
      "title": "AACOM: Responsible use",
      "url": "https://www.aacom.org/medical-education/ai-hub/ai-foundations/module-3",
      "section": "Data stewardship; Smart Use Tips"
    },
    "recall": {
      "title": "IES: Learning and study practice",
      "url": "https://ies.ed.gov/ncee/wwc/PracticeGuide/1",
      "section": "Recommendations 5b and 7: retrieval and explanatory questions"
    },
    "nih": {
      "title": "NIH ODS: Potassium",
      "url": "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/",
      "section": "Interactions with Medications: ACE inhibitors and ARBs"
    },
    "hormones": {
      "title": "OpenStax: Kidney hormone regulation",
      "url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/25-8-endocrine-regulation-of-kidney-function",
      "section": "Renin–Angiotensin–Aldosterone"
    },
    "merck": {
      "title": "Merck Manual: Potassium concentration",
      "url": "https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/overview-of-disorders-of-potassium-concentration",
      "section": "Potassium shifts; Potassium metabolism"
    },
    "course": {
      "title": "Poinen: Potassium Disorders, UBC MEDD Week 49",
      "url": null,
      "section": "Supplied lecture, slides 14–16, 18–19 and 24. Not publicly hosted."
    },
    "usmle": {
      "title": "USMLE Step 1 sample case (includes answer)",
      "url": "https://www.usmle.org/pdfs/step-1/samples_step1.pdf",
      "section": "February 2021 booklet: item 62, printed p. 29; key, printed p. 49"
    },
    "cdc": {
      "title": "CDC: Diagnosing von Willebrand disease",
      "url": "https://www.cdc.gov/von-willebrand/diagnosis/",
      "section": "Screening tests; Diagnostic tests, May 15, 2024"
    },
    "interactive": {
      "title": "OpenAI: Building a shareable site",
      "url": "https://developers.openai.com/training/walkthroughs/building-a-shareable-site",
      "section": "Turn an idea into a website; Make changes in the browser. Current guidance inspected October 28, 2026."
    },
    "chattools": {
      "title": "OpenAI: Use ChatGPT",
      "url": "https://learn.chatgpt.com/docs/use-chatgpt",
      "section": "What ChatGPT Work can do; Talk to ChatGPT naturally. Features depend on plan, platform and workspace settings."
    },
    "drugfacts": {
      "title": "Healthdirect: ACE inhibitors and ARBs",
      "url": "https://www.healthdirect.gov.au/medicines/angiotensin-converting-enzyme-inhibitors-ace-and-angiotensin-receptor-blockers-arbs",
      "section": "How they work; types; side effects; pregnancy; monitoring."
    },
    "label": {
      "title": "DailyMed: Lisinopril prescribing information",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=34bb4602-ccff-4939-91b9-26a63bfd40f7",
      "section": "Sections 5.1–5.5, 7.3 and 12.1: fetal/renal/potassium risks and mechanism. Label updated August 4, 2026."
    },
    "hyperkalemia": {
      "title": "Merck Manual: Hyperkalemia",
      "url": "https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/hyperkalemia",
      "section": "Etiology, Diagnosis/ECG and Treatment. Reviewed June 2025."
    }
  },
  "parts": [
    {
      "id": "ask",
      "title": "Ask for the help you need",
      "purpose": "Tell the model what a useful response should contain.",
      "units": [
        {
          "id": "ask-gap",
          "title": "Start with a learning gap",
          "teach": "<p>A chatbot is an AI tool you talk to through messages. Your message is a <b>prompt</b>; its answer is a <b>reply</b>. In a real tool, type in the message box and press Send. Here, choose a prepared message.</p><p>Before asking, identify your task, what you already understand and the connection you need explained. Your training level helps specify where the explanation should begin. A topic name alone leaves the model to choose the scope.</p>",
          "context": "After a kidney lecture, you remember that ACE inhibitors reduce angiotensin II. You cannot explain the effect on blood potassium.",
          "goal": "Explain only the missing potassium connection in a short arrow chain, defining secretion.",
          "question": "Which message would you send?",
          "sources": [
            "prompting",
            "nih",
            "hormones",
            "drugfacts",
            "label"
          ],
          "choices": [
            {
              "text": "Explain ACE inhibitors.",
              "correct": false,
              "why": "This asks about the drug as a whole. The actual reply covers blood pressure, uses and adverse effects, while your goal is one potassium mechanism.",
              "record": "luna_gap_broad_isolated"
            },
            {
              "text": "Explain ACE inhibitors to a first-year medical student.",
              "correct": false,
              "why": "The training level is useful, but the requested gap and format are still missing. The reply gives a general overview.",
              "record": "luna_gap_level"
            },
            {
              "text": "Teach me everything about RAAS, ACE inhibitors and potassium for medical school.",
              "correct": false,
              "why": "This requests breadth. The actual reply includes RAAS, kidney filtration, potassium regulation and comparisons. Those topics can be useful, but most are outside your stated task.",
              "record": "luna_gap_everything"
            },
            {
              "text": "I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I cannot explain why blood potassium can rise. Explain only that connection in plain language, using a short arrow chain. Define secretion.",
              "correct": true,
              "why": "This identifies your starting point, the exact gap and the requested format. The recorded reply gives the chain and defines secretion.",
              "record": "luna_gap_focused"
            }
          ]
        },
        {
          "id": "ask-format",
          "title": "Describe the output you want",
          "teach": "<p>You can specify the <b>shape of the answer</b>: a short explanation, comparison table, arrow chain or question. Give an example of the structure if the format matters. “Be my tutor” leaves these choices open.</p><p>For this mechanism, ask for <b>drug change → hormone effect → kidney effect</b>. This gives you a structure you can follow and inspect. Getting the requested format does not establish that the medical content is correct; you will practise that check in part 3.</p>",
          "context": "Suppose a reply gives you a paragraph. You want to see the direction of each change in an arrow chain.",
          "goal": "Get a short arrow chain, keeping the same mechanism.",
          "question": "Which follow-up specifies that output?",
          "sources": [
            "design",
            "prompting",
            "nih",
            "hormones"
          ],
          "choices": [
            {
              "text": "Give me more detail about everything ACE inhibitors do.",
              "correct": false,
              "why": "This expands the topic and detail. It does not request the arrow-chain format you need."
            },
            {
              "text": "Keep the same mechanism. Rewrite it as drug change → hormone effect → kidney effect. Define any unfamiliar term.",
              "correct": true,
              "why": "You told the model what to keep and showed the structure you want."
            },
            {
              "text": "Keep the paragraph but replace the medical words with simpler ones.",
              "correct": false,
              "why": "This changes the vocabulary but still leaves the direction of the mechanism in paragraph form. The goal asks for an arrow chain."
            }
          ]
        },
        {
          "id": "ask-boundaries",
          "title": "Tell it which information to use",
          "teach": "<p>If you want an answer based on course material, provide the relevant excerpt and say how it should be used. Ask the model to identify anything the excerpt cannot support. It cannot use a document that you have not supplied simply because you mention “my lecture”.</p><p>A complete request can combine <b>task + relevant context + output + boundaries</b>. Include information that changes the answer. You can refine the request after seeing the reply.</p>",
          "context": "You want two recall questions based only on this excerpt, delivered one at a time.",
          "sourceText": "Angiotensin II stimulates aldosterone. Aldosterone promotes potassium excretion.",
          "goal": "Specify both the source boundary and the interaction order.",
          "question": "Which prepared instruction fits?",
          "sources": [
            "prompting",
            "design",
            "responsible",
            "hormones"
          ],
          "choices": [
            {
              "text": "Use the excerpt as a starting point, add related facts, and put both questions and their answers together.",
              "correct": false,
              "why": "This broadens the source boundary and shows answers before an attempt. Both miss the stated task."
            },
            {
              "text": "You know what my course teaches. Give me questions and all their answers now.",
              "correct": false,
              "why": "This assumes access to course content and reveals the answers before you attempt the questions."
            },
            {
              "text": "Use only this excerpt to make two recall questions. Ask one question, wait for my answer, then give feedback before asking the next. Flag anything the excerpt does not establish.",
              "correct": true,
              "why": "You specified the source, the response sequence and how to handle missing support."
            }
          ]
        }
      ],
      "label": "Ask"
    },
    {
      "id": "steer",
      "title": "Steer the conversation and test yourself",
      "purpose": "Use follow-ups to fix a mismatch, then attempt an answer.",
      "units": [
        {
          "id": "steer-term",
          "title": "Revise the request after seeing the reply",
          "teach": "<p>A <b>follow-up</b> is your next message in the same conversation. Name what the reply did not resolve. Tell the model what to keep and what to change.</p><p>“More” expands an explanation. “Shorter” changes its length. Neither necessarily identifies a missing mechanism. State the connection you need. If a term is unfamiliar, ask for its definition.</p>",
          "context": "In this separate recorded exchange, “Explain ACE inhibitors” produced the reply below. You understand the blood-pressure part and need the missing potassium connection.",
          "goal": "Get the potassium connection in a short arrow chain, with secretion defined.",
          "question": "What would you send next?",
          "sources": [
            "prompting",
            "design",
            "nih",
            "hormones",
            "drugfacts",
            "label"
          ],
          "choices": [
            {
              "text": "I understand the blood pressure part. I am a first-year medical student and only need the missing connection to potassium. Explain reduced angiotensin II → aldosterone → urinary potassium excretion in a short arrow chain, and define secretion.",
              "correct": true,
              "why": "This keeps what you understand, names the missing connection and specifies the output. The recorded continuation addresses that gap.",
              "record": "luna_follow_gap"
            },
            {
              "text": "Make that shorter.",
              "correct": false,
              "why": "This makes the reply shorter, but the link you need is still missing. A shorter answer can remain poorly targeted.",
              "record": "luna_follow_short"
            },
            {
              "text": "Explain more.",
              "correct": false,
              "why": "This expands the general drug overview. The recorded reply adds detail but still does not explain the missing angiotensin–aldosterone–potassium connection.",
              "record": "luna_follow_more"
            }
          ],
          "seed": {
            "prompt": "Explain ACE inhibitors.",
            "reply": "ACE inhibitors are medicines that block **angiotensin-converting enzyme**, which normally helps produce angiotensin II. With less angiotensin II, blood vessels relax and blood pressure falls. These medicines are commonly used for high blood pressure and some heart or kidney conditions.\n\nExamples include lisinopril, ramipril, and enalapril. A dry cough can occur; rarer serious risks include high potassium, kidney problems, and swelling of the face or throat. They should not be used during pregnancy."
          }
        },
        {
          "id": "steer-link",
          "title": "Ask about one missing connection",
          "teach": "<p>Once the words make sense, identify the first step you cannot explain. State what you understand before naming that gap.</p><p>For example: <b>“I understand that sodium enters the cell. Explain how that changes the electrical driving force for potassium.”</b> After the revision, try explaining the connection yourself. If it is still unclear, name the remaining step.</p>",
          "context": "You understand that ENaC allows positively charged sodium to move from tubular fluid into a kidney cell. You do not see how that affects potassium secretion.",
          "goal": "Get the electrical connection explained without restarting the topic.",
          "question": "Which follow-up targets the gap?",
          "sources": [
            "prompting",
            "course"
          ],
          "choices": [
            {
              "text": "Repeat the same explanation using more medical terminology.",
              "correct": false,
              "why": "Changing the vocabulary does not identify or resolve the missing electrical connection.",
              "record": "luna_enac_jargon"
            },
            {
              "text": "I understand sodium entry through ENaC. Explain only how removing positive charge from tubular fluid affects potassium secretion.",
              "correct": true,
              "why": "You located the missing connection and limited the next explanation to that step.",
              "record": "luna_enac_gap"
            },
            {
              "text": "Give me a list of the channels and transporters involved, without explaining their connections.",
              "correct": false,
              "why": "A list can help with names, but the missing step here is the electrical connection between sodium movement and potassium secretion.",
              "record": "luna_enac_list"
            }
          ]
        },
        {
          "id": "steer-quiz",
          "title": "Ask for an attempt before the answer",
          "teach": "<p><b>Active recall</b> means trying to retrieve an answer from memory. Ask the chatbot to give one question and wait. Then send your attempt, including your reason. If you make an error, ask it to explain that step and revisit it with another question.</p><p>To move beyond remembering an explanation, ask for a new situation where you must apply it. Check unfamiliar feedback against your source.</p>",
          "context": "You have read that insulin shifts potassium into cells. Now you want to test whether you can distinguish a shift from removal from the body.",
          "goal": "Attempt a question before seeing its answer.",
          "question": "Choose the next message.",
          "sources": [
            "prompting",
            "recall",
            "merck",
            "hyperkalemia"
          ],
          "choices": [
            {
              "text": "Help me study potassium shifts and potassium removal.",
              "correct": false,
              "why": "This asks for study help without specifying an attempt. The actual reply gives explanations and clinical material before asking you a question.",
              "record": "luna_quiz_broad_isolated"
            },
            {
              "text": "Give me practice questions about potassium shifts versus removal, with the answers underneath.",
              "correct": false,
              "why": "The reply follows your request and supplies answers immediately. That does not meet the goal of attempting an answer first.",
              "record": "luna_quiz_answers_isolated"
            },
            {
              "text": "I am testing whether I understand potassium redistribution versus removal from the body. Ask me one question about insulin shifting potassium into cells. Wait for my answer before giving feedback or revealing the answer.",
              "correct": true,
              "why": "This specifies the skill, one question and the pause for your attempt. The recorded reply asks a question without revealing its answer.",
              "record": "luna_quiz_wait"
            }
          ]
        },
        {
          "id": "steer-attempt",
          "title": "Answer, then use the feedback",
          "teach": "<p>Now make the attempt. Your explanation helps identify which step needs feedback. A lower blood concentration and a lower total amount in the body are different claims.</p><p>After feedback, ask for a new question about the distinction you missed. Repeating the correct sentence without understanding its meaning is not the goal of this exercise.</p>",
          "context": "The recorded chatbot question is: “During treatment with insulin, what happens to the potassium concentration in the blood, and why?”",
          "goal": "Explain redistribution versus removal.",
          "question": "Choose your answer to the chatbot.",
          "sources": [
            "merck",
            "recall"
          ],
          "choices": [
            {
              "text": "The blood concentration falls because potassium moves into cells. That movement changes its location without itself removing potassium from the body.",
              "correct": true,
              "why": "Correct medical reasoning. You distinguished redistribution from excretion."
            },
            {
              "text": "It left the body, because there is less potassium in the blood.",
              "correct": false,
              "why": "A change in blood concentration does not establish that potassium left the body. Here it moved into cells."
            },
            {
              "text": "The blood concentration fell, so that is enough information to conclude that total-body potassium fell.",
              "correct": false,
              "why": "Blood concentration and total-body amount are different. The stated movement was into cells, which does not itself remove potassium."
            }
          ]
        }
      ],
      "label": "Steer"
    },
    {
      "id": "verify",
      "title": "Check accuracy before using the response",
      "purpose": "Separate following instructions from supporting factual claims.",
      "units": [
        {
          "id": "verify-claim",
          "title": "Compare the claim with the source",
          "teach": "<p>Check two things separately. <b>Does the reply match your request?</b> Check the topic, level and format. <b>Are its claims supported?</b> Open the source and compare the actual statement, including its conditions.</p><p>A reply can follow your instructions and still contain an error. Asking “Are you sure?” produces another model response; it does not independently verify the first one.</p>",
          "context": "Intentionally incorrect AI claim: “ACE inhibitors always raise blood potassium in every patient.”",
          "sourceText": "NIH ODS explains that ACE inhibitors and ARBs can reduce urinary potassium excretion and lead to hyperkalemia. This describes a possible effect.",
          "goal": "Identify what the AI statement adds beyond the source.",
          "question": "Which assessment is supported?",
          "sources": [
            "evaluation",
            "nih"
          ],
          "choices": [
            {
              "text": "The source supports a possible effect. It does not justify “always” or “every patient”.",
              "correct": true,
              "why": "You found the unsupported universal claim. The correction must preserve the source’s uncertainty."
            },
            {
              "text": "The statement is verified because the reply uses medical terminology and names NIH.",
              "correct": false,
              "why": "Terminology and a recognizable source name do not establish that the source supports this exact sentence."
            },
            {
              "text": "The mechanism sounds plausible, so accept the claim about every patient without checking that wording.",
              "correct": false,
              "why": "A plausible mechanism does not establish a universal outcome. Compare the exact claim and its certainty with the source."
            }
          ]
        },
        {
          "id": "verify-notes",
          "title": "Make a study resource from a supplied note",
          "teach": "<p>Give the model a note you are allowed to use. Specify the study format and ask it to stay within the note. Compare the result with the original before studying from it.</p><p>A useful flashcard asks one question and keeps the answer separate. An added statement needs support even when the rest of the card is correct.</p>",
          "sourceText": "Sample note based on NIH ODS: ACE inhibitors and ARBs can reduce urinary potassium excretion and lead to hyperkalemia. Impaired kidney function is an additional risk factor.",
          "goal": "Make one flashcard, with question, answer and supporting note statement separate.",
          "question": "Which request specifies that resource?",
          "sources": [
            "prompting",
            "evaluation",
            "nih"
          ],
          "resources": true,
          "choices": [
            {
              "text": "Make study material from this note.",
              "correct": false,
              "why": "The reply stays close to the note, but it is a summary. You asked for a recall resource with a separate answer and a supporting statement.",
              "record": "luna_notes_broad"
            },
            {
              "text": "Use only this note. Make one flashcard, with its question and answer separate, and show the exact note statement supporting the answer. Do not add related physiology.",
              "correct": true,
              "why": "This specifies one flashcard and a source check. The actual reply separates question, answer and the supporting note statement. Hide the answer while practising.",
              "record": "luna_notes_card"
            },
            {
              "text": "Rewrite this note as one clear paragraph for revision.",
              "correct": false,
              "why": "This produces a clear revision paragraph, but it does not create a question with a separate answer for recall.",
              "record": "luna_notes_paragraph"
            }
          ]
        },
        {
          "id": "verify-repair",
          "title": "Correct the resource before learning from it",
          "teach": "<p>When an output adds an unsupported claim, identify the exact addition. Ask for a correction tied to the supplied passage, then check the revised answer yourself.</p><p>Matching a requested format and being factually supported are separate checks. Keep both in your study workflow.</p>",
          "context": "Intentionally incorrect generated flashcard answer: “Every patient taking an ACE inhibitor develops hyperkalemia.”",
          "sourceText": "The supplied note says these medicines can reduce potassium excretion and lead to hyperkalemia. It does not say that every patient develops it.",
          "goal": "Repair the unsupported statement.",
          "question": "Which follow-up addresses the error?",
          "sources": [
            "evaluation",
            "nih"
          ],
          "choices": [
            {
              "text": "Keep the statement but make the wording more confident.",
              "correct": false,
              "why": "Confidence does not supply the missing evidence. The universal claim still exceeds the note."
            },
            {
              "text": "Shorten the flashcard answer and keep its conclusion unchanged.",
              "correct": false,
              "why": "Changing the length leaves the unsupported claim about every patient intact. Correct the certainty against the note."
            },
            {
              "text": "Your answer changed “can” into “every patient”. Correct that claim using only the note and show which statement supports the revision.",
              "correct": true,
              "why": "You named the exact error and required the correction to match the source."
            }
          ]
        }
      ],
      "label": "Verify"
    },
    {
      "id": "build",
      "label": "Build",
      "title": "Make an interactive study tool",
      "purpose": "Describe what a tool should do, try it and request a concrete change.",
      "units": [
        {
          "id": "build-request",
          "title": "Ask for something you can use",
          "teach": "<p>Some chat tools can make working quizzes, flip cards, diagrams and small websites. In ChatGPT Work, supported tools include interactive visualizations and Sites. Availability depends on your account and workspace.</p><p>Describe <b>what the learner does</b> and <b>what happens next</b>. For a quiz, specify the source, when the answer appears, the feedback and how to retry. Ask for a working preview or a webpage file (HTML) you can open in a browser. A text explanation of an app is different from a usable app.</p>",
          "sourceText": "Insulin shifts potassium from blood into cells without itself removing potassium from the body. Urinary excretion removes potassium from the body.",
          "goal": "Get a working, source-limited quiz that waits for a choice before feedback.",
          "question": "Which request defines that interaction?",
          "sources": [
            "interactive",
            "chattools",
            "design",
            "merck"
          ],
          "choices": [
            {
              "text": "Create a working interactive study quiz for a first-year medical student. Return one self-contained HTML file in your reply, with no external libraries or network calls, that can be opened in a browser or supported preview. Use only this note: insulin shifts potassium from blood into cells without itself removing potassium from the body; urinary excretion removes potassium from the body. Ask one question at a time, keep the answer hidden until I choose, then show whether I was correct and explain the distinction using the note. Provide a way to retry. Keep the layout usable on a phone.",
              "correct": true,
              "why": "This specifies a functioning tool, its source, answer timing, feedback, retry and phone layout. The reply contains a complete HTML quiz.",
              "record": "luna_interactive_build"
            },
            {
              "text": "Give me three questions and their answers about potassium shifts and removal. Explain how I could turn them into an interactive quiz.",
              "correct": false,
              "why": "This asks for questions, visible answers and advice about a tool. The reply supplies those, but no working quiz.",
              "record": "luna_interactive_list"
            },
            {
              "text": "Make my potassium revision interactive.",
              "correct": false,
              "why": "“Interactive” leaves the behaviour unspecified. The actual reply asks what kind of interaction you want.",
              "record": "luna_interactive_vague"
            }
          ]
        },
        {
          "id": "build-test",
          "title": "Try the tool before relying on it",
          "teach": "<p>Use the generated quiz below. It is the webpage returned by the model, unchanged. Try an incorrect answer as well as a correct one. Go through the questions and test Retry.</p><p>Check both the behaviour and the medical content. A tool can look finished while revealing answers early, losing your place or adding facts outside the note.</p>",
          "sourceText": "Insulin shifts potassium from blood into cells without itself removing potassium from the body. Urinary excretion removes potassium from the body.",
          "interactive": true,
          "goal": "Check that the quiz works as requested and stays within the note.",
          "question": "Which check would establish that?",
          "sources": [
            "interactive",
            "evaluation",
            "merck"
          ],
          "choices": [
            {
              "text": "Read its title and accept it if the layout looks professional.",
              "correct": false,
              "why": "Appearance does not check answer timing, feedback, retry or factual support."
            },
            {
              "text": "Try correct and incorrect choices, complete all questions, test Retry and compare each explanation with the note.",
              "correct": true,
              "why": "This checks the requested behaviour and the source support. The generated tool works, but its wrong-answer label is “Not quite” and it has only two choices per question; those can be changed with a follow-up."
            },
            {
              "text": "Try only the first correct answer and assume the other paths work.",
              "correct": false,
              "why": "That leaves incorrect-answer feedback, later questions and Retry unchecked."
            }
          ]
        },
        {
          "id": "build-refine",
          "title": "Request a specific change",
          "teach": "<p>Keep the parts that work and describe the change you want. Refer to the actual control or behaviour. Then try the revised tool again.</p><p>The current quiz has two choices per question and labels an incorrect answer “Not quite”. Suppose you want three choices and the explicit label “Incorrect”. You do not need to restart the whole project.</p>",
          "goal": "Request those two changes while preserving the source and answer timing.",
          "question": "Which follow-up specifies the revision?",
          "sources": [
            "interactive",
            "design",
            "evaluation"
          ],
          "choices": [
            {
              "text": "Make the quiz better and more interactive.",
              "correct": false,
              "why": "This does not say which controls or behaviour should change."
            },
            {
              "text": "Replace the quiz with a longer set of visible questions and answers.",
              "correct": false,
              "why": "This changes the activity and reveals the answers. It does not implement the requested changes to the working quiz."
            },
            {
              "text": "Keep the same note, questions and hidden-until-attempt answers. Add a third plausible choice to each question and label wrong attempts “Incorrect”. Keep the explanations and Retry, then test every choice.",
              "correct": true,
              "why": "This names the exact changes and the behaviours to preserve. In your own study chat, open the revised preview and repeat the checks."
            }
          ]
        }
      ]
    },
    {
      "id": "apply",
      "title": "Apply the process to a clinical case",
      "purpose": "Set the interaction, request evidence, revise and identify uncertainty.",
      "units": [
        {
          "id": "case-rules",
          "title": "Set up a reasoning exercise",
          "case": true,
          "teach": "<p>A <b>differential diagnosis</b> is a list of possible explanations. To practise reasoning, ask the chatbot to hold back the diagnosis, let you propose possibilities and release source-provided findings when requested.</p><p>This separate fictional examination case comes from an official USMLE sample item. The purpose is to practise how you use a study conversation. You can select a hint or explicitly reveal the answer.</p>",
          "context": "You want a case conversation that keeps you responsible for the reasoning.",
          "goal": "Set the rules before seeing the case.",
          "question": "Which opening supports that goal?",
          "sources": [
            "prompting",
            "usmle"
          ],
          "choices": [
            {
              "text": "Use the supplied fictional case. Let me propose explanations and request findings. Ask why the evidence matters. Hold back the diagnosis until I finish or ask, and say when a requested fact is unavailable.",
              "correct": true,
              "why": "You specified the interaction, the evidence boundary and the diagnosis reveal rule.",
              "reply": "Initial presentation: a 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding. What possible explanations would you consider, and what information would help distinguish them?"
            },
            {
              "text": "Give me the diagnosis and its explanation before showing the case.",
              "correct": false,
              "why": "This reveals the decision you wanted to practise before you have considered any evidence.",
              "reply": "To practise reasoning, ask to propose explanations and request findings before the diagnosis is revealed."
            },
            {
              "text": "Give me the whole case with the diagnosis included, then ask whether I understand it.",
              "correct": false,
              "why": "Reading a solved case is a different activity. The stated goal is to practise reasoning before seeing the diagnosis."
            }
          ]
        },
        {
          "id": "case-history",
          "title": "Request evidence for your differential",
          "case": true,
          "teach": "<p>Keep more than one explanation open at the beginning. Explain which finding could distinguish them. A request for information should have a purpose: say how the result could change your thinking.</p>",
          "context": "A 20-year-old woman has longstanding heavy menstrual bleeding. Your initial differential includes menstrual causes and a possible broader bleeding problem.",
          "goal": "Request history that could help distinguish those possibilities.",
          "question": "Which message links an evidence request to a reason?",
          "sources": [
            "usmle",
            "prompting"
          ],
          "choices": [
            {
              "text": "Assume this is an isolated menstrual problem and repeat that conclusion.",
              "correct": false,
              "why": "This settles the explanation without checking for evidence of bleeding elsewhere.",
              "reply": "The initial presentation does not establish that bleeding is limited to menstruation. Ask for relevant history before narrowing the differential."
            },
            {
              "text": "Has she had prolonged bleeding from other sites? That could help distinguish an isolated menstrual problem from a broader bleeding tendency.",
              "correct": true,
              "why": "You requested a relevant finding and explained how it could change the differential.",
              "reply": "Source-provided history: symptoms have continued for five years and cycles are regular. A finger cut bled longer than expected. No easy bruising or weight change is reported. She uses an oral contraceptive."
            },
            {
              "text": "Repeat the menstrual history in more detail without asking about bleeding elsewhere.",
              "correct": false,
              "why": "More detail about menstruation alone does not address the distinction in the goal: an isolated problem versus bleeding beyond menstruation."
            }
          ]
        },
        {
          "id": "case-tests",
          "title": "Request the supplied examination and tests",
          "case": true,
          "teach": "<p>Ask for the findings needed to reassess your possibilities. If a case does not supply a result, treat it as missing. An absent detail is not automatically a normal finding.</p>",
          "context": "You now know that a finger cut bled longer than expected as well as the longstanding heavy menstrual bleeding.",
          "goal": "Obtain the available examination and screening results without inventing findings.",
          "question": "What would you request?",
          "sources": [
            "usmle"
          ],
          "choices": [
            {
              "text": "Assume that every unmentioned examination and test result is normal.",
              "correct": false,
              "why": "That turns missing information into invented normal findings.",
              "reply": "A study case may omit information. Ask for supplied findings and leave other results unknown."
            },
            {
              "text": "Predict the laboratory values expected for the most likely diagnosis and use those as the patient’s results.",
              "correct": false,
              "why": "Expected findings are not observed findings. This request would replace source evidence with a prediction."
            },
            {
              "text": "Show the examination, blood count and coagulation screening results supplied in the case. Mark any other requested results as unavailable.",
              "correct": true,
              "why": "You asked for relevant evidence and kept the distinction between supplied and missing information.",
              "reply": "Source findings: mild conjunctival pallor; unremarkable pelvic examination. Hemoglobin 10.5 g/dL; MCV 70 μm³; platelets 275,000/mm³; platelet aggregation reported as normal. PT 10.5 seconds, INR 1.0 and PTT 28 seconds. No additional results are generated."
            }
          ]
        },
        {
          "id": "case-update",
          "title": "Revise using the new findings",
          "case": true,
          "teach": "<p>A new result should change your reasoning only as far as the evidence permits. Distinguish a screening test from a test that establishes or excludes a particular diagnosis.</p><p>State what the findings support and what remains unproven. You do not need the final diagnosis to identify an unjustified conclusion.</p>",
          "context": "Heavy menstrual bleeding and prolonged bleeding from a cut are now known. The source reports hemoglobin 10.5 g/dL, platelets 275,000/mm³, PT 10.5 seconds and PTT 28 seconds.",
          "goal": "Update the differential without overinterpreting the screening results.",
          "question": "Which reasoning statement is defensible?",
          "sources": [
            "usmle"
          ],
          "choices": [
            {
              "text": "Bleeding beyond menstruation keeps a broader bleeding problem in consideration. These screening results alone do not establish or exclude every bleeding disorder.",
              "correct": true,
              "why": "You used the additional bleeding history while preserving the limits of screening. The source-based debrief will explain the specific diagnosis.",
              "reply": "Now identify what additional evidence would be needed to establish the leading explanation rather than treating a screening result as confirmation."
            },
            {
              "text": "The screening results exclude every bleeding disorder, so the prolonged cut bleeding can be ignored.",
              "correct": false,
              "why": "The conclusion exceeds what these screening results establish and discards relevant bleeding history.",
              "reply": "Reconsider both the bleeding pattern and the limits of the tests. A screening result does not answer every diagnostic question."
            },
            {
              "text": "Focus only on the low hemoglobin and stop considering why bleeding is prolonged.",
              "correct": false,
              "why": "The hemoglobin result does not resolve the cause of the bleeding pattern. The additional bleeding history still needs explanation."
            }
          ]
        },
        {
          "id": "case-uncertainty",
          "title": "Identify what is still missing",
          "case": true,
          "teach": "<p>Before finishing, state what you know, what you suspect and what still needs evidence. Ask for the finding or specific test that could distinguish your leading explanation from alternatives.</p><p>You can then compare your reasoning with the source answer and debrief. The answer is revealed when you finish this step or explicitly request it.</p>",
          "context": "You have a bleeding pattern and screening results, but no specific confirmatory test results.",
          "goal": "Finish with an evidence-based statement of uncertainty.",
          "question": "Which message should close the reasoning exercise?",
          "sources": [
            "prompting",
            "usmle"
          ],
          "choices": [
            {
              "text": "State that the diagnosis is confirmed and fill in the missing test results.",
              "correct": false,
              "why": "No confirmatory results have been supplied. Filling them in would create evidence the case does not contain.",
              "reply": "Leave the missing results unknown and say which evidence would be needed to support confirmation."
            },
            {
              "text": "The available evidence supports considering a bleeding disorder, but does not confirm its type. Identify the specific diagnostic evidence still needed, then show the source answer and compare my reasoning.",
              "correct": true,
              "why": "You separated suspicion from confirmation and requested a debrief tied to evidence.",
              "reply": "You are ready to compare your approach with the official answer and the diagnostic reference. Select Finish case to reveal the debrief."
            },
            {
              "text": "List possible diagnoses without stating what is known or which evidence would distinguish them.",
              "correct": false,
              "why": "A list leaves the reasoning unfinished. State the supported findings, your suspicion and the missing evidence."
            }
          ]
        }
      ],
      "label": "Apply"
    }
  ],
  "assessment": [
    {
      "id": "prompt",
      "title": "Describe your learning need",
      "goal": "Get help with a specific gap.",
      "question": "Which message gives the model a useful starting point?",
      "sources": [
        "prompting"
      ],
      "choices": [
        {
          "text": "Teach me everything about kidneys.",
          "correct": false,
          "why": "This supplies a broad topic without a learning gap."
        },
        {
          "text": "I know that ACE inhibitors reduce angiotensin II. Explain the connection I am missing between that change and potassium excretion, at first-year level.",
          "correct": true,
          "why": "This identifies starting knowledge, the gap and the audience."
        },
        {
          "text": "Explain kidneys using simple words.",
          "correct": false,
          "why": "This specifies style, but still does not identify starting knowledge or the particular gap."
        }
      ]
    },
    {
      "id": "active",
      "title": "Request active practice",
      "goal": "Attempt an answer before seeing feedback.",
      "question": "Which instruction sets that order?",
      "sources": [
        "recall",
        "prompting"
      ],
      "choices": [
        {
          "text": "Ask one question, wait for my attempt, then explain any error.",
          "correct": true,
          "why": "The instruction gives you a retrieval attempt before feedback."
        },
        {
          "text": "Give me the questions with all answers underneath.",
          "correct": false,
          "why": "This reveals the answers before an attempt."
        },
        {
          "text": "Explain the answer first and ask me to repeat it afterwards.",
          "correct": false,
          "why": "This gives away the answer before retrieval. The goal is an attempt before feedback."
        }
      ]
    },
    {
      "id": "reason",
      "title": "Ask for missing evidence",
      "goal": "Test a proposed explanation before accepting it.",
      "question": "Which follow-up supports that goal?",
      "sources": [
        "prompting",
        "evaluation"
      ],
      "choices": [
        {
          "text": "Repeat the conclusion more confidently.",
          "correct": false,
          "why": "Confidence does not add evidence or examine alternatives."
        },
        {
          "text": "Which finding would distinguish this explanation from an alternative, and how would it change the differential?",
          "correct": true,
          "why": "This connects an information request to a possible revision."
        },
        {
          "text": "Ask for more information without saying which explanation it could test.",
          "correct": false,
          "why": "A useful request connects a finding with how it could change the proposed explanation."
        }
      ]
    },
    {
      "id": "check",
      "title": "Check a cited claim",
      "goal": "Verify whether a source supports a statement.",
      "question": "What should you do?",
      "sources": [
        "evaluation"
      ],
      "choices": [
        {
          "text": "Open the original source and compare the relevant passage with the exact claim.",
          "correct": true,
          "why": "This checks the evidence for the actual statement."
        },
        {
          "text": "Accept the claim because the model named a reputable organization.",
          "correct": false,
          "why": "The name alone does not establish what the source supports."
        },
        {
          "text": "Ask the same model whether it is confident that its citation supports the statement.",
          "correct": false,
          "why": "Another model response is not an independent comparison with the cited passage."
        }
      ]
    },
    {
      "id": "uncertain",
      "title": "Communicate uncertainty",
      "goal": "Ask for help without treating a suspicion as established.",
      "question": "Which message keeps that distinction clear?",
      "sources": [
        "prompting",
        "evaluation"
      ],
      "choices": [
        {
          "text": "I know this first step, suspect the next connection and need help checking it against the source.",
          "correct": true,
          "why": "You distinguished knowledge, a tentative idea and the evidence you need."
        },
        {
          "text": "Treat my suspicion as a confirmed fact and build the explanation around it.",
          "correct": false,
          "why": "This asks the model to assume the point that needs checking."
        },
        {
          "text": "Leave out the part I am unsure about so the request sounds more confident.",
          "correct": false,
          "why": "This hides the gap that the model needs to help you examine."
        }
      ]
    }
  ]
};
