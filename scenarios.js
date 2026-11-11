/* Adapted scripted scenarios from AI Modules, source revision retained offline. These are not recorded model outputs. */
window.COURSE = {
  "modules": [
    {
      "id": "education",
      "label": "AI in Education",
      "title": "From lecture notes to clinical reasoning",
      "description": "Alex has just finished a hypertension lecture. Help them organize the causes, understand the physiology, check a misleading answer and practise clinical reasoning.",
      "duration": "Estimated 10–15 minutes",
      "sourceTab": "t.0",
      "objectives": [
        "Use generative AI to organize complex medical information into useful learning frameworks.",
        "Ask targeted follow-up questions to develop a deeper understanding of physiology and pathophysiology.",
        "Identify potentially inaccurate or misleading AI-generated medical information and verify important claims.",
        "Use AI to support active recall and clinical reasoning rather than passive memorization.",
        "Recognize the limitations of AI in clinical decision-making and distinguish educational support from clinical authority."
      ],
      "scenes": [
        {
          "id": "education-scene-1",
          "title": "Making Sense of the Lecture",
          "intro": "Alex recognizes the names of secondary hypertension causes, but needs to connect each cause with its physiology, clinical clues and initial evaluation.",
          "questions": [
            {
              "id": "education-1-1",
              "question": "What would be the most useful next prompt?",
              "choices": [
                {
                  "text": "Explain each cause in turn, with its mechanism, key clues and initial tests. Start with the most common causes.",
                  "feedback": "Useful facts, but another sequential explanation leaves Alex to assemble the cross-cause comparison that is currently missing."
                },
                {
                  "text": "Compare causes in a table: mechanism, key clues and initial tests. Separate common causes from uncommon ones.",
                  "feedback": "This directly addresses Alex’s difficulty organizing relationships and prioritizing causes, rather than adding another narrative explanation."
                },
                {
                  "text": "Organize causes by organ system, then give a short mnemonic and one typical presentation for each group.",
                  "feedback": "This helps classification and recall, but does less to connect each cause with its mechanism and initial evaluation."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "AI response after choosing B",
                  "heading": true
                },
                {
                  "type": "table",
                  "rows": [
                    [
                      "Cause",
                      "Mechanism",
                      "Clinical clues",
                      "Initial evaluation"
                    ],
                    [
                      "Renal parenchymal disease",
                      "Impaired sodium excretion and altered volume/RAAS regulation",
                      "Abnormal creatinine, proteinuria, hematuria",
                      "Creatinine/eGFR, electrolytes, urinalysis, urine albumin assessment"
                    ],
                    [
                      "Primary aldosteronism",
                      "Autonomous aldosterone secretion causes sodium retention and potassium wasting",
                      "Hypertension, sometimes hypokalemia",
                      "Aldosterone, renin, aldosterone-to-renin ratio"
                    ],
                    [
                      "Obstructive sleep apnea",
                      "Intermittent hypoxia and sympathetic activation",
                      "Snoring, witnessed apneas, daytime sleepiness",
                      "Sleep history, screening tools, sleep testing when indicated"
                    ],
                    [
                      "Renovascular hypertension",
                      "Reduced renal perfusion activates RAAS",
                      "Abrupt/worsening hypertension, renal dysfunction, vascular disease",
                      "Clinical assessment and selected renal artery imaging"
                    ],
                    [
                      "Pheochromocytoma/paraganglioma",
                      "Excess catecholamine secretion",
                      "Episodic headache, palpitations, sweating",
                      "Plasma free or urinary fractionated metanephrines"
                    ],
                    [
                      "Medication-related",
                      "Sodium retention, sympathetic stimulation, or other mechanisms",
                      "NSAIDs, stimulants, corticosteroids, certain contraceptives",
                      "Medication and substance history"
                    ]
                  ]
                },
                {
                  "type": "text",
                  "text": "The table is an educational overview, not a universal testing algorithm. Investigations should be selected based on clinical context.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway displayed",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI is often more useful when you ask it to reorganize information around relationships and clinical reasoning, rather than simply generate more information.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Jones et al., 2025, Section 3.2.3 and Table 10 [1].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex has just finished a lecture on hypertension. The professor discussed renal, endocrine, vascular, and medication-related causes of secondary hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Looking at the lecture slides, Alex realizes that the information is scattered across multiple sections and is difficult to organize.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex opens an AI chatbot.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex types:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"Can you explain secondary hypertension?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Secondary hypertension is hypertension caused by an identifiable underlying condition. Important causes include:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Renal parenchymal disease",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Renovascular hypertension",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Primary aldosteronism",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Obstructive sleep apnea",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Pheochromocytoma/paraganglioma",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Cushing syndrome",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Thyroid disorders",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Coarctation of the aorta",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Medication- and substance-induced hypertension",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The evaluation depends on the patient's history, examination findings, and clinical presentation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "The answer is accurate as a general overview, but Alex already recognizes most of these terms from the lecture.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "What Alex really needs is a way to connect each cause to its underlying physiology, distinguishing clinical features, and investigations.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Give the model a useful task",
            "explanation": "Start with the learning problem: do you need to organize facts, understand a mechanism or practise applying it? Specify the topic, your level and the output you need. For a comparison, name the columns that would help you connect ideas.",
            "application": "In the next scene, decide which follow-up would help Alex turn a list of causes into an organized explanation."
          }
        },
        {
          "id": "education-scene-2",
          "title": "Going Beyond Memorization",
          "intro": "Alex knows aldosterone can raise blood pressure and lower potassium. They need to understand how those findings connect through the kidney.",
          "questions": [
            {
              "id": "education-2-1",
              "question": "Which follow-up would best help Alex develop a deeper physiological understanding?",
              "choices": [
                {
                  "text": "Trace aldosterone’s effects through principal-cell sodium transport and potassium secretion, then connect them to blood pressure and potassium.",
                  "feedback": "This asks for the missing causal links: ENaC and Na⁺/K⁺-ATPase support sodium handling, while potassium secretion explains the possible potassium loss."
                },
                {
                  "text": "Compare aldosterone excess with other hypertension causes, emphasizing differences in renin, potassium and the usual screening results.",
                  "feedback": "A comparison may help recognition, but Alex’s present gap is the mechanism linking sodium retention and potassium secretion."
                },
                {
                  "text": "Use a kidney analogy for aldosterone excess, then summarize the expected blood pressure and potassium findings for exams.",
                  "feedback": "An analogy can introduce a concept, but this request does not require the cellular links Alex is struggling to explain."
                }
              ],
              "correct": 0,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "AI response after choosing A",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "In principal cells of the late distal tubule and collecting duct, aldosterone increases the activity and expression of epithelial sodium channels (ENaC) on the apical membrane and Na⁺/K⁺-ATPase on the basolateral membrane.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This increases sodium reabsorption into the bloodstream.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The resulting lumen-negative electrical potential promotes potassium secretion through apical potassium channels, including ROMK.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "In primary aldosteronism:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Increased renal sodium reabsorption contributes to extracellular volume expansion and hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Increased potassium secretion can produce hypokalemia.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Volume expansion suppresses renin secretion through negative feedback.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Aldosterone secretion remains inappropriately elevated relative to renin because it is autonomous.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This explains why primary aldosteronism is typically associated with suppressed renin and inappropriately elevated aldosterone.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex now understands the mechanism.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Instead of memorizing that primary aldosteronism causes hypertension and hypokalemia, Alex can explain why these findings occur.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway displayed",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Use AI to explore mechanisms, not just memorize associations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "When an explanation feels superficial, ask the chatbot to connect the relevant anatomy, physiology, and clinical findings.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Endocrine Society Primary Aldosteronism Guideline, 2025 [2].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex now has a much clearer overview of secondary hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, one diagnosis remains confusing: primary aldosteronism.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex understands that excess aldosterone causes hypertension but isn't entirely sure why it can also cause hypokalemia.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks the chatbot:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"Why does primary aldosteronism cause hypertension and hypokalemia?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Aldosterone increases sodium reabsorption and potassium secretion in the distal nephron.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "In primary aldosteronism, excessive aldosterone activity leads to increased sodium retention, which contributes to hypertension, and increased potassium excretion, which can cause hypokalemia.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex understands the individual facts but still struggles to connect them.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Ask about the missing link",
            "explanation": "When an explanation skips a step, name the step you cannot explain. Ask the model to connect cause, mechanism and effect at your level, rather than simply requesting more detail.",
            "application": "Here, aldosterone is the hormone and the kidney is the site of action. Alex needs the connection between sodium handling, potassium loss and blood pressure."
          }
        },
        {
          "id": "education-scene-3",
          "title": "When AI Sounds Confident but Is Wrong",
          "intro": "The chatbot claims normal potassium makes primary aldosteronism very unlikely. Alex remembers a different message from the lecture.",
          "questions": [
            {
              "id": "education-3-1",
              "question": "What should Alex do next?",
              "choices": [
                {
                  "text": "Keep the explanation provisionally, and check it against another chatbot’s answer before changing the study notes.",
                  "feedback": "Agreement between models does not independently verify the claim. Check the clinical reference itself."
                },
                {
                  "text": "Ask the chatbot for a guideline citation, and use the revised answer once it supplies a plausible reference.",
                  "feedback": "A plausible reference can be fabricated or fail to support the claim. Open it and check the relevant recommendation."
                },
                {
                  "text": "Check the potassium claim in a reliable clinical reference, then ask the chatbot to explain the correction.",
                  "feedback": "This verifies the specific disputed claim before using the model to work through the corrected reasoning."
                },
                {
                  "text": "Set this reply aside, and use a different chatbot’s explanation to rebuild the notes from the beginning.",
                  "feedback": "Switching tools does not resolve the disputed claim; the replacement still needs source verification."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Verification step",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex consults the 2025 Endocrine Society guideline on primary aldosteronism.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The guideline emphasizes that hypokalemia is not required for primary aldosteronism and recommends screening using aldosterone and renin measurements, with interpretation of the aldosterone-to-renin ratio.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The guideline also highlights that low potassium can suppress aldosterone and potentially contribute to a false-negative screen.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex then asks:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"The 2025 Endocrine Society guideline indicates that primary aldosteronism can occur without hypokalemia. Revise your previous explanation and explain why normal potassium does not exclude the diagnosis.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Corrected AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "You're right. My previous statement was incorrect.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Although aldosterone promotes renal potassium secretion, many patients with primary aldosteronism have normal serum potassium concentrations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Hypokalemia is therefore an important clinical clue but is neither necessary nor sufficient to establish the diagnosis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Primary aldosteronism should still be considered in hypertensive patients with normal potassium, and biochemical screening involves measuring aldosterone and renin and interpreting their relationship.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Additional teaching point",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "An AI-generated citation is not the same as a verified citation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Even when an AI provides a convincing-looking article title, author list, or quotation, students should confirm that the source exists and actually supports the claim.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For important medical information, verify directly using textbooks, guidelines, or original publications.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway displayed",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Confidence is not evidence.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI can produce explanations that sound convincing but contain important clinical inaccuracies. Verification is especially important when a statement is absolute, surprising, or inconsistent with other reliable information.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Endocrine Society Primary Aldosteronism Guideline, 2025 [2].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "While reviewing primary aldosteronism, Alex asks:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"What clinical findings should make me suspect primary aldosteronism?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Primary aldosteronism classically presents with hypertension and hypokalemia.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Because excess aldosterone increases potassium excretion, patients with primary aldosteronism will have low serum potassium.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Therefore, normal potassium levels make primary aldosteronism very unlikely.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex notices something strange.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "During the lecture, the professor mentioned that many patients with primary aldosteronism have normal potassium levels.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The chatbot's explanation sounds physiologically plausible, but its conclusion seems inconsistent with the lecture.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Check a claim that sounds certain",
            "explanation": "A fluent answer can contain an incorrect conclusion. Identify the exact claim, compare it with a reliable source and ask for a correction that explains what changed. Asking the model to reconsider is useful, but the revised answer still needs verification.",
            "application": "Watch how the chatbot uses a normal laboratory result to make a strong claim. Decide whether that conclusion is supported."
          }
        },
        {
          "id": "education-scene-4",
          "title": "Using AI to Test Understanding",
          "intro": "Reading the explanations feels familiar. Alex wants to find out whether they can recall and apply the material without seeing the answer first.",
          "questions": [
            {
              "id": "education-4-1",
              "question": "Which prompt would be most useful for exam preparation?",
              "choices": [
                {
                  "text": "Give me a concise case-based review, with a worked explanation after each vignette and a final summary of patterns.",
                  "feedback": "Worked examples can help learning, but this reveals explanations before Alex attempts retrieval."
                },
                {
                  "text": "Give me ten clinical vignettes with a separate answer key, so I can attempt the set before reviewing explanations.",
                  "feedback": "This supports recall, but does not provide feedback between attempts or adjust the next question to Alex’s reasoning."
                },
                {
                  "text": "Give me one vignette at a time; wait for my reasoning, give feedback, then adjust the next question’s difficulty.",
                  "feedback": "This builds in an attempt, targeted feedback and an opportunity to use that feedback in the next case."
                }
              ],
              "correct": 2,
              "multi": false,
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex now feels more comfortable with secondary hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "After reading the AI-generated table and physiology explanations, the material seems familiar.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, Alex remembers that recognizing information while reading is not the same as being able to retrieve or apply it independently.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Rather than asking AI for another summary, Alex decides to test their understanding.",
                  "heading": false
                }
              ],
              "after": []
            },
            {
              "id": "education-4-2",
              "question": "Choose the best answer for this case.",
              "choices": [
                {
                  "text": "Pheochromocytoma; measure plasma free metanephrines",
                  "feedback": "A reasonable secondary cause to consider, but the supplied pattern is better matched by aldosterone excess."
                },
                {
                  "text": "Primary aldosteronism; measure aldosterone and renin",
                  "feedback": "The case supports investigating primary aldosteronism with aldosterone and renin and interpreting their ratio in the appropriate testing context."
                },
                {
                  "text": "Renovascular hypertension; arrange renal artery imaging",
                  "feedback": "This is another secondary cause, but the supplied findings favor an initial biochemical evaluation for aldosterone excess."
                },
                {
                  "text": "Cushing syndrome; assess cortisol with a screening test",
                  "feedback": "Cortisol excess belongs in the wider differential, but it is less supported by the findings supplied in this vignette."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex realizes that the most useful part of the interaction wasn't simply getting the correct answer.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "It was having to retrieve the relevant physiology, apply it to a clinical scenario, and identify gaps in understanding before seeing the explanation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway displayed",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Use AI as a tutor, not just a textbook.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Ask it to challenge your understanding, withhold answers, provide targeted feedback, and adapt questions to your knowledge gaps.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "References: Jones et al., 2025 [1]; Endocrine Society, 2025 [2].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "AI-generated practice question",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A 38-year-old woman presents with hypertension that remains elevated despite treatment with multiple antihypertensive medications.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Her blood pressure is 162/96 mmHg.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Laboratory investigations show:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Sodium: 143 mmol/L",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Potassium: 3.1 mmol/L",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Creatinine: 72 µmol/L",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "She denies vomiting or diarrhea and is not currently taking a diuretic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Question: Which diagnosis should be particularly high on your differential, and what biochemical screening test would be appropriate?",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Ask for retrieval before explanation",
            "explanation": "Reading an answer can feel familiar without showing that you can produce it yourself. To practise recall, ask for one question at a time, answer before seeing the explanation and request feedback on your attempt.",
            "application": "The next decisions move from choosing a quiz prompt to answering a case. Keep the answer hidden until you have tried."
          }
        },
        {
          "id": "education-scene-5",
          "title": "AI as a Clinical Reasoning Partner — Not a Decision-Maker",
          "intro": "A 32-year-old man has repeated clinic blood pressures around 165/100 mmHg, potassium 4.2 mmol/L and creatinine 85 µmol/L. He takes no medications and reports no significant symptoms. The chatbot jumps to primary aldosteronism and adrenal imaging.",
          "questions": [
            {
              "id": "education-5-1",
              "question": "What is the most appropriate way for Alex to use AI at this stage?",
              "choices": [
                {
                  "text": "Ask AI to explain the adrenal-imaging pathway and check the proposed steps against a clinical reference.",
                  "feedback": "Checking a pathway is useful, but this accepts the premature focus on an adrenal diagnosis before addressing the differential and missing information."
                },
                {
                  "text": "Ask AI to rank alternatives, identify missing findings and explain what would justify each next investigation.",
                  "feedback": "This keeps the discussion tied to evidence and distinguishes a plausible diagnosis from an established one."
                },
                {
                  "text": "Ask AI to select the leading diagnosis and outline confirmatory tests for discussion with the preceptor.",
                  "feedback": "Preceptor discussion matters, but this still narrows the task around a selected diagnosis before examining alternatives and missing evidence."
                },
                {
                  "text": "Ask AI to prioritize common hypertension causes and defer endocrine testing until repeat potassium is low.",
                  "feedback": "Normal potassium does not rule out primary aldosteronism; that proposed condition for considering testing is unsupported."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Improved AI prompt",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "\"Help me reason through this case as a medical student. Don't assume a diagnosis. Create a prioritized differential that includes essential and secondary hypertension. Identify important missing history and examination findings, explain how they would change the differential, and distinguish appropriate initial evaluation from specialized investigations. Highlight areas of uncertainty.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Improved AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Before attributing the hypertension to a specific cause, several issues should be addressed.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "1. Confirm the hypertension",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Assess measurement technique, repeat blood pressure measurements, and consider home or ambulatory monitoring to evaluate for white-coat hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "2. Gather additional information",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Relevant history includes:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Family history of hypertension or premature cardiovascular disease",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Snoring, witnessed apneas, and daytime sleepiness",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Prescription medications, over-the-counter drugs, supplements, stimulants, and recreational substances",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Symptoms suggesting endocrine causes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Previous renal disease or urinary abnormalities",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "3. Consider the differential",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Essential hypertension remains possible.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Secondary causes worth considering include renal parenchymal disease, primary aldosteronism, obstructive sleep apnea, renovascular disease, and medication- or substance-related hypertension.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Less common endocrine and vascular causes should be considered when supported by the history or examination.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "4. Select investigations thoughtfully",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Initial assessment may include electrolytes, creatinine/eGFR, urinalysis, and other investigations appropriate to the patient's presentation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Primary aldosteronism screening can be considered in accordance with current guidance. The 2025 Endocrine Society guideline suggests screening individuals with hypertension, while the 2025 AHA/ACC guideline particularly emphasizes several higher-risk groups.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Adrenal imaging is not a substitute for appropriate biochemical evaluation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "5. Recognize uncertainty",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The available information does not establish a single diagnosis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Additional clinical information and appropriate testing are necessary.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Final reflection",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex has used AI throughout the learning process, but in different ways:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "To organize unfamiliar information",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "To understand underlying physiology",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "To identify and correct an inaccurate explanation",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "To practise active recall",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "To structure a differential diagnosis without prematurely settling on an answer",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI was most useful when Alex remained actively involved in the reasoning process.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway displayed",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI should support your thinking, not replace it.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "In medical education, AI can help students explore uncertainty, compare possibilities, and identify knowledge gaps. However, the learner remains responsible for evaluating the information and using appropriate clinical resources.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For clinical environments, students must also follow institutional policies on AI use, patient confidentiality, and supervision. Identifiable patient information should not be entered into unapproved AI systems.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "References: Jones et al., 2025 [1]; Endocrine Society, 2025 [2]; Carey et al., 2018 [3].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A few days later, Alex attends a case-based learning session.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The group is discussing a patient:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Patient: 32-year-old man",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Presentation: Hypertension discovered during a routine assessment.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Clinical findings:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Repeated clinic blood pressures around 165/100 mmHg",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Potassium: 4.2 mmol/L",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Creatinine: 85 µmol/L",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "No current medications",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "No significant symptoms reported",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The tutor asks the group to develop a differential diagnosis and identify important additional history, examination findings, and investigations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex considers using AI to help organize the reasoning process.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Based on the patient's young age and hypertension, primary aldosteronism is the most likely diagnosis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The patient should undergo aldosterone-to-renin ratio testing and adrenal CT imaging.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex notices that the chatbot has jumped directly to a diagnosis and imaging recommendation despite having limited information.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Although primary aldosteronism is worth considering, other explanations remain possible.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The group hasn't yet discussed whether the blood pressure has been confirmed outside the clinic, whether there is a family history, whether the patient snores, or whether there are relevant medication or substance exposures.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Separate a possibility from a conclusion",
            "explanation": "A reasoning conversation should identify relevant findings, missing information and alternatives. Ask what supports a possibility and what evidence would change it. A model’s confident diagnosis does not supply the missing evidence.",
            "application": "Consider whether the reply uses the available findings carefully or jumps ahead to a diagnosis and investigation."
          }
        }
      ],
      "summary": [],
      "references": [
        {
          "title": "Jones DW, et al. 2025 AHA/ACC/AANP/AAPA/ABC/ACCP/ACPM/AGS/AMA/ASPC/NMA/PCNA/SGIM Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Circulation. 2025.",
          "url": "https://doi.org/10.1161/CIR.0000000000001356"
        },
        {
          "title": "Endocrine Society: Primary Aldosteronism clinical practice guideline (2025)",
          "url": "https://academic.oup.com/jcem/article/110/9/2453/8196671"
        },
        {
          "title": "Carey et al.: Resistant Hypertension, AHA scientific statement (2018)",
          "url": "https://doi.org/10.1161/HYP.0000000000000084"
        }
      ],
      "background": [
        "A chatbot generates a response to the instructions and context you provide. A useful learning request says what you already understand, where you are stuck and what you want to do next.",
        "Here you will practise organizing information, asking about mechanisms, checking claims and testing your own understanding. The hypertension examples give you a concrete topic to work with; the skill is deciding how to direct and evaluate the conversation."
      ]
    },
    {
      "id": "scribes",
      "label": "AI Scribes",
      "title": "From patient encounter to clinical note",
      "description": "Join Alex on a fourth-year rural elective. Check the rules, discuss consent and compare a consultation with an AI-generated draft note.",
      "duration": "Estimated 12–15 minutes",
      "sourceTab": "t.ldpzup5a7j34",
      "objectives": [
        "Explain how ambient AI scribes convert clinical conversations into draft documentation.",
        "Identify UBC's restrictions on AI scribes and generative AI for clinical documentation.",
        "Recognize the importance of informed patient consent, privacy, and appropriate technology approval.",
        "Identify clinically significant errors and omissions in AI-generated notes.",
        "Understand the responsibilities of medical students and supervising physicians when AI tools are used.",
        "Recognize how AI scribes may affect documentation skills, clinical reasoning, and the patient–physician relationship."
      ],
      "scenes": [
        {
          "id": "scribes-scene-1",
          "title": "Can I Use an AI Scribe?",
          "intro": "Alex asks whether they can use the clinic’s ambient scribe. Preceptor agreement is only one part of the answer.",
          "questions": [
            {
              "id": "scribes-1-1",
              "question": "Under UBC's current MD Undergraduate Program guidelines, which statement is most accurate?",
              "choices": [
                {
                  "text": "Year 4 elective use needs preceptor agreement, patient consent and a compliant platform; separate educational approval is unnecessary.",
                  "feedback": "The stated exception also requires the relevant educational approval. Preceptor agreement and consent do not replace it."
                },
                {
                  "text": "Year 4 elective use needs educational approval and preceptor supervision; consent can be covered by the clinic’s routine recording notice.",
                  "feedback": "The stated pathway requires informed patient consent, not an assumption based on a general notice."
                },
                {
                  "text": "Years 1–3 cannot independently use ambient scribes; Year 4 elective exceptions need educational approval, preceptor agreement, consent and compliance.",
                  "feedback": "This retains each condition of the stated exception and its restriction by training stage."
                },
                {
                  "text": "Years 1–3 may use an approved ambient scribe independently if their preceptor reviews and authenticates every resulting note.",
                  "feedback": "Reviewing the output does not remove the stated restriction on independent ambient scribing in Years 1–3."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "UBC Policy: What Students Need to Know",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "This policy panel must be prominently displayed in the module.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Years 1–3: Students must not independently use ambient AI scribing.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Year 4 electives: Ambient AI scribing may be used only in exceptional circumstances, with approval from the Departmental Educational Lead, agreement from the preceptor, and informed patient consent.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "All years: Students must independently generate their written clinical documentation. General-purpose LLMs must not be used to draft, edit, summarize, or rewrite their clinical notes or proposed management plans.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "All clinical settings: The AI scribe platform must comply with applicable College of Physicians and Surgeons of BC requirements, health authority requirements, and BC privacy legislation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The exceptional Year 4 pathway is not blanket permission to use general-purpose chatbots for documentation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Official UBC documents:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "MDUP Use of Generative Artificial Intelligence (Gen AI) Guideline, January 19, 2026.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Use of Large Language Models (LLMs) in Clinical Documentation Guideline, January 19, 2026.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Expectations of Medical Students in Supervised Clinical Settings Policy, May 11, 2026.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "For this simulated scenario, Dr. Chen explains that the relevant educational lead has already approved an exceptional, supervised Year 4 learning experience involving the clinic's authorized ambient scribe.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic has confirmed that its platform meets applicable privacy and regulatory requirements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex will observe the physician's workflow and practise reviewing a simulated AI-generated note. Alex will continue to develop independent documentation skills and will not use a general-purpose LLM to write or edit student notes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway: Permission to use AI in clinical settings is determined by institutional and regulatory requirements, not simply by whether a tool is available.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex arrives at the clinic at 8:30 AM.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen is preparing to see her first patient.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"We've recently started using an AI scribe. It listens to the consultation and generates a draft note, which I review and correct before finalizing.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"That sounds useful. Could I try it for my patient encounters? I'm in fourth year now.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen explains that UBC has specific restrictions on AI use in clinical education.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Before proceeding, Alex needs to understand those restrictions.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Understand the tool before using it",
            "explanation": "An ambient scribe listens to an encounter and produces a draft. Before use, establish whether that particular system and your role are permitted in the setting, who supervises it and how consent will be obtained.",
            "application": "Alex is a fourth-year student on an elective. Apply the stated rules to this placement."
          }
        },
        {
          "id": "scribes-scene-2",
          "title": "Before the Scribe Starts Listening",
          "intro": "Mr. Patel asks who can access the conversation and what happens to the recording. Consent needs an explanation of this specific system.",
          "questions": [
            {
              "id": "scribes-2-1",
              "question": "What is the most appropriate response?",
              "choices": [
                {
                  "text": "The clinic approved the system. I can explain its purpose now, and we can check storage details after the visit.",
                  "feedback": "Approval does not answer the patient’s present questions about recording and access before use."
                },
                {
                  "text": "It drafts the note for your doctor to check. We can start if you agree, then discuss how long recordings are kept.",
                  "feedback": "This postpones an issue the patient has explicitly raised until after recording begins."
                },
                {
                  "text": "Let’s explain this system’s recording, access and storage arrangements first; you can choose to continue without it.",
                  "feedback": "This addresses the patient’s specific questions before seeking a decision and makes declining a real option."
                },
                {
                  "text": "We can omit your name from the draft and ask the doctor to review it, which should address the recording concerns.",
                  "feedback": "Name removal and note review do not explain how the conversation itself is processed, accessed or retained."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen answers Mr. Patel's questions using the clinic's approved patient information and consent process.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "She explains the platform's actual data-handling practices rather than making assumptions about whether audio is retained or how long information is stored.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Patel agrees to its use.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen documents consent according to clinic policy and activates the scribe.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Important teaching point",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "An AI scribe is not simply a voice recorder.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Depending on the platform, it may process audio, transcribe speech, identify clinically relevant information, and generate a structured draft note.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Students should understand the distinction between:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Recording or processing a clinical conversation",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Producing a transcript",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Generating a clinical summary",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Entering information into the medical record",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "These steps may involve different privacy, accuracy, and professional considerations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway: Patient consent must be informed and voluntary, and the explanation must reflect how the specific platform actually handles information.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "The first patient is Mr. Patel, a 58-year-old man attending a follow-up appointment for hypertension and type 2 diabetes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Before the encounter, Dr. Chen explains that the clinic sometimes uses an AI documentation assistant.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Before we begin, I'd like to explain an optional tool we use to help prepare clinical notes. It processes our conversation to create a draft, which I review and correct. You can decline, and it won't affect your care.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Patel looks uncertain.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Patel: \"Does that mean our conversation is being recorded? Who can hear it? And what happens to the recording afterward?\"",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Explain consent in concrete terms",
            "explanation": "A patient needs to understand what the tool does, how information is processed, who may access it and whether audio is retained. Describe the actual system; do not replace those answers with a general promise that it is secure.",
            "application": "Read Mr. Patel’s questions, then choose a response that answers them and preserves his choice."
          }
        },
        {
          "id": "scribes-scene-3",
          "title": "The Patient Encounter",
          "intro": "Compare the encounter with the draft below. Keep track of symptoms, missed medication doses, examinations and the plan that was actually discussed.",
          "questions": [],
          "reading": [
            {
              "type": "text",
              "text": "Estimated duration: 2 minutes",
              "heading": false
            },
            {
              "type": "text",
              "text": "Story",
              "heading": true
            },
            {
              "type": "text",
              "text": "Dr. Chen begins the appointment while Alex observes.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Simulated consultation",
              "heading": true
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"How have things been going since your last appointment?\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Mr. Patel: \"Pretty good overall. I've been checking my blood pressure at home. Usually it's around 135 over 85.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"Any chest pain, shortness of breath, or dizziness?\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Mr. Patel: \"No chest pain or shortness of breath. Sometimes I feel a little lightheaded when I stand up quickly.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"How are you doing with your medications?\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Mr. Patel: \"I'm taking metformin twice a day and ramipril once a day. I missed the ramipril a few times last week because I ran out.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"Any changes in your diet or exercise?\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Mr. Patel: \"I've been trying to walk more, but it's hard with my work schedule.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"Let's check your blood pressure.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "The clinic blood pressure is 148/92 mmHg. Pulse is 76 beats/minute.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen performs a focused cardiovascular and respiratory examination.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen: \"Your heart and lungs sound normal. Your blood pressure is a little higher here than at home.\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "She discusses medication adherence, arranging a refill, continuing home blood pressure monitoring, and reviewing the readings at follow-up.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Story continues",
              "heading": true
            },
            {
              "type": "text",
              "text": "After the appointment, the scribe produces a draft note.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Dr. Chen asks Alex to examine the simulated output and compare it with the consultation.",
              "heading": false
            },
            {
              "type": "text",
              "text": "\"Don't assume the note is correct just because it looks professional. What do you notice?\"",
              "heading": false
            },
            {
              "type": "text",
              "text": "AI-generated draft note",
              "heading": true
            },
            {
              "type": "text",
              "text": "Patient: 58-year-old male",
              "heading": false
            },
            {
              "type": "text",
              "text": "Reason for visit: Hypertension and diabetes follow-up",
              "heading": false
            },
            {
              "type": "text",
              "text": "Subjective",
              "heading": false
            },
            {
              "type": "text",
              "text": "Patient reports feeling well overall. Home blood pressure averages 135/85 mmHg. Denies chest pain, dyspnea, dizziness, or syncope. Reports excellent medication adherence. Taking metformin and ramipril as prescribed. Increasing physical activity.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Objective",
              "heading": false
            },
            {
              "type": "text",
              "text": "BP 148/92 mmHg. HR 76 bpm.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Cardiovascular: Regular rate and rhythm, no murmurs.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Respiratory: Clear to auscultation bilaterally.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Neurological: Cranial nerves II–XII intact. Normal gait. No focal neurological deficits.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Assessment",
              "heading": false
            },
            {
              "type": "text",
              "text": "Hypertension, suboptimally controlled.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Type 2 diabetes, stable.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Plan",
              "heading": false
            },
            {
              "type": "text",
              "text": "Increase ramipril to 10 mg daily.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Continue metformin.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Encourage exercise and dietary modification.",
              "heading": false
            },
            {
              "type": "text",
              "text": "Repeat blood pressure in four weeks.",
              "heading": false
            }
          ],
          "teaching": {
            "title": "Review against what actually happened",
            "explanation": "Read the encounter before judging the draft. Track symptoms, medication use, examinations and the agreed plan. A statement belongs in the note only if it accurately reflects the encounter.",
            "application": "This scene gives you both the consultation and the draft. Compare them now; the next scene asks you to identify the discrepancies."
          }
        },
        {
          "id": "scribes-scene-4",
          "title": "Spot the Documentation Errors",
          "intro": "Select the statements that reveal a problem in the draft. One statement accurately reflects the encounter and should not be flagged.",
          "questions": [
            {
              "id": "scribes-4-1",
              "question": "Select all the clinically important problems in the AI-generated note.",
              "choices": [
                {
                  "text": "It states that the patient denies dizziness, although he reported occasional postural lightheadedness.",
                  "feedback": "The patient reported occasional lightheadedness when standing. The AI incorrectly documented that he denied dizziness. This could matter when evaluating orthostatic symptoms or antihypertensive medication tolerance."
                },
                {
                  "text": "It describes medication adherence as excellent despite missed ramipril doses.",
                  "feedback": "The patient explicitly stated that he missed several doses of ramipril. The AI transformed this into excellent adherence, removing an important possible explanation for the elevated clinic blood pressure."
                },
                {
                  "text": "It includes a normal neurological examination that was not performed.",
                  "feedback": "No neurological examination was performed. The AI nevertheless documented normal cranial nerves, gait, and neurological findings. This is a serious documentation error. A clinically plausible finding must never be presented as observed if it was not assessed."
                },
                {
                  "text": "It recommends increasing ramipril to 10 mg despite no such decision being made during the encounter.",
                  "feedback": "Dr. Chen did not decide to increase ramipril to 10 mg. The AI generated a treatment recommendation and inserted it into the clinical plan. This illustrates how an AI-generated note may go beyond summarizing what occurred and introduce new clinical decisions."
                },
                {
                  "text": "It describes home blood pressure readings around 135/85 mmHg.",
                  "feedback": "The patient did report home blood pressure readings around 135/85 mmHg. Not every detail in the AI-generated note is incorrect. The challenge is distinguishing accurate content from subtle inaccuracies and fabricated details."
                }
              ],
              "correct": [
                0,
                1,
                2,
                3
              ],
              "multi": true,
              "after": [
                {
                  "type": "text",
                  "text": "Additional teaching point: Not all errors are equally serious",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A missing comma or awkward sentence is usually less consequential than:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An invented physical examination",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An incorrect medication or dose",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A missed red-flag symptom",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An omitted allergy",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A fabricated investigation result",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An invented follow-up or management plan",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Students should prioritize errors according to their potential impact on patient safety and continuity of care.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway: AI-generated notes can appear polished and authoritative while containing clinically important inaccuracies.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "The draft note looks polished. It uses appropriate headings, medical terminology, and a familiar SOAP structure.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But Alex notices several discrepancies.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Look for additions, omissions and changed meaning",
            "explanation": "A documentation error can be a missing symptom, a softened description of missed doses, an examination that was not performed or a plan that was not agreed. An accurate statement should remain in the note.",
            "application": "Use the encounter as your reference and evaluate each checkbox independently."
          }
        },
        {
          "id": "scribes-scene-5",
          "title": "Who Is Responsible for the Note?",
          "intro": "Alex identifies the errors. Dr. Chen corrects the note before authenticating it. Who remains responsible, and may Alex use a chatbot to polish a student note?",
          "questions": [
            {
              "id": "scribes-5-1",
              "question": "Which statement best reflects professional responsibility?",
              "choices": [
                {
                  "text": "The physician checks clinical decisions; the vendor remains responsible for whether the transcript accurately reflects the conversation.",
                  "feedback": "Responsibility for the authenticated note includes accuracy of its recorded content, not only its clinical decisions."
                },
                {
                  "text": "The physician checks the note they authenticate; students remain accountable for their own permitted clinical work.",
                  "feedback": "The tool produces a draft; it does not replace the responsibilities of the people using and authenticating it."
                },
                {
                  "text": "The student checks encounter details; the physician can authenticate after reviewing only the final assessment and plan.",
                  "feedback": "The physician cannot limit responsibility for the authenticated documentation to those sections."
                },
                {
                  "text": "The clinic’s approval establishes the draft’s reliability; the physician corrects errors only when someone flags them.",
                  "feedback": "Approval does not replace active review of the note before authentication."
                }
              ],
              "correct": 1,
              "multi": false,
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex points out the errors.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"The note says he denied dizziness, but he actually reported lightheadedness. It also says he was fully adherent to ramipril, which isn't true.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Good catch. What about the examination and plan?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"The neurological exam wasn't performed, and the medication increase wasn't discussed.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen corrects the draft against the encounter and her own clinical assessment before finalizing the documentation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"If the AI makes a mistake that nobody catches, who is responsible?\"",
                  "heading": false
                }
              ],
              "after": []
            },
            {
              "id": "scribes-5-2",
              "question": "Later that afternoon, Alex writes an independent student note. The note is clinically accurate but awkwardly worded. Can Alex paste it into ChatGPT and ask for grammar and structure improvements?",
              "choices": [
                {
                  "text": "Yes, if Alex removes identifiers and submits only the passage that needs language editing.",
                  "feedback": "The guideline in this scenario prohibits LLM editing of student clinical notes; limiting or de-identifying the passage does not provide an exception."
                },
                {
                  "text": "Yes, if the chatbot changes grammar without altering the assessment or management plan.",
                  "feedback": "The restriction covers editing and rewriting, including language-only changes."
                },
                {
                  "text": "No; the stated guideline prohibits LLM editing or rewriting of student clinical notes.",
                  "feedback": "The policy distinction is between the exceptional ambient-scribe pathway and students’ independently written clinical documentation."
                },
                {
                  "text": "Yes, if the preceptor compares both versions and authenticates the corrected student note.",
                  "feedback": "Preceptor review does not create permission for an otherwise prohibited use."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [],
              "before": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen explains that she has developed a review routine:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Compare the history with what the patient actually reported.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Confirm that examination findings were performed and accurately documented.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Check medication names, doses, allergies, and relevant results.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Verify that the assessment and plan reflect her own decisions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Correct omissions or fabricated information before authenticating the note.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This is a practical review framework, not a substitute for institutional procedures or professional standards.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Review before authenticating",
            "explanation": "Finding errors is only the start: they must be corrected before the note is authenticated. Using a scribe also does not automatically authorize other uses of a general-purpose chatbot.",
            "application": "Apply the responsibilities and student-documentation rules stated in this story."
          }
        },
        {
          "id": "scribes-scene-6",
          "title": "When the Patient Says No",
          "intro": "A second patient declines the scribe. The clinic is busy, but the patient’s choice still matters.",
          "questions": [
            {
              "id": "scribes-6-1",
              "question": "What should happen next?",
              "choices": [
                {
                  "text": "Pause the tool and ask the preceptor to obtain agreement before continuing the planned scribe workflow.",
                  "feedback": "The patient has declined. The next step is to proceed without it, rather than make documentation depend on securing agreement."
                },
                {
                  "text": "Leave the tool off and document the consultation through the usual non-AI workflow.",
                  "feedback": "This respects the refusal while allowing the consultation and documentation to continue."
                },
                {
                  "text": "Offer recording without identifiers and proceed if the patient does not repeat the objection.",
                  "feedback": "Silence after an alternative proposal is not a replacement for the patient’s decision to decline."
                },
                {
                  "text": "Continue without ambient recording, but upload a recording afterward to prepare the draft.",
                  "feedback": "Processing the encounter afterward still uses the refused scribe workflow; it does not respect the decision."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen documents the encounter using the clinic's usual process.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Afterward, she asks Alex whether they think AI scribes should eventually become standard in every clinic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex considers the potential benefits: less time spent typing, reduced documentation burden, and more opportunity for clinicians to focus on patients.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But Alex also recognizes the limitations: inaccurate documentation, privacy concerns, consent requirements, cost, unequal access, and the possibility that students may lose opportunities to develop essential documentation skills.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Final reflection",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Which statement best captures the role of AI scribes in clinical practice?",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI scribes may improve documentation workflows, but they require appropriate authorization, informed consent, careful human review, and ongoing attention to patient safety.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "They should support clinical work rather than replace professional judgment or foundational training.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Later in the afternoon, Dr. Chen sees another patient.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This patient has concerns about the privacy of their health information and declines use of the AI scribe.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic is busy, and Dr. Chen is already running behind.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex wonders whether the scribe could still be used if the patient were not named in the generated note.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Respect a patient’s decision",
            "explanation": "Consent includes the option to decline. If the patient does not want the tool used, the team needs another way to document the encounter. A busy clinic does not answer the patient’s concern.",
            "application": "Choose how the team should respond when a second patient says no."
          }
        }
      ],
      "summary": [
        {
          "type": "text",
          "text": "1. Know the rules before using AI",
          "heading": true
        },
        {
          "type": "text",
          "text": "UBC prohibits independent ambient AI scribing in Years 1–3.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Exceptional use during Year 4 electives requires the specified approvals, preceptor agreement, patient consent, and compliance with applicable requirements.",
          "heading": false
        },
        {
          "type": "text",
          "text": "2. Consent and privacy come first",
          "heading": true
        },
        {
          "type": "text",
          "text": "Patients should understand how the specific system handles their information and must have the opportunity to decline.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Never assume that removing a patient's name makes a tool safe or authorized.",
          "heading": false
        },
        {
          "type": "text",
          "text": "3. AI-generated documentation can be wrong",
          "heading": true
        },
        {
          "type": "text",
          "text": "Watch for omitted symptoms, inaccurate medication histories, fabricated examinations, incorrect doses, and invented management plans.",
          "heading": false
        },
        {
          "type": "text",
          "text": "4. Human review is essential",
          "heading": true
        },
        {
          "type": "text",
          "text": "A polished note is not necessarily an accurate note.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Clinicians must verify documentation against the actual encounter and their clinical judgment.",
          "heading": false
        },
        {
          "type": "text",
          "text": "5. Protect your own learning",
          "heading": true
        },
        {
          "type": "text",
          "text": "Medical students need to develop independent history-taking, clinical reasoning, and documentation skills.",
          "heading": false
        },
        {
          "type": "text",
          "text": "AI should not replace the foundational competencies that students are expected to demonstrate independently.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Closing message",
          "heading": true
        },
        {
          "type": "text",
          "text": "AI scribes have the potential to change how clinical documentation is completed.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Understanding their benefits and limitations is becoming increasingly important for future physicians.",
          "heading": false
        },
        {
          "type": "text",
          "text": "But knowing how to use an AI scribe begins with knowing when its use is permitted, when it is appropriate, and when it should not be used.",
          "heading": false
        },
        {
          "type": "text",
          "text": "The goal isn't simply to document faster. It's to document accurately, safely, and responsibly.",
          "heading": false
        }
      ],
      "references": [
        {
          "title": "University of British Columbia MD Undergraduate Program. MDUP Use of Generative Artificial Intelligence (Gen AI) Guideline. Approved January 19, 2026.",
          "url": "https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Generative-Artificial-Intelligence-Gen-AI-Guideline-1.pdf"
        },
        {
          "title": "University of British Columbia MD Undergraduate Program. Use of Large Language Models (LLMs) in Clinical Documentation Guideline. Approved January 19, 2026.",
          "url": "https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Large-Language-Models-LLMs-in-Clinical-Documentation-Guideline-1.pdf"
        },
        {
          "title": "University of British Columbia MD Undergraduate Program. Expectations of Medical Students in Supervised Clinical Settings Policy (031A). Effective May 11, 2026.",
          "url": "https://med-fom-mednet.sites.olt.ubc.ca/files/2026/05/031A-Expectations-of-Medical-Students-in-Supervised-Clinical-Settings.pdf"
        },
        {
          "title": "University of British Columbia Faculty of Medicine. Artificial Intelligence and Teaching in the Faculty of Medicine. Faculty Development resources.",
          "url": "https://facdev.med.ubc.ca/artificial-intelligence/"
        },
        {
          "title": "University of British Columbia. Generative Artificial Intelligence and Academic Integrity.",
          "url": "https://academicintegrity.ubc.ca/genai/"
        }
      ],
      "background": [
        "An ambient AI scribe processes a clinical conversation into a draft note. A draft can sound fluent while changing what was said, omitting important details or documenting an examination that never happened.",
        "You will follow a consultation from permission and consent to reviewing the note. Compare each statement with the encounter, then decide what needs correcting and who must review it."
      ]
    },
    {
      "id": "research",
      "label": "AI for Research",
      "title": "From research question to manuscript",
      "description": "Alex is starting a FLEX systematic review about SGLT2 inhibitors in heart failure with preserved ejection fraction (HFpEF). Help them check the search, study design, extracted results, code and writing.",
      "duration": "Estimated 15–20 minutes",
      "sourceTab": "t.furte4vj53l4",
      "objectives": [
        "Use AI to explore research questions and develop an initial understanding of unfamiliar literature.",
        "Recognize the limitations of AI-assisted literature searching and citation generation.",
        "Use AI to brainstorm research designs and methods while recognizing the need for methodological expertise.",
        "Understand how AI can assist with statistical planning, R/SPSS syntax, and Excel formulas.",
        "Identify errors in AI-generated data analysis and code.",
        "Use AI appropriately for manuscript organization and language editing.",
        "Recognize the importance of research integrity, transparency, disclosure, and independent learning."
      ],
      "scenes": [
        {
          "id": "research-scene-1",
          "title": "Finding the Literature",
          "intro": "A chatbot gives Alex a useful overview of SGLT2 inhibitor trials. It has not provided a reproducible literature search.",
          "questions": [
            {
              "id": "research-1-1",
              "question": "What should Alex do next?",
              "choices": [
                {
                  "text": "Verify the suggested papers, follow their citations and use that verified set as the review’s search record.",
                  "feedback": "Verifying papers is important, but a citation-led set alone does not supply the planned reproducible database search."
                },
                {
                  "text": "Use the overview to draft search concepts, then build a reproducible database strategy with librarian support.",
                  "feedback": "This uses AI for orientation while developing a documented search that can be checked and repeated."
                },
                {
                  "text": "Ask AI for a database-style search string, then use its suggested paper list to check whether coverage is adequate.",
                  "feedback": "A generated string still needs development and testing; the same model’s list is not an independent coverage check."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Improved prompt",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "\"Help me brainstorm a PubMed search strategy for randomized controlled trials of SGLT2 inhibitors in patients with HFpEF. Include synonyms for heart failure with preserved ejection fraction, empagliflozin, dapagliflozin, and SGLT2 inhibitors. Explain how Boolean operators and MeSH terms could be used. Do not invent citations.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Simulated AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A preliminary search could combine three concepts:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Population: Heart failure with preserved ejection fraction, HFpEF, heart failure with mildly reduced ejection fraction, diastolic heart failure.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Intervention: SGLT2 inhibitors, sodium-glucose cotransporter-2 inhibitors, empagliflozin, dapagliflozin.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Study design: Randomized controlled trials, randomized trials, placebo-controlled trials.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Within each concept, synonyms can be joined using OR. Different concepts can then be combined using AND.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For example:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "(HFpEF OR \"heart failure with preserved ejection fraction\") AND (empagliflozin OR dapagliflozin OR SGLT2)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This is only a preliminary search, not a validated systematic-review search strategy.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex takes the preliminary terms to a UBC medical librarian.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The librarian helps expand the search, identify relevant controlled vocabulary, and adapt the strategy for MEDLINE, Embase, and other appropriate sources.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex also searches for existing reviews and relevant registered protocols.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The search strategy, databases, search dates, and results are documented.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI can help you begin a literature search, but it should not replace a systematic search.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Use it to brainstorm terminology, understand unfamiliar concepts, and identify potential studies. Verify citations, search appropriate databases, and document your methods.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: PRISMA 2020; UBC Library FLEX Research Guide.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex meets with Dr. Lee to discuss the FLEX project.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee: \"Before we finalize the question, I'd like you to see what's already been published. Start by identifying the major trials and any existing systematic reviews. We need to know whether our project addresses a meaningful gap.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex opens an AI chatbot.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"What research has been done on SGLT2 inhibitors in HFpEF?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "SGLT2 inhibitors have been studied in several major heart failure trials.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Important trials include:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "EMPEROR-Preserved, investigating empagliflozin.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "DELIVER, investigating dapagliflozin.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "These trials evaluated cardiovascular outcomes in patients with symptomatic heart failure and left ventricular ejection fraction above the traditional reduced-EF range.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The literature suggests benefits in reducing worsening heart failure events, although effects on mortality and renal outcomes require more nuanced interpretation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Several systematic reviews and meta-analyses have also examined this topic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex now has a useful starting point.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, the response doesn't provide a reproducible literature search, and Alex isn't sure whether it includes all relevant studies.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Use an overview as a starting point",
            "explanation": "A chatbot’s summary can help you learn vocabulary and draft search concepts. A reproducible search records where and how studies were sought so another researcher can repeat it. A plausible list of papers is not that search record.",
            "application": "Decide how Alex should move from a general overview to finding the evidence systematically."
          }
        },
        {
          "id": "research-scene-2",
          "title": "Designing the Study",
          "intro": "The chatbot proposes including EF above 40% and combining cardiovascular mortality, hospitalization, renal events and eGFR change into one estimate. Alex’s intended question is more specific.",
          "questions": [
            {
              "id": "research-2-1",
              "question": "What is the most appropriate next step?",
              "choices": [
                {
                  "text": "Keep the broader EF range and separate outcomes during analysis, documenting the choice after extraction.",
                  "feedback": "This changes the intended population and postpones design decisions that should be resolved in the research question and protocol."
                },
                {
                  "text": "Define the population and outcomes with the supervisor, then record the planned methods in a review protocol.",
                  "feedback": "This resolves the design before the results influence which population or outcomes the review emphasizes."
                },
                {
                  "text": "Extract all candidate outcomes first, then define the main review question around the most consistently reported one.",
                  "feedback": "Feasibility can inform planning, but choosing the primary question after inspecting results risks allowing the available findings to drive it."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Improved AI prompt",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "\"Help me develop a PICO framework for a systematic review of SGLT2 inhibitors in HFpEF. Identify important design decisions, including ejection fraction thresholds, study eligibility, cardiovascular and renal outcomes, follow-up duration, and risk-of-bias assessment. Present these as questions for discussion with my supervisor rather than making the decisions for me.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Simulated AI response",
                  "heading": true
                },
                {
                  "type": "table",
                  "rows": [
                    [
                      "PICO element",
                      "Proposed consideration"
                    ],
                    [
                      "Population",
                      "Adults with HFpEF; specify the EF threshold and handling of mixed HFpEF/HFmrEF populations"
                    ],
                    [
                      "Intervention",
                      "SGLT2 inhibitors, including empagliflozin and dapagliflozin"
                    ],
                    [
                      "Comparator",
                      "Placebo or standard care, according to the protocol"
                    ],
                    [
                      "Study design",
                      "Randomized controlled trials"
                    ],
                    [
                      "Cardiovascular outcomes",
                      "Heart failure hospitalization, cardiovascular death, prespecified composite outcomes"
                    ],
                    [
                      "Renal outcomes",
                      "Kidney composite endpoints, eGFR slope, or other clearly defined renal outcomes"
                    ],
                    [
                      "Risk of bias",
                      "Cochrane RoB 2 for randomized trials"
                    ]
                  ]
                },
                {
                  "type": "text",
                  "text": "Important questions include whether HFpEF subgroup data are available, whether renal outcome definitions are sufficiently comparable for pooling, and whether published meta-analyses already address the same question.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Lee reviews Alex's proposed design.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "They agree that the protocol must specify whether the review concerns EF of at least 50%, EF above 40%, or a broader population with planned subgroup analyses.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "They also agree to treat cardiovascular and renal outcomes separately, rather than creating an arbitrary combined outcome.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex learns about prospective protocol registration, such as PROSPERO where eligible, and the importance of documenting planned analyses before screening and extraction.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI can be a useful brainstorming partner for research design, but it should not determine the methodology independently.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A good research question requires clinical judgment, familiarity with the literature, and an understanding of study design.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "References: PRISMA-P; Cochrane Handbook; Cochrane RoB 2.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "After reviewing the literature, Alex realizes that the original research question is broad.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Some studies include patients with ejection fraction above 40%, while others include populations with ejection fraction of 50% or greater.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The trials also report different cardiovascular and renal outcomes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks AI:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"How should I design a systematic review and meta-analysis of SGLT2 inhibitors in HFpEF?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "You should conduct a systematic review and meta-analysis of randomized controlled trials comparing SGLT2 inhibitors with placebo.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Include all heart failure patients with ejection fraction above 40%.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Pool cardiovascular mortality, heart failure hospitalization, renal outcomes, and changes in eGFR into one overall effect estimate.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex notices that the proposed study design contains some potentially problematic assumptions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The original question concerns HFpEF, but an ejection fraction threshold above 40% includes some patients with mildly reduced ejection fraction.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Furthermore, cardiovascular mortality, heart failure hospitalization, and eGFR change are not interchangeable outcomes.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Define what question the review answers",
            "explanation": "PICO means population, intervention, comparator and outcomes. Define those elements before deciding which studies belong together. Similar-sounding outcomes can measure different things.",
            "application": "Look for where the proposed plan changes Alex’s population or combines outcomes that need separate consideration."
          }
        },
        {
          "id": "research-scene-3",
          "title": "Screening Studies and Extracting Data",
          "intro": "Alex considers using AI to screen papers and extract results. The next decision examines a specific error: confusing a composite outcome with cardiovascular mortality.",
          "questions": [
            {
              "id": "research-3-1",
              "question": "How should Alex approach AI-assisted screening and extraction?",
              "choices": [
                {
                  "text": "Have AI extract every study and verify only entries it flags as uncertain, keeping a log of corrections.",
                  "feedback": "Model-reported confidence does not establish which entries are correct. The verification process must not depend only on its flags."
                },
                {
                  "text": "Use AI to organize records within a prespecified, human-verified process, retaining independent checks where required.",
                  "feedback": "This keeps eligibility and extraction tied to the protocol and to verified source information."
                },
                {
                  "text": "Have AI extract each study twice and refer disagreements to a human reviewer before starting the analysis.",
                  "feedback": "Repeated model agreement can reproduce the same error. It does not substitute for the required independent source checks."
                }
              ],
              "correct": 1,
              "multi": false,
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex and another student begin screening titles and abstracts.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "They identify potentially relevant randomized controlled trials and retrieve the full texts.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex wonders whether AI could save time by screening all the papers and extracting the results automatically.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"Can I upload all these papers and have AI identify the eligible studies and extract the outcomes?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Yes. Upload the papers and I can identify which studies meet your inclusion criteria, extract sample sizes and effect estimates, and create a spreadsheet ready for meta-analysis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "This sounds appealing. However, Alex remembers that systematic reviews depend on accurate study selection and data extraction.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An AI system might confuse subgroup results with overall trial results, extract the wrong follow-up period, or mistake a composite outcome for an individual endpoint.",
                  "heading": false
                }
              ],
              "after": []
            },
            {
              "id": "research-3-2",
              "question": "What is the most important problem with the AI's statement?",
              "choices": [
                {
                  "text": "It assigns the composite-endpoint effect to cardiovascular mortality alone.",
                  "feedback": "A reduction in the composite cannot be assigned to one component without that component’s actual result."
                },
                {
                  "text": "It converts the relative effect into a percentage without reporting precision.",
                  "feedback": "Precision is useful, but the main error here is changing which outcome the estimate describes."
                },
                {
                  "text": "It interprets a trial-level effect before presenting the pooled review result.",
                  "feedback": "A study-level result can be reported; the problem is that this statement misidentifies its endpoint."
                }
              ],
              "correct": 0,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI-assisted extraction is not equivalent to verified extraction.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Check numerical values, denominators, outcome definitions, subgroups, follow-up periods, and confidence intervals against the original source.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Maintain a transparent record of where each extracted value came from.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Anker et al., EMPEROR-Preserved, 2021.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Example: A subtle extraction error",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex asks AI to extract the primary cardiovascular outcome from EMPEROR-Preserved.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The AI returns:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"Empagliflozin reduced cardiovascular mortality by 21%.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex checks the original paper and discovers that the approximately 21% relative reduction refers to the trial's primary composite outcome of cardiovascular death or hospitalization for heart failure—not cardiovascular mortality alone.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This distinction matters because the composite benefit was driven mainly by fewer heart failure hospitalizations.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Trace every extracted result to its source",
            "explanation": "Screening decides whether a study meets the review criteria; extraction records what the included study actually reports. Check the population, outcome definition, estimate and uncertainty against the original paper.",
            "application": "A composite outcome combines more than one type of event. Check whether the chatbot has mistaken a composite result for one component."
          }
        },
        {
          "id": "research-scene-4",
          "title": "Choosing the Statistical Analysis",
          "intro": "The dataset contains time-to-event outcomes, continuous eGFR slope and differently defined renal composites. A single generic analysis recipe cannot resolve those distinctions.",
          "questions": [
            {
              "id": "research-4-1",
              "question": "What should Alex do next?",
              "choices": [
                {
                  "text": "Pool each outcome separately using the same effect measure, then explain any differences in the discussion.",
                  "feedback": "Separate pooling does not solve mismatched effect measures or incompatible definitions."
                },
                {
                  "text": "Check suitable effect measures and pooling for each outcome with an experienced meta-analysis researcher.",
                  "feedback": "The analysis needs to match the type, scale and definition of each outcome before pooling."
                },
                {
                  "text": "Use the most frequently reported endpoint as the common outcome and convert the other results to match it.",
                  "feedback": "Frequency of reporting does not make distinct outcomes interchangeable or establish that a conversion is valid."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Improved AI prompt",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "\"My included trials report hazard ratios for time-to-event cardiovascular outcomes and differences in annual eGFR slope for renal function. Explain which effect measures may be appropriate, how pooling could be performed, and what assumptions and limitations I should discuss with my supervisor. Do not perform an analysis without the data.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Simulated AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "For time-to-event outcomes, published hazard ratios and their confidence intervals may be synthesized using log hazard ratios and corresponding standard errors, provided the endpoints and populations are sufficiently comparable.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For continuous outcomes such as annual eGFR slope, mean differences may be appropriate when studies report comparable units and definitions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Important considerations include:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Whether studies report the same outcome and follow-up period",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Whether the populations and interventions are sufficiently comparable",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Fixed-effect versus random-effects models",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Between-study heterogeneity",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Risk of bias",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Small numbers of included studies",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Differences between statistical significance and clinical importance",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A random-effects model does not automatically resolve differences in study populations or outcome definitions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Lee explains that a meta-analysis with only a few trials may have substantial uncertainty in estimating between-study heterogeneity.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex also learns that the choice of model should be prespecified and justified rather than selected after seeing the pooled results.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For renal outcomes, Dr. Lee emphasizes that an improvement in eGFR slope is not the same as demonstrating a reduction in clinical kidney failure events.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI can help you understand statistical methods, but it cannot tell you whether a method is appropriate without adequate context.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Researchers must understand what they are measuring, why a statistical method is appropriate, and how to interpret the result.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Cochrane Handbook, Chapters 6, 9 and 10.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex has completed the initial data extraction and meets with Dr. Lee to discuss the analysis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The dataset contains several kinds of outcomes:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Time to cardiovascular death or heart failure hospitalization",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Cardiovascular mortality",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Heart failure hospitalization",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Change in eGFR over time",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Composite renal outcomes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks AI:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"Which statistical tests should I use for my meta-analysis?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Use a random-effects meta-analysis for all outcomes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Calculate odds ratios for cardiovascular outcomes and mean differences for renal outcomes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Combine the results into a single forest plot.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex recognizes that the answer is too generic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The trials report time-to-event outcomes using hazard ratios, while eGFR slope is a continuous outcome. Renal composite endpoints may differ between studies.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Match the analysis to the outcome",
            "explanation": "Time-to-event outcomes describe when events happen; continuous outcomes describe measured quantities. Before combining estimates, check that the outcome definitions, effect measures and study populations answer a compatible question.",
            "application": "Assess the chatbot’s reasoning about the analysis before accepting its suggested model."
          }
        },
        {
          "id": "research-scene-5",
          "title": "Using AI to Write R Code, SPSS Syntax, and Excel Formulas",
          "intro": "Alex runs generated R code and obtains a professional-looking forest plot. A successful run does not establish that the inputs, assumptions or calculations are right.",
          "questions": [
            {
              "id": "research-5-1",
              "question": "What should Alex do before using the results in a manuscript?",
              "choices": [
                {
                  "text": "Check the pooled estimate against the chatbot’s worked example and confirm the plot uses the intended labels.",
                  "feedback": "That checks consistency with another model output, not independently whether the data and methods are correct."
                },
                {
                  "text": "Verify inputs and assumptions, inspect the calculations independently and review the analysis with an experienced researcher.",
                  "feedback": "This checks the scientific calculations as well as successful execution and presentation."
                },
                {
                  "text": "Reproduce the plot using a second AI-written script and accept the result if both scripts give the same estimate.",
                  "feedback": "Two scripts can share the same mistaken assumptions or inputs. Agreement alone does not validate the analysis."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Additional example: A coding error",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex asks AI to explain the following line:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "SE <- (upper_CI - lower_CI) / (2 * 1.96)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The formula appears reasonable, but it is incorrect for confidence intervals around hazard ratios when the analysis is performed on the logarithmic scale.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The correct calculation, under the usual normal-approximation assumptions, is:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "SE <- (log(upper_CI) - log(lower_CI)) / (2 * 1.96)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Using the incorrect formula changes the estimated standard errors and therefore the study weights and pooled confidence interval.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI beyond R: SPSS and Excel",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex asks whether AI can also help with simpler tasks.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee: \"Absolutely. Not every research project requires sophisticated statistical software. But the same principle applies: you must understand and check the calculations.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Example 1: Excel",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Suppose Alex has a spreadsheet containing study hazard ratios and confidence intervals:",
                  "heading": false
                },
                {
                  "type": "table",
                  "rows": [
                    [
                      "Column",
                      "Content"
                    ],
                    [
                      "A",
                      "Study name"
                    ],
                    [
                      "B",
                      "Hazard ratio"
                    ],
                    [
                      "C",
                      "Lower 95% CI"
                    ],
                    [
                      "D",
                      "Upper 95% CI"
                    ],
                    [
                      "E",
                      "Log hazard ratio"
                    ],
                    [
                      "F",
                      "Standard error"
                    ]
                  ]
                },
                {
                  "type": "text",
                  "text": "AI can suggest:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Cell E2:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "=LN(B2)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Cell F2:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "=(LN(D2)-LN(C2))/(2*1.96)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "These formulas can then be copied down the spreadsheet.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex should manually verify a sample calculation and confirm that all values are valid and correctly entered.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Example 2: SPSS",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "For projects using patient-level datasets, AI can help explain SPSS syntax, variable transformations, missing-value handling, and statistical commands.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, SPSS is not necessarily the best tool for every meta-analysis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The choice of software should depend on the research question, available data, analytical requirements, and team expertise.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Example 3: Data cleaning",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI can help draft code to identify missing values, duplicate records, inconsistent variable names, and implausible entries.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But automated data cleaning can also introduce errors if the code incorrectly recodes or removes observations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Always preserve the original dataset and document any changes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI can help you write code much faster than you could write it from scratch, but speed does not guarantee correctness.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "If you cannot explain what the code does, what assumptions it makes, or how to verify the output, you should not rely on it for your research conclusions.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 3–4 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex has never used R before.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee suggests learning basic statistical programming because it allows analyses to be reproduced and checked.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex opens an AI chatbot.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"Can you write R code to perform a meta-analysis using hazard ratios and confidence intervals?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Simulated AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Yes. You can use the meta package in R.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "For each study, enter the hazard ratio and its lower and upper 95% confidence interval.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Convert hazard ratios to the logarithmic scale and calculate their standard errors.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Then use metagen() to perform the meta-analysis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Example R code",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "library(meta)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "# Example values",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "study <- c(\"Study A\", \"Study B\")",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "HR <- c(0.79, 0.82)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "lower_CI <- c(0.69, 0.71)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "upper_CI <- c(0.90, 0.95)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "log_HR <- log(HR)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "SE <- (log(upper_CI) - log(lower_CI)) / (2 * 1.96)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "result <- metagen(",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "TE = log_HR,",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "seTE = SE,",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "studlab = study,",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "sm = \"HR\",",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "common = FALSE,",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "random = TRUE",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": ")",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "summary(result)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "forest(result)",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex runs the code and gets a forest plot.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "It looks professional.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But Alex isn't sure what the code is actually doing.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Treat generated code as a draft",
            "explanation": "Code that runs has passed an execution check, not a scientific check. Inspect what each input represents, the units or scale used and whether the calculation matches the intended analysis. Compare a worked result with the original data.",
            "application": "Alex’s code produces a plot. Look for the check that is still needed before trusting it."
          }
        },
        {
          "id": "research-scene-6",
          "title": "Writing the Manuscript",
          "intro": "The chatbot writes a confident Results and Discussion paragraph without being given the actual review results. Alex needs help with writing while preserving the verified scientific meaning.",
          "questions": [
            {
              "id": "research-6-1",
              "question": "How should Alex use AI to improve the manuscript?",
              "choices": [
                {
                  "text": "Provide the extracted data, ask AI to draft the interpretation and check whether its citations support the paragraph.",
                  "feedback": "Citation checking alone does not establish that the interpretation matches the actual analyses and their limitations."
                },
                {
                  "text": "Ask AI to revise the paragraph from the abstract, then check that the edited version retains the reported estimates.",
                  "feedback": "Preserving estimates alone may miss changes to uncertainty, outcome definitions or scientific interpretation."
                },
                {
                  "text": "Write the interpretation from verified results, then request language edits and check that the scientific meaning is preserved.",
                  "feedback": "This defines the editing task and retains responsibility for the findings and their interpretation."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Example: Appropriate editing assistance",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex's original paragraph:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"The studies showed that SGLT2 inhibitors had benefits in patients with HFpEF. The main benefits were in heart failure hospitalization, and the results for cardiovascular mortality were less clear. The renal results were also difficult to compare because the studies used different outcomes.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI-edited version:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"Across the included studies, SGLT2 inhibitors demonstrated cardiovascular benefits in patients with HFpEF, primarily through reductions in heart failure hospitalization. Evidence for cardiovascular mortality was less conclusive, while differences in renal outcome definitions limited direct comparisons between studies.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex compares the two paragraphs.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The revised version is clearer and more concise without obviously changing the intended meaning.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, Alex still needs to ensure that every claim is supported by the actual findings and appropriately cited.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee reminds Alex that journal and institutional rules about AI-assisted writing vary, and that AI use may need to be disclosed.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI is often most useful as an editor, not a scientific author.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Use it to improve clarity, grammar, structure, and readability while retaining control of the scientific content.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Do not allow AI to invent results, citations, interpretations, or conclusions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: ICMJE Recommendations on AI Use in Publishing.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "After completing the analysis, Alex begins drafting the manuscript.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The methods section is difficult to organize, and the discussion feels repetitive.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks AI:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "\"Write the results and discussion for my systematic review.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI response",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "SGLT2 inhibitors significantly improve cardiovascular and renal outcomes in patients with HFpEF, demonstrating consistent reductions in mortality, heart failure hospitalization, and kidney disease progression.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "These findings establish SGLT2 inhibitors as effective treatments for improving both cardiac and renal survival outcomes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex notices that the paragraph sounds polished but makes several claims that may not be supported by the actual analysis.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The evidence for heart failure hospitalization is not necessarily equivalent to evidence for cardiovascular mortality or clinical renal endpoints.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex also realizes that the chatbot has not been given the actual results of the systematic review.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Give writing help verified material",
            "explanation": "For editing, supply your own findings and specify the changes you want: clearer wording, organization or grammar. Ask the model to preserve the results and their uncertainty, then compare the revision with the original.",
            "application": "Decide how Alex can get writing help without letting the chatbot invent the review’s findings."
          }
        },
        {
          "id": "research-scene-7",
          "title": "Research Integrity and the Final Submission",
          "intro": "Before submission, Alex reviews how AI helped with search terms, code and editing. Disclosure must describe what actually happened and follow the relevant requirements.",
          "questions": [
            {
              "id": "research-7-1",
              "question": "Which approach is most appropriate?",
              "choices": [
                {
                  "text": "Describe AI use in the project log, but omit it from submission materials if all outputs were checked manually.",
                  "feedback": "Internal records and manual checks do not replace any applicable submission disclosure requirements."
                },
                {
                  "text": "Name the AI tool in acknowledgements and let that statement cover its search, analysis and writing contributions.",
                  "feedback": "A generic acknowledgement may not describe the actual uses or satisfy the relevant requirements."
                },
                {
                  "text": "Check applicable requirements, disclose the actual AI assistance and retain human responsibility for the submitted work.",
                  "feedback": "This ties disclosure to what happened and to the rules governing this submission."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Example AI disclosure statement",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "\"Generative AI tools were used to assist with preliminary search-term brainstorming, explanation and drafting of statistical code, and language editing. All search strategies, study selection decisions, extracted data, statistical analyses, and manuscript content were reviewed and verified by the authors.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This is an illustrative statement, not a universal disclosure template. The actual disclosure must accurately describe the tools and activities used and comply with the target journal's requirements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Final conversation",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Lee: \"Looking back, what was the most useful thing AI did for your project?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"It helped me get started with unfamiliar tasks. I could ask questions about study design, understand statistical concepts, and write code more efficiently.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee: \"And what was its biggest limitation?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"It sometimes gave answers that sounded correct but weren't. I still had to read the papers, understand the methods, check the code, and interpret the findings myself.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Lee: \"Exactly. The goal of research isn't simply to produce a manuscript. It's to develop the skills to ask good questions, evaluate evidence, and produce trustworthy results.\"",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex has finished the FLEX project.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI helped with several stages:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Brainstorming search terms",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Understanding systematic review methodology",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Comparing statistical approaches",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Writing and debugging R code",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Creating Excel formulas",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Improving manuscript grammar and organization",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Before submitting the work, Alex reviews the journal's author instructions and the ICMJE recommendations.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex wonders whether AI use needs to be disclosed.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Keep a record of AI assistance",
            "explanation": "Record which tasks used AI and what the researcher checked. Disclosure should describe the actual use and follow the relevant submission requirements. It does not replace responsibility for the work.",
            "application": "Help Alex prepare an accurate account of the assistance used in this project."
          }
        }
      ],
      "summary": [
        {
          "type": "text",
          "text": "1. Use AI to explore, not replace, the literature.",
          "heading": false
        },
        {
          "type": "text",
          "text": "AI can help identify terminology and potential papers, but it cannot substitute for a reproducible search or independent critical appraisal.",
          "heading": false
        },
        {
          "type": "text",
          "text": "2. Use AI to brainstorm methodology, not make decisions for you.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Study design, eligibility criteria, outcome definitions, and statistical methods require informed human judgment.",
          "heading": false
        },
        {
          "type": "text",
          "text": "3. Verify every extracted value.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Check study results against original publications. Be especially careful with subgroup analyses, composite endpoints, and confidence intervals.",
          "heading": false
        },
        {
          "type": "text",
          "text": "4. Understand the statistics and code.",
          "heading": false
        },
        {
          "type": "text",
          "text": "AI-generated R code, SPSS syntax, and Excel formulas may be useful, but they can also be wrong. Validate both the inputs and outputs.",
          "heading": false
        },
        {
          "type": "text",
          "text": "5. Keep ownership of your scientific writing.",
          "heading": false
        },
        {
          "type": "text",
          "text": "AI can improve grammar and organization, but it should not invent findings, references, or conclusions.",
          "heading": false
        },
        {
          "type": "text",
          "text": "6. Be transparent and accountable.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Follow institutional and journal requirements, disclose relevant AI assistance, protect confidential research information, and take responsibility for the final work.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Closing message",
          "heading": true
        },
        {
          "type": "text",
          "text": "AI can be a valuable research assistant, particularly when you're learning unfamiliar methods.",
          "heading": false
        },
        {
          "type": "text",
          "text": "It can help you find a starting point, explain difficult concepts, troubleshoot code, and improve writing.",
          "heading": false
        },
        {
          "type": "text",
          "text": "But research is more than producing an answer.",
          "heading": false
        },
        {
          "type": "text",
          "text": "The most important skills are knowing what question to ask, understanding how to investigate it, recognizing when something is wrong, and being able to defend your conclusions.",
          "heading": false
        },
        {
          "type": "text",
          "text": "AI should help you develop those skills—not bypass them.",
          "heading": false
        }
      ],
      "references": [
        {
          "title": "UBC Faculty of Medicine. FLEX Activity Supervisor Handbook, Academic Year 2025–2026.",
          "url": "https://med-fom-mednet.sites.olt.ubc.ca/files/2025/11/FLEX-Activity-Supervisor-Handbook-AY-2025-2026.pdf"
        },
        {
          "title": "UBC Library. MD Program: FLEX Project Support.",
          "url": "https://guides.library.ubc.ca/MEDD/flex"
        },
        {
          "title": "Page MJ, McKenzie JE, Bossuyt PM, et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ. 2021;372.",
          "url": "https://doi.org/10.1136/bmj.n71"
        },
        {
          "title": "Shamseer L, Moher D, Clarke M, et al. Preferred reporting items for systematic review and meta-analysis protocols (PRISMA-P) 2015: elaboration and explanation. BMJ. 2015;350.",
          "url": "https://doi.org/10.1136/bmj.g7647"
        },
        {
          "title": "Higgins JPT, Thomas J, Chandler J, et al., editors. Cochrane Handbook for Systematic Reviews of Interventions. Cochrane.",
          "url": "https://training.cochrane.org/handbook"
        },
        {
          "title": "Sterne JAC, Savović J, Page MJ, et al. RoB 2: a revised tool for assessing risk of bias in randomised trials. BMJ. 2019;366.",
          "url": "https://doi.org/10.1136/bmj.l4898"
        },
        {
          "title": "Anker SD, Butler J, Filippatos G, et al. Empagliflozin in Heart Failure with a Preserved Ejection Fraction. New England Journal of Medicine. 2021;385:1451–1461.",
          "url": "https://doi.org/10.1056/NEJMoa2107038"
        },
        {
          "title": "Solomon SD, McMurray JJV, Claggett B, et al. Dapagliflozin in Heart Failure with Mildly Reduced or Preserved Ejection Fraction. New England Journal of Medicine. 2022;387:1089–1098.",
          "url": "https://doi.org/10.1056/NEJMoa2206286"
        },
        {
          "title": "International Committee of Medical Journal Editors. Recommendations: Use of Artificial Intelligence in Publishing.",
          "url": "https://www.icmje.org/recommendations/browse/artificial-intelligence/"
        }
      ],
      "background": [
        "A systematic review answers a defined research question using explicit methods for finding, selecting and evaluating studies. AI can help draft search terms, organize information and suggest code, but each output needs checking against the sources and the research plan.",
        "Alex is studying SGLT2 inhibitors, a class of medicines, in heart failure with preserved ejection fraction (HFpEF). You do not need to know these trials beforehand: focus on how Alex checks the question, evidence, calculations and wording."
      ]
    },
    {
      "id": "ethics",
      "label": "AI Ethics, Privacy, and Health Equity",
      "title": "When detection does not mean access",
      "description": "Follow Alex through a rural BC eye-screening program. Interpret results, consider privacy and discover why a referral does not guarantee access to care.",
      "duration": "Estimated 15–20 minutes",
      "sourceTab": "t.j42zwwf8yssh",
      "objectives": [
        "Explain how AI-assisted diabetic retinopathy screening may improve access to early disease detection.",
        "Recognize limitations of AI diagnostic performance, including false negatives, false positives, and ungradable images.",
        "Identify how training data and deployment settings can contribute to algorithmic bias.",
        "Recognize important privacy, consent, and data-governance considerations.",
        "Distinguish technological accessibility from equitable access to healthcare.",
        "Explain the importance of accountability, patient follow-up, and evaluating real-world health outcomes."
      ],
      "scenes": [
        {
          "id": "ethics-scene-1",
          "title": "Bringing Eye Screening Closer to Home",
          "intro": "A rural clinic can take retinal photographs locally. An authorized AI screening system identifies people who may need further assessment.",
          "questions": [
            {
              "id": "ethics-1-1",
              "question": "What is the most important potential benefit of introducing this technology in a rural community?",
              "choices": [
                {
                  "text": "It brings screening and the subsequent specialist examination into the same local visit.",
                  "feedback": "The story establishes local screening, not local specialist assessment at the same visit."
                },
                {
                  "text": "It brings retinal screening closer to home and may identify people needing assessment earlier.",
                  "feedback": "This is the potential access benefit described; subsequent assessment still needs a functioning pathway."
                },
                {
                  "text": "It reduces travel for screening and therefore resolves the main barriers to specialist follow-up.",
                  "feedback": "Screening access can improve while travel and other referral barriers remain."
                },
                {
                  "text": "It reduces specialist demand by reserving referrals for patients with a confirmed eye diagnosis.",
                  "feedback": "The screening result recommends further assessment; it does not establish a confirmed diagnosis for every referred patient."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "AI may improve access to screening without eliminating the need for specialist care.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The potential benefit is not simply faster image interpretation. It is bringing an important healthcare service closer to patients who previously faced substantial barriers.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Michael Smith Health Research BC, National Tele-ophthalmology Research Program [1].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex arrives at the rural family medicine clinic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen, the supervising family physician, introduces a new diabetic retinopathy screening program.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"We've had trouble getting patients screened regularly. The nearest ophthalmology clinic is several hours away, and many patients don't have reliable transportation.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"So patients can now get their eyes checked here?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"They can have retinal photographs taken here. The AI system analyzes the images and tells us whether further assessment is recommended.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic uses an appropriately authorized AI screening system. Its specific capabilities and limitations are documented, and staff have been trained to use it.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The system is intended to detect signs of diabetic retinopathy that warrant referral. It does not replace a comprehensive eye examination or assess every possible eye disease.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "How AI screening works",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A trained healthcare worker captures retinal photographs.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The AI analyzes the images for features associated with diabetic retinopathy.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The system produces a screening result, such as referral recommended, referral not indicated, or insufficient image quality.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic communicates the result and arranges appropriate follow-up.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Follow the whole screening pathway",
            "explanation": "A screening service needs image capture, a result, communication with the patient and a route to further assessment. Bringing a camera closer to home addresses one part of that pathway.",
            "application": "Meet the clinic and consider what the system is intended to do before judging its benefits."
          }
        },
        {
          "id": "ethics-scene-2",
          "title": "A Positive Screening Result",
          "intro": "Mr. Singh receives a “referral recommended” result. Consider what that result means, then interpret a sensitivity value.",
          "questions": [
            {
              "id": "ethics-2-1",
              "question": "Which interpretation is most appropriate?",
              "choices": [
                {
                  "text": "It establishes retinopathy, while the specialist visit determines its severity and treatment.",
                  "feedback": "The result is a screening recommendation, not a definitive diagnosis that leaves only staging to be resolved."
                },
                {
                  "text": "It supports further assessment, while the diagnosis and management still require evaluation.",
                  "feedback": "This interprets the referral recommendation without treating it as a complete diagnostic or treatment assessment."
                },
                {
                  "text": "It should be confirmed by another AI screen before the clinic initiates a specialist referral.",
                  "feedback": "The stated pathway recommends referral; adding a model confirmation step could defer the indicated assessment."
                },
                {
                  "text": "It establishes a high chance of sight-threatening disease, although the exact stage remains uncertain.",
                  "feedback": "The supplied result alone does not establish that specific probability or severity."
                }
              ],
              "correct": 1,
              "multi": false,
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex meets Mr. Singh, a 63-year-old patient with type 2 diabetes who has not had retinal screening in several years.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Singh works at a local lumber mill and lives outside town.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "He agrees to have retinal photographs taken.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The AI analyzes the images and produces the following result:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI SCREENING RESULT",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Referral recommended.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Findings suggest diabetic retinopathy requiring further ophthalmic assessment.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "This is a screening result, not a definitive diagnosis or treatment plan.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"The system flagged his images. Does that mean he definitely has vision-threatening diabetic retinopathy?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Not necessarily. We need to understand what the result means and follow the recommended referral pathway.\"",
                  "heading": false
                }
              ],
              "after": []
            },
            {
              "id": "ethics-2-2",
              "question": "If an AI screening system has 90% sensitivity, what does that mean?",
              "choices": [
                {
                  "text": "About 90% of people with the target condition receive a positive screening result.",
                  "feedback": "Sensitivity uses people who truly have the target condition as its denominator."
                },
                {
                  "text": "About 90% of people with a positive screening result truly have the target condition.",
                  "feedback": "This reverses the conditioning: it describes positive predictive value, not sensitivity."
                },
                {
                  "text": "About 90% of people without the target condition receive a negative screening result.",
                  "feedback": "This describes specificity, which uses people without the condition as its denominator."
                },
                {
                  "text": "About 90% of all people screened receive a result that matches their disease status.",
                  "feedback": "This describes overall accuracy rather than sensitivity among people with the condition."
                }
              ],
              "correct": 0,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Diagnostic accuracy is essential, but it must be interpreted correctly.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An AI system can have strong overall performance and still produce false negatives, false positives, or ungradable images.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: Abràmoff et al., 2018 [2].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex learns that AI systems are evaluated using measures such as sensitivity and specificity.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A landmark study of an autonomous diabetic retinopathy screening system reported sensitivity of 87.2% and specificity of 90.7% for detecting more-than-mild diabetic retinopathy under its study conditions.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, those numbers do not mean every AI system performs identically or that performance will remain unchanged in every community.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Interpret a screening result carefully",
            "explanation": "A referral recommendation means further assessment is needed. Sensitivity describes the proportion of people with the target condition who test positive; it is not the probability that a particular positive result is correct.",
            "application": "Apply that distinction to Mr. Singh’s result and the performance question that follows."
          }
        },
        {
          "id": "ethics-scene-3",
          "title": "When the AI Cannot Interpret an Image",
          "intro": "Repeated photographs remain ungradable. The system cannot provide a reliable screening result, and the patient asks whether their eyes are healthy.",
          "questions": [
            {
              "id": "ethics-3-1",
              "question": "What is the most appropriate response?",
              "choices": [
                {
                  "text": "Explain the technical limitation and arrange routine rescreening at the next scheduled interval.",
                  "feedback": "Ungradable is not a reassuring negative result; default routine rescreening can miss the required assessment pathway."
                },
                {
                  "text": "Explain the uncertainty and follow the ungradable-image pathway, including further assessment when indicated.",
                  "feedback": "Repeated ungradable images require the established pathway, rather than reassurance or treating absent detection as absence of disease."
                },
                {
                  "text": "Repeat photographs until the system returns a grade, then use that result as the assessment endpoint.",
                  "feedback": "Repeated attempts alone do not replace escalation when images remain ungradable."
                },
                {
                  "text": "Use the absence of an AI disease flag to choose a lower-priority follow-up appointment.",
                  "feedback": "No reliable interpretation was produced; absent flags cannot establish lower disease risk or urgency."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen explains that image quality can be affected by cataracts, small pupils, media opacity, camera technique, and other factors.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex realizes that the program needs a plan for patients whose images cannot be interpreted.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Otherwise, some patients could leave without meaningful screening or follow-up.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A screening program must account for patients the AI cannot assess.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "A technology that works well for most patients can still create inequities if its failures are concentrated among patients who already face barriers to care.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Later that morning, another patient undergoes screening.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The first set of retinal photographs is blurry.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The technician repeats the imaging, but the system returns:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "AI SCREENING RESULT",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Insufficient image quality.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Unable to provide a reliable screening result.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The patient asks whether this means their eyes are healthy.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Distinguish no result from a negative result",
            "explanation": "An ungradable image cannot support a reliable screening interpretation. It does not establish that the eye is healthy. The patient still needs an appropriate next step in the care pathway.",
            "application": "Consider how to explain the result when repeated photographs remain ungradable."
          }
        },
        {
          "id": "ethics-scene-4",
          "title": "Does the AI Work Equally Well for Everyone?",
          "intro": "The clinic observes more ungradable images among older patients with cataracts. Overall performance cannot answer whether everyone can access and benefit from the service.",
          "questions": [
            {
              "id": "ethics-4-1",
              "question": "What would be the most appropriate way to evaluate whether the screening program is equitable?",
              "choices": [
                {
                  "text": "Compare diagnostic accuracy by group, using only patients whose images the AI could grade.",
                  "feedback": "Excluding ungradable images can hide an important source of unequal screening performance and access."
                },
                {
                  "text": "Compare performance, ungradable rates, screening access and follow-up across relevant patient groups.",
                  "feedback": "This examines multiple points where unequal benefit may arise, using appropriate reliable data and privacy safeguards."
                },
                {
                  "text": "Compare referral rates by group and use similar rates as evidence that the program is equitable.",
                  "feedback": "Similar referral rates need not imply similar disease burden, access, diagnostic performance or completed follow-up."
                },
                {
                  "text": "Compare screening participation by group and assess diagnostic quality using the overall validated accuracy.",
                  "feedback": "Local subgroup performance and follow-up can differ even when participation is similar and overall validation looks good."
                }
              ],
              "correct": 1,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Additional teaching point",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Algorithmic bias can arise from several sources:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Training data that do not adequately represent the intended population",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Differences in image acquisition equipment or technique",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Different disease prevalence or patient characteristics",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Inappropriate outcome definitions",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Changes in performance when an algorithm is deployed outside its validated setting",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Unequal access to screening and follow-up",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "These are potential mechanisms, not proof that the screening system is biased.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic would need appropriately designed evaluations to determine whether meaningful disparities exist.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "An algorithm can be accurate on average without performing equally well in every population or setting.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Equitable implementation requires ongoing evaluation, not just a one-time validation study.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Reference: World Health Organization, Ethics and Governance of AI for Health [3].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "After several weeks, the clinic reviews the screening program.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex notices that the system produces more ungradable results among older patients with cataracts.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic also serves patients from several different communities and backgrounds.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex asks Dr. Chen:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"If the AI was validated in a large clinical trial, can we assume it works equally well for everyone here?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"That's an important question. Validation in one population doesn't guarantee equivalent performance in another.\"",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Ask who benefits and who is missed",
            "explanation": "An overall performance number can conceal differences between groups. Consider image quality, diagnostic performance, access to screening and completion of follow-up. The story’s observation is a reason to investigate, not enough by itself to prove bias.",
            "application": "Compare what the clinic knows with the additional evidence needed to judge equity."
          }
        },
        {
          "id": "ethics-scene-5",
          "title": "Privacy, Consent, and Patient Trust",
          "intro": "Ms. Williams asks where her retinal images go and whether a company can reuse them. The team must check the platform’s actual arrangements.",
          "questions": [
            {
              "id": "ethics-5-1",
              "question": "What is the most appropriate response?",
              "choices": [
                {
                  "text": "The clinic approved the platform; I can explain access now and confirm any company reuse after screening.",
                  "feedback": "The patient has asked about reuse before deciding. Approval does not justify postponing that answer."
                },
                {
                  "text": "Your name is separated from the images, so we can describe storage without discussing possible secondary use.",
                  "feedback": "Removing a name does not resolve the questions about access, retention or reuse."
                },
                {
                  "text": "Let’s check the approved information about access, storage, reuse and your choices before you decide.",
                  "feedback": "This addresses the actual questions without inventing assurances about arrangements the team has not checked."
                },
                {
                  "text": "You can decline company reuse later; for today, we can proceed under the clinic’s general screening consent.",
                  "feedback": "The story does not establish that later opt-out or general consent covers the proposed uses."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen uses the clinic's approved patient information materials to explain the system.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The team does not claim that images are automatically deleted or never reused unless those statements are supported by the platform's actual arrangements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Ms. Williams is given an opportunity to ask questions and make an informed decision.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Important teaching point: Privacy and governance",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Before implementing a clinical AI system, organizations should address:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "What information is collected and why.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Where and how information is processed and stored.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Who can access the data.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Whether information may be used for secondary purposes, including model training.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Applicable retention, deletion, security, and breach-response requirements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Consent, transparency, and accountability requirements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "In BC, applicable privacy requirements depend on the healthcare organization and setting. These may include the Freedom of Information and Protection of Privacy Act, the Personal Information Protection Act, and relevant health-sector rules.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Students should follow UBC and clinical-site policies rather than independently choosing AI platforms for patient information.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Patient trust is not a technical feature of an algorithm.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Privacy, transparency, informed choice, and appropriate data governance are essential to responsible clinical AI implementation.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "References: WHO [3]; Office of the Privacy Commissioner of Canada [4].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A patient named Ms. Williams arrives for screening.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "She is comfortable having retinal photographs taken but becomes concerned when she learns that AI will analyze the images.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Ms. Williams: \"Are my eye pictures going to some company? Could they use them to train their software? I don't really understand where the information goes.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex initially considers reassuring her that the images are anonymous.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, Dr. Chen explains that retinal images are health information and may remain identifiable or linkable to a patient.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic must understand the actual data flows and permitted uses of the platform.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Check how information will be used",
            "explanation": "Explain where images and other information go, who can access them, how long they are kept and whether secondary use is permitted. Those answers depend on the actual platform and arrangements.",
            "application": "Ms. Williams asks about company reuse. Choose how to respond when the team has not yet established the answer."
          }
        },
        {
          "id": "ethics-scene-6",
          "title": "The Patient Who Still Cannot Access Care",
          "intro": "Mr. Singh’s specialist appointment is almost four hours away. He wants to attend, but transport and lost work make the trip difficult.",
          "questions": [
            {
              "id": "ethics-6-1",
              "question": "What is the most appropriate next step?",
              "choices": [
                {
                  "text": "Keep the referral open and send reminders, allowing the patient to book once transport becomes available.",
                  "feedback": "Reminders do not address the identified transport and work barriers or assess clinical urgency."
                },
                {
                  "text": "Explain the risks again and ask the patient to prioritize attendance before discussing practical arrangements.",
                  "feedback": "He already wants to attend. Repeating risk information does not resolve the barriers or identify a feasible pathway."
                },
                {
                  "text": "Discuss barriers and clinical urgency, then coordinate feasible transport, navigation or outreach support.",
                  "feedback": "This responds to the reason the referral is not reachable and links support to the needed timing of care."
                },
                {
                  "text": "Offer repeat local screening while he arranges travel, deferring referral coordination until symptoms develop.",
                  "feedback": "Repeat screening does not replace indicated assessment, and symptom onset is not established as a safe trigger for follow-up."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Dr. Chen contacts the referral coordinator to explore available options.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Depending on the patient's clinical needs and available local resources, possibilities may include transportation support, coordinated appointments, visiting ophthalmology services, or other appropriate referral arrangements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Not all of these services are available in every rural community.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex begins to appreciate the distinction between screening access and treatment access.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The central health equity lesson",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "The AI has helped solve one problem:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Patients no longer need to travel several hours simply to obtain an initial retinal screening.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But it has not automatically solved the next problem:",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Patients with abnormal results may still need to travel for further testing, specialist assessment, or treatment.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The technology has moved one part of the care pathway closer to home, while other parts remain geographically inaccessible.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Improving diagnostic access is not the same as improving access to care.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "An equitable AI program must consider the entire patient journey—from screening to diagnosis, referral, treatment, and follow-up.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "References: Health Canada, National Strategy for Eye Care [5]; Michael Smith Health Research BC [1].",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 3–4 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Two weeks later, Alex reviews the screening program with Dr. Chen.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Singh, the patient from Scene 2, was referred for further ophthalmic assessment after his positive AI screening result.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, he has not attended the appointment.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex initially assumes that Mr. Singh forgot or did not understand the importance of follow-up.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen calls him to ask what happened.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Singh: \"I know I need to get my eyes checked. But the appointment is almost four hours away. I'd have to take a full day off work, maybe more if the weather is bad.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Is transportation the main difficulty?\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Mr. Singh: \"That's part of it. My wife doesn't drive, and I can't afford to miss another day of work. I want to go, but it's not that simple.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex realizes that the AI worked as intended: it identified a patient who needed further assessment.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "But the healthcare system has not yet enabled that patient to receive care.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Check whether a referral is reachable",
            "explanation": "A referral can be clinically appropriate and still be difficult to complete. Travel time, transport and lost wages affect whether someone can attend. Ask what support connects the screening result to care.",
            "application": "Mr. Singh wants to attend. Identify the barrier rather than assuming that non-attendance means refusal."
          }
        },
        {
          "id": "ethics-scene-7",
          "title": "Is the AI Program Actually Successful?",
          "intro": "The program screened 400 people. Of 60 referral-recommended results, 24 patients completed specialist follow-up and 36 had not by the reporting date. Consider what success should mean.",
          "questions": [
            {
              "id": "ethics-7-1",
              "question": "How should the clinic evaluate the program's success?",
              "choices": [
                {
                  "text": "Compare screening volume and referral numbers with the prior service to estimate the program’s clinical benefit.",
                  "feedback": "Those counts describe activity and recommendations, not whether patients received timely assessment or benefited."
                },
                {
                  "text": "Compare accuracy and completed referrals overall, using the combined results to judge benefit across groups.",
                  "feedback": "Overall figures can conceal differences in access and outcomes between groups and omit follow-up timing."
                },
                {
                  "text": "Assess reach, performance, timely follow-up, patient barriers, group differences and subsequent clinical outcomes.",
                  "feedback": "This evaluates the pathway beyond screening throughput and recognizes both access and downstream outcomes."
                },
                {
                  "text": "Compare completion among patients who accepted appointments, excluding those unable to arrange travel.",
                  "feedback": "Excluding people who cannot travel hides the access failure the program needs to evaluate."
                }
              ],
              "correct": 2,
              "multi": false,
              "after": [
                {
                  "type": "text",
                  "text": "Story continues",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex and Dr. Chen propose several improvements.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The program should monitor how many patients receive screening, how many require referral, how many complete follow-up, and how long patients wait.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic should also examine whether travel distance, income-related barriers, disability, language needs, and other relevant factors affect access, using appropriate privacy safeguards and community engagement.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The team discusses whether more outreach clinics, transportation support, or coordinated referral services could improve outcomes.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "They also recognize that a screening program should be evaluated for unintended consequences, including unnecessary referrals, missed disease, and the diversion of resources from other needed services.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Final conversation",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Alex: \"I thought the biggest challenge would be whether the AI could detect diabetic retinopathy accurately.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Accuracy is essential. But what happens after the result matters just as much.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Alex: \"So even if the AI works perfectly, patients can still be left without treatment.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Dr. Chen: \"Exactly. Technology can reduce some barriers while leaving others untouched. Our responsibility is to understand the entire system.\"",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Key takeaway",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "A successful AI program should be judged by whether it improves meaningful patient outcomes and equitable access—not simply by how many predictions it makes.",
                  "heading": false
                }
              ],
              "before": [
                {
                  "type": "text",
                  "text": "Estimated duration: 2–3 minutes",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Story",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "At the end of the initiative, the clinic prepares a report for its regional health authority.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The initial results look encouraging.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "Program results",
                  "heading": true
                },
                {
                  "type": "text",
                  "text": "Over six months:",
                  "heading": false
                },
                {
                  "type": "table",
                  "rows": [
                    [
                      "Measure",
                      "Result"
                    ],
                    [
                      "Patients screened",
                      "400"
                    ],
                    [
                      "Patients with a referral-recommended result",
                      "60"
                    ],
                    [
                      "Patients with a referral-recommended result who completed specialist follow-up",
                      "24"
                    ],
                    [
                      "Patients with a referral-recommended result who had not completed follow-up by the reporting date",
                      "36"
                    ]
                  ]
                },
                {
                  "type": "text",
                  "text": "Follow-up completion depends partly on the time elapsed and the urgency of the referral.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "The clinic administrator is pleased that 400 patients received screening without needing to travel to an ophthalmology clinic.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "However, Alex notices that only 24 of the 60 patients with referral-recommended results have completed specialist follow-up.",
                  "heading": false
                },
                {
                  "type": "text",
                  "text": "That represents 40%.",
                  "heading": false
                }
              ]
            }
          ],
          "reading": [],
          "teaching": {
            "title": "Judge the service by what happens next",
            "explanation": "Counts of people screened describe activity. To assess benefit, also examine whether indicated follow-up happens, how promptly it happens and who encounters barriers. A percentage needs a clear numerator, denominator and reporting period.",
            "application": "Use the program’s numbers to decide what its results establish and what remains unresolved."
          }
        }
      ],
      "summary": [
        {
          "type": "text",
          "text": "1. Patient safety comes first",
          "heading": true
        },
        {
          "type": "text",
          "text": "AI tools must be evaluated for accuracy, reliability, appropriate intended use, and potential harm.",
          "heading": false
        },
        {
          "type": "text",
          "text": "2. Privacy and autonomy matter",
          "heading": true
        },
        {
          "type": "text",
          "text": "Patients should understand how their information is used and have appropriate opportunities to make informed choices.",
          "heading": false
        },
        {
          "type": "text",
          "text": "3. Algorithms can reproduce inequities",
          "heading": true
        },
        {
          "type": "text",
          "text": "Training data, clinical settings, image quality, and implementation decisions can all affect who benefits from AI.",
          "heading": false
        },
        {
          "type": "text",
          "text": "4. Human accountability remains essential",
          "heading": true
        },
        {
          "type": "text",
          "text": "Healthcare professionals and organizations remain responsible for appropriate clinical workflows, oversight, referrals, and follow-up.",
          "heading": false
        },
        {
          "type": "text",
          "text": "5. Access to technology is not the same as access to healthcare",
          "heading": true
        },
        {
          "type": "text",
          "text": "A patient may receive an accurate screening result yet remain unable to obtain specialist care because of transportation, cost, or geographic barriers.",
          "heading": false
        },
        {
          "type": "text",
          "text": "6. Evaluate outcomes, not just outputs",
          "heading": true
        },
        {
          "type": "text",
          "text": "The success of AI should be measured through patient-centred outcomes, safety, access, and equity—not only diagnostic accuracy or screening volume.",
          "heading": false
        },
        {
          "type": "text",
          "text": "Closing message",
          "heading": true
        },
        {
          "type": "text",
          "text": "Artificial intelligence has the potential to improve healthcare access, particularly in communities where specialist services are limited.",
          "heading": false
        },
        {
          "type": "text",
          "text": "But technology alone cannot eliminate the social and structural barriers that influence health.",
          "heading": false
        },
        {
          "type": "text",
          "text": "An AI system that detects disease but leaves patients unable to receive care has only solved part of the problem.",
          "heading": false
        },
        {
          "type": "text",
          "text": "The challenge for future physicians is not simply to understand what AI can do.",
          "heading": false
        },
        {
          "type": "text",
          "text": "It is to recognize who benefits, who may be left behind, and what must change for technological innovation to produce meaningful improvements in health.",
          "heading": false
        }
      ],
      "references": [
        {
          "title": "Michael Smith Health Research BC. Diabetic retinopathy screening – National tele-ophthalmology. Describes Canadian research involving community-based screening and approaches to improving access in remote and underserved communities.",
          "url": "https://www.healthresearchbc.ca/award/diabetic-retinopathy-screening-national-tele-ophthalmology/"
        },
        {
          "title": "Abràmoff MD, Lavin PT, Birch M, Shah N, Folk JC. Pivotal trial of an autonomous AI-based diagnostic system for detection of diabetic retinopathy in primary care offices. npj Digital Medicine. 2018;1:39.",
          "url": "https://doi.org/10.1038/s41746-018-0040-6"
        },
        {
          "title": "World Health Organization. Ethics and governance of artificial intelligence for health: WHO guidance. Geneva: WHO; 2021.",
          "url": "https://www.who.int/publications/i/item/9789240029200"
        },
        {
          "title": "Office of the Privacy Commissioner of Canada. Responsible use of artificial intelligence in health and health research. Joint resolution of federal, provincial, and territorial privacy regulators; 2026.",
          "url": "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20260915_aihealth"
        },
        {
          "title": "Health Canada. National Strategy for Eye Care. 2026. Discusses barriers to accessing eye care, including geographic distance and socioeconomic factors.",
          "url": "https://www.canada.ca/en/health-canada/services/publications/health-system-services/national-strategy-eye-care.html"
        },
        {
          "title": "Canadian Ophthalmological Society. Evidence-based clinical practice guidelines for the management of diabetic retinopathy. Canadian Journal of Ophthalmology. 2017. Relevant guidance on diabetic retinopathy screening and teleophthalmology.",
          "url": "https://www.canadianjournalofophthalmology.ca/article/S0008418217310475/pdf"
        },
        {
          "title": "Ontario Health. Teleophthalmology. Example of a Canadian community-based retinal screening and specialist referral pathway.",
          "url": "https://www.ontariohealth.ca/digital/programs-services/econsult/teleophthalmology"
        }
      ],
      "background": [
        "Screening looks for people who may need further assessment. In this story, a clinic takes retinal photographs and uses an AI system to help identify patients who need follow-up for diabetic eye disease. A screening result is one step in a care pathway.",
        "You will consider what results mean, what happens when images cannot be interpreted, how patient information is handled and whether people can obtain follow-up. The story connects technical performance with the patient’s actual experience."
      ]
    }
  ]
};
