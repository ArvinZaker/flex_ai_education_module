'use strict';
const { parts, sources, assessment } = window.MODULE;
const recordings = window.LUNA;
const main = document.querySelector('#main');
const storageKey = 'learning-with-ai-v3';
let completed;
try { completed = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]').filter(id => parts.some(p => p.units.some(u => u.id === id)))); }
catch { completed = new Set(); }
const state = { answers: {}, before: {}, after: {}, first: { before: {}, after: {} }, hint: 'none', revealed: false, format: 'Flashcard', flipped: false, resourceAnswer: null };
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const go = route => { if (location.hash === `#${route}`) render(); else location.hash = route; };
function references(keys) {
  return `<details class="sources"><summary>Sources for this step</summary>${keys.map(key => {
    const s = sources[key];
    return `<p>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a>` : esc(s.title)}<small>${esc(s.section)}</small></p>`;
  }).join('')}</details>`;
}
function button(label, action, value = '', secondary = false) {
  return `<button class="${secondary ? 'secondary' : 'primary'}" data-action="${action}" data-value="${esc(value)}">${label}</button>`;
}
function save() { try { localStorage.setItem(storageKey, JSON.stringify([...completed])); } catch { /* Learning remains usable without storage. */ } }
function resume() {
  for (const part of parts) { const n = part.units.findIndex(u => !completed.has(u.id)); if (n >= 0) return `${part.id}/${n}`; }
  return 'finish';
}
function overview() {
  return `<p class="eyebrow">An introduction for medical students</p><h1>Learn with AI.<br>Keep doing the thinking.</h1><p class="lead">Learn how to ask for an explanation, improve a reply, test yourself and check the evidence. Build a small study tool, then use those skills in a clinical case.</p><p>Choose a message and compare real, recorded AI replies. Each decision explains what worked or what to change. You do not need an AI account.</p><ol class="path">${parts.map((p,i) => `<li><b>${esc(p.label)}</b><span>${esc(p.purpose)}</span></li>`).join('')}</ol><div class="actions">${button(completed.size ? 'Resume learning' : 'Begin learning', 'go', resume())}${button('Try the starting exercise', 'go', 'before/0', true)}</div><p class="quiet">The starting and closing exercises let you compare your choices across five skills.</p>`;
}
function hint(unit) {
  const hints = {
    'case-rules': ['Who should make the first attempt?', 'Ask the chatbot to withhold the diagnosis and wait for your reasoning.'],
    'case-history': ['Would bleeding elsewhere change your possibilities?', 'Request bleeding history outside menstruation and explain why it matters.'],
    'case-tests': ['What is the difference between missing and normal?', 'Request only source-provided examination and test results. Leave unreported results unknown.'],
    'case-update': ['Do these tests exclude every possible disorder?', 'Keep the bleeding pattern in the differential and state the limits of the screening results.'],
    'case-uncertainty': ['What do you know, and what remains a suspicion?', 'Separate a possible explanation from confirmation. Ask which specific evidence is missing.']
  };
  return `<details class="case-tools"><summary>Case help</summary><label for="hint-mode">Hint level</label><select id="hint-mode"><option value="none" ${state.hint === 'none' ? 'selected' : ''}>No hints</option><option value="socratic" ${state.hint === 'socratic' ? 'selected' : ''}>Socratic questions</option><option value="guided" ${state.hint === 'guided' ? 'selected' : ''}>Guided hints</option></select>${state.hint === 'none' ? '' : `<p class="hint">${hints[unit.id][state.hint === 'socratic' ? 0 : 1]}</p>`}${button('Reveal answer now', 'reveal', '', true)}</details>`;
}
function resource() {
  let body;
  if (state.format === 'Flashcard') body = `<p><b>Question</b><br>How can ACE inhibitors and ARBs affect urinary potassium excretion?</p>${state.flipped ? '<p><b>Answer</b><br>They can reduce urinary potassium excretion and lead to hyperkalemia.</p><p class="quiet">Check the answer against the first sentence of the supplied note. It preserves “can”.</p>' : button('Show answer', 'flip', '', true)}`;
  if (state.format === 'Study guide') body = '<ul><li>ACE inhibitors and ARBs can reduce urinary potassium excretion.</li><li>This can lead to hyperkalemia.</li><li>Impaired kidney function is an additional risk factor.</li></ul><p class="quiet">Each point comes from the supplied note. No treatment advice has been added.</p>';
  if (state.format === 'Concept map') body = '<p class="chain">ACE inhibitors / ARBs<br>↓ can reduce<br>Urinary potassium excretion<br>↓ can lead to<br>Hyperkalemia</p><p>Additional risk factor in the note: impaired kidney function.</p>';
  if (state.format === 'Practice question') body = `<p>Which conclusion does the note support?</p>${state.resourceAnswer === null ? `<div class="choices">${button('These medicines can reduce potassium excretion.', 'resource-answer', 'yes', true)}${button('Every patient will develop hyperkalemia.', 'resource-answer', 'no', true)}${button('The note establishes a complete treatment protocol.', 'resource-answer', 'protocol', true)}</div>` : `<div class="result ${state.resourceAnswer === 'yes' ? 'correct' : 'incorrect'}" tabindex="-1"><h3>${state.resourceAnswer === 'yes' ? 'Correct' : 'Incorrect'}</h3><p>${state.resourceAnswer === 'yes' ? 'The answer preserves the possible effect described in the note.' : state.resourceAnswer === 'protocol' ? 'The note gives a possible effect and risk factor. It does not supply a treatment protocol.' : '“Every patient” is not supported. The note describes a possible effect.'}</p>${state.resourceAnswer === 'yes' ? '<p>Compare the answer with the note, then continue.</p>' : button('Try again', 'resource-retry', '', true)}</div>`}`;
  return `<section class="resource"><h3>The same note, different formats</h3><label for="resource-format">View a study format</label><select id="resource-format">${['Flashcard','Study guide','Concept map','Practice question'].map(f => `<option ${state.format === f ? 'selected' : ''}>${f}</option>`).join('')}</select>${body}</section>`;
}
let current = null;
function recordedReply(key) {
  const record = recordings[key];
  const code = record.reply.startsWith('<!doctype html>');
  const content = `<pre class="verbatim${code ? ' code' : ''}" data-record="${key}">${esc(record.reply)}</pre>`;
  const sourceCheck = key === 'luna_quiz_answers_isolated' ? `<p class="source-check"><b>Check this detail.</b> The DKA answer groups insulin deficiency and acidosis together. Merck’s <a href="${sources.merck.url}" target="_blank" rel="noopener noreferrer">Potassium shifts</a> section attributes the potassium rise in DKA mainly to insulin deficiency and distinguishes acid types. The bicarbonate answer also needs qualification: Merck’s <a href="${sources.hyperkalemia.url}" target="_blank" rel="noopener noreferrer">Hyperkalemia treatment</a> section describes limited evidence and possible potassium excretion as well as redistribution. Check those statements before studying from this reply.</p>` : '';
  return `<section class="reply"><h3>Recorded chatbot reply · unedited</h3>${code ? `<p>The model returned a working webpage file. Continue to try it.</p><details><summary>Read the complete HTML reply</summary>${content}</details>` : content}${sourceCheck}<details class="provenance"><summary>Exact request and recording details</summary><p>${esc(record.model)} · ${esc(record.reasoning)} reasoning · fresh conversation</p><pre class="verbatim">${esc(record.prompt)}</pre><p>Stored response SHA-256: <code class="hash">${record.replySha256}</code></p></details></section>`;
}
function exercise(unit, selected, assessmentMode) {
  const chosen = selected === undefined ? null : unit.choices[selected];
  const previous = assessmentMode === 'after' && state.first.before[unit.id] !== undefined ? `<p class="comparison">Your starting choice: “${esc(unit.choices[state.first.before[unit.id]].text)}”</p>` : '';
  if (!chosen) return `<section class="decision"><p class="goal"><b>Your goal</b><br>${esc(unit.goal)}</p><h2>${esc(unit.question)}</h2><div class="choices">${unit.choices.map((c,i) => button(esc(c.text), 'choose', i, true)).join('')}</div></section>`;
  const reply = chosen.record ? recordedReply(chosen.record) : chosen.reply ? `<div class="reply"><h3>Source-based case continuation</h3><p>${esc(chosen.reply)}</p></div>` : '';
  return `<section class="decision answered"><p class="chosen"><b>You chose</b><br>${esc(chosen.text)}</p><div class="result ${chosen.correct ? 'correct' : 'incorrect'}" id="feedback" tabindex="-1" role="status"><h2>${chosen.correct ? 'Correct' : 'Incorrect'}</h2><p>${esc(chosen.why)}</p>${previous}</div>${reply}${unit.resources && chosen.correct ? resource() : ''}<div class="actions">${chosen.correct ? button(unit.id === 'case-uncertainty' ? 'Finish case' : 'Continue', 'continue') : button('Try again', 'retry')}${chosen.correct && chosen.record ? button('Try another message', 'compare', '', true) : ''}</div></section>`;
}
function interactiveExample() {
  return `<section class="interactive-example"><h2>Try the generated quiz</h2><iframe title="Recorded potassium study quiz" src="examples/potassium-quiz.html" sandbox="allow-scripts" loading="eager"></iframe><p class="quiet">The quiz is the recorded HTML reply. Test its answers, feedback and Retry before choosing below.</p></section>`;
}
function lesson(partIndex, unitIndex) {
  const part = parts[partIndex];
  const unit = part.units[unitIndex];
  current = { unit, partIndex, unitIndex };
  const answered = state.answers[unit.id] !== undefined;
  const teaching = `<div class="teaching">${unit.teach}</div>${unit.context ? `<p class="context">${esc(unit.context)}</p>` : ''}${unit.sourceText ? `<blockquote><b>Supplied source note</b><p>${esc(unit.sourceText)}</p></blockquote>` : ''}`;
  return `<p class="eyebrow">Part ${partIndex + 1} of ${parts.length} · Step ${unitIndex + 1} of ${part.units.length}</p><h1>${esc(unit.title)}</h1>${answered ? `<details><summary>Review the explanation and task</summary>${teaching}</details>` : teaching}${!answered && unit.seed ? `<details class="earlier-reply"><summary>Read the supplied earlier exchange</summary><p><b>Student</b><br>${esc(unit.seed.prompt)}</p><pre class="verbatim">${esc(unit.seed.reply)}</pre></details>` : ''}${unit.interactive && !answered ? interactiveExample() : ''}${exercise(unit, state.answers[unit.id])}${unit.case ? hint(unit) : ''}${references(unit.sources)}<div class="back">${button('Back', 'go', unitIndex ? `${part.id}/${unitIndex - 1}` : partIndex ? `${parts[partIndex-1].id}/${parts[partIndex-1].units.length-1}` : 'overview', true)}</div>`;
}
function check(mode, index) {
  const unit = assessment[index];
  current = { unit, mode, unitIndex: index };
  return `<p class="eyebrow">${mode === 'before' ? 'Starting' : 'Closing'} exercise · ${index+1} of 5</p><h1>${esc(unit.title)}</h1>${index === 0 && state[mode][unit.id] === undefined ? `<p>${mode === 'before' ? 'Choose what you would do now. Your first choices stay in this tab for comparison at the end.' : 'Revisit the same five skills. After each attempt, compare it with your starting choice.'}</p>` : ''}${exercise(unit, state[mode][unit.id], mode)}${references(unit.sources)}`;
}
function debrief() {
  return `<p class="eyebrow">Case debrief</p><h1>Compare your reasoning with the source.</h1><p class="lead">The official USMLE answer is <b>von Willebrand disease</b>.</p><p>The bleeding history includes heavy menstruation and prolonged bleeding from a cut. The item’s answer key selects von Willebrand disease; it does not supply confirmatory test results.</p><h2>What your reasoning should preserve</h2><ul><li><b>Use the bleeding pattern.</b> Bleeding outside menstruation keeps a broader bleeding problem in consideration.</li><li><b>Respect screening limits.</b> CDC explains that screening tests are often normal in this disorder. Normal screening results alone do not exclude it.</li><li><b>Identify missing evidence.</b> CDC describes specific tests including von Willebrand factor antigen, factor activity and factor VIII activity. Their results were not provided here.</li></ul><h2>Use this in your next study chat</h2><p>Request a case, withhold the answer, make an attempt, ask for relevant evidence and update your explanation. At the end, compare the debrief with the source and identify what remains uncertain.</p>${references(['usmle','cdc','prompting'])}<div class="actions">${button('Continue to closing exercise', 'go', 'after/0')}${button('Return to case', 'go', 'apply/0', true)}</div>`;
}
function finish() {
  const rows = assessment.map(u => {
    const before = state.first.before[u.id]; const after = state.first.after[u.id];
    return `<tr><th scope="row">${esc(u.title)}</th><td>${before === undefined ? 'Not attempted' : u.choices[before].correct ? 'Correct' : 'Incorrect'}</td><td>${after === undefined ? 'Not attempted' : u.choices[after].correct ? 'Correct' : 'Incorrect'}</td></tr>`;
  }).join('');
  return `<p class="eyebrow">Take it into your own study session</p><h1>You choose the task.<br>You check the result.</h1><p>Begin with your learning gap. Specify the output and whether the model should explain, ask or wait. Revise the part that missed your goal. Check factual claims against the source before using them.</p><h2>A request you can adapt</h2><blockquote>I am a first-year medical student. I understand [starting point], but I cannot explain [specific gap]. Use the supplied excerpt to [task] in [format]. If you quiz me, ask one question and wait for my attempt. Identify anything the excerpt does not support.</blockquote><h2>Your first choices</h2><p class="quiet">This compares the first attempt at each exercise in this tab, before retries. It is practice feedback, not a validated learning score.</p><table><thead><tr><th>Skill</th><th>Starting</th><th>Closing</th></tr></thead><tbody>${rows}</tbody></table><div class="actions">${button('Try the closing exercise', 'go', 'after/0')}${button('Review the module', 'go', 'overview', true)}</div>${references(['prompting','design','evaluation'])}`;
}
function about() {
  return `<h1>Sources & about</h1><p>The recorded replies are actual outputs from fresh Luna agents at low reasoning, with no inherited conversation. They are displayed without shortening or rewriting. The complete requests, supplied follow-up context and response hashes are retained in the <a href="data/luna-transcripts.json" target="_blank" rel="noopener">transcript file</a>.</p><p>No memory-file reads occurred in the selected generation traces. Normal platform instructions still applied; these are not instruction-free model calls. Some requests include an operational instruction to answer in chat without using files or stored memory. This is preserved in the full request. These recordings illustrate individual outcomes, not a controlled comparison or a guarantee of how another model will reply.</p><p>Module feedback is written separately. Case continuations use fixed source findings and are labelled separately from Luna recordings. The module has not had faculty review.</p><p>The course PDF supplies kidney physiology only. AACOM, IES and the cited technical guidance support how to approach a study conversation. The clinical exercise condenses an official USMLE sample item.</p><p>Only completed step IDs are saved in your browser. Exercise choices stay in this tab and clear on reload. There are no AI requests, accounts, analytics or microphone features. The recorded HTML quiz runs locally in a sandboxed frame. Use fictional cases and permitted course excerpts in study tools; keep identifiable patient information out.</p>${Object.keys(sources).map(key => { const s = sources[key]; return `<section class="reference"><h2>${esc(s.title)}</h2><p>${esc(s.section)}</p>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener noreferrer">Open source</a>` : '<p>The supplied lecture is private and is not uploaded with this module.</p>'}</section>`; }).join('')}<p><a href="https://github.com/ArvinZaker/flex_ai_education_module#references-and-claim-support" target="_blank" rel="noopener noreferrer">Design evidence and source quotations</a></p>${button('Back to learning', 'go', resume())}`;
}
function render(focusFeedback = false) {
  current = null;
  const [route = 'overview', raw = '0'] = location.hash.slice(1).split('/');
  const index = Number(raw);
  const partIndex = parts.findIndex(p => p.id === route);
  let html;
  if (partIndex >= 0 && Number.isInteger(index) && index >= 0 && index < parts[partIndex].units.length) html = lesson(partIndex,index);
  else if (['before','after'].includes(route) && Number.isInteger(index) && index >= 0 && index < assessment.length) html = check(route,index);
  else if (route === 'debrief') { if (!state.revealed) { go('apply/0'); return; } html = debrief(); }
  else if (route === 'finish') html = finish();
  else if (route === 'about') html = about();
  else html = overview();
  main.innerHTML = html;
  document.querySelector('#progress-text').textContent = `${parts.filter(p => p.units.every(u => completed.has(u.id))).length} / ${parts.length} parts completed`;
  document.querySelector('#navigation').innerHTML = `<a href="#overview">Start</a>${parts.map((p,i) => `<a href="#${p.id}/0" ${i === partIndex ? 'aria-current="step"' : ''}>${i+1}. ${esc(p.title)}</a>`).join('')}<a href="#finish">Your learning</a>`;
  document.querySelector('.contents').open = false;
  document.title = `${main.querySelector('h1').textContent} | Learning with AI`;
  const target = focusFeedback ? document.querySelector('#feedback') : main;
  target.focus({preventScroll:true});
  if (focusFeedback) target.scrollIntoView({block:'center'}); else window.scrollTo(0,0);
}
document.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const { action, value } = target.dataset;
  if (action === 'go') go(value);
  else if (action === 'choose' && current) {
    const index = Number(value); const {unit,mode} = current;
    if (!unit.choices[index]) return;
    (mode ? state[mode] : state.answers)[unit.id] = index;
    if (mode && state.first[mode][unit.id] === undefined) state.first[mode][unit.id] = index;
    render(true);
  } else if (action === 'compare' && current) { delete state.answers[current.unit.id]; render(); }
  else if (action === 'retry' && current) { delete (current.mode ? state[current.mode] : state.answers)[current.unit.id]; render(); }
  else if (action === 'continue' && current) {
    const { unit, mode, partIndex, unitIndex } = current;
    if (!unit.choices[(mode ? state[mode] : state.answers)[unit.id]]?.correct) return;
    if (mode) go(unitIndex < assessment.length-1 ? `${mode}/${unitIndex+1}` : mode === 'before' ? 'ask/0' : 'finish');
    else {
      completed.add(unit.id); save();
      if (unit.id === 'case-uncertainty') { state.revealed = true; go('debrief'); }
      else if (unitIndex < parts[partIndex].units.length-1) go(`${parts[partIndex].id}/${unitIndex+1}`);
      else go(`${parts[partIndex+1].id}/0`);
    }
  } else if (action === 'reveal') { state.revealed = true; go('debrief'); }
  else if (action === 'flip') { state.flipped = true; render(); }
  else if (action === 'resource-answer') { state.resourceAnswer = value; render(); const result = document.querySelector('.resource .result'); result.focus(); result.scrollIntoView({block:'center'}); }
  else if (action === 'resource-retry') { state.resourceAnswer = null; render(); }
});
document.addEventListener('change', event => {
  if (event.target.id === 'hint-mode') { state.hint = event.target.value; render(); document.querySelector('.case-tools').open = true; document.querySelector('#hint-mode').focus(); }
  if (event.target.id === 'resource-format') { state.format = event.target.value; render(); document.querySelector('#resource-format').focus(); }
});
document.querySelector('#reset').addEventListener('click', () => { completed.clear(); save(); state.answers = {}; state.before = {}; state.after = {}; state.first = {before:{},after:{}}; state.revealed = false; state.hint = 'none'; state.flipped = false; state.resourceAnswer = null; go('overview'); });
document.querySelector('[data-go="about"]').addEventListener('click', () => go('about'));
document.querySelector('.skip').addEventListener('click', e => { e.preventDefault(); main.focus(); });
window.addEventListener('hashchange', () => render());
render();
