#### 특성

+ 브라우저와 JS

  + 각 브라우저가 사용하는 JS 엔진
    + 크롬, 엣지, 오페라 : VB (오픈소스 엔진)
    + 파이어폭스 : 스파이더몽키
    + 사파리 : 웹킷
  + JS 실행 원리
    + interpreter 방식으로 실행
      + Tip) `interpreter` vs `complie`
        + interpreter
          + 코드를 한 덩어리씩 실행
          + 코드를 작성하면 엔진이 바로 코드를 이해할 수 있음. 즉, 코드를 수정하면 별다른 프로세스 없이 바로 적용
          + ex) Java Script
        + complie
          + 우리가 작성한 소스코드들을 머신코드로 변환하는 과정을 거친 후 한 번에 실행
          + ex) C, C++

  + 클라이언트 => 확장 

    + 자바스크립트 엔진이 브라우저 밖을 나오는 것을 의미함

    + ex) node.js 서버 // electron 데스크탑 앱 제작 // react native 모바일 앱 제작 등등

  + 참고사항

    + 브라우저의 console 기능
      
      + REPL(Read-Eval-Print Loop) 원리 사용
      
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
    
      

#### 변수

+ 변수와 상수의 차이
  + 변하는 수 vs 변하지 않는 수

+ 선언 순서
  
  + 1) 선언(declaration)
    + 선언 시,  `_`, `$`를 제외한 특수문자가 들어가거나 숫자로 시작하는 변수를 선언할 수 없다
    + 선언 시, 전 세계 공용어인 영어로 선언하는 것이 좋으며 프로그래밍을 하면서 보게 되는 단어들 즉,  '예약어(reserved word)'는 사용할 수 없다. 물론 '예약어' 중, 변수명으로 가능한 것도 있지만 쓰지 않는 것을 지향하자.
    + 보통
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
    
      

#### 조건문

+ 연산자
  + 비교 연산자 
    + == (!== 같지않다)
    + ===
  + 대입 연산자
    + =
  + 피 연산자
    + && (and)
    + || (or)

+ **if문** 기본 형식과 예제

  ````js
  // 기본 형식
  if (조건식) {
      동작문;
  }	// 동작문이 하나일 때는 중괄호로 감싸지 않아도 되지만 되도록이면 실수를 줄이기 위해 중괄호로 감싸는 습관을 들이자
  
  > if (true) {
      console.log('Hello');
  }
  < Hello
  // true는 항상 참이기에 조건식이 참으로 성립한다.
  
  > if (false) {
      console.log('Hello');
  }
  // 조건식이 false 면 거짓인 값이기에 콘솔에 값이 실행결과가 출력되지 않는다.
  
  
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
      console.log("big");
      break;
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
  
  => junior
      
      
  // 두 3항 연산자 식과 if문은 결괏값이 같다.
  
  
  // if (x > 20) {
  //   group = "senior"
  // } else {
  //   group = "junior"
  // }
  
  console.log(group)
  
  => junior
  ````

  

#### 데이터 타입(자료형)

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
  
    + join // split 함수
  
      + 각각의 글자를 합쳐 출력 // 쪼개서 **배열의 형태**로 출력
  
      ````js
      const hobbies = ["game", "programming", "tv"];
      console.log(hobbies.join(""))
      => `gameprogrammintv`
      console.log(hobbies.split(""))
      => `"g","a","m", ~~`
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
  
+ boolean
  
+ true // false
  
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

    

+ Float
  
  + Floating number
  + 떠돌이 소수점
  
+ null

  + 선언되었고 null로 값 지정(빈 값)

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



#### Array

+ 데이터 저장과 정렬

+ 생성(정의)시 []  브라켓 사용 

+ [] 안에는 문자열, 문자, 숫자, 정의한 변수 등이 들어갈 수 있다. 물론 혼용하여 같이 들어갈 수도 있음

+ n번째의 데이터를 출력 원할시 `배열명[n-1]`로 출력한다

  ````js
  심화 )
  const users = ["june", "seok", "kim"];
  console.log(users.length);
  => `3`		//		users 배열의 길이를 length object를 통해 알 수 있다
  console.log(users[users.length - 1]);
  => `kim`	//		users라는 배열의 [배열의 길이-1](맨 마지막 요소)을 출력하는 것이다
  			// 		여기서는 [3(배열의길이)-1] 즉 [2]의 값을 출력한다
  ````

+ 기본 메서드

  + push

    + 배열 맨 마지막에 추가

      ````js
      const users = ["june", "seok", "kim", ... , "mike"];
      users.push("soo")
      => 배열의 마지막에 soo 추가
      users[0] = soo	// 배열 첫번째 요소 "june"을 "soo"로 변경
      users[99] = soo 등으로 값 변경 or 추가를 할 수 있지만 현실적으로 요소가 몇번 째 값인지 다 기억하고 작업할 수 없다
      users[users.indexOf("mike")] = "michael" 로 변경하는 방법도 있다
      99와 users.indexOf("mike")가 동일한 의미를 지닌다는 것을 알 수 있다
      ````

  + unshift

    + 배열 맨 앞에 추가

      ````js
      users.unshift("kan");
      => 배열의 처음에 kan 추가
      ````

  + pop

    + 배열에서 특정 요소 빼내기

      ````js
      const users = ["june", "seok", "kim"];
      users.pop()
      users.pop()
      console.log(users)
      => pop매서드를 두번 실행했기에 june추출 (배열 맨 뒤에서부터 하나씩 빼는 개념)
      ````

  + splice

    + 배열 특정 구간에서 자르기

      ````js
      const users = ["june", "seok", "kim"];
      users.splice(1, 2)
      => ["kim"] 출력
      users.splice(특정구간지정, 특정구간부터n개제거)
      ````

  + indexOf

    + 배열 내에서 특정 요소의 index값(순서) 구하기

      ````js
      const users = ["june", "seok", "kim"];
      console.log(users.indexOf("seok"))
      => 1
      ````

  + isArray

    + Array인지 판단

      ````js
      console.log(Array.isArray(users))
      => true
      console.log(Array.isArray(hello))
      => false
      ````

  + ... spread operator

    + 배열의 값들만 가져옴

      ````js
      console.log(users)
      => {"june", "seok", "kim"}
      console.log(...users)
      => june seok kim
      ````

      

+ 위의 Array 예시들에서 const로 정의했지만 에러가 나지않고

  Array의 값들을 바꿀 수 있었던 이유는 Array **자체**가 아닌 Array의 **요소**를 변경했기 때문이다

  ````js
  const users = ["june", "seok", "kim"];
  users = ["human"];
  => error		//		이는 배열의 값(요소)이 아닌 배열 그 자체를 []를 써가며 변경했기 때문에 성립하지 않는다
  ````

  

#### Object

+ Array와 달리 각 value에 이름을 줄 수 있다. 쉽게 말해, data에 label을 주는 것이다

+ 생성(정의)시 {} 컬리 브라켓 사용

+ **Method(메서드)** : object 안에 선언된 함수

+ 특정 데이터 출력 원할시 `객체명.데이터` 로 출력한다

+ 특정 데이터만 가져와서 Update(변경) 가능

  ````js
  const SeokInfo = {
      name:"Seok",
      gender: "Male"
  }
  SeokInfo.gender = "Female";
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
+ JSON

  + 서버와의 데이터 송수신 시 갖게되는 데이터 형식이며 object와 비슷한 구조를 가지고 있지만 사실상 문자이다.

    ````js
    name: "Seok"		// object		
    "name": "monkey"	// JSON
    ````

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

      

#### Function

+ 함수 선언과 실행

````js
함수 선언
function add(){}
function키워드 함수이름(parameter매개변수){실행문}

함수 실행
함수이름(argument전달인자);

예시
function add(a,b) {
    return a + b;
}

add(5, 6);
실제로 값을 보고싶다면
console.log(add(5, 6))
=> `11`

tip) ES6부터는 초기값 설정도 가능
function add(a = 0, b = 1) {
    return a + b;
}
console.log(add())		// 이렇게 아무 값을 넣지않으면 초기값이 반환된다
expected output : 1
````

+ 변수에 함수 넣기

````js
const sum = function(a,b){		//	이렇게 지칭하는 이름이 없는 함수를 '무명 함수' '익명 함수'라 한다
    return a + b;
}
console.log(add(5, 6))
expected output : 11
//  위 함수와 비교해서 
//	function(a,b){		이렇게 지칭하는 이름이 없는 함수를 '무명 함수' '익명 함수'라 한다
//	    return a + b;
//	}
````

+ 매개변수(parameter)와 전달인자(argument)

````js
function sayHello(name, age){
    console.log("Hello!", name, "you have", age);
}

sayHello("Nicolas", 15)
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

+ Arrow 함수
  + 일반 function과 다르게 지정한 변수(객체)에 함수를 담기 때문에 window 객체 안에 들어가지않고 안정적이다
  + this(scope)가 고정이 되면서 혼동이 일어날 일이 적어진다

````js
// function(){} = ()=>{}
const sum = (a, b) => {
    return a + b;
}
// 함수의 인자가 1개 이면 중괄호()를 빼고 쓸 수 있으며
// return값이 1줄 이면 return과 대괄호{}를 빼고 쓸 수 있다
const sum = (a, b) => a + b;
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

  ````js
  document.queryselector()	//	정의 : queryselector는 특정 name이나 id를 제한하지 않고 css선택자를 사용하여 요소를 찾을 수 있다. 객체를id로 찾고싶다면 "#title"  class로 찾고 싶다면 ".title"
  document.getElementById		//	gets only by ID
  document.getElementsByClassName		//	 gets MANY elements by classname
  ````

+ **Event와 Event handlers**

  + Event : 웹사이트에서 발생하는 것들

  + Event 예시

    + addEventListener

      자바스크립트가 우리의 이벤트를 받기 기다리는 것을 Listen to event라 칭한다. 여기서 우리는 event가 무엇인지 정해야한다. listener는 우리가 이벤트에서 다룰 함수를 의미한다. `type`은 target이 기다리는 event 행위를 말한다.

      ````js
      addEventListener구문
      target.addEventListener("type", listener);
      target.addEventListener("행위", 함수);
      ````
````
      
      ````js
      function handleResize(){
      	console.log("I have been resized")
      }
      
      
      window.addEventListener("resize", handleResize);
````

      **코드 맨 마지막줄에 handleResize()라고 적지 않는 것은 바로 함수를 호출해버리기 때문이다. 우리는 우리가 원할때 이 함수를 호출할 수 있다**

#### Tip

+ `console.log`() 는 console 이라는 object안에 log 함수를 뜻한다 

  log 또한 console 안에 속해있기 때문에 함수임과 동시에 object라 할 수 있다

+ 자바스크립트는 html과 css를 바꾸는 기능을 하지만 이벤트에 반응하기 위해 만들어졌다.

  이벤트란? 웹사이트에서 발생하는 것들을 말한다.
  click,resize,submit,input, change, load, before, closing, printing 같은 것들

