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
