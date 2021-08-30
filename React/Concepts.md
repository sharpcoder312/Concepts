## React Concepts

#### 1. React를 왜 사용하는가?

- 탄생배경

  - 사용자와의 인터렉션 多 => 동적으로 UI를 표현해야한다면 처리해야할 이벤트와 DOM간의 규칙이 복잡해지며 관리(유지 및 보수)하기도 매우 힘들어짐

  - 앵귤러, 백본 등의 라이브러리들은 특정 값과 특정 DOM간의 규칙을 만들어서 업데이트를 간소화함. 반면에, 리액트는 어떠한 상태가 변경됐을 때 업데이트 규칙을 정하는 것이 아닌 Virtual DOM 내에서 다 날리고 새로 업데이트함. 이는 'UI를 어떻게 업데이트 할 것인가'가 아닌 'UI를 어떻게 변경할것인가'에 초점을 맞출 수 있음.

  - Virtual DOM 은 메모리 안에서 가상으로 존재하는 돔으로써 직접 실제 DOM을 보여주는 것보다 작동 성능이 훨씬 좋다. (속도가 빠르다.)

  - One way Data Flow(단방향 데이터)의 특성을 가지기에 하나의 Watcher를 사용하여 데이터 추적이 쉽고 성능이 좋다. (이슈 해결에 용이)

    ![image-20210828114402729](C:\Users\Seok\AppData\Roaming\Typora\typora-user-images\image-20210828114402729.png)

- 데이터 바인딩이 쉽다.

  tip) 데이터 바인딩?

  - 서버에서 받아온 데이터를 js로 저장한 다음 html에 해당 데이터를 넣는 것
  - ex) 전통적인 js 데이터 바인딩 - `document.getElmentById()`

- component 기반의 라이브러리로써 중복될 수 있는 부분들을 각각의 component로 묶어 개발함에 있어서 유지 보수에 유리하며 재사용성 또한 좋다.

- tip) Node.js를 설치한 이유
  - create-react-app 라이브러리를 사용하기 위해서 설치
  - node.js를 설치하면 **npm**이라는 툴 이용가능
  - npm은 또한 제이쿼리, 부트스트랩 등 라이브러리를 설치하기 쉽게 도와줌

#### 2. React app 설치 시 자동 생성되는 폴더 및 파일

- `App.js`
  - 메인페이지에 들어갈 HTML 짜는 곳
  - 실질적인 메인페이지는 public 폴더의 index.html
  - App.js -----by index.js-----> index.html
- `node_modules`

  - 라이브러리 모은 폴더
  - react app을 사용하기 위해서는 여러가지 라이브러리들이 필요하다.

- `public`
  - static 파일 보관함
  - static? 동적으로 잘 바뀌지 않는 파일들
- `src`
  - 소스코드 보관함. 실질적 코딩
- `package.json`
  - 내가 설치한 라이브러리를 모두 모아놓은 파일
  - npm으로 라이브러리를 설치할 때마다 버전 등이 기록 된다.

#### 3. 작동 원리

- `index.js`

  ```js
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')

  // 'document(페이지)에서 Id값이 root인 것을 찾아서 react App을 그 안에다가 넣겠다.'라는 의미
  // 물론, id가 root인 것은 public폴더에서 index.html보면 찾을 수 있다.
  // 결국 react component가 rendering될 때는 해당 component가 html형태(JSX)로 만들어져서 id가 root인 곳에 삽입이 되는 것이다.
  // 예를 들어, App.js에 있는 내용들이 html형태로 만들어져서 public의 index.html root부분에 삽입되는 것이다.
  // App.js  -----by index.js-----> index.html
  ```

- `JSX` -> ~`JS`

  - JSX? JS 파일 내에서 html 태그를 사용하는 문법. (JS에서 확장된 문법이라고 생각하면됨)

  - BABEL을 통하여 HTML 형태의 JSX 코드가 JS로 변환

  - BABEL은 JS 컴파일러이다. 자세한 사항은 Babeljs.io 에서 확인 가능

  - 대표적으로 JSX문법을 사용하여 XML형태로 선언하면 `React.createElement` 처럼 JS로 변환함.

  - 이렇게 변환을 위해서는 몇 가지 규칙을 준수해야 한다.

  - 규칙 1 - **Tag는 꼭 닫혀있어야 한다.**

    - 태그 사이에 내용이 있는 경우 - 닫는 태그 사용

      ```js
      <div>content</div>
      ```

    - 태그 사이에 내용이 없는 경우 - self closing 태그 사용

      ```js
      <input />
      <br />
      ```

  - 규칙 2 - **2개 이상 tag는 꼭 하나의 tag로 감싸주어야 한다.**

    ```js
    <>
      <Hello />
      <div>안녕하세요</div>
    </>

    // 위 예시처럼 감싸 줄 때 굳이 div와 같은 태그를 사용하지 않고, flagment를 사용하여 감싸줄 수도 있다.
    ```

  - tip ) 주석 넣는법

    ```js
    // 1. 중괄호 사용
    {
      /* 이것은 xxx입니다.! */
    }
    
    // 2. Tag 여는 부분 or selfClosing Tag
    <HEllo
    // 이런식으로 작성
    />;
    ```

#### 4. 기본 개념

1. `className`

````js
// tag에 class주기
<div className="클래스명"></div>

// HTML이 아닌 JSX에서는 class를 줄 때에, JSX가 객체지향의 개념을 가지기에 class가 아닌 className이라고 입력한다.
// 물론 카멜표기법 camelCase을 이용하여 작성한다.
// component의 함수명 첫 글자에는 반드시 대문자를 넣어주자.

// for문 또한 'htmlFor'을 사용한다.
<span htmlFor="제목">header1</span>
````



2. 데이터 바인딩

+ `{ }` 중괄호 사용 

  ````js
  // 정적 데이터에 많이 사용하며, 동적 데이터는 state를 많이 사용한다.
  // state에 대한 설명은 아래에 있다.
  
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

+ component 사용 시, 특정 값을 전달해 주고 싶을 때 사용

+ 사실, 함수의 parameter라고 생각하면 쉽다.

  ````js
  // App.js
  import React from 'react';  
  import Hello from './Hello';
  
  function App() {
      return (
      	<Hello name="리액트" color="red" />
      )	// Hello.js 에서 props인 name과 color를 받아온 뒤 값 지정
  }
  
  export default App;
  
  // Hello.js
  // 1. 일반
  
  import React from 'react';    
  
  // props에는 우리가 넣어준 값들이 객체 형태로 존재한다. 
  // 확인해보고 싶다면, console.log(props); 로 확인해보자.
  function Hello(props) {   
   // console.log(props); => {name: "react"}
    	return <div style={{color:props.color}}>안녕하세요 {props.name}</div>;   
  }	// style에서 중괄호가 2개 겹친 것은 style 부여시 객체 형태로 입력해야 하는 것과 데이터 바인딩을 위한 중괄호이다.
  
  export default Hello;  
  
  
  // 2. 비구조화 할당, 구조 분해 문법 사용
  // props를 적어주지 않아도 된다.
  
  import React from 'react';    
  
  function Hello({ color, name }) {    // props 미리 추출
    	return <div style={{color}}>안녕하세요 {name}</div>;    
  }	
  export default Hello;  
  ````

  

+ `defaultProps`

  + props 기본값 설정

  + 특정 값을 주지않아도 기본적으로 사용(출력)할 값

    ````js
    // App.js
    import React from 'react';  
    import Hello from './Hello';
    
    function App() {
        return (
            <>
        	  <Hello name="리액트" color="red" />
              <Hello color="pink" />   		// name 값 주지않음
            </>
        )
    }
    
    export default App;
    
    // Hello.js
    import React from 'react';    
    
    function Hello({ color, name }) {    
      	return <div style={{
    		color
        }}>안녕하세요 {name}</div>;    
    }	
    
    Hello.defaultProps = {			// props 기본값 설정
        name: '이름없음'
    };
    
    export default Hello;  
    ````

  

+ `childrenProps` 

  + component로 특정 내용, 태그 등을 감쌌을 때 값을 주기 위해 사용

  + Children 자체가 component로 감싼 내용을 지칭함

    ````jsx
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
              <Hello color="pink" />
            </Wrapper>
        )
    }
    ````
    
    
  
+ `조건부 렌더링`

  + 특정 조건이 참인지 거짓인지에 따라서 다른 결과를 보임.

  + `falsy`한 값은 아무것도 나타나지 않음. `0`예외.  ex) null, false, undefined

  + 가장 기본적으로는 `3항 연산자`를 사용하나, 경우에 따라 `end연산자`를 활용하기도함.

    ```jsx
    // App.js
    import React from 'react';  
    import Hello from './Hello';
    import Wrapper from './Wrapper'
    // 사실 import는 함수에 불러올 component를 입력하면서 자동 완성 기능을 통해 불러올 수도 있다.
    
    function App() {
        return (
            <Wrapper>
        	  <Hello name="리액트" color="red" isSpecial={true} />
                {/* boolean 설정시, 값인 true, false를 생략하면 기본적으로 true로 받아옴*/}
              <Hello color="pink" />
            </Wrapper>
        )
    }
    
    export default App;
    
    
    
    
    
    // Hello.js
    import React from 'react';    
    
    function Hello({ color, name, isSpecial }) {    
        return <div style={{color}}>
          {isSpecial ? <b>*</b> : null} {/* 조건부 연산자 (보통 true와 false의 내용이 다를때 사용 */}
          {/* {isSpecial && <b>*</b>}  and연산자 (유무 구현) */}
                안녕하세요 {name}
              </div>;    
    }	
    
    Hello.defaultProps = {			// props 기본값 설정
        name: '이름없음'
    };
    
    export default Hello;  
    ```
    
    
