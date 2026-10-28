/* Pre-generated illustrative pairs drafted by one Luna/low content task.
   These are authored examples, not recorded model runs or empirical A/B results. */
window.SCENARIOS = [
  {
    id: "personalize",
    title: "Personalize your tutor",
    topic: "Explaining a course concept",
    a: "Explain this topic.",
    b: "I am a Year 1 medical student. Help me explain this topic in my own words. First ask what I already understand, then adapt your questions to my answer. Do not supply a model answer unless I ask.",
    responseA:
      "What topic would you like explained, and what level of detail should I use? I can start with a broad overview and add terminology or detail as needed. Tell me what you already know, and I will tailor the explanation to your background.",
    responseB:
      "Before we begin, what topic are you working on, and what do you already understand about it? Try explaining one part in your own words, even if you are unsure. I will use your explanation to choose a next question and help you identify what to clarify.",
    takeaway:
      "Both examples ask for context. B explicitly invites the student to explain their current understanding before receiving an explanation.",
  },
  {
    id: "gaps",
    title: "Name the knowledge gap",
    topic: "Approaching an unfamiliar question",
    a: "Help me with this question.",
    b: "I am in Year 1 and unsure how to approach this question. Ask me to state what I know, what I am unsure about, and what information is missing. Help me separate those parts without filling gaps for me.",
    responseA:
      "Please share the question and your best attempt so far. I can help you work through it step by step. If you are unsure where to start, tell me which part feels confusing, and we can break the task into smaller pieces.",
    responseB:
      "Share the question, then mark three things: what you think you know, what feels uncertain, and what information you would need before deciding. What makes you place each point in that category? I will help you examine the gaps without assuming they have an answer.",
    takeaway:
      "A asks generally for a starting point. B separates stated knowledge, uncertainty, and missing evidence.",
  },
  {
    id: "recall",
    title: "Ask for active recall",
    topic: "Reviewing your own notes",
    a: "Summarize my notes.",
    b: "I am a Year 1 student reviewing these notes. Do not summarize them first. Ask me one question at a time so I can recall the main ideas, then give feedback on how complete my answer was and ask what I would like to revisit.",
    responseA:
      "Paste your notes and I will summarize the main ideas in a clear, organized way. I can also turn the summary into a short review sheet or a few practice questions if you would like to test yourself afterward.",
    responseB:
      "Paste your notes when ready. I will begin with one recall question: without looking back, what do you think is the central idea? After you answer, I will point out which parts you covered and ask what you want to revisit before we continue.",
    takeaway:
      "A offers a summary first. B starts with a retrieval attempt and waits for the student to answer.",
  },
  {
    id: "reasoning",
    title: "Keep the reasoning yours",
    topic: "Working through a fictional case",
    a: "What is the diagnosis in this scenario?",
    b: "I am a Year 2 student practicing clinical reasoning with a fictional scenario. Do not name or suggest a diagnosis. Ask me to identify the question, organize relevant and missing information, explain my reasoning, and state what I would need to check next.",
    responseA:
      "Please share the fictional scenario and your initial thinking. I can help you identify the main question, organize details that may matter, and consider what additional information would help you reason through it. We can take the discussion one step at a time.",
    responseB:
      "Share the fictional scenario, but start by stating the question you think it raises. Which details seem relevant to that question, and which important details are missing? Explain how you grouped them, then say what you would want to check next and why.",
    takeaway:
      "Both examples withhold the answer. B explicitly asks for the question, evidence, missing information, and a justified next step.",
  },
];
