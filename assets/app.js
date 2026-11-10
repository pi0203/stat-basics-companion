/* 공통 틀: 내용 파일(content/*.js)을 읽어 화면을 그리고, 장마다 위젯(widgets/*.js)을 붙인다. 바깥 요청 없음. */
(function(){
const C=window.CONTENT||{}, W=window.WIDGETS||{};
const KEYS=['rbasics-2.3-v1','stat-skeleton-v1','companion-stuck'];
const app=document.getElementById('app');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const stuck=()=>JSON.parse(localStorage.getItem('companion-stuck')||'[]');
const topbar=(here)=>`<div class="topbar"><a href="#/">← 교재 뼈대(처음)</a><span class="note">${here}</span></div>`;

function home(){
  app.innerHTML=topbar('')+window.HOME_HTML+tools();
  W.home&&W.home(); bindTools();
}
function tools(){
  const st=stuck();
  return `<div class="wrap1"><section class="tools"><h2>내 기록</h2>
  <p class="note">진도, 내 답, 「여기서 막힘」 표시는 이 브라우저에만 저장돼요. 다른 컴퓨터로 옮기거나 지워질 때를 대비해 파일로 내보내 두세요. (Safari는 7일 넘게 열지 않으면 지울 수 있어요.)</p>
  <div class="row"><button id="exp">내 기록 파일로 내보내기</button><label class="note">불러오기 <input type="file" id="imp" accept=".json"></label></div>
  <h2 style="margin-top:14px">여기서 막힘 (${st.length})</h2>
  ${st.length?`<ul>${st.map(x=>`<li>${esc(x.ch)}장 · ${esc(x.title)} <span class="note">${esc(x.t)}</span></li>`).join('')}</ul><button id="cpst">목록 복사하기</button> <span class="note">복사해서 같이 공부하는 사람이나 Aside에게 보내면, 그 칸부터 다시 풀어요.</span>`:'<p class="note">아직 없어요. 칸 끝 「여기서 막힘」을 누르면 여기 모여요.</p>'}
  </section></div>`;
}
function bindTools(){
  const e=document.getElementById('exp'); if(!e) return;
  e.onclick=()=>{const o={};KEYS.forEach(k=>{const v=localStorage.getItem(k);if(v)o[k]=JSON.parse(v)});
    const b=new Blob([JSON.stringify({app:'stat-basics-companion',saved:new Date().toISOString(),data:o},null,1)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='내기록_사회과학통계의기본_'+new Date().toISOString().slice(0,10)+'.json';a.click();};
  document.getElementById('imp').onchange=ev=>{const f=ev.target.files[0];if(!f)return;f.text().then(t=>{try{const j=JSON.parse(t);if(j.app!=='stat-basics-companion')throw 0;
    if(!confirm('지금 이 브라우저의 기록을 파일 내용으로 바꿀까요?'))return;Object.entries(j.data).forEach(([k,v])=>KEYS.includes(k)&&localStorage.setItem(k,JSON.stringify(v)));location.reload();}catch(_){alert('이 교재에서 내보낸 파일이 아니에요.')}})};
  const c=document.getElementById('cpst'); if(c) c.onclick=()=>{navigator.clipboard.writeText(stuck().map(x=>`${x.ch}장 · ${x.title} (${x.t})`).join('\n'));c.textContent='복사했어요';};
}
function chapter(n){
  const d=C['ch'+n]; if(!d){home();return;}
  const os=d.osbar?`<div class="osbar" role="group" aria-label="내 컴퓨터 고르기">내 컴퓨터: <button data-os="mac">Mac</button><button data-os="win">Windows</button><span class="note">고르면 설치 방법, 단축키, 파일 주소가 그 컴퓨터에 맞게 바뀌어요.</span></div>`:'';
  const secs=d.sections.map(s=>`<section id="${s.id}" data-t="${esc(s.nav)}"><h2>${esc(s.title)}</h2><div class="page">${s.page}</div>${s.blocks.map(b=>b.html).join('\n')}
   <div class="mine"><label>${esc(s.mine||'내 말로 한 줄')}</label><textarea></textarea><div class="row"><span class="note">이 브라우저에만 저장</span><span><button class="stuckbtn">여기서 막힘</button> <button class="donebtn">이해했어요</button></span></div></div></section>`).join('\n');
  app.innerHTML=topbar(`${n}장 ${esc(d.title)}`)+`<header><div class="kicker">${esc(d.kicker)}</div><h1>${esc(d.h1)}</h1><p>${esc(d.lead)}</p><details class="more"><summary>이 장에 대해 더 자세히 보기</summary>${d.about}</details></header>${os}<div class="wrap"><nav id="nav"></nav><main>${secs}</main></div>`;
  W['ch'+n]&&W['ch'+n]();
  document.querySelectorAll('section').forEach(s=>{const b=s.querySelector('.stuckbtn');if(!b)return;
    const has=()=>stuck().some(x=>x.ch===n&&x.id===s.id);const set=()=>{b.classList.toggle('on',has());b.textContent=has()?'막힘 표시됨':'여기서 막힘'};set();
    b.onclick=()=>{let st=stuck();st=has()?st.filter(x=>!(x.ch===n&&x.id===s.id)):st.concat([{ch:n,id:s.id,title:s.dataset.t,t:new Date().toLocaleDateString('ko-KR')}]);localStorage.setItem('companion-stuck',JSON.stringify(st));set();};});
}
function route(){const m=(location.hash||'').match(/^#\/ch\/(\d+)/);m?chapter(+m[1]):home();window.scrollTo(0,0);}
window.addEventListener('hashchange',route);route();
})();
