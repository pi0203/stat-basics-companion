window.WIDGETS=window.WIDGETS||{};
window.WIDGETS.ch2=function(){

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const KEY='rbasics-2.3-v1';
const store=JSON.parse(localStorage.getItem(KEY)||'{}');
const save=()=>localStorage.setItem(KEY,JSON.stringify(store));
const fmt=v=>Number.isInteger(v)?String(v):(+v.toFixed(6)).toString();
const rvec=(arr,quote)=>'[1] '+arr.map(v=>quote?'"'+v+'"':(typeof v==='number'?fmt(v):v)).join(' ');

/* nav + progress */
const secs=$$('section');
function buildNav(){
  const n=$('#nav'); n.innerHTML='';
  secs.forEach(s=>{const a=document.createElement('a');a.href='#'+s.id;
    a.innerHTML=`<span class="dot ${store['done_'+s.id]?'done':''}">${store['done_'+s.id]?'✓':''}</span>${s.dataset.t}`;n.appendChild(a)});
  const d=secs.filter(s=>store['done_'+s.id]).length;
  n.insertAdjacentHTML('beforeend',`<div class="bar"><i style="width:${d/secs.length*100}%"></i></div><small>${d} / ${secs.length} 칸 이해함</small>`);
}
secs.forEach(s=>{
  const ta=s.querySelector('.mine textarea'), b=s.querySelector('.donebtn');
  if(ta){ta.value=store['note_'+s.id]||'';ta.addEventListener('input',()=>{store['note_'+s.id]=ta.value;save()});}
  if(b){const set=()=>{b.classList.toggle('on',!!store['done_'+s.id]);b.textContent=store['done_'+s.id]?'이해함 ✓':'이해했어요'};set();
    b.onclick=()=>{store['done_'+s.id]=!store['done_'+s.id];save();set();buildNav()};}
});
buildNav();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#nav a').forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});
secs.forEach(s=>io.observe(s));

/* s0 */
const x0=[1,2,3,4];
const mean=a=>a.reduce((p,c)=>p+c,0)/a.length;
const vr=a=>{const m=mean(a);return a.reduce((p,c)=>p+(c-m)**2,0)/(a.length-1)};
$$('#s0 [data-f]').forEach(b=>b.onclick=()=>{
  const f=b.dataset.f; let r,why='';
  if(f==='mean'){r=mean(x0);why='평균: (1+2+3+4) ÷ 4 = 2.5. 책 46쪽과 같아요.'}
  if(f==='var'){r=vr(x0);why='분산: 평균 2.5에서 떨어진 거리의 제곱을 더하면 2.25+0.25+0.25+2.25 = 5. R은 이것을 n이 아니라 n−1 = 3으로 나눠요(5 ÷ 3 = 1.667). 표본으로 모집단을 추정할 때 쓰는 공식이고, 이유는 책 뒤 장에서 다뤄요. 책 47쪽 1.666667.'}
  if(f==='sd'){r=Math.sqrt(vr(x0));why='표준편차: 분산 1.667의 제곱근 = 1.291. 책 47쪽.'}
  if(f==='length'){r=x0.length;why='length(): 값이 몇 개인지. 책 57쪽에서 표본크기를 셀 때 다시 나와요.'}
  $('#s0out').innerHTML=`<span class="p">&gt;</span> ${f}(x)\n${rvec([r])}`; $('#s0why').textContent=why;
});

/* s1 vector */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
function parseVals(s){return s.split(',').map(t=>t.trim()).filter(t=>t.length).map(t=>{const q=t.match(/^["'](.*)["']$/);if(q)return{v:q[1],str:true};if(t==='TRUE'||t==='FALSE')return{v:t,lgl:true};if(!isNaN(+t))return{v:+t,num:true};return{v:t,bad:true}})}
let vec=[];
function makeVec(){
  const raw0=$('#s1in').value, raw=esc(raw0); const p=parseVals(raw0); const o=$('#s1out'), ch=$('#s1chips'); ch.innerHTML='';
  if(p.some(e=>e.bad)){o.innerHTML=`<span class="p">&gt;</span> x &lt;- c(${raw})\n<span class="e">Error: object '${esc(p.find(e=>e.bad).v)}' not found</span>\n<span class="p">#</span> 문자는 따옴표 안에 넣어야 해요 (책 48쪽)`;return}
  const anyStr=p.some(e=>e.str);
  vec=p.map(e=>anyStr?String(e.v):e.v);
  const type=anyStr?'character (문자)':(p.some(e=>e.num)?'numeric (숫자)':'logical (논리)');
  o.innerHTML=`<span class="p">&gt;</span> x &lt;- c(${raw})\n<span class="p">&gt;</span> x\n${esc(rvec(vec,anyStr))}\n<span class="p">#</span> 종류: ${type}`+(anyStr&&p.some(e=>e.num)?`\n<span class="p">#</span> 숫자가 따옴표 안으로 들어갔어요. 전부 문자가 된 것 (49쪽)`:'');
  vec.forEach((v,i)=>{const c=document.createElement('span');c.className='chip';c.innerHTML=`${esc(anyStr?'"'+v+'"':v)}<small>${i+1}번</small>`;
    c.onclick=()=>{$$('#s1chips .chip').forEach(k=>k.classList.remove('sel'));c.classList.add('sel');
      let extra='';
      if(anyStr&&vec.length>1&&i===0){extra=`\n<span class="p">&gt;</span> x[1] + x[2]\n<span class="e">Error in x[1] + x[2] : non-numeric argument to binary operator</span>\n<span class="p">#</span> 문자끼리는 더할 수 없어요 (책 49쪽)`}
      o.innerHTML=`<span class="p">&gt;</span> x[${i+1}]\n${esc(rvec([v],anyStr))}`+extra};
    ch.appendChild(c)});
}
$('#s1go').onclick=makeVec; $$('#s1 [data-v]').forEach(b=>b.onclick=()=>{$('#s1in').value=b.dataset.v;makeVec()}); makeVec();

/* s2 matrix */
let mSel=null, timer=null;
function mat(n,by){const c=12/n,m=[];for(let r=0;r<n;r++){m.push([]);for(let j=0;j<c;j++){const k=by?r*c+j:j*n+r;m[r].push(k+1)}}return m}
function drawM(order){
  const n=+$('#s2n').value, by=$('#s2b').checked, c=12/n, m=mat(n,by);
  $('#s2code').innerHTML=`m &lt;- matrix(<span class="arg a1">numbers</span>, <span class="arg a2">nrow=${n}</span>${by?`, <span class="arg a3">byrow=TRUE</span>`:''})`;
  let h='<table class="grid"><tr><th></th>'+Array.from({length:c},(_,j)=>`<th>[,${j+1}]</th>`).join('')+'</tr>';
  for(let r=0;r<n;r++){h+=`<tr><th>[${r+1},]</th>`;for(let j=0;j<c;j++){const v=m[r][j];const shown=order==null||v<=order;
    h+=`<td data-r="${r+1}" data-c="${j+1}" class="${shown?'':'no'} ${order!=null&&v===order?'fill':''} ${mSel&&mSel[0]===r+1&&mSel[1]===j+1?'sel':''}"><span class="ord">${v}번째</span>${shown?v:'·'}</td>`}h+='</tr>'}
  $('#s2grid').innerHTML=h+'</table>';
  $$('#s2grid td').forEach(td=>td.onclick=()=>{mSel=[+td.dataset.r,+td.dataset.c];drawM();$('#s2out').innerHTML=`<span class="p">&gt;</span> m[${mSel[0]}, ${mSel[1]}]\n[1] ${m[mSel[0]-1][mSel[1]-1]}\n<span class="p">#</span> ${mSel[0]}행(가로줄) ${mSel[1]}열(세로줄)에 있는 값`});
  if(order==null) $('#s2out').innerHTML=`<span class="p">#</span> ${n}행 ${c}열 = ${n}×${c} 행렬. 값 12개는 그대로, 모양만 바뀜` + (n===4&&!by?`\n<span class="p">#</span> 책 50쪽 matrix_ex1과 같은 모양`:'')+(n===4&&by?`\n<span class="p">#</span> 책 50쪽 matrix_ex2와 같은 모양`:'');
}
$('#s2n').onchange=$('#s2b').onchange=()=>{mSel=null;clearInterval(timer);drawM()};
$('#s2play').onclick=()=>{clearInterval(timer);mSel=null;let k=0;timer=setInterval(()=>{k++;drawM(k);$('#s2out').innerHTML=`<span class="p">#</span> ${k}번째 값 ${k}을(를) 넣는 중… ${$('#s2b').checked?'가로(행)부터':'세로(열)부터'}`;if(k>=12){clearInterval(timer);setTimeout(()=>drawM(),900)}},350)};
drawM();

/* s3 factor */
const marital=[2,3,2,1,2,3,4,2,3], lab=['married','single','divorced','widowed'];
let fStep=0;
function drawF(){
  const o=$('#s3out'), v=$('#s3vis'); let t=`<span class="p">&gt;</span> marital &lt;- c(2,3,2,1,2,3,4,2,3)`;
  if(fStep>=1)t+=`\n<span class="p">&gt;</span> fmarital &lt;- factor(marital)\n<span class="p">&gt;</span> fmarital\n[1] 2 3 2 1 2 3 4 2 3\nLevels: 1 2 3 4\n<span class="p">#</span> 숫자처럼 보이지만 이제 「칸 번호」. Levels = 가능한 범주 네 개`;
  if(fStep>=2)t+=`\n<span class="p">&gt;</span> levels(fmarital) &lt;- c("married","single","divorced","widowed")\n<span class="p">&gt;</span> fmarital\n[1] ${marital.map(k=>lab[k-1]).join(' ')}\nLevels: married single divorced widowed`;
  o.innerHTML=t;
  v.innerHTML=marital.map(k=>`<span class="chip">${fStep>=2?lab[k-1]:k}<small>${fStep>=1?'칸 '+k:'숫자'}</small></span>`).join('');
}
$('#s3a').onclick=()=>{fStep=Math.max(fStep,1);drawF()};$('#s3b').onclick=()=>{fStep=2;drawF()};$('#s3r').onclick=()=>{fStep=0;drawF()};drawF();

/* s4 list */
const age=[23,35,32,41,46,51,25,68,35];
const pockets={'marital.status':{d:'요인 9개 (결혼 상태)',o:`[1] ${marital.map(k=>lab[k-1]).join(' ')}\nLevels: married single divorced widowed`},'current.age':{d:'숫자 벡터 9개 (나이)',o:'[1] '+age.join(' ')}};
$('#s4bag').innerHTML=Object.entries(pockets).map(([k,p])=>`<div class="pocket" data-k="${k}"><b>$${k}</b><br><small>${p.d}</small></div>`).join('');
$$('#s4bag .pocket').forEach(el=>el.onclick=()=>{$$('#s4bag .pocket').forEach(e=>e.classList.remove('sel'));el.classList.add('sel');const k=el.dataset.k;
  $('#s4out').innerHTML=`<span class="p">&gt;</span> info$${k}\n${pockets[k].o}\n<span class="p">#</span> 한 가방 안에 문자(요인)와 숫자가 함께 들어 있어요`});

/* s5 data frame */
const DF={height:[164,159,175,158,179,167,166,171,168,159],gender:["Female","Female","Male","Female","Male","Female","Female","Male","Male","Female"],shoes:[6,7,10,11,6,8,9,6,10,9]};
const cols=['height','gender','shoes'];
function drawDF(target,hl){
  let h='<table class="grid"><tr><th></th>'+cols.map((c,j)=>`<th>[,${j+1}] ${c}</th>`).join('')+'</tr>';
  for(let i=0;i<10;i++){h+=`<tr><th>[${i+1},]</th>`;cols.forEach((c,j)=>{const on=hl&&hl(i,j);h+=`<td data-i="${i}" data-j="${j}" class="${on?'sel':''}" style="${c==='gender'?'text-align:left':''}">${DF[c][i]}</td>`});h+='</tr>'}
  $(target).innerHTML=h+'</table>';
}
function q5(q){
  let hl,code,res;
  if(q==='7,2'){hl=(i,j)=>i===6&&j===1;code='frame_ex[7, 2]';res='[1] "Female"\n# 7행 2열: 일곱 번째 사람의 성별'}
  else if(q===',1'){hl=(i,j)=>j===0;code='frame_ex[ , 1]';res='[1] '+DF.height.join(' ')+'\n# 행 자리를 비움 = 모든 사람, 1열 = height'}
  else if(q==='3,'){hl=(i,j)=>i===2;code='frame_ex[3, ]';res='  height gender shoes\n3    175   Male    10\n# 열 자리를 비움 = 세 번째 사람의 모든 변수'}
  else if(q==='$shoes'){hl=(i,j)=>j===2;code='frame_ex$shoes';res='[1] '+DF.shoes.join(' ')+'\n# 데이터 프레임도 가방(리스트)이라 $로 열 하나를 꺼낼 수 있어요'}
  else {const [i,j]=q.split(':').map(Number);hl=(a,b)=>a===i&&b===j;code=`frame_ex[${i+1}, ${j+1}]`;const v=DF[cols[j]][i];res=`[1] ${j===1?'"'+v+'"':v}\n# ${i+1}행 ${j+1}열 (${cols[j]})`}
  drawDF('#s5grid',hl);$('#s5out').innerHTML=`<span class="p">&gt;</span> ${code}\n`+res.replace(/^# (.*)$/gm,'<span class="p">#</span> $1');
  $$('#s5grid td').forEach(td=>td.onclick=()=>q5(td.dataset.i+':'+td.dataset.j));
}
$$('#s5 [data-q]').forEach(b=>b.onclick=()=>q5(b.dataset.q));
drawDF('#s5grid');$$('#s5grid td').forEach(td=>td.onclick=()=>q5(td.dataset.i+':'+td.dataset.j));

/* s6 filter */
let step=0;
function drawS6(){
  const g=$('#s6g').value, c=$('#s6c').value, j=cols.indexOf(c);
  const tf=DF.gender.map(v=>v===g), picked=DF[c].filter((_,i)=>tf[i]);
  const parts=[`frame_ex$gender`,`frame_ex$gender == "${g}"`,`frame_ex$${c}[frame_ex$gender == "${g}"]`,`mean(frame_ex$${c}[frame_ex$gender == "${g}"])`];
  const say=['','1걸음: gender 열(벡터)을 꺼내요.',`2걸음: 사람마다 「${g}인가?」를 물어요. 답이 TRUE/FALSE 벡터로 나와요.`,`3걸음: TRUE인 자리의 ${c}만 골라요. ${g==='Female'?'여자':'남자'}들의 ${c==='height'?'키':'신발 수'}예요 (책 56쪽).`,`덤: 고른 값의 평균. 책 57쪽에서 이렇게 요약표를 만들어요.`];
  $('#s6code').textContent=step?parts[step-1]:'다음 걸음을 눌러 보세요';
  let out='';
  if(step===1)out=rvec(DF.gender,true);
  if(step===2)out='[1] '+tf.map(b=>b?'TRUE':'FALSE').join(' ');
  if(step===3)out=rvec(picked);
  if(step===4)out=rvec([mean(picked)]);
  $('#s6out').innerHTML=step?`<span class="p">&gt;</span> ${parts[step-1]}\n${out}`:'';
  $('#s6say').textContent=say[step];
  drawDF('#s6grid',(i,jj)=>(step===1&&jj===1)||(step===2&&jj===1&&tf[i])||(step>=3&&jj===j&&tf[i]));
  if(step===2) $$('#s6grid tr').forEach((tr,k)=>{if(k>0&&!tf[k-1])tr.querySelectorAll('td').forEach(td=>td.classList.add('no'))});
  if(step>=3) $$('#s6grid tr').forEach((tr,k)=>{if(k>0)tr.querySelectorAll('td').forEach((td,jj)=>{if(!tf[k-1]||jj!==j)td.classList.add('no')})});
  $('#s6next').disabled=step>=4;
}
$('#s6next').onclick=()=>{step=Math.min(4,step+1);drawS6()};$('#s6r').onclick=()=>{step=0;drawS6()};
$('#s6g').onchange=$('#s6c').onchange=drawS6; drawS6();


/* s7 packages */
const PK={store:new Set(['MASS']),desk:new Set(),shoes:true};
const dep=['MASS','HistData','Hmisc','lattice','survival','Formula','ggplot2'];
function drawPK(){$('#pkStore').innerHTML=[...PK.store].map(p=>`<span class="chip" style="margin:2px">${p}</span>`).join('')||'<span class="note">(비어 있음)</span>';
 $('#pkDesk').innerHTML=[...PK.desk].map(p=>`<span class="chip sel" style="margin:2px">${p}</span>`).join('')||'<span class="note">(비어 있음)</span>'}
$$('#s7p [data-k]').forEach(b=>b.onclick=()=>{const k=b.dataset.k;let o='';
 if(k==='lib-using'){ if(!PK.store.has('UsingR')) o=`<span class="p">&gt;</span> library(UsingR)\n<span class="e">Error in library(UsingR) : there is no package called ‘UsingR’</span>\n<span class="p">#</span> 창고에 없으면 작업대로 꺼낼 수 없어요. 먼저 설치`;
   else {const nw=dep.filter(d=>!PK.desk.has(d)); nw.forEach(d=>PK.desk.add(d)); PK.desk.add('UsingR'); o=`<span class="p">&gt;</span> library(UsingR)\n`+nw.map(d=>`Loading required package: ${d}`).join('\n')+`\n<span class="p">#</span> UsingR은 다른 패키지들을 빌려 써서 함께 로딩돼요 (책 61–62쪽)`;}}
 if(k==='inst-using'){ if(PK.store.has('UsingR')) o=`<span class="p">&gt;</span> install.packages("UsingR")\n<span class="p">#</span> 이미 창고에 있어요. 설치는 한 번이면 충분`; else {PK.store.add('UsingR');dep.forEach(d=>PK.store.add(d));o=`<span class="p">&gt;</span> install.packages("UsingR")\ntrying URL '…/UsingR_….tgz'\npackage ‘UsingR’ successfully unpacked\n<span class="p">#</span> 창고에 저장됨 (필요한 패키지도 같이). 아직 작업대에는 없음`;}}
 if(k==='lib-mass'){ if(PK.desk.has('MASS')) o=`<span class="p">&gt;</span> library(MASS)\n<span class="p">#</span> 이미 작업대에 있어요. 아무 일도 안 일어남`; else {PK.desk.add('MASS');o=`<span class="p">&gt;</span> library(MASS)\n\nAttaching package: ‘MASS’\n\nThe following object is masked _by_ ‘.GlobalEnv’:\n\n    shoes\n<span class="p">#</span> 오류 아님. 이름이 겹친다는 안내 (책 59–60쪽)`;}}
 if(k==='detach'){ if(!PK.desk.has('MASS')) o=`<span class="p">&gt;</span> detach("package:MASS", unload=TRUE)\n<span class="e">Error in detach("package:MASS", unload = TRUE) : invalid 'name' argument</span>\n<span class="p">#</span> 작업대에 없는 것은 내려놓을 수 없어요`; else if(PK.desk.has('UsingR')){PK.desk.delete('MASS');o=`<span class="p">&gt;</span> detach("package:MASS", unload=TRUE)\n<span class="p">#</span> 작업대 목록에서는 내려놓았어요. 다만 UsingR이 속으로 MASS를 빌려 쓰는 중이라, R이 「완전히 비울 수는 없다」는 경고를 띄울 수 있어요`;} else {PK.desk.delete('MASS');o=`<span class="p">&gt;</span> detach("package:MASS", unload=TRUE)\n<span class="p">#</span> 작업대에서 내려놓음. 창고에는 그대로 (책 60쪽)`;}}
 if(k==='restart'){PK.desk.clear();o=`<span class="p">#</span> R을 다시 켰어요. 작업대는 비고 창고는 그대로.\n<span class="p">#</span> 그래서 쓸 패키지는 켤 때마다 library()로 다시 꺼내요`;}
 $('#pkOut').innerHTML=o;drawPK()});
drawPK();


/* s8 import */
const TX={height:[164,159,175,158,179,167,166,171,168,159],weight:[53,50,72,48,75,55,56,65,64,50],gender:DF.gender,shoes:[6,7,10,11,16,8,9,6,10,9]};
const tcols=['height','weight','gender','shoes'];
const lines=[tcols.join('\t')].concat(TX.height.map((_,i)=>tcols.map(c=>TX[c][i]).join('\t')));
$('#imRaw').innerHTML=lines.map(l=>esc(l).replace(/\t/g,'<span style="color:var(--acc2)"> ⇥ </span>')).join('\n');
function imDraw(sep){
  $$('#s7i [data-sep]').forEach(b=>b.classList.toggle('pri',b.dataset.sep===sep));
  let cols,rows;
  if(sep==='tab'){cols=tcols;rows=TX.height.map((_,i)=>tcols.map(c=>TX[c][i]));}
  else{cols=['height.weight.gender.shoes'];rows=lines.slice(1).map(l=>[l.replace(/\t/g,'\\t')]);}
  let t='<table class="grid"><tr><th></th>'+cols.map(c=>`<th>${c}</th>`).join('')+'</tr>'+rows.map((r,i)=>`<tr><th>${i+1}</th>`+r.map(v=>`<td style="text-align:left">${esc(v)}</td>`).join('')+'</tr>').join('')+'</table>';
  $('#imGrid').innerHTML=t;
  $('#imOut').innerHTML=sep==='tab'
   ?`<span class="p">&gt;</span> data_text &lt;- read.delim("data_text.txt")\n<span class="p">&gt;</span> dim(data_text)\n[1] 10  4\n<span class="p">#</span> 10행 4열. 탭 자리에서 잘 잘라 네 변수가 됐어요 (책 65쪽과 같은 표)`
   :`<span class="p">&gt;</span> data_text &lt;- read.delim("data_text.txt", sep=",")\n<span class="p">&gt;</span> dim(data_text)\n[1] 10  1\n<span class="p">#</span> 쉼표를 찾았는데 없어서 한 줄 통째로 한 칸이 됐어요. 오류 없이 이상한 표가 생기는 경우라 꼭 dim()이나 표를 눈으로 확인`;
}
$$('#s7i [data-sep]').forEach(b=>b.onclick=()=>imDraw(b.dataset.sep)); imDraw('tab');
const PP=[['~','물결표: 시작점 폴더. 책(윈도우)에서는 Documents, 맥에서는 보통 내 홈 폴더(/Users/내이름)'],['/','폴더와 폴더 사이를 나누는 표시. R에서는 윈도우의 \\ 대신 / 를 씀 (64쪽)'],['05.Intro Stats','폴더 이름 (지은이 컴퓨터의 폴더)'],['/',''],['04.R','그 안의 폴더'],['/',''],['01.ch2','그 안의 폴더'],['/',''],['data_text.txt','파일 이름. 끝의 .txt는 텍스트 파일이라는 표시']];
$('#imPath').innerHTML='data_text &lt;- read.delim("'+PP.map((p,i)=>`<span class="arg ${p[0]==='/'?'a2':(i===0?'a3':'a1')}" data-pi="${i}" style="cursor:pointer">${esc(p[0])}</span>`).join('')+'")';
$$('#imPath [data-pi]').forEach(s=>s.onclick=()=>{const p=PP[+s.dataset.pi];$('#imPathOut').innerHTML=`<span class="p">#</span> ${esc(p[0])} : ${esc(p[1]||PP[1][1])}`});
const IM={
 txt:[`<span class="p">&gt;</span> data_text &lt;- read.delim("data_text.txt")\n<span class="p">&gt;</span> data_text\n  height weight gender shoes\n1    164     53 Female     6\n2    159     50 Female     7\n…`,'텍스트 파일은 R에 처음부터 있는 함수로 읽어요. 패키지가 필요 없어요.'],
 'xl-no':[`<span class="p">&gt;</span> data_excel &lt;- read_excel("data_excel.xlsx")\n<span class="e">Error in read_excel("data_excel.xlsx") : could not find function "read_excel"</span>`,'엑셀을 읽는 함수는 readxl 패키지 안에 있어요. 작업대로 꺼내 오지(로딩) 않으면 R이 그 함수를 몰라요. 7번 칸의 「창고와 작업대」가 바로 여기서 쓰여요.'],
 xl:[`<span class="p">&gt;</span> library(readxl)\n<span class="p">&gt;</span> data_excel &lt;- read_excel("data_excel.xlsx")\n<span class="p">&gt;</span> data_excel\n# A tibble: 10 × 4\n  height weight gender shoes\n   &lt;dbl&gt;  &lt;dbl&gt; &lt;chr&gt;  &lt;dbl&gt;\n1    164     53 Female     6\n2    159     50 Female     7\n…`,'결과 맨 위 「A tibble: 10 × 4」는 10행 4열짜리 tibble(티블)이라는 뜻이에요. tibble은 데이터 프레임의 새 모양이라고 보면 돼요(67쪽). 열 이름 아래 &lt;dbl&gt;은 숫자(실수), &lt;chr&gt;는 문자예요.']
};
$$('#s7i [data-im]').forEach(b=>b.onclick=()=>{const v=IM[b.dataset.im];$('#imCmp').innerHTML=v[0];$('#imSay').innerHTML=v[1]});


/* os */
const osPick=o=>{document.body.dataset.os=o;store.os=o;save();$$('.osbar button').forEach(b=>b.classList.toggle('on',b.dataset.os===o))};
$$('.osbar button').forEach(b=>b.onclick=()=>osPick(b.dataset.os));
osPick(store.os||(/Mac|iPhone|iPad/.test(navigator.userAgent)?'mac':'win'));


/* think */
$$('.think').forEach(t=>{const id=t.dataset.id,ta=t.querySelector('textarea'),rv=t.querySelector('.reveal'),cbs=[...t.querySelectorAll('input[type=checkbox]')];
 const st=store['think_'+id]||{a:'',open:false,c:[]};
 ta.value=st.a; cbs.forEach((c,i)=>c.checked=!!st.c[i]);
 const sync=()=>{rv.disabled=ta.value.trim().length<5;t.classList.toggle('open',!!st.open);t.classList.toggle('all',cbs.every(c=>c.checked));store['think_'+id]=st;save()};
 ta.oninput=()=>{st.a=ta.value;sync()}; rv.onclick=()=>{st.open=true;sync()}; cbs.forEach((c,i)=>c.onchange=()=>{st.c[i]=c.checked;sync()}); sync();});

/* map */
$$('.map .c').forEach(c=>c.onclick=()=>document.getElementById(c.dataset.go).scrollIntoView({behavior:'smooth'}));

};
