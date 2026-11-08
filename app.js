'use strict';
const modules = window.COURSE.modules;
const main = document.querySelector('#main');
const tabs = document.querySelector('#module-tabs');
const key = 'learning-with-ai-four-modules-v1';
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let saved;
try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch { saved = {}; }
const completed = new Set(Array.isArray(saved.completed) ? saved.completed.filter(id => modules.some(m => m.scenes.some(s => s.id === id))) : []);
const answers = {}, selections = {};
let current = null, activeModule = modules[0], pendingTabFocus = null;
const go = route => { if (location.hash === '#'+route) render(); else location.hash = route; };
const button = (text, action, value='', secondary=false) => `<button class="${secondary?'secondary':'primary'}" data-action="${action}" data-value="${esc(value)}">${esc(text)}</button>`;
function save(){try{localStorage.setItem(key,JSON.stringify({completed:[...completed]}));}catch{/* The course also works without browser storage. */}}
function resume(m){const n=m.scenes.findIndex(s=>!completed.has(s.id));return n<0?m.id+'/finish':m.id+'/'+n;}
function textBlocks(blocks){
 let code=false,codeLines=[],html='';
 const flush=()=>{if(codeLines.length){html+=`<pre class="code-view"><code>${esc(codeLines.join('\n'))}</code></pre>`;codeLines=[];}code=false;};
 for(const b of blocks){
  if(b.type==='table'){flush();const [head,...rows]=b.rows;html+=`<div class="table-wrap" tabindex="0" role="region" aria-label="Study reference table"><table><thead><tr>${head.map(v=>`<th scope="col">${esc(v)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((v,i)=>i?`<td>${esc(v)}</td>`:`<th scope="row">${esc(v)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;continue;}
  const t=b.text;
  if(/^(Reference[s]?:|Estimated duration:)/.test(t)||['Story','Story continues'].includes(t))continue;
  if(t==='library(meta)'||t.startsWith('library(meta)'))code=true;
  if(code){codeLines.push(t);if(t==='forest(result)')flush();continue;}
  if(t==='Story continues'||t==='Story continues')continue;
  if(/^(SE <-|=LN\(|=\(LN\(|log_HR <-)/.test(t)){html+=`<pre class="code-view"><code>${esc(t)}</code></pre>`;continue;}
  html+=b.heading?`<h3>${esc(t.replace(/^AI response$/,'Scripted AI response'))}</h3>`:`<p>${esc(t)}</p>`;
 }
 flush();return html;
}
function policy(){return `<aside class="policy"><h2>UBC scribe rules in this scenario</h2><p><b>Years 1–3:</b> no independent ambient AI scribing. <b>Year 4 electives:</b> exceptional use requires educational-lead approval, preceptor agreement and informed patient consent.</p><p>Students must write their own clinical documentation. The Year 4 scribe exception does not authorize general-purpose LLM editing of student notes.</p><a href="https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Generative-Artificial-Intelligence-Gen-AI-Guideline-1.pdf" target="_blank" rel="noopener noreferrer">Ambient scribing guideline</a> · <a href="https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Large-Language-Models-LLMs-in-Clinical-Documentation-Guideline-1.pdf" target="_blank" rel="noopener noreferrer">Clinical documentation guideline</a></aside>`;}
function sourceLinks(m){
 const links=m.id==='education'?[{title:'Endocrine Society: primary aldosteronism, recommendations 1–3',url:'https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2'},m.references[0]]:m.id==='scribes'?m.references.slice(0,3):m.id==='research'?[{title:'Cochrane Handbook: effect measures and standard errors, §§6.3.2 and 6.8',url:'https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06'},m.references.at(-1)]:[{title:'Privacy regulators: responsible AI in health',url:'https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20260915_aihealth'},m.references[4]];
 return `<details class="sources"><summary>References for this module</summary>${links.filter(Boolean).map(r=>`<p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a></p>`).join('')}<a href="#${m.id}/sources">All references & about</a></details>`;
}
function introduction(m){return `<p class="eyebrow">${esc(m.label)} · ${esc(m.duration)}</p><h1>${esc(m.title)}</h1><p class="lead">${esc(m.description)}</p><p class="simulation">Scripted learning story. Patients, conversations and program data are fictional unless a published study is explicitly identified.</p>${m.id==='scribes'?policy():''}<div class="actions">${button(completed.size&&m.scenes.some(s=>completed.has(s.id))?'Resume this module':'Start this module','go',resume(m))}</div><details><summary>What you will practise</summary><ul>${m.objectives.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></details><ol class="scene-list">${m.scenes.map((s,i)=>`<li><a href="#${m.id}/${i}"><span>${esc(s.title)}</span>${completed.has(s.id)?'<small>Completed</small>':''}</a></li>`).join('')}</ol>${sourceLinks(m)}`;}
function noteReview(){
 const s=modules.find(m=>m.id==='scribes').scenes[2];
 const all=s.reading;const a=all.findIndex(b=>b.text==='Simulated consultation'),b=all.findIndex(b=>b.text==='Story continues'),n=all.findIndex(b=>b.text==='AI-generated draft note');
 return `<div class="note-review"><details class="encounter" open><summary>Fictional encounter</summary>${textBlocks(all.slice(a+1,b))}</details><section class="clinical-note"><h2>AI-generated draft note</h2><p class="quiet">Fictional teaching example</p>${textBlocks(all.slice(n+1))}</section></div>`;
}
function evidence(m,s,n,q){
 if(m.id==='scribes'&&(n===2||n===3))return noteReview();
 if(m.id==='ethics'&&n===5)return `<ol class="journey"><li><b>Screen locally</b><span>Retinal photographs near home</span></li><li><b>Referral recommended</b><span>Further assessment is needed</span></li><li class="barrier"><b>Almost four hours away</b><span>Travel, lost wages and transport still prevent attendance</span></li></ol>`;
 if(m.id==='ethics'&&n===6)return `<section class="dashboard" aria-label="Fictional program results"><p class="quiet">Fictional results · six months</p><div><p><strong>400</strong>screened</p><p><strong>60</strong>referral recommended</p><p><strong>24 / 60</strong>completed follow-up</p></div><p>36 had not completed follow-up by the reporting date. Completion was 40%; timing and urgency also matter.</p></section>`;
 if(!q)return '';
 const blocks=q.before;
 const ai=blocks.findIndex(b=>/^(AI response|Simulated AI response|AI-generated practice question)$/.test(b.text||''));
 if(m.id==='research'&&n===4){const a=blocks.findIndex(b=>b.text==='Example R code');return a>=0?`<details class="example-code"><summary>Read the illustrative R code · fictional inputs</summary>${textBlocks(blocks.slice(a+1).filter(b=>b.text!=='Story continues'))}</details>`:'';}
 if(ai>=0){let end=ai+1;while(end<blocks.length&&!blocks[end].heading)end++;return `<section class="chat-example"><p class="chat-label">Scripted AI output${m.id==='education'&&n===2||m.id==='education'&&n===4||m.id==='research'&&[1,3,5].includes(n)?' · evaluate this reply':''}</p>${textBlocks(blocks.slice(ai+1,end))}</section>`;}
 if(m.id==='education'&&n===3&&current.qIndex===1){const at=blocks.findIndex(b=>b.text==='AI-generated practice question');return `<section class="case-card">${textBlocks(at>=0?blocks.slice(at+1):blocks)}</section>`;}
 if(m.id==='research'&&n===2&&current.qIndex===1)return `<blockquote>“Empagliflozin reduced cardiovascular mortality by 21%.”</blockquote><p>Compare this simulated extraction with the trial’s primary composite endpoint: cardiovascular death or hospitalization for heart failure.</p>`;
 return '';
}
function questionView(q){
 const answer=answers[q.id];
 if(answer===undefined){if(q.multi)return `<form id="note-form"><fieldset><legend>${esc(q.question)}</legend>${q.choices.map((c,i)=>`<label class="check-choice"><input type="checkbox" name="note-error" value="${i}" ${selections[q.id]?.includes(i)?'checked':''}><span>${esc(c.text)}</span></label>`).join('')}</fieldset><div class="actions"><button class="primary" type="submit">Check my review</button></div></form>`;
 return `<section class="decision"><h2>${esc(q.question)}</h2><div class="choices">${q.choices.map((c,i)=>button(c.text,'choose',i,true)).join('')}</div></section>`;}
 const correct=q.multi?q.correct.length===answer.length&&q.correct.every(i=>answer.includes(i)):answer===q.correct;
 const why=q.multi?'<p>Compare each selection with the encounter.</p>'+q.choices.map((c,i)=>{const matched=answer.includes(i)===q.correct.includes(i);return `<div class="review-item ${matched?'matched':'missed'}"><h3>${matched?'Correct':'Incorrect'} · ${q.correct.includes(i)?'This is a documentation error':'This was documented accurately'}</h3><p>${esc(c.feedback)}</p></div>`;}).join(''):`<p class="chosen"><b>Your choice</b><br>${esc(q.choices[answer].text)}</p><p>${esc(q.choices[answer].feedback)}</p>`;
 return `<section class="result ${correct?'correct':'incorrect'}" id="feedback" tabindex="-1" role="status"><h2>${correct?'Correct':'Incorrect'}</h2>${why}${!correct&&!q.multi?`<p><b>Best approach</b><br>${esc(q.choices[q.correct].text)}</p>`:''}</section><div class="actions">${button('Continue','next')}${button('Try again','retry','',true)}</div>${q.after.length?`<details class="continuation"><summary>How Alex continues</summary>${textBlocks(q.after)}</details>`:''}`;
}
function lesson(m,sceneIndex,qIndex){
 const s=m.scenes[sceneIndex],q=s.questions[qIndex];current={m,scene:s,sceneIndex,qIndex,q};
 const count=s.questions.length>1?` · Decision ${qIndex+1} of ${s.questions.length}`:'';
 const answered=q&&answers[q.id]!==undefined;
 const formula=answered&&m.id==='research'&&sceneIndex===4?'<section class="formula-check"><h2>Check the scale of the calculation</h2><p>For the illustrated normal-approximation 95% confidence interval:</p><p><b>Incorrect for a log hazard ratio</b></p><pre class="code-view incorrect-code">SE &lt;- (upper_CI - lower_CI) / (2 * 1.96)</pre><p><b>Use the logarithmic limits</b></p><pre class="code-view correct-code">SE &lt;- (log(upper_CI) - log(lower_CI)) / (2 * 1.96)</pre></section>':'';
 return `<p class="eyebrow">Scene ${sceneIndex+1} of ${m.scenes.length}${count}</p><h1>${esc(s.title)}</h1>${m.id==='scribes'&&[0,4].includes(sceneIndex)?policy():''}${!answered?`<p class="lead scene-intro">${esc(s.intro)}</p>${evidence(m,s,sceneIndex,q)}`:''}${answered&&q.multi?`<details><summary>Compare the encounter and draft again</summary>${noteReview()}</details>`:''}${formula}${q?questionView(q):`<div class="actions">${button('Continue','next')}</div>`}${!answered&&q&&q.before.length?`<details class="full-scene"><summary>Read the full scene</summary>${textBlocks(q.before)}</details>`:''}${sourceLinks(m)}<div class="back">${button('Back','go',qIndex?`${m.id}/${sceneIndex}/${qIndex-1}`:sceneIndex?`${m.id}/${sceneIndex-1}/${Math.max(0,m.scenes[sceneIndex-1].questions.length-1)}`:m.id,true)}</div>`;
}
function finish(m){return `<p class="eyebrow">${esc(m.label)}</p><h1>What Alex learned</h1><div class="closing">${textBlocks(m.summary)}</div><div class="actions">${button('Review this module','go',m.id)}${modules.indexOf(m)<modules.length-1?button('Next module','go',modules[modules.indexOf(m)+1].id,true):''}</div>${sourceLinks(m)}`;}
function sources(m){return `<h1>Sources & about</h1><p>Adapted from the supplied four-part <a href="https://docs.google.com/document/d/1RiM3ESKn9kHTSzPT4lZvKlXfSxUhvb2NR19EZBhnr5o/edit" target="_blank" rel="noopener noreferrer">AI Modules outline</a>. These are scripted educational examples, not recorded model runs or clinical advice. The earlier module and its unchanged Luna recordings are preserved in the project archive.</p><p>The course is an educational draft. Faculty review and student usability testing have not been completed. Estimated times come from the outline and have not been measured.</p><p>Only completed scene IDs are saved in your browser. Choices clear on reload. There are no live model calls, uploads, analytics, patient-data entry or microphone features.</p><h2>${esc(m.label)} references</h2>${m.references.map(r=>`<section class="reference"><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a></section>`).join('')}${m.id==='education'?'<p><a href="https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2" target="_blank" rel="noopener noreferrer">Endocrine Society official guideline recommendations</a></p>':''}<div class="actions">${button('Back to module','go',m.id)}</div>`;}
function render(focusFeedback=false){
 current=null;const [id,step,qraw='0']=location.hash.slice(1).split('/');const m=modules.find(m=>m.id===id)||modules[0];activeModule=m;let html;
 if(step==='sources')html=sources(m);else if(step==='finish')html=finish(m);else if(step!==undefined&&/^\d+$/.test(step)&&Number(step)<m.scenes.length){const n=Number(step);const qi=/^\d+$/.test(qraw)&&Number(qraw)<Math.max(1,m.scenes[n].questions.length)?Number(qraw):0;html=lesson(m,n,qi);}else html=introduction(m);
 tabs.innerHTML=modules.map((mod,i)=>`<button type="button" role="tab" id="tab-${mod.id}" aria-controls="main" aria-selected="${mod.id===m.id}" tabindex="${mod.id===m.id?0:-1}" data-action="tab" data-value="${mod.id}"><span class="tab-number" aria-hidden="true">${i+1}</span><span>${esc(mod.label)}</span></button>`).join('');
 main.setAttribute('aria-labelledby','tab-'+m.id);main.innerHTML=html;
 document.querySelector('#progress-text').textContent=`${m.scenes.filter(s=>completed.has(s.id)).length} / ${m.scenes.length} scenes completed`;
 document.title=m.label+' | Learning with AI';const target=pendingTabFocus?document.querySelector('#tab-'+pendingTabFocus):focusFeedback?document.querySelector('#feedback'):main;pendingTabFocus=null;target.focus({preventScroll:true});if(focusFeedback)target.scrollIntoView({block:'center'});else window.scrollTo(0,0);
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const {action,value}=b.dataset;
 if(action==='tab'||action==='go'){go(value);return;}
 if(action==='choose'&&current?.q){const n=Number(value);if(!current.q.choices[n])return;answers[current.q.id]=n;render(true);}
 else if(action==='retry'&&current?.q){delete answers[current.q.id];render();}
 else if(action==='next'&&current){const {m,scene,sceneIndex,qIndex,q}=current;if(q&&answers[q.id]===undefined)return;if(qIndex<scene.questions.length-1)go(`${m.id}/${sceneIndex}/${qIndex+1}`);else{completed.add(scene.id);save();go(sceneIndex<m.scenes.length-1?`${m.id}/${sceneIndex+1}`:m.id+'/finish');}}
});
document.addEventListener('submit',e=>{if(e.target.id!=='note-form'||!current?.q)return;e.preventDefault();answers[current.q.id]=[...new FormData(e.target).getAll('note-error')].map(Number);render(true);});
document.addEventListener('change',e=>{if(e.target.name==='note-error'&&current?.q)selections[current.q.id]=[...document.querySelectorAll('[name="note-error"]:checked')].map(x=>Number(x.value));});
tabs.addEventListener('keydown',e=>{const list=[...tabs.querySelectorAll('[role="tab"]')];const i=list.indexOf(document.activeElement);if(i<0)return;let n;if(e.key==='ArrowRight')n=(i+1)%list.length;else if(e.key==='ArrowLeft')n=(i+list.length-1)%list.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=list.length-1;else return;e.preventDefault();pendingTabFocus=modules[n].id;go(modules[n].id);});
document.querySelector('#reset').addEventListener('click',()=>{for(const s of activeModule.scenes){completed.delete(s.id);for(const q of s.questions){delete answers[q.id];delete selections[q.id];}}save();go(activeModule.id);});
document.querySelector('#about').addEventListener('click',()=>go(activeModule.id+'/sources'));
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();});
window.addEventListener('hashchange',()=>render());render();
