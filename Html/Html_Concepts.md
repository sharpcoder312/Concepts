# 목차

1. 들어가기
   1. Markup 이란?
   2. Tag's Attribute and Value
   3. Doctype & Document Structure
2. Head Structure
   
   1. Meta data
3. Title, Link, Style & Script
4. Html's various Tags
   1. `<h>`
   2. `<em> <strong> <mark> <b> <i> <u>`
   3. `<p> <hr/> <br/>`
   4. `<a>`
   5. `<img>` // `<figure> <figcaption>`
   6. `<ul> <ol> <li>` // `<dl>`
   7. `<blockquote> <q> <cite>`
   8. `<div> <span>`
   9. `<form>`
      1. `<input>`
      
      2. `<label>`
      
         

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;

# 1. 들어가기

&nbsp;

#### 1) markup 이란?

browser에게 제공하고자하는 정보가 어떤 성격의 정보인지 알려주는 작업

결국 우리가 전달하고자하는 정보가 무엇인지 생각을 하며 코드를 설계하자.

markup 마크업시, 가장 최소한의 서로 다른 단위부터 파악한다.

&nbsp;  
&nbsp;

#### 2) tag's attribute and value

```html
<p attr="value"></p>
```

**attribute** - 속성

**value** - 값 tag로 설명이 충분하지않을때 사용

물론, 항상 attr가 따라다녀야하는 태그도 있음.

&nbsp;  
&nbsp;

#### 3) Doctype & Document Structure

&nbsp;

- **Doctype**

`<!DOCTYPE html>` : Document type Declaration

== DTD 선언 (보통 가장 최신 버전으로 선언된다 ex - html5)

== 문서 형식 선언 (내 문서는 ~버전이다)

Document = Html 그 자체

cf ) 웹 표준 검사기 - W3C validator

&nbsp;  
&nbsp;

- **Document Structure**

```html
<!DOCTYPE html>

<html lang="en"></html>
```

이는 보통 Head Structure 상단에 입력해주는 것이 원칙이다.

여기서 "en"은 english를 나타내며, 값(val)으로 해당 페이지의 주류 언어를 고려하여 ex) en, ko 등 국가별 언어코드를 입력할 수 있다.

[언어코드 참조링크](http://www.w3bai.com/ko/tags/ref_language_codes.html)

&nbsp;  
&nbsp;  
&nbsp;  
&nbsp;

# 2. Head Structure

`<head>` 'meta data' declaration about web document

&nbsp;  
&nbsp;

#### 1) Meta data

**meta** 란? 정보 => 검색엔진 or 브라우저에 제공

&nbsp;  
&nbsp;

- 반드시 따라오는 속성들

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
```

**`name`** == "kinds of meta data"

**`content`** == "value of meta data" - http-equiv 또는 name 중 해당 속성의 값

**`"viewport"`** - 반응형 웹사이트를 제공 하기위해 필요한 코드. 화면에 렌더링되는 특정 영역을 어떤 방식으로 선언할 것 인가

쉽게 말해 화면사이즈. 현 시대에는 desktop, mobile 등 여러가지 device에서 사용하기 때문에

이것들을 사용해서 각 디바이스에 알맞은 반응형 site를 출력할 수 있다. cf) 단축키 - `meta:vp`

```html
<meta name="author" content="seok" />

<meta name="keywords" content="sharpcoder" />

<meta name="description" conent="웹사이트 설명" />
```

&nbsp;  
&nbsp;

- 그 외 중요한 속성들

```html
<meta charset="UTF-8" /> - 문자 전체의 인코딩 방식 설정
```

**`charset`** == charactor(문자,요소,특성,성격) set

일반적으로 Head Structure 내에서 맨 위에 입력

그 무엇보다도 문자 인코딩 방식을 선언해야 하기 때문이며, 방식의 선언이 브라우저에 정보 전달, 화면 출력보다 앞서야함.

&nbsp;

**'인코딩'** 이란? 텍스트 렌더링 시, 텍스트의 출력 방식

ex) UTF-8(조합형) : 아시아권 언어 문자 출력 특화, EUC-KR(완성형) 등등

&nbsp;  
&nbsp;

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
```

**`http-equiv`**

서버나 사용자 환경의 작동방식을 변경해주는 지시사항 명시

통신 프로토콜 http의 header부분에 특정 내용을 담아서 전송

위 코드는 '해당 html은 IE에서 렌더링될 때, 최신의 IE 렌더링 방식으로 출력한다'라는 뜻을 가짐

&nbsp;  
&nbsp;

- 기타

**`<base>`**

```html
<base href="./css/" />
```

`<meta>`에 비해 적게 쓰이지만 중요한 meta data중 하나

절대 경로든 상대 경로든 해당 경로에서 지속적으로 여러 주소들을 가져올 때 쓰일 수 있다.

문서 안의 모든 '상대 경로(URL)'이 사용할 '기준 경로(URL)'을 지정

빈 태그로 단 한번만 사용될 수 있으며,

해당 html의 모든 상대 경로에 영향을 끼치기 때문에, 일부분에서만 사용하는 개념이 된다면 오히려 문제가 될 수 있다.

&nbsp;  
&nbsp;

#### 2) Title, Link, Style & Script

&nbsp;

**`<titel>`**

문서의 대제목 - 아이콘은 관련없음

title 잘 쓰는 법? (검색 최적화)

1. 키워드 단순 나열 X
2. page마다 그에 맞게 변경

&nbsp;
&nbsp;

**`<Link>`**

'외부에 있는 문서를 가져온다'는 개념

`rel` - relationship 관계. 필수 attributon

`href` 외부 문서의 위치를 지정 (경로)

&nbsp;

쓰임 1) 보통 **css stylesheet** 첨부

'link:css' 라고 치면 자동 완성됨

cf) css 요소인 font는 design에 많은 영향을 끼침 <_*추천*_> spoqa-han-sans

&nbsp;

쓰임 2) title 옆의 icon을 가져옴

```html
<link rel="icon" href="./favicon.png" />
```

&nbsp;
&nbsp;

**`style`**

html 문서 내에서 css 코드를 작성할 때 사용

&nbsp;

tip) link든 style 이든 html5보다 낮은 버전에서는 type을 명시해야했지만, html5에서는 type을 자동으로 체크 하기때문에 생략 가능하다.

작성할 `<style>` 태그 안에 어떤 type의 내용을 작성할것인가?

&nbsp;

여기서 각각의 file이나 개념이 어떤 type인지 명시하는 것을 'MIME 타입'이라고 한다.

ex) `text/css, image/png, audio/ogg, video/mp4` 등등 => `<style type="text/css">`

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# 3. Html's various Tags

&nbsp;
&nbsp;

#### 1 ) `<h>`

```html
<h1>Title</h1>
```

제목을 나타내는 태그

`<h1>`로 시작해서 `<h2>` `<h3>` 순차적 기입이 필요하다

목차가 비어 있으면 브라우저나 검색엔진 정보보조기기에서 오류가 나올 수 있다

크기는 css의 font-size로 해결가능하다 `<h>`는 글자 크기를 설정하는 tag가 아니다

`<h1>`은 단 한번만 사용한다 - Nesting 중첩

`<header> <footer>` 섹션과 잘 어울린다

&nbsp;
&nbsp;

#### 2 ) `<em> <strong> <mark> <b> <i> <u>`

&nbsp;

- **emphasis**

  단순한 의미 강조 // 기본적으로 Italic type // em의 중첩 가능. 중첩할수록 강조의미 강해짐 // 정보통신보조기기 등에서 '구두 강조'로 발음

  ```html
  <p>Get out of bed <em>now</em>!</p>
  ```

&nbsp;

- **strong**

  의미의 중요성 (문맥상) // 기본적으로 글씨 굵게

  ```html
  <p>Get out of bed <strong>now</strong>!</p>
  ```

&nbsp;

- **Mark Text**

  형광펜을 사용하여 관심있는 부분을 표시하는 것과 같은 의미 // 의미보다는 시각적 효과

  ```html
  <p>
    Several species of <mark>salamander</mark> inhabit the temperate rainforest
    of the Pacific Northwest.
  </p>
  ```

&nbsp;

- **bring attention**

  특정 텍스트 범위 설정 // 기본적으로 글자 두껍게 표시 // 읽기 흐름에 도움을 주는 용도 // 특별한 의미가 없으며 다른 태그가 적합치 않은 경우 마지막 수단으로 사용

  ```html
  This article describes several <b class="keywords">text-level</b> elements.
  ```

&nbsp;

- **icon**

  `<b>`처럼 특별한 의미가 없으며 다른 태그가 적합치 않은 경우 마지막 수단으로 사용. `<b>`가 text 대상이라면 `<i>`는 '아이콘'이나 '특수기호' 대상 // 기본적으로 Italic type // 두 태그 모두 css로 더 시각적으로 명확히 나타낼 수 있지만, 이 태그들을 사용함으로써 browser에게 중요하다는 메세지를 전달한다는 점이 point다.

  ```html
  <p>
    The Latin phrase <i>Veni, vidi, vici</i> is often mentioned in music, art,
    and literature.
  </p>
  ```

&nbsp;

- **underline**

  css를 쓰지 못하는 경우에만 사용하자

  ```html
  <span style="text-decpration: underline;"></span>
  ```

  &nbsp;
  &nbsp;

#### 3 ) `<p> <hr> <br>`

&nbsp;

- **paragraph**

  문단 나눌 때

  ```html
  <p>This is the first paragraph of text.</p>
  <p>This is the second paragraph.</p>
  ```

  위,아래 static margin이 생김

  하나의 문단을 설정 cf) 문장같은 경우에는 보통 `<span>` 많이 쓴다

  일반적으로 정보통신보조기기 등은 다음 문단`<p>`으로 넘어갈 수 있는 단축키 제공

  대표적인 block 요소

&nbsp;

- **horizontal rule**

  문단의 분리(주제에 의한)를 위해 설정

  ```html
  <p>This is the first paragraph of text.</p>
  <hr />
  <p>This is the second paragraph.</p>
  ```

  단, 수평선을 만들어내기 위한 용도로만 사용해서는 안됨. 이는 어디까지나 의미론적 접근이 아닌 시각적 요소일 뿐임

  물론, `<hr>`을 쓰고 css로 가려줄 수는 있음 - `border: none`

  또한, 모든 요소는 사각형의 성질을 가지고 있는데 `<hr>` 요소 또한 자세히 들여다보면 상하좌우를 가진 사각형이다. 이 부분은 직접 padding값을 넣어보면 시각적으로 확인할 수 있을 것이다. 실제로, `border: 2px`을 입력한다면 위 아래 선에 모두 적용되어 4px만큼 두께가 길어진다. 그러므로`border: none;`에 `border-top` 또는 `border-bottom` 즉, 위나 아래 중 하나만 넣자. 쉽게 말해, 원래 있던 border를 없애고 선을 하나 새로 만든다고 생각하자. `border: none;`은 `<hr>`을 입력할 때 항상 같이 쓰는 습관을 기르자.

&nbsp;

- **break a line** 단순 줄바꿈

  ```html
  동해물과 백두산이 마르고 닳도록<br />
  하느님이 보우하사 우리나라 만세
  ```

  선의 간격(줄 높이)을 늘리고 싶을때

  `<br>`을 여러번 쓰는 것은 html의 의미론적 접근에 벗어나는 행위이다. 이하의 방법으로 대체하자.

  ```css
  p {
    line-height: 50px;
  }
  ```

  cf ) 16px(보통 기본폰트크기) x 1.4 - 일반적인 줄 높이

  &nbsp;
  &nbsp;

  #### 4 ) `<a>` - inline

현재 문서에서 외부 문서 불러오기

```html
<a href="Link"> 홈으로 가기 </a>
```

inline 요소이기 때문에 `display: block`이나 button안에 코드를 작성해서 layout을 쉽게 하는 방법도 있다

anchor. 항상 `href` 라는 attribute가 따른다. (html로 넘어오면서 생략이 가능해졌지만 거의 필수임)

hypertext reference : 링크 주소값

페이지 외 이동 : `a href="주소값" or ".html"` 등

페이지 내 이동 : 이동하고 싶은 section의 attrtibute 값으로 id값을 준다. // a href = #id값 -> 브라우저 url창에도 '주소#id값'입력하면 해당 섹션의 페이지가 나온다

tip ) 메일 쓰기

```html
a href="mailto:mail address"
```

tip ) 전화 걸기

```html
a href="tel:phone number"
```

&nbsp;

- **`target`**

링크 url의 표시위치

value : \_self(현재창.기본값), \_blank

cf ) 새로운 탭에서 링크 열기

```html
<a href="link" target="_blank"> ... </a>
```

target="\_blank" 을 사용한다.

&nbsp;

- **`download`**

이 요소가 리소스를 다운로드하는 용도로 사용됨을 의미

value : boolean형식

&nbsp;

- **`hreflang`**

링크 url의 언어

value : ko, en 등

&nbsp;

- **`rel`**

현재 문서와 링크 url의 관계

value : license, prev, next

&nbsp;

- **`type`**

링크 url MIME 타입

value : text/html 등 html5에서는 type을 자동으로 체크하고 해석하기 때문에 생략 가능하다

&nbsp;

&nbsp;

#### 5-1 ) `<img>` - inline

```html
<img src="image주소" alt="대체 텍스트" />
```

- 반드시 따라오는 속성들

  - `src` - source

    - 절대 경로 : 인터넷에서 가져오는 것. 가지고 오는 이미지는 절대적으로 하나다.그러므로 img a에 대한 b와c의 절대경로는 모두 같다. 도메인과 작업 환경의 위치가 같다면 도메인 생략하고 나머지 주소만 적으면 됨.

    <img src="C:\Users\Seok\Desktop\coding\concepts\Html\images\absolute-path.png" alt="image" style="zoom:50%;" />

    - 상대 경로 : 나에게 저장되어 있는 것

    <img src="C:\Users\Seok\Desktop\coding\concepts\Html\images\relative-path.png" alt="image" style="zoom:50%;" />

  - `art` - alternative text 대체 텍스트

    네트워크가 원할하지 않을 때나, 시각 장애를 가진 분들에게 도움을 줄 수 있음

    크기 줄이려면 `width` or `height` 둘 중 하나만 손봐주면 일정 비율로 변경가능. 물론 css로도 변경 가능

    &nbsp;

- 그 외 속성들

  - `srcset`, `sizes`

    viewport에 따른 image 크기

    [참조링크](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/)

  - `crossorigin`

    특정 페이지, 사이트에서 음악이나 영상 가져올 때 동일한 출처인지 확인 (video 태그도 동일) by CORS 동일출처정책

    &nbsp;

- 유의점

  inline요소지만 height와 weight값이 먹히는데, 이는 이미지 자체에 있는 사이즈 때문이다

  그래도 css법칙에 맞게 block으로 변환 후 사용하자

  또한, 이미지 자체 크기때문에 부모 요소가 크기를 조정해도 영향을 받지않는다. 그래서 부모 요소의 크기를 지정하고 이미지의 크기를 부모에게 맞추는 작업을 많이한다

  `width : 100%` 부모 요소의 width 값에서 %차지

  `height : auto;` 본래 가지고 있던 비율에 맞게 알아서 조정

&nbsp;

&nbsp;

#### 5-2 ) `<figure> <figcaption>`

```html
<figure>
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

- `<figure>`

  이미지, 삽화, 도표, 시 등의 영역 설정

&nbsp;

- `<figcaption>`

  `<figure>`에 포함되어 이미지나 삽화 등의 설명을 표시

  사람이 아닌 브라우저에게 설명하는 tag

&nbsp;

&nbsp;

#### 6-1 ) `<ul> <ol> <li>` - block

- **`ol`**

  ```html
  <ol>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ol>
  ```

  - ordered list

  - 순서가 중요할 때 쓰며 이 항목의 순서는 중요도를 의미할 수도 있다

  - attribute

    - `start` - 항목에 매겨지는 번호의 시작 값

    - `type` - 항목에 매겨지는 번호의 유형 ex) a, A, i, I, 1

    - `reversed` - 항목에 매겨지는 번호 역순 배열

      tip ) attr와 val이 같을 때 reversed="reversed" 이런 것은 그냥 attr만 적어도 적용된다 (boolean형식) reversed

- **`ul`**

  ```html
  <ul>
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
  </ul>
  ```

  - unordered list
  - 순서는 중요하지 않을 때 쓴다

- **`li`**

  - `<li>`를 `<ul>`이나 `<ol>`로 감싸서 출력한다

    '부모 자식 관계' `<ul>`과 `<ol>`의 직계 자손은 오직 `<li>`만 가능하다.

    ex) list마다 link를 걸고 싶으면 위계 ol -> a -> li (x) ol -> li -> a (o)

    ol과 ul은 서로를 부모자식관계로 유동적으로 가질 수 있다.

  - `display: list-item` 의 형태를 가지며 이는 block element에 속한다고 봐도 무방하다

  &nbsp;

  &nbsp;

#### 5-2 ) `<dl>`

```html
<dl>
  <dt>Name</dt>
  <dd>Sharpcoder</dd>
  <dt>Born</dt>
  <dd>1997</dd>
  <dt>Birthplace</dt>
  <dd>Korea</dd>
  <dt>Color</dt>
  <dd>Black</dd>
</dl>
```

- description list 정의 목록

- 사용 용도

  - 용어 정의 ex) 사전 용어 정의
  - key - value로 정보 제공 `{ key: value }` ex) `이름: 샤프코더`, `직업: 프론트엔드 개발자`

- 하위태그

  - **`<dt>`**

    description term

    key값을 나타내며 보이지않게 하는한이 있더라도 무조건 dl을 쓸 때, 존재 해야한다.

  - **`<dfn>`**

    define 말 그대로 정의된 용어 표시

    `<dt>`와 `<dd>`와는 달리 필수 자식 tag가 아니다

    `<dfn>`는 독자적으로 `<dl>` 없이도 언제나 사용가능하다.

  - **`<dd>`**

    description data - value값 (설명)

- 특징

  - `<dl>`의 하위 태그로는 `<div>, <dt>, <dfn>, <dd>`만 가능하다.

  - `<dt>`와 `<dd>`는 항상 같이 다녀야한다. 단독 출현 x 이중 출현 o

    ex) 2개의 연속적 dt, 2개의 연속적 `<dd>` 사용 모두 가능

  - `<dl> <dt> <dd>` 형식에 css요소를 입히고 싶다면 다른 태그로 대체하여 style을 줄 수도 있다

    ex) ul ol 활용

    <img src="C:\Users\Seok\Desktop\coding\concepts\Html\images\dl-ulol.png" alt="image" style="zoom:80%;" />

&nbsp;

&nbsp;

#### 7 ) `<blockquote> <q> <cite>`

- 인용 // 출처와 관련 ex ) quotation

- **`blackquote`**

  - 문장 or 내용 전체가 인용문일 경우

  ```html
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  ```

  &nbsp;

- **`q`**

  - 문장 내에 인용문 삽입 경우

    ```html
    <p>
      When Dave asks HAL to open the pod bay door, HAL answers:
      <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921"
        >I'm sorry, Dave. I'm afraid I can't do that.</q
      >
    </p>
    ```

    &nbsp;

- **`cite`**

  - 보통 출처 or 화자를 밝힐 경우 ex ) 책, 논문, 영화, tv프로, 노래, 게임 등의 제목

    ```html
    <blockquote cite="http://~~"></blockquote>
    ```

    &nbsp;
    &nbsp;

#### 8 ) `<div> <span>`

- css, js 적용 시에 요소를 묶을때 자주 사용

- `<div>`가 좀 더 큰 범위에서 사용

- `<span>`

  - 영어로 쪼개진 조각을 의미. 본질적으로 아무것도 나태내지 않는 콘텐츠 영역 설정
  - 주로 `<div>`와 `<p>`와 함께 웹페이지의 일부분에 스타일 적용시키기 위해 사용 多

- 뉘앙스

  - `<div>` : block // layout

  - `<span>` : inline // text

&nbsp;
&nbsp;

#### 9 ) `<form>` - block

```html
<form action="	" method="	"></form>
```

- 다른 tag들과는 반대로 정보를 주기위해서가 아닌, 정보를 받기위해서 존재한다.

- 반드시 따라오는 속성들

  - `action`

    - API주소
    - 사용자의 input을 받을 때는 이를 처리해야할 과정이 잇따라야한다.
    - 즉, form을 받아서 server에 전달 해야한다. 이 정보(form)를 처리할 수 있는 url(주소) 기입한다.

  - `method`

    - GET|POST

    - 소량 사용 - GET(얻어갈때만)기본값

    - 대량 사용 - POST(정보수정)

      &nbsp;

- 그 외 속성들

  - `autocomplete`

    - 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부

    - value : `on` (default값)

  - `name`

    - 고유한 양식의 이름 (중요 attr)

  - `novalidate`

    - 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정

  - `target`

    - 서버로 전송 후 응답받을 방식을 지정

    - value : `_self` (default값), `_blank`

      &nbsp;
      &nbsp;

#### 9-1 ) `<input>` - inline block

```html
<input type=" " />
```

- `input` ? 입력창. input field

- input 자체는 style 적용 안됨

  - 테두리 자체가 border가 아니라 'outline'으로 형성되어있다

- 여러가지 속성들

  - `placeholder`

    - 안내문구 삽입

    - ```html
      <input type="text" placeholder="이름을 입력하세요" />
      ```

  - `minlength, maxlength`

    - 제한길이 설정
    - 입력가능 최솟값, 최댓값 : min, max

  - `required`

    - 필수 기입 설정

  - `disabled`

    - 사용 금지 설정

  - `value`

    - 초기값 설정
    - 일종의 text 취급

  - `accept`

    - ```html
      accept=".jpg" accept="img/png" 등등
      ```

  - `name`

    - 데이터 전송시 데이터의 이름 설정

  - 그 외

    - `autofocus` 자동 포커스

    - `form` form 범위에 없어도 form과 연결 form의 id값 삽입

    - `readonly` 읽기전용

    - `pattern` 고정 양식

      ```html
      <input pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
      ```

  - `type`

    - 종류

      - `number, text, email, tel, radio, file, password, reset, search, image(단순 image가 아닌 제출의 의미까지 겸비) 등`

    - 알아두면 좋은 속성들

      - ```html
        <input type="number" step="일정 범위씩 값을 변하게 할 숫자" />
        ```

      - ```html
        <input type="checkbox" checked="checked" />
        ```

      - ```html
        <input type="file" multifle="file 개수" />
        ```

    - '선택'과 관련된 속성들

      - `radio`

        ```html
        <input type="radio" name="subscription" value="1" id="subscribed" />
        ```

        - 단일 선택
        - 필수 속성
          - `name` : class와 유사. 선택 항목들의 집합체. 단 하나의 pick을 위함
          - `value` : id와 유사. 선택 후 server 전송시, '1 or 2' 'on or off' 등의 각기 다른 값으로 server에게 전송 // 서버에 전송 된것은 url창에서 확인 가능하다.

      - `checkbox`
      
        ````html
        <input type="checkbox" name="chk_info" value="HTML">HTML
        ````
      
        + 복수 선택
        + `radio`와 사용 방법 동일

&nbsp;
&nbsp;

#### 9-2 ) `<label>` - inline

````html
<label for="input's id value"> .. </label>
<label><input type="chekcbox"/>동의하십니까?</label>
````

+ id값 입력시 #을 쓰지않는다. #이 for로 바뀌었다고 생각하자.

+ 폼 양식에 이름을 붙이는 태그. 어떠한 input과 연결 되어있는지 반드시 명시해야한다.

+ `sr-only`에도 많이 쓰임

  + `sr-only` ? 

    스크린 리더에는 들리되, 시각적으로는 보이지 않는 요소

  + 암묵적으로 통용되는 class value // 시각 장애인들을 위함

  + 이하의 예시는 눈에 보이진 않지만 스크린 리더로 읽게 되면 'final'라고 읽어준다

    ````html
    <a href='#'>
        <span class='sr-only'>
            final
        </span>
    </a>
    ````

  + 속성 `display: none`은 screen reader도 읽을 수 없기에 사용 불가