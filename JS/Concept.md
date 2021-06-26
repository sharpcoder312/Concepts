## JavaScript Concepts

<br/>

#### 들어가기에 앞서 (Intro)

+ '프로그램' 이란?

  + 컴퓨터 메모리에 적재된 이후 실행되기 전부터의 상태 (기계만 처리할 수 있을만큼 매우 복잡한 상태)
  + ex) PowerPoint.exe를 클릭해서 메모리에 적재된 그 상태부터를 프로그램이라 칭함 (이후 cpu가 처리)

+ '프로그래밍' 이란?

  + 위의 '프로그램'을 짜는 행위 
  + 이를 위해 '개발자'는 '사용자'와 달리 <u>복잡성을 제어하는 방법</u>을 갈구해야하며 좋은 개발자가 되기 위해서는 먼저 **'복잡성에 대한 정복'**이라 할 수 있다.

  <br/>

  <br />

#### 작동 방식 (How it works)

+ **Compile Language** 작동 방식

  <table>
      <tr>
          <th>1. Language Code (사람에게 친절한 언어)</th>
          <td><b>Lint Time</b> - Language Code의 오류를 잡아주고 힌트를 줌 ex) VSC</td>
      </tr>
     <tr>
         <th>2. Machine Language (기계가 이해할 수 있는 언어)</th>
         <td><b>Compile Time</b> - Comepile 오류를 잡아줌 </td>
      </tr>
      <tr>
         <th>3. File</th>
         <td>프로그램이 될수있는 파일</td>
      </tr>
      <tr>
         <th>4. Road</th>
         <td>메모리 적재</td>
      </tr>
      <tr>
         <th>5. Run</th>
         <td><b>Run time</b> - 프로그램 실제 실행</td>
      </tr>
      <tr>
         <th>6. Terminate</th>
         <td>메모리에서 내려가서 프로그램 종료</td>
      </tr>
  </table>

  + ex) C, C++
  + 원리 : 실제 cpu가 소화할 수 있는 명령 체계로 코드를 짜기 어렵기에 사람에게 친절한 언어를 쓰고 다시 기계가 이해할 수 있는 언어로 바꾼다.
  + error로 인해 프로그램을 수정할 수 있는 기회가 lint, compile, run time 3번 있지만 'context error'와 같이 마지막 runtime error에도 길리지 않는 것이 있다.
  + 결국, lint time때 미리 에러를 잡아주는 것이 좋다.

<br/>

+ **Script Language** 작동 방식 (Runtime Language, interpreter Language)

  <table>
      <tr>
          <th>1. Language Code</th>
          <td><b>Lint Time</b> (js에 빗대어 설명)</td>
      </tr>
      <tr>
         <th>2. File</th>
         <td>js 파일로 저장</td>
      </tr>
      <tr>
         <th>3. Road</th>
         <td>메모리 적재</td>
      </tr>
      <tr>
         <th>4. Machine Language</th>
         <td>auto compile(부분적 컴파일) - 자기가 알아서 매번 바꿈</td>
      </tr>
      <tr>
         <th>5. Run (Run Time)</th>
         <td><b>Run time</b> - js 실행, type이 정해짐</td>
      </tr>
      <tr>
         <th>6. Terminate</th>
         <td>메모리에서 내려가서 프로그램 종료</td>
      </tr>
  </table>

  + ex) JS

  + 현대의 패러다임은 복잡한 compile과정 없이 즉시 실행할 수 있는 Runtime Script 개념을 도입했다.

  + Compile Time 존재 X

  + runtime error를 잡는 것은 매우 어렵다.  ex) 함수 a에서 문제가 있을때 b만 실행시키면 오류를 잡을 수가 없다.
    그렇기 때문에 스크립트 언어에서는 이를 보완하기위한 여러가지 요소가 필요하다.
    ex) Complie Language 스타일로 코드를 짜게끔 만드는 플랫폼 ex) typescript
    ex) Script Language의 개발론을 따르게 하는것 - 복잡성을 정복하기 위한 유일한 수단 **격리(isolate)** - 일(run)의 구분

  + **Run Isolate**

    1. 해당 run의 기저(base) 함수, 클래스 등 선언
    2. 해당 run의 응용(extended) 함수, 클래스 등 선언
    3. 함수, 클래스 등의 사용

    ````js
    // RUN
    
     Declare Base Function, class ...
               static time
     ---------------------------------
                 run time
     Declare Extended Function, class ...
               static time
     ---------------------------------
                 run time
     Use Function, class ...
     
    // 각각을 추상 레이어로 생각하면 각 레이어 사이에는 static time과 run time으로 나뉜다.
    // script 개발론에서는 위와 같이 error를 더 잘 찾기위해서 의미론적인 관리론을 도입한다.
    // 즉, 복잡성을 정복하는 가장 기본적인 전략은 'isolate'라 할 수 있다.
    // 또한 위 행위는 어떠한 error가 발생했을 때 레이어를 구분함에 따라 누구의 책임인지를 확정지을 수 있다.
    ````

    <br/>

+ 두 작동방식의 기계어 해석(≒compile) 차이

  + Compile Language
    + 전체의 결과를 하나의 파일로 만들기위해 모든 Language code를 빠짐없이 한번에 해석

  + Runtime Language

    + 현재 바라보고 있는 파일만 검사(일부)

    + 더 나아가 한 파일 내에서도 부분적으로 머신코드로 바꾸고 나머지 코드는 해석하지 않는다.

    + ex)  js 에서 함수 안에 문제가 있다하더라도 그 함수를 호출하기 전까지는 전체적으로 잘 돌아간다.

    + 그러므로 컴퓨터의 전체 검사(≒Compile Language)가 아닌 부분 검사(≒Runtime Language)는 인간에게 더욱 더 강한 책임을 부여한다고 볼 수 있다.

      <br/>

      <br />

#### 특성

+ 브라우저와 JS

  + 각 브라우저가 사용하는 JS 엔진
    + 크롬, 엣지, 오페라 : VB (오픈소스 엔진)
    
    + 파이어폭스 : 스파이더몽키
    
    + 사파리 : 웹킷
    
      <br/>
  + 클라이언트 => 확장 

    + 자바스크립트 엔진이 브라우저 밖을 나오는 것을 의미함

    + ex) node.js 서버 // electron 데스크탑 앱 제작 // react native 모바일 앱 제작 등등

      <br/>

  + 참고사항

    + 브라우저의 console 기능
      
      + REPL(Read-Eval-Print Loop) 원리 사용
      + console창에 입력원리는 console이 통상적으로 많이 쓰이기 때문에 Node.js와 Web 모두 console에 관련된 API들이 있다. 또한, 이 API들의 인터페이스가 둘다 동일하다.
      + JS에 포함된 것이 아닌 웹 API중 하나. 즉, 브라우저에서 기능 제공.
      + console창에서도 JS 실행이 가능하기 때문에, 동적으로 요소 검사 가능.
      + Sources 탭에서 break point를 이용하여 디버깅 기능도 사용 가능
      
    + 줄바꿈 기능
    
      + [Shift + Enter]를 누르거나 \n으로 표현
      + 여러 줄을 원한다면 그 만큼 \n을 입력하면 된다
      + 백틱 ``을 사용할 시  \n을 사용하지 않아도 된다
    
      ````js
      <콘솔창>
      
      > "한 줄\n두 줄"
      < `한 줄
         두 줄`
      ````
    
      <br/>
      
      <br />

#### 구성 요소

+ **LEXICAL GRAMMAR 어휘 문법**

  =>  JS에서 문자는 **유니코드**로 표현하며 JS에서 가장 기본적인 단위(Token)의 규칙을 'LEXICAL GRAMMAR'이라 한다.

  <br/>

  + **Control Character 제어 문자**

    + 눈에 보이지 않지만 스크립트 소스의 본문 해석을 제어하는 데 사용된다.

    + ex) 특정 언어(이란, 태국 등) 에 사용

      <br/>

  + **White Space 공백 문자**

    + 말그대로 공백을 표현하는 문자이며 토큰을 구분한다.
    + tip) 'Token 토큰'은 프로그래밍 언어에서 가장 최소한의 단위를 뜻한다.

    + ex) `space(U+0020)`, `tab(U+0009)` 등

    <br/>

  + **Line Terminators 개행문자**

    + 일명 '줄바꿈 문자'라고도 하며 줄과 줄을 구분한다.
    + ex) `Line Feed(U+000A)-UNIX`, `Carriage Return(U+000D)-Mac` 등

    <br/>

  + **Comments 주석**

    + 코드 실행에는 영향을 주지 않으며 코드에 대한 설명을 하거나 특정 코드가 실행되지 않도록 막아준다.
    + ex) `//` or `/* */`

    <br/>

  + **Keyword 예약어**

    + 엔진이 해당 keyword를 만나면 특정한 기능을 미리 약속한하여 실행한다.
    + ex) `if`, `for`, `var` 등

    <br/>

  + **Literals 리터럴**

    + 프로그래밍 언어에서 더이상 쪼갤 수 없는 값의 표현이다.

      ````js
      // 예시
      null // Null literal
      true // boolean literal
      123 // Numeric literal (Decimal)
      'bar' // String literal
      {a: 'bar', b: 33} // Object literal
      [2018, 2019, 2020, 2021] // Array literal
      `string text ${expression} string text` // template litera
      ````

  <br/>

+ **EXPRESSION 식**

  + '**식**' 이란? 

    + 최종적으로 하나의 값에 수용되는 것. 즉, 값의 확장된 표현

    + 값은 온전한 하나의 문장이다. 

    + 쉽게말해 '식'은 '값'이다.

      <br/>

  + **식**의 종류

    ````js
    // '값 식'
    // 값은 식이 된다. 이미 하나의 값에 수렴하고있다.
    // ex) 3, 7, a, b, true 등등
    
    // '연산식'
    // 연산자가 등장하는 식. 연산자의 결과는 값으로 수렴된다.
    // ex) let plus = 1 + 3
    // 위 예시는 '식별자'가 '식'에 포함되어 있는 형태로도 볼 수 있다.
    
    // '호출식'
    // 함수 a 호출 => a의 함수의 return값 도출. 즉, 하나의 값으로 수렴
    // return값이 없다해도 undefined가 반환되어 값으로 수렴한다.
    
    // '리터럴'
    // array literal, object literal, function literal 등
    // ex) {}, [], function(){}
    // 리터럴의 결과는 참조값
    
    // 이 모두 서로가 서로를 포함할 수 있는 관계를 가진다.
    // 또한, 모든 식들은 '값 식'이라고 봐도 무방하며 '값 식'만이 존재한다고 봐도 된다.
    // ∵ 모두 하나의 값으로 수렴하기 때문이다.
    ````

    <br/>

  + '**식**'과 '**변수**'

    + 프로그램이 실행되는 과정에서 '값'은 소비되어 사라지는 존재이기에 어디에 이용할 수도 없는 무의미한 표현이된다.

      ````js
      <콘솔창>
      > 3
      < 3
      // 메모리에서 3을 선언한 뒤 3을 소비하고 그대로 없어져버린다. 즉, 사용성을 잃어버린다.
      // 이런 단점을 상쇄시키위해 '변수'를 사용하여 그 이용성을 가질 수 있는 것이다.
      
      
      // 변수의 개념과 특성
      
      // 1. 메모리 주소의 별명
      
      let a = 1;
      // 여기서 1은 a라는 변수에 들어가 있는 것이 아니라 컴퓨터 메모리 어딘가에 들어있는 것인데 단지 그 메모리 주소가 복잡하므로 별명을 붙인 것 뿐이다.
      // 그러므로 a를 호출한다면 사실 해당 메모리 번지수에 찾아가서 값을 꺼내오는 것이다.
      
      // 2. 해당 값에 대한 type 정보 소유
      
      > typeof a
      < "number"
      ````

      <br />

+ **IDENTOFIER 식별자**

  + '**식별자**' 란? 

    + '메모리 주소의 별명', '해당 값에 대한 type 정보 소유' 이 두가지 의미를 담는 <u>특정한 이름을 지정하는 행위</u>

    + '식별자'는 변수들을 나타내긴 하지만 보다 상위적인 개념에서는 '식별자'라고 부른다.

      <br/>

  + '**식별자**'의 타입

    + **primitive value type(기본형)** vs **reference type(참조형)**

    + '메모리 주소의 별명이라는 특성을 가지는 '식별자'에는 '값(기본형)'이 들어오거나 '참조'가 들어올 수 있다. 

      ````js
      // 기본형
      let a = 3;	// 3이라는 값을 직접 씀
      
      // 참조형 '참조'? 다른 메모리의 주소를 가리키고 있는 것
      let a = [1,2,3];
      let b = a;
      
      // 기본형 예시
      // 여기서 기본형인 '값'을 쓰는 경우에 모든 '값'은 '복사'가 일어난다.
      > let a = 3;
      < undefined
      > a
      < 3
      < let b = a	// 해당 행위는 '복사 or 참조'의 의문이 생긴다.
      > undefined
      < b
      > 3	
      // 위 코드에서 우리는 a의 값인 3을 b에 참조시킨 것이 아닌 복사한 것임을 알 수 있다.
      // 즉, 현재 a의 메모리 주소에도 3이 들어가 있고 b의 메모리 주소에도 3이 들어가 있으므로 메모리 블록을 2개 쓰고있는 것이다.
      < a = 7
      > 7	// 여기서 만약 b가 참조(a의 메모리 주소를 가리키는 것)된다면 b를 조회했을 때 7이 나와야한다.
      < b
      > 3
      
      // 참조형 예시
      > a = [1,2,3];
      < [1,2,3]
      > b = a 
      < [1,2,3]
      > b
      > [1,2,3]
      // 위 코드 또한 '복사 or 참조'의 의문이 생긴다.
      > a[0] = 7
      < 7
      > b[0] // 여기서 만약 b가 참조(a의 메모리 주소를 가리키는 것)된다면 b를 조회했을 때 7이 나와야한다.
      < 7	// 즉, 값 복사가 아닌 참조가 이루어진 것이다. 현재 b는 a의 메모리 주소를 가리키고 있는 것이다.
      
      // 이와 같이 우리는 '식별자'를 primitive value type(기본형) reference type(참조형)으로 나눌 수 있다.
      // primitive value type(기본형) 복사로 인해 두개의 메모리 주소를 가리킨다는 특징
      // reference type(참조형) 하나의 메모리 주소를 가리켜 참조한다는 특징
      
      // primitive value type(기본형)
      // string, number, boolean, null, undefined, not
      
      // reference type(참조형)
      // primitive value type 제외 나머지 array, object, literal ...
      
      // tip) 무엇이 primitive value type이며 어디까지가 '문'이고 '식'인지는 artificial language이기에 해당 언어를 개발한 개발자가 정한다. 이에 의문을 가지지는 말자. 머리만 아프다. 또한, 특정 언어가 답이 아니며 상식이 아니다. 각 언어마다 개발자가 그 언어를 만든 지향점과 가치가 다르기 때문이다. 목적에 맞게 잘 쓰는 것이 중요하겠다.
      ````

    <br/>

  + **변수와 상수**

    ````js
    // 변수 : 여러 번 값 변경 o
    // 상수 : 한번 대입 후 변경 x
    
    // 프로그래밍 시에 우리는 변화가능성을 배제함으로써 복잡성과 오류를 줄일 수 있다.
    // 즉, 변수를 정의할 때에는 변해야할 일이 있을 때만 변수를 사용하는 것이 좋다.
    // 우리의 모든 노력은 복잡성을 정복하고 수정가능성을 확보하는 데에 있다.
    ````

    <br />

+ **STATEMENTS 문**

  + '**문**' 이란?
    + 값이 아닌 모든 것들. 
    + JS엔진이 어떻게 해석할 지를 알려주는 명령. 단지, 명령의 성격이기에 실행된 후에는 메모리에서 사라진다.
      그러므로 우리는 if문을 a에 할당할 수도 없고 throw도 a에 할당할 수도 없다. <u>단지 명령일 뿐이며 값이 될 수 없다.</u>

      <br />
    
  + **문**의 종류
  
    ````js
    // 1. 공문
    // 아무것도 없는 문. 비어있는 문
    > ;	// error 뜰 것 같은데?
    < undefined // 공문이 문으로 인정되었기 때문이 undefined가 출력된다.
    // 사실 공문이 '문'으로 인정된 이유는 코드를 작성 시 잔실수로 인한 오류 때문이다.
    
    // 2. 식문
    // 하나의 식은 하나의 문이 된다.
    > 3 + 5;
    < 8	// 값식 => 식문 (3+5라는 식에 ;을 붙여 문으로 만들어줌)
    
    // 3. 제어문 (sync) flow control statement
    
    // flow control 플로우 제어 (방향, 반복, 점프 등)
    // 'normal flow control' 일반적인 statement를 많이 사용하여 제어
    // vs 'sub flow control' function, class 등을 많이 사용하여 제어
    // 여러 문과 식들을 조직화하는 방법
    
    // cf) sync flow
    // 이처럼 메모리에 있는 프로그램을 Neumann machine이 순서대로 쭉 소비하는 과정을 'flow(플로우)'라고 한다.
    // 물론 이 flow 과정에서 인간은 관여할 수 없으며 요즘은 흔히 flow를 'sync(동기화 과정)'이라고도 부른다.
    // 이 과정을 어길 수 있는 다양한 기법들을 반대로 '비동기성'이라 부른다.
    // 즉, '동기성(화) 명령'이란 메모리에 적재되어있는 프로그램이 cpu에 한번에 소비되는 것을 말한다.
    
    // flow 1개의 세트가 쭉 진행되는 것을 routine이라고 부른다.
    // 보통 routine은 한 번 진입하면 끝까지 실행되고 빠져나가버린다.
    // 하지만 'call routine'은 이 개념을 깨고 원하는 위치에서 여러 번 진입하고 여러 번 빠져나갈 수 있다.
    // 즉, 복잡한 flow 제어를 가능하게한다.
    
    // 종류
    // 조건 : if , if - else
    // 반복 : while, do while, for
    // 선택 : switch - case
    // 흐름 변경 : continue, break
    
    // cf) 이렇게 종류가 다양한 이유는 뭘까?
    // 컴퓨터 언어는 Artificial Language임에도 불구하고 코드에 충분히 의도를 표현하기 위함이다.
    // ex) 어떤 문을 이용하여 알고리즘을 표현할 것인가? 단순히 변수의 이름을 보고 의도를 표현하는 것이 아니다.
    // 즉, 우리는 제어문을 배울 때 무슨 의미로 쓰이는 것인지 섬세하게 배워야한다.
    
    
    // 4. 선언문
    
    // cf) 단문과 중문
    // 단문 : 문장 하나 
    // 중문 : 문장 여러개를 묶어 하나의 문장으로 봄 '{}' 사용
    ````
    
    <br />
    
    <br />

#### Scope(스코프)와 Closer(클로저)

+ Scope

  + 변수의 라이프싸이클(살아있는 범위)

  + 변수나 함수내에 값을 찾을때 들여다보는 곳(표)

  + JS는 함수 단위로 스코프가 생성된다.

    ````js
    let d = 'D'					// 글로벌 스코프
    
    function outer(){			// outer의 스코프 시작
        let a = 1;
        let b = 'B'
        function inner(){		// inner의 스코프 시작
            let a = 2;
            console.log(b);
        }						// inner의 스코프 끝
        inner();
    }							// out의 스코프 시작
    outer();
    
    // 해당 스코프(inner)에 변수 b가 없기때문에 다음 스코프로 넘어가서 변수 b를 찾아 출력한다.
    // 이처럼 스코프끼리 연결되어 있는 것을 '스코프 체인'이라고 부르며 맨 마지막으로 넘어가는 곳이 '글로벌 스코프'이다.
    ````

+ Closer

  + 함수 밖에서 선언된 변수를 함수 내부에서 사용할 때 '스코프 체인'을 계속 들고있는 함수(환경 기억)
  + 일반적으로 다른 언어에서 함수 종료 시(return)에 변수가 메모리에서 사라지는데 JS에서는 사라지지 않는다
  + 그 원리는 ``hoisting``에 의한 것인데, 호이스팅은 함수내의 변수들의 선언이 함수 최상단으로 옮겨지는 것을 말한다. 즉, 변수의 사용 및 함수의 실행 코드가 선언보다 먼저 일어나도 정상 진행이 되도록 해주는 것을 말한다.
  + 유의할 점은 선언만 옮겨지는 것이지 초기화는 원래 위치에서 실행된다.

<br/>

<br />

#### Data type(자료형)

+ string

  + 문자열

  + " "  or ' 'or``사용

  + 이스케이핑

    + 문자가 다르게 해석되게 하는 행위

      ````js
      <콘솔창>
      
      > '작은따옴표는(\') 이렇게 표시한다'
      => 따옴표를 이스케이핑한 예시이다. " ' 앞에 \(백슬래시) 붙여준다
      > '작은따옴표는(') 이렇게 표시한다'
      => 콘솔에 오류가 나는 예시
      
      물론 이스케이핑을 사용하지 않고
      > "작은따옴표는(')로 표시한다"
      이렇게 입력할 수도 있다
      
      // tip)
      // 줄바꿈 : \n
      // 탭 : \t
      ````

  + 문자열 합치기

    + 두 개의 문자열 사이에 `+` 기호 붙이기

      ````js
      <콘솔창>
          
      > '문자열이 긴 경우 문자열을 ' + '이렇게 쪼갠 뒤 다시 합칠 수 있다'
      < "문자열이 긴 경우에는 문자열을 이렇게 쪼갠 뒤 다시 합칠 수 있다"
      
      // 유의사항 : 두 문자열을 합칠 때에는 '띄어쓰기'가 정말 중요하다
      // 첫번째 문장 맨 마지막에 여백을 두어야한다
      > '문자열이 긴 경우 문자열을' + '이렇게 쪼갠 뒤 다시 합칠 수 있다'
      < "문자열이 긴 경우에는 문자열을이렇게 쪼갠 뒤 다시 합칠 수 있다"
      // 이런 식으로 문자열이 원하는 방향대로 제대로 표현되지 않는다
      ````

  + 관련 기본 함수(메서드)

    + substring 함수

      ````js
      const user = "Maison Mount";
      console.log(user.substring(0, 8))
      => `Maison M` 출력 0번째에서 8번째 문자까지 출력 (띄어쓰기. 공백까지 character로 취급)
      ````

    + join 함수

      + **배열의** 원소를 합쳐 하나의 **문자열의 형태**출력

      ````js
      const hobbies = ["game", "programming", "tv"];
      console.log(hobbies.join(""))
      => `gameprogrammintv`
      console.log(hobbies.split(""))
      => `"g","a","m", ~~`
      
      // 대부분 .join 예시에서 숫자는 없는데 간과하지말자!
      const numbers = [1,2,3,4];
      console.log(numbers.join(''))
      => '1234'
      "" 내에는 자르는 기준을 입력할 수 있다
      ex) " " 공백을 기준
      ex) "," 쉼표를 기준
      ````
      
    + split 함수
    
      + **문자열을** 쪼개서 **배열의 형태**로 출력
    ````js
    const hobbies = "game";
    console.log(hobbies.split(""))
      => ["g","a","m","e"]
      
      "" 내에는 자르는 기준을 입력할 수 있다
      ex) " " 공백을 기준
      ex) "," 쉼표를 기준
      
      심화)
      const homework = "eng+kor+math"
      console.log(homework.split("+")[0])
      => `eng`		//		여기서 split 하지 않고 [0]만 입력했다면 e가 출력되었을 것이다
    ````
    
    + toUpperCase // toLowerCase 함수
    
      + 대소문자로 변환
    + indexOf
      + 문자열내에서 특정 문자 index 확인 (배열파트에서 자세히 설명)
  
+ Boolean

  + `true` (= 1)

  + `false` (= 0)

    ````js
    > true > false;
    < true				// true는 false보다 크다
    ````

    + 거짓같은 값 (falsy value)

      ````js
      // false, ''(빈 문자열), 0, NaN, undefined, null, document.all 등
      // undefined와 unll은 거짓같은 값일 뿐이지, 다른 거짓같은 값들과 같지는 않다.
      
      // 0, '', null,undefined,Nan은 불린형으로 변환 시에 모두 false가 된다.
      // 불린형과 자료형을 헷갈려 하지말자. ex) '' - 불린형 : false // 자료형 : string
      
      // console.log(0 == false);	// true
      // console.log(0 === false);	// false
      // console.log('' == false);	// true
      // console.log('' === false);	// false
      // console.log(null == undefined);		// true
      // console.log(null === undefined);	// false
      
      // 빈 배열 []과 빈 객체 {}, 문자열 'false'는 ture이다. 유의하자
      ````

  

+ Number

  + 양수 표기

    ````js
    3;
    ````

  + 음수 표기

    ````js
    -3;
    ````

  + 지수 표기 (exponential notation)

    원래 숫자 거듭제곱 지수를 `e`뒤에 써준다

    ````js
    3e4;	// 3 * 10000(10^4) = 30000
    3e+4;	// 3 * 10000(10^4)  = 30000
    3e-2;	// 3 * (1/100) or (10^-2) = 0.03
    ````

  + 2진법 8진법 16진법 표기

    ````js
    // 2진법 (숫자 0, 소문자 b, 2진수)
    let age = 0b11;
    console.log(age);
    => `3`
    
    // 8진법 (숫자 0, 소문자 o, 8진수)
    let age = 0o15;
    console.log(age);
    => `13`
    
    // 16진법 (숫자 0, 소문자 x, 16진수)
    // 0x 뒤에 숫자가 0부터 9까지 밖에 없기 때문에 10~15는 각각 알파벳 a, b, c, d, e, f로 표현
    let age = 0x1c;
    console.log(age);
    => `28`
    ````

  + 결괏값에 종종 나오는 수 표현

    + 무한대

      + 양 : `Infinity`
      + 음 : `-Infiniry`

    + Not a Number 숫자 아님

      + `NaN`

        ````js
        > Infinity - Infinity;
        < NaN			// 숫자가 아님 or 성립하지 않음을 나타냄
        
        > 0 / 0
        < NaN
        ````

+ Float

  + Floating number

  + 떠돌이 소수점

  + 소수를 계산할 시, 먼저 정수로 바꿔서 계산한 뒤 마지막에 다시 소수로 바꾸자

    ````js
    > (0.3 * 10 - 0.1 * 10 ) 10;
    < 0.2
    
    // 이렇게 계산하는 이유
    // 컴퓨터의 데이터 문제에 따라 2진법으로 소수를 표현하려면 근사값으로 저장한 수를 가져오는데, 여기서 우리가 사용하는
    // 10진법과는 차이가 발생한다. 이를 '부동소수점 문제'라고 한다.
    ````

    

+ bigint

  + 최근 추가

  + 엄청나게 큰 수 표현 over (-2^53) ~ (2^53)

    ````js
    const bigint = 46213158498462168463216846879864123168796516n;
    ````

    

    

+ null

  + 선언되었고 null로 값 지정(비었다는 뜻으로 많이 씀)

  

+ undefined

  + 선언 자체 x (선언 자체는 됐는데 값이 지정되어 있지않다고도 볼 수 있음)

  + 적든 적지않든 결과는 같다

    ````js
    const girlFriend = undefined;
    const girlFreind;		//		두 코드는 같음
    ````

  + `undefined` 콘솔창에서 많이 볼 수 있는데, 보통 반환할 결괏값이 없을 때 나온다. 변수를 선언하거나 `console.log` 명령어 등으로 콘솔에 무언가를 출력하지만, 그 자체로는 결괏값을 가지기 않기 때문에 `undefined`가 반환된다.

    물론 일반적인 식에서는 결괏값이 반환된다

    ````js
    <콘솔창>
        
    > let hello = "안녕";
    < undefined
    
    > console.log(hello);
    < "안녕"
    < undefined
    
    > hello = "안녕하세요"; 	// 일반적인 식
    < "안녕하세요"
    ````

  

+ symbol

  + 동시다발적으로 일어날 수 있는 코드에서 고유한 식별자가 필요할때 쓰임

  + 즉, 주어진 string값에 상관없이 고유한 식별자를 만들때 사용

    ````js
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2); // false
    
    // 동일한 Symbol 만들고 싶을 때
    const symbol1 = Symbol.for('id');
    const symbol2 = Symbol.for('id');
    // 주어진 string에 맞는 Symbol을 만들어 달라는 뉘앙스
    console.log(symbol1 === symbol2); // true
    // 유의 사항
    // 바로 출력할 수 없기에 .description을 붙여 출력한다.
    console.log(`value: ${symbol1.description}`); // value: id;
    ````

    

+ type 확인법

````js
let weight = 19;
console.log(typeof weight)
=> `number`

<콘솔창> 에서도 가능
    
> typeof "Hello";
< "string"
> typeof ``;
< "string"
````

`typeof`은 타입을 확인하는 명령이다



+ 메서드를 이용하여 자료형 바꾸기(형변환)

  + `parseInt`()

    + 문자열 => 숫자

      ````js
      > paraseInt('3');
      < 3					// 문자열 '3'을 숫자 3으로 자료형 변환
      
      > typeof parseInt('3');
      < "number"
      
      // 사칙연산 중 더하기를 할 때에 유용하다. 문자열 + 문자열은 문자열 그대로 출력하지만 -,*,/ 는 문자열을 숫자로 바꾸어 출력하기 때문이다.
      // 예시
      switch (operator) {
        case '+':
          $result.value = parseInt(numOne) + parseInt(numTwo);
          break;
        case '-':
          $result.value = numOne - numTwo;
      ````

    + 기수법 변환

      ````js
      > parseInt(숫자, 변형할 기수법)
      
      > parseInt(110, 2)
      < 6						// 110을 2진법으로 해석하여 6으로 출력
      
      > parseInt(110, 7)
      < 56					// 111을 7진법으로 해석하여 56으로 출력
      ````

  + `string()`

    + ( ) 내의 값을 문자열로 변환

      ````js
      > String(true)
      < "true"
      ````

      <br />
      
      <br />

#### 변수

+ **'변수'** 의 개념과 특성

  + 메모리 주소의 별명

  ````js
  let a = 1;
  // 여기서 1은 a라는 변수에 들어가 있는 것이 아니라 컴퓨터 메모리 어딘가에 들어있는 것인데 단지 그 메모리 주소가 복잡하므로 별명을 붙인 것 뿐이다.
  // 그러므로 a를 호출한다면 사실 해당 메모리 번지수에 찾아가서W 값을 꺼내오는 것이다.
  ````

  + 해당 값에 대한 type 정보 소유

  ````js
  > typeof a
  < "number"
  ````

  <br />

+ 선언 순서
  
  + 1) 선언(declaration)
    + 선언 시,  `_`, `$`를 제외한 특수문자가 들어가거나 숫자로 시작하는 변수를 선언할 수 없다
    + 선언 시, 전 세계 공용어인 영어로 선언하는 것이 좋으며 프로그래밍을 하면서 보게 되는 단어들 즉,  '예약어(reserved word)'는 사용할 수 없다. 물론 '예약어' 중, 변수명으로 가능한 것도 있지만 쓰지 않는 것을 지향하자.
  + 2) 초기화(initialization)
  + 3) 사용 or 업데이트(modify)
  
  + ex) `a = 21` 변수 a 선언 후 21로 초기화
  
+ 활용

  + 변수를 다른 변수에 대입하기

    ````js
    let string1 = 'hello';
    let string2 = string1;
    
    > string2;
    < "Hello"
    
    // 응용
    let string1 = '엄청 긴 문장';
    let string2 = '엄청 긴 문장';
    let string3 = '엄청 긴 문장';
    // 다음과 같이 중복을 피할 수 있다. 추후 코드 수정 시 변수 string1 값만 수정하면 된다
    let string1 = '엄청 긴 문장';
    let string2 = string1;
    let string3 = string2;
    ````

+  `let`  
  
  + added in ES6
  
  + 처음 **변수**를 선언 하거나 초기화 할 때 선언 (선언문)
  + 업데이트 가능
  
+ `const` 

  + constant **상수** 선언
  + 업데이트, 중복 선언, 다른 값 대입 모두 불가
  + const를 변수라고 부르기도 하는데, 그 이유는 객체의 내부에서는 값을 변경할 수 있기 때문이다.
  + 사용 이유 : 실수로 수정하는 것을 막기 위해

+ `var` 
  + variable **변수** (변수문)
  + 사용빈도가 현재 엄청 낮다
  + 단점
    + let과 const와 달리 window 객체 안에 저장된다. 반면 let과 const는 ES6부터 따로 저장소가 생겼다 (window객체는 건드리지 않는 것이 좋다)
    + let과 const와 달리 코드블럭 안에서 선언한 것도 밖으로 끄집어 낼 수 있다 (변수의 중복 선언 가능)
    + 변수의 hoisting - 선언된 변수를 코드 맨 위로 올림

+ Global Variable

  + { } 밖에서 선언된 변수

  + app을 실행하는 순간부터 끝날 때까지 항상 메모리에 탑재되어있기 때문에 최소한으로 쓰는 것이좋다. 가능하면 필요한 부분에서만 쓰자.
  
    <br/>
    
    <br />

#### Operator(연산자)

+ 수학적인 목적에 나누어 구분

  + 우선순위 연산자(괄호)

    + `()`

      <br/>

  + 산술 연산자

    =>  산술 연산자는 실수를 줄이고 가독성을 위해 <u>괄호치는 습관</u>을 들이자.

    =>  또한, 산술 연산자를 함수로 표현할 수 있다면 되도록이면 아무런 사전 지식없이도 식을 인식할 수 있게 하자.

    + `+`	더하기

      ````js
      // 특징과 그 예시
      // 문자열 + 문자열 = 문자열
      > '안'+'녕'
      < '안녕' 
      > '10'+'5'
      < '105'	// 숫자 15가 나오게하려면 parseInt() 메서드를 써야한다.
      
      // 숫자 + 숫자
      > 1 + 3
      < 4 
      
      // 문자열 + 숫자 (모두 문자열로 형변환)
      > '하' + 2
      < 하2
      ````

    + `-`    빼기

      ````js
      // 숫자 - 숫자
      > 3 - 2
      < 1
      
      // 문자열 - 숫자 (모두 숫자로 형변환)
      > '9' - 5
      <  4				// 문자열 '9'가 숫자 9로 형변환되어 계산
      
      > '안녕' - '녕'
      <  NaN				// 일반적인 문자열은 숫자로 바꾸면 NaN이 된다. 즉, NaN - NaN과 같다
      ````

    + `*`    곱하기

    + `/`    나누기

    + `%`   나머지 구하기 (modulus 모듈러스)

    + `**`  거듭제곱 구하기

      <br />

  + 비교 연산자 
    + `==` (`!=` 같지않다)

    + `===` (`!==` 같지않다) - 자료형까지 비교

    + `<`, `>`

    + `<=`, `>=`

    + tip

      + `NaN`을 비교 연산자로 비교할 시, 그 어떤 자료형과 비교하더라도 무조건 `false`가 출력된다.

      + 문자열끼리 비교할 시에는 문자열의 번호로 비교한다.

        ````js
        > 'a' < 'b';
        < true				//	문자열 고유번호를 따져보면 'a'는 97	'b'는 98이다.
        
        // 문자의 번호 알아내기
        // charCodeAt 사용
        > 'a'.charCodeAt();
        <  97
        ````

      + '빼기 연산자'처럼 문자열은 다른 자료형과 비교될 때 숫자로 형변환 된 후 비교된다.

        <br />

  + 대입 연산자
    
    + `=`
    
      + 오른쪽에서 왼쪽으로 대입한다. (정말 중요하다.)
    
        ````js
        let a = 2;
        let b = 4;
        
        a = b
        
        console.log(a)
        
        => 4
        ````
    
        <br />
    
  + 논리 연산자(피연산자)
    + `&&` (and)
    
      + 조건문으로도 사용가능하다.
    
      + 앞이 true여야 뒤가 실행된다.
    
        ````js
        let num; // undefined
        num && console.log(num);
        => 실행되지않음
        
        let num = 9; 
        num && console.log(num);
        => 9
        ````
    
    + `||` (or)
    
    + `!`  (참을 거짓으로, 거짓을 참으로 변환)  //  !! (true 또는 false로 형변환)
    
      ````js
      //전제 word는 빈 값
        
      //(word) 값이 비어있나 ?
      //- 빈 값. 즉, undefined이기에 비어있다고 해석할 수 있다. 하지만 bool값을 따지면 false가 나온다. 결론은 값이 비지않은 것이 된다. (비어있다 -> false) 
      
      //(!word) 값이 비어있나 ?
      //- 위와 같은 논리지만 마지막 과정이 !false - true 를 거친다. 그러므로 값이 빈 것이 된다.
      ````
    
      <br />
    
  + Increment and decrement operators

    ````js
    // preIncrement
    // 예시
    let counter = 2;
    const preIncrement = ++counter;
    
    // 연산 순서
    // counter = counter + 1;
    // preIncrement = counter;
    // 즉, preIncrement는 값이 3, counter도 값으로 3을 가지게 된다.
    
    
    // postIncrement
    // 예시
    let counter = 2;
    const preIncrement = counter++;
    
    // 연산 순서
    // preIncrement = counter;
    // counter = counter + 1;
    // 즉, preIncrement는 값이 2, counter는 값으로 3을 가지게 된다.
    
    
    // predecrement와 postdecrement 또한 같은 논리이다.
    ````


  <br />

+ 연산자가 받아야하는 항의 수로 구분

  + 단항 연산자(unary operator)

  + 이항 연산자(binary operator)

  + 삼항 연산자(triple operator)

  + 다항 연산자(multiple operator)

    ````js
    // ex) ,
    > 2, 3, 5
    < 5
    ````

    <br />

    <br />

## 제어문

> JS 엔진에게 주는 명령으로써 엔진이 정확하게 제어문을 인식하도록 철저히 형식을 지켜야한다.

<br />

#### 조건문

+ **if문** 기본 형식과 예제

  ````js
  // 기본 형식
  // if문 - optional문(선택)
  if (식) {	// if와 식 사이에 공백문자만 올 수 있는 것과 달리 이 사이에는 공백문자와 개행문자 모두 사용가능하다. 
      문;  
  }	// 하나의 문이 올수있기 때문에 단문일 때는 중문의 의미로 중괄호로 감싸지 않아도 되지만 되도록이면 실수를 줄이기 위해 중		괄호로 감싸는 습관을 들이자. 여기서 중문은 단문 하나를 포함할 수 있다는 것도 알 수 있겠다. 
  
  > if (true) {
      console.log('Hello');
  }
  < Hello
  // true는 항상 참이기에 조건식이 참으로 성립한다.
  
  > if (false) {
      console.log('Hello');
  }
  // 조건식이 false 면 거짓인 값이기에 콘솔에 값이 실행결과가 출력되지 않는다.
  // false 일 때, false에 해당하는 동작문이 실행되는 것이 아니라 동작문 자체가 실행이 되지않는다. 반드시 유의하자.
  
  // if else문 - mendatory문(필수)  
  // if 또는 else 둘 중 무조건 하나는 실행 (이지선다)
  if (식) {  // if와 식 사이에는 공백문자만 존재할 수 있다.
      문; 	// if와 식 사이에 공백문자만 올 수 있는 것과 달리 이 사이에는 공백문자와 개행문자 모두 사용가능하다. 
  }	else { 
      문;
  }
  
  > if (true) 3; else 5;
  < 3
  
  // 예제
  const x = "10";
  
  if (x == 10) {
    console.log("x is 10");
  } else if (x == 20) {
    console.log("x is 20");
  } else {
    console.log("x is string");
  }
  
  if (x === 10) {                   //  ===는 자료형이 틀렸을 때 생길 수 있는 오류들을 사전에 차단할 수 있다
    console.log("x is 10");
  } else if (x === 20) {
    console.log("x is 20");
  } else {
    console.log("x is string");
  }
  
  const age = prompt("How old are you?");
  
  if (age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
  } else if (age > 21) {
    console.log("go ahead");
  } else {
    console.log("too young");
  }
  
  // 위의 else, else if로 조건을 여러개 만들 수 있다
  
  let score = 70;
  if (score >= 90) {
    console.log('A+');
  } else if (score >= 80) {
    console.log('A');
  } else if (score >= 70) {
    console.log('B');
  } else if (score >= 60) {
    console.log('C');
  } else {
    console.log('D');
  }
  
  // 위 예제에서 70은 (score >= 70) (score >= 60) 모두 만족하기에 'B'와 'C' 모두 출력되는 것이 아니냐고 물을 수 있는데, 조건문은 위에서부터 아래로 차례대로 실행된다는 특성이 있다. 그리하여 조건문 (score >= 70)에서 이미 true라는 boolean값을 얻었기에 'B'만 출력된다.
  
  
  if (true) {
      console.log('조건1 충족');
      if (false) {
          console.log('조건2 충족');
      } else {
          console.log('조건2 불충족');
      }
  } else {
      console.log('조건1 불충족');
  }
  
  => 조건1 충족
  => 조건2 불충족
  
  // 위 예제처럼 if 조건문을 중첩으로 사용할 수도 있다. 어렵지 않다. 조건문의 특성인 위에서 아래로 순차적으로 내려오다보면
  // 첫번째 조건문의 조건식은 true이기에 if문이 실행될 것이며 두번째 조건문의 조건식은 false 이기에 else문이 실행된다.
  // 사실, 중첩 if문은 중첩될수록 코드 읽기가 어려워지기 때문에 'if-else if-else'문으로 변환하여 코드의 가독성을 높이자.
  
  // if문 중첩 제거 단계
  // 1. 공통된 절차를 각 분기점 내부에 넣는다.
  // 2. 분기점에서 짧은 절차부터 실행하게 if문을 작성한다.
  // 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for문 내부의 경우)로 중단한다.
  // 4. else를 제거한다. (이때 중첩 하나가 제거된다.)
  // 5. 다음 중첩된 분기점이 나올 때 1~4의 과정을 반복한다.
  
  // 예시
  function test() {
  	let result = '';
  	if (a) {
  	    if (!b) {
  	        result = 'c'
  	    }
  	} else {
  	    result = 'a'
  	}
  	reult += 'b';
  	return result;
  }
  
  // 위 코드는 아래의 코드로 중첩을 피하여 표현할 수 있다.
  
  function test() {
       let result = '';
  
       if (!a) {
           result = 'a';
           }
  
       if (!b) {
           result = 'c';
           }
  
        result += 'b';
        return result;
  }
  
  // tip)
  // if문은 &&로 대체 가능하다.
  // 예시는 &&파트에서 보도록하자.
  ````



+ **switch**문 기본형식과 예제

  ````js
  // 기본 형식
  switch (조건식) {
          case 비교조건식;
          동작문;
  }
  // switch문에서는 조건식 두 개가 사용된다. 조건식의 값이 비교 조건식 값과 일치하면 해당 동작문이 실행된다.
  // 여기서 일치한다는 것은 ==이 아닌 ===를 의미한다.
  
  // 예제
  const animal = "monkey";
  
  switch (animal) {
    case "lion":
    case "tiger":
      console.log("big");
      break;
    case "monkey":
      console.log("medium");
      break;
    case "cat":
      console.log("small");
      break;
    default:                      // 아무 case에도 속하지 않을때는 기본값을 줄 수 있다.
      console.log("not animal");
      break;						// default 부분에는 맨 마지막 case이기에 break를 생략해도 된다.
  }								// 또한, default 부분은 어디에나 위치 가능하다.
  
  => medium
  
  // 위 예제에서 break를 볼 수 있는데 switch문은 일치하는 case 발견 시, 그 아래 case들의 동작문들을 모두 실행한다.
  // 그래서 원하는 case의 결과만 얻으려면 수동으로 case에서 빠져나와야 하는데, 이때 break문을 사용한다.
  
  ````



+ **if문** vs **switch문**

  + switch문의 **case**는 if문의 **else if**와, *default*는 *else*와 맥락이 비슷하다고도 볼 수 있다.
  + if문이 === 연산자만 사용하는 경우 switch문으로 쉽게 대체 가능하다.

  ````js
  let animal = "monkey";
  
  if (animal === "monkey") {
        console.log("medium")
  } else if (animal === "tiger") {
        console.log("big")
  } else {
        console.log("not animal")
  }
  
  // 두 if문과 switch문은 동일한 결괏값을 갖는다
  
  switch (animal) {
      default:
        console.log("not animal")
      case "tiger":
        console.log("big");
        break;
      case "monkey":
        console.log("medium");
        break;
  ````

  

+ 3항 연산자(조건부 연산자)

  + 여러 경우가 나온다면 그냥 if문이 유용할 것이다.
  + 보통 조건에 따라서 달라지는 값을 변수에 대입하기 위해 사용한다.
  + 3항 연산자 또한 중첩 가능하다.

  ````js
  // 기본 형식
  조건 ? 참일경우 : 아닐경우;
  
  // 예제
  const age = 20;
  let group;    //  let group = ""
  age > 20 ? group = "senior" : group = "junior";
  
  console.log(group)
  
  => `junior`
      
      
  // 두 3항 연산자 식과 if문은 결괏값이 같다.
  
  
  if (x > 20) {
     group = "senior"
   } else {
     group = "junior"
   }
  
  console.log(group)
  
  => `junior`
  ````

  

#### 반복문

<br />

+ **while문**

  + 조건식이 참인 동안 반복하여 동작문을 실행

  + 무한 반복시 많이 사용

    ````js
    // 기본 형식
    while (조건식)	{
        동작문;				
    }		
    
    // 예시
    let i = 0;		// 프로그래밍에서는 보통 숫자를 0부터 세기 때문에 변수에 첫번째 값으로 1이 아닌 0을 많이 넣는다.
    while (i < 100) {
        console.log('Hello');
        i++;
    }
    
    // do while문
      // 먼저 block 실행 후 조건 검사
      do {
          console.log(`do while: ${1}`);
          i--;
      }	while (i > 0);
      => do while: 0
    ````

  <br />

+ **for문**

  + while문과 원리 같음

  ````js
  // 기본 형식
  for (변수 선언; 조건식; 종료식) {
      동작문;
  }			// 실행 순서 : 변수 선언 => 조건식 => 동작문 => 종료식
  
  
  
  // 예시
  for (let i = 0; i < 100; i++) {
      console.log('Hello');
  }
  
  => 'Hello' 100번 출력
  
  
  for (let i = 0; i < 100; i++) {
      console.log(i + 1);
  }
  
  => 1 ~ 100 까지 출력
  
  // tip) i의 범위를 정할 때 쉽게 정하는 법은 몇 개의 숫자를 뽑을지를 생각해보면 된다.
  ````


<br />

+ **다중 반복문**

  ````js
  for (let i = 0; i < 3; i++)         //          열(row)에 관함
  {
      for (let j = 0; j < 3; j++)         //          행(column)에 관함
      {
          console.log("#");
    }
    console.log("\n");
  }
  
  // 위 코드에서 #을 게임에서의 블록이라고 가정한다면
  // ###
  // ###
  // ###
  // 이런 형태의 블록을 형성할 수 있을 것이다.
  // 반복문의 중첩은 변수 값 변화를 유심히 추적해보는 것이 중요하다.
  ````

<br />

#### Flow Control (흐름제어)

> 일반적으로 다른 언어에서는 goto를 사용하여 flow의 특정한 위치로 jump할 수 있지만
> JS에서는 goto 구문은 존재하지 않으며 `break`와 `continue`만 `label`에 사용가능하다.

<br/>

+ **break문**

  + 더 이상 루프(반복문)를 진행하지 않고 (가장 가까운) 루프에서 탈출

  ````js
  // iteration Set과 label Set 상황에서 사용 가능
  
  // 예시 1
  let i = 0;
  while (true) {
      if (i === 5) 
          break;
      	console.log(i);
      	i++;
  }
  
  // 0 ~ 4까지 출력
  
  // 예시 2
  let i = 0;
  document.write("Enter<br />");
  while (i < 10)
      {
          if(i === 5) {	// x가 5일 때 break문으로 인해 바로 루프에서 탈출한다.
              break;		
          }				
          i++				
          document.write(`${i} <br>`);
      }
  document.write("Exit<br />")
  
  // Enter
  // 1 ~ 5
  // Exit
  
  // 사실 break문을 label과 같이 쓰지 않고 단독 사용 시, 자동 label(auto identify)이 형성된다.
  // 자동 label은 iteration Set 상황에서만 발생한다. (continue문도 마찬가지다.)
  // 그러므로 iteration Set이 아닐 경우 break문을 단독 사용할 수 없다.
  prac: {					// prac: 뒤에 나오는 중괄호 구간(블록)이 레이블이 가리키고 있는 영역 즉, label Set이다. 
      console.log('a');
      break;
      log('b')
  }
  log('c')
  // error
  
  // label을 붙인 블록이라도 iteration Set이 아니기 때문에 break를 단독 사용하는 것이 아닌 label과 함께 사용해야한다.
  // tip) continue문은 iteration Set에서만 사용가능하다. 즉, 아무리 label을 붙인 블록이라 하더라도 사용불가
  prac: {
      console.log('a');
      break prac;
      console.log('b')
  }
  console.log('c')
  // a
  // c
  
  // 위와 같이 label과 break를 사용하여 기본적인 흐름제어를 할 수 있다.
  // 이는 if문과 if else문과도 맥락을 같이 가져갈 수 있겠다.
  // 예를 들어, break 전후로 mendatory와 optional으로 나눌 수 있다. 이렇게 되면 함수 내에 return이 있는 것과 똑같은 기능을 하게된다.
  ````

  <br />

+ **continue문**

  + `break`와는 달리 현재 실행중인 루프를 멈추고 다음 루프로 넘어간다

  ````js
  // iteration Set에서만 사용가능 (단독 사용시 auto identify인 자동 label 형성)
  // 다음 루프라는 것은 해당 루프가 속해있는 더 큰 루프를 뜻한다기보다 해당 루프의 다음 인덱스로 넘어간다고 생각하자.
  // 예시 1
  let i =0:
  while (i < 7) {
      i++;
      if (i % 2 === 0) {
          continue;				// continue문이 실행되면 그 뒤의 문은 실행되지 않는다.
      }
      console.log(i)
  }
  
  // 1, 3, 5 출력
  
  // 예시 2 
  let i = 0;
  document.write("Enter<br />");
  while (i < 10)
      {
          if(i === 5) {	// x가 5일 때 continue로 인해 해당 루프를 스킵하고 다음 인덱스인 x가 6일때의 while문 실행
              continue;		
          }				
          i++				
          document.write(`${i} <br>`);
      }
  document.write("Exit<br />")
  
  // Enter
  // 1 ~ 4	5제외 1 ~ 9 출력
  // 6 ~ 9
  // Exit
  ````

  <br />

+ **Label**

  + 특정 위치 지정
  
  ````js
  Label : statement(문)
  // Label 작명시 숫자로 시작x 식별자 규칙에 어긋나기때문
  // _, $, 알파벳으로 시작o
  
  // 어떠한 호출행위나 sub routine에 빠지는 행위를 하더라도 기본적으로 해당 루틴의 처음으로 보내주지만
  // Label sub routine만이 유일하게 해당 루틴 밑으로 보내준다.
  
  // 변수와 마찬가지로 block이 아닌 function scope(함수 스코프)를 탄다.
  prac:
  {
      prac:
  }
  // error
  prac: () => {
      prac: statement
  }
  // 정상 작동
  
  
  
  // 예시 1
  // break문과 함께 사용
  // break; 이후 해당 label에서 바로 탈출한다
  document.write("Enter");
  loop1:
  for (let i = 0; i < 5; i++) {
      document.write("Loop1: " +i+ "<br />");
      loop2:
      for (let j = 0; j < 5; j++) {
          if (j > 3) break;
       	if (i === 2) break loop2;
          if (i === 4) break loop1;
          document.write("Loop2 " +j+ "<br />");
      }
  }
  document.write("Exit");
  
  // Enter
  // Loop1: 0
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Loop2: 3
  // Loop1: 1
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Loop2: 3
  // Loop1: 2
  // Loop1: 3
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Loop2: 3
  // Loop1: 4
  // Exit
  
  // 예시 2
  // continue문과 함께 사용
  document.write("Enter <br />");
  loop1:
  for (let i = 0; i < 3; i++) {
      document.write("Loop1: " +i+ "<br />");
      for (let j = 0; j < 5; j++) {
          if (j === 3) {
              continue loop1;		// j가 3일때 loop1을 스킵하고 다음 인덱스(i)의 for문(루프) 실행
          }						// loop1을 스킵하기 때문에 당연히 loop2 또한 스킵한다.
          document.write("Loop2: " +j+ "<br />");
      }
  }
  document.write("Exit");
  
  // Enter
  // Loop1: 0
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Loop1: 1
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Loop1: 2
  // Loop2: 0
  // Loop2: 1
  // Loop2: 2
  // Exit
  ````
  
  <br/>
  
  <br/>

#### Array (배열)

+ 데이터 저장과 정렬

+ 생성(정의)시 `[]`  브라켓 or `new`  키워드 사용 

+ [] 안에는 문자열, 문자, 숫자, 정의한 변수 등이 들어갈 수 있다. 물론 혼용하여 같이 들어갈 수도 있음

+ n번째의 데이터를 출력 원할시 `배열명[n-1]`로 출력한다 

  ````js
  // 이차원 배열
  const arrayArray = [[1,2],[3,4,5]];
  arrayArray[0];			//  여기서 n번째의 데이터를 '자릿수' 즉 '인덱스(index)'라고 한다.
  => [1,2]				//	물론, 이 index값은 0부터 시작한다.
  arrayArray[1];
  => [3,4,5]
  
  
  // tip) 배열의 요소 개수 구하기
  const users = ["june", "seok", "", "kim"];
  console.log(users.length);
  => `4`		//		users 배열의 길이를 length 객체를 통해 알 수 있다.
  			//		빈 값 또한 유효하기 때문에 요소 개수에 포함된다.
  
  // tip) 맨 마지막 요소 구하기
  const users = ["june", "seok", "", "kim"];
  console.log(users[users.length - 1]);
  => `kim`	//		users라는 배열의 [배열의 길이-1](맨 마지막 요소)을 출력하는 것이다
  			// 		여기서는 [4(배열의길이)-1] 즉 [3]의 값을 출력한다
  
  // tip) 배열에 요소 추가 or 변경
  const users = ["june", "seok", "kim"];
  users[0] = soo	// 배열 첫번째 요소 "june"을 "soo"로 변경
  users[3] = soo  // index 0, 1, 2 이후에 3번째 요소(맨 마지막 요소)로 "soo"를 추가
  
  // Problem
  // 이렇게 값 변경 or 추가를 할 수 있지만 요소가 엄청 많을 경우 현실적으로 요소가 몇번 째 값인지 다 기억하고 작업할 수 없다.
  
  // Solution
  // 중간에 있는 요소 변경하기
  const users = ["june", "seok", "kim", ... , "mike", ... ];
  users[users.indexOf("mike")] = "michael" 로 변경하는 방법도 있다
  "mike"의 자릿수가 48이라면 48과 users.indexOf("mike")가 동일한 의미를 지닌다는 것을 알 수 있다
  // indexOf 메서드는 아래의 기본메서드 섹션에서 설명한다.
  
  
  // 맨 마지막 요소 변경하기
  const array = ['안','녕','하','세','요'];
  array[array.length] = '!'
  console.log(array);
  
  => '안','녕','하','세','요','!'
  ````

  

+ Set

  + 중복을 허용하지 않는 특수한 배열

    ````js
    // 선언
    new Set([iterable]);
    
    
    // ()내에 아무리 중복되는 값들이 오더라도 Set이 알아서 중복되는 값들 중 맨 앞의 값만을 남기고 무시한다.
    const essence = new Set([ 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5 ]);
    console.log(essence);
    => Set { 1, 2, 3, 4, 5 }
    
    
    // Set내의 요소 개수 구하기
    // 일반적인 함수들과 달리 length가 아닌 size를 사용한다.
    const essence = new Set([ 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5 ]);
    console.log(essence.size);
    => 5
    ````
  
  <br/>
  
+ 기본 메서드

  + `Array().fill()`

    + `fill()`은 채워진 배열을 return 하며 배열의 모든 원소를 하나의 정적인 값으로 채움

      ````js
      // Array(배열길이).fill(값)
      // Array(length).fill(value, start, end)
      Array(7) // [empty * 7]
      Array(7).fill() // [undefined, undefined, ... , undefined]
      Array(7).fill(0) // [0, 0, ... , 0]
      
      // 예시01
      // 1~9까지의 원소를 가진 배열 만들기
      Array(9).fill().map((element, index) => {
        return index + 1;
      })	// [1, 2, 3, ... , 9]
      // .map은 아래에서 설명 예정
      
      // 예시02
      const teams = ["Chelsea", "ManUnited", "Mancity"];
      teams.fill("premier"); // ["premier", "premier", "premier"]
      
      // 예시03
      const teams = ["Chelsea", "ManUnited", "Mancity"];
      teams.fill("premier",1,3); // ["Chelsea", "premier", "premier"]
      ````
  
    <br/>
  
  + `push`, `unshift`
  
    + 배열에서 특정 요소 추가
  
      ````js
      // 배열 맨 마지막에 요소 추가
      const users = ["june", "seok", "kim", ... , "mike"];
      users.push("soo");
      => 배열의 마지막에 soo 추가
      
      // 다른 예시
      const numbers = [];
      for (let n = 0; n < 9; n += 1) {
          numbers.push(n + 1);
      }
      
      // 배열 맨 앞에 요소 추가
        users.unshift("kan");
      => 배열의 처음에 kan 추가
      ````
  
    <br/>
  
  + `pop`, `shift`
  
    + 배열에서 특정 요소 제거
  
      ````js
      // pop메서드는 배열 맨 뒤에서부터 하나씩 빼는 개념이다.
      
      const users = ["june", "seok", "kim"];
      users.pop();
      users.pop();
      console.log(users);
      => pop메서드를 두번 실행했기에 "june"만 출력 
      
      // shift메서드는 배열 맨 앞에서부터 하나씩 빼는 개념이다.
      
      const users = ["june", "seok", "kim"];
      users.shift();
      users.shift();
      console.log(users);
      => pop메서드를 두번 실행했기에 "kim"만 출력 
      
      
      // tip) shift와 unshift는 pop과 push에 비해 느리다.
      // 뒤에서부터 특정 요소를 뺀다면 기존의 다른 요소들은 움직이지 않아도 되기 때문이다. shift - 당겨오다
      // 가능하면 shift와 unshift 보다는 pop과 push를 쓰도록 하자.
      ````
  
  + `splice`, `slice`
  
    + 배열 특정 구간에서 자르기, 제거
  
      + 차이점 : 배열 자체 변형 vs 새로운 배열 생성
      
      ````js
      // splice (배열 자체 변형)
      // .splice(특정구간지정, 특정구간부터 n개 제거)
      // = .splice(시작 index, 제거할 요소의 개수)
      const users = ["june", "seok", "kim"];
      const newUsers = users.splice(0, 2);
      console.log(newUsers)	 // 	["june", "seok"]
      console.log(users) 		// 		["kim"]
      // 여기서 볼 수 있듯이 배열 users의 요소들이 사라졌다. 즉, 배열 자체가 변형된 것이다.
      
      // 여기서 시작 index값만 넣을 경우, 해당 index부터 끝까지 모든 요소를 제거한다.
      const users = ["june", "seok", "kim"];
      const newUsers = users.splice(1);
      console.log(users);    // 	["june"]
      
      // 특정 요소들을 제거한 뒤, 제거한 자리에 다른 특정 값들을 넣을 수도 있다.
      const users = ["june", "seok", "kim"];
      const newUsers = users.splice(0,2,"mount","pulisic");
      console.log(users);    // 	["mount","pulisic","kim"]
      
        
      
      
      
  
    // slice (새로운 배열 생성)
      // .slice(start요소index, end요소index+1)
  
      // 예시
      // 배열 array에서 [3, 4, 5]를 출력하고 싶을 때
    const array = [1, 2, 3, 4, 5];
      const result = array.slice(2, 6);
      console.log(result); // [3, 4, 5]
      console.log(array); // [1, 2, 3, 4, 5]
      // 여기서 볼 수 있듯이 배열 array의 요소들이 그대로 남아있다. 즉, 새로운 배열을 형성한 것이다.
      ````
    
    <br/>
  
  + `concat`
  
    + 서로 다른 배열 결합하기
  
      ````js
      // 예시
      const number = [1,2];
      const newNumber = [3,4,5];
      const conNumber = number.concat(newNumber);
      console.log(conNumber);
      -> [1,2,3,4,5]
      ````
    
  + `join`
  
    + 배열의 요소들을 문자열로 변환
  
      ````js
      // 예시
      const fruits = ['apple', 'banana', 'orange'];
      const result1 = fruits.join('');
      console.log(result1); // applebananaorange
      
      const result2 = fruits.join(' and ')
      console.log(result2); // apple and banana and orange
      // 공백도 포함
      
      // ''와 같은 분리자를 넣지않으면 ,가 들어가면서 string으로 변환
      // apple,banana,orange
      ````
    
  + `split`
  
    + 문자열을 배열로 변환
  
      ````js
      // 기본 문법
      .split(구분자, limit)
      // limit은 optional이기에 굳이 사용하지 않아도된다.
      // 예시
        const fruits = '🍎, 🥝, 🍌, 🍒';
        const reuslt = fruits.split(',');
        console.log(reuslt) // ["🍎", "🥝", "🍌", "🍒"]
        // 구분자를 넣지않으면 문자열 전체가 배열의 요소 하나로 출력된다.
      
      
        const fruits = '🍎, 🥝, 🍌, 🍒';
        const reuslt = fruits.split(',', 2);
        console.log(reuslt) // ["🍎", "🥝"]
    
    <br/>
    
  + `reverse`
  
    + 주어진 배열의 순서를 거꾸로 바꿈
  
      ````js
      const array = [1, 2, 3, 4, 5];
      const result = array.reverse();
      console.log(result); // [5, 4, 3, 2, 1]
      
      // 유의점
      // 배열 자체를 변화시킴. 즉, return 값도 변화된 배열 자체를 return함
      console.log(array); // [5, 4, 3, 2, 1]
      ````
  
+ `indexOf` ,`lastIndexOf`
  
  + 배열,문자열 내에서 특정 원소(문자열)의 index값(순서) 구하기
  
    ````js
      // indexOf	앞에서부터 주어진 값 검색
      const users = ["seok", "june", "kim"];
      console.log(users.indexOf("seok"));
      => 0
      console.log(users.indexOf("soo"));
      => -1			//	배열에 존재하지 않는 요소는 index 값이 -1로 출력된다.
      
      // 유의점
      // 요소의 자료형까지 같아야 한다.
      ['2', '3', '4', '5'].indexOf('5') === 3;
      ['2', '3', '4', '5'].indexOf(5) === -1;
      
      // 여기서 값의 존재 여부를 조금 더 직관적으로 bool값으로 값을 반환하는 메서드도 있다.
      // includes
      '1234'.includes(2) === true;
      ['1', '2', '3', '4'].includes(7) === false;
      
      // lastIndexOf	뒤에서부터 주어진 값 검색
        const users = ["seok, ""june", "seok", "kim"];
      console.log(users.lastIndexOf("seok"));
        => 2
    ````
  
  + `isArray`
  
    + Array인지 판단
  
      ````js
      console.log(Array.isArray(users));
      => true
      console.log(Array.isArray(hello));
      => false
      ````
  
  + `...` spread operator
  
    + 배열의 값들만 가져옴
  
    + 객체에도 사용할 수 있으며 spread operator는 대괄호, 중괄호 모두 제거 해달라는 의미를 가진다.
    
      ````js
      console.log(users);
      => {"june", "seok", "kim"}
      console.log(...users);
      => june seok kim
      ````


  + `includes`

    + 배열에서 특정 요소 찾기(존재 여부)

      ````js
      // 존재 여부
      const users = ["june", "seok", "kim"];
      const result01 = target.includes('seok');
      const result02 = target.includes('soo');
      
      console.log(seok);
      console.log(soo);
      
      => true			// 존재
      => false		// 비존재
      ````

    <br />

+ `filter`, `find`

  + 배열에서 특정 요소 반환 (필터링)

    + 차이점 :  일치하는 모든 인자 반환 vs 일치하는 값 중 제일 먼저 발견된 값 반환

      ````js
      // filter (반환)
      // 배열의 요소 중 일치하는 모든 인자를 포함하여 '새로운 배열'을 반환함.
      // 기본 문법
      const newArray = arr명.filter(callbackFunction(element, index, array), thisArg);
      //
      // thisArg는 filter에서 사용될 this 값인데, optional이며 사용하지 않을 경우에는 undefined로 전달된다.
      
      class Animals {
          constructor(name, size, weight) {
              this.name = name;
              this.size = size;
              this.weight = weight;
          }
      }
      const animals = [
          new Animals('monkey', 'medium', 100),
          new Animals('lion', 'big', 200),
          new Animals('tiger', 'big', 200),
          new Animals('hippo', 'big', 300),
          new Animals('cat', 'small', 10),
      ];
      
      const filteredAnimals = animals.filter(animal => animal.size === "big")
      console.log(filteredAnimals);
      // const filteredAnimals = animals.filter(function(animal){  바로 위의 코드와 같은 뜻이다.
      //     return animal.size === "big"
      // });
      // console.log(filteredAnimals);   
      
      const filteredAnimals = animals.filter(animal => animal.weight >= 200 && animal.size === "big")
      console.log(filteredAnimals);
      
      
      
      
      // find
      // 기본 문법은 filter와 거의 동일
      // 단, 값을 찾으면(callback함수가 true가 되자마자) loop를 정지하기 때문에 특정값을 찾을 시, 메모리 사용을 효율적으로 할 수 있다.
      
      const filteredAnimals = animals.find(function(animals) {
          return animals.size === 'big';
      });
      console.log(filteredAnimals);	// Animals {name: "lion", size: "big", weight: 200}
      // size가 big인 첫번째 요소 lion줄의 요소가 출력
      
      const filteredAnimals = animals.find(animals => animals.size === "big")
      console.log(filteredAnimals);	// Animals {name: "lion", size: "big", weight: 200}
      ````
      
      <br />

+ `reduce`,`reduceRight`

  + 배열의 합 구하기, 새로운 형태 도출 등

  ````js
  // 예시1
  const inputArray = [100, 10, 20, 40];
  const answer = inputArray.reduce((acc, cur) => {
  	console.log(acc, cur)
  	return acc + cur;
  }, 0);
  console.log(answer);
  // 0 100
  // 100 10
  // 110 20
  // 130 40
  // 170
  
  
  // 예시2
  const reducedAnimals = animals.reduce((acc, cur) => {    //    accmulate 축적하다
    return acc + cur.weight
  }, 0)
  
  console.log(reducedAnimals)
  // 새배열 정의 = 기존배열.reduce((누적값, 현재값)) => {
  // return 누적값 + 현재값.합구할요소 
  // }, 초기값)                                      초기값(보통 0)을 넣어주는 것이 굉장히 중요하다! 오류 차단
  
  // 현재값 = 현재 인덱스에 해당하는 값
  // reduceRight은 맨 뒤 요소부터 차례로 더한다는 차이점이 있다.
  ````

  

+ `some`, `every`

  + 특정 기준 체킹 (하나의 요소 || 모든 요소)

    ````js
    // .some
    // 배열의 요소 중 callback함수의 return이 true가 되는 요소가 있는지 체크
    // 요소 중 하나라도 조건을 만족하는 것이 있으면 true 출력
    // 예시
    class Student {
      constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
      }
    }
    const students = [
      new Student('A', 29, true, 45),
      new Student('B', 28, false, 80),
      new Student('C', 30, true, 90),
      new Student('D', 40, false, 66),
      new Student('E', 18, true, 88),
    ];
    
    const result = students.some(student => student.score < 50);
    console.log(result); 	// true
    
    
    // .every
    // 배열의 모든 요소가 callback함수의 return이 true를 만족하는지 체크
    
    const result2 = students.every(student => student.score >= 50);
    console.log(result2); 	// false
    
    const result2 = !students.every(student => student.score >= 50);
    console.log(result2); 	// true
    ````

    

+ 위의 Array 예시들에서 const로 정의했지만 에러가 나지않고

  Array의 값들을 바꿀 수 있었던 이유는 Array **자체**가 아닌 Array의 **요소**를 변경했기 때문이다

  ````js
  const users = ["june", "seok", "kim"];
  users = ["human"];
  => error		//		이는 배열의 값(요소)이 아닌 배열 그 자체를 []를 써가며 변경했기 때문에 성립하지 않는다
  ````

  

+ 배열의 반복

  + 'while문'과 'for문' 모두 사용 가능

    ````js
    // 기본 예시
    
    const korean = ["가", "나", "다", "라"];
    let i = 0;
    while (i < korean.length) {
        console.log(target[i]);
        i++;
    }
    
    => "가", "나", "다", "라" 출력
    
    for (let i = 0; i < korean.length, i++;) {
        console.log(target[i]);
    }
    
    => "가", "나", "다", "라" 출력
    
    // 예시
    const numbers = [];
    for (let n = 0; n < 9; n += 1) {
      numbers.push(n+1);
    }     
    ````

  + 메서드를 통하여 반복문 효과 내기

    + 해당 메서드 모두 for문 보다 성능이 딸릴지언정 연달아 쓸수있다는 장점을 가지고있다.
      + 예를 들어, for문을 사용한다면  `.push`와 같은 메서드로 배열에 일일히 넣어주어야 한다.

    + `for of`,`forEach`

    ````js
    // for of
    const fruits = ['1', '2'];
    for ( value of fruits ) {		
    console.log(value);
    }
    => 1
       2
    
    // value 대신 다른 값을 넣어도 상관없다.
    // ex) let fruit
    
    // forEach
    // 인수로 함수를 받고, 이 함수가 각각의 배열 요소들에 순서대로 적용되는 구조
    // 즉 배열의 요소마다 한 번씩 '주어진 함수를 실행'(콜백 함수)
    // 여기서 배열의 요소마다 한 번씩 돌아다니는 사실이 중요함. 이것이 반복문의 역할을 하게됨
    // 아무것도 return(반환)하지않음. (undefined) - .map()과 명확한 차이
    // 그러므로 forEach가 map과 같은 기능을 하기위해서는 .push .unshift 등의 메서드가 필요하다
    // 기본 구조
    const array = [value01, value02, value03, ...];
    array.forEach((value, index, array) => {
        console.log(value, index, array);
    });		// array는 foreach에서 일반적으로 잘 받아오지 않는다. cf) map을 사용하는것이 훨씬 편리하다.
    
    // 예시
      const array = [1,2,3,4];
      array.forEach((number, index) => console.log(number, index));		
      => 1 0 // number index
         2 1
         3 2
         4 3
    
      // 다른 예시
      const animals = ["lion", "tiger"];
      animals.forEach((animal) => {
        console.log(animal);
      });
      => lion
         tiger
    ````

    + `map`

    ````js
    // 배열을 순회하면서 배열의 각 원소들을 출력한다는 점은 forEach와 같지만 새로운 array 생성한다는 점에서 다르다.
    // return후 다음 index로 이동. 본래 배열의 마지막 index까지 순회 후 map 스코프에서 탈출
    // 즉, 내부 원소만 상이하며 본래 배열의 length === 새로운 배열의 length
    const inputArray = [100, 10, 20, 40];
    const nums = inputArray.map((num) => {
      if (num >= 40) {
        return num;
      }
    });
    console.log(nums); // [100, undefined, undefined, 40]
    // 조건과 맞지않기에 함수는 자동으로 undefined 반환
    
    
    // map의 용도를 잘 살리려면 return문을 포함하여 각 요소에 대한 callback 이후 실행결과를 모은 새 배열을 return하게 해야한다.
    const animals = ["lion", "tiger"];
    zoo = animals.map((animal) => {
      console.log(animal);
      return "big " + animal
    });
    console.log(zoo);
    => lion
       tiger
       ["big lion", "big tiger"]
        // return animal.name   //  배열을 재정의 하기위해서는 결과값을 return해야한다.  // name만 가진 배열 반환
        // return { name: animal.name, size: animal.size }
    // 다른 예시
      const animals = [
        { name: "monkey", size: "medium", weight: 100 },
        { name: "lion", size: "big", weight: 200 },
        { name: "tiger", size: "big", weight: 200 },
        { name: "hippo", size: "big", weight: 300 },
        { name: "cat", size: "small", weight: 10 }
      ]
    
      const mappedAnimals = animals.map(function (animal) {
        return `${animal.name} is ${animal.size}`;
      });
    
    ````

  

#### Function 함수

+ 개념
  + 일정한 동작을 수행하는 코드
  + 하나의 함수는 하나의 일만 할 수 있다.
+ Call Stack(콜스택)
  + JS가 함수 실행을 핸들하는 방법 중 하나.
  
  + 함수를 스택 위에 올리고 차례대로 함수를 다 실행하면 스택에서 제거하는 순서로 이어진다. 
  
    자세한 과정은 디버깅을 통해 볼 수 있다. ex) 크롬 디버깅
  
  + 콜스택 = 리스트 라고 생각하면 함수는 이 리스트에 추가되는데 실행이 완료될 때 마다 리스트에서 차례로 제거된다.
  
     JS의 투두리스트라고도 볼수있겠다.
+ 함수 선언과 실행

````js
// 함수 선언 (함수 표현 expression과 달리 hoisting 기능이 있다.)
function add(){}
function키워드 함수이름(parameter매개변수){동작문}	// 함수 선언문 (function declaration statement)

const add = function() {};	// 함수 표현식 (function expression)

const add = () => {};	// 화살표 함수 (arrow function)
// tip1) 매개 변수가 하나뿐일 때는 소괄호 생략 가능하나 매개 변수가 없을 시에는 소괄호 필요
(parameter1) => {statement}
() => {statement}
// tip2) 함수 내에 return구문 하나만 존재할 때는 중괄호와 return 생략도 가능하다.
const answer = inputArray.map(num => {
  return num + "%"
})	// 아래와 같다
const answer = inputArray.map(num => num + "%")


// 위의 '함수 표현식'과 '화살표 함수'는 같은 의미이다. 하지만 '함수 선언문'은 add를 변수라고 착각할 수 있는데 add는 그저 함수의 이름을 지어준 것 뿐이다. 함수의 이름을 정할 때는 verb 형태로 짓도록하자. 또한, 함수에 이름을 지어주는 것은 디버깅 시에 편리하다.


// 함수 실행(호출)
함수이름(argument전달인자);

// 예시
function add(a,b) {
    return a + b;
}

add(5, 6);
실제로 값을 보고싶다면
console.log(add(5, 6))
=> `11`

tip) ES6부터는 초기값 설정도 가능 (Default parameters)
function add(a = 0, b = 1) {
    return a + b;
}
console.log(add())		// 이렇게 아무 값을 넣지않으면 초기값이 반환된다
expected output : 1

// IIFE: Immediately Invoked Function Expression
// 예시
function hello() {
    console.log('IIFE');
}
hello();
// 아래로 변환 가능
// 함수를 선언함과 동시에 실행
(function hello() {
    console.log('IIFE');
})();
````

+ 함수의 반환

````js
// return문 추가
> function a() {
    return 5;
}

> console.log(a());
< 5

// 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환한다.
// 함수는 return이라는 말이 나오거나 실행이 완료되면 끝난다.
// 함수를 호출하면 항상 결괏값이 나온다. 이때 기본적으로 'undefined'가 출력된다.
// 이 값을 반환값(return value)라고 한다.
// console.log함수를 호출할 때마다 콘솔에서 undefined가 출력되는 것을 기억하는가?
// console.log함수의 반환값이 undefined이기 때문이다.


// 물론, return문은 함수의 특정 위치에서 실행을 중지 시키는 역할도 할 수 있다.
// "이거 들고 돌아가"

function a() {
    console.log('Hello');
    return 100;
    console.log('Hi');
}

a();

=> Hello
	100	출력
````

+ 변수에 함수 넣기

````js
const sum = function add(a,b){		//	이렇게 지칭하는 이름이 없는 함수를 '무명 함수' '익명 함수'라 한다
    return a + b;
}
console.log(sum(5, 6));
 //expected output : 11
//  위 함수와 비교해서 
//	function(a,b){		이렇게 지칭하는 이름이 없는 함수를 '무명 함수' '익명 함수'라 한다
//	    return a + b;
//	}


// 유의점
// 예시
const addFun = sum; // sum이라는 함수 그 자체를 나타낸다.
const addFun1 = sum(); // sum이라는 함수의 값을 호출한다.


// 아래의 함수는 위와 의미가 같다.
function add(a,b){
    return a + b;
}
console.log(add(5, 6));

const addFun = add; 
const addFun1 = add();


// 이것이 의미하는 바는 함수 호출 시 변수에 할당 된 함수는 변수명을, 함수의 이름만 가지고 있는 함수는 함수명을 입력해주면 된다.
````

+ 매개변수(parameter)와 인수(argument)
  + 매개변수는 '인자'라고 할 수 있으며 함수를 실행하기 위해 지정하는 값이다. 말그대로 변수의 느낌.
  + 인수는 '전달인자'라고 할 수 있으며 함수를 실행할 때 실제로 매개변수에 넘겨주는 값이다.

````js
function sayHello(name, age){
    console.log("Hello!", name, "you have", age);
}

sayHello("Nicolas", 15)



// Default parameters
function show(message, from = 'unknown') { // = 'unknown' 부분에 해당
    console.log(`${message} by ${from}`);
}
show('Hi');	// Hi! by unknown

// Rest parameters
// 배열 형태로 전달
function printAll(...args) {
    for (let i =0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');
=> dream coding ellie


// 위 Rest parameters 코드는 아래와 같음
function printAll(...args) {
	for (const arg of args) {	// args에 있는 값들이 차례차례로 지정
	    console.log(arg);
	}
}
// 또는
function printAll(...args) {
	args.forEach((arg) => console.log(arg));
}
````

위 코드에서 `name`과 `age`는 **매개변수(parameter)** `Nicolas`와 `15`는 **전달인자(argument)**라 부를 수 있다.

매개변수는 변수(variable) 전달인자는 값(value)로 보는 것이 일반적이다.

또한, 위의 코드는 더 섹시하게 표현할 수 있다

````js
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello("oliver", 15);
````

````js
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetOliver = sayHello("Oliver", 15);

console.log(greetOliver)

------------------위 코드와 아래 코드는 함수를 변수에 담지않았을 때와 담았을 때의 차이다---------------------
    // 아래의 코드가 더욱 간결하고 효율적이라 볼 수 있다

const greetOliver = function sayHello(name, age){
  	return `Hello ${name} you are ${age} years old`;
}

console.log(greetOliver("Oliver", 15));
````

이하의 코드는 객체와 함수를 섞은 것이다

````js
const calculator = {
    plus: function(a, b){
        return a + b;
    }
    minus: function(a, b){
        return a - b;
    }
	multiply: function(a, b){
        return a * b;
    }
	divide: function(a, b){
        return a / b;
    }
	power: function(a, b){
        return a ** b;
    }
}

const plus = calculator.plus(5, 5)
console.log(plus)
````

+ 함수를 다른 함수에 인자로 전달

````js
function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 +num2;
}

function surprise(operate) {	// 함수 add의 ref가 함수 surprise의 인자로 전달
    const result = operator(2, 3);		// add(2, 3)
    console.log(result);
}

surprise(add);

// 함수를 전달한다는 것은 사실 함수가 가리키고 있는 ref가 복사되어 전달되는 것이다.
````



+ 함수에 들어온 인수(전달 인자) 개수 구하기

```js
function a(w, x, y, z) {
    console.log(arguments);
}

a('hi','hello','bye');

=> Arguments(3) ['hi','hello','bye', callee: f, Symbol...]
// 함수 내에서 arguments라는 값을 사용
// callee: 부터는 신경쓰지 않아도된다.
```

+ 함수의 종류

  + Callback 콜백함수

    + 말 그대로 나중에 호출되는 함수 (호출되기 원할 때 전달된 함수를 부른다.)

    + 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출
    + ex) 이벤트 핸들러

  + recursions 재귀함수

    + 함수 안에서 자신 스스로를 호출
    + 정말 필요할 때만 사용하도록 한다.

  + Arrow 함수
    + 일반 function과 다르게 지정한 변수(객체)에 함수를 담기 때문에 window 객체 안에 들어가지않고 안정적이다
    + this(scope)가 고정이 되면서 혼동이 일어날 일이 적어진다

  ````js
  // function(){} = ()=>{}
  const sum = (a, b) => {
      return a + b;
  }
  // 함수의 인자가 1개 이면 중괄호()를 빼고 쓸 수 있으며
  // return값이 1줄(하나) 이면 return과 대괄호{}를 빼고 쓸 수 있다
  const sum = (a, b) => a + b;
  ````

  + 고차 함수(high order function)

    + 함수를 만들어내는 함수. 즉, 함수가 함수를 `return`

  ````js
  // 예시1
  const func1 = () => {		// 고차 함수
      return () => {
          console.log('hi');
      }
  }
  // 위의 함수는 아래의 함수와 같다.
  // 화살표 함수에서 중괄호와 return이 붙으면 생략 중괄호와 return 생략도 가능하다.
  const func1 = () => () => {
          console.log('hi');
  }
  
  const innerFunc1 = func1();
  innerFunc1();
  
  => `hi`
  
  // 예시2
  const func1 = (intro) => () => {
          console.log(intro);
  }
  
  const innerFunc1 = func1('hi');
  innerFunc1();
  => 'hi'
  
  
  // 예제
  const hof = (a) => {
    return (b) => {
      return (c) => {
        return a + (b * c)
      }
    }
  }
  
  const first = hof(3);
  const second = first(4);
  const third = second(5);
  console.log(third);
  
  // third의 값을 유추 해보자.
  ````

  

#### Object 객체

+ **개념 및 특징**

  + 자료형의 일종. 다양한 값을 모아둔 또 다른 값. 객체의 종류를 크게 본다면 '배열'과 '함수'로 나눌 수 있다.

  + 배열과 함수도 객체라 부를 수 있는 것은 배열과 함수 모두 객체의 성질을 사용할 수 있기 때문이다.

  + 객체 선언시 **항상 새로운 reference**를 가져온다.

    ````js
    const hi1 = { name: 'hi' };
    const hi2 = { name: 'hi' };
    const hi3 = ellie1;
    console.log(ellie1 == ellie2);  // false 같아보이지만 서로 다른 ref를 가진다.
    console.log(ellie1 === ellie2); // false
    console.log(ellie1 === ellie3);	// true
    ````

  + Array와 달리 각 value에 이름을 줄 수 있다. 쉽게 말해, data에 label을 주는 것이다

    + 배열 : 단순한 값들의 나열 // 객체 : 값에 이름을 붙임

  + 생성(정의)시 {} 컬리 브라켓 사용 // {}을 사용하여 객체를 나타내는 것은 **객체 리터럴** 이라고 한다.

    <br>

+ **프로토타입(prototype)**

  + 쉽게말해 **유전자**라고 할 수 있다. 즉, 프로토타입으로 상속의 기능을 사용할 수 있다.
  + JS에서 부모/자식 상속을 구현할 수 있는 방법 중 하나 (다른하나는 `class`)

  + 자식 객체에게 데이터를 물려줄 수 있음

    ````js
    function player() {
        this.name = 'mount';
        this.age = 22;
    }
    
    let enroll = new player()
    
    player.prototype.position = 'mid'	// player의 유전자에게 position이라는 객체 생성
    enroll	// player {name: 'mount', age: 22} 
    // 이렇게 start에 직접등록 되어있지 않아도 부모만 가지고 있어도 자식이 뽑아 쓸 수 있다.
    enroll.position // 'mid'	
    ````

  + 원리

    ````js
    enroll.positon // enroll이 position을 가지고 있지 않기에 enroll의 부모 유전자를 뒤져서 데이터를 가져옴
    			   // 즉, object에서 data를 꺼낼 때 여러 스탭이 있다고 할 수 있다.
    
    // object에서 data를 추출하는 순서
    // 1. 직접 data를 가지고 있다면 바로 출력
    // 2. 없다면 부모유전자 검사. 또 없다면 부모의 부모유전자까지 검사(prototype chain 시작점까지)
    
    
    const array = [3,2,1];	// 인간의 방식
    const array = new Array(3,2,1);	// 컴퓨터의 방식 (내부적) 
    array.sort()		
    // array에 sort()를 추가해준 적이 없음에도 불구하고 sort와 같은 기본 함수(메서드)를 쓸 수 있는 이유는 무엇일까?	
    // 부모유전자에 sort()라는 함수를 기록해뒀기 때문이다. 콘솔창에 Array.prototype 으로 검증 가능
    Array.prototype.sort(); // 이제 MDN사이트에서 자주 출물하는 이런 코드도 이해될 것이다.
    
    
    // 응용
    // 특정 함수를 모든 Array에 적용
    Array.prototype.custom = function() {}	// custom이라는 함수를 Array prototype에 추가
    const array = [3,2,1];
    array.custom()	// undefined
    //  undefined이 나온다고 당황할 필요없다. return값(결괏값)이 없는 일반적인 함수는 undefined를 반환하기 때문이다.
    ````

  <br>

+ **객체 생성법** 

  ````js
  // 생성자 함수는 이름의 첫문자를 대문자로 작성하도록 한다.
  
  // 사용법
  // 1. JS에서 제공하는 Object 함수 이용 
  // 'new' 예약어로 객체 생성 후 속성(property)와 method 정의
  
  // 예시
  const car = new Object(); // 객체 생성 (object literal)
  car.name = 'Jeep';	// 속성 정의
  car.color = 'red';
  car.speedup = function() {	// 메소드 정의
      return this.speed+10;
  }
  // 2. {} 사용 (object literal)
  
  // tip) 객체 property 삭제
  // delete 사용
  delete 객체명.요소명;
  
  // 3. 생성자 함수 정의
  // 붕어빵 틀을 한번 만들어 놓고 계속해서 붕어빵을 만드는 원리
  // 생성자 함수를 이용하여 속성과 메소드를 정의 해놓고 필요할 때마다 new 예약어로 새로운 객체 생성
  // 즉, 생성자 함수로 정의한 객체를 new 예약어로 instance화 하여 사용한다.
  // tip) instance : 정의된 객체 모형에 따라 실제로 메모리에 생성된 객체
  // 예시
  function Car(name, color, speed) {
      this.name = name;		// this = {};
      this.color = color;
  }		// return this
  
  const Mycar = new Car('Sonata', ' blue');
  ````

  <br>

+ **Class**

  ````js
  // 개념
  // 연관된 것들끼리 묶어놓은 컨테이너
  // data가 들어있지 않고 template만 정의
  // 다양한 Object를 만들기 위한 청사진
  // JS에서 부모/자식 상속을 구현할 수 있는 방법 중 하나 (다른 하나는 prototype)
  
  // 구성
  // Fields, method
  // Fields만 들어있는 경우를 data Class라 부른다.
  
  // 사용
  // 이 class를 이용하여 실제로 data를 넣어서 만드는 것이 object이다.
  // 과거에는 함수를 이용하여 class 사용. 물론, this가 존재해야한다.
  // this는 class로부터 생성되는 객체. 어려운 말로 instance라고 한다.
  // new 키워드로 해당 클래스에 영향을 받는 객체를 생성한다.
  
  // 예시 0
  function User(){	// this가 존재하는 한, 함수 또한 class 역할을 할 수 있다.
      this.name = 'jin'
      this.age = 25
  }
  
  const player01 = new User();
  player01	// User {name: jin, age: 25}
  
  function User(name, age){		// parameter 생성
      this.name = name
      this.age = age
  }
  
  const player01 = new User('jin', 25);
  player01	// User {name: jin, age: 25}
  
  // 예시1 (문제점)
  class User {
      // constructor
      constructor(name, age) {	// constructor는 관습적으로 적어준다고 생각하자
          // fields
          this.name = name;
          this.age = age;
      }
      // methods				
      speak() {
          console.log(`${this.name}: hello!`);
      }	// 여기서 문제가 생길 수 있는 것이 class에서 console이라는 행위를 정해버리면 new로 object를 만들 때
  }		// 행위의 제한성이 생긴다. 그러므로 인자에 콜백함수를 호출하여 사용하자.
  
  const user1 = new User('Steve', 20);
  console.log(user1.age);		// 20
  user1.speak();
  
  // 예시1 (해결1)
  class User {
      // constructor
      constructor(name, age) {
          // fields
          this.name = name;
          this.age = age;
      }
      // methods				
      speak(ifSay) {		// 콜백 함수 지정
          ifSay(this.name);
      }	
  }		
  
  const user1 = new User('Steve', 20);
  console.log(user1.age);		// 20
  function printSomething(name) {
      console.log(`${name}: hello!`);
  }
  user1.speak(printSomething);	// speak 함수 호출시 마다, 인자 전달하기가 불편하다는 문제가 있다. (중복이 많을 시 더 불편)
  
  // 예시1 (해결2)
  class User {
      // constructor
      constructor(name, age, runEvery) {	// 콜백함수 자체에 지정
          // fields
          this.name = name;
          this.age = age;
          this.callback = runEvery;
      }
      // methods				
      speak() {		
          this.callback(this.name);
      }	
  }		
  
  const user1 = new User('Steve', 20, printSomething);
  console.log(user1.age);		// 20
  function printSomething(name) {
      console.log(`${name}: hello!`);
  }
  user1.speak();
  // 여기서 유의할 점이 있는데, 만약 User객체에서 함수를 콜백하지 않을 시 undefined가 되기에 function이 아니라는 type error가 나온다. 그래서 undefined이 아닐 때만 callback 함수를 불러야한다.
  
  // 예시1 (해결3)
  class User {
      // constructor
      constructor(name, age, runEvery) {	// 콜백함수 자체에 지정
          // fields
          this.name = name;
          this.age = age;
          this.callback = runEvery;
      }
      // methods				
      speak() {		
          this.callback && this.callback(this.name);
      }	
  }		
  
  const user1 = new User('Steve', 20, printSomething);
  console.log(user1.age);		// 20
  function printSomething(name) {
      console.log(`${name}: hello!`);
  }
  user1.speak();
  
  
  
  
  
  // 생성자(constructor)는 객체를 만드는 역할을 하며 new를 붙이면 객체가 된다.
  // constructor와 methods는 따로 보는 것이 아니라 항상 연관성을 생각하자.
  // new 예약어로 생성자 함수 호출 가능
  // this는 생성된 해당 object or class를 의미
  
  // cf) 객체 생성 시, new Object와 객체 리터럴 방식의 차이
  // 객체 리터럴 방식도 내부적으로는 new Object를 호출한다는 점은 같다.
  // 하지만 객체 리터럴 방식이 가독성이 좋으며 속도가 빠르다. 또한 오버라이딩도 방지할 수 있다.
  
  
  
  
  // Getter and setters
  // 예시
  class Person {
      constructor(name, age) {
          this.name = name;
          this.age = age;
      }
      
      get age() {	
          // 값 return
          return this._age;
      }
      
      set age(value) {		// set은 값을 설정하기에 value를 꼭 받아와야한다.
          // 값 설정
          if (value < 0) {
              throw Error('age can not be negative');
          }	// throw를 통해 사용자 정의 오류를 만들 수 있다.
          this._age = value;
      }
  
  
  const user1 = new User('Steve', -1);
  // 여기서 -1은 age의 값으로 적절하지않다.
  // 그래서 우리는 getter and setter를 통해 사용자의 이런 실수를 방지할 수 있다.
  // 또한 _age 처럼 getter와 setter안에 쓰이는 변수를 따로 설정해주는 것이 좋다.
  // 그 이유는 계속 setter를 호출함으로써 call stack이 다 차는 문제가 생기기 때문이다.
  // 논리 : this.age = age -> set age -> this._age 만약 _age가 age라면 계속 반복하여 setter가 호출될 것이다.
  console.log(user1.age);
  // 또한, 여기서 field는 _age가 있지만 .age를 사용하고 값을 할당할 수 있는것은 내부적으로 getter와 setter를 이용하기 때문이다.
  ````

  

+ **Method(메서드)** 

  + 객체 안에 선언된 함수

  + 객체의 속성 값으로 함수를 넣은 경우를 말한다

    ````js
    const main = {
        log: (value) {
        console.log(value;);
    	}
    }
    main.log('Hello, Method');
    
    // 위 코드에서 log는 main객체의 메서드이다. 우리가 항상 써왔던 console.log와 매우 비슷하다.
    // 물론, console.log는 브라우저에 기본 탑재 되어있는 객체이므로 따로 선언하지 않고 사용할 수 있다.
    ````

    

+ 특정 데이터 출력 원할시 `객체명.속성` or `객체명['속성']`로 출력한다. []로 출력 시에는 반드시 [] 내부에 문자열을 넣어야한다.

  + 여기서 [ ]로 속성에 잘 접근하지 않지만 속성에 띄어쓰기나 .이 들어가는 경우 유용히 쓸 수 있다.
  + ex) `객체명['속성 명']` or `객체명['속성.명']` 
  + 실시간으로 원하는 key의 값을 받아오고 싶을 때 자주 쓴다. (동적으로 key관련 값 획득)

+ 속성 관련

  ````js
  // 1) 특정 속성 값 변경 or 속성 제거
  const seokInfo = {		// 변수(객체명)
      name:"Seok",		// 속성 명: 속성값  // 속성 명은 '문자열'이어야 하며 속성 값은 'JS의 모든 값'이 사용가능하다.
      gender: "Male"
  }
  SeokInfo.gender = "Female";
  
  const kimInfo = {
      name:"Kim",
      gender: "Female"
  }
  delete kimInfo.gender;
  
  console.log(kimInfo.gender);
  
  => undefined
  
  
  
  // 2) 특정 속성의 객체 내 포함 여부
  // in 사용
  console.log('property' in 객체명);
  // true || false
  
  
  
  // 3) 객체 내의 속성 나열
  // for..in vs for ..of
  // for (key in obj)
  for (key in 객체명) {
      console.log(key);
  }
  
  // for (value of iterable)
  // 배열에 있는 모든 값들이 value에 할당되면서 block안에서 출력 or 값 계산
  // 굳이 value라고 쓸 필요는 없다.
  // 예시
  const array = [1, 2, 4, 5];
  
  // 기존
  for(let i = 0; i < array.length; i++) {
      console.log(array[i]);
  }
  => 1, 2, 4, 5 출력
  
  // easy
  for(value of array) {
      console.log(value);
  }
  => 1, 2, 4, 5 출력
  
  
  
  // 4) 복제 (Fun cloning)
  // 같은 ref를 가지고있다는 것을 전제
  // 예시
  const user01 = { name: 'ellie', age: '20' };
  const user02 = user01;
  user02.name = 'coder';
  console.log(user01);
  => {name: "coder", age: "20"}
  
  // old way
  // 예시
  const user03 = {};
  for (key in user) {
      user03[key] = user01[key];
  }
  console.log(user03);
  => {name: "coder", age: "20"}
  
  // assign함수 사용
  // 예시
  const user04 = {};
  Object.assign(user04, user01);
  console.log(user04);
  => {name: "coder", age: "20"}
  
  // 특징
  // 예시
  const fruit1 = { color: 'red' };
  const fruit2 = { color: 'blue', size: 'big' };
  const mixed = Object.assign({}, fruit1, fruit2); 
  console.log(mixed.color);	// blue	
  // blue가 나오는 이유는 뒤에 나오는 property일수록 힘이 세다. 갑을 덮어씌운다.
  console.log(mixed.size);	// big
  ````

+ Object와 Array는 서로 종속 시킬 수 있다

  ````js
  const myInfo = {
      name: "Seok",
      age: 25,
      gender: "Male",
      favLiquor: [
          {
              name: "on the rocks",
              coke: false
          },
          {
              name: "Jack Coke",
              coke: true
          }
      ]
  }
  ````

  위 코드에서 favFood의 fatty를 출력할 시,

  ````js
  console.log(myInfo.favLiquor[0].coke)
  => `false`
  이런 식으로 출력 가능
  ````

+ JSON (javaScript Object Notation)

  + HTTP (Hypertext Transfer Protocal)
    + Client와 Server가 어떻게 hypertext를 주고받을 수 있는지 규약한 프로토콜 중 하나
    + hypertext : hyperlink, 리소스문서, 이미지파일 등등 포함
    
  + independent programming language and platform

  + object -> json(string) serialize(직렬화) // json -> object deserialize

  + 서버와의 데이터 송수신 시 갖게되는 데이터 형식이며 object와 비슷한 구조를 가지고 있지만 사실상 string이다.

    ````js
    name: "Seok"		// object		
  "name": "monkey"	// JSON
    ````

  + JS는 일반적으로 App의 비즈니스 로직을 담당(코드)하기 때문에 data와 섞어서 같이 보관하는 것은 좋지 않다. 그러므로 main.js에 배열로 data를 보관할 수도 있겠지만 data.json에 따로 data를 보관하는 것을 지향하도록 하자.

  + Object <=> Array 변환 메서드

    + stringify (Object => Array)

      ````js
      const myInfoJSON = JSON.stringify(myInfo);
      console.log(myInfoJSON)
    =>	"name": "Seok",
          "age": "25",
        ~~~
      ````

    + parse (Array => Object)

      ````js
      여기서 myInfoJSON은 외부에서 받아온 JSON파일이라 가정한다
          
      console.log(JSON.parse(myInfoJSON).name)
      => Seok
      parsing의 의미를 모른다면 직접 검색하여 공부해보길 바란다.
      
      console.log(myInfoJSON.name)
      => undefined
      이는 성립되지 않는다 JSON파일은 property로 접근할 수 없기 때문이다.
      ````


+ 상속과 다양성

  ```js
  // 하나의 공통적인 속성을 찾아서 extends 클래스를 통해 재사용한다. - 유지, 보수 용이
  // 예시
  class Shape {
      function (width, height, color) {
          this.width = width;
          this.height = height;
          this.color = color;
      }
      draw() {
          console.log(`drawing ${this.color} color of`);
      }
      getArea() {
          return this.width * this.height;
      }
  }
  
  class Rectangle extends Shape {}
  class Triangle extends Shape {
      draw() {
          super.draw();	// 공통적으로 정의한 draw도 출력하고 싶다면 super메소드를 사용하여 호출한다.
          console.log('세모');	// 세모 출력
      }	
      getArea() {
          return (this.width * this.height) / 2;
      }		// 필요한 함수들만 overridng해서 다양성을 부여할 수 있다.
  }
  const rectangle = new Rectangle(20, 20, 'blue');
  rectangle.draw();
  console.log(rectangle.getArea());
  const triangle = new Triangle(20, 20, 'red');
  triangle.draw();
  console.log(rectangle.getArea());
  // 이렇게 상속을 이용하면 공통된 아이들을 일일이 작성하지않아도 동일한 것들을 계속 재사용 할 수 있다.
  
  // Class checking: instanceOf
  console.log(rectangle instanceof Rectangle);	// t
  console.log(triangle instanceof Rectangle);		// f
  console.log(triangle instanceof Triangle);		// t
  console.log(triangle instanceof Shape);			// t	
  console.log(triangle instanceof Object);		// t
  ```

+ **this** 

  + JS에서는 선언할 때 결정되는 것이 있고 호출할 때에 결정 되는 것이 있는데, JS의 핵심은 '누가 실행(호출)했냐'가 핵심이다.

  + `this`는 호출할 때 결정되며 여기서 호출한 객체가 바로 `this`이다. 

    다시 말해,  '누가 실행(호출)했냐'에서 '누가'에 해당하는 것이 바로 '호출한 놈(객체) === `this`'라 볼 수있다.

    직접 호출한 그 코드를 살펴보자.

  + 추가적으로 호출한 것과는 무관하게 `this`를 고정시키는 것이 바로 `bind`이다.

    ````js
    let someone = {
        name : 'seok',
        whoAmI : function() {
            console.log(this);
        }
    };
    
    someone.whoAmI();
    // {name: "seok", whoAmI: f}
    
    // 호출하는 방법에 따라 this 값이 달라진다고 했으므로 호출하는 방법을 달리 해보자
    let myWhoAmI = someone.whoAmI;
    myWhoAmI();
    // Window {postMessage: f, blur: f, ...}
    
    // myWhoAmI는 전역 객체(Global Object) 즉, 최상위 객체인 window에서 호출되었기 때문에 Window가 나온 것이다.
    // 사실 Window.myWhoAmI(); 라고 볼 수 있는 것이다.
    ````

    

    

#### DOM

+ Document Object Model

+ 일반 함수(function)은 객체 지향 언어를 사용하는 방식이 아니다. 이는 **constructor 함수(생성자 함수)**로 해결 가능하다

  ````js
  // constructor function
  // 일반적으로 함수 이름의 첫 글자를 대문자로 네이밍 한다
  function Song(title, singer) {			//	song (x) Song(o)
  	this.title = title;			// this.title의 title이 object의 property가 된다
      this.singer = singer;		//	this는 현재 이 object를 말한다
      console.log(this);
  }
  
  const song1 = new Song("Gang", "Rain");
  // new 키워드를 통해 기존 인스턴스를 삭제하고 새로운 인스턴스를 생성한다
  ````

+ 자바스크립트에서 html에 있는 요소(태그)를 객체로 바꾸어서 변경(사용)할 수 있다. 한 마디로 js에서 html 내용 조작이 가능하다

  또한 JS가 html을 제어하기 위해 필요한 것이 DOM이라 할 수 있다

  + **자신의 페이지에서 js로 선택하는 것은 모든 것이 객체 Object가 된다**

    ````js
    document.queryselector()
    ````

    여기서 **document**는 html을 의미하며 이를 통해서 HTML Document가 JS가 되는 것이다

    또한 document는 많은 key(.~)를 가지고 있다.

    ````js
    console.log({ document })
    ````

    이것으로 객체화된 document 내에 있는 요소들을 볼 수 있다

+ `console.dir()`은 `console.log`와 달리 JSON과 같은 트리 구조로 출력하는데, DOM JS 객체의 전체 표현을 보려고 할 때 유용하다

  물론 `console.log`는 요소를 HTML과 같은 트리 구조로 출력한다

  ````js
  title.innerHTML = "Hi! From JS";
  title.style.color = "red";
  document.title = "I own you now";
  ````

+ DOM `event` 객체

  + DOM과 관련된 이벤트가 발생하면 관련 정보는 모두 event객체에 저장된다.

    ex) event 발생 요소, type, 관련 데이터 등등
  
  + 원리

    + 실행하고자 하는 함수의 매개 변수로  `event`를 등록하면 `event`라는 객체를 만들어 함수의 인수로 넣어주어 매개 변수로 전달 되는 것이다. 

  ````js
  // event객체에 저장된 정보를 가져오는 방법
  event.target.~ // ~에는 target을 따르는 어떠한 하위 요소들도 올 수 있다.
  event.target.style 등
  // 여기서 함수의 매개 변수로 event를 불러올 때, e나 event로 많이 표기한다.
  ````
  
+ **선택자**

  ````js
  document.querySelector()	//	정의 : queryselector는 특정 name이나 id를 제한하지 않고 css선택자를 사용하여 요소를 찾을 수 있다. 객체를 id로 찾고싶다면 "#title"  class로 찾고 싶다면 ".title"
  document.querySelectorAll()		// 태그 모두 선택 ex) button태그 모두 선택
  document.getElementById		//	gets only by ID
  document.getElementsByClassName		//	 gets MANY elements by classname
  
  // querySelector()와 querySelectorAll()의 차이
  // querySelector()는 한 개의 요소만을 객체로 반환하며 동일 클래스명을 가진 요소들이 있을 경우 html 문서내의 첫번째 요소를 반환(지정)한다.
  // querySelectorAll()는 해당 선택자에 해당 하는 모든 요소를 객체 배열로 가져온다.
  // 즉, 반환 객체가 nodeList이기에 eventListen에 등록할 때 for문(for of) 또는 forEach문을 사용해야한다.
  // 예시
  const buttons = document.querySelectorAll(".button")
  const onClickBtn = () => {
      // ...
  }
  for (const button of buttons) {
    button.addEventListener('click', onClickBtn) 
  }
  
  
  // 심화
  // 상황 : div 태그 안에 들어 있는 id값이 order인 태그 선택
  document.querySelector('부모태그 자식태그')
  document.querySelector('div #order')			// 띄어 쓰기(공백)으로 구분
  ````
  
+ **Event와 Event handlers**

  + Event : 웹사이트에서 사용자가 태그와 상호작용 할 때 발생하는 것들 ex) button 클릭 시, click 이벤트 발생

  + 태그에 Event 달기

    + addEventListener

      + type 종류 링크

        [MDN에서 종류 보기](https://developer.mozilla.org/ko/docs/Web/Events)
      
      ````js
      // 기본 문법
      target.addEventListener("type", listener);
      target.addEventListener("event 행위", 리스너 함수);
      
      // 자바스크립트는 자동으로 이벤트를 감지할 수는 없다. 그래서 우리는 이를 감지할 수 있게 만들어 줘야 한다.
      // 자바스크립트가 우리의 이벤트를 받기 기다리는 것을 Listen to event라 칭한다. 
      // 여기서 우리는 event가 무엇인지 정해야 하는데, listener는 우리가 이벤트에서 다룰 함수를 의미한다.
      // `type`은 target이 기다리는 event 행위를 말한다.
      
      
      
      // 예시 1)
      function handleResize(){
          console.log("I have been resized")
      }
            
      window.addEventListener("resize", handleResize);
      
      // 코드 맨 마지막줄에 handleResize()라고 적지 않는 것은 resize 이벤트 행위와는 상관 없이 바로 함수를 호출해버리기 때문이다. 
      // 이제 우리는 우리가 원할때 이 함수를 호출할 수 있다.
      
      
      
      // 예시 2)
      const onInput = (e) => {
          console.log(e.target.value);
      };
      
      const $input = document.querySelector('input');
      $input.addEventListener('input', onInput);
      // addEventListene에 넣는 함수에는 매겨변수를 통해서 이벤트에 관한 정보가 제공된다.
      // 위에서는 이벤트에 관한 정보 매개변수로 'e'로 넣었는데, 말그대로 매개변수이므로 아무 이름을 지어도 된다.
      // 보통 'e'나 'event'를 많이 쓴다. 다른 사람이 보기에 헷갈리지 않게 하기 위해서다.
      // 한마디로 위의 'e'는 input event가 발생했을 때 발생한 event의 정보를 담고있다.
      // event객체의 대표적인 속성
      // target : 이벤트가 발생한 요소 || type : 발생한 이벤트의 종류
      
      
      
      // tip) 입력창에 이벤트를 걸 때에는 버튼에 click 이벤트 보다는 form으로 감싸서 submit 이벤트를 사용하는 것이 좋다. 그 이유는 버튼을 클릭하지 않아도 [Enter]키를 눌러 값 제출도 가능해지기 때문이다.
      
      
      
      // addEventListener 연결 함수 제거방법
      removeListener
      
      // 사용법
      tag.addEventLinstener('event', func);
      tag.removeEventLinstener('event', func);
      ````
      
      

#### 자주 쓰이는 기본 메서드와 객체

+ `prompt`

  + 브라우저 내에 포함되어있는 함수

  + 사용자에게 필요한 정보(값)를 얻기 위해 사용. 즉, 사용자로부터 값을 전달 받음

    ````js
    // 기본 문법
    prompt('사용자에게 표시할 메세지');
    
    // 예시
    prompt('참가 인원을 말해주세요');
    ````

  + `prompt`함수로 입력받은 값은 모두 ''문자열''이 된다.

    ````js
    // 따라서 숫자, 불리언 등이 문자열로 변환되면 우리는 다시 바꿀 필요가 있다.
    // 이때, Number함수를 사용한다.
    
    const number = prompt('참가 인원을 말해주세요');
    const realNumber = Number(number);	// const number = Number(prompt('참가 인원을 말해주세요'));
    console.log(typeof realNumber);
    ````

    

+ `alert`

  + 브라우저 내에 포함되어있는 함수

  + 사용자에게 경고하거나 메세지를 알릴 때 사용

  + 일반적으로 `undefined`를 return(반환)함

    ````js
    // 기본 문법
    alert('사용자에게 표시할 메세지');
    
    // 예시
    const goOut = alert('접근할 수 없습니다');
    ````

    

+ `confirm`

  + 사용자에게 의사를 물어볼 때 사용

    ````js
    // 기본 문법
    confirm('사용자에게 표시할 메세지');
    
    // 예시
    const yesOrNo = confirm('확인 또는 취소를 누르시오');
    console.log(yesOrNo);
    ````

    

+ `.focus`

  + 입력 태그 내부에 커서 위치하게함 (입력 태그 선택)

    ````js
    // 기본 문법
    입력창.focus()	// 입력창 하이라이트
    
    // 예시
    input.focus();
    ````



+ `eval`

  + 문자열을 자바스크립트 코드처럼 실행할 수 있다.

    ````js
    eval('1+2');
    => 3
    
    // 사실 eval 함수는 아주 간편하지만 그에 따른 문제점이 크다. 
    // eval함수에 문자열을 입력하면 그대로 실행되므로 해커가 이를 통해
    // 우리의 프로그램에 위험한 코드를 실행할 수도 있다.
    // 이러한 이유로 실무에서는 쓰지 않는 것이 보안상 안전하다.
    
    // 예시
    let code = 'alert("Hi")';
    eval(code); // Hi
    
    let value = eval('1+2');
    alert(value); // 3
    
    let plus = eval('let i = 0; ++i');
    alert(plus); // 1
    
    // 예제
    const str = (가);
    eval('a' + str + 't("eval은 evil이다")'); // (가) === ler
    ````



+ `Math.(random)`

  + 0이상 1미만의 수를 무작위 생성

    ````js
    // 무작위의 자연수 생성하기
    // 예시) 1부터 100까지의 자연수 얻어내기
    
    // 사고 논리
    Math.random()		-		0 <= x < 1 범위 내의 수 1개 출력
    Math.random() * 100		-		0 <= x < 100 범위 내의 수 1개 출력
    Math.random() * 100 + 1		-		1 <= x < 101 범위 내의 수 1개 출력
    Math.floor(Math.random() * 100 + 1)		-		x = {1, 2, 3, ... , 100} 범위 내의 수 1개 출력
    
    // 여기서 Math.floor()는 숫자 '내림'의 메서드이다.
    // cf) Math.ceil() '올림'	//	Math.round() '반올림'
    // 이 중 Math.floor()를 사용한 이유
    // 1 <= x < 101는 자연수가 아닌 단순히 '범위'이다. 이 범위에서 자연수를 얻기 위해서 ex) 100.3 과 같은 수를
    // '내림' 함으로써 우리가 원하는 100이라는 자연수를 얻을 수 있을 것이다.
    
    // cf) Math.(random)함수는 암호학적으로는 완전한 무작위라 할 수 없다. 따라서 보안에 취약하기에
    // 이와 관련된 일에서는 window.crypto.getRandomValues() 객체를 사용하자
    
    // 숫자를 무작위를 섞는 알고리즘으로
    // Fisher-Yates shuffle algorithm를 많이 사용한다.
    
    ````

  + `Math` 객체
    + 수학 관련 메서드
    + ex) `.min`(최솟값), `.round`(반올림),`.pow`(제곱) 등

  

+ `event.preventDefault()`

  + html 태그의 기본 동작을 취소하는 코드

    + 기본 동작의 예시 : `form`에서 `submit` 이벤트가 발생할 시, 브라우저 새로고침

    + 데이터를 계속 유지하고 싶을 때 사용 용이

      

+ `.createElement()`

  + 문서 내에 새로운 요소 추가

  + 단, 다른 태그에 `append`나 `appendChild`를 하기 전까지는 화면에 보이지 않는다.

  + `createElement()`나 `.createTextNode()`는 JS로 태그를 만드는 법이라면 `append`나 `appendChild`는 실제 화면에 그리는 법이라고 생각하면 된다.

    ````js
    .createElement( 'h1' )
    
    => <h1></h1> 코드 생성
    ````

    

+ `.createTextNode()`

  + 선택한 요소에 텍스트 추가

  + 단, 다른 태그에 `append`나 `appendChild`를 하기 전까지는 화면에 보이지 않는다.

    ```js
    .createTextNode('hello')
    
    => hello 라는 문자열 추가
    ```

    

+ `.appendChild()`

  + 선택한 요소에 하나의 자식 요소 추가 (DOM 함수)

    ````js
    // return값 반환o
    // 예시
    const span = document.createElement('span');
    console.log(document.body.appendChild(span)); // span(Node object)
    
    // Node Object(요소)
    const $button = document.createElement( 'button' );
    document.body.appendChild( $button )
    // body의 자식 요소로 $button 추가
    // 결과적으로 body 내에 button 요소가 추가된다.
    
    // 문자열(DOMString)
    // cf) apeendChild()는 append()와 달리 문자열을 넣기 위해서 createTextNode를 사용해야한다.
    // 예시
    const message = document.createTextNode('안녕');
    $logs.appendChild(message);
    // 이런 불편함을 append()가 해소
    ````
    
    

+ `append()`

  + `.appendChild()`와 달리 선택한 요소의 내용 끝에 

    여러 개의 자식 요소 추가 가능 + 문자열 삽입 가능(JS 함수)

    ````js
    // return값 반환x undefined
    const span = document.createElement('span');
    console.log(document.body.append(span)); // undefined
    
    // Node object(요소)
    const span = document.createElement('span');
    const p = document.createElement('p');
    li.append(span, p); // 여러 개의 요소 추가
    
    // 문자열(DOMString)
    span.append('hello'); 
    => <span>hello</span>
    
    // 요소 + 문자열
    p.append('${value}: ${name} 입니다', document.createElement('br'));
    ````
    
    

+ `sort()`

  + 배열을 정렬

    ````js
    // 비교 함수 : 함수에 적힌 규칙에 따라 배열이 정렬됨
    (a, b) => a - b
    // a - b > 0이면 b, a 순서로 정렬
    // a - b < 0이면 a, b 순서로 정렬
    
    let score = [5, 11, 2, 10, 3, 1]; 
    
    // 오름차순 정렬
    score.sort(function(a, b) {
        return a - b;
        // 1, 2, 3, 5, 10, 11
    });
    
    // 내림차순 정렬
    score.sort(function(a, b) {
        return b - a;
        // 11, 10, 5, 3, 2, 1
    });
    ````

    

+ `setTimeout()`

  + 코드나 함수를 일정 시간 뒤에 한번 실행

    ````js
    // 기본 문법
    setTimeout(() => {
        	...
        }, delay);
    // delay의 단위는 ms ex) 3000ms - 3s
    
    // 예제
    setTimeout(() => {
      console.log('hi!');
    }, 3000);
    // 3초 후 함수가 실행됨
    
    // 종료 방법
     clearTimeout(NAME);
    
    // 사용 case
    // 1) 접속 후 몇 초 후에 팝업 또는 배너창 띄우기
    // 2)방문자의 스크롤이 브라우저 일정 위치에 올 경우 몇 초 뒤에 애니메이션 실행
    // 3) 검색창 또는 일부 섹션 몇 초 뒤에 사라질 경우
    // 4)방문자 접속 후 20-30초가 지난 뒤 메일 구독을 신청하는 팝업창을 띄울 경우
    ````

  

+ `setInterval()`

  + 코드나 함수를 일정 시간마다 반복 실행

    ````js
    // 기본 문법
    setInterval(() => {
        ... 
    }, delaytime);
        
    // 예제
    setInterval(() => {
      console.log('hi!');
    }, 3000);
    // 3초 마다 함수 실행
    
    // setInterval함수를 setTimeout함수를 사용하여 나타내기
    const myInterval = () => {
        setTimeout(() => {
            console.log('hi!')
            myInterval()
        }, 3000);
    }
    myInterval();
    
    // 종료 방법
     clearInterval(NAME);
    
    // 사용 case
    // 1) 갤러리 형식의 뷰를 만들어 이미지를 정해진 시간 간격으로 바꾸어 적용하는 경우
    // 2) 일정 시간 간격으로 배너광고를 바꾸면서 보여줄 경우
    // 3) 일정 주기로 계속해서 서버와 통신이 필요한 경우
    ````

    

+ `textContent`

  + 태그 내부의 값을 얻거나 수정(추가)할 때 사용 (Node의 속성)

  + **무조건 문자열로 출력**. 그러므로 빈 값이라면 undefinded가 아니라 ' '이 출력

  + `<script>`나 `<style> `태그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 읽음

    + ex) 공백과 같은 모든 텍스트를 그대로 가져옴
    
    ````js
    태그.textContent // 태그 내부의 문자열 가져옴
    태그.textContent = 값 // 태그 내부의 문자열을 해당 값으로 설정
    
    HTML
    <div id='test'>A   <strong>class</strong></div>
                                     
    function getTextContent()  {
      const element = document.getElementById('test');
      console.log(element.textContent);
    }
    getTextContent();
    // A   Class (띄어쓰기 즉, 공백 그대로 반영)
    ````
    
    

+ `value`

  + 기본적으로 태그 내부의 값을 선택할 때는 `textContent`를 사용하는 것이 맞으나

    입력태그는 value를 사용한다. ex) input, select, textarea

    ```js
    입력창.value // 입력창의 값을 가져옴
    입력창.value = 값 // 입력창에 값을 넣음
    ```

    

+ `innerText`

  + `textContent`와 '텍스트 추가'라는 공통된 특성을 가지고있지만 불필요한 공백을 제거하고 텍스트로 반환한다는 차이점이 있다.

  + 즉, 사람이 읽을 수 있는 요소만 처리한다.

    ````js
    HTML
    <div id='test'>A   <strong>class</strong></div>
    
    // 1. 값 가져오기
    function getInnerText()  {
      const element = document.getElementById('test');
      console.log(element.innerText);
    }
    getInnerText();
    // A class출력 (html에서 띄어쓰기 3번 했지만 1번으로 출력)
    
    
    // 2. 값 설정하기
    function setInnerText()  {
      const element = document.getElementById('test');
      element.innerText = "<div style='color:red'>A</div>";
    }
    setInnerText();
    // <div style='color:red'>A</div> 문자열 그대로 element 안에 포함
    ````

    

    

+ `innerHTML`

  + 텍스트를 다룬다는 점에서 `innerText`과 같지만 text element가 아닌 html element를 다룬다는 점에서 차이가 있다.

    ````js
    HTML
    <div id='test'>A<strong>class</strong></div>
    
    // 1. 값 가져오기
    function getInnerText()  {
      const element = document.getElementById('test');
      console.log(element.innerHTML);
    }
    getInnerText();
    // A   <strong>class</strong> 출력
    
    
    
    // 2. 값 설정하기
    function setInnerText()  {
      const element = document.getElementById('test');
      element.innerHTML = "<div style='color:red'>A</div>";
    }
    setInnerText();
    // html태그가 해석되어 A가 빨간색을 가지고 출력 (class는 출력 안됨)
    ````

    

+ `classList`

  + 클래스 조작을 위해 다양한 메서드 활용

    ````js
    // .add - 클래스 삽입
    // .remove - 클래스 제거
    // .contains - 클래스 존재 여부 체크
    // .toggle - 클래스 존재 여부 체크 후 없으면 삽입 있으면 제거
    ````

    

#### RESTful API

+ fonrt-end의 핵심적인 작업
+ API?
  +  Application Programming Interface
  + 어떠한 요청에 대한 알맞은 응답을 돌려줌
+ 순서
  + fatch request로 api 호출
  + 데이터 json 형태로 받음
  + json 가공 후 client에 표시 
    + 가공 - 우리가 다룰 수 있는 object로 변환. 이를 통화여 화면(client) 구성

+ Postman
  + 데이터를 사전에 확인해 볼 수 있는 Tool
  + parameter 사용법
    + key : value 검색을 통해 필요한 데이터만 골라 반환 가능
+ jsonplaceholder
  + json api 통신을 테스트할 수 있는 가짜 데이터 무료 제공
+ axios
  + 프론트엔드와 백엔드 사이의 json api 통신을 더 쉽게해줌