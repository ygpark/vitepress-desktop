---
title: 설정 가이드
---

# 설정 가이드

VitePress Desktop 프로젝트의 다양한 설정 옵션과 커스터마이징 방법을 설명합니다.

## 📋 설정 파일 개요

### 주요 설정 파일

```bash
vitepress-desktop/
├── package.json              # 프로젝트 메타데이터 및 스크립트
├── docs/.vitepress/config.js # VitePress 설정 (Mermaid, Sidebar)
├── desktop/wails.json        # Wails 앱 설정
├── desktop/go.mod            # Go 모듈 설정
└── Makefile                  # 빌드 자동화
```

## ⚙️ VitePress 설정

### 현재 설정 (`docs/.vitepress/config.js`)

```javascript
import { withMermaid } from "vitepress-plugin-mermaid";
import { generateSidebar } from "vitepress-sidebar";

export default withMermaid({
  title: "VitePress 데모",
  description: "초보자를 위한 VitePress 튜토리얼",

  themeConfig: {
    nav: [
      { text: "홈", link: "/" },
      { text: "시작하기", link: "/guide/getting-started" },
      {
        text: "예제",
        items: [
          { text: "기본 예제", link: "/examples/basic" },
          { text: "고급 예제", link: "/examples/advanced" },
          { text: "컴포넌트", link: "/examples/components" },
          { text: "Mermaid 다이어그램", link: "/examples/mermaid" },
        ],
      },
      { text: "API", link: "/api/introduction" },
    ],

    sidebar: generateSidebar({
      documentRootPath: "/docs",
      scanStartPath: null,
      resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title1",
      useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: false,
      underlineToSpace: true,
      capitalizeFirst: false,
      capitalizeEachWords: false,
      collapsed: false,
      collapseDepth: 2,
      sortMenusByName: false,
      sortMenusByFrontmatterOrder: false,
      sortMenusOrderByDescending: false,
      sortMenusOrderNumericallyFromTitle: false,
      sortMenusOrderNumericallyFromLink: false,
      frontmatterOrderDefaultValue: 0,
      excludeFiles: ["README.md", "index.md"],
      excludeFolders: ["node_modules", ".vitepress"],
      includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      includeEmptyFolder: false,
      rootGroupCollapsed: false,
      convertSameNameSubFileToGroupIndexPage: false,
      folderLinkNotIncludesFileName: false,
      keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "VitePress로 만든 데모 사이트입니다.",
      copyright: "Copyright © 2024",
    },
  },
});
```

### 커스터마이징 옵션

#### 1. 기본 사이트 정보 변경

```javascript
export default withMermaid({
  title: "내 프로젝트 문서",           // 사이트 제목
  description: "프로젝트 설명",        // 메타 설명
  lang: "ko-KR",                     // 언어 설정
  base: "/",                         // 베이스 URL
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],
  
  themeConfig: {
    // ... 테마 설정
  }
});
```

#### 2. 네비게이션 커스터마이징

```javascript
themeConfig: {
  nav: [
    { text: "홈", link: "/" },
    { text: "가이드", link: "/guide/" },
    {
      text: "API",
      items: [
        { text: "클라이언트 API", link: "/api/client" },
        { text: "서버 API", link: "/api/server" }
      ]
    },
    {
      text: "버전 선택",
      items: [
        { text: "v1.0", link: "/v1/" },
        { text: "v2.0", link: "/v2/" }
      ]
    }
  ]
}
```

#### 3. 사이드바 자동 생성 설정

```javascript
sidebar: generateSidebar({
  documentRootPath: "/docs",
  
  // 제목 처리
  useTitleFromFileHeading: true,      // 파일 첫 번째 헤딩 사용
  useTitleFromFrontmatter: true,      // frontmatter title 사용
  frontmatterTitleFieldName: "title", // frontmatter 제목 필드명
  
  // 폴더 처리
  useFolderTitleFromIndexFile: false,
  useFolderLinkFromIndexFile: false,
  includeFolderIndexFile: true,
  
  // 정렬
  sortMenusByName: false,             // 이름순 정렬
  sortMenusByFrontmatterOrder: true,  // frontmatter order 사용
  
  // 제외 설정
  excludeFiles: ["README.md", "index.md"],
  excludeFolders: ["node_modules", ".vitepress", ".git"],
  
  // 접기 설정
  collapsed: false,                   // 기본 접기 상태
  collapseDepth: 2,                   // 접기 깊이
})
```

#### 4. Mermaid 다이어그램 설정

```javascript
export default withMermaid({
  // ... 기본 설정
  
  mermaid: {
    theme: 'default',        // 테마: default, dark, forest, neutral
    themeVariables: {
      primaryColor: '#ff6b6b',
      primaryTextColor: '#000',
      primaryBorderColor: '#ff6b6b',
      lineColor: '#666',
    },
    flowchart: {
      htmlLabels: true,
      curve: 'basis'
    },
    sequence: {
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65
    }
  }
});
```

## 🖥️ 데스크톱 앱 설정

### Wails 설정 (`desktop/wails.json`)

```json
{
  "$schema": "https://wails.io/schemas/config.v2.json",
  "name": "VitePress Desktop",
  "outputfilename": "vitepress-desktop",
  
  // 프론트엔드 설정 (자동 빌드 비활성화)
  "frontend:install": "",
  "frontend:build": "",
  "frontend:dev:watcher": "",
  "frontend:dev:serverUrl": "",
  
  // 앱 정보
  "author": {
    "name": "Your Name",
    "email": "your@email.com"
  },
  "info": {
    "companyName": "Your Company",
    "productName": "VitePress Desktop",
    "productVersion": "1.0.0",
    "copyright": "Copyright © 2024 Your Name",
    "comments": "VitePress documentation as desktop app"
  },
  
  // 빌드 설정
  "build": {
    "compiler": "go",
    "frontend:install": "",
    "frontend:build": "",
    "targets": [
      {
        "platform": "windows/amd64",
        "outputfilename": "vitepress-desktop.exe"
      },
      {
        "platform": "darwin/universal",
        "outputfilename": "vitepress-desktop"
      },
      {
        "platform": "linux/amd64",
        "outputfilename": "vitepress-desktop"
      }
    ]
  }
}
```

### Go 백엔드 설정

#### 1. 앱 설정 (`desktop/main.go`)

```go
package main

import (
    "context"
    "embed"
    "github.com/wailsapp/wails/v2"
    "github.com/wailsapp/wails/v2/pkg/options"
    "github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
    app := NewApp()

    err := wails.Run(&options.App{
        Title:  "VitePress Desktop",
        Width:  1200,
        Height: 800,
        MinWidth: 800,
        MinHeight: 600,
        
        // 창 옵션
        Fullscreen: false,
        Resizable:  true,
        StartHidden: false,
        DisableResize: false,
        AlwaysOnTop: false,
        
        // 색상 설정
        BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
        
        // 에셋 서버
        AssetServer: &assetserver.Options{
            Assets: assets,
        },
        
        OnStartup:  app.startup,
        OnDomReady: app.domReady,
        OnShutdown: app.shutdown,
        
        Bind: []interface{}{
            app,
        },
    })

    if err != nil {
        println("Error:", err.Error())
    }
}
```

#### 2. 애플리케이션 로직 (`desktop/app.go`)

```go
package main

import (
    "context"
    "fmt"
    "os"
    "path/filepath"
)

type App struct {
    ctx context.Context
}

func NewApp() *App {
    return &App{}
}

func (a *App) startup(ctx context.Context) {
    a.ctx = ctx
    fmt.Println("App starting up...")
}

func (a *App) domReady(ctx context.Context) {
    fmt.Println("DOM is ready")
}

func (a *App) shutdown(ctx context.Context) {
    fmt.Println("App shutting down...")
}

// 프론트엔드에서 호출 가능한 메서드
func (a *App) GetAppInfo() map[string]string {
    return map[string]string{
        "name":    "VitePress Desktop",
        "version": "1.0.0",
        "author":  "Your Name",
    }
}

func (a *App) GetUserDataPath() string {
    homeDir, err := os.UserHomeDir()
    if err != nil {
        return ""
    }
    return filepath.Join(homeDir, ".vitepress-desktop")
}
```

## 📦 빌드 설정

### package.json 스크립트 커스터마이징

```json
{
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev docs --port 5173",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs --port 4173",
    
    "build:docs": "node scripts/build-docs.js",
    "build:desktop": "node scripts/build-desktop.js", 
    "build:all": "node scripts/deploy.js",
    "build:production": "NODE_ENV=production npm run build:all",
    
    "dev:desktop": "cd desktop && wails dev",
    "dev:hot": "concurrently \"npm run docs:dev\" \"npm run dev:desktop\"",
    
    "clean": "node scripts/clean.js",
    "clean:all": "npm run clean && rm -rf node_modules",
    
    "test": "echo \"No tests specified\"",
    "lint": "echo \"No linting specified\""
  },
  
  "devDependencies": {
    "mermaid": "^11.10.1",
    "vitepress": "^1.6.4",
    "vitepress-plugin-mermaid": "^2.0.17",
    "vitepress-sidebar": "^1.33.0",
    "concurrently": "^8.0.0"
  }
}
```

### Makefile 타겟 추가

```makefile
# 환경별 빌드
build-dev: check-deps
	@echo "Building for development..."
	NODE_ENV=development npm run build:all

build-prod: check-deps  
	@echo "Building for production..."
	NODE_ENV=production npm run build:all

# 플랫폼별 빌드
build-windows-only: check-deps build-docs
	@echo "Building for Windows only..."
	cd desktop && wails build -platform windows/amd64 -ldflags "-s -w"

build-mac-only: check-deps build-docs
	@echo "Building for macOS only..."
	cd desktop && wails build -platform darwin/universal -ldflags "-s -w"

# 개발 도구
watch-docs:
	@echo "Watching documentation changes..."
	npm run docs:dev

hot-reload:
	@echo "Starting hot reload development..."
	npm run dev:hot

# 릴리즈 빌드
release: clean check-deps
	@echo "Building release version..."
	NODE_ENV=production make build-all
	@echo "Creating release archive..."
	cd dist && tar -czf ../vitepress-desktop-release.tar.gz *
```

## 🎨 테마 커스터마이징

### 커스텀 CSS 추가

`docs/.vitepress/theme/style.css`:
```css
:root {
  /* 브랜드 컬러 */
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
  --vp-c-brand-lighter: #9499ff;
  --vp-c-brand-lightest: #bcc0ff;
  --vp-c-brand-dark: #535bf2;
  --vp-c-brand-darker: #454ce1;
  --vp-c-brand-dimm: #212425;
  
  /* 폰트 설정 */
  --vp-font-family-base: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 
                         'Segoe UI', Roboto, sans-serif;
  --vp-font-family-mono: 'JetBrains Mono', 'Fira Code', Monaco, 
                          'Cascadia Code', monospace;
}

/* 다크 모드 색상 */
.dark {
  --vp-c-bg: #1a1a1a;
  --vp-c-bg-alt: #262626;
  --vp-c-bg-elv: #2d2d2d;
}

/* 커스텀 컨테이너 */
.custom-block.tip {
  border-color: #42b883;
}

.custom-block.warning {
  border-color: #ffc107;
}

.custom-block.danger {
  border-color: #f56565;
}

/* 데스크톱 앱 스타일 */
@media screen and (min-width: 960px) {
  .VPContent {
    padding-top: 0;
  }
  
  .VPNav {
    border-bottom: 1px solid var(--vp-c-divider);
  }
}
```

### 커스텀 테마 설정

`docs/.vitepress/theme/index.js`:
```javascript
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app, router, siteData }) {
    // 글로벌 컴포넌트 등록
    // app.component('CustomComponent', CustomComponent)
    
    // 라우터 훅
    router.onBeforeRouteChange = (to) => {
      console.log('Navigating to:', to)
    }
    
    // 사이트 데이터 확장
    siteData.themeConfig.customProperty = 'custom value'
  }
}
```

## 🔧 환경 변수

### .env 파일 설정

`.env.development`:
```env
# 개발 환경
NODE_ENV=development
VITE_APP_TITLE=VitePress Desktop Dev
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
VITE_MERMAID_THEME=default
```

`.env.production`:
```env
# 프로덕션 환경
NODE_ENV=production
VITE_APP_TITLE=VitePress Desktop
VITE_API_URL=https://api.example.com
VITE_DEBUG=false
VITE_MERMAID_THEME=dark
```

### 환경별 설정 분기

`docs/.vitepress/config.js`:
```javascript
import { defineConfig } from 'vitepress'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  title: process.env.VITE_APP_TITLE || "VitePress Desktop",
  
  themeConfig: {
    // 개발 환경에서만 디버그 메뉴 표시
    nav: [
      { text: "홈", link: "/" },
      { text: "가이드", link: "/guide/" },
      ...(isDev ? [{ text: "디버그", link: "/debug/" }] : [])
    ]
  },
  
  // 개발 환경에서 소스맵 활성화
  vite: {
    build: {
      sourcemap: isDev
    }
  }
})
```

## 🔍 트러블슈팅 설정

### 디버깅 설정

```javascript
// docs/.vitepress/config.js
export default withMermaid({
  // ... 기본 설정
  
  vite: {
    // 개발 서버 설정
    server: {
      port: 5173,
      host: '0.0.0.0',
      fs: {
        allow: ['..']
      }
    },
    
    // 빌드 설정
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
    
    // 로깅 레벨
    logLevel: process.env.NODE_ENV === 'development' ? 'info' : 'error'
  }
});
```

## 📚 다음 단계

설정이 완료되었다면 다음 문서를 참고하세요:

- [배포 가이드](./deployment.md) - 프로덕션 배포 방법
- [아키텍처](./architecture.md) - 기술적 구조 이해
- [API 문서](./api.md) - Go ↔ JavaScript 통신

---

더 상세한 설정 옵션은 공식 문서를 참고하세요:
- [VitePress 설정](https://vitepress.dev/reference/site-config)
- [Wails 설정](https://wails.io/docs/reference/project-config)