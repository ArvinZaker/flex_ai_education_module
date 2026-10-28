/* Authored, pre-generated study conversations. Medical references support facts;
   education references support the learning approach. These are not recorded model runs. */
window.SCENARIOS = [
  {
    id: "start",
    title: "Start a study chat",
    topic:
      "You remember ACE inhibition lowers angiotensin II. You cannot explain why blood potassium can rise.",
    a: "Explain ACE inhibitors.",
    b: "I am a first-year medical student. I know ACE inhibitors reduce angiotensin II, but I do not understand the potassium effect. Explain that connection, then check my understanding.",
    responseA:
      "ACE inhibitors reduce formation of angiotensin II. This reduces angiotensin II–mediated aldosterone stimulation and can reduce renal potassium excretion.",
    responseB:
      "Let us focus on your missing connection: angiotensin II stimulates aldosterone, and aldosterone supports potassium secretion into urine. Reducing that signal can reduce excretion. Which word or step is still unclear?",
    takeaway:
      "The specific message tells the chatbot your level, existing knowledge, and learning gap.",
    references: [1, 5, 7],
    branches: [
      {
        prompt:
          "I do not understand “secretion.” Explain the direction in one sentence.",
        reply:
          "In this kidney pathway, secretion moves potassium into tubular fluid so it can leave in urine. Less secretion can leave more potassium in the body.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Ask me one question to check that I understood. Do not show the answer yet.",
            feedback:
              "If the kidney secretes less potassium into urine, would that tend to increase or decrease potassium remaining in the body? Give your prediction first.",
          },
          {
            text: "Explain the same connection using an arrow chain.",
            feedback:
              "ACE inhibition → less angiotensin II–mediated aldosterone stimulation → less potassium secretion into urine → blood potassium can rise. This describes a possible effect, not an inevitable result in every person.",
          },
        ],
      },
      {
        prompt:
          "I know what aldosterone is. Skip its definition and explain the last kidney step.",
        reply:
          "Aldosterone promotes distal potassium secretion. Reducing its effect can reduce potassium excretion. That is the last link between the hormone pathway and a possible rise in blood potassium.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Let me explain it back. Then tell me which step I missed.",
            feedback:
              "Go ahead. Explain the path from ACE inhibition to potassium excretion in your own words. I will wait for your attempt before comparing it with the reference.",
          },
          {
            text: "Give me a short explanation I can check against a reference.",
            feedback:
              "ACE inhibitors can reduce urinary potassium excretion and lead to hyperkalemia. Check NIH ODS, Potassium, under Interactions with Medications → ACE inhibitors and ARBs.",
          },
        ],
      },
      {
        prompt:
          "Instead of another explanation, ask me one question about the mechanism.",
        reply:
          "After ACE inhibition reduces the angiotensin II signal, what would you predict happens to aldosterone stimulation? Answer that step before moving to potassium.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "I think it decreases. Give feedback on that step, then ask the next question.",
            feedback:
              "Yes, the angiotensin II stimulus decreases. Now predict the direction of potassium secretion into urine. What effect could that have on blood potassium?",
          },
          {
            text: "I am stuck. Give a hint without giving the full answer.",
            feedback:
              "Angiotensin II normally stimulates aldosterone. Think about what happens to a downstream signal when an upstream stimulus is reduced.",
          },
        ],
      },
    ],
  },
  {
    id: "gap",
    title: "Fix an unclear explanation",
    topic:
      "The chatbot mentioned ENaC, the sodium channel in a collecting-duct principal cell. You do not see how it affects potassium.",
    a: "Explain that again.",
    b: "I know ENaC lets sodium enter the principal cell. I do not understand how that helps potassium leave into urine. Explain only the electrical connection.",
    responseA:
      "Aldosterone supports sodium reabsorption through ENaC and potassium secretion through luminal potassium channels. The basolateral sodium-potassium pump also supports this process.",
    responseB:
      "When positively charged sodium leaves the tubular lumen through ENaC, the lumen becomes relatively negative. That electrical difference favours potassium secretion into the lumen. Which part of that direction is unclear?",
    takeaway:
      "“Explain again” may repeat the same material. Naming the missing connection gives the next reply a clear target.",
    references: [1, 7, 8],
    branches: [
      {
        prompt:
          "What does “lumen” mean in this explanation? Use plain language.",
        reply:
          "The lumen is the inside of the kidney tubule, where the fluid that will become urine is flowing. In this example, potassium secretion moves potassium into that fluid.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Now restate the ENaC explanation using “tubular fluid” instead of “lumen.”",
            feedback:
              "Sodium moves out of tubular fluid through ENaC into the principal cell. The fluid becomes relatively negative, which favours potassium moving into it through potassium channels.",
          },
          {
            text: "I understand “lumen” now. Ask me to predict what blocking ENaC would do.",
            feedback:
              "If ENaC is blocked, less positive sodium charge leaves the tubular fluid by that route. Would the electrical driving force favouring potassium secretion become stronger or weaker?",
          },
        ],
      },
      {
        prompt:
          "I think the sodium-potassium pump pushes potassium directly into urine. Check that statement.",
        reply:
          "That statement puts the pump on the wrong side of the cell. The pump brings potassium into the principal cell across the blood-facing membrane. Potassium leaves into tubular fluid through a different, luminal channel.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Give me a verbal diagram with blood, cell and tubular fluid labelled.",
            feedback:
              "Blood side → sodium-potassium pump brings potassium into the principal cell → luminal potassium channel lets potassium enter tubular fluid. ENaC is the separate sodium entry channel on the tubular-fluid side.",
          },
          {
            text: "Do not repeat the diagram. Ask me to locate the two membrane crossings.",
            feedback:
              "First, which membrane does potassium cross to enter the principal cell from the blood side? Then, which membrane does it cross to enter tubular fluid?",
          },
        ],
      },
      {
        prompt:
          "That is too much at once. Explain just why the tubular fluid becomes relatively negative.",
        reply:
          "ENaC allows positively charged sodium to move from tubular fluid into the cell. Removing that positive charge makes the tubular fluid relatively negative. We can stop at that step.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "I understand that step. Now connect it to potassium secretion.",
            feedback:
              "The relatively negative tubular fluid favours movement of positively charged potassium into it through luminal potassium channels.",
          },
          {
            text: "Ask me to restate that one step before continuing.",
            feedback:
              "Explain in your own words what happens to the tubular fluid’s electrical charge when sodium enters the principal cell through ENaC. I will wait before adding the next step.",
          },
        ],
      },
    ],
  },
  {
    id: "recall",
    title: "Turn a chat into a quiz",
    topic:
      "You have read how insulin shifts potassium into cells. You want to know whether you can explain it without rereading.",
    a: "Summarize insulin and potassium for me.",
    b: "Quiz me on potassium shifts versus removal. Ask one question, wait for my answer, then explain any error. Do not summarize first.",
    responseA:
      "Insulin promotes potassium movement from extracellular fluid into cells. That changes its distribution within the body. Urinary excretion is a separate process that removes potassium from the body.",
    responseB:
      "After insulin moves potassium into cells, has that movement removed potassium from the body, or changed its location within the body? Give your answer before I explain.",
    takeaway:
      "The quiz request specifies the order: question, attempt, feedback. A summary request gives the explanation immediately.",
    references: [1, 4, 6],
    branches: [
      {
        prompt:
          "It changed location within the body. Tell me whether my explanation is complete.",
        reply:
          "That identifies redistribution correctly. To complete the comparison, state which process removes potassium from the body, rather than moving it between compartments.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Ask me a new application question and wait.",
            feedback:
              "A blood potassium result falls. Can that result alone tell you whether potassium was excreted or moved into cells? Explain before I give feedback.",
          },
          {
            text: "Show me the reference passage before we continue.",
            feedback:
              "Open Merck Manual’s Overview of Disorders of Potassium Concentration, section Potassium shifts. It describes insulin moving potassium into cells. Compare that with the Potassium metabolism section on renal excretion.",
          },
        ],
      },
      {
        prompt:
          "It left the body because the blood level fell. Explain where my reasoning went wrong.",
        reply:
          "The mistake is treating blood concentration as the amount in the whole body. Insulin can move potassium from blood into cells without removing it from the body.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Give me another question on that same distinction. Hold back the answer.",
            feedback:
              "Which event would remove potassium from the body: movement from blood into muscle cells, or excretion into urine? Explain your choice.",
          },
          {
            text: "Give me one sentence to remember, then let me try again.",
            feedback:
              "A change in blood potassium can reflect a change in distribution; it does not by itself prove potassium left the body. Now try explaining that distinction in your own words.",
          },
        ],
      },
      {
        prompt: "I am not sure. Give me a hint instead of the answer.",
        reply:
          "Ask yourself whether the potassium crossed the body’s boundary. Moving from extracellular fluid into a cell changes its location inside the body.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Let me try: it stayed in the body. Check that, then ask about urinary excretion.",
            feedback:
              "Yes. The shift did not itself remove potassium. Now explain what is different when potassium is excreted in urine.",
          },
          {
            text: "Explain the answer now, then ask me a different question later.",
            feedback:
              "It changed compartments. The potassium remained in the body; urinary excretion would remove it. When you are ready, ask for a new question without rereading this explanation.",
          },
        ],
      },
    ],
  },
  {
    id: "verify",
    title: "Challenge a confident reply",
    topic:
      "You ask about volume depletion. One scripted reply below deliberately overstates what aldosterone alone can tell you.",
    containsError: true,
    a: "If aldosterone is high, can I assume urinary potassium loss is high?",
    b: "Aldosterone is high, but distal sodium delivery and flow may be low. Explain the competing effects and say what cannot be concluded from the hormone alone.",
    responseA:
      "Yes. High aldosterone always means high urinary potassium loss.",
    responseB:
      "Aldosterone promotes potassium secretion, while reduced distal sodium delivery and flow can limit it. Aldosterone alone does not establish the net potassium outcome. Check the other determinants before predicting it.",
    takeaway:
      "The broad reply contains an intentional overstatement. A fluent answer still needs checking against evidence and its conditions.",
    references: [2, 6, 8],
    branches: [
      {
        prompt:
          "You said “always.” What conditions did that conclusion leave out?",
        reply:
          "The statement ignored distal sodium delivery and tubular flow. Both influence potassium secretion. The original “always” claim was too strong.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Give a corrected statement and identify the supporting source.",
            feedback:
              "Aldosterone supports potassium secretion, but net excretion also depends on distal delivery and flow. Poinen’s Potassium Disorders, slides 14–15 and 24, covers the combined influences; Merck’s Potassium metabolism section describes the effect of distal sodium delivery.",
          },
          {
            text: "You corrected yourself, so I do not need to check anything else.",
            feedback:
              "A revised answer still needs checking. Open the reference and compare the specific statement with the relevant passage; a chatbot’s agreement is not independent evidence.",
          },
        ],
      },
      {
        prompt:
          "Name a source and the exact section I should open to check the delivery claim.",
        reply:
          "Open Merck Manual’s Overview of Disorders of Potassium Concentration, section Potassium metabolism. It states that increased sodium delivery to the distal nephron promotes potassium excretion. The supplied course lecture discusses its interaction with volume depletion.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "Does that passage prove every part of your claim about volume depletion?",
            feedback:
              "No. The Merck passage supports distal sodium delivery’s effect. The volume-depletion interaction is covered in the course lecture, particularly slide 24. A citation should not be stretched beyond the statement it supports.",
          },
          {
            text: "A recognizable source name is enough; I will skip opening it.",
            feedback:
              "The name alone does not tell you whether the source supports this sentence. Open the section and check its actual wording and conditions before using the claim.",
          },
        ],
      },
      {
        prompt:
          "I want to check this against my course material. Tell me which parts of the answer I should compare.",
        reply:
          "Compare the hormone effect, distal sodium delivery, and tubular flow. Check whether the material supports a universal “always” conclusion or describes competing influences.",
        follow: "Choose your next message.",
        answers: [
          {
            text: "The source discusses competing influences. Rewrite the answer without the absolute claim.",
            feedback:
              "High aldosterone can favour potassium secretion, but reduced distal delivery and flow can oppose that effect. The hormone level alone is insufficient to predict the net result.",
          },
          {
            text: "Skip the source comparison and give me a more confident answer.",
            feedback:
              "More confident wording would not resolve the missing evidence. Keep the unresolved determinants explicit and check them against the reference before drawing a conclusion.",
          },
        ],
      },
    ],
  },
];
