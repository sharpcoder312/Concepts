## React Concepts



#### 1. React를 왜 사용하는가?

+ Angular, Vue 등과 같이 Web-app을 쉽게 만들 수 있다.

+ 데이터 바인딩이 쉽다.

+ tip) 데이터 바인딩?

  + 서버에서 받아온 데이터를 js로 저장한 다음 html에 해당 데이터를 넣는 것

  + ex) 전통적인 js 데이터 바인딩 - `document.getElmentById()`

+ tip) Node.js를 설치한 이유
  + create-react-app 라이브러리를 사용하기 위해서 설치
  + node.js를 설치하면 **npm**이라는 툴 이용가능
  + npm은 또한 제이쿼리, 부트스트랩 등 라이브러리를 설치하기 쉽게 도와줌





#### 2. React app 설치 시 자동 생성되는 폴더 및 파일

+ `App.js`
  + 메인페이지에 들어갈 HTML 짜는 곳
  + 실질적인 메인페이지는 public 폴더의 index.html
  + App.js  -----by index.js-----> index.html
+ `node_modules`
  + 라이브러리 모은 폴더
  + react app을 사용하기 위해서는 여러가지 라이브러리들이 필요하다.

+ `public`
  + static 파일 보관함
  + static? 동적으로 잘 바뀌지 않는 파일들
+ `src`
  + 소스코드 보관함. 실질적 코딩
+ `package.json`
  + 내가 설치한 라이브러리를 모두 모아놓은 파일
  + npm으로 라이브러리를 설치할 때마다 버전 등이 기록 된다.





#### 3. 작동 원리

+ `index.js`

  ````js
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
  
  // 'document(페이지)에서 Id값이 root인 것을 찾아서 react App을 그 안에다가 넣겠다.'라는 의미
  // 물론, id가 root인 것은 public폴더에서 index.html보면 찾을 수 있다.
  // 결국 react componet가 rendering될 때는 해당 componet가 html형태(JSX)로 만들어져서 id가 root인 곳에 삽입이 되는 것이다.
  // 예를 들어, App.js에 있는 내용들이 html형태로 만들어져서 public의 index.html root부분에 삽입되는 것이다.
  // App.js  -----by index.js-----> index.html
  ````

+ `JSX` -> ~`JS`

  + BABEL을 통하여 HTML 형태의 JSX 코드가 JS로 변환

  + BABEL은 JS 컴파일러이다. 자세한 사항은 Babeljs.io 에서 확인 가능

  + 이렇게 변환을 위해서는 몇 가지 규칙을 준수해야 한다.

  + 규칙 1 - **Tag는 꼭 닫혀있어야 한다.**

    + 태그 사이에 내용이 있는 경우 - 닫는 태그 사용

      ````js
      <div>content</div>
      ````

    + 태그 사이에 내용이 없는 경우 - self closing 태그 사용

      ````js
      <input /> 
      <br />
      ````

  + 규칙 2 - **2개 이상 tag는 꼭 하나의 tag로 감싸주어야 한다.**

    ````js
    <> 
      <Hello />
      <div>안녕하세요</div>
    </>
    
    // 위 예시처럼 감싸 줄 때 굳이 div와 같은 태그를 사용하지 않고, flagment를 사용하여 감싸줄 수도 있다.
    ````

  + tip ) 주석 넣는법

    ````js
    // 1. 중괄호 사용
    {/* 이것은 xxx입니다.! */}
    
    
    // 2. Tag 여는 부분 or selfClosing Tag
      <HEllo 
         // 이런식으로 작성
      />
    ````





#### 4. 기본 개념

1. tag에 class 주기

````js
<div className="클래스명"></div>

// HTML이 아닌 JSX에서는 class를 줄 때에, class가 아닌 className이라고 입력한다.
// 물론 카멜표기법 camelCase을 이용하여 작성한다 
````



2. 데이터 바인딩

+ `{ }` 중괄호 사용 (정적 데이터)

  ````js
  { 변수명 } { 함수 } - 공백은 취향 차이
  
  // src, id, href 등의 속성 안에도 넣어 사용 할 수 있다.
  // 상상하는 모든 곳에 변수 집어넣기 가능 ex) className에 변수 사용
  
  // 예시 1
  let posts = '이번주 신상 리스트'
  <div className={ posts }> 개발 Blogs</div>
  
  // 예시 2
  let posts = '이번주 신상 리스트'
  <h3> { posts } </h3>
  
  // 예시 3
  import logo from './logo.svg';
  <img src={ logo } />
  
  // 예시 4
  function hundred() {
   return 100
  }
  <h3> { hunderd() } </h3>
  ````



3. **props** 

+ properties의 줄임말

+ component 사용 시, 특정 값을 전달해 주고 싶을 때 사용 (By parameter)

  ````js
  // App.js
  import React from 'react';  
  import Hello from './Hello';
  
  function App() {
      return (
      	<Hello name="리액트" color="red" />
      )
  }
  
  export default App;
  
  // Hello.js
  // 1. 일반
  
  import React from 'react';    
  
  // props에는 우리가 넣어준 값들이 객체 형태로 존재한다. 
  // 확인해보고 싶다면, console.log(props); 로 확인해보자.
  function Hello(props) {   
   // console.log(props); => {name: "react"}
    	return <div style={{
  		color:props.color
      }}>안녕하세요 {props.name}</div>;    
  }	// style에서 중괄호가 2개 겹친 것은 style 부여시 객체 형태로 입력해야 하는 것과 데이터 바인딩을 위한 중괄호이다.
  
  export default Hello;  
  
  
  // 2. 비구조화 할당, 구조 분해 문법 사용
  // props를 적어주지 않아도 된다.
  
  import React from 'react';    
  
  function Hello({ color, name }) {    // props 미리 추출
    	return <div style={{
  		color
      }}>안녕하세요 {name}</div>;    
  }	
  export default Hello;  
  ````

  

+ `defaultProps`

  + props 기본값 설정

  + 특정 값을 빠트렸을 때 기본적으로 사용(출력)할 값

    ````js
    // App.js
    import React from 'react';  
    import Hello from './Hello';
    
    function App() {
        return (
            <>
        	  <Hello name="리액트" color="red" />
              <Hello color="pink" />   		// name 삭제
            </>
        )
    }
    
    export default App;
    
    // Hello.js
    import React from 'react';    
    
    function Hello({ color, name }) {    // props 미리 추출
      	return <div style={{
    		color
        }}>안녕하세요 {name}</div>;    
    }	
    
    Hello.defaultProps = {
        name: '이름없음'
    };
    export default Hello;  
    ````

  

+ `childrenProps` 

  + component로 특정 내용, 태그 등을 감쌌을 때 값을 주기 위해 사용

  + Children 자체가 component로 감싼 내용을 지칭함

    ````js
    // Wrapper.js
    
    import React from 'react';
    
    function Wrapper({ children }) {
        const style = {
            border: '2px solid black',
            padding: 16
        };
        
        return <div style={style}>{children}</div>
    }
    
    export default Wrapper;
    
    // App.js
    import React from 'react';  
    import Hello from './Hello';
    import Wrapper from './Wrapper'
    // 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.
    
    function App() {
        return (
            <Wrapper>
        	  <Hello name="리액트" color="red" />
              <Hello color="pink" />   		// name 삭제
            </Wrapper>
        )
    }
    ````

    

4. **state**

+ 동적. 중요하고 자주 바뀌는 데이터에 사용

+ `state`?

  + 변수 대신 쓰는 데이터 저장공간

+ `useState()`를 이용해 만든다 - React에 있는 내장 함수

+ `useState()` 내에 문자,숫자,array,object 모두 저장 가능

+ state에 데이터를 저장해놓는 이유

  + 웹이 App처럼(React를 웹앱처럼) 동작하게 만들고 싶기 때문
  + state는 변경되면 html이 자동으로 재렌더링 된다. 그러므로 그냥 변수에 넣어 데이터를 저장하는 것 보다 수정, 순서 변경 등에 용이하다.
  + 예를 들어 제목 수정 시에 일반 변수에 저장하는 것과 달리 새로고침 없이 재렌더링이 가능하다.

  ````js
  import React, { useState } from 'react';
  
  function List() {
  
    let [theme, themeChange] = useState(['남자 지갑 추천', '남자 향수 추천', '남자 신발 추천']);
  
    return <>
      <div className="list" >
        <h3> { theme[0] } </h3>
        <p>3월 11일 발행</p>
        <hr />
      </div>
      <div className = "list" >
        <h3> { theme[1] } </h3>
        <p>3월 11일 발행</p>
        <hr />
      </div>
      <div className = "list" >
        <h3> { theme[2] } </h3>
        <p>3월 11일 발행</p>
      <hr />
      </div>
      </>
  }
  
  // useState 함수는 실행하고나면 2개의 데이터를 담고 있는 array가 하나 남게되는데 
  // [a,b] - 여기서 a는 ''내의 데이터를 포함하고 있으며 b는 해당 state를 정정해주는 함수이다.
  // [state데이터, state 데이터 변경 함수]
  ````

  

5. `JSX에서 CSS 작성하기`

+ 기본 문법

  + object 형식(객체)을 사용

    + `style = {object 자료형으로 만든 스타일}`

      ````js
      <div style={ color : 'blue' }> 개발 Blog</div>
      ````

  + 변수에 할당

    + 예시

      ````js
      let posts = { color : 'blue' }
      <div style={ posts }> 개발 Blog</div>
      ````

    

+ External stylesheets

  + CSS 파일을 따로 생성하지 않고 Bootstrap과 같은 외부 CSS 라이브러리를 사용할 때 씀

  + `import` 하여 함수 내에 `className`으로 가져온다.

    

+ Inline styling

  + style 속성값에 일반 문자열이 아닌 JS 객체 할당

  + camelCase로 작성

    ````js
    // 예시1
    function App() {
        return {
            <div style={{color : "red"}}>
                <h1>Title</h1>
    		</div>
        };
    }
    
    // 예시2
    
    const style ={
        color : "blue"
    }
    
    function App() {
        return {
            <div style={style}>
                <h1>Title</h1>
    		</div>
        };
    }
    ````

    

+ CSS Modules

  + React 프로젝트의 규모가 커짐에 따라 발생되는 CSS 클래스 이름이 중복되는 경우 방지

  + 즉, Overlay 문제 방지

    ````js
    // 사용 방법
    import style from './App.module.css'
    // 일반적으로 App.css 가 아닌 .module.css로 저장 후 import
    // .module.css로 저장함으로써 고유화됨.
    // 즉, 파일 경로 이름과 해시값 등을 포함하는 고유한 객체를 불러옴
    // 이렇게 되면 .module.css에 있는 고유한 특정 class들을 가리키게됨
    ````

    

