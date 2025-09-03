# 설치

VitePress를 설치하고 새 프로젝트를 시작하는 방법을 알아보겠습니다.

## 전제 조건

VitePress를 사용하기 위해서는 다음이 필요합니다:

- Node.js 18 이상
- 패키지 매니저 (npm, yarn, pnpm)

## 새 프로젝트 생성

### 1. 프로젝트 폴더 생성

```bash
mkdir my-docs
cd my-docs
```

### 2. 패키지 초기화

```bash
npm init -y
```

### 3. VitePress 설치

```bash
# 개발 의존성으로 설치
npm install --save-dev vitepress
```

### 4. 초기 파일 생성

```bash
# docs 폴더 생성
mkdir docs
echo '# Hello VitePress' > docs/index.md
```

### 5. package.json 스크립트 추가

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

## 개발 서버 실행

```bash
npm run docs:dev
```

브라우저에서 `http://localhost:5173`으로 접속하면 사이트를 확인할 수 있습니다.

## 빌드

```bash
# 프로덕션 빌드
npm run docs:build

# 빌드 결과 미리보기
npm run docs:preview
```

## 다음 단계

이제 [기본 설정](/guide/configuration)을 통해 사이트를 커스터마이징해보세요!