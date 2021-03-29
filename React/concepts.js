// 1. React를 왜 사용하는가?
// Rangular 등과 같이 Web-app을 쉽게 만들 수 있다.
// 데이터 바인딩이 쉽다.

// tip) 데이터 바인딩?
// 서버에서 받아온 데이터를 js로 저장한 다음 html에 해당 데이터를 넣는 것
// ex) 전통적인 js 데이터 바인딩 - document.getElmentById()


//   tip) Web-app의 장점
// 1. 모바일앱으로 발행 쉬움
// 2. 앱처럼 뛰어난 UX
// 3. 비즈니스적 강점


// tip) Node.js를 설치한 이유
// create-react-app 라이브러리를 사용하기 위해서 설치
// node.js를 설치하면 npm이라는 툴 이용가능
// npm으로 create-react-app 이용했음
// npm은 또한 제이쿼리, 부트스트랩 등 라이브러리를 설치하기 쉽게 도와줌




// 2. react app 설치 시 자동 생성되는 폴더 및 파일

// 2-1. App.js ?
// 메인페이지에 들어갈 HTML 짜는 곳
// 실질적인 메인페이지는 public/index.html
// App.js -----by index.js-----> index.html

// 2-2. node_modules ?
// 라이브러리 모은 폴더
// react app을 사용하기 위해서는 여러가지 라이브러리들이 필요하다.

// 2-3. public ?
// static 파일 보관함
// static? 동적으로 잘 바뀌지 않는 파일들

// 2-4. src ?
// 소스코드 보관함. 실질적 코딩

// 2-5. package.json ?
// 내가 설치한 라이브러리를 모두 모아놓은 파일
// npm으로 라이브러리를 설치할 때마다 버전 등이 기록 된다.


// 3. 작동 원리

// 3-1. 메인 페이지 작동 원리
//  index.js 에서 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// 'document(페이지)에서 Id값이 root인 것을 찾아서 react App을 그 안에다가 넣겠다.'라는 의미
// 물론 id가 root인 것은 public폴더에서 index.html보면 찾을 수 있다.
// 결국 react componet가 rendering될 때는 해당 componet가 html형태(JSX)로 만들어져서 id가 root인 곳에 삽입이 되는 것이다.
// 예를 들어, App.js에 있는 내용들이 html형태로 만들어져서 public의 index.html root부분에 삽입되는 것이다.

// 3-2. JSX -> JS
// BABEL을 통하여 HTML 형태의 JSX 코드가 JS로 변환
// BABEL은 JS 컴파일러이다. 자세한 사항은 Babeljs.io 에서 확인 가능
// 이렇게 변환을 위해서는 몇 가지 규칙을 준수해야 한다.

// 규칙 1 - Tag는 꼭 닫혀있어야 한다.
// 태그 사이에 내용이 있는 경우 - 닫는 태그 사용
// 예시 - <div></div>
// 태그 사이에 내용이 있는 경우 - self closing 태그 사용
// 예시 - <input /> <br />

// 규칙 2 - 2개 이상의 Tag는 꼭 하나의 Tag로 감싸주어야 한다.
// 예시 
// <>
//   <HEllo />
//   <div>안녕하세요</div>
// </>
// 위 예시처럼 감싸 줄 때 굳이 div와 같은 태그를 사용하지 않고, flagment를 사용하여 감싸줄 수도 있다.

// tip) 주석 넣는법
// 1. 중괄호 사용
// 예시 - {/* 이것은 xxx입니다.! */}

// 2. Tag 여는 부분 or selfClosing Tag
// 예시
//   <HEllo 
//      // 이런식으로 작성
//   />


// 4. 기본 개념

// 4-1. Tag에 class 주기
// <div className="클래스명"></div>
// HTML이 아닌 JSX에서는 class를 줄 때에, class가 아닌 className이라고 입력한다.
// 물론 카멜표기법 camelCase을 이용하여 작성한다 




// 4-2. 데이터 바인딩

// 1. { } 중괄호 사용 (정적 데이터) 
// { 변수명 } { 함수 } - 공백은 취향 차이
// src, id, href 등의 속성 안에도 넣어 사용 할 수 있다.
// 상상하는 모든 곳에 변수 집어넣기 가능 ex) className에 변수 사용

// 예시 1
// let posts = '이번주 신상 리스트'
// <div className={ posts }> 개발 Blogs</div>

// 예시 2
// let posts = '이번주 신상 리스트'
// <h3> { posts } </h3>

// 예시 3
// import logo from './logo.svg';
// <img src={ logo } />

// 예시 4
// function hundred() {
//  return 100
// }
// <h3> { hunderd() } </h3>


// 2. state에 넣기 (동적. 중요하고 자주 바뀌는 데이터)
// state ?
// 변수 대신 쓰는 데이터 저장공간
// useState()를 이용해 만든다 - React에 있는 내장 함수
// useState() 내에 문자,숫자,array,object 모두 저장 가능

// state에 데이터를 저장해놓는 이유
// 웹이 App처럼(React를 웹앱처럼) 동작하게 만들고 싶기 때문
// state는 변경되면 HTML이 자동으로 재렌더링 된다. 그러므로 그냥 변수에 넣어 데이터를 저장하는 것 보다 수정, 순서 변경 등에 용이하다.
// 예를 들어 제목 수정 시에 일반 변수에 저장하는 것과 달리 새로고침 없이 재렌더링이 가능하다.


// 예시
// step 1) 
// App.js 상단에 { useState } 첨부 
// step 2)
// function App() {
// let [글제목, 글제목변경] = useState('남자 지갑 추천'); 
// }

// useState 함수는 실행하고나면 2개의 데이터를 담고 있는 array가 하나 남게되는데 
// [a,b] - 여기서 a는 ''내의 데이터를 포함하고 있으며 b는 해당 state를 정정해주는 함수이다.
// [state데이터, state 데이터 변경 함수]





// 4-3. JSX에서 style 속성 넣기
// 1. object 형식을 사용한다.
// style = {object 자료형으로 만든 스타일}
// 예시 
// <div style={ color : 'blue' }> 개발 Blog</div>

// 2. 변수에 할당
// 예시
// let posts = { color : 'blue' }
// <div style={ posts }> 개발 Blog</div>

// 3. import 하기
// css에 스타일 지정 후 js에 className으로 가져오기








