/* Authored, fixed teaching conversations. Sources support the teaching and medical facts. */
window.MODULE = {
  sources: {
    prompting: { title: 'AACOM: Interacting with AI', url: 'https://www.aacom.org/medical-education/ai-hub/ai-foundations/interacting-with-ai', section: 'Contextual prompting; practical framework; prompt iteration' },
    design: { title: 'Google: Prompt design strategies', url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies', section: 'Clear instructions; constraints; response format; prompt iteration' },
    evaluation: { title: 'AACOM: Evaluating AI output', url: 'https://www.aacom.org/medical-education/ai-hub/ai-foundations/evaluating-ai-output', section: 'Importance of evaluating output; accuracy and completeness' },
    responsible: { title: 'AACOM: Responsible use', url: 'https://www.aacom.org/medical-education/ai-hub/ai-foundations/module-3', section: 'Data stewardship; Smart Use Tips' },
    recall: { title: 'IES: Learning and study practice', url: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/1', section: 'Recommendations 5b and 7: retrieval and explanatory questions' },
    nih: { title: 'NIH ODS: Potassium', url: 'https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/', section: 'Interactions with Medications: ACE inhibitors and ARBs' },
    hormones: { title: 'OpenStax: Kidney hormone regulation', url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-8-endocrine-regulation-of-kidney-function', section: 'Renin–Angiotensin–Aldosterone' },
    merck: { title: 'Merck Manual: Potassium concentration', url: 'https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/overview-of-disorders-of-potassium-concentration', section: 'Potassium shifts; Potassium metabolism' },
    course: { title: 'Poinen: Potassium Disorders, UBC MEDD Week 49', url: null, section: 'Supplied lecture, slides 14–16, 18–19 and 24. Not publicly hosted.' },
    usmle: { title: 'USMLE Step 1 sample case (includes answer)', url: 'https://www.usmle.org/pdfs/step-1/samples_step1.pdf', section: 'February 2021 booklet: item 62, printed p. 29; key, printed p. 49' },
    cdc: { title: 'CDC: Diagnosing von Willebrand disease', url: 'https://www.cdc.gov/von-willebrand/diagnosis/', section: 'Screening tests; Diagnostic tests, May 15, 2024' }
  },
  parts: [
    { id: 'ask', title: 'Ask for the help you need', purpose: 'Tell the model what a useful response should contain.', units: [
      {
        id: 'ask-gap', title: 'Start with a learning gap',
        teach: '<p>A chatbot is an AI tool you talk to through messages. Your message is a <b>prompt</b>; its answer is a <b>reply</b>. In a real tool, type in the message box and press Send. Here, choose a prepared message.</p><p>Before asking, identify your task, what you already understand and the connection you need explained. Your training level helps specify where the explanation should begin. A topic name alone leaves the model to choose the scope.</p>',
        context: 'After a kidney lecture, you remember that ACE inhibitors reduce angiotensin II. You cannot explain the effect on blood potassium.',
        goal: 'Get an explanation focused on that missing connection.',
        question: 'Which message would you send?', sources: ['prompting', 'nih', 'hormones'],
        choices: [
          { text: 'Explain ACE inhibitors.', correct: false, why: 'This names a topic but leaves your existing knowledge and the missing connection unspecified.', reply: 'ACE inhibitors block conversion of angiotensin I to angiotensin II. Angiotensin II belongs to the renin–angiotensin–aldosterone system, which helps regulate blood pressure and kidney function.' },
          { text: 'I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I cannot explain why blood potassium can rise. Explain that connection in plain language.', correct: true, why: 'You stated your level, starting knowledge, exact gap and the kind of explanation you want.', reply: 'Angiotensin II stimulates aldosterone. Aldosterone helps the kidney secrete potassium into urine. Reducing that signal can reduce potassium excretion, allowing blood potassium to rise.' }
        ]
      },
      {
        id: 'ask-format', title: 'Describe the output you want',
        teach: '<p>You can specify the <b>shape of the answer</b>: a short explanation, comparison table, arrow chain or question. Give an example of the structure if the format matters. “Be my tutor” leaves these choices open.</p><p>For this mechanism, ask for <b>drug change → hormone effect → kidney effect</b>. This gives you a structure you can follow and inspect. Getting the requested format does not establish that the medical content is correct; you will practise that check in part 3.</p>',
        context: 'The previous reply gave you a paragraph. You now want to see the direction of each change.',
        goal: 'Get a short arrow chain, keeping the same mechanism.', question: 'Which follow-up specifies that output?', sources: ['design', 'prompting', 'nih', 'hormones'],
        choices: [
          { text: 'Keep the same mechanism. Rewrite it as drug change → hormone effect → kidney effect. Define any unfamiliar term.', correct: true, why: 'You told the model what to keep and showed the structure you want.', reply: 'ACE inhibition → reduced angiotensin II–mediated aldosterone stimulation → reduced potassium secretion into urine. Secretion means movement into tubular fluid so potassium can leave in urine.' },
          { text: 'Give me more detail about everything ACE inhibitors do.', correct: false, why: 'This expands the topic and detail. It does not request the arrow-chain format you need.', reply: 'ACE inhibition affects several hormone-dependent kidney processes. A broad explanation could cover each of them in detail.' }
        ]
      },
      {
        id: 'ask-boundaries', title: 'Tell it which information to use',
        teach: '<p>If you want an answer based on course material, provide the relevant excerpt and say how it should be used. Ask the model to identify anything the excerpt cannot support. It cannot use a document that you have not supplied simply because you mention “my lecture”.</p><p>A complete request can combine <b>task + relevant context + output + boundaries</b>. Include information that changes the answer. You can refine the request after seeing the reply.</p>',
        context: 'You want two recall questions based only on this excerpt, delivered one at a time.',
        sourceText: 'Angiotensin II stimulates aldosterone. Aldosterone promotes potassium excretion.',
        goal: 'Specify both the source boundary and the interaction order.', question: 'Which prepared instruction fits?', sources: ['prompting', 'design', 'responsible', 'hormones'],
        choices: [
          { text: 'Use only this excerpt to make two recall questions. Ask one question, wait for my answer, then give feedback before asking the next. Flag anything the excerpt does not establish.', correct: true, why: 'You specified the source, the response sequence and how to handle missing support.', reply: 'First question: which hormone does angiotensin II stimulate? I will wait for your answer before feedback and the second question.' },
          { text: 'You know what my course teaches. Give me questions and all their answers now.', correct: false, why: 'This assumes access to course content and reveals the answers before you attempt the questions.', reply: 'Without the excerpt, I would be choosing the content myself. Showing questions with their answers would also remove the pause for your attempt.' }
        ]
      }
    ]},
    { id: 'steer', title: 'Steer the conversation and test yourself', purpose: 'Use follow-ups to fix a mismatch, then attempt an answer.', units: [
      {
        id: 'steer-term', title: 'Name what is unclear',
        teach: '<p>A <b>follow-up</b> is your next message in the same conversation. Compare the reply with your goal and name the mismatch. Ask for a definition when a word is unfamiliar, an explanation when a connection is missing, or a new format when the structure is difficult to follow.</p><p>Tell the model what to keep and what to change. This makes the revision request more specific than “explain again”.</p>',
        context: 'The chatbot says: “ENaC, a sodium channel, makes the lumen relatively negative.” You do not know what “lumen” means.',
        goal: 'Understand the unfamiliar word before adding more detail.', question: 'What would you send next?', sources: ['prompting', 'design', 'course'],
        choices: [
          { text: 'Explain the whole kidney lecture again with more detail.', correct: false, why: 'A larger explanation does not identify the word blocking your understanding.', reply: 'In the distal nephron, sodium enters through ENaC. The lumen-negative electrical gradient favours potassium secretion into the lumen.' },
          { text: 'Keep the same example. What does “lumen” mean here? Use plain language.', correct: true, why: 'You isolated the unfamiliar word and kept the useful context.', reply: 'The lumen is the inside of the kidney tubule, where fluid that will become urine is flowing. In this example, potassium secretion moves potassium into that fluid.' }
        ]
      },
      {
        id: 'steer-link', title: 'Ask about one missing connection',
        teach: '<p>Once the words make sense, identify the first step you cannot explain. State what you understand before naming that gap.</p><p>For example: <b>“I understand that sodium enters the cell. Explain how that changes the electrical driving force for potassium.”</b> After the revision, try explaining the connection yourself. If it is still unclear, name the remaining step.</p>',
        context: 'You understand that ENaC allows positively charged sodium to move from tubular fluid into a kidney cell. You do not see how that affects potassium secretion.',
        goal: 'Get the electrical connection explained without restarting the topic.', question: 'Which follow-up targets the gap?', sources: ['prompting', 'course'],
        choices: [
          { text: 'I understand sodium entry through ENaC. Explain only how removing positive charge from tubular fluid affects potassium secretion.', correct: true, why: 'You located the missing connection and limited the next explanation to that step.', reply: 'When positive sodium charge leaves tubular fluid, that fluid becomes relatively negative. This electrical difference favours positively charged potassium moving into the tubular fluid through potassium channels.' },
          { text: 'Repeat the same explanation using more medical terminology.', correct: false, why: 'Changing the vocabulary does not identify or resolve the missing electrical connection.', reply: 'ENaC-mediated sodium reabsorption establishes a lumen-negative electrical potential, favouring potassium secretion.' }
        ]
      },
      {
        id: 'steer-quiz', title: 'Ask for an attempt before the answer',
        teach: '<p><b>Active recall</b> means trying to retrieve an answer from memory. Ask the chatbot to give one question and wait. Then send your attempt, including your reason. If you make an error, ask it to explain that step and revisit it with another question.</p><p>To move beyond remembering an explanation, ask for a new situation where you must apply it. Check unfamiliar feedback against your source.</p>',
        context: 'You have read that insulin shifts potassium into cells. Now you want to test whether you can distinguish a shift from removal from the body.',
        goal: 'Attempt a question before seeing its answer.', question: 'Choose the next message.', sources: ['prompting', 'recall', 'merck'],
        choices: [
          { text: 'Summarize potassium shifts and give me the answer to a practice question.', correct: false, why: 'This reveals the explanation and answer before your attempt.', reply: 'Insulin shifts potassium into cells. That is redistribution within the body; urinary excretion removes potassium from it.' },
          { text: 'Ask me one question about potassium shifts versus removal. Wait for my answer, then explain any error.', correct: true, why: 'You specified question → attempt → feedback, with a pause for your own retrieval.', reply: 'After insulin moves potassium into cells, has that movement removed potassium from the body, or changed its location within the body?' }
        ]
      },
      {
        id: 'steer-attempt', title: 'Answer, then use the feedback',
        teach: '<p>Now make the attempt. Your explanation helps identify which step needs feedback. A lower blood concentration and a lower total amount in the body are different claims.</p><p>After feedback, ask for a new question about the distinction you missed. Repeating the correct sentence without understanding its meaning is not the goal of this exercise.</p>',
        context: 'The chatbot is waiting: “After insulin moves potassium into cells, has potassium left the body?”',
        goal: 'Explain redistribution versus removal.', question: 'Choose your answer to the chatbot.', sources: ['merck', 'recall'],
        choices: [
          { text: 'It changed location within the body. Moving potassium into a cell does not itself remove it from the body.', correct: true, why: 'Correct medical reasoning. You distinguished redistribution from excretion.', reply: 'Yes. The shift changes distribution within the body. Urinary excretion is a separate process that removes potassium. You can now ask for a new question applying that distinction.' },
          { text: 'It left the body, because there is less potassium in the blood.', correct: false, why: 'A change in blood concentration does not establish that potassium left the body. Here it moved into cells.', reply: 'The missing distinction is location versus removal. Think about whether potassium crossed the body’s boundary.' }
        ]
      }
    ]},
    { id: 'verify', title: 'Check accuracy before using the response', purpose: 'Separate following instructions from supporting factual claims.', units: [
      {
        id: 'verify-claim', title: 'Compare the claim with the source',
        teach: '<p>Check two things separately. <b>Does the reply match your request?</b> Check the topic, level and format. <b>Are its claims supported?</b> Open the source and compare the actual statement, including its conditions.</p><p>A reply can follow your instructions and still contain an error. Asking “Are you sure?” produces another model response; it does not independently verify the first one.</p>',
        context: 'Intentionally incorrect AI claim: “ACE inhibitors always raise blood potassium in every patient.”',
        sourceText: 'NIH ODS explains that ACE inhibitors and ARBs can reduce urinary potassium excretion and lead to hyperkalemia. This describes a possible effect.',
        goal: 'Identify what the AI statement adds beyond the source.', question: 'Which assessment is supported?', sources: ['evaluation', 'nih'],
        choices: [
          { text: 'The source supports a possible effect. It does not justify “always” or “every patient”.', correct: true, why: 'You found the unsupported universal claim. The correction must preserve the source’s uncertainty.', reply: 'A supported correction is: ACE inhibitors can reduce urinary potassium excretion and lead to a rise in blood potassium.' },
          { text: 'The statement is verified because the reply uses medical terminology and names NIH.', correct: false, why: 'Terminology and a recognizable source name do not establish that the source supports this exact sentence.', reply: 'Open the source and check whether its wording supports a possibility or a universal conclusion.' }
        ]
      },
      {
        id: 'verify-notes', title: 'Make a study resource from a supplied note',
        teach: '<p>Give the model a note you are allowed to use. Specify the study format and ask it to stay within the note. Compare the result with the original before studying from it.</p><p>A useful flashcard asks one question and keeps the answer separate. An added statement needs support even when the rest of the card is correct.</p>',
        sourceText: 'Sample note based on NIH ODS: ACE inhibitors and ARBs can reduce urinary potassium excretion and lead to hyperkalemia. Impaired kidney function is an additional risk factor.',
        goal: 'Create a source-based recall resource without adding unsupported claims.', question: 'Which message would you send with this note?', sources: ['prompting', 'evaluation', 'nih'], resources: true,
        choices: [
          { text: 'Use only this note. Make one flashcard, keep the answer separate, and identify the statement in the note that supports it.', correct: true, why: 'You specified the source boundary, format and a way to check the answer against the note.', reply: 'The study resource below uses the supplied note. Compare its answer and level of certainty with the original.' },
          { text: 'Expand this note into a complete treatment protocol and fill in anything it leaves out.', correct: false, why: 'The note does not supply a treatment protocol. Filling the gaps would introduce content you cannot check against it.', reply: 'For this task, keep the output within the note. Additional clinical claims would require additional verified sources.' }
        ]
      },
      {
        id: 'verify-repair', title: 'Correct the resource before learning from it',
        teach: '<p>When an output adds an unsupported claim, identify the exact addition. Ask for a correction tied to the supplied passage, then check the revised answer yourself.</p><p>Matching a requested format and being factually supported are separate checks. Keep both in your study workflow.</p>',
        context: 'Intentionally incorrect generated flashcard answer: “Every patient taking an ACE inhibitor develops hyperkalemia.”',
        sourceText: 'The supplied note says these medicines can reduce potassium excretion and lead to hyperkalemia. It does not say that every patient develops it.',
        goal: 'Repair the unsupported statement.', question: 'Which follow-up addresses the error?', sources: ['evaluation', 'nih'],
        choices: [
          { text: 'Keep the statement but make the wording more confident.', correct: false, why: 'Confidence does not supply the missing evidence. The universal claim still exceeds the note.', reply: 'The problem is the unsupported claim about every patient, not the tone.' },
          { text: 'Your answer changed “can” into “every patient”. Correct that claim using only the note and show which statement supports the revision.', correct: true, why: 'You named the exact error and required the correction to match the source.', reply: 'Corrected answer: ACE inhibitors can reduce urinary potassium excretion and lead to hyperkalemia. The note supports a possible effect, not an inevitable outcome.' }
        ]
      }
    ]},
    { id: 'apply', title: 'Apply the process to a clinical case', purpose: 'Set the interaction, request evidence, revise and identify uncertainty.', units: [
      {
        id: 'case-rules', title: 'Set up a reasoning exercise', case: true,
        teach: '<p>A <b>differential diagnosis</b> is a list of possible explanations. To practise reasoning, ask the chatbot to hold back the diagnosis, let you propose possibilities and release source-provided findings when requested.</p><p>This separate fictional examination case comes from an official USMLE sample item. The purpose is to practise how you use a study conversation. You can select a hint or explicitly reveal the answer.</p>',
        context: 'You want a case conversation that keeps you responsible for the reasoning.',
        goal: 'Set the rules before seeing the case.', question: 'Which opening supports that goal?', sources: ['prompting', 'usmle'],
        choices: [
          { text: 'Give me the diagnosis and its explanation before showing the case.', correct: false, why: 'This reveals the decision you wanted to practise before you have considered any evidence.', reply: 'To practise reasoning, ask to propose explanations and request findings before the diagnosis is revealed.' },
          { text: 'Use the supplied fictional case. Let me propose explanations and request findings. Ask why the evidence matters. Hold back the diagnosis until I finish or ask, and say when a requested fact is unavailable.', correct: true, why: 'You specified the interaction, the evidence boundary and the diagnosis reveal rule.', reply: 'Initial presentation: a 20-year-old woman seeks assessment for longstanding heavy menstrual bleeding. What possible explanations would you consider, and what information would help distinguish them?' }
        ]
      },
      {
        id: 'case-history', title: 'Request evidence for your differential', case: true,
        teach: '<p>Keep more than one explanation open at the beginning. Explain which finding could distinguish them. A request for information should have a purpose: say how the result could change your thinking.</p>',
        context: 'A 20-year-old woman has longstanding heavy menstrual bleeding. Your initial differential includes menstrual causes and a possible broader bleeding problem.',
        goal: 'Request history that could help distinguish those possibilities.', question: 'Which message links an evidence request to a reason?', sources: ['usmle', 'prompting'],
        choices: [
          { text: 'Has she had prolonged bleeding from other sites? That could help distinguish an isolated menstrual problem from a broader bleeding tendency.', correct: true, why: 'You requested a relevant finding and explained how it could change the differential.', reply: 'Source-provided history: symptoms have continued for five years and cycles are regular. A finger cut bled longer than expected. No easy bruising or weight change is reported. She uses an oral contraceptive.' },
          { text: 'Assume this is an isolated menstrual problem and repeat that conclusion.', correct: false, why: 'This settles the explanation without checking for evidence of bleeding elsewhere.', reply: 'The initial presentation does not establish that bleeding is limited to menstruation. Ask for relevant history before narrowing the differential.' }
        ]
      },
      {
        id: 'case-tests', title: 'Request the supplied examination and tests', case: true,
        teach: '<p>Ask for the findings needed to reassess your possibilities. If a case does not supply a result, treat it as missing. An absent detail is not automatically a normal finding.</p>',
        context: 'You now know that a finger cut bled longer than expected as well as the longstanding heavy menstrual bleeding.',
        goal: 'Obtain the available examination and screening results without inventing findings.', question: 'What would you request?', sources: ['usmle'],
        choices: [
          { text: 'Assume that every unmentioned examination and test result is normal.', correct: false, why: 'That turns missing information into invented normal findings.', reply: 'A study case may omit information. Ask for supplied findings and leave other results unknown.' },
          { text: 'Show the examination, blood count and coagulation screening results supplied in the case. Mark any other requested results as unavailable.', correct: true, why: 'You asked for relevant evidence and kept the distinction between supplied and missing information.', reply: 'Source findings: mild conjunctival pallor; unremarkable pelvic examination. Hemoglobin 10.5 g/dL; MCV 70 μm³; platelets 275,000/mm³; platelet aggregation reported as normal. PT 10.5 seconds, INR 1.0 and PTT 28 seconds. No additional results are generated.' }
        ]
      },
      {
        id: 'case-update', title: 'Revise using the new findings', case: true,
        teach: '<p>A new result should change your reasoning only as far as the evidence permits. Distinguish a screening test from a test that establishes or excludes a particular diagnosis.</p><p>State what the findings support and what remains unproven. You do not need the final diagnosis to identify an unjustified conclusion.</p>',
        context: 'Heavy menstrual bleeding and prolonged bleeding from a cut are now known. The source reports hemoglobin 10.5 g/dL, platelets 275,000/mm³, PT 10.5 seconds and PTT 28 seconds.',
        goal: 'Update the differential without overinterpreting the screening results.', question: 'Which reasoning statement is defensible?', sources: ['usmle'],
        choices: [
          { text: 'Bleeding beyond menstruation keeps a broader bleeding problem in consideration. These screening results alone do not establish or exclude every bleeding disorder.', correct: true, why: 'You used the additional bleeding history while preserving the limits of screening. The source-based debrief will explain the specific diagnosis.', reply: 'Now identify what additional evidence would be needed to establish the leading explanation rather than treating a screening result as confirmation.' },
          { text: 'The screening results exclude every bleeding disorder, so the prolonged cut bleeding can be ignored.', correct: false, why: 'The conclusion exceeds what these screening results establish and discards relevant bleeding history.', reply: 'Reconsider both the bleeding pattern and the limits of the tests. A screening result does not answer every diagnostic question.' }
        ]
      },
      {
        id: 'case-uncertainty', title: 'Identify what is still missing', case: true,
        teach: '<p>Before finishing, state what you know, what you suspect and what still needs evidence. Ask for the finding or specific test that could distinguish your leading explanation from alternatives.</p><p>You can then compare your reasoning with the source answer and debrief. The answer is revealed when you finish this step or explicitly request it.</p>',
        context: 'You have a bleeding pattern and screening results, but no specific confirmatory test results.',
        goal: 'Finish with an evidence-based statement of uncertainty.', question: 'Which message should close the reasoning exercise?', sources: ['prompting', 'usmle'],
        choices: [
          { text: 'The available evidence supports considering a bleeding disorder, but does not confirm its type. Identify the specific diagnostic evidence still needed, then show the source answer and compare my reasoning.', correct: true, why: 'You separated suspicion from confirmation and requested a debrief tied to evidence.', reply: 'You are ready to compare your approach with the official answer and the diagnostic reference. Select Finish case to reveal the debrief.' },
          { text: 'State that the diagnosis is confirmed and fill in the missing test results.', correct: false, why: 'No confirmatory results have been supplied. Filling them in would create evidence the case does not contain.', reply: 'Leave the missing results unknown and say which evidence would be needed to support confirmation.' }
        ]
      }
    ]}
  ],
  assessment: [
    { id: 'prompt', title: 'Describe your learning need', goal: 'Get help with a specific gap.', question: 'Which message gives the model a useful starting point?', sources: ['prompting'], choices: [
      { text: 'Teach me everything about kidneys.', correct: false, why: 'This supplies a broad topic without a learning gap.' },
      { text: 'I know that ACE inhibitors reduce angiotensin II. Explain the connection I am missing between that change and potassium excretion, at first-year level.', correct: true, why: 'This identifies starting knowledge, the gap and the audience.' }
    ]},
    { id: 'active', title: 'Request active practice', goal: 'Attempt an answer before seeing feedback.', question: 'Which instruction sets that order?', sources: ['recall', 'prompting'], choices: [
      { text: 'Ask one question, wait for my attempt, then explain any error.', correct: true, why: 'The instruction gives you a retrieval attempt before feedback.' },
      { text: 'Give me the questions with all answers underneath.', correct: false, why: 'This reveals the answers before an attempt.' }
    ]},
    { id: 'reason', title: 'Ask for missing evidence', goal: 'Test a proposed explanation before accepting it.', question: 'Which follow-up supports that goal?', sources: ['prompting', 'evaluation'], choices: [
      { text: 'Repeat the conclusion more confidently.', correct: false, why: 'Confidence does not add evidence or examine alternatives.' },
      { text: 'Which finding would distinguish this explanation from an alternative, and how would it change the differential?', correct: true, why: 'This connects an information request to a possible revision.' }
    ]},
    { id: 'check', title: 'Check a cited claim', goal: 'Verify whether a source supports a statement.', question: 'What should you do?', sources: ['evaluation'], choices: [
      { text: 'Open the original source and compare the relevant passage with the exact claim.', correct: true, why: 'This checks the evidence for the actual statement.' },
      { text: 'Accept the claim because the model named a reputable organization.', correct: false, why: 'The name alone does not establish what the source supports.' }
    ]},
    { id: 'uncertain', title: 'Communicate uncertainty', goal: 'Ask for help without treating a suspicion as established.', question: 'Which message keeps that distinction clear?', sources: ['prompting', 'evaluation'], choices: [
      { text: 'I know this first step, suspect the next connection and need help checking it against the source.', correct: true, why: 'You distinguished knowledge, a tentative idea and the evidence you need.' },
      { text: 'Treat my suspicion as a confirmed fact and build the explanation around it.', correct: false, why: 'This asks the model to assume the point that needs checking.' }
    ]}
  ]
};
