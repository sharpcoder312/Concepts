// Cascading Style Sheets
// Cascading: 연속화 세분화
// 철학 : 생산자뿐만 아니라, 소비자 모두 스타일에 대한 권리를 갖는다
// html에서의 attribute는 css에서는 property라 일컫는다 - 본문에 attr 표기돼있는 것은 property로 고치자 (attribute selectors 파트 제외)


/* selector {
  property: value;
} */







// * CSS Reset

// * 1. '*' 사용
// * {
//   box-sizing: border-box;
// margin: 0; -     html5에서는 자체적으로 style이 어느정도 부가되기 때문에 이를 깔아놓고 특정 element에 margin값을 주고싶을 때마다 각각 입력해서 사용한다
// }

// * 2. css reset 링크 가져오기
// https://www.jsdelivr.com/package/npm/reset-css 







// * 선언 방식
// ? in-line 방식
// ? embedded 방식
// ? link 방식 - html에서 css 불러옴
// ? @import 방식 - css에서 다른 css 불러옴
// todo @import url("./common2.css");
// import 유의사항 사진참조








// * Selector

// * 1. Basic Selector

// * 1-1) Universal Selector
// 모든 요소 선택
// todo * { }


// * 1-2) Type Selector
// 태그 그 자체를 지칭
// todo ul,ol{ }
// 중복 피하기


// * 1-3) Class Selector
// '.' + class 'value'
// 여러 요소에 하나의 class 동시 적용 가능
// todo html) <div class="box"> 1 </div>
// todo html) <div class="box"> 2 </div>
// 한 요소에 여러 class 동시 적용 가능
// todo html) <div class="box0 box1 box2"> 1 </div>
// todo css) div.box0.box1.box2 {property: value;} 위 html요소를 지칭함 box0~2까지의 class를 다가진 요소만을 지칭
// 위의 예시처럼 붙여쓰면 저 자체의 하나의 class를 말하는 것이고 띄어쓴다면 box0 box1 box2 서로다른 3개의 class에 적용하겠다는 뜻이다 
// 또한 div.~ 에서 div는 써도되고 안 써도된다. 만약 div가 아니라 <em class=""> 였다면 em.box0.~ 이런 식으로 시작했을 것이다. 물론 bronze medal이 하나 추가된다는 이점은 있다
// 물론 div와 em에서 둘다 box0~3까지 가질 때, 하나의 요소에만 넣고싶다면 명시해줘야 한다


// * 4) Id Selector
// '#' + class 'value'
// 신분증과 같은 역할. 요소당 단하나의 id값 존재 가능

// 응용
// 문제 : <div class="box" id="kimbug"> 0 </div> 를 css에서 선택자로 표현한다면?
// 답 : .box#kimbug or #kimbug.box


// * 2. Combinator (Basic외 점수 합산 방식에 들어가지않음)

// * 2-1) Basic Combinator
// todo css) element.class | .class.class 등등
// 붙여쓰기


// * 2-2) Child Combinator
// todo css) parent > child
// 자손 X 자식만 해당


// * 2-3) Descendant Combinator
// todo css) parent descendants 
// 띄어쓰기. 공백
// ! 유의) 자손이니 자식까지 다 포함하는 개념


// * 2-4) Sibling Combinator
// General Sibling Combinator
// todo css) .class name ~ element
// 특정 클래스값, 태그 등을 기준으로 그 이후로 나오는 모든 같은 형제 요소에게 적용 (class값을 가진 본인에게는 적용 안됨)

// Adjacent Sibling Combinator
// todo css) .class name + element
// 특정 클래스값, 태그 등을 기준으로 그 바로 다음에 나오는 형제 요소에게만 적용

// todo html ex) <li class="number">1</li> <li>2</li> <li>3</li>
// todo css ex) .number ~ or + <tag>
// ~는 2,3에 적용 +는 2에 적용


// * 3. Structural Pseudo-classes
// Pseudo-classes(가상 클래스) : 상태나 조건을 만족할 때 사용할 수 있음
// ':'는 '~이면서' 라고 해석하자 즉, : 전후로 조건 모두 만족
// ':' 앞의 특정 element를 지워서 범위를 넓힐 수도 있다
// todo css) .box-group :first-child -> .box-group의 first-child를 만족하는 모든 element // ':'앞을 비워두어 조건을 자유롭게 한 것이다
// ':' 앞의 element 자리에는 보통 class나 id 값이 아닌, 순수 element name이 들어간다
// 반드시 예시 사진참조

// * 3-1) first-child
// todo css) element:first-child

// * 3-2) last-child
// todo css) element:last-child

// * 3-3) nth-child
// todo css) element:nth-child(n)
// (n)값이 parameter 
// ? n값은 0부터 해석한다(zero-base) 물론, n값이 0이라는 뜻이지 0번째를 뜻하는 것이 아님
// ex) 2n-1, 2n, n+3, 3 등등
// cf) nth-last-child는 nth-child와 반대로 뒤에서부터 카운팅 한다.

// ex) .fruits의 <li>이면서 첫번째, 마지막, n번째 요소 선택 
// todo css) .fruits li:first-child | :last-child | :nth-child(n)

// * 3-4) nth-of-type
// todo css) element:nth-of-type(n)
// 동일 element type 중 n번째
// ! type은 element의 type을 말하는 것이다
// ! 즉, element의 type이 들어갈 자리에 class나 id의 type이 들어가서는 안 된다
// ex) .example:nth-of-type(even), .example:nth-of-type(odd), .example:nth-of-type(3n+1), .example:nth-of-type(2), 

// * 3-5) not
// todo css) element:not(s)
// s가 아닌 element 선택
// ex) .fruits li:not(.strawberry) - .fruits 중 li이면서 .strawberry만 제외

// * 3-6) only-child
// todo css) ul li:only-child
// ul의 유일한 자식인 li 선택
// 특정 요소의 자식이 하나 뿐일 때 적용

// * 3-7) only-of-type
// todo css) p span:only-of-type
// 같은 유형의 형제가 없을 때 적용. 여기서의 유형은 태그를 말함

// * 3-8) last-of-type
// todo css) .small:last-of-type
// small이라는 클래스를 가진 요소들 중, 같은 유형의 태그들과 비교 했을 때 가장 마지막에 있는 요소에 적용

// * 3-9) empty
// 자식이 없는 태그 선택


// * 4. User Action Pseudo-classes
// User Action에 따른 상태 변화
// ? 'event' - 사용자가 특정한 동작을 수행했을 때 변화를 줌
// 즉, <a> <form> <input> <button> 과 같이 유저의 interaction이 잦은 요소들에 많이 사용된다
// ? interactive Content (대화형 콘텐츠)
// ? 사용자와 상호작용하기 위한 element
// ? ex) a | input | button | abbr | detais | embed | tabindex | media요소 등등

// * 4-1) hover
// todo css) element:hover
// 마우스 커서 롤오버 상태를 표현

// * 4-2) active
// todo css) element:active
// 눌렀을 때 찰나의 상태를 표현 (누르고 있을 때)
// hover와 focus에 모두 포함되기에 우선 순위를 가장 높여 표현

// * 4-3) focus
// todo css) element:focus
// 눌러서 포커싱됐을 때의 border의 상태를 표현. active의 특성까지 포함
// ! interactive Content (대화형 콘텐츠)에서만 사용 가능
// input 에서 자주 사용
// tip) 보통 border의 기본적인 css요소를 모두 없애고 사용하는 경우가 많다
// todo css) input {  outline: none;
// todo css)          boxshadow: none;  }
// border: 0 이 아닌 outline: 0인 이유 생각해보기

// 디테일을 주고 싶다면 예를 들어 input에서 active와 focus를 모두 줄 수도 있다
// 다른 예시
// :link - 방문한 적이 없는 링크
// :vixited - 방문한 적이 있는 링크
// visited 경우에는 보안상의 이유로 아래와 같은 속성들만 변경 가능하다
// color // background-color // border-color // outline-color // The color parts of the fill and stroke properties



// * 5. Pseudo-Elements Selectors
// 가상 요소 선택자. 가상 클래스와는 엄연히 다른 개념이다
// ::로 표현(:도 가능하나 ::이 표준) // css 용도 // inline 요소
// property로 content 무조건 기입
// img를 삽입하기 위해 "" 를 없애고 'url()' 삽입도 가능하다
// 물론 본인은 background-img를 사용하여 img삽입하는 것이 더 편하다
// todo .pseudo::before or after {
// todo         content:"content" }
// 각 요소당 2개씩 사용 가능 (before, after)


// * 6 Attribute Selectors
// html에서 class 이름을 짓기가 애매할 때 주어진 속성만으로 css의 selector로 소환할 수 있다
// 각 개념마다 반드시 사진참조

// * 6-1) ATTR
// 속성 attr을 포함한 요소 선택
// [attr]

// * 6-2) ATTR=VALUE
// 속성 attr을 포함하여 속성 값이 value인 요소 선택
// attr 사용하기 애매할 때 사용 용이 (html에서 attr이 모두 겹칠 시)
// [attr=value]

// * 6-3) ATTR^=VALUE
// 속성 attr을 포함하며 속성 값이 value로 시작하는 요소 선택
// [attr^=value]

// * 6-4) ATTR$=VALUE
// 속성 attr을 포함하며 속성 값이 value로 끝나는 요소 선택
// [attr$=value]

// * 6-5) ATTR*=VALUE
// 속성 attr을 포함하며 속성 값에 value로 들어가는 요소 선택
// [attr*=value]



// * 7. Inheritance 상속
// 어떤 태그는 상속이 유리하고, 어떤 태그는 상속되지 않는 것이 유리하다.
// 상속 여부 링크 :  https://www.w3.org/TR/CSS21/propidx.html  
// 상속되는 속성들을 보면 기본적으로 '글자를 다루는 속성'들이 상속된다

// ? 강제 상속
// 자식을 제외한 후손에게는 적용 X
// 대부분의 property가 강제 상속 가능하다 (inherit 설정 가능)
// ex)  .child {
//        position: inherit;
//      }



// * 8. CSS Selector Olympic rank system

// Basic
// 동일한 tag를 seletor로 선정했을 때 나중에 선언된 것이 앞의 것을 덮어버린다
// Cascade 이라는 단어에서도 유추할 수 있다 '폭포처럼 흐르다. 작은 폭포'
// rule breakers > id > class > tag(type) > * > inheritance
// 부정 선택자 :not()은 Pseudo-class지만, 점수를 가지지 않는다

// ! 각 선언들은 어떤 선택자를 사용했는지에 따라서 우선순위가 바뀐다
// ? gold medals
// ID
// ? silver medals
// Class, Pseudo-class
// ? bronze medals
// Type

// ! Olympic과 같은 점수 합산 방식을 가진다
// ex) #gnb.call - 금1은1 // header.box - 은1동1
// ex) #gnb.call ul - 금1은1동1 // #gnb.call ul:last-child - 금1은2동1

// ? Rule Breakers
// - lnline Style - html body내의 tag안에 입력
// - !important - 가장 강력











// * Box

// * 1.Box Model

// - content -
// 텍스트 영역
// 가로 width 세로 height
// ? tip) width와 height의 auto값(기본값)
// ?  block - width: 100% | height: 0 // inline - width: 0 | height: 0 

// ? max-width : 요소의 최대 가로 너비를 지정 (해당 오브젝트 내에 들어있는 content의 크기가 max-width를 벗어나지 않게함.)
// ? min-width : 요소의 최소 가로 너비를 지정
// ? max-height : 요소의 최대 세로 높이를 지정
// ? min-height : 요소의 최소 세로 높이를 지정
// 절대적인 width, height 값을 주면 그 범위를 넘었을 때, 스크롤로 대체되지만 max, min을 사용하면 document 크기에 반응한다.
// 그렇기 때문에 반응형 웹디자인을 위해 많이 사용된다.


// - padding -
// 안쪽 여백. content와 border 사이의 공간
// padding-top, bottom 등
// 크기 증가의 특징 : content-box의 전제라면 padding값을 넣을 시, 요소 전체의 크기가 커지게 된다 - box-sizing: border-box로 해결
// border-box의 전제와 width, height값 고정할 시에 padding 영역과 content 영역은 반비례 관계를 가지게된다. 단, 일정 범위를 넘어서면 요소 전체의 크기가 커짐
// ? tip) 단위로 %를 쓰게된다면 부모 요소의 width값을 기준으로 값 형성


// - border -
// todo css) border: 1px solid #000 // 굵기 스타일 색상 // 선택적 : border-top, border-bottom 등
// border 스타일 예시 - 사진 참조
// todo css) border: none;

// 개별 속성들도 가짐
// ? tip) border-radius
// % - 원형 만들때 용이 | px - 모서리만 둥글게할 때 용이 
// todo css) border-radius: 50%(반경) // 선택적 : border-top-left-radius: 10px
// todo css) border-width: 20px 18px 19px 17px
// todo css) border-style: none hidden solid double dotted dashed inset outset groove ridge 
// todo css) border-color: black gray hotpink transparent(투명색)
// 크기 증가의 특징 : content-box의 전제라면 border값을 넣을 시, 요소 전체의 크기가 커지게 된다 - box-sizing: border-box로 해결


// - margin - 
// 바깥 여백, 즉 요소와 요소 사이의 간격을 나타내는 margin
// margin-top, bottom 등
// margin 사용시 top이든 bottom이든 둘 중 하나를 지정해서 고수하는 편이 낫다
// ? '-' 음수값 사용 가능
// ? tip) 단위로 %를 쓰게된다면 부모 요소의 width값을 기준으로 값 형성

// ! margin collapse 마진 중복ㆍ겹칩
// 특정 margin 값들이 중복되어 겹쳐지는 현상
// case)
// 형제 요소들의 margin-top과 margin-bottom이 만났을 때
// 부모 요소의 margin-top과 자식 요소의 margin-top이 만났을 때
// 부모 요소의 margin-bottom과 자식 요소의 margin-bottom이 만났을 때
// 계산법)
// 사진 참조

// shorthand 속기형
// '시계방향'으로 입력
// padding과 margin에 해당
// todo css) padding or margin : 10px 20px 10px 20px 이는 다음과 같다 10px 20px


// - box-shadow -
// box-shadow: h-offset v-offset blur spread color
// box-shadow: x필수 | y필수 | 흐린 정도 | 그림자 사이즈 | 색상 (축약형: - spread, blur순)
// x,y축 기준으로 여러 방향에서 복수 사용 가능
// 사용하지 않는 속성값이 있다면 0으로 처리
// ex) neumorphism
// 최근에는 검색하면 해당 디자인의 코드값이 다 나온다










// * 2. Box sizing

// html의 모든 요소들은 box-sizing값이 기본적으로 'context-box'로 설정되어있다
// 인간의 인지 구조와 css 동작 원리를 동일하게 하기 위해서 'border-box'로 변경한다
// 보통 처음부터 모든 요소에 대해서 'border-box'를 깔고 시작한다
// todo css) * { box-sizing: border-box; }



// * 3. Box type

// box model의 근원은 box type이다
// box type에 따라 box model이 어떤 식으로 작동할 지 천차만별로 달라진다
// display : box type을 결정짓는 css 속성
// block 면(영역) vs Inline 선(흐름)

// * 1) Block
// ! 따로 width를 선언하지 않는 경우, width = 부모의 content-box의 100%
// ! 따로 width를 선언한 경우, 남은 공간은 margin으로 자동으로 채움
// ? 따로 부모의 height를 선언하지 않을 경우, 자식 요소의 height의 합 = 부모의 height
// width, height, padding, border, margin 적용
// 'margin-left: auto'의 의미 : 자동적(auto-기본값)으로 생기는 margin을 왼쪽으로 밀어넣는다
// 결국 'margin: 0 auto'는 왼쪽 오른쪽 자동으로 생기는 margin을 나누어 가져, 가운데 정렬과 같은 형태를 갖는 것이다

// * 2) Inline
// width, height 등 크기 지정 불가. 이는 흐름의 balance를 깨뜨리는 것과 같다

// html에서 붙여쓰지않고 띄워쓰는 경우 margin도 아닌 일종의 bug현상과 같은 공간이 생긴다 (띄어쓰기 영역)
// -> <img> 자체 크기 있어서 가로, 세로값 조절 가능하지만 이런 오류로 인해 오차가 생길 수 있으므로 꼭 block으로 변환 후 조절한다

// margin, padding의 위,아래는 사용 불가
// padding의 위,아래에 값을 줘도 시각적으로는 여백이 생긴 것 같지만
// 실제로 이는 영역으로써의 가치를 못 하기에 실질적으로 여백이라고 할 수 없다

// * 3) Inline-Block,flex
// inline과 block의 장점 조화
// 쉽게 말해, inline에 weight와 height 조절 가능케한 것
// 자동으로 margin값(=띄어쓰기)이 형성되는 등 원치않는 오차가 생길 수 있다 - 물론 font-size: 0;으로 해결가능하긴함
// 해결책 => position: reletive 사용해보기










// * Float
// block element의 가로배치를 위해서 사용 // 붕 뜨는 것이 기본 성질
// '수평 정렬'시 자주 사용


// * 1. What happens
// ? 1) 자식 요소에서 제외. 다른 자식들이 자리를 메꾸고 빈자리를 없앤다.
// ex) 빨,노,파 3개 요소 height의 값 = 600 // 빨 - float // 부모 height값 = 400. 빨,노 겹침 현성

// ? 2) block으로 box type 변경
// inline, inline block, block -> block

// ? 3) 일반적인 block과는 달리 자신의 content-box 길이 만큼 width값을 가짐
// width값을 따로 선언하지 않아도 부모의 content-box를 100% 다 가지는 것이 아니다

// ? 4) 일반적인 block과는 달리 자신의 페이지 전체 width에서 block제외 width가 남아도 자동 margin값이 생기지 않는다. 
// 즉, 별도의 margin값을 줄 때만 margin이 생긴다

// ? 5) 한정된 width값에 들어갈 수 없을 때는 새로운 줄 형성. 여기서 말하는 width값은 이전 부모의 width값임
// 모든 자식이 집을 나가면 heigh값은 0이 되나, 전체 width값의 틀은 남긴다  

// ? 6) Float된 요소를 block 요소들은 무시하지만 inline 요소들은 float 요소의 존재를 인지한다

// =>  어마어마한 layout의 붕괴. 최근에는 잘 쓰지 않는다


// * 2. How to fix it

// * 1) overflow: hidden or auto;
// float자식의 이전 부모에게 적용하면 자식은 존재를 인지한다. 즉, 다시 안에 가둔다
// 잃어버렸던 height값을 다시 가지게 되는 것이다

// * 2) Clearfix (정석)
// 'clear' property로 fix한다는 뜻 // float을 해제하는 특성
// todo clear: left or right or both
// 각각 float left, right, both로 부터 영향을 받지 않는다는 것을 의미
// display가 block인 요소만 사용 가능

// ? pseudo-element selectors 삽입하여 clearfix 사용하는 방법 추천
// css로 만들어낸 요소이며, inline 속성을 가짐 => clear 속성을 쓸거면 block요소로 전환해야함
// todo .pseudo::before or after {
// todo     content:"";
// todo     display: block; 
// todo     clear: both; }
// property content는 쓸 내용이 없더라도 형식 자체는 무조건 기입해야함
// .pseudo 부분은 보통 부모 요소의 class가 들어갈 것임
// 각 요소당 2개씩 사용 가능
// div를 만들어서 clear속성을 먹여줘도 되지만, html의 본질을 생각하자
// clearfix를 위해 html 요소를 하나 더 만든다는 것은 용납할 수 없는 일이다.










// * Position
// 요소를 원하는 위치에 자유롭게 이동
// Type : 어떤 종류의 position을 사용하고 있는가?
// 기준점 : 무엇을 기준으로 요소를 위치시키는가?
// 기준점은 각각의 position type에 따라 크게 좌우된다
// top-bottom, left-right 중 하나만 선택해서 움직이는 것이 정신건강에 좋다
// 요소 가운데 배치시 자주 사용
// ? 유의점 : 반응형 웹에서는 반드시 기존의 UI 위치를 auto로 무력화 시킨 후에 지정해주자.



// * 1. static
// 모든 요소의 기본 position value
// 가장 일반적 상태

// * 2. relative
// 기준점 : 자기 자신이 본래 있던 자리
// float와 마찬가지로 붕뜨지만 자신의 자리는 기억한다. 부모, 형제 요소 또한 마찬가지다.
// todo position: relateive;
// todo top: 20px; // right: 50px     -     위로, 오른쪽으로부터 20,50px만큼 떨어진다
// cf) top right와 같은 것들을 offset(간격)이라 칭한다 

// * 3. absolute
// 기준점 : html 기준 (기본)
// 부모에게 종속되는 float와는 달리, 자신의 여러 조상 중에서 기준점을 선택 할 수 있다
// 단, position이 static이 아닌 요소에 한해 기준점을 선택한다 (지정)
// 물론, relative인 부모를 기준점으로 지정하는 것이 좋다. 다른 것들은 position 인셉션 현상이 일어날 확률이 높다.

// 부모와의 링크가 끊기기 때문에, 부모의 style 속성도 받아들이지 않게된다
// float와 매우 유사한 특성을 가진다 ex) blcok으로 변환, 붕뜸(부모, 형제가 찾지 못함), 길막x
// 하지만, inline요소마저 absolute대상을 보지 못한다

// * 4. fixed
// position absoulte와 특성 동일
// 단, 기준점을 viewport로 삼는다는 차이점이 있다
// 해당 element를 화면상에 완전히 고정시켜 스크롤로부터 완전한 독립을 가져다준다
// 해당 요소의 content 크기만큼 크기가 확 줄어든다. (길막 x)

// * 5. sticky
// 스크롤 영역 기준으로 배치
// top bottom left right 중 하나의 속성 반드시 입력
// IE 지원 불가

// * 6. z-index
// position된 요소들의 수직방향(3차원에서의 z축)에서의 위치를 알려준다
// val : 정수값
// todo z-index:2;
// 붕 뜬것들 끼리 겹치고 싶을때 자주 사용 ex) 2층으로 1층 살짝 덮기(가리기)

// px이 아닌, %로 position을 위치 시켰을 때는
// todo transform: traslate(~%);
// 를 사용하여 ex)정가운데로 이동시켜주는 작업이 필요하다.
// ex) transform: translate(-50%, -50%);










// * FlexBox
// 4 steps
// 선언 - 방향 설정 - 정렬할 줄 개수 설정 - 사용 
// block으로 변환
// FlexBox는 크게 Container와 Item으로 나눌 수 있다 (사진 참조)
// block만 정렬한다는 고정관념을 버리자

// * 1. Container

// * 1) 선언
// todo display: flex;
// val : flex | inline-flex
// 정렬하고자하는 요소의 부모에게 선언
// inline-flex : inline 특성의 flex container 정의 즉, block의 특성인 크기 지정이 가능하면서 inline특성인 수평 정렬

// * 2) 방향 설정
// todo flex-direction: row;
// val : row | row-reverse | column | column-reverse

// ! 'Axis' 보이지 않는 2개의 축 발생 - Main axis | Cross axis - 기본 : 위->아래 or 왼->오
// Main axis's att : justify-content
// Cross axis's att : align-items, align-content (content는 items가 2줄 이상이고 여백이 있을 경우만 사용 - 사진참조) (2줄일 경우 items보다 content가 우선 ex: wrap)
// val : center | flex-start | flex-end | space-between | space-around | stretch (only items, content - height or width 값이 지정되어있지 않는 경우 ex: auto) | baseline(only items 문자 기준선에 정렬 - 사진 참조) 
// todo justify-contnet: flex-start;
// ? align-items일 때는 space-between과 space-around를 사용할 수 없다. 그 원리를 생각해보자         -         align-items은 하나의 flex line이 기준이다. align-content는 전체를 하나의 flex line으로 본다.
// main, cross axis 동시 활용 가능

// * 3) 정렬할 줄 개수 설정
// todo flex-wrap: nowrap;
// val : nowrap* | wrap | wrap-reverse
// 공간이 넉넉치 않아도 자식의 사이즈를 줄여서 한 줄로 정렬 
// 공간이 넉넉치 않으면 자식의 크기를 유지하되 여러 줄(2줄 이상)로 정렬

// 나만의 배열 방법
// float, position - 안에서 밖으로
// flexbox - 밖에서 안으로

// * 4) 방향과 정렬 줄 개수 동시 설정
// todo flex-flow: column wrap;
// flex-direction과 flex-wrap이 자주 같이 사용되기 때문에, flex-flow가 이를 대신할 수 있다. 
// 이 속성은 공백문자(띄어쓰기)를 이용하여 두 속성의 값들을 인자로 받는다.

// * 2. Items

// * 1) order
// 마크업된 요소들의 순서를 설정
// 음수 허용
// todo order: 0*,1,2,3;


// * 2) flex
// 개별 속성인 flex-grow, flex-shrink, flex-basis의 단축 속성
// ! 주의점 : flex-basis가 단축 속성에서는 기본값이 auto가 아닌 0으로 인식된다
// todo flex: 1 1 20px;

// * 2-1) flex-grow
// item의 증가 너비 비율 설정 (가변하는 특징 ex: container 증가시)
// val : 정수값 (단, auto가 아닌 width나 height값이 정해진 경우에는 완벽한 비율 설정은 되지 않는다)
// flex content내에서 공간이 남을 때, 그 공간을 얼마나 채울 것인지를 결정
// flex 자식 요소들에 margin으로 띄워주지 않으면 justify-content방향으로 모조리 붙게 만든다 -><- 이런 느낌. content 공간 채우는데 급급
// 사진 참조

// * 2-2) flex-shrink
// flex-grow와 정반대의 개념 | 사용 빈도수 낮음
// 사진 참조

// * 2-3) flex-basis 
// grow나 shrink에 상관없이 item의 (공간 배분 전) 기본 너비 설정
// val : auto* | 단위 px, em, cm 등
// 사진 참조


// * 3) align-self
// 교차 축(cross-axis)에서 item의 정렬 방법을 설정
// ? align-self는 align-items와 달리 일부 item의 정렬 방법만 설정한다.
// 즉, 개별 요소에 적용할 수 있는 또 다른 속성이며 align-items가 사용하는 값들을 인자로 받아서 그 값들을 지정한 요소에만 적용시킨다.
// align-items 속성보다 우선
// val : align-items와 동일 + auto*(Container의 align-items의 속성을 상속)









// * Media Query
// Resposive Web 반응형 웹 - 사용자가 접속한 브라우저(디바이스)의 크기에 맞는 css 적용
// 모바일 먼저 제작하는 것이 정설. 가장 작은 화면부터 시작하면 화면이 커졌을 때 깨짐 현상을 방지할 확률이 크다
// html : viewport meta | css : media query   -   모두 성립되어야 반응형 웹 제작 가능
// todo @media screen and (min-width: ...px) - height 1000px 기준
// 입력한 px 이상,이하일 때 해당 style 적용한다는 뜻

// ? vh = viewport height  (사용 多)
// ? vw = viewport width
// ? vmax = viewport의 width와 height중 더 긴 것을 기준으로 백분율 계산
// ? vmin = viewport의 width와 height중 더 짧은 것을 기준으로 백분율 계산

// vw,vh VS % 
// vw, vh - 창 중심, 스크롤 포함 크기
// % - %를 쓰고 있는 요소의 부모 요소의 길이에 맞게 반환, 스크롤 포함 x 크기
// viewport? 현재 실행중인 스크린 크기에 맞춰 상대적 크기를 반환
// vw와 vh에서 스크롤바가 발생한 이유는 viewport가 스크롤바의 영역을 포함하기 때문

// 색추천
// RED #ff4949
// ORANGE #ff5216
// YELLOW #ffc82c
// GREEN #13ce66
// BLUE #1fb6ff
// PURPLE #7e5bef
// PINK #ff49db










// * Typography
// 읽기 좋은 텍스트 디자인 and 제공
// 보기 좋은 typography는 font-size | line-height | letter-spacing 3박자 조화
// font-size | line-height | letter-spacing 를 set로 정의 하는 경우가 많다

// * 단위
// ? px
// 절대 단위 
// ? % 
// 기본적으로 부모가 기준임 -> 부모의 %
// ? em(equal to capital M) 
// 자신이 가지고있는 기본적인 font-size = 1em | font-size 대상으로는 잘 쓰지 않는다
// ex) font-size= 10px 일때 둘러싸고있는 div의 width가 600px이라면 해당 width는 60em이라고 볼 수 있다
// 상속의 특성으로 인해 관리하기 어렵다는 단점이 있다
// ? rem(root em)
// em의 단점 보완
// root-html에 적용된 font-size 기준
// 보통 1rem = 16px

// * 0) font
// 단축 속성
// font : 기울기 두께 크기 / 줄높이 글꼴
// font-size와 font-family는 필수 입력

// * 1) font-size
// 글자의 크기
// 기본값 : 16px

// * 2) line-height
// 줄 간격
// px *em rem 사용. em 사용시에는 단위 생략 가능 - font-size에 비례하게 height을 설정하는 것이 좋기 때문에 em을 자주 사용한다
// 글자 자체는 line-height의 중앙에 비치된다 - 사진참조
// '수직 정렬'시에 자주 사용
// 기본값: 1~1.4 | Reset.css 적용시 1

// * 3) letter-spacing
// 글자와 글자 사이의 자간
// px *em 사용
// todo letter-spacing: -0.05em

// * 4) word-spacing
// 단어 사이(띄어쓰기)의 간격을 설정
// px em cm
// 띄어쓰기가 가지고있는 기본적인 크기에 더하는 뉘앙스

// * 4) font-family
// 글자의 서체
// 출처 : web-font | 사용자 환경
// 선입선출. 먼저 입력하는 것 부터 fall back. 마지막에는 항상 글꼴 후보의 계열을 입력해준다
// todo font-family: 글꼴후보1, 글꼴후보2, 글꼴계열;
// ! form요소와 관련된 것들은 body에 font를 줘도 먹히지 않기에 따로 지정해줘야한다
// 사진 참조

// * 5) font-weight
// 글자의 굵기
// todo font-weight: 500
// 가장 기본적 weight: 400 (Regular)
// px과 같은 font - size 단위 쓰지 않음
// bolder | lighter - 기준 : 부모(상위)요소
// 사진 참조

// * 6) color
// ? hex - 가장 많이 씀
// todo color: #0066ff
// ? rgb
// todo color: rgb(0,102,255)
// ? rgba - 투명도 포함
// todo color: rgb(0, 102, 255, 1)
// 이 외 사진참조

// * 7) text-align
// 텍스트 정렬
// left* | right | center | justify (양쪽 맞춤)
// ? tip) 랜덤 텍스트 입력 => lorem+원하는 글자수

// * 8) text-indent
// 들여쓰기 | 내어쓰기
// todo text-indent: 100px or -100px
// background-image에서 대체 텍스트와 유사한 기능을 주고 싶을때 화면 밖으로 빼내는 용도로 많이 사용됨
// todo text-indent: -9999px;

// * 9) text-transform
// 대소문자 변환
// none* | capitalize | uppercase | lowercase
// 사진 참조

// * 10) text-decoration
// text에 줄긋기
// none* | underline | line-through | overline  
// <a>의 기본 밑줄 삭제 시, 자주 사용

// * 11) font-style
// 글씨체
// normal* | italic | oblique
// <empasis>의 기본 기울기 삭제 시, 자주 사용




// * Web-font

// 쓰는 이유
// 우리가 css에 입력한 font는 사용자의 pc에는 없을 수 있다.
// 이에 대비하여 우리는 web-font를 사용자에게 제공하여 문제를 해결할 수 있다.

// 사용법
// 가져다 쓰는 법 - link 첨부
// 직접 제공하는 법 - webfont 문법에 의거

// 가져다 쓰는법
// ? link 첨부
// html head에 url 삽입
// css body에 font 선언


// 직접 제공하는 법
// step 1) font관련 디렉토리를 만들고 font를 다운 받은 후 해당 디렉토리에 저장한다.
// step 2) font class들을 저장할 css 파일을 만든후 @font-face 문법에 의거하여 webfont 스펙을 입력한다. @font-face 문법은 사진참조
// step 2에서는 css-tricks 사이트에서 @font-face 문법 모듈을 가져오는 것이 더 편할 수 있다.
// step 3) 문법 모듈을 가져온 뒤 자신의 webfont 스펙에 맞게 속성들을 바꿔준다. 물론 font의 weight에 따라 @font-face 문법 모듈을 만들어줘야 한다.
// step 4) webfont css파일을 다 만들었으면 import를 해야하는데, 이는 2가지 방법이 있다.
// 방법 1 : html에 넣기 - webfont css 파일 링크를 걸어준다.
// 방법 2 : style.css에 넣기 - @import url('webfont css의 경로')
// step 5) body나 font style을 넣고싶은 태그를 선택하여 font-family 속성을 넣어준다.

// tip)
// typography 관련한 webFont 라이브러리를 따로 만들어서 사용하는 것이 효율적일 확률이 높다.
// 굵기에 따른 font명 차이는 font-weight 사진 참조
// 실질 적용 여부 => 개발자 도구 | font-family | Rendered Fonts | Network - Font 연결 상태 확인











// * Background
// 대체로 배경 이미지, 배경에 가상요소로 아이콘을 넣을 때 쓰인다

// * 0) background
// 색상 이미지경로 반복 위치 스크롤특성; (각 value 누락 가능)

// * 1) background-color
// hex | rgb | rgba
// transparent

// * 2) backgrond-img
// ? url() - 반드시 사용해야하는 함수
// todo background-image: url("절대경로" or '상대경로');

// * 3) baackground-repeat
// ? repeat* | no-repeat | repeat-x | repeat-y

// * 4) background-position
// ? x y
// x : left | center | right | % | px,em,cm
// y : top | center | bottom | % | px,em,cm

// * 5) background-attachement
// 배경 이미지의 스크롤 여부(특성)
// ? scroll* | fixed | local

// * 6) background-size
// ? contain | cover | custom
// todo background-size: auto 100%   -   custom
// contain : 요소에 이미지가 다 들어감 (원본 비율 유지) 
// cover : 이미지가 요소를 꽉 다 채우지만 이미지가 잘림 (원본 비율 유지)
// cover는 원본 크기에서 cover되는 것이 아니라 해상도에 맞는 크기를 기준으로 cover된다
// cover에 center center 사용 多

// * 7) background
// color image - repeat - position - attachment










// * Transition & Animation

// * 1) transition
// 특정 요소에서 특정 요소로 속성이 바뀔 때(전환 효과) 자연스럽게(일정 기간동안) 바뀌도록함
// CSS 속성의 시작과 끝을 지정하여 중간 값을 애니메이션
// ! hover나 onclick 같은 이벤트 트리거에 의해 작동(자동 발동x) 
// ex) .box -> .box:active
// 개별 속성으로도 지정 가능 ex) transition-property: width;
// 단일 속성 : 속성명 | 지속시간 | 변화속도 | 시작시간

// ? property 필수
// 변화가 일어날 속성이 어떤 것인지 명시
// val: all* | property 
// todo transition: background

// ? duration 필수
// 지속 시간. transition이 얼마 동안 일어나는가
// val: ms | s   -   1,000ms === 1s
// ! tip) 소수점 입력시 일의 자리 '0' 생략 가능 ex) .3s

// ? timing-function
// 변화 속도 지정
// val: ease in(ease*) | ease-out | ease-in-out | linear | cubic-bezier() | steps(n)
// 느리게->빠르게 | 빠르게->느리게 | 느-빠-느 | 일정하게 | 변화 가속도 본인이 제어 | n번 분할된 애니메이션
// cubic-bazier.com에서 copy하기 | Easing Functions Cheat Sheet
// todo transition: all 2500ms cubic-bezier(0.08, 0.57, 0.97, -0.78);

// ? delay
// transition이 몇 초후에 일어날 것인가
// val: ms | s

// 각 property마다 상이한 trasition을 주고 싶을 때 ','로 해결
// todo transition: font-size 1000ms, background-color 2000ms;


// * 2) animation
// 특정 요소에 animation을 주고 싶을 때, 속성이 자연스럽게(일정 기간동안) 바뀌도록함
// 시작하기 위한 이벤트가 따로 필요 없음
// transition보다 할 수 있는 것이 많다. ex) 정지, 반복, 구간별 설정 등
// 단일 속성 : 이름 | 지속시간 | 변화속도 | 반복횟수 | 진행방향 (이름과 지속시간은 꼭 순서를 지켜주자)


// ? animation-name
// 사진 참조
// todo animation-name: ABCDE;

// ! @keyframes - selecter 선택자 | 어떤 animation을 줄 것인가
// 꼭 @keyframes로 '선언'을 해줘야 한다
// todo @keyframes name {
// todo  from { }    0% { }  50% { }
// todo  to { }      100% { }
// todo  }

// ? animation-duration
// 지속 시간
// val: ms | s
// todo animation-duration: 2000ms;

// ? animation-timing-function
// 변화 속도 지정
// transition과 동일
// val: ease in | ease-out | ease-in-out | cubic-bezier() | linear

// ? animation-delay
// animation이 몇 초후에 일어날 것인가
// val: ms | s

// ? animation-iteration-count
// 몇 번 되풀이 할 것인가
// val: 음수 | 양수 | infinite

// ? animation-direction
// animation의 진행 방향. 상하좌우를 말하는 것이 아님 ex) to -> from
// val : normal* (정방향) | reverse | alternate-reverse | alternate - 번갈아 가며 진행. iteration의 direction이 복수일 때 자주 사용

// ? animation-fill-mode
// 애니메이션의 전후 위치를 설정
// val : none* | forwards | backwards | both
// 사진 참조

// ? animation-play-state
// 애니메이션의 재생과 정지를 설정
// val : running* | paused








// * Grid.

// * 1) 개념과 용도
// 페이지 전체 설계 디자인
// 디자이너의 디자인 의도 파악
// Grid : 격자 | 분할
// Grid가 적용되는 전체 영역을 container라고 하며 column과 gutter(여백)로 구성된다
// 보통 column은 총 12개로 구성한다. 하나의 row에 column이 12개가 넘어가면 넘쳐흐른다
// col 들은 각각 좌우로 15px씩 padding값을 가져 총 30px만큼 떨어져있다 (상하는 15px)

// * 2) 사용법
// 1. css 링크 가져오기
// 2. div class container -> row -> col-n ( n = 1~12 ) -> 요소 차례대로 만들기 
// 주의점은 반드시 이 순서(자식 관계 구조)를 지켜야한다. 사이즈 지정 후 요소들을 넣는 개념이다.
// 3. break point 마다 col의 사이즈를 다르게 하고싶다면 다음과 같이 입력한다.
// todo <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
// sm : 576 / md : 768 / lg : 992 / xl : 1200  =>  부트스트랩 사이트에 Grid system 참고
// 모바일로 먼저 시작하고 점점 키워나가는 것이 좋다







// * ETC.

// * 1) opacity
// 투명도 결정
// val: 0 ~ 1 의 수


// * 2) overflow
// width와 height를 가진 요소의 content가 영역의 크기를 벗어났을 때 처리 방법
// val: visible* | auto | scroll | hidden
// visible : 표시는 하나, 넘친 부분은 다른 요소들에 의해 무시
// auto, scroll : 넘친 부분 scroll내에 표시 (scroll은 넘치는 부분이 없어도 강제적으로 scroll생성)
// hidden : 넘친 부분 숨김

// overflow-x, overflow-y로 개별적 선언도 가능


// * 3) transform
// 다른 요소들이 해당 요소를 인지하기에, 다른 요소들에게 전혀 영향을 주지 않는다
// val: translate() | scale () | rotate()
// 애니메이션에 최적화 된것은 Position이 아닌 transform이다
// Position은 배치하고 끝내는 개념이며, 애니메이션에 최적화하려면 매번마다 rendering을 해야하는 번거로움이 있다

// * 3-1) 2D 변환 함수

// ? translate(x,y) : 내가 옮기고 싶은 위치로 이동
// translate(X,Y) - 개별적 선언 가능
// 단위 : px / %

// ? sacle(N) : 요소의 각도 변경
// scale(x,y) - 개별적 선언 가능
// N은 배율을 의미한다 ex) N=2 -> x2
// 단위 : 상식적인 양의 배수

// ? rotate(Ndeg) : 요소의 각도 변경
// N은 각도를 의미한다
// 단위 : deg (degree)

// ? skew(x-deg, y-deg) : 비틀기(기울임)
// 단위 : deg

// ? matrix(n,n,n,n,n,n) 2차원 변환 효과 모음
// 2D or 3D 변환 함수를 사용하더라도 브라우저는 matrix라는 함수로 변환되어 적용된다. 결과적으로 브라우저는 matrix함수로 쓰는 것이다.
// 쉽고 직관적인 특성때문에 변환 함수들을 쓰는 것이다
// 일반적으로 잘 쓰지않는다
// 사진 참조

// * 3-2) 3D 변환 함수
// 사진 참조
// perspective는 val중 가장 앞자리에 입력한다

// * 3-3) 변환 속성

// ? transform-origin
// 요소 변환의 기준점 설정
// 사진 참조

// ? transform-style
// 3D 변환 요소의 자식 요소도 3D 변환을 사용할지 설정
// val : flat* | preserve-3d

// ? perspective 
// 하위 요소를 관찰하는 원근 거리를 설정
// perspective 속성은 관찰 대상의 부모(조상)요소에 적용하여 하위 요소들을 관찰하는 원근 거리 설정
// perspective 변환 함수는 관찰 대상에 직접 적용하여 그 대상을 관찰하는 원근 거리 설정

// ? perspective-origin
// 원근 거리의 기준점을 설정
// 기본값 : 50% 50%

// ? backface-visibility
// 3D 변환으로 회전된 요소의 뒷면 숨김을 설정
// val : visible* | hidden


// * 4) visibility
// 없어지는 것이 아니라 보이지만 않을 뿐
// opacity: 0과 비슷
// ? 없는 존재는 display: none;   -   구별하기
// val: visible* | hidden


// * 5) Multi-Columns
// 일반 블록 레이아웃을 확장하여 여러 텍스트 다단으로 쉽게 정리하며, 가독성 확보
// 사진 참조

// ? columns
// todo columns: 100px 2 (단의 최적너비 | 개수)
// 개별 속성 : columns-width | column-count
// tip) 하나의 단이 최적 너비보다 줄어들 경우 브라우저가 단의 개수를 줄인다

// ? column-rule
// todo column-rule:
// 개별 속성 : column-rule-width | column-rule-style | column-rule-color
// column-rule(구분선)은 단과 단 사이의 간격 중간에 위치한다

// ? column-gap
// todo column-gap:
// 단과 단 사이의 간격 설정
// 단위: px, em, cm 등 (기본값: normal-1em)
