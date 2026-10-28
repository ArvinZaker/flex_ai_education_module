/* Authored RAAS teaching conversations. Source locators are attached to each tree.
   These scripts are illustrative, not recorded model runs or measured A/B results. */
window.SCENARIOS = [
  {
    id: "ace",
    title: "ACE inhibitors & K⁺",
    topic: "Why can an ACE inhibitor raise potassium?",
    a: "Why do ACE inhibitors cause hyperkalemia?",
    b: "I know ACE inhibitors reduce angiotensin II. Quiz me on the missing link to potassium secretion, one step at a time. Wait before explaining.",
    responseA:
      "ACE inhibition reduces angiotensin II–mediated aldosterone stimulation. Less aldosterone can reduce distal potassium secretion, so potassium may accumulate in blood.",
    responseB:
      "Angiotensin II normally stimulates aldosterone release. After ACE inhibition, would that stimulus increase or decrease? Predict what happens to potassium secretion.",
    takeaway:
      "A gives the mechanism immediately. B asks you to predict the intermediate step.",
    sources: "Poinen, Potassium Disorders, slides 14–16 and 24",
    url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/#h9",
    branches: [
      {
        prompt:
          "Less aldosterone means less K⁺ secretion, so blood K⁺ can rise.",
        reply:
          "Yes. You connected the hormone change to impaired renal excretion. What if kidney function is also impaired?",
        follow: "Predict the combined effect.",
        answers: [
          {
            text: "Impaired excretion can compound the risk.",
            feedback:
              "Yes. Kidney dysfunction and ACE inhibition can both impair potassium excretion. The medication history alone does not establish the cause of a real result.",
          },
          {
            text: "Lower GFR guarantees a low potassium level.",
            feedback:
              "No. Impaired kidney function can reduce potassium excretion. It does not guarantee low potassium; review other contributors and the actual result.",
          },
        ],
      },
      {
        prompt:
          "If aldosterone falls, less K⁺ enters the blood, so blood K⁺ falls.",
        reply:
          "That reverses the direction of secretion. Here, secretion means K⁺ moves from the principal cell into tubular fluid for urinary excretion. Less secretion can leave more K⁺ in the body.",
        follow: "Which arrow describes the renal effect?",
        answers: [
          {
            text: "Less aldosterone → less urinary K⁺ secretion.",
            feedback:
              "Correct direction. Reduced elimination can raise blood K⁺. Distinguish secretion into urine from release into blood.",
          },
          {
            text: "Less aldosterone → more urinary K⁺ secretion.",
            feedback:
              "That is the opposite of aldosterone’s usual distal action. Aldosterone promotes potassium secretion; reducing its effect can reduce excretion.",
          },
        ],
      },
      {
        prompt: "Show the pathway, then test whether I can reverse it.",
        reply:
          "Angiotensin II → aldosterone → distal K⁺ secretion. ACE inhibition reduces the angiotensin II stimulus. Now reverse the pathway rather than just memorizing “ACE inhibitor = high K⁺.”",
        follow: "Predict the direction of the downstream changes.",
        answers: [
          {
            text: "Aldosterone stimulation falls; K⁺ secretion can fall.",
            feedback:
              "Yes. This explains why potassium can rise. It is a mechanism, not a prediction that every person taking an ACE inhibitor becomes hyperkalemic.",
          },
          {
            text: "Aldosterone stimulation rises; K⁺ secretion rises.",
            feedback:
              "The initial step is reversed: ACE inhibition reduces angiotensin II formation and its aldosterone stimulus. Recheck that step before predicting potassium.",
          },
        ],
      },
    ],
  },
  {
    id: "principal",
    title: "ENaC & potassium",
    topic: "How does sodium reabsorption help potassium secretion?",
    a: "Explain what aldosterone does in the collecting duct.",
    b: "I know aldosterone increases ENaC. I cannot connect sodium entry to K⁺ secretion. Explain the electrical gradient, then ask me to predict ENaC blockade.",
    responseA:
      "Aldosterone increases ENaC activity, Na⁺/K⁺-ATPase activity, and luminal potassium-channel activity in principal cells, supporting sodium reabsorption and potassium secretion.",
    responseB:
      "Na⁺ enters the principal cell from the tubular lumen through ENaC. Removing positive charge makes the lumen relatively negative, favouring K⁺ secretion into it. Predict what ENaC blockade does to that driving force.",
    takeaway:
      "B identifies the missing connection: the lumen’s electrical potential.",
    sources: "Poinen, Potassium Disorders, slides 14–16",
    branches: [
      {
        prompt:
          "Blocking ENaC reduces the lumen-negative driving force for K⁺ secretion.",
        reply:
          "Yes. Less electrogenic sodium reabsorption weakens that driving force. This helps explain why an ENaC blocker can spare potassium.",
        follow: "Now locate the transporters.",
        answers: [
          {
            text: "ENaC faces the lumen; Na⁺/K⁺-ATPase faces blood.",
            feedback:
              "Correct. ENaC admits luminal Na⁺. The basolateral pump moves Na⁺ out and K⁺ into the cell; luminal K⁺ channels allow secretion.",
          },
          {
            text: "ENaC faces blood; Na⁺/K⁺-ATPase faces the lumen.",
            feedback:
              "The membranes are reversed. ENaC is luminal; Na⁺/K⁺-ATPase is basolateral. Redraw the cell with urine on one side and blood on the other.",
          },
        ],
      },
      {
        prompt: "The Na⁺/K⁺ pump directly pushes K⁺ into urine.",
        reply:
          "The pump brings K⁺ into the cell across the blood-facing membrane. K⁺ then exits into tubular fluid through luminal channels. These are two different membrane crossings.",
        follow: "Which is the correct route?",
        answers: [
          {
            text: "Blood → pump → principal cell → K⁺ channel → lumen.",
            feedback:
              "Yes. The pump loads the cell with K⁺; the luminal channel is the exit into urine.",
          },
          {
            text: "Blood → ENaC → lumen.",
            feedback:
              "ENaC is a sodium channel on the luminal membrane. It is not the potassium exit pathway. Separate the ion, transporter, and membrane.",
          },
        ],
      },
      {
        prompt: "Quiz me on which way K⁺ moves. Do not show the answer first.",
        reply:
          "In a principal cell, does aldosterone usually promote K⁺ movement into tubular fluid or reabsorption from tubular fluid?",
        follow: "Choose the direction.",
        answers: [
          {
            text: "Into tubular fluid: secretion.",
            feedback:
              "Yes. Aldosterone promotes potassium secretion by principal cells. The sodium reabsorption and potassium secretion steps are coupled through transport and electrical gradients.",
          },
          {
            text: "From tubular fluid back into blood: reabsorption.",
            feedback:
              "For this principal-cell pathway, aldosterone promotes secretion into tubular fluid. Do not generalize other nephron transport processes to this specific cell.",
          },
        ],
      },
    ],
  },
  {
    id: "volume",
    title: "Volume depletion paradox",
    topic: "Does high aldosterone guarantee high potassium excretion?",
    a: "What happens to potassium during volume depletion?",
    b: "Volume depletion raises aldosterone, but lowers distal sodium delivery and flow. Challenge my claim that aldosterone alone predicts urinary K⁺ loss.",
    responseA:
      "Volume depletion can increase aldosterone, which promotes potassium secretion. It can also reduce distal sodium delivery and flow, which limit secretion. The net effect depends on these competing influences.",
    responseB:
      "Your claim leaves out delivery and flow. Aldosterone supports secretion, but principal cells still need distal Na⁺ delivery and tubular flow. Which effect are you ignoring if you predict urinary K⁺ from aldosterone alone?",
    takeaway:
      "B tests a specific oversimplification instead of accepting one hormone as the whole explanation.",
    sources: "Poinen, Potassium Disorders, slides 14–15, 18 and 24",
    branches: [
      {
        prompt: "I ignored the fall in distal Na⁺ delivery and flow.",
        reply:
          "Exactly. Those changes can oppose aldosterone’s secretory effect. The lecture describes balancing influences during volume depletion; it does not imply one fixed potassium outcome for every patient.",
        follow: "What conclusion is justified?",
        answers: [
          {
            text: "Aldosterone alone is insufficient to predict net K⁺ excretion.",
            feedback:
              "Yes. State the competing mechanisms and the missing information before predicting a net result.",
          },
          {
            text: "Volume depletion always causes potassium retention.",
            feedback:
              "That is another absolute claim. The opposing influences do not establish universal retention or universal loss.",
          },
        ],
      },
      {
        prompt: "High aldosterone must always mean high urinary K⁺ loss.",
        reply:
          "That treats a hormone level as the only determinant. Distal sodium delivery and flow also matter. If both decrease, a prediction based only on aldosterone is incomplete.",
        follow: "Choose the better next question.",
        answers: [
          {
            text: "What are distal delivery, flow, and kidney function doing?",
            feedback:
              "Yes. These add determinants that the hormone-only prediction omitted. They help frame the uncertainty rather than inventing a net result.",
          },
          {
            text: "Can I ignore flow if aldosterone is high?",
            feedback:
              "No. Flow remains a determinant of secretion. High aldosterone does not remove the need to consider it.",
          },
        ],
      },
      {
        prompt: "Help me explain the flow effect without an analogy.",
        reply:
          "Flow carries secreted K⁺ along the tubule. Higher flow can keep luminal K⁺ lower near the principal cell, supporting continued secretion. Lower flow can reduce that effect.",
        follow: "Apply the mechanism.",
        answers: [
          {
            text: "High flow can support K⁺ secretion even at the same urine concentration.",
            feedback:
              "Yes. Concentration and the amount excreted are different quantities. The lecture’s flow diagram contrasts the amount carried at different flows.",
          },
          {
            text: "Urine K⁺ concentration alone tells me the amount excreted.",
            feedback:
              "It does not. The amount carried also depends on urine flow. Do not treat concentration as an excretion rate.",
          },
        ],
      },
    ],
  },
  {
    id: "shift",
    title: "Shift vs removal",
    topic: "Why can blood potassium fall without potassium leaving the body?",
    a: "How does insulin lower potassium?",
    b: "I confuse shifting K⁺ into cells with removing it. Use the post-meal response to test those two mechanisms separately before explaining.",
    responseA:
      "Insulin promotes cellular K⁺ uptake through Na⁺/K⁺-ATPase. This redistributes K⁺ from extracellular fluid into cells. Renal excretion is a separate route for removing potassium from the body.",
    responseB:
      "After a potassium-containing meal, insulin can move K⁺ into cells. At that moment, has potassium left the body, or changed compartments? Choose before we discuss the kidney’s role.",
    takeaway:
      "B asks you to separate extracellular concentration from total-body potassium.",
    sources: "Poinen, Potassium Disorders, slide 19",
    branches: [
      {
        prompt:
          "It has changed compartments; total-body K⁺ has not fallen from that shift.",
        reply:
          "Yes. The blood level can fall while the potassium remains inside cells. The lecture then describes aldosterone-supported renal secretion and urinary excretion.",
        follow: "Which process removes potassium from the body?",
        answers: [
          {
            text: "Urinary excretion.",
            feedback:
              "Yes. Intracellular uptake changes distribution; urinary excretion changes the body’s potassium balance.",
          },
          {
            text: "Intracellular uptake by insulin.",
            feedback:
              "Uptake into cells redistributes potassium within the body. It does not itself remove the potassium load.",
          },
        ],
      },
      {
        prompt: "If the blood K⁺ falls, the body must have lost that K⁺.",
        reply:
          "A blood sample measures extracellular concentration, not all potassium in the body. K⁺ can leave extracellular fluid by entering cells without leaving the body.",
        follow: "What would correct the claim?",
        answers: [
          {
            text: "A fall may reflect redistribution, removal, or both.",
            feedback:
              "Yes. Identify the mechanism before interpreting the blood-level change as potassium loss.",
          },
          {
            text: "Every fall proves increased urinary excretion.",
            feedback:
              "No. The post-meal insulin response is an example of redistribution. A blood-level change alone does not establish urinary loss.",
          },
        ],
      },
      {
        prompt: "Connect insulin’s role to aldosterone’s role.",
        reply:
          "In the lecture’s post-meal sequence, insulin supports cellular uptake, while increased K⁺ also stimulates aldosterone and subsequent renal secretion. These are complementary responses to the potassium load.",
        follow: "Match each hormone to this sequence.",
        answers: [
          {
            text: "Insulin: cellular uptake. Aldosterone: distal renal secretion.",
            feedback:
              "Correct for the sequence shown. Distinguish a compartment shift from excretion; avoid interpreting either response as proof that a real potassium abnormality is resolved.",
          },
          {
            text: "Insulin: urinary excretion. Aldosterone: only cellular uptake.",
            feedback:
              "Those roles are reversed for the lecture’s sequence. Insulin supports cellular uptake; aldosterone promotes distal renal potassium secretion.",
          },
        ],
      },
    ],
  },
];
