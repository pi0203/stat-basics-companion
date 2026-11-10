window.CONTENT=window.CONTENT||{};
window.CONTENT.ch2={
 "n": 2,
 "title": "R 프로그램 소개",
 "kicker": "『사회과학통계의 기본』 2장 2.2–2.3 · 인쇄 38–67쪽",
 "h1": "R의 기초를 손으로 익히기",
 "lead": "책을 한 줄씩 읽다가 막히는 낱말이 나오면 이 쪽에서 그 칸을 열어 보세요. 점선 밑줄 낱말에 마우스를 올리거나 누르면 뜻이 나옵니다.",
 "about": "<summary>이 교재에 대해 더 자세히 보기</summary>\n  <p><b>무엇:</b> 『사회과학통계의 기본』 2장 2.2~2.3(인쇄 38~67쪽)을 칸 하나씩, 뜻 → 비유 → 직접 눌러 보기 → 내 말로 한 줄 순서로 다시 짠 것이에요. 책을 대신하지 않고, 책 옆에 펴 두고 막히는 줄에서 여는 용도예요.</p>\n  <p><b>네 바퀴 중 2바퀴(한 줄씩):</b> 전체 뼈대는 「1바퀴_교재뼈대」 파일에서 먼저 세우고, 여기서는 한 줄씩 뜻을 잡아요. 3바퀴부터는 내 R에서 직접 쳐 보고, 4바퀴에서 논문과 내 자료에 써먹어요.</p>\n  <p><b>칸 읽는 법:</b> 파란 줄 = 뜻, 주황 줄 = 비유, 점선 상자 = 함정이나 책과 지금 R이 다른 곳, 파란 테 「생각해 보기」 = 먼저 내 답을 쓰고 스스로 점검. 점선 밑줄 낱말은 누르거나 마우스를 올리면 뜻이 나와요.</p>\n  <p><b>Mac과 Windows:</b> 맨 위에서 내 컴퓨터를 고르면 설치법, 단축키, 파일 주소가 바뀌어요.</p>\n  <p><b>믿을 수 있는 범위:</b> 쪽수와 예제 숫자는 책에서 옮겼고, R 출력은 지금 R(4.4~4.6)에서 나오는 모양으로 흉내 낸 것이에요. 설명과 비유는 Aside가 쓴 것이라 틀릴 수 있어요(작성자 확인 전). 적은 것은 이 브라우저에만 저장돼요.</p>\n  ",
 "osbar": true,
 "sections": [
  {
   "id": "sSet",
   "nav": "준비. R과 RStudio 설치",
   "title": "준비. R과 RStudio 설치하기",
   "page": "책 2.2 R의 설치(38–43쪽)를 지금 기준으로 다시 씀 · 2026-11-10 공식 누리집 확인",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 두 가지를 깔아요. <b>R</b>은 계산을 하는 엔진, <b>RStudio</b>는 그 엔진을 편하게 쓰게 해 주는 작업 화면이에요. R을 먼저 깔고, 그다음 RStudio를 깔아요.</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> R은 자동차 엔진, RStudio는 운전석. 운전석만 있고 엔진이 없으면 차가 안 움직여요.</div>\n"
    },
    {
     "type": "osbox",
     "html": "<div class=\"osbox os-mac\"><span class=\"tag\">Mac</span>\n<ol class=\"steps\">\n<li><b>내 Mac의 칩 확인:</b> 화면 왼쪽 위 사과 모양 → 「이 Mac에 관하여」 → 「칩」 칸에 <b>Apple M1, M2…</b>라고 있으면 Apple silicon, <b>Intel</b>이라고 있으면 Intel이에요.</li>\n<li><b>R 받기:</b> cran.r-project.org → 「Download R for macOS」 → Apple silicon이면 <code>R-4.6.2-arm64.pkg</code>, Intel이면 <code>R-4.6.2-x86_64.pkg</code> (2026-10-29 나온 판 기준, 숫자는 시간이 지나면 바뀌어요).</li>\n<li><b>설치:</b> 받은 .pkg 파일을 두 번 눌러 「계속」을 눌러 가면 돼요. 「다운로드 폴더 접근을 허용할까요?」가 뜨면 <b>허용</b>을 눌러야 설치가 돼요(CRAN 안내).</li>\n<li><b>RStudio 받기:</b> posit.co → RStudio Desktop → Mac용 .dmg를 받아 열고, RStudio 아이콘을 「응용 프로그램」 폴더로 끌어다 놓아요.</li>\n<li><b>처음 열 때</b> 「인터넷에서 받은 앱입니다. 열까요?」가 뜨면 「열기」를 눌러요.</li>\n</ol></div>\n"
    },
    {
     "type": "osbox",
     "html": "<div class=\"osbox os-win\"><span class=\"tag\">Windows</span>\n<ol class=\"steps\">\n<li><b>R 받기:</b> cran.r-project.org → 「Download R for Windows」 → 「base」 → <code>R-4.6.2-win.exe</code> (64비트, 2026-10-29 나온 판 기준).</li>\n<li><b>설치:</b> 받은 .exe를 두 번 눌러요. 「이 앱이 디바이스를 변경하도록 허용하시겠어요?」가 뜨면 <b>예</b>. 나머지는 「다음」을 눌러 기본값 그대로 두면 돼요.</li>\n<li><b>RStudio 받기:</b> posit.co → RStudio Desktop → Windows용 .exe를 받아 같은 방식으로 설치해요.</li>\n<li><b>시작 메뉴</b>에서 R이 아니라 <b>RStudio</b>를 찾아 열어요.</li>\n<li><b>알려진 걸림돌(판단):</b> Windows 사용자 이름이 한글이면 패키지 설치 폴더에서 문제가 났다는 보고가 많아요. 설치가 자꾸 실패하면 이것부터 의심해 보세요.</li>\n</ol></div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>책과 다른 곳:</b> 책은 2019년 R 3.5.1, Windows 화면 기준이에요. 지금 판은 R 4.6.2(2026-10-29)예요. 설치 순서(R 먼저, RStudio 다음)는 같아요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「R과 RStudio의 차이는 ___ 」"
  },
  {
   "id": "s0",
   "nav": "0. 만들고 부르기",
   "title": "0. 값을 만들고, 이름 붙이고, 부르기",
   "page": "책 44–47쪽 · <code>x &lt;- c(1, 2, 3, 4)</code>, <code>mean(x)</code>",
   "blocks": [
    {
     "type": "html",
     "html": "<p>책의 첫 명령은 한 줄이지만 낱말이 네 개 들어 있어요.</p>\n"
    },
    {
     "type": "html",
     "html": "<div class=\"code\"><span class=\"arg a1\">x</span> <span class=\"arg a2\">&lt;-</span> <span class=\"arg a3\">c</span>(1, 2, 3, 4)</div>\n"
    },
    {
     "type": "html",
     "html": "<div class=\"legend\"><span><span class=\"arg a1\">x</span> 이름(객체)</span><span><span class=\"arg a2\">&lt;-</span> 오른쪽 결과를 왼쪽 이름에 넣기</span><span><span class=\"arg a3\">c()</span> 하나로 묶는 함수</span></div>\n"
    },
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 1, 2, 3, 4를 하나로 묶어서(<code>c</code>) <code>x</code>라는 이름표가 붙은 상자에 넣어라.</div>\n"
    },
    {
     "type": "html",
     "html": "<p><span class=\"term\" tabindex=\"0\" data-t=\"R 안에 이름을 붙여 저장해 둔 것. 숫자 묶음, 표, 분석 결과 모두 객체가 될 수 있다. 책 45쪽 환경 탭에 보이는 것들.\">객체(object)</span>는 이름표가 붙은 상자예요. 한 번 넣어 두면 그다음부터는 이름만 불러도 안의 값이 나와요.</p>\n"
    },
    {
     "type": "html",
     "html": "<p><span class=\"term\" tabindex=\"0\" data-t=\"괄호 앞의 이름. 무언가를 받아서 일을 하고 결과를 돌려준다. mean, sd, c, matrix 모두 함수.\">함수(function)</span>는 일을 해 주는 기계예요. 이름 뒤 괄호 <code>( )</code> 안에 넣는 것을 <b>argument(아규먼트)</b>라고 불러요(책 50쪽 각주 9).</p>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 카페 주문 <code>커피(원두, 크기=톨, 샷추가=TRUE)</code>. <code>커피</code>가 기계(함수), 괄호 안의 원두는 재료, <code>크기=톨</code>은 「어떻게 만들지」 주문이에요. 재료와 주문이 모두 argument예요.</div>\n\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>함수 기계에 x 넣어 보기</h3>\n<div class=\"row\">x에 든 값: <span id=\"s0vals\" class=\"code\" style=\"display:inline;padding:3px 8px;margin:0\">1, 2, 3, 4</span>\n<button data-f=\"mean\">mean(x)</button><button data-f=\"sd\">sd(x)</button><button data-f=\"var\">var(x)</button><button data-f=\"length\">length(x)</button></div>\n<div class=\"out\" id=\"s0out\"><span class=\"p\">&gt;</span> 단추를 눌러 보세요</div>\n<p class=\"note\" id=\"s0why\"></p>\n</div>\n"
    },
    {
     "type": "osbox",
     "html": "<div class=\"osbox\"><b>실행 단축키 (책 44쪽 「Ctrl+Enter」):</b> <span class=\"os-win\">Windows는 책 그대로 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, 끝낼 때 <kbd>Ctrl</kbd>+<kbd>Q</kbd>(47쪽).</span><span class=\"os-mac\">Mac은 <kbd>Ctrl</kbd> 대신 <kbd>⌘ Cmd</kbd>: <kbd>⌘</kbd>+<kbd>Return</kbd>로 실행, <kbd>⌘</kbd>+<kbd>Q</kbd>로 끝내기. 책의 Ctrl이 나오면 ⌘로 읽으면 돼요.</span></div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>책 45쪽의 [1]:</b> 출력 앞의 <code>[1]</code>은 「이 줄은 첫 번째 값부터 시작한다」는 번호예요. 값이 길어서 줄이 바뀌면 다음 줄 앞에 <code>[13]</code> 같은 번호가 붙어요. 결과의 일부가 아니라 위치 안내예요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「argument는 ___ 이다」"
  },
  {
   "id": "s1",
   "nav": "1. 벡터",
   "title": "1. 벡터 (vector)",
   "page": "책 48–49쪽",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 같은 종류의 값을 한 줄로 늘어놓은 것. 통계로 치면 <b>변수 하나</b>예요(예: 열 사람의 키).</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 번호표를 받고 한 줄로 선 사람들. 번호는 <b>1번부터</b> 셉니다. <code>x[3]</code>은 「세 번째 사람 나와 주세요」.</div>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>벡터 만들고 하나 꺼내기</h3>\n<div class=\"row\"><code>x &lt;- c(</code><input type=\"text\" id=\"s1in\" value=\"1, 2, 3, 4\" style=\"width:240px\"><code>)</code><button class=\"pri\" id=\"s1go\">만들기</button></div>\n<div class=\"row\" style=\"gap:6px\">\n <button data-v=\"1, 2, 3, 4\">숫자만</button>\n <button data-v='\"Male\", \"Female\"'>문자만 (48쪽 gender)</button>\n <button data-v='1, 2, 3, \"Female\"'>숫자+문자 섞기 (49쪽)</button>\n</div>\n<div class=\"row\" id=\"s1chips\"></div>\n<div class=\"out\" id=\"s1out\"></div>\n<p class=\"note\">값 칸을 누르면 <code>x[번호]</code>로 꺼낸 결과가 나와요.</p>\n</div>\n"
    },
    {
     "type": "think",
     "html": "<div class=\"think\" data-id=\"vec-why\">\n<h3>벡터는 통계에서 왜 중요할까?</h3>\n<p class=\"note\">먼저 내 말로 적어 보세요. 틀려도 괜찮아요. 적고 나면 「점검 기준 보기」가 열립니다. 정답 맞히기가 아니라, 내 답에 무엇이 들어 있고 무엇이 빠졌는지 스스로 보는 칸이에요.</p>\n<textarea placeholder=\"예: 숫자의 나열이라서…\"></textarea>\n<div class=\"row\"><button class=\"reveal\" disabled>점검 기준 보기</button><span class=\"note\">적은 답은 이 브라우저에만 저장</span></div>\n<div class=\"crit\">\n<p class=\"note\">내 답에 아래 생각이 들어 있나요? (비슷한 뜻이면 체크)</p>\n<label class=\"c\"><input type=\"checkbox\"> <span><b>변수 하나 = 벡터 하나.</b> 한 사람의 값이 아니라, 여러 사람에게서 같은 것을 잰 값들의 묶음이다 (48쪽 「하나의 변수를 의미한다」).</span></label>\n<label class=\"c\"><input type=\"checkbox\"> <span><b>통계 함수는 벡터 전체를 한꺼번에 받는다.</b> <code>mean(x)</code>는 값 여러 개를 숫자 하나로 요약한다. 엑셀에서 숫자를 눈으로 훑어서는 알기 어려운 중심과 퍼짐을 여기서 얻는다.</span></label>\n<label class=\"c\"><input type=\"checkbox\"> <span><b>한 종류만 담는다는 규칙 덕분에 계산이 된다.</b> 문자가 섞이면 전부 문자가 되어 더할 수 없다 (49쪽).</span></label>\n<label class=\"c\"><input type=\"checkbox\"> <span><b>다른 구조의 벽돌이다.</b> 행렬은 벡터를 접은 것, 데이터 프레임은 벡터(열)를 나란히 놓은 것 (50, 53쪽).</span></label>\n<div class=\"after\"><b>네 가지를 모두 체크했어요.</b> 「숫자의 나열」은 벡터의 <i>모양</i>이고, 통계에서 중요한 이유는 그 나열이 곧 <i>변수 하나</i>이고, 통계의 계산이 그 변수 전체를 한 번에 다루기 때문이에요. 다음 장(3장 표와 그래프, 4장 중심, 5장 퍼짐)은 모두 벡터 하나를 요약하는 여러 방법이에요. <span class=\"note\">(설명: Aside, 작성자 확인 전)</span></div>\n</div>\n</div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>함정 (49쪽):</b> 숫자와 문자를 섞어도 만들 때는 오류가 안 나요. 대신 <b>전부 문자로 조용히 바뀌어요</b>(따옴표가 붙음). 오류는 나중에 <code>x[1] + x[2]</code>처럼 계산하려 할 때 나요. 위에서 「숫자+문자 섞기」를 눌러 보세요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「벡터는 ___ 이다」"
  },
  {
   "id": "s2",
   "nav": "2. 행렬",
   "title": "2. 행렬 (matrix)",
   "page": "책 49–51쪽 · <code>matrix(numbers, nrow=4)</code>",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 값들을 가로줄(<b>행</b>, row)과 세로줄(<b>열</b>, column)로 맞춰 놓은 직사각형 표. 안에는 한 종류만 들어가요.</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 한 줄로 선 12명을 강당 의자에 <b>4줄 3칸</b>으로 앉히기. 사람(값)은 그대로, 앉은 모양만 바뀌어요.</div>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>argument를 바꾸면 결과가 어떻게 바뀌나</h3>\n<div class=\"code\" id=\"s2code\"></div>\n<div class=\"legend\"><span><span class=\"arg a1\">numbers</span> 재료: 1~12가 든 벡터</span><span><span class=\"arg a2\">nrow</span> 주문: 몇 줄로</span><span><span class=\"arg a3\">byrow</span> 주문: 가로부터 채울까</span></div>\n<div class=\"row\">nrow =\n <select id=\"s2n\"><option>1</option><option>2</option><option>3</option><option selected>4</option><option>6</option><option>12</option></select>\n <label><input type=\"checkbox\" id=\"s2b\"> byrow = TRUE (가로부터)</label>\n <button class=\"pri\" id=\"s2play\">채우는 순서 보기</button></div>\n<div id=\"s2grid\"></div>\n<div class=\"out\" id=\"s2out\"></div>\n<p class=\"note\">칸을 누르면 <code>m[행, 열]</code>로 꺼내는 법이 나와요. 칸 위 작은 숫자는 「몇 번째로 채워졌나」예요.</p>\n</div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>왜 세로부터? (50쪽)</b> R은 기본값이 「열부터 채우기」예요. 첫 번째 열을 위에서 아래로 다 채우고 옆 열로 가요. 가로부터 채우고 싶으면 <code>byrow=TRUE</code>라는 주문(argument)을 하나 더 넣어요. 왼쪽의 <code>[1,]</code>은 1행, 위쪽의 <code>[,1]</code>은 1열이라는 표시예요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「행렬은 ___ 이고, nrow는 ___ 을 정하는 argument다」"
  },
  {
   "id": "s3",
   "nav": "3. 요인",
   "title": "3. 요인 (factor)",
   "page": "책 51–52쪽 · 결혼 상태 예",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 범주형 변수. 속은 정수(1, 2, 3, 4)지만 각 정수에 <b>이름표(수준, levels)</b>가 붙어 있어요.</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 설문지에서 「1=기혼, 2=미혼…」으로 코딩한 숫자. 2가 1보다 「크다」는 말은 의미가 없죠. 숫자는 그냥 칸 번호예요.</div>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>숫자에 이름표 붙이기</h3>\n<div class=\"out\" id=\"s3out\"></div>\n<div class=\"row\"><button id=\"s3a\">1단계: factor(marital)</button><button id=\"s3b\">2단계: levels에 이름 붙이기</button><button id=\"s3r\">처음으로</button></div>\n<div id=\"s3vis\" class=\"row\"></div>\n</div>\n"
    },
    {
     "type": "html",
     "html": "<p class=\"note\">심리학 자료의 성별, 집단, 실험 조건이 모두 요인이에요. 뒤 장의 t검정, 분산분석에서 「집단을 나누는 변수」로 다시 나와요.</p>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「요인은 ___ 이다」"
  },
  {
   "id": "s4",
   "nav": "4. 리스트",
   "title": "4. 리스트 (list)",
   "page": "책 52–53쪽 · <code>info$current.age</code>",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 종류도 길이도 다른 것들을 한 보따리에 담은 것. 안의 칸마다 이름이 있고 <code>$</code>로 꺼내요.</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 주머니가 여럿 달린 가방. <code>info$current.age</code>는 「info 가방의 current.age 주머니」.</div>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>가방 주머니 열기</h3>\n<div class=\"code\">info &lt;- list(marital.status = fmarital, current.age = age)</div>\n<div class=\"bag\" id=\"s4bag\"></div>\n<div class=\"out\" id=\"s4out\"><span class=\"p\">&gt;</span> 주머니를 눌러 보세요</div>\n</div>\n"
    },
    {
     "type": "html",
     "html": "<p class=\"note\">지금은 낯설어도 괜찮아요. 나중에 분석 결과(예: t검정 결과)가 이런 가방으로 나와서 <code>결과$p.value</code>처럼 꺼내 쓰게 돼요.</p>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「$ 표시는 ___ 」"
  },
  {
   "id": "s5",
   "nav": "5. 데이터 프레임",
   "title": "5. 데이터 프레임 (data frame)",
   "page": "책 53–55쪽 · <code>frame_ex</code>",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 우리가 아는 자료표. <b>행은 사람, 열은 변수</b>. 열마다 종류가 달라도 돼요(키는 숫자, 성별은 문자).</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>정체:</b> 길이가 같은 벡터 여러 개를 가방(리스트)에 나란히 담은 것. 그래서 한 열 안은 한 종류(벡터의 성질), 열끼리는 달라도 됨(리스트의 성질).</div>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>칸, 행, 열 꺼내기</h3>\n<div class=\"row\"><button data-q=\"7,2\">frame_ex[7, 2]</button><button data-q=\",1\">frame_ex[ , 1]</button><button data-q=\"3,\">frame_ex[3, ]</button><button data-q=\"$shoes\">frame_ex$shoes</button></div>\n<div id=\"s5grid\"></div>\n<div class=\"out\" id=\"s5out\"><span class=\"p\">&gt;</span> 위 단추나 표의 칸을 눌러 보세요</div>\n</div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>빈칸의 뜻 (54쪽):</b> <code>[ , 1]</code>처럼 행 자리를 비우면 「행은 전부」라는 뜻이에요. <code>[3, ]</code>는 「3행의 열 전부」.<br><b>지금 R과 다른 곳:</b> 책 54쪽에는 <code>frame_ex[7,2]</code> 아래 <code>Levels: Female Male</code>이 나오지만, R 4.0(2020)부터는 문자 열을 요인으로 자동으로 바꾸지 않아서 지금 R 4.4에서는 <code>[1] \"Female\"</code>만 나와요. 이 쪽은 지금 R 기준으로 보여 줘요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「데이터 프레임은 ___ 이다」"
  },
  {
   "id": "s6",
   "nav": "6. 조건으로 골라내기",
   "title": "6. 조건으로 골라내기",
   "page": "책 55–57쪽 · <code>frame_ex$height[frame_ex$gender == \"Female\"]</code>",
   "blocks": [
    {
     "type": "html",
     "html": "<p>긴 한 줄이지만 <b>안쪽부터</b> 읽으면 세 걸음이에요.</p>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>한 걸음씩 실행하기</h3>\n<div class=\"row\">성별 <select id=\"s6g\"><option>Female</option><option>Male</option></select> 꺼낼 열 <select id=\"s6c\"><option>height</option><option>shoes</option></select>\n<button class=\"pri\" id=\"s6next\">다음 걸음</button><button id=\"s6r\">처음으로</button></div>\n<div class=\"code\" id=\"s6code\"></div>\n<div id=\"s6grid\"></div>\n<div class=\"out\" id=\"s6out\"></div>\n<p class=\"note\" id=\"s6say\"></p>\n</div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b><code>==</code>와 <code>&lt;-</code>는 달라요:</b> <code>&lt;-</code>는 「넣어라」, <code>==</code>는 「같은가?」라고 묻는 것이에요. 물으면 사람마다 TRUE(예)나 FALSE(아니요)가 돌아와요.</div>\n"
    }
   ],
   "mine": "내 말로 한 줄: 위 한 줄을 우리말로 풀면 「___ 」"
  },
  {
   "id": "s7p",
   "nav": "7. 패키지: 설치와 로딩",
   "title": "7. 패키지: 설치와 로딩",
   "page": "책 57–62쪽 · <code>install.packages()</code>, <code>library()</code>",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> <span class=\"term\" tabindex=\"0\" data-t=\"다른 사람들이 만들어 둔 함수와 자료를 묶은 추가 꾸러미 (책 57–58쪽).\">패키지(package)</span>는 R에 더해 쓰는 꾸러미예요. 쓰려면 두 단계: <b>설치</b>(내 컴퓨터에 저장, 한 번)와 <b>로딩</b>(지금 켠 R로 꺼내 오기, 켤 때마다).</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 휴대폰 앱. 설치는 한 번이지만, 쓰려면 매번 앱을 <b>열어야</b> 해요. 로딩이 「앱 열기」예요.</div>\n"
    },
    {
     "type": "html",
     "html": "<p>왜 꺼내 와야 하나(58쪽): R은 지금 쓸 것을 컴퓨터 <span class=\"term\" tabindex=\"0\" data-t=\"지금 작업 중인 것을 올려 두는 작업대. R을 끄면 비워진다. 책은 In-Memory라고 부른다.\">메모리</span>(작업대)에 올려놓고 일해요. 설치된 패키지는 창고(하드디스크)에 있을 뿐이라 작업대로 가져와야 써요. 가져오기 = <b>로딩</b>(attach), 내려놓기 = <b>언로딩</b>(detach).</p>\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>창고와 작업대</h3>\n<div class=\"row\"><button data-k=\"lib-using\">library(UsingR)</button><button data-k=\"inst-using\">install.packages(\"UsingR\")</button><button data-k=\"lib-mass\">library(MASS)</button><button data-k=\"detach\">detach(\"package:MASS\", unload=TRUE)</button><button data-k=\"restart\">R 껐다 켜기</button></div>\n<div class=\"map\" style=\"grid-template-columns:1fr 1fr\"><div class=\"h\">창고: 설치됨 (하드디스크)</div><div class=\"h\">작업대: 로딩됨 (메모리)</div><div id=\"pkStore\" style=\"text-align:left\"></div><div id=\"pkDesk\" style=\"text-align:left\"></div></div>\n<div class=\"out\" id=\"pkOut\"><span class=\"p\">#</span> 처음 상태: MASS는 R에 처음부터 들어 있음(59쪽), UsingR은 없음. 위 단추를 차례로 눌러 보세요</div>\n</div>\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>2019년 책과 지금 다른 곳:</b> 책 화면은 윈도우, R 3.5.1 기준이라 경로 <code>C:/Program Files/R/R-3.5.1/library</code>(59쪽)는 맥에서 다르게 나와요. <code>lib.loc=</code>은 안 써도 돼요(책 59쪽도 「반드시 설정해 주어야 하는 것은 아니다」). 바뀌지 않은 원리: <b>설치 한 번, 로딩은 켤 때마다.</b> 설치 이름엔 따옴표 <code>\"UsingR\"</code>, 로딩은 따옴표 없이 <code>library(UsingR)</code>도 돼요.<br><b>59쪽 <code>masked</code> 메시지:</b> 오류가 아니라 「MASS 안에도 shoes라는 이름이 있어 내 shoes와 겹친다」는 안내예요(60쪽). 내 shoes는 그대로예요.</div>\n"
    },
    {
     "type": "osbox",
     "html": "<div class=\"osbox\"><span class=\"os-win\"><b>Windows:</b> 책 59쪽 경로 <code>C:/Program Files/R/R-3.5.1/library</code>는 책을 쓴 컴퓨터의 창고 위치예요. 내 창고 위치는 <code>.libPaths()</code>를 실행하면 보여요. 설치 중 「Rtools가 필요하다」는 말이 나와도 보통은 무시하고 넘어가도 돼요(이미 만들어진 꾸러미를 받으면 필요 없음).</span><span class=\"os-mac\"><b>Mac:</b> 창고 위치는 <code>/Library/Frameworks/R.framework/…/library</code> 같은 모양이고, <code>.libPaths()</code>로 확인해요. 설치 중 「Do you want to install from sources …? (Yes/no)」가 나오면 처음 배울 때는 <b>no</b>를 쳐요. 이미 만들어진 꾸러미를 받는 쪽이 빠르고 덜 막혀요.</span></div>\n"
    },
    {
     "type": "html",
     "html": "<p class=\"note\">패키지를 실제로 쓰는 예는 바로 다음 8번 칸(엑셀 불러오기의 readxl)에 나와요.</p>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「설치와 로딩의 차이는 ___ 」"
  },
  {
   "id": "s7i",
   "nav": "8. 바깥 파일 불러오기",
   "title": "8. 바깥 파일 불러오기",
   "page": "책 62–67쪽 · 2.3.4 외부자료 불러들이기 · <code>read.delim()</code>, <code>read_excel()</code>",
   "blocks": [
    {
     "type": "meaning",
     "html": "<div class=\"meaning\"><b>뜻:</b> 엑셀이나 텍스트 파일에 이미 적어 둔 자료를 R 안의 <b>데이터 프레임</b>(5번 칸의 표)으로 옮겨 오는 것. 실제 연구에서는 <code>c()</code>로 손으로 치기보다 거의 늘 이렇게 시작해요(62쪽).</div>\n"
    },
    {
     "type": "analogy",
     "html": "<div class=\"analogy\"><b>비유:</b> 종이 설문지 묶음을 엑셀 표로 옮겨 적는 일을 R이 대신 해 주는 것. 다만 R은 「칸과 칸 사이를 무엇으로 나눴는지」를 알아야 제대로 옮겨요.</div>\n\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>칸을 무엇으로 나눴나 (구분자)</h3>\n<p class=\"note\">책 63쪽 그림 2.12의 data_text.txt는 값 사이를 <b>탭(Tab 키 한 번)</b>으로 나눈 글이에요. 아래 ⇥가 탭 자리예요. R에게 「무엇으로 나눴는지」를 다르게 알려 주면 어떻게 되는지 보세요.</p>\n<div class=\"code\" id=\"imRaw\"></div>\n<div class=\"row\">R에게 알려 줄 구분자:\n <button data-sep=\"tab\" class=\"pri\">탭 (read.delim의 기본)</button><button data-sep=\"comma\">쉼표</button></div>\n<div id=\"imGrid\"></div>\n<div class=\"out\" id=\"imOut\"></div>\n</div>\n\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>파일 주소 읽기</h3>\n<p class=\"note\">64쪽 명령의 따옴표 안이 파일 주소예요. 조각을 눌러 보세요.</p>\n<div class=\"code\" id=\"imPath\"></div>\n<div class=\"out\" id=\"imPathOut\"><span class=\"p\">#</span> 조각을 눌러 보세요</div>\n</div>\n\n"
    },
    {
     "type": "lab",
     "html": "<div class=\"lab\"><h3>텍스트 파일 vs 엑셀 파일</h3>\n<div class=\"row\"><button data-im=\"txt\">텍스트: read.delim()</button><button data-im=\"xl-no\">엑셀: read_excel() (readxl 로딩 전)</button><button data-im=\"xl\">엑셀: library(readxl) 후 read_excel()</button></div>\n<div class=\"out\" id=\"imCmp\"><span class=\"p\">#</span> 단추를 눌러 보세요</div>\n<p class=\"note\" id=\"imSay\"></p>\n</div>\n\n"
    },
    {
     "type": "trap",
     "html": "<div class=\"trap\"><b>2019년 책과 지금 다른 곳:</b> 책은 <code>~</code>를 「Documents(문서) 폴더」라고 설명해요(64쪽). <span class=\"os-win\">Windows에서는 대개 그대로예요.</span><span class=\"os-mac\">Mac에서 <code>~</code>는 내 홈 폴더(<code>/Users/내이름</code>)예요.</span> 폴더 구분은 윈도우의 <code>\\</code>가 아니라 <code>/</code>를 쓴다는 점은 같아요.<br>\n<span class=\"os-win\"><b>Windows:</b> 파일 탐색기 주소 <code>C:\\Users\\내이름\\Documents\\data.txt</code>를 R에 쓸 때는 <code>\\</code>를 <code>/</code>로 바꿔 <code>\"C:/Users/내이름/Documents/data.txt\"</code>로 써요. 엑셀에서 「CSV」로 저장한 한글 자료가 깨져 보이면 <code>read.csv(\"파일.csv\", fileEncoding=\"CP949\")</code>처럼 「한글 윈도우 방식으로 읽어라」라는 argument를 더해요.</span><span class=\"os-mac\"><b>Mac:</b> Finder에서 파일을 선택하고 <kbd>⌥ Option</kbd>+<kbd>⌘</kbd>+<kbd>C</kbd>를 누르면 파일 주소가 복사돼요. 그 주소를 따옴표 안에 붙이면 돼요. Windows에서 만든 한글 CSV가 깨져 보이면 <code>fileEncoding=\"CP949\"</code>를 더해요.</span><br>\n<b>메뉴로 해도 같은 일:</b> RStudio 환경판의 Import Dataset(63쪽)을 쓰면 R이 위 명령을 대신 써서 콘솔에 보여 줘요(64쪽). 메뉴와 명령은 같은 일을 하는 두 길이에요.</div>\n"
    },
    {
     "type": "html",
     "html": "<p class=\"note\">책은 여기서 2장을 마쳐요(67쪽): 「지금까지 설명한 것으로 R의 기초를 모두 이해했다고 볼 수는 없을 것이다. 하지만 이 정도만 이해하여도 앞으로 … 큰 문제는 없을 것이다.」 다음은 3장 표와 그래프(69쪽)예요.</p>\n"
    }
   ],
   "mine": "내 말로 한 줄: 「바깥 파일을 불러온다는 것은 ___ 」"
  },
  {
   "id": "s8",
   "nav": "정리: 다섯 구조 지도",
   "title": "정리: 다섯 구조를 한 장에",
   "page": "질문 두 개로 나뉩니다: 몇 차원인가? 한 종류만 담나, 섞어도 되나?",
   "blocks": [
    {
     "type": "map",
     "html": "<div class=\"map\">\n <div class=\"h\"></div><div class=\"h\">한 종류만</div><div class=\"h\">섞어도 됨</div>\n <div class=\"h\">한 줄 (1차원)</div><div class=\"c\" data-go=\"s1\">벡터<br><small>범주면 요인</small></div><div class=\"c\" data-go=\"s4\">리스트</div>\n <div class=\"h\">표 (2차원)</div><div class=\"c\" data-go=\"s2\">행렬</div><div class=\"c\" data-go=\"s5\">데이터 프레임</div>\n</div>\n"
    },
    {
     "type": "html",
     "html": "<p class=\"note\">칸을 누르면 그 설명으로 갑니다. 2장은 여기까지예요. 3장(표와 그래프, 69쪽)은 책을 읽으시면서 막히는 줄을 알려 주시면 새 파일로 이어 갈게요.</p>\n"
    }
   ],
   "mine": "내 말로 한 줄: 다섯 개를 한 문장으로"
  }
 ]
};
