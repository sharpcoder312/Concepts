// markup 마크업 - browser에게 제공하고자하는 정보가 어떤 성격의 정보인지 알려주는 작업 
// 결국 우리가 전달하고자하는 정보가 무엇인지 생각을 하며 코드를 설계하자.
// markup 마크업시, 가장 최소한의 서로 다른 단위부터 파악한다.
// https://heropy.blog/2019/05/26/html-elements
// *  tag's attribute and value
<p attr="value">
  // attribute 속성, value 값 // tag로 설명이 충분하지않을때 사용. 물론, 항상 attr가 따라다녀야하는 tag도 있음.
</p>




// * Global attribute (전역 속성)
// class id (사진 참조)
// style
// title : 요소의 정보(설명)을 지정 (커서 갖다대면 title 출력)
// lang : 요소의 언어 설정
// data : 사용자 정의 데이터 속성을 지정
//        JS에서 이용할 수 있는 데이터(정보)를 HTML에 저장하는 용도 / 자세한건 Heropy 블로그
// draggable : 요소가 Drag and Drop API를 사용 가능한지 여부를 지정 / val : true, false, auto(브라우저가 판단)
// hidden : 요소를 숨김
// tabindex : Tab키를 이용해 요소를 순차적으로 포커스 탐색할 순서를 지정 / 자세한건 Heropy 블로그 
// aria-label : aria-label 써주는 센스가 있어야하는데, 내가 약한 부분 (aria-hidden="true" 반대로 스크린리더에 읽히지않게함)
// aria-label은 음성지원을 다르게 만들어 내는 것이라면 sr-only는 보이는 것을 보이지않게 소리만 내게함.








// *  empty tag
// <tag> vs <tag /> 모두 html5에서 사용 가능
// <tag> html 1,2,3,4
// <tag /> XHTML or Lint
// 주의점은 둘 중 아무거나 써도 되지만, 한 문서에 혼용해서는 안 되며 일관되게 써야한다.
// 닫히는 태그가 없기에 태그가 위치하고 있는 부분에서 뭔가를 해결해야 되기때문에, 태그의 자체 의미보다는 의미 확장을 위한 속성과 값이 빈태그에 대부분 포함된다.






// *  Doctype & Document Structure
// <!DOCTYPE html> : Document type Declaration
// = DTD 선언 (보통 가장 최신 버전으로 선언된다 ex - html5)
// = 문서 형식 선언 (내 문서는 ~버전이다) 
// document = html 그 자체
// ! 웹 표준 검사기 - W3C validator



// *  Head Structure
// <head> - 'meta data' declaration about web document


// * Meta data
// meta - 정보     =>     검색엔진 or 브라우저에 제공
// 반드시 따라오는 attribute 2가지
// "name" = "kinds of meta data"
// "content" = "value of meta data" - http-equiv 또는 name 중 해당 속성의 값

// todo <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
// viewport - 반응형 웹사이트를 제공 하기위해 필요한 코드. 화면에 렌더링되는 특정 영역을 어떤 방식으로 선언할 것 인가 // width=device-width // initial-scale=1.0
// 쉽게 말해 화면사이즈. 현 시대에는 desktop, mobile 등 여러가지 device에서 사용하기 때문에, 이것들을 사용해서 각 device에 알맞은 반응형 site를 출력할 수 있다.
// 단축키  =>  meta:vp
// todo <meta name="author" content="seok">
// todo <meta name="keywords" content="sharpcoder">   -- 일종의 인스타그램 해시태그 용도
// todo <meta name="description" conent="웹사이트 설명">
// todo <meta charset="UTF-8"> - 문자 전체의 인코딩 방식 설정> 
// "charset" - charactor(문자,요소,특성,성격) set // 인코딩 - 텍스트 렌더링 시, 텍스트 출력 방식 ex)UTF-8(조합형) : 아시아권 언어 문자 출력 특화, EUC-KR(완성형) 등등
// 일반적으로 head의 요소중 맨 위에 입력. 그 무엇보다도 문자 인코딩 방식을 선언해야 하기때문. 방식의 선언이 브라우저에 정보 전달, 화면 출력보다 앞서야함.

// 그 외 중요한 attrubute
// "http-equiv"
// 서버나 사용자 환경의 작동방식을 변경해주는 지시사항 명시
// 통신 프로토콜 http의 header부분에 특정 내용을 담아서 전송
// todo <meta http-equiv="X-UA-Compatible" content="ie=edge">
// 위 코드는 '해당 html은 IE에서 렌더링될 때, 최신의 IE 렌더링 방식으로 출력한다'라는 뜻을 가짐


// <base>
// <meta>에 비해 적게 쓰이지만 중요한 meta data중 하나. 절대 경로든 상대 경로든 해당 경로에서 지속적으로 여러 주소들을 가져올 때 쓰일 수 있다.
// 문서 안의 모든 '상대 경로(URL)'이 사용할 '기준 경로(URL)'을 지정
// 빈 태그. 단 한번만 사용. 해당 html의 모든 상대 경로에 영향을 끼치기 때문에, 일부분에서만 사용하는 개념이 된다면 오히려 문제가 될 수 있다.
// todo <base href="./css/">




// * Title, Link, Style & Script
// <titel> 문서의 대제목 - 아이콘은 관련없음
// title 잘 쓰는 법? (검색 최적화) 
// 1) 키워드 단순 나열 X   2) page마다 그에 맞게 변경

// <Link> 
// '외부에 있는 문서를 가져온다'는 개념
// 'rel' - relationship 관계. 필수 attributon임.
// 'href' 외부 문서의 위치를 지정 (경로)
// 쓰임 1) 보통 css stylesheet 첨부 
// 'link:css' 라고 치면 자동 완성됨
// cf) font가 design에 많은 영향을 끼침  <추천> spoqa-han-sans
// 쓰임 2) title 옆의 icon을 가져옴
// todo <link rel="icon" href='./favicon.png'>

// <style> 
// html 문서 내에서 css 코드를 작성할 때 사용
// tip) link든 style 이든 html5보다 낮은 버전에서는 type을 명시해야했지만, html5에서는 type을 자동으로 체크 하기때문에 생략 가능하다. 작성할 <style> 태그 안에 어떤 type의 내용을 작성할것인가?
// 여기서 각각의 file이나 개념이 어떤 type인지 명시하는 것을 'MIME 타입'이라고 한다. ex) text/css, image/png, audio/ogg, video/mp4 등등 => <style type="text/css">

// <script>
// html 문서 내에서 js 파일을 첨부할 때 사용
// todo <script src="경로"></script>
// 물론 html안에 바로 쓸 수도 있음







// *  html's various tags



// * 0. <h>
// 제목의 단계를 건너뛰는 것을 피해야한다
// <h1>로 시작해서 <h2> <h3> 순차적 기입이 필요하다
// 목차가 비어 있으면 브라우저나 검색엔진 정보보조기기에서 오류가 나올 수 있다
// 크기는 css의 font-size로 해결가능하다 <h>는 글자 크기를 설정하는 tag가 아니다 
// <h1>은 단 한번만 사용한다 - Nesting 중첩
// <header> <footer> 섹션과 잘 어울린다


// * 1. <em> <strong> <mark> <b> <i> <u>
// emphasis 단순한 의미 강조 // 기본적으로 Italic type // em의 중첩 가능. 중첩할수록 강조의미 강해짐 // 정보통신보조기기 등에서 '구두 강조'로 발음
// strong을  의미의 중요성 (문맥상) // 기본적으로 글씨 굵게
// Mark Text 형광펜을 사용하여 관심있는 부분을 표시하는 것과 같은 의미 // 의미보다는 시각적 효과
// bring attention 특정 텍스트 범위 설정 // 기본적으로 글자 두껍게 표시 // 읽기 흐름에 도움을 주는 용도 // 특별한 의미가 없으며 다른 태그가 적합치 않은 경우 마지막 수단으로 사용 
// i <b>처럼 특별한 의미가 없으며 다른 태그가 적합치 않은 경우 마지막 수단으로 사용. <b>가 text 대상이라면 <i>는 '아이콘'이나 '특수기호' 대상 // 기본적으로 Italic type
// 두 태그 모두 css로 더 시각적으로 명확히 나타낼 수 있지만, 이 태그들을 사용함으로써 browser에게 중요하다는 메세지를 전달한다는 점이 point다.
// underline - css를 쓰지 못하는 경우에만 사용하자 ex) <span style="text-decpration: underline;">


// * 2. <p> <hr/> <br/>
// paragraph  문단 나눌 때   cf) 위,아래 static margin이 생김
// 하나의 문단을 설정         cf) 문장같은 경우에는 보통 <span> 많이 쓰는 듯
// 일반적으로 정보통신보조기기 등은 다음 문단<p>으로 넘어갈 수 있는 단축키 제공
// block label element

// horizontal rule 문단의 분리(주제에 의한)를 위해 설정
// 단, 수평선을 만들어내기 위한 용도로만 사용해서는 안됨. 이는 어디까지나 의미론적 접근이 아닌 시각적 요소일 뿐임
// 물론, hr을 쓰고 css로 가려줄 수는 있음 - border: none
// display: block; - padding 값 넣고 border 2px 넣으면 선은 4px로됨
// 그러므로 border: none;에 border-top 또는 border-bottom 즉, 위나 아래 중 하나만 넣어야함. 원래 있던 border를 없애고 그 바로 위나 아래에 선을 하나 새로 만든다고 생각하면 됨
// 이 행위는 필수라고 생각하자

// break a line 단순 줄바꿈
// 선의 간격(줄 높이)을 늘리고 싶다면 css's block => line-height: 17px(보통 기본폰트크기) x 1.4 - 기본 ex) 50px


// * 3. <a>
// 현재 문서에서 외부 문서 불러오기
// inline 요소이기 때문에 display: block이나 button안에 코드를 작성해서 layout을 쉽게 하는 방법도 있다
// anchor. 항상 href 라는 attribute가 따른다. (html로 넘어오면서 생략이 가능해졌지만 거의 필수임)
// hypertext reference : 링크 주소값
// 페이지 외 이동 : a htef="주소값" or ".html" 등
// 페이지 내 이동 : 이동하고 싶은 section의 attrtibute 값으로 id값을 준다. // a href = #id값 -> 브라우저 url창에도 '주소#id값'입력하면 해당 섹션의 페이지가 나온다
// 메일 쓰기 : a href="mailto:mail address"
// 전화 걸기 : a href="tel:phone number"

// target : 링크 url의 표시위치 // value : _self(현재창.기본값), _blank
// todo 새로운 탭에서 링크 열기 : <a href="link" target="_blank"> ... </a>  //  target="_blank" 을 사용한다.

// download : 이 요소가 리소스를 다운로드하는 용도로 사용됨을 의미 // value : boolean형식
// hreflang : 링크 url의 언어 // value : ko, en 등
// rel : 현재 문서와 링크 url의 관계 // value : license, prev, next
// type : 링크 url MIME 타입 // value : text/html 등 html5에서는 type을 자동으로 체크하고 해석하기 때문에 생략 가능하다




// * 4. <img>   -   inline
// <img src="image주소" alt="대체 텍스트"/>
// 반드시 따라오는 attribute가 2가지 있다.
// src // soucrce 
// 절대 경로 : 인터넷에서 가져오는 것. 가지고 오는 이미지는 절대적으로 하나다.그러므로 imgA에 대한 b와c의 절대경로는 모두 같다. 도메인과 작업 환경의 위치가 같다면 도메인 생략하고 나머지 주소만 적으면 됨.
// 상대 경로 : 나에게 저장되어 있는 것 (사진 참조)
// alt // alternative text 대체 텍스트       ->      네트워크 원활 x or 시각 장애인에게 용이
// 크기 줄이려면 width or height 둘 중 하나만 손봐주면 일정 비율로 변경가능. 물론 css로도 변경 가능
// 속성 ''srcset''와 ''sizes'' - viewport에 따른 image 크기  https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/
// crossorigin : 특정 페이지, 사이트에서 음악이나 영상 가져올 때 동일한 출처인지 확인 (video 태그도 동일) by CORS 동일출처정책

// inline요소지만 height와 weight값이 먹히는데, 이는 이미지 자체에 있는 사이즈 때문이다
// 그래도 css법칙에 맞게 block으로 변환 후 사용하자
// 또한, 이미지 자체 크기때문에 부모 요소가 크기를 조정해도 영향을 받지않는다. 그래서 부모 요소의 크기를 지정하고 이미지의 크기를 부모에게 맞추는 작업을 많이한다
// todo width : 100%          부모 요소의 width 값에서 %차지
// todo height : auto;        본래 가지고 있던 비율에 맞게 알아서 조정


// * 4-1. <figure> <figcaption>
// <figure> 이미지, 삽화, 도표, 시 등의 영역 설정
// <figcaption>는 <figure>에 포함되어 이미지나 삽화 등의 설명을 표시
// 사람이 아닌 브라우저에게 설명하는 tag임




// * 5-1. <ul> <ol> <li>   -   block
// ol // ordered list 순서가 중요 (항목의 순서는 중요도를 의미할 수도 있다)
// ol's attribute
// start - 항목에 매겨지는 번호의 시작 값
// type - 항목에 매겨지는 번호의 유형 ex) disc(default), circle, square, a, A, i, I, 1
// reversed - 항목에 매겨지는 번호 역순 배열
// ! tip) attr와 val이 같을 때 reversed="reversed" 이런 것은 그냥 attr만 적어도 적용된다 (boolean형식) reversed  

// ul // unordered list
// tip) 기본적인 css style없애기
// todo list-style: none; padding-left: 0px;
  

// li - display: list-item -> block element에 속함

// <li>를 ul이나 ol로 감싸서 출력한다.
// '부모 자식 관계' ul과 ol의 직계 자손은 오직 li만 가능하다. ex) list마다 link를 걸고 싶으면 위계 ol a li (x) ol li a (o)
// ol과 ul은 서로를 부모자식관계로 유동적으로 가질 수 있음

// * 5-2. <dl>
// description list 정의 목록
// 사용용도 1. 용어 정의 ex) 사전 용어 정의  
// 사용용도 2. key - value로 정보 제공 { key: value }   ex) 이름: 김버그, 직업: 프론트엔드 개발자
// <dt> description term  -  // !key값. 보이지않게 하더라도 무조건 dl을 쓸 때, 존재 해야한다 
// <dfn> define - dt와 dd와는 달리 필수 자식 tag가 아니다. 또한, <dfn>는 독자적으로 <dl> 없이도 언제나 사용가능하다.
// <dd> description data  -  value값 (설명)
// dl의 자식(손)요소는 div, dt, dfn, dd만 가능하다.
// dt와 dd는 항상 같이 다녀야한다. 단독 출현 x 이중 출현 o ex) 2개의 연속적 dt, 2개의 연속적 dd 모두 가능
// ? dl dt dd 같은 경우에는 다른 tag로 대체해서 style을 줄 수 있다 ex) ul ol 활용 (사진 참조)
// ? 또한, dt dd 세트 같은 경우에 div로 묶어 css 요소를 적용하는 방법도 있다.
// ? 하나의 term에서 여러 data로 나눠야 할 경우, dd 내에 여러 span을 둘 수도 있겠다.


// * 6. <blockquote> <q> <cite>
// quotation 쿠어 쿠워
// 문단 or 내용 전체가 인용문일 경우, <blockquote> </blockquote>
// 문장 내에 인용문 삽입 경우, <q> </q>
// 보통 출처 or 화자를 밝힐 경우에, <cite> 출처 </cite> 를 입력해준다. 책, 논문, 영화, tv프로, 노래, 게임 등의 제목 ex) <cite>The Scream</cite>
// 출처 사이트를 링크 걸고 싶다면, blockquote의 attr로 cite를 입력해준다. ex) <blockquote cite="http://~~">



// * 7. <div> <span>
// css,js 적용시에 요소를 묶을때 자주 사용
// div가 좀 더 큰 범위에서 사용
// <span> 영어로 쪼개진 조각을 의미. 본질적으로 아무것도 나태니지 않는 콘텐츠 영역 설정. 주로 <div>와 <p>와 함께 웹페이지의 일부분에 스타일 적용시키기 위해 사용 多
// block vs inline // layout vs text


// * 8. <form>   -   block
// todo <form action="" method=""> </form>
// 위의 tag들과는 반대로 정보를 주기위해서가 아닌, 정보를 받기위해서 존재한다.
// 반드시 따라오는 attribute가 2가지 있다.
// action "API주소"    :   사용자의 input을 받을 때는 이를 처리해야할 과정이 잇따라야한다. 즉, form을 받아서 server에 전달 해야한다. 이 정보(form)를 처리할 수 있는 url(주소) 기입한다.. tip) 이 url은 back-end와 관련있다.
// method "GET|POST"   :    소량 사용 - get(얻어갈때만)기본값, 대량 사용 - post(정보수정)
// autocomplete : 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 //  val : on(default)
// name : 고유한 양식의 이름 (중요 attr)
// novalidate : 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정
// target : 서버로 전송 후 응답받을 방식을 지정 // val : _self(default), _blank
// 사용자로부터 input을 받기 위한 tag. input값을 form을 통해 처리한다.
// cf) form 검증 방법 1. - html 2. - js       https://jeonghwan-kim.github.io/dev/2020/06/08/html5-form-validation.html
// html의 검증 기능이 다양하지 않기 때문에 js를 활용하는 것이 좋지만 간단한 것은 html을 활용해도 좋다.
// 또한, form을 submit할 때에는 페이지를 새로고침 시키는 기본 동작이 실행된다.


// * 8-1. <input>   -   inline block
// todo <input type=""/>
// input? 입력창, input field
// input 자체는 style 적용 안됨
// ? tip) 테두리 자체가 border가 아니라 'outline'으로 형성되어있다

// ? input's common attribute (attr종류 heropy블로그 참고 훨씬 많음)
// 안내문구 삽입 : placeholder     ex) type="text" placeholder="이름을 입력하세요"
// 제한길이 설정 : minlength, maxlength      vs     입력가능 최솟값,최댓값 : min, max  // size - 범위(크기) 설정
// 필수 기입 설정 : required
// 사용 금지 설정 : disabled(form 전송x) // readonly(form 전송o - 즉, JS로는 입력가능하지만 사용자 입장에서만 쓰지 못하게 한다.) 
// 초기값 설정 : value (일종의 text 취급)  
// 허용 확장자 설정 : accept     ex) accept=".jpg"  accept="image/*"(전체)  accept="img/png" 등등
// 데이터 전송시 데이터의 이름 설정 : name
// 그 외 : autofocus(자동 포커스), form(form 범위에 없어도 form과 연결 form의 id값 삽임), readonly(읽기전용)
// 고정 양식(pattern) : pattern   ex) pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
// [a-z]{글자수} : 명시한 글자수만큼 입력 가능  // [가-힣a-zA-Z]
// [a-z]{1, 20} : 1자리에서 20자리까지 입력 가능
// [a-z]+ : 글자 수 제한 x
// pattern은 정규 표현식(regular expression)으로 입력값을 검사하는 기능이다.
// 참고사이트 https://github.com/ziishaned/learn-regex

// ? type of type (type종류 heropy블로그 참고 훨씬 많음)
// number, text, email, tel, radio, file, password, reset, search, image(단순 image가 아닌 제출의 의미까지 겸비) 등

// * <text>, <number>, <password> ... 등
// 가장 기본적인 input type
// 'text'는 여러 줄에 걸친 글은 받을 수 없다.

// 여러 tag의 att
// number - step : 일정 범위씩 값 변함
// checkbox - checked
// file - multiple : 여러개의 file 입력


// * <label>   -   inline
// todo <label for="input's id value"> .. </label>
// todo <label><input type="chekcbox"/>동의하십니까?</label>
// id값 입력시 #을 쓰지않는다. #이 for로 바뀌었다고 생각하자.
// 폼 양식에 이름을 붙이는 태그. 어떠한 input과 연결 되어있는지 반드시 명시해야한다.
// sr-only에도 많이 쓰임
// input 관련해서만 쓰임

// ? sr-only : screen reader에는 들리되, 시각적으로는 보이지 않는 요소
// ? 암묵적으로 통용되는 class value // 시각 장애인들을 위함
// ? att display: none은 screen reader도 읽을 수 없기에 사용 불가


// * <radio> & <checkbox>
// todo <input type="radio" name="subscription" value="1" id="subscribed"/>
// radio : 단일 선택
// 필수 attribute : name, value, cf) + id(label용)
// name : class와 유사. 선택 항목들의 집합체. 단 하나의 pick을 위함. 
// value : id와 유사. 선택 후 server 전송시, on off 등의 각기 다른 값으로 server에게 전송
// checked : 처음에 체크되어 있게함
// 서버에 전송된 것은 url창에서 확인 가능


// checkbox : 다중 선택
// radio와 사용 방법 동일



// ----------------여기서 부터는 <input type="">의 형식을 쓰지않고 자체 형식을 쓴다.----------------------



// * <select> & <option> <optgroup>
// todo <select multiple id="skill" name='skill'>
// todo   <label for="skill">스킬</label>
// todo   <option value="html">html</option>
// select : full & down menu 
// menu(list)에 들어갈 항목들은 <option> </option>으로 묶어준다. - 부모 자식 관계
// 필수 attribute : name, value, cf) + id(label용)          
// ! 유의) 사실 label과 value를 다 명시할 필요는 없다. 생략되면 포함된 텍스트를 값으로 표시한다 ex) <option>apple<option/>
// 추가 attribute : multiple 다중 선택 가능 / size 한 번에 볼 수 있는 행의 개수 : value 0 ~ x
// 서버에 전송된 것은 url창에서 확인 가능
// todo <optgroup>은 <optgroup label=" "> 형식 많이씀 - label을 attr로 쓴다
// * <datalist>
// <input>에 미리 정의된 옵션을 지정하여 자동완성(Autocomplete) 기능을 제공하는 데 사용
// 사진 참조

// * <textarea>
// text의 한계를 보완한다 -> 여러 줄로 이루어진 글을 받는다
// attribute : rows (행 길이), cols (열 길이)


// * <button>   약어: btn   -   inline block
// button's type attribute : button(기본값) js와 많이 쓰임, submit, reset
// 이 3개 중 반드시 하나를 사용해야한다.
// autofoucus, disabled, form, name, type 모두 input과 동일 attr
// 누르거나 터치 했을 때, 특별한 기능(interaction)을 한다면 button을 생각하자.
// todo <input type="submit" value="로그인">
// todo <button type="submit"> 로그인</button>
// ? content를 아무것도 넣지않으면 마우스 커서가 반응하지 않으므로
// ? css에서 att cursor: pointer;를 넣어준다
// ? 물론 content가 있더라도 누르는 감을 주기위해서 넣어주는 것도 센스다


// * <progress>
// 작업의 완료 진행률 표시 => 로딩바
// max : 작업의 총량 / val : number
// value : 작업의 진행량 / val : number / max 생략의 경우 0 ~ 1 사이의 숫자여야 함 ex) 0.7
// value : 값이 가변하기에 기본적으로 js와 연결지어 작업

// * <fieldset> <legend>
// 같은 목적의 양식을 '그룹화(시각적으로 wrapping됨)'하여 '제목' 지정
// 보통 <form> 바로 하단에 작성
// 사진 참조









// * 9. <table> - table (block과 유사)
// <tr> table row 
// <th> table header : th를 어떻게 정의하느냐에 따라 td 또한 영향을 많이 받는다.
// <td> table data
// 위계 : <table> <tr> <th> or <td>
// 테이블의 구조를 명확히 해주는 tag(tr기준) : <thead> - th, tr관련 // <tbody> - td관련 // <tfoot> - 총합, 결론 관련 => 의미론적 부분에서만 가치가 있으며 눈에 보이는 layout에는 영향을 주지 않음
// rowspan(row기준 height 확장)     colspan(column기준 width 확장) : 셀합치기
// scope="row|col"  ->  <th>에게만 쓰는 것으로, row와 col중 어떤 scope(범주)의 header인지 browser에게 명확히 전달하기위해 사용한다.
// abbr : 열에 대한 간단한 설명  // headers : 자신의 상위 개념의 id값 입력하여 연결 th-th, th-td O td-td X 또한, 표의 시각적인 부분에만 집중하고 싶다면 굳이 이렇게 data를 다 연결할 필요는 없다
// table making 사고 : 하나의 row에 몇 개의 column이 들어가는지 생각한다.
// table을 활용해서 layout을 만드는 행위를 해서는 안되며, 오직 표로써만 사용해야한다

// 표를 보조하는 tag들
// <caption> table의 제목. table당 한번만 사용가능 css 통해서 위치 변경 가능
// <colgroup> <col> (강의참고) col들을 기준으로 col들에 style 일괄 적용 가능 // attr : span - 선택 col 기준으로 그 다음 col들에게 같은 style 적용 // 보통 <caption> 바로 하단에 입력 
// tip) 표의 테두리를 나타내려면 attr로 border="1" 넣어주면 됨 // span된 칸에서 요소 정력 align=""






// * 10. media ('정보 컨텐츠로써 가치가 있느냐'부터 생각할 것)
// html에서 text를 제외한 audio, image ... 등
// inline 요소

// * 10-1. <audio>
// 필수 attribute : src, controls(90%)
// controls : 재생버튼, 음향조절 ... 등
// autoplay : 자동재생
// loop : 반복재생 (auto와 합쳐서 가능)
// muted : 음소거 여부
// preload : 페이지가 로드될 때 파일을 로드할지의 지정 // value : none, metadata(기본값-기본적 정보만), auto(전체 파일 로드) 물론, autoplay 경우 해당 속성 무력화
// src : 콘텐츠 url
// 출력하는 2가지 방법
// ` src를 audio의 attribute로 가져오기 -> 보통 단수일 때만이라도 사용하기도 함
// ` src를 source의 attribute로 가져오기 -> 세련된 방법, 복수로 사용 가능
// source 태그를 쓰게 된다면 필수 attribute로 'src'와 'type'이 따라온다. 여기서 type은 MIME타입과 관련있으며 'src'가 mov라도 'type'은 대부분 mp4를 쓴다.

// tip) caniuse.com -> 어떤 브라우저에서 호환 가능한지 검색 가능
// tip) browsehappy.com -> 브라우저 업그레이드 가능
// 특정 구간 플레이, 일정 음량으로 시작 이런 기능들은 js로 control 가능


// * 10-2. <video>
// audio와 성격 같음 (audio의 속성을 모두 가짐)
// video같은 경우에는 style하는 방법이 정해져있다 class를 'video-container'로 설정한다
// poster : 동영상 썸네일 이미지 url
// width, height : 가로, 세로 너비 설정


// * 10-3. <iframe> (embed)
// html 안에 또 다른 html(문서, 컨텐츠)을 embed 하고싶을 때 사용
// inline 요소
// 직접 사용하는 경우 少
// embed 하기위한 code를 그냥 복붙하는 경우 多 ex) 유튜브 영상, 트위터 embed와 같은 경우에 사용
// necessary attribute : src
// attribute : name, width, height, frameborder(value : 0 or 1), allowfullscreen(value :  boolean), scrolling(value : yes or no) 등
// 보안 attr : sandbox (보안을 위한 읽기 전용으로 삽입)
// value - allow-form : 양식 제출 가능 // allow-scripts : 스크립트 실행 가능 // allow-same-origin : 같은 출처(도메인)의 리소스 사용 가능





// * 11. <abbr>
// todo <abbr title="full name"> abbreviation </abbr>
// 반드시 따라오는 attrubute : title (global attr)
// abbreviation : 약어     tip) a - 묵음


// * 12. <address>
// address : 연락처
// <body>, <article>, <footer> 등에서 연락처 정보를 제공하기 위해 포함하여 사용.
// 예시 : home address // url // email // phone number // sns 
// todo <address>
// todo   <a href="mailto: ~~ "></a>
// todo   <a href="tel: ~~ "></a> </address>  이런 느낌!
// 사진 참조


// * 13. <pre> <code> <kbd> 
// preformatted text : browser가 아닌 생산자가 시각적 출력 형태 정의
// text를 작성한 서식 그대로 화면상에 표기
// text의 공백과 줄바꿈을 유지하여 표기
// 유의점) pre 태그 사이에 들어갈 수 있는 빈 공간들은 모두 제거해야한다. ex) <pre> you (x) <pre>you</pre> (o)
// display: block; 

// code 태그와 많이 사용한다. code 태그는 indentation이 정말 중요하기 때문이다.
// code : 컴퓨터 코드 범위를 설정. 사용자의 코드에 대한 인지
// display: inline;
// 두 tag 모두 기본적으로 Monospace 글꼴 계열로 표시 cf)monoscape - 각 글자의 너비가 동일

// keyboard input 
// 키보드키 사용자에게 명시
// css tip) 사진참조




// * 14. <sup> <sub>
// Superscripted text 위 첨자 , Subscript text 아래 첨자
// todo X<sup>4</sup>, H<sub>2</sub>O



// * 15. <time>
// 날짜 or 시간을 나타내기 위한 목적
// attr : datetime (유효한 날짜 문자)
// IE 지원 불가. 잘 쓰이지 않음
// todo <time datetime="2020-11-30">September 30</time>



// * 16. <del> <ins>
// 수정에 대한 개념
// delete 삭제된 텍스트의 범위 지정
// insert 새로 추가된 텍스트의 범위 지정
// attr : "cite" 변경을 설명하는 url, "datemine" 변경이 일어난 유효한 날짜  
// display: inline;



// * 17. <canvas> - inline
// Canvas API이나 WebGL API를 사용하여 그래픽이나 애니메이션을 랜더링 범위 지정


// * 17 content's division 
// 참조 사진 있음
// 모두 block label
// * 17-1 <header>
// 보통 사이트의 가장 상단 부분에 위치한 bar를 나타냄
// 로고, 메뉴, 검색바, 로그인, 로그아웃, 회원가입 등의 컨텐츠가 포함함 (예시일 뿐이다)
// <header> 와 <footer>는 후손이 될 수 없으며, <header>는 <address>, <footer>, <header>의 후손이 될 수 없다.
// <nav> <section> <div> 처럼 어떤 요소의 도입부에 해당하는 뉘앙스를 살려주기 위해서 언제든지 쓸 수 있다
// global attribute만 취급


// * 17-2 <main>
// 문서나 앱 <body>의 주요 콘텐츠. 문서의 핵심 주제 or 앱의 핵심 기능성에 대해 부연, 또는 직접적으로 연관된 콘텐츠
// 문서상에서 단 하나만 존재 // 본격적인 contents의 시작을 알린다
// <section> <articel> <nav> <aside> 등을 감싸는 존재임 // header - main - footer : 보기 좋은 구조
// IE 호환 문제


// * 17-3 <footer>
// 보통 사이트 가장 하단 부분에 위치한 info를 나타냄
// 회사 정보, 작성자, 저작권, 연락처, 주소 등의 컨텐츠를 포함함
// 부모 자식관계 <header>와 동일
// global attribute만 취급

// 두 태그 모두 <div class="">를 대체한다
// <div>와는 달리 각자 영역을 지칭하며 의미를 지닌다
// html5로 오면서 이러한 semantic tag들이 많이 생겨났다



// * 17-4 <article>
//  ! 17-4 ~ 7 'Sectioning element' 내에는 반드시 heading 태그를 작성해야 한다. 눈에 보이지않아도 의미론적으로 적어주어야한다
// 독립적으로 구분되거나 재사용 가능한 영역을 설정 (하나의 article단독으로도 의미 o // article 내의 article)
// 매거진/신문, 기사, 블로그 등 컨텐츠가 그 자체로 완결성을 가지는 경우. 독립적으로 존재해도 정보로써 완결성을 가지는 경우
// 일반적으로 <h1> ~ <h6> 포함하여 식별 
// 작성일자와 시간을 <time> datetime 속성으로 작성

// * 17-5 <section>
// 문서의 일반적 영역을 설정
// 논리적으로 완결되는 집합체 <div> 대신 사용

// article과 section은 서로를 부모자식관계로 가질 수 있음
// article과 section은 <div>와 달리 <h>태그 즉, 제목을 포함해서 의미를 가지는 구역을 wrap한다는 점이다
// enough강도 article > section > div


// * 17-6 <aside>
// 핵심 콘텐츠와는 관련없는 문서의 별도 콘텐츠 설정
// 보통 광고나 기타 링크 등의 side bar 설정

// * 17-7 <nav>
// 다른 페이지 링크를 제공하는 영역 
// menu, home, about, contact, 목차, 색인 등을 설정
// 보통 <header> 안에 포함되어서 많이 사용됨
// 보통 ol,ul을 포함함 








// * escape code (entities)
// browser가 tag로 인식하지 않도록 하는 기능
// 다 외울 필요는 없다. google에 'html escape code'를 검색해서 list를 찾는다.
// ex) & - &amp; // < - &lt; (less than) // > - &gt; (greater than) // $ - &dollar; // 띄어쓰기 - &nbsp; (nonebreakingspace)
// 참조링크 1) https://www.freeformatter.com/html-entities.html
// 참조링크 2) https://m.blog.naver.com/PostView.nhn?blogId=dartplus&logNo=220499694317&proxyReferer=https:%2F%2Fwww.google.com%2F




// * WAI-ARIA (aria attribute)
// 웹 접근성을 높여주는 장치
// web Accessibility(엑세스빌리리) Initiative(이니시디브) - Accessible Rich Internet Applications
// attrubute로 사용하기 : aria-label=" "     -     global attribute임
// 몸이 불편하신 분들께도 영향력 확대
// 보여야하는 것과 읽혀야하는 것이 다를 경우 사용 or 보이는 것 보다 들을때는 더 정확하고 많은 정보를 필요로 할 때 사용





// * Icon
// font awesome 사이트에서 가져오자
// <i> 태그 사용







