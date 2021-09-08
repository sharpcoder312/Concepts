## React Concepts

#### 1. React를 왜 사용하는가?

- 탄생배경

  - 사용자와의 인터렉션 多 => 동적으로 UI를 표현해야한다면 처리해야할 이벤트와 DOM간의 규칙이 복잡해지며 관리(유지 및 보수)하기도 매우 힘들어짐

  - 앵귤러, 백본 등의 라이브러리들은 특정 값과 특정 DOM간의 규칙을 만들어서 업데이트를 간소화함. 반면에, 리액트는 어떠한 상태가 변경됐을 때 업데이트 규칙을 정하는 것이 아닌 Virtual DOM 내에서 다 날리고 새로 업데이트함. 이는 'UI를 어떻게 업데이트 할 것인가'가 아닌 'UI를 어떻게 변경할것인가'에 초점을 맞출 수 있음.

  - tip) 상태관리?

    객체지향 프로그래밍에서는 기본 단위가 객체이고, 프론트엔드에서는 비슷한 개념으로 컴포넌트(일종의 UI 조각)라는 용어를 사용한다. 객체가 인스턴스 변수(데이터)로 상태를 갖고 있듯이 컴포넌트도 상태(데이터)를 가질 수 있다.

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

  ```jsx
  - JSX? JS 파일 내에서 html 태그를 사용하는 문법. (JS에서 확장된 문법이라고 생각하면됨)
  - compile 이후 JSX 표현식이 정규 JS함수 호출이 되며 JS 객체로 인식되기 때문에 JSX 또한 JS와 같이 if문이나 for문을 사용할 수 있으며 변수 할당 및 인자로 받아들이기, 함수로부터 return(반환)도 가능하다.
  
  - BABEL을 통하여 HTML 형태의 JSX 코드가 JS로 변환
  - BABEL은 JS 컴파일러이다. 자세한 사항은 Babeljs.io 에서 확인 가능
  - 대표적으로 JSX문법을 사용하여 XML형태로 선언하면 `React.createElement` 처럼 JS로 변환함.
  - React의 element는 '불변 객체'이며 element 생성 이후에는 해당 element와 자식 element의 속성을 변경할 수 없다. 이와 같은 이유로 UI를 업데이트 하기위해서는 새롭게 element를 생성하여 이를 `ReactDOM.render()`로 전달하는 것이다. 실제로 대부분의 React앱은 `ReactDOM.render()`를 한 번만 호출한다.
  
  const element = (
    <h1 className="title">
      fantastic topic!
    </h1>
  );
  
  위와 아래의 예시는 동일하다.
  
  const element = React.createElement(
    'h1',
    {className: 'title'},
    'fantastic topic'
  );
  
  => const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
  
  
  - 이렇게JSX를 JS로 변환하기 위해서는 몇 가지 규칙을 준수해야 한다.
  ```

  

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

+ '바인딩'? 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정하는 것

  ex) 객체로 바인딩하여 구체적인 성격 확정. `{content}`

+ `{ }` 중괄호 사용 

  ````js
  // JSX의 중괄호 안에는 유효한 모든 JS 표현식을 넣을 수 있다.
  // ex) 1+1 , user.lastName , resetName(user)
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

   ![image-20210904211347359](C:\Users\Seok\AppData\Roaming\Typora\typora-user-images\image-20210904211347359.png)

+ properties의 줄임말

+ component 사용 시, 특정 값을 전달해 주고 싶을 때 사용 (정적 데이터. 읽기 전용)

+ 사실, 함수의 parameter라고 생각하면 쉽다.

  ````js
  // App.js
  import React from 'react';  
  import Hello from './Hello';
  
  function App() {
      return (
      	<Hello name="리액트" color="red" />
      )	// Hello.js 에서 props인 name과 color를 받아온 뒤 값 지정. 현재 전달해 주고 싶은 값이 name과 color이다.
  }
  
  export default App;
  
  // Hello.js
  // 1. 일반
  
  import React from 'react';    
  
  // props에는 우리가 넣어준 값들이 객체 형태로 존재한다. 현재는 App.js의 props인 name과 color를 가져온 상태이다.
  // 확인해보고 싶다면, console.log(props); 로 확인해보자.
  function Hello(props) {   
   // console.log(props); => {name: "react"}
    	return <div style={{color:props.color}}>안녕하세요 {props.name}</div>;   
  }	// style에서 중괄호가 2개 겹친 것은 1.style 부여시 객체 형태로 입력해야 하는 것과 2.데이터 바인딩을 위한 중괄호이다.
  	// 여기서 문제점은 일일이 props를 써주기 귀찮다는 것이다. 해결책 : 비구조화 할당
  
  export default Hello;  
  
  
  // 2. 비구조화 할당, 구조 분해 문법 사용
  // props를 적어주지 않아도 된다.
  
  import React from 'react';    
  
  function Hello({ color, name }) {    // props 미리 추출
    	return <div style={{color}}>안녕하세요 {name}</div>;
  // return <div style={{color: color}}>안녕하세요 {name}</div> App.js의 props인 color에서 red라는 값을 충족하기에 color도 하나만 써주면 된다.
  }	
  export default Hello;  
  
  // tip) '비구조화 할당' ?
  // 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식
  // 쉽게 말하여 '배열' 혹은 '객체' 안의 값을 편하게 꺼내 쓸 수 있는 문법
  // 참고 할만한 링크들
  // https://yuddomack.tistory.com/entry/자바스크립트-문법-비구조화-할당
  // https://learnjs.vlpt.us/useful/06-destructuring.html
  
  
  // props를 사용하지않고도 기본적으로 값을 설정하고 싶다면 defaultProps를 사용한다.
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
              <Hello color="pink" />   		// name 값 주지않음 (props를 사용하지않음)
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
    
    Hello.defaultProps = {			// 'props 기본값 설정'으로 App.js의 두번째 Hello component는 '이름없음'이라는 name을 갖게된다.
        name: '이름없음'
    };
    
    export default Hello;  
    ````

  

+ `childrenProps` 

  + component로 특정 내용, 태그 등을 감쌌을 때 값을 주기 위해 사용 (일반적인 div태그 등이 아닌 <Wrapper> 등과 같은 component를 말하는 것임.)

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
            // 현재 일반적인 div태그 등이 아닌 <Wrapper>라는 Component가 특정 내용을 감싸고있음.
            <Wrapper>				
        	  <Hello name="리액트" color="red" />
              <Hello color="pink" />
            </Wrapper>
        )
    }
    ````
    
    
  
+ `조건부 렌더링`

  + 특정 조건이 참인지 거짓인지에 따라서 다른 결과를 보임.

  + `falsy`한 값은 아무것도 나타나지 않음. `0`예외.  ex) `null`, `false`, `undefined`

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
    
    <br />


4. **state**

+ 동적. 중요하고 자주 바뀌는 데이터에 사용 ex) 컴포넌트가 보여줘야하는 내용이 사용자 인터렉션에 따라 바뀔 때

+ `state`?

  + 변수 대신 쓰는 데이터 저장공간
  + 쓰기전용

+ `useState()`를 이용해 만든다 - React에 있는 내장 함수(Hooks 중 하나)

+ **`useState()` 내에 문자,숫자,array,object 모두 저장 가능**

+ state에 데이터를 저장해놓는 이유

  + 웹이 App처럼(React를 웹앱처럼) 동작하게 만들고 싶기 때문
  + state는 변경되면 html이 자동으로 재렌더링 된다. 그러므로 그냥 변수에 넣어 데이터를 저장하는 것 보다 수정, 순서 변경 등에 용이하다.
  + 예를 들어 제목 수정 시에 일반 변수에 저장하는 것과 달리 새로고침 없이 재렌더링이 가능하다.

  ````js
  import React, { useState } from 'react';
  // react에서 useState함수를 불러온다 .
  
  function List() {
  
    const [theme, themeChange] = useState(['남자 지갑 추천', '남자 향수 추천', '남자 신발 추천']);
  
  
    return (
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
      )
  }
  
  // useState 함수는 실행하고나면 2개의 데이터를 담고 있는 array가 하나 남게되는데 
  // [a,b] - 여기서 a는 ''내의 데이터를 포함하고 있으며(현재상태 표시) b는 해당 state를 정정해주는 함수이다. b는 함수라는 사실을 반드시 기억하자.
  // [state데이터, state 데이터 변경 함수]
  // 사실 위 useState는 아래의 코드를 배열 비구조 할당(구조 분해)를 통해서 더 쉽게 쓴 것이다.
  const themeState = useState();
  const theme = themeState[0];
  const themeChange = themeState[1];
  ````

+ state 수정하기

  + React의 요소(element)는 **불변객체**이기에 기존의 state를 반드시 복사한 뒤 업데이트 해야한다.

  + 'state 변경함수'를 사용하지 않고 그냥 state를 변경한다면 무한 재렌더링이 되므로 꼭 변경함수를 사용한다. (컴포넌트 업데이트 성능 최적화와 관련)

  + 변경함수는 기존 데이터를 아예 갈아 엎는다.

    ````js
    const [like, likeChange] = useState(0);
    const clickLike = () => {
      likeChange(like + 1);	
    }	// like가 아닌 likeChange (변경)함수를 이용하여 수정
      
    <h3> <span onClick={ clickLike }>👍</span> { like } </h3>
        
    // React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없다. 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 된다.
    ````

  + **Array, Object state 데이터 수정 방법**

    ````js
    // Array와 Object 모두 상태 불변성을 위해 기존의 것을 복사한 뒤 생성해야한다는 점은 동일하지만 방법은 약간 차이가 있다.
    // Array - 추가 : ...spread && concat // 제거 : filter // 특정 값 수정 : map
    // Object - ...spread
    
    // 가정 : 배열 내의 '남자 지갑 추천' -> '여자 지갑 추천'으로 변경
    const [theme, themeChange] = useState(['남자 지갑 추천', '서울 맛집 추천', '리액트독학']);
    const clickGender = () => {
        const newGender = [...theme]	// step 1) 기존의 상태를 새 변수에 복사한다.
        newGender[0] = '여자 지갑 추천'	// step 2) 카피본에 수정사항 반영
        themeChange(newGender);			// step 3) 변경함수()에 집어넣기
      }
    // const newGender = theme 이렇게 쓰게되면 이것은 복사의 의미보다는 값 공유의 의미가 된다.
    // 그러므로 deep copy를 사용하여 복사본을 만들어야 한다.
    // '...' spread operator(ES6문법)를 사용하여 배열과 객체의 값만 가져온 뒤,
    // [], {}를 사용하여 새로운 복사본을 만들어준다. ex) {...object}
    // deep copy는 단순히 값 공유가 아닌 새로운 복사본(별개의 Array, object)을 만들어준다.
    
    // React의 state data를 이런 식으로 다루는 이유는 React에서 state data는 
    // immutable(불가변. 직접 수정x) 하도록 의도하고 있기 때문이다. (개발자들의 의도)
    
    // state data를 바꿀 때 가장 중요한 것은 변경 함수에 들어갈 수 있는 건 본래 array나 object와 유사하거나 거의 같은 자료형이여야 한다는 것이다. 자료형이 숫자든 문자열이든 이런 식으로 자료형을 맞추어 똑같이 변경 함수에 넣어줘야한다.
    // 예를 들어, state data가 배열일때 변경 함수에 문자열을 넣어서 변경해서는 안된다는 것이다.
    
    // tip) Hooks가 등장하면서 함수형 컴포넌트에서도 상태를 관리할 수 있게됨
    ````
    
    <br/>

5. **useRef**

+ 사용 용도 1) 리액트 환경에서 DOM을 직접 선택할 시 사용 ( `useState`와 같이 리액트 Hook 중 하나.)

  ex) 특정 element의 크기, 위치 // 스크롤바 위치 가져오기 등

  + 순서
    + `useRef` import하기
    + `useRef` 호출하여 객체 만들기
    + 원하는 DOM에 `ref` 객체 추가

+ 사용 용도 2) useRef로 component 안의 변수 만들기

  ````jsx
  // 예시
  // 컴포넌트 안에서 let 키워드로 변수를 선언했다고 가정했을 때 다름 리렌더링시 let으로 선언한 변수 값은 초기화된다. 만약 계속 유지하고 싶은 상태 값을 관리하려면 `useState`를 사용해야 하는데, 이 경우에 상태를 바꾸게된다면 component가 리렌더링된다. 하지만, 특정 값을 바꿨을 때 (비동기와 유사) 굳이 리렌더링할 필요없는 값을 관리해야할 때도 있다. 이 경우에 `useRef`를 사용한다.
  // 즉, 정리하자면 component가 리렌더링될 때마다 특정 값을 계속 기억할 수 있도록 관리할 때 사용할 수 있다. => `useRef`로 관리하는 값은 바뀌어도 component가 리렌더링 되지않는다.
  // ex) setTimeout, setInterval의 id | 외부라이브러리를 사용하여 생성된 인스턴스 | Scroll 위치 | 배열의 새 항목 추가 시 고유 아이디 관리 등
  ````

  

6. **배열 렌더링**

````jsx
import React from 'react';

function User({user}) {
  return (
      <div>
        <b>{user.username}</b><span>({user.email})</span>
      </div>
  )
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'seok',
      email: 'seok.@example.com'
    },
    {
      id: 2,
      username: 'seokk',
      email: 'seokk.@example.com'
    },
    {
      id: 3,
      username: 'seokkk',
      email: 'seokkk.@example.com'
    },
  ];

  return ( // ( 원시적 방법 )
    <div>
      <div>
        <b>{users[0].username}</b><span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b><span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b><span>({users[2].email})</span>
      </div> 
      {/* 배열 index마다 일일이 추가해준 것이 맘에 들지않는다. */}
    </div>
  )

  return ( // 배열의 수가 고정적일때
    <div>
      <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/>
    </div>
  )

  return ( // 배열의 수가 고정x 일때 - map함수 사용. map함수의 용도를 생각해보면 배열 각 원소들을 변환하기 위해 사용하는데, 현재 객체 상태의 각 원소들을 element 상태의 각 원소들로 변환해야 하기 때문에 map함수를 쓰는 것이다.)
    <div>
      <h5>11 배열의 렌더링</h5>
      {
        users.map(
          user => (<User user={user} key={user.id} />) // 각 child(현재는 User)는 key props이 있어야함. key props은 각 원소들 마다 고유값을 줌으로써 리렌더링 성능을 최적화해줌.
          )
        // users.map (
        //   (user, index) => (<User user={user} key={index} />) // key로 사용할 고유값이 없을 때는 map 콜백함수의 두번째 parm인 index값을 사용하자. 하지만 이렇게한다고해서 성능이 좋아지는 것은 아니니 index를 넣어주는 것을 될수있으면 피하도록하자.
        // ) // key가 없으면 각 배열의 원소가 정확히 어떤 것을 렌더링 해야하는지 잘 모른다. 단순히 자신의 index값만 기억할 뿐이다.
      }
    </div>
  )
}

export default UserList;
````

7. `UseEffect`

+ 컴포넌트가 화면에 나타나고 사라질 때(마운트, 언마운트) 특정 작업 처리 가능
+ 컴포넌트의 props나 state가 바뀌어서 업데이트될 때,되기 전 특정 작업 처리 가능 
+ 리렌더링될 때 특정 작업 처리 가능
+ useEffect 내에 first parm으로 들어가는 함수는 마운트, 언마운트, 업데이트 직후에 일어남

````jsx
// 1. 마운트될 때
useEffect(() => {
    console.log('컴포넌트가 화면에 나타남')
}, [])
// first parm에 실행하고 싶은 함수
// second parm에 배열을 넣어줌 dependency를 요약하여 deps라고함. 의존되는 값들을 배열 내에 넣어주면 되며 의존되는 값들이 없을 때 즉, 해당 배열이 비어있을 때(빈 배열)는 컴포넌트가 화면에 마운트 될 때에만 실행된다.

// tip) 컴포넌트가 마운트될 때 보통 처리하게되는 작업들
// 1 - prop로 받은 값을 컴포넌트의 state로 설정
// 2 - 외부 특정 api 호출
// 3 - D3, Video.js 사용
// 4 - setInterval, setTimeout 등


// 2. 언마운트될 때
useEffect(() => {
    return () => {
        console.log('컴포넌트가 화면에서 사라짐')
    }
}, [])
// 클리너 함수를 반환(return)해준다. 클리너 함수는 쉽게 말해 일종의 '뒷정리 함수'라고 생각하면 되겠다.

// tip) 컴포넌트가 언마운트될 때 보통 처리하게되는 작업들
// 1 - clearInterval, clearTimeout
// 2 - 라이브러리 인스턴스 제거


// 3. 업데이트될 때
useEffect(() => {
    console.log('user 값이 설정됨')
    console.log(user)
    return () => {
        console.log('user 값이 바뀌기 전')
        console.log(user)
    }
}, [user])
// deps에 어떠한 값을 넣게된다면(deps에는 보통 props나 state가 들어간다.) 해당 값이 바뀌기 직전에 클리너 함수(return하는 함수)가 호출되며 바뀐 직후에는 클리너 함수를 제외한 userEffect에 등록한 함수가 실행된다.
// deps에 값이 있을 때는 업데이트 뿐만아니라 마운트 될 때에도 실행된다. 물론, 클리너 함수를 제외한 userEffect에 등록한 함수가 실행된다.
// deps에 값이 없을 때는 deps에서 가리켜야하는 값이 최신 업데이트 되지않고 이전의 값을 가리키게 된다.
// 또한, useEffect함수 내에서 또 다른 함수를 사용하게 된다면 마찬가지로 deps에 해당 함수를 넣어줘야할 것이다.


// 번외) deps가 아예 생략 됐을 때
useEffect(() => {
	console.log(user)
});
// 리액트에서는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 되는데, 여기서 또한 deps를 생략하게 되만 선택한 자식 컴포넌트 뿐만아니라 모든 자식 컴포넌트(가정 : UserList > User)가 업데이트 된다. UI상으로는 제대로 작동하는 것처럼 보이며 virtual DOM내에서 리렌더링 되기 때문에 크게 문제가 생기지는 않아보이지만, 이는 컴포넌트의 양이 많아질수록 컴포넌트 리렌더링 성능 최적화에 문제를 유발할 수 있다.


// 실제 사용 예시
useEffect(() => {
    loadPost(username, urlSlug);
}, [username, urlSlug])
// 주소가 바뀔 때 props 또한 바뀌게되면서 useEffect를 통해 새로운 포스트를 불러온다.
````

<br />

8.`useMemo`

````jsx
// 기존의 문제점 ex) 보통 input창에 문자열을 입력해줄 때마다 상태가 바뀌면서 리렌더링됨. clg찍어보면 안다! - useMemo로 해결

// 이전에 연산된 값을 재사용
// 원하는 값이 바뀌지 않았다면 상태를 바꿀 때마다 리렌더링되는 것을 막고 이전의 값을 재사용할 수 있게한다 => 결국 성능 최적화
// 원하는 값이 바뀌었을 때만 특정 함수를 실행시켜 연산을 실행하도록함
// 쉽게 말해, useMemo를 사용하게되면 필요한 연산을 정말 필요할 때만 할 수 있게된다.


// useMemo(() => function, input) // 첫번째 parm은 함수 두번째 parm은 deps

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const count = useMemo(() => countActiveUsers(users), [users])
// useMemo()의 deps내에 들어있는 값인 users가 바뀔 때만 countActiveUsers() 함수가 호출되며 그렇지 않다면 이전에 연산된 최근 값을 재사용한다.
````

