#### 특성

+ 인터프리터 (컴파일 할 필요x)
  + 코드를 작성하면 엔진이 바로 코드를 이해할 수 있음. 즉, 코드를 수정하면 별다른 프로세스 없이 바로 적용

+ 클라이언트 => 확장 ex) node.js 서버 // electron 데스크탑 앱 제작 // react native 모바일 앱 제작 등등
  + 자바스크립트 엔진이 브라우저 밖을 나오는 것을 의미함

#### 변수 Variable

+ 생성 // 초기화 // 사용 or 업데이트(modify)
  + ex) `a = 21` 변수 a 생성 후 21로 초기화
+  `let`  
  + 처음 변수를 생성을 하거나 초기화 할 때 선언
  + 업데이트 가능
+ `const` 
  + constant 상수
  + let과 달리 업데이트 불가
+ `var` 
  + variable
  + 사용빈도가 현재 엄청 낮다
  + 단점
    + let과 const와 달리 window 객체 안에 저장된다. 반면 let과 const는 ES6부터 따로 저장소가 생겼다 (window객체는 건드리지 않는 것이 좋다)
    + let과 const와 달리 코드블럭 안에서 선언한 것도 밖으로 끄집어 낼 수 있다 (변수의 중복 선언)



#### 데이터 타입(자료형)

+ string
  + 문자열

  + ""  or ''사용

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
      
      심화 )
      const homework = "eng+kor+math"
      console.log(homework.split("+")[0])
      => `eng`		//		여기서 split 하지 않고 [0]만 입력했다면 e가 출력되었을 것이다
      ````

    + toUpperCase // toLowerCase 함수

      + 대소문자로 변환

+ boolean
  
+ true // false
  
+ Number

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

+ symbol

+ type 확인법

````js
console.log(typeof weight)
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
  // 일반적으로 대문자로 네이밍 한다
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
    console.log(document)
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
      target.addEventListener(type, listener);
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

