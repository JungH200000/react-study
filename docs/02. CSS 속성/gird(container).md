## CSS Grid로 레이아웃 마스터하기 (컨테이너 편)

웹 페이지의 레이아웃을 짤 때, 마치 레고판 위에 블록을 맞추듯 쉽고 강력하게 구조를 만들 수 있는 도구가 있습니다. 바로 **`display: grid`** 입니다.

Grid 관련 속성들은 크게 두 가지로 나뉩니다.

1.  **컨테이너(부모 요소) 속성**: 전체적인 레이아웃 판의 모양과 구조를 결정합니다.
2.  **아이템(자식 요소) 속성**: 각 칸에 들어가는 내용물의 위치나 크기를 정합니다.

이번에는 전체적인 뼈대를 만드는 **컨테이너 속성**에 대해 자세히 알아보겠습니다.

### Grid 레이아웃의 핵심: 행과 열 정의하기

컨테이너를 Grid로 만들기 위한 가장 핵심적인 속성은 다음 두 가지입니다.

- `grid-template-columns`: 세로 줄(열, Column)의 개수와 너비를 결정합니다.
- `grid-template-rows`: 가로 줄(행, Row)의 개수와 높이를 결정합니다.

예를 들어, `grid-template-columns: 100px 200px;` 라고 선언하면, 첫 번째 열은 100px, 두 번째 열은 200px 너비를 가진 2열 레이아웃이 만들어집니다.

#### `fr` 단위로 유연하게 반응하기

만약 똑같은 크기의 열 두 개를 만들고 싶다면 어떻게 할까요?

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

`1fr 1fr`은 "사용 가능한 전체 공간을 1:1 비율로 똑같이 나눠서 두 개의 칸을 만들어 줘" 라는 의미입니다. 여기서 `fr` 단위는 'fraction(부분)'의 줄임말로, 마치 피자 한 판🍕을 나눠 갖는 것처럼 공간을 비율에 따라 유연하게 나눌 수 있는 Grid의 강력하고 편리한 단위입니다.

### 간격과 반복: `gap` & `repeat()`

#### `gap` 속성

이제 각 칸 사이에 일정한 간격을 만들어 보겠습니다. 이때 `gap` 속성을 사용합니다.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px; /* 열과 행 사이의 모든 간격을 24px로 설정 */
}
```

#### `repeat()` 함수

만약 12개의 열을 만들어야 한다면 `1fr`을 12번이나 써야 할까요? `repeat()` 함수를 사용하면 코드를 훨씬 간결하게 만들 수 있습니다.

`repeat(반복 횟수, 반복할 값)` 형태로 사용하며, `repeat(12, 1fr)`은 `1fr`을 12번 쓴 것과 완전히 동일합니다.

```css
/* 1fr 1fr 1fr 과 동일 */
grid-template-columns: repeat(3, 1fr);
```

---

### Grid 레이아웃의 꽃: `grid-template-areas`

Grid의 가장 강력하고 직관적인 기능은 바로 `grid-template-areas` 입니다. 이 속성은 각 칸에 **이름을 붙여서**, 마치 그림을 그리듯 시각적으로 레이아웃을 설계할 수 있게 해줍니다.

각 문자열은 **하나의 행(row)** 을 의미하고, 문자열 안의 단어들이 각 **열(column)의 이름표**가 됩니다.

예를 들어, 헤더, 사이드바, 본문이 있는 레이아웃을 상상해 보죠.

```
+--------+--------+
|  header|  header|  <- 1행
+--------+--------+
| sidebar|   main |  <- 2행
+--------+--------+
```

이 구조는 아래와 같은 코드로 구현할 수 있습니다.

```css
/* 컨테이너(부모)에 레이아웃 지도 그리기 */
.container {
  display: grid;
  grid-template-columns: 1fr 3fr; /* 사이드바와 본문의 너비 비율 */
  grid-template-rows: 100px 500px; /* 헤더와 내용의 높이 */
  grid-template-areas:
    'header header'
    'sidebar main';
}
```

- `"header header"`: 첫 번째 행은 두 칸을 모두 합쳐 `header`라는 이름으로 사용하겠다는 의미입니다.
- `"sidebar main"`: 두 번째 행의 첫 칸은 `sidebar`, 두 번째 칸은 `main`이라는 이름으로 사용하겠다는 의미입니다.

#### `grid-area`로 이름표 찾아가기

이제 컨테이너에 레이아웃 지도가 그려졌습니다. 그럼 각 자식 요소들은 어떻게 자신의 자리를 찾아갈까요? 바로 **`grid-area`** 속성을 사용해 컨테이너에 정의된 이름표를 찾아가면 됩니다.

```css
/* 아이템(자식)이 자기 이름표 찾아가기 */
.header-element {
  grid-area: header;
}

.sidebar-element {
  grid-area: sidebar;
}

.main-element {
  grid-area: main;
}
```

이처럼 `grid-template-areas`와 `grid-area`를 함께 사용하면, CSS 코드만 보고도 전체 레이아웃 구조를 한눈에 파악할 수 있는 매우 직관적인 개발이 가능해집니다.

---

### 최종 연습

좌우 2칸으로 구성된 레이아웃을 만들고, 왼쪽 칸의 이름은 `left`, 오른쪽 칸의 이름은 `right`로 지정하는 전체 CSS 코드입니다.

```css
/* 컨테이너 */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'left right';
}

/* 왼쪽 아이템 */
.left-item {
  grid-area: left;
}

/* 오른쪽 아이템 */
.right-item {
  grid-area: right;
}
```
