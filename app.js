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
const shortTitles = {"education": ["Lecture", "Mechanisms", "Wrong answers", "Self-testing", "Reasoning"], "scribes": ["Rules", "Consent", "Encounter", "Errors", "Sign-off", "Refusal"], "research": ["Search", "Design", "Screening", "Statistics", "Code", "Writing", "Integrity"], "ethics": ["Access", "Positive result", "Ungradable", "Equity", "Privacy", "Follow-up", "Success"]};
const go = route => { if (location.hash === '#'+route) render(); else location.hash = route; };
const button = (text, action, value='', secondary=false) => `<button class="${secondary?'secondary':'primary'}" data-action="${action}" data-value="${esc(value)}">${esc(text)}</button>`;
function save(){try{localStorage.setItem(key,JSON.stringify({completed:[...completed]}));}catch{/* The course also works without browser storage. */}}
function resume(m){const n=m.scenes.findIndex(s=>!completed.has(s.id));return n<0?m.id+'/finish':m.id+'/'+n;}
function referenceText(text){
 const refs=modules.flatMap(m=>m.references);
 const aliases=[
 ['MDUP Use of Generative Artificial Intelligence (Gen AI) Guideline', 'MDUP Use of Generative'],
 ['Use of Large Language Models (LLMs) in Clinical Documentation Guideline','Use of Large Language Models'],
 ['Expectations of Medical Students in Supervised Clinical Settings Policy','Expectations of Medical Students'],
 ['Jones et al., 2025','Jones DW'],['Endocrine Society Primary Aldosteronism Guideline, 2025','Endocrine Society:'],['Endocrine Society, 2025','Endocrine Society:'],['Carey et al., 2018','Carey et al.'],
 ['UBC Library FLEX Research Guide','UBC Library.'],['PRISMA 2020','Page MJ'],['PRISMA-P','Shamseer L'],['Cochrane RoB 2','Sterne JAC'],['Cochrane Handbook','Higgins JPT'],['Anker et al., EMPEROR-Preserved, 2021','Anker SD'],['ICMJE Recommendations on AI Use in Publishing','International Committee'],
 ['Michael Smith Health Research BC, National Tele-ophthalmology Research Program','Michael Smith'],['Michael Smith Health Research BC','Michael Smith'],['Abràmoff et al., 2018','Abràmoff MD'],['World Health Organization, Ethics and Governance of AI for Health','World Health Organization'],['WHO','World Health Organization'],['Office of the Privacy Commissioner of Canada','Office of the Privacy'],['Health Canada, National Strategy for Eye Care','Health Canada.']
 ];
 let result='',rest=text;
 while(rest){let best=null;for(const [label,prefix] of aliases){const at=rest.indexOf(label);if(at>=0&&(!best||at<best.at||(at===best.at&&label.length>best.label.length)))best={at,label,prefix};}
 if(!best){result+=esc(rest);break;}
 const ref=refs.find(r=>r.title.includes(best.prefix));result+=esc(rest.slice(0,best.at));result+=ref?`<a href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(best.label)}</a>`:esc(best.label);rest=rest.slice(best.at+best.label.length);
 }
 return result;
}
function textBlocks(blocks){
 let code=false,codeLines=[],html='';
 const flush=()=>{if(codeLines.length){html+=`<pre class="code-view"><code>${esc(codeLines.join('\n'))}</code></pre>`;codeLines=[];}code=false;};
 for(const b of blocks){
  if(b.type==='table'){flush();const [head,...rows]=b.rows;html+=`<div class="table-wrap" tabindex="0" role="region" aria-label="Study reference table"><table><thead><tr>${head.map(v=>`<th scope="col">${esc(v)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((v,i)=>i?`<td>${esc(v)}</td>`:`<th scope="row">${esc(v)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;continue;}
  const t=b.text;
  if(/^Estimated duration:/.test(t)||['Story','Story continues'].includes(t)||t==='This policy panel must be prominently displayed in the module.')continue;
  if(t==='library(meta)'||t.startsWith('library(meta)'))code=true;
  if(code){codeLines.push(t);if(t==='forest(result)')flush();continue;}
  if(t==='Story continues'||t==='Story continues')continue;
  if(/^(SE <-|=LN\(|=\(LN\(|log_HR <-)/.test(t)){html+=`<pre class="code-view"><code>${esc(t)}</code></pre>`;continue;}
  html+=b.heading?`<h3>${esc(t.replace(/^Key takeaway displayed$/,'Takeaway'))}</h3>`:`<p>${referenceText(t)}</p>`;
 }
 flush();return html;
}
function policy(){return `<aside class="policy"><h2>UBC scribe rules in this scenario</h2><p><b>Years 1–3:</b> no independent ambient AI scribing. <b>Year 4 electives:</b> exceptional use requires educational-lead approval, preceptor agreement and informed patient consent.</p><p>Students must write their own clinical documentation. The Year 4 scribe exception does not authorize general-purpose LLM editing of student notes.</p><a href="https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Generative-Artificial-Intelligence-Gen-AI-Guideline-1.pdf" target="_blank" rel="noopener noreferrer">Ambient scribing guideline</a> · <a href="https://med-fom-mednet.sites.olt.ubc.ca/files/2026/04/MDUP-Use-of-Large-Language-Models-LLMs-in-Clinical-Documentation-Guideline-1.pdf" target="_blank" rel="noopener noreferrer">Clinical documentation guideline</a></aside>`;}
function sourceLinks(m){
 const links=m.id==='education'?[{title:'Endocrine Society: primary aldosteronism, recommendations 1–3',url:'https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2'},m.references[0]]:m.id==='scribes'?m.references.slice(0,3):m.id==='research'?[{title:'Cochrane Handbook: effect measures and standard errors, §§6.3.2 and 6.8',url:'https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-06'},m.references.at(-1)]:[{title:'Privacy regulators: responsible AI in health',url:'https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/joint-resolutions-with-provinces-and-territories/res_20260915_aihealth'},m.references[4]];
 return `<details class="sources"><summary>References for this module</summary>${links.filter(Boolean).map(r=>`<p><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a></p>`).join('')}<a href="#${m.id}/sources">All references & about</a></details>`;
}
function introduction(m){return `<h1>${esc(m.title)}</h1><p class="lead">${esc(m.description)}</p>${m.background.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="learning-route">Read the principle, apply it in Alex’s story, then use the feedback to check your reasoning.</p>${m.id==='scribes'?policy():''}<div class="actions">${button(completed.size&&m.scenes.some(s=>completed.has(s.id))?'Resume this module':'Start this module','go',resume(m))}</div><details><summary>What you will practise</summary><ul>${m.objectives.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></details>${sourceLinks(m)}`;}
function noteReview(){
 const s=modules.find(m=>m.id==='scribes').scenes[2];
 const all=s.reading;const a=all.findIndex(b=>b.text==='Simulated consultation'),b=all.findIndex(b=>b.text==='Story continues'),n=all.findIndex(b=>b.text==='AI-generated draft note');
 return `<div class="note-review"><details class="encounter" open><summary>Encounter</summary>${fullScene(all.slice(a+1,b))}</details><section class="clinical-note"><h2>AI-generated draft note</h2>${textBlocks(all.slice(n+1))}</section></div>`;
}
function evidence(m,s,n,q){
 if(m.id==='scribes'&&(n===2||n===3))return noteReview();
 if(m.id==='ethics'&&n===5)return `<ol class="journey"><li><b>Screen locally</b><span>Retinal photographs near home</span></li><li><b>Referral recommended</b><span>Further assessment is needed</span></li><li class="barrier"><b>Almost four hours away</b><span>Travel, lost wages and transport still prevent attendance</span></li></ol>`;
 if(m.id==='ethics'&&n===6)return `<section class="dashboard" aria-label="Program results"><p class="quiet">Results · six months</p><div><p><strong>400</strong>screened</p><p><strong>60</strong>referral recommended</p><p><strong>24 / 60</strong>completed follow-up</p></div><p>36 had not completed follow-up by the reporting date. Completion was 40%; timing and urgency also matter.</p></section>`;
 if(m.id==='ethics'&&n===0)return `<ol class="journey"><li><b>Photographs near home</b><span>A trained worker captures retinal images.</span></li><li><b>AI screening result</b><span>The system assesses images within its intended use.</span></li><li><b>Follow-up pathway</b><span>The clinic communicates results and arranges further assessment when indicated.</span></li></ol>`;
 if(m.id==='ethics'&&n===3)return `<section class="equity-comparison"><h2>Compare what the story tells us</h2><table><thead><tr><th>Patient group</th><th>Evidence in the story</th></tr></thead><tbody><tr><th scope="row">Older patients with cataracts</th><td>More ungradable results are observed.</td></tr><tr><th scope="row">Other patient groups</th><td>Group-specific results are not supplied.</td></tr></tbody></table><p>Numeric image-quality rates, diagnostic performance and access to screening and follow-up by group are not provided. The clinic needs those comparisons before concluding that benefits are equitable. This observation alone does not establish algorithmic bias.</p></section>`;
 if(m.id==='ethics'&&[1,2].includes(n)&&q){const a=q.before.findIndex(b=>b.text==='AI SCREENING RESULT');if(a>=0){let end=a+1;while(end<q.before.length&&!/^(Alex:|Dr\. Chen:|The patient)/.test(q.before[end].text||''))end++;return `<section class="chat-example screening-result"><p class="chat-label">Simulated AI screening result</p>${textBlocks(q.before.slice(a+1,end))}</section>`;}}
 if(!q)return '';
 const blocks=q.before;
 const ai=blocks.findIndex(b=>/^(AI response|Simulated AI response|AI-generated practice question)$/.test(b.text||''));
 if(m.id==='research'&&n===4){const a=blocks.findIndex(b=>b.text==='Example R code');return a>=0?`<details class="example-code"><summary>Read the R code</summary>${textBlocks(blocks.slice(a+1).filter(b=>b.text!=='Story continues'))}</details>`:'';}
 if(ai>=0){let end=ai+1;while(end<blocks.length&&!blocks[end].heading)end++;return `<section class="chat-example"><p class="chat-label">AI response${m.id==='education'&&n===2||m.id==='education'&&n===4||m.id==='research'&&[1,3,5].includes(n)?' · evaluate this reply':''}</p>${textBlocks(blocks.slice(ai+1,end))}</section>`;}
 if(m.id==='education'&&n===3&&current.qIndex===1){const at=blocks.findIndex(b=>b.text==='AI-generated practice question');return `<section class="case-card">${textBlocks(at>=0?blocks.slice(at+1):blocks)}</section>`;}
 if(m.id==='research'&&n===2&&current.qIndex===1)return `<blockquote>“Empagliflozin reduced cardiovascular mortality by 21%.”</blockquote><p>Compare this simulated extraction with the trial’s primary composite endpoint: cardiovascular death or hospitalization for heart failure.</p>`;
 return '';
}
function dialogue(blocks){
 const turns=[];
 for(let i=0;i<blocks.length;i++){
  const text=blocks[i].text||'';
  const match=text.match(/^(Alex|Dr\. Chen|Dr\. Lee|Mr\. Patel|Mr\. Singh|Ms\. Williams):\s*["“](.*)/);
  if(match)turns.push({speaker:match[1],text:match[2].replace(/["”]$/,'')});
  else if(text==='Alex types:'||text==='Alex then asks:'){const next=blocks[i+1]?.text||'';if(/^["“]/.test(next))turns.push({speaker:'Alex',text:next.replace(/^["“]|["”]$/g,'')});}
 }
 return turns.length?`<section class="dialogue" aria-label="Conversation">${turns.map(t=>`<div class="dialogue-turn ${t.speaker==='Alex'?'student-turn':''}"><p class="chat-label">${esc(t.speaker)}</p><p>${esc(t.text)}</p></div>`).join('')}</section>`:'';
}
function excerpt(blocks,title){const a=blocks.findIndex(b=>b.text===title);if(a<0)return [];let end=a+1;while(end<blocks.length&&!blocks[end].heading)end++;return blocks.slice(a+1,end);}
function featuredContinuation(q){
 const b=q.after;
 if(q.id==='education-1-1')return `<section class="featured-continuation"><h2>Alex organizes the explanation</h2><p class="chat-label">AI response after the suggested prompt</p>${fullScene([{type:'text',text:'AI response',heading:true},...excerpt(b,'AI response after choosing B')])}</section>`;
 if(q.id==='education-2-1')return `<section class="featured-continuation"><h2>Alex follows the mechanism</h2><p class="chat-label">AI response after the suggested prompt</p>${fullScene([{type:'text',text:'AI response',heading:true},...excerpt(b,'AI response after choosing A')])}</section>`;
 if(q.id==='education-3-1')return `<section class="featured-continuation"><h2>Alex checks and revises the reply</h2>${dialogue(b)}<p class="chat-label">Corrected AI response</p>${fullScene([{type:'text',text:'AI response',heading:true},...excerpt(b,'Corrected AI response')])}</section>`;
 if(q.id==='research-2-1'){const table=b.find(x=>x.type==='table');return `<section class="featured-continuation"><h2>A framework to discuss with Dr. Lee</h2>${table?textBlocks([table]):''}<p><b>Discuss before proceeding:</b> the EF threshold, mixed populations, outcome definitions and whether existing reviews already answer the question.</p></section>`;}
 if(q.id==='research-5-1')return `<section class="formula-check"><h2>Check the scale of the calculation</h2><p>For the illustrated normal-approximation 95% confidence interval:</p><p><b>Incorrect for a log hazard ratio</b></p><pre class="code-view incorrect-code">SE &lt;- (upper_CI - lower_CI) / (2 * 1.96)</pre><p><b>Use the logarithmic limits</b></p><pre class="code-view correct-code">SE &lt;- (log(upper_CI) - log(lower_CI)) / (2 * 1.96)</pre></section>`;
 if(q.id==='research-6-1'){const a=b.findIndex(x=>x.text==="Alex's original paragraph:"),z=b.findIndex(x=>x.text==='AI-edited version:');return `<section class="featured-continuation"><h2>Compare the wording</h2><div class="writing-comparison"><article><h3>Alex’s draft</h3><p>${esc(b[a+1].text)}</p></article><article><h3>AI-edited draft</h3><p>${esc(b[z+1].text)}</p></article></div><p>Check that the edited version preserves the verified findings and uncertainty.</p></section>`;}
 return '';
}
function continuation(q){
 if(!q.after.length)return '';
 let blocks=q.after;
 if(q.id==='research-6-1'){
  const a=blocks.findIndex(b=>b.text==="Alex's original paragraph:");
  const z=blocks.findIndex(b=>b.text==='AI-edited version:');
  if(a>=0&&z>=0)blocks=blocks.filter((b,i)=>![a,a+1,z,z+1].includes(i));
 }
 return `<section class="continuation"><h2>See how the conversation continues</h2>${fullScene(blocks)}${['research-5-1','research-6-1'].includes(q.id)?featuredContinuation(q):''}</section>`;
}
function questionView(q){
 const answer=answers[q.id];
 if(answer===undefined){if(q.multi)return `<form id="note-form" class="decision" tabindex="-1"><fieldset><legend>${esc(q.question)}</legend>${q.choices.map((c,i)=>`<label class="check-choice"><input type="checkbox" name="note-error" value="${i}" ${selections[q.id]?.includes(i)?'checked':''}><span>${esc(c.text)}</span></label>`).join('')}</fieldset><div class="actions"><button class="primary" type="submit">Check my review</button></div></form>`;
 return `<section class="decision" tabindex="-1"><p class="eyebrow">Your turn · Choose one response</p><h2>${esc(q.question)}</h2><div class="choices">${q.choices.map((c,i)=>button(c.text,'choose',i,true)).join('')}</div></section>`;}
 const correct=q.multi?q.correct.length===answer.length&&q.correct.every(i=>answer.includes(i)):answer===q.correct;
 const why=q.multi?'<p>Compare each selection with the encounter.</p>'+q.choices.map((c,i)=>{const matched=answer.includes(i)===q.correct.includes(i);return `<div class="review-item ${matched?'matched':'missed'}"><h3>${matched?'Correct':'Incorrect'} · ${q.correct.includes(i)?'This is a documentation error':'This was documented accurately'}</h3><p>${esc(c.feedback)}</p></div>`;}).join(''):`<p class="chosen"><b>Your choice</b><br>${esc(q.choices[answer].text)}</p><p>${esc(q.choices[answer].feedback)}</p>`;
 return `<section class="result ${correct?'correct':'incorrect'}" id="feedback" tabindex="-1" role="status"><h2>${correct?'Correct':'Incorrect'}</h2>${why}${!correct&&!q.multi?`<p><b>Best approach</b><br>${esc(q.choices[q.correct].text)}</p>`:''}</section>${continuation(q)}<div class="actions">${button('Continue','next')}${button('Try again','retry','',true)}</div>`;
}
function chatBody(blocks){
 if(blocks.some(b=>(b.text||'').startsWith('library(meta)')))return textBlocks(blocks);
 let html='',run=[];
 const flush=()=>{html+=run.length>=3?`<ul class="chat-list">${run.map(b=>`<li>${esc(b.text)}</li>`).join('')}</ul>`:textBlocks(run);run=[];};
 for(const b of blocks){if(b.type==='text'&&!b.heading&&b.text.length<90&&!/[.!?:]$/.test(b.text)&&!/[<>=#()]/.test(b.text))run.push(b);else{flush();html+=textBlocks([b]);}}
 flush();return html;
}
function fullScene(blocks){
 let html='',pending=[],speaker=null;
 const flush=()=>{if(!pending.length)return;const body=speaker?.startsWith('AI')?chatBody(pending):textBlocks(pending);html+=speaker?`<article class="conversation-turn ${speaker==='Alex'?'from-student':speaker.startsWith('AI')?'from-ai':'from-person'}"><p class="speaker">${esc(speaker)}</p>${body}</article>`:`<div class="scene-narration">${body}</div>`;pending=[];speaker=null;};
 for(let i=0;i<blocks.length;i++){
  const b=blocks[i],t=b.text||'';
  if(/^Estimated duration:/.test(t))continue;
  if(/^Reference[s]?:/.test(t)){flush();html+=`<p class="scene-reference">${referenceText(t)}</p>`;continue;}
  const named=t.match(/^(Alex|Dr\. Chen|Dr\. Lee|Mr\. Patel|Mr\. Singh|Ms\. Williams):\s*["“](.*)/);
  if(named){flush();speaker=named[1];pending=[{type:'text',text:named[2].replace(/["”]$/,'')}];flush();continue;}
  if(/^(Alex types:|Alex then asks:|Alex asks the chatbot:)$/.test(t)){
   if(/^["“]/.test(blocks[i+1]?.text||'')){flush();speaker='Alex';pending=[{type:'text',text:blocks[++i].text.replace(/^["“]|["”]$/g,'')}];flush();}continue;
  }
  if(/^(AI response(?: after choosing .)?|Simulated AI response|Corrected AI response|AI-generated practice question|AI SCREENING RESULT)$/.test(t)){flush();speaker=t==='AI SCREENING RESULT'?'AI screening system':'AI chatbot';continue;}
  if(b.heading&&['Story','Story continues'].includes(t)){flush();continue;}
  if(b.heading&&t!=='Example R code'){flush();pending.push(b);continue;}
  pending.push(b);
 }
 flush();return `<div class="conversation" aria-label="Scenario conversation">${html}</div>`;
}
function lesson(m,sceneIndex,qIndex){
 const s=m.scenes[sceneIndex],q=s.questions[qIndex];current={m,scene:s,sceneIndex,qIndex,q};
 const count=s.questions.length>1?`Decision ${qIndex+1} of ${s.questions.length}`:'';
 const answered=q&&answers[q.id]!==undefined;
 const learn=s.teaching;
 const teaching=`<section class="teaching" aria-label="Learn before applying"><p class="eyebrow">Learn</p><h2>${esc(learn.title)}</h2><p>${esc(learn.explanation)}</p><p class="application">${esc(learn.application)}</p></section>`;
 const note=m.id==='scribes'&&[2,3].includes(sceneIndex);
 const visual=m.id==='ethics'&&[0,3,5,6].includes(sceneIndex)?evidence(m,s,sceneIndex,q):'';
 const story=note?`${q?fullScene(q.before):textBlocks(s.reading.slice(0,s.reading.findIndex(b=>b.text==='Simulated consultation'))) }${noteReview()}`:fullScene(q?q.before:s.reading);
 return `${count?`<p class="eyebrow">${count}</p>`:''}<h1>${esc(s.title)}</h1>${!answered?`${teaching}<section class="scenario" aria-label="Apply in the scenario"><div class="scenario-heading"><h2>Apply it: Alex’s story</h2>${q?'<button type="button" class="text-button" data-action="decision">Go to your decision ↓</button>':''}</div>${m.id==='scribes'&&[0,4].includes(sceneIndex)?policy():''}${story}${visual}</section>`:''}${answered&&q.multi?`<details open><summary>Compare the encounter and draft again</summary>${noteReview()}</details>`:''}${q?questionView(q):`<div class="actions">${button('Continue','next')}</div>`}${sourceLinks(m)}<div class="back">${button('Back','go',qIndex?`${m.id}/${sceneIndex}/${qIndex-1}`:sceneIndex?`${m.id}/${sceneIndex-1}/${Math.max(0,m.scenes[sceneIndex-1].questions.length-1)}`:m.id,true)}</div>`;
}
function finish(m){return `<p class="eyebrow">${esc(m.label)}</p><h1>What Alex learned</h1><div class="closing">${textBlocks(m.summary)}</div><div class="actions">${button('Review this module','go',m.id)}${modules.indexOf(m)<modules.length-1?button('Next module','go',modules[modules.indexOf(m)+1].id,true):''}</div>${sourceLinks(m)}`;}
function sources(m){return `<h1>Sources & about</h1><p>Made by Karanvir Gill, Arvin Zaker and Luka Vukovic.</p><h2>${esc(m.label)} references</h2>${m.references.map(r=>`<section class="reference"><a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}</a></section>`).join('')}${m.id==='education'?'<p><a href="https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2" target="_blank" rel="noopener noreferrer">Endocrine Society official guideline recommendations</a></p>':''}<div class="actions">${button('Back to module','go',m.id)}</div>`;}
function render(focusFeedback=false){
 current=null;const [id,step,qraw='0']=location.hash.slice(1).split('/');const m=modules.find(m=>m.id===id)||modules[0];activeModule=m;let html;
 if(step==='sources')html=sources(m);else if(step==='finish')html=finish(m);else if(step!==undefined&&/^\d+$/.test(step)&&Number(step)<m.scenes.length){const n=Number(step);const qi=/^\d+$/.test(qraw)&&Number(qraw)<Math.max(1,m.scenes[n].questions.length)?Number(qraw):0;html=lesson(m,n,qi);}else html=introduction(m);
 tabs.innerHTML=modules.map((mod,i)=>`<button type="button" role="tab" id="tab-${mod.id}" aria-controls="main" aria-selected="${mod.id===m.id}" tabindex="${mod.id===m.id?0:-1}" data-action="tab" data-value="${mod.id}"><span class="tab-number" aria-hidden="true">${i+1}</span><span>${esc(mod.label)}</span></button>`).join('');
 const sn=/^\d+$/.test(step)?Number(step):-1;document.querySelector('#scene-tabs').innerHTML=`<button type="button" data-action="go" data-value="${m.id}"${step===undefined?' aria-current="page"':''}>Overview</button>`+m.scenes.map((sc,i)=>`<button type="button" data-action="go" data-value="${m.id}/${i}"${i===sn?' aria-current="page"':''}${completed.has(sc.id)?' class="done"':''}><span class="tab-number" aria-hidden="true">${completed.has(sc.id)?'✓':i+1}</span><span>${esc(shortTitles[m.id]?.[i]||sc.title)}</span></button>`).join('');
 main.setAttribute('aria-labelledby','tab-'+m.id);main.innerHTML=html;
 document.title=m.label+' | Learning with AI';const target=pendingTabFocus?document.querySelector('#tab-'+pendingTabFocus):focusFeedback?document.querySelector('#feedback'):main;pendingTabFocus=null;target.focus({preventScroll:true});if(focusFeedback)target.scrollIntoView({block:'center'});else window.scrollTo(0,0);
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const {action,value}=b.dataset;
 if(action==='decision'){const target=main.querySelector('.decision');target?.focus();target?.scrollIntoView({block:'start',behavior:'smooth'});return;}
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
