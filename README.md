# VitePress Desktop

초보자를 위한 VitePress 튜토리얼 및 데스크톱 앱 프로젝트입니다.

## 특징

- 📚 **한국어 문서**: 모든 내용이 한국어로 작성
- 🚀 **완전한 데모**: VitePress의 모든 기능을 포함한 예제
- 💻 **데스크톱 앱 지원**: Wails를 사용한 크로스 플랫폼 데스크톱 앱
- 🎨 **Mermaid 다이어그램**: 다양한 다이어그램 예제 포함
- ⚡ **Vue 컴포넌트**: 인터랙티브한 예제들

## 시스템 요구사항

### 필수 의존성

#### VitePress 개발 (웹 버전)
- **Node.js** 18.0+ (권장: 20.x LTS)
- **npm** 또는 **yarn**

#### 데스크톱 앱 개발
- **Go** 1.19+ ([설치 가이드](https://golang.org/doc/install))
- **Wails** v2.x ([설치 가이드](https://wails.io/docs/gettingstarted/installation))
- **시스템별 추가 요구사항**:
  - **Windows**: WebView2 Runtime, Visual Studio Build Tools
  - **macOS**: Xcode Command Line Tools
  - **Linux**: `webkit2gtk` 패키지 (`sudo apt-get install webkit2gtk-4.0-dev` 등)

### 설치 방법

#### 1. 프로젝트 복제
```bash
git clone <repository-url>
cd vitepress-desktop-unified
```

#### 2. Node.js 의존성 설치
```bash
npm install
```

#### 3. Wails 설치 (데스크톱 앱 개발 시)
```bash
# Wails CLI 설치
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 설치 확인
wails doctor
```

#### 4. Go 모듈 초기화 (데스크톱 앱 개발 시)
```bash
cd desktop
go mod tidy
```


## 빠른 시작

### 1. 개발 서버 실행
```bash
npm run docs:dev
```

### 2. 빌드
```bash
npm run docs:build
```

### 3. 프로덕션 미리보기
```bash
npm run docs:preview
```

## 데스크톱 앱 빌드

### 1. 문서만 빌드
```bash
npm run build:docs
```

### 2. 데스크톱 앱 빌드
```bash
npm run build:desktop
```

### 3. 전체 빌드 (웹 + 데스크톱)
```bash
npm run build:all
```

### 4. 데스크톱 개발 모드
```bash
npm run dev:desktop
```

## 프로젝트 구조

```
vitepress-desktop/             # 통합 프로젝트 루트
├── docs/                      # VitePress 문서 소스
│   ├── .vitepress/            # VitePress 설정
│   │   ├── config.js          # 사이트 설정
│   │   ├── cache/             # 빌드 캐시
│   │   └── dist/              # 빌드 결과물
│   ├── guide/                 # 가이드 섹션
│   ├── examples/              # 예제 섹션
│   ├── api/                   # API 문서
│   └── index.md               # 홈페이지
├── desktop/                   # Wails 데스크톱 앱
│   ├── app.go                 # Go 백엔드
│   ├── main.go                # 메인 엔트리
│   ├── wails.json             # Wails 설정
│   ├── frontend/              # 프론트엔드 (VitePress 빌드)
│   │   └── dist/              # 빌드된 HTML/CSS/JS
│   └── build/                 # 빌드된 데스크톱 앱
│       └── bin/               # 실행 파일
├── scripts/                   # 빌드 자동화 스크립트
│   ├── build-docs.sh          # 문서 빌드
│   ├── build-desktop.sh       # 데스크톱 앱 빌드
│   └── deploy.sh              # 전체 배포
├── dist/                      # 최종 배포 파일
│   ├── web/                   # 웹 버전
│   └── desktop/               # 데스크톱 앱
├── package.json               # 프로젝트 설정
├── .gitignore                 # Git 무시 파일
├── CLAUDE.md                  # Claude Code 가이드
└── README.md                  # 이 파일
```

## 포함된 내용

### 📖 가이드 문서
- VitePress 소개 및 기본 사용법
- 설치 및 초기 설정 방법
- 고급 설정 및 커스터마이징

### 🎯 실용적인 예제
- **기본 마크다운**: 제목, 목록, 링크, 이미지 등
- **고급 기능**: 수학 공식, 코드 그룹, 커스텀 컨테이너
- **Vue 컴포넌트**: 인터랙티브한 카운터, 동적 리스트 등
- **Mermaid 다이어그램**: 플로우차트, 시퀀스, 간트 차트 등

### 🛠 개발 도구
- ESM 모듈 지원
- Mermaid 플러그인 통합
- 다크/라이트 모드 지원
- 검색 기능 (로컬)

## 기술 스택

- **VitePress** `^1.6.4`: 정적 사이트 생성기
- **Mermaid** `^11.10.1`: 다이어그램 라이브러리
- **vitepress-plugin-mermaid** `^2.0.17`: Mermaid 플러그인

## 알려진 문제

### Mermaid 다이어그램 호환성 문제

현재 `vitepress-plugin-mermaid` v2.0.17과 `mermaid` v11.10.1 간의 호환성 문제로 인해 **일부 다이어그램이 렌더링되지 않을 수 있습니다**.

#### 영향을 받는 다이어그램:
- **gitGraph**: v11에서 문법 요구사항 변경으로 렌더링 실패
- **일부 고급 다이어그램**: 새로운 다이어그램 타입들

#### 임시 해결 방법:
1. **gitGraph 사용 시**: `commit id: "설명"` 형태로 명시적 ID 제공
2. **설정 블록 추가**:
   ```markdown
   ```mermaid
   ---
   config:
     gitGraph:
       showBranches: true
       showCommitLabel: true
   ---
   gitGraph
       commit id: "초기"
   ```
   ```

#### 향후 업데이트 방법:

플러그인 호환성 문제가 해결되면 다음 명령으로 업데이트하세요:

```bash
# 최신 버전 확인
npm outdated

# vitepress-plugin-mermaid 업데이트
npm update vitepress-plugin-mermaid

# 또는 최신 버전으로 강제 업그레이드
npm install vitepress-plugin-mermaid@latest --save-dev

# mermaid 버전도 함께 업데이트
npm install mermaid@latest --save-dev
```

업데이트 후 개발 서버를 재시작하세요:
```bash
npm run docs:dev
```

> **참고**: 이 문제는 [vitepress-plugin-mermaid GitHub Issues](https://github.com/emersonbottero/vitepress-plugin-mermaid/issues)에서 추적되고 있으며, 향후 업데이트에서 해결될 예정입니다.


## 브라우저 지원

- Chrome (권장)
- Firefox
- Safari
- Edge

## 라이선스

ISC License

## 기여

버그 리포트나 기능 제안이 있으시면 GitHub Issues를 통해 알려주세요.

---

**VitePress로 만든 데스크톱 앱 지원 문서 사이트** 🚀