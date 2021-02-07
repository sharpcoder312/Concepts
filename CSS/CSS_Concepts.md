# CSS's various property

&nbsp;
&nbsp;

#### Grid

+ 2차원(행과 열)의 레이아웃 시스템 제공

+ FlexBox 보다 좀 더 복잡한 레이아웃 제작 가능

+ FlexBox와 마찬가지로 Container와 Item으로 구성

  &nbsp;

+ Property

  + `display`

    ````css
    .container {
        display: grid;
    }
    ````

    + `grid`

      Container를 Block 특성으로 정의

    + `inline-grid`

      Container를 Inline 특성으로 정의

      &nbsp;

  + `grid-template-columns`

    ````css
    .container {
        display: grid;
        grid-template-rows: 1행크기 2행크기 ...; 
        grid-template-columns: [라인 이름] 1열크기 [라인 이름] 2열크기 ...;
    }
    ````

    + 단위

      + px
      + fr
        + 공간의 비율
        + 각 Item들이 Container 내에서 얼마만큼의 비율을 차지할 것인가를 결정
        + row보다는 col에서 자주 다룸

    + `repeat()`

      다량의 행과 열을 만들 때 사용

      ````css
      .container {
        width: 400px;
        display: grid;
        grid-template-rows: repeat(반복횟수, 단위);
        grid-template-columns: repeat(3, 1fr);
      }
      ````

      

