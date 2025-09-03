# 시작하기

VitePress에 오신 것을 환영합니다! 이 가이드는 VitePress를 처음 사용하는 분들을 위한 기본적인 소개입니다.

## VitePress란?

VitePress는 Vue.js 팀에서 개발한 정적 사이트 생성기입니다. 주요 특징은 다음과 같습니다:

- **빠른 개발**: Vite를 기반으로 한 빠른 핫 리로드
- **마크다운 지원**: 직관적인 마크다운 문법
- **Vue 통합**: Vue 컴포넌트를 마크다운에 직접 사용
- **테마 시스템**: 커스터마이징 가능한 테마

## 기본 사용법

### 1. 마크다운 작성

```markdown
# 제목
일반 텍스트입니다.

## 부제목
- 리스트 아이템 1
- 리스트 아이템 2

**굵은 글씨** 와 *기울임 글씨*
```

### 2. 코드 블록

```javascript
// JavaScript 예제
function hello() {
  console.log('Hello VitePress!');
}
```

```css
/* CSS 예제 */
.my-class {
  color: #2c3e50;
  font-weight: bold;
}
```

### 3. 표 만들기

| 기능 | 설명 | 지원 여부 |
|------|------|-----------|
| 마크다운 | 기본 마크다운 문법 | ✅ |
| Vue 컴포넌트 | Vue 컴포넌트 삽입 | ✅ |
| 테마 | 커스텀 테마 | ✅ |

## 다음 단계

- [설치 가이드](/guide/installation)로 이동하여 설치 방법을 알아보세요
- [기본 설정](/guide/configuration)에서 사이트를 커스터마이징하세요
- [예제](/examples/basic)를 통해 실제 사용법을 익혀보세요