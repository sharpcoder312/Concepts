# 목차

1. 들어가기
   1. Markup 이란?
   2. Tag's Attribute and Value
   3. Doctype & Document Structure
2. Head Structure
   1. Meta data
3. 













# 1. 들어가기



#### 1) markup 이란?

browser에게 제공하고자하는 정보가 어떤 성격의 정보인지 알려주는 작업

결국 우리가 전달하고자하는 정보가 무엇인지 생각을 하며 코드를 설계하자.

markup 마크업시, 가장 최소한의 서로 다른 단위부터 파악한다.





#### 2) tag's attribute and value

```html
<p attr="value"></p>
```

**attribute** - 속성

**value** - 값 tag로 설명이 충분하지않을때 사용

물론, 항상 attr가 따라다녀야하는 태그도 있음.





#### 3) Doctype & Document Structure



* __Doctype__

`<!DOCTYPE html>` : Document type Declaration

== DTD 선언 (보통 가장 최신 버전으로 선언된다 ex - html5)

== 문서 형식 선언 (내 문서는 ~버전이다)

Document = Html 그 자체

cf ) 웹 표준 검사기 - W3C validator



* __Document Structure__

````html
<!DOCTYPE html>

<html lang="en">
````

이는 보통 Head Structure 상단에 입력해주는 것이 원칙이다.

여기서 "en"은 english를 나타내며, 값(val)으로 해당 페이지의 주류 언어를 고려하여 ex) en, ko 등 국가별 언어코드를 입력할 수 있다.

[언어코드 참조링크](http://www.w3bai.com/ko/tags/ref_language_codes.html)













# 2. Head Structure

`<head>` 'meta data' declaration about web document





#### 1) Meta data

__meta__란?	정보 => 검색엔진 or 브라우저에 제공





* 반드시 따라오는 속성들

````html
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
````

__name__ == "kinds of meta data"

__content__ == "value of meta data" - http-equiv 또는 name 중 해당 속성의 값

__"viewport"__ - 반응형 웹사이트를 제공 하기위해 필요한 코드. 화면에 렌더링되는 특정 영역을 어떤 방식으로 선언할 것 인가

쉽게 말해 화면사이즈. 현 시대에는 desktop, mobile 등 여러가지 device에서 사용하기 때문에

이것들을 사용해서 각 디바이스에 알맞은 반응형 site를 출력할 수 있다.    cf)  단축키 - `meta:vp`

````html
<meta name="author" content="seok">

<meta name="keywords" content="sharpcoder">

<meta name="description" conent="웹사이트 설명">
````





* 그 외 중요한 속성들

````html
<meta charset="UTF-8"> - 문자 전체의 인코딩 방식 설정
````

__charset__ == charactor(문자,요소,특성,성격) set

일반적으로 Head Structure 내에서 맨 위에 입력

그 무엇보다도 문자 인코딩 방식을 선언해야 하기 때문이며, 방식의 선언이 브라우저에 정보 전달, 화면 출력보다 앞서야함.



__'인코딩'__ 이란?	텍스트 렌더링 시, 텍스트의 출력 방식

ex)	UTF-8(조합형) : 아시아권 언어 문자 출력 특화, EUC-KR(완성형) 등등





````html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
````

__http-equiv__

서버나 사용자 환경의 작동방식을 변경해주는 지시사항 명시

통신 프로토콜 http의 header부분에 특정 내용을 담아서 전송

위 코드는 '해당 html은 IE에서 렌더링될 때, 최신의 IE 렌더링 방식으로 출력한다'라는 뜻을 가짐





* 기타

__`<base>`__

````html
<base href="./css/">
````

`<meta>`에 비해 적게 쓰이지만 중요한 meta data중 하나

절대 경로든 상대 경로든 해당 경로에서 지속적으로 여러 주소들을 가져올 때 쓰일 수 있다.


문서 안의 모든 '상대 경로(URL)'이 사용할 '기준 경로(URL)'을 지정

빈 태그로 단 한번만 사용될 수 있으며,

해당 html의 모든 상대 경로에 영향을 끼치기 때문에, 일부분에서만 사용하는 개념이 된다면 오히려 문제가 될 수 있다.