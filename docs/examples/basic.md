# 기본 예제

VitePress의 기본적인 마크다운 기능들을 살펴보겠습니다.

## 텍스트 서식

**굵은 글씨**와 *기울임 글씨*, ~~취소선~~, `인라인 코드`를 사용할 수 있습니다.

## 제목들

# H1 제목
## H2 제목  
### H3 제목
#### H4 제목

## 목록

### 순서 없는 목록
- 첫 번째 항목
- 두 번째 항목
  - 중첩된 항목
  - 또 다른 중첩 항목

### 순서 있는 목록
1. 첫 번째
2. 두 번째
3. 세 번째

## 링크

- [VitePress 공식 사이트](https://vitepress.dev)
- [내부 링크](/guide/getting-started)
- [앵커 링크](#텍스트-서식)

## 이미지

![VitePress](https://vitepress.dev/vitepress-logo-mini.svg)

## 인용구

> 이것은 인용구입니다.
> 
> 여러 줄로도 작성할 수 있습니다.

## 코드

### 인라인 코드
문장 안에 `const x = 1`과 같이 코드를 포함할 수 있습니다.

### 코드 블록

```javascript
// JavaScript 예제
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

console.log(greet('VitePress'));
```

```html
<!-- HTML 예제 -->
<div class="container">
  <h1>제목</h1>
  <p>내용입니다.</p>
</div>
```

```css
/* CSS 예제 */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
```

## 표

| 언어 | 확장자 | 설명 |
|------|--------|------|
| JavaScript | .js | 동적 웹 프로그래밍 |
| TypeScript | .ts | 정적 타입 JS |
| Python | .py | 범용 프로그래밍 |
| Markdown | .md | 마크업 언어 |

## 구분선

---

## 체크박스

- [x] 완료된 작업
- [ ] 진행 중인 작업
- [ ] 예정된 작업

## 커스텀 컨테이너

::: info 정보
이것은 정보 컨테이너입니다.
:::

::: warning 주의
이것은 경고 컨테이너입니다.
:::

::: danger 위험
이것은 위험 컨테이너입니다.
:::

::: details 상세 정보
이 내용은 클릭하면 펼쳐집니다.
:::

## 이모지

VitePress는 이모지도 지원합니다! :tada: :rocket: :heart: