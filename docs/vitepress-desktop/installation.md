---
title: 설치 가이드
---

# 설치 가이드

VitePress Desktop을 시작하기 위한 단계별 설치 가이드입니다.

## 📋 시스템 요구사항

### 개발 환경

| 도구 | 최소 버전 | 권장 버전 | 용도 |
|------|----------|----------|------|
| Node.js | 18.0+ | 20.x LTS | VitePress 빌드 |
| Go | 1.19+ | 1.21+ | Wails 백엔드 |
| npm/yarn | 8.0+ | 최신 | 패키지 관리 |

### 운영 체제별 추가 요구사항

::: code-group

```bash [Windows]
# WebView2 Runtime (Windows 10/11에는 기본 포함)
# Visual Studio Build Tools 2019 이상
# 또는 Visual Studio 2019/2022
```

```bash [macOS]
# Xcode Command Line Tools
xcode-select --install

# macOS 10.15 Catalina 이상
```

```bash [Linux]
# Debian/Ubuntu
sudo apt update
sudo apt install libgtk-3-dev libwebkit2gtk-4.0-dev

# Fedora
sudo dnf install gtk3-devel webkit2gtk4.0-devel

# Arch
sudo pacman -S gtk3 webkit2gtk
```

:::

## 🚀 빠른 설치

### 1. Wails CLI 설치

```bash
# Wails CLI 설치
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 설치 확인
wails version

# 시스템 진단 (필수 의존성 확인)
wails doctor
```

### 2. 프로젝트 클론

```bash
# GitHub에서 프로젝트 클론
git clone https://github.com/yourusername/vitepress-desktop.git
cd vitepress-desktop
```

### 3. 의존성 설치 (Makefile 사용)

```bash
# Makefile을 사용한 전체 의존성 설치
make install

# 또는 개별 설치
npm install                    # Node.js 의존성
cd desktop && go mod download  # Go 의존성
```

### 4. 의존성 확인

```bash
# 모든 필수 도구 설치 확인
make check-deps
```

## 🛠 수동 설치

### Step 1: Node.js 설치

#### Windows
1. [Node.js 공식 사이트](https://nodejs.org)에서 LTS 버전 다운로드
2. 설치 프로그램 실행
3. 설치 확인: `node --version`

#### macOS
```bash
# Homebrew 사용
brew install node

# 또는 nvm 사용
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

#### Linux
```bash
# NodeSource 저장소 사용 (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 또는 nvm 사용
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

### Step 2: Go 설치

#### Windows
1. [Go 공식 사이트](https://golang.org/dl/)에서 MSI 설치 프로그램 다운로드
2. 설치 프로그램 실행
3. 환경 변수 자동 설정됨

#### macOS
```bash
# Homebrew 사용
brew install go

# 환경 변수 설정 (.zshrc 또는 .bash_profile)
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
```

#### Linux
```bash
# 최신 버전 다운로드 (예: 1.21.5)
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz

# 압축 해제
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz

# 환경 변수 설정 (.bashrc 또는 .profile)
export PATH=$PATH:/usr/local/go/bin
export PATH=$PATH:$HOME/go/bin
```

### Step 3: Wails 설치 및 확인

```bash
# Wails 설치
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 설치 확인
wails version

# 시스템 진단 (필수 의존성 확인)
wails doctor
```

`wails doctor` 출력 예시:
```
Wails CLI v2.8.0

Scanning system - Please wait...

# System
---------
OS:         Ubuntu 22.04.3 LTS
Version:    22.04
ID:         ubuntu
Go Version: go1.21.5
Platform:   linux
Architecture: amd64

# Dependencies
---------------
Dependency      Package Name    Status      Version
----------      ------------    ------      -------
*docker         docker.io       Installed   24.0.7
gcc             build-essential Installed   12.9.0
libgtk-3        libgtk-3-dev    Installed   3.24.33
libwebkit       libwebkit2gtk-4.0-dev Installed 2.42.2
*npm            npm             Installed   10.2.0
*nsis           nsis            Available   3.08

✓ SUCCESS - System is ready for Wails development!
```

## 🔧 프로젝트 설정

### 1. 현재 프로젝트 구조

```bash
vitepress-desktop/
├── docs/                      # VitePress 문서
│   ├── .vitepress/           # VitePress 설정
│   │   └── config.js         # Mermaid, Sidebar 플러그인 설정
│   ├── guide/                # 가이드 문서
│   ├── examples/             # 예제 문서
│   ├── api/                  # API 문서
│   └── vitepress-desktop/    # 프로젝트 소개 문서
├── desktop/                  # Wails 데스크톱 앱
│   ├── app.go               # 앱 로직
│   ├── main.go              # 엔트리 포인트
│   ├── wails.json           # Wails 설정
│   └── frontend/            # 빌드된 프론트엔드
├── scripts/                 # 빌드 스크립트 (JavaScript/ESM)
│   ├── build-docs.js        # 문서 빌드
│   ├── build-desktop.js     # 데스크톱 빌드
│   ├── deploy.js            # 전체 배포
│   └── clean.js             # 정리 스크립트
├── package.json             # ESM 모듈 설정 ("type": "module")
├── Makefile                 # Make 명령어
└── CLAUDE.md                # AI 도우미 가이드
```

### 2. 필수 의존성

현재 프로젝트의 의존성 (`package.json`):

```json
{
  "devDependencies": {
    "mermaid": "^11.10.1",
    "vitepress": "^1.6.4",
    "vitepress-plugin-mermaid": "^2.0.17",
    "vitepress-sidebar": "^1.33.0"
  }
}
```

### 3. 스크립트 명령어

package.json에 정의된 명령어:

```bash
# VitePress 개발/빌드
npm run docs:dev        # 개발 서버 시작
npm run docs:build      # 프로덕션 빌드
npm run docs:preview    # 빌드 미리보기

# 데스크톱 앱 개발/빌드
npm run dev:desktop     # Wails 개발 모드
npm run build:docs      # scripts/build-docs.js 실행
npm run build:desktop   # scripts/build-desktop.js 실행
npm run build:all       # scripts/deploy.js 실행

# 유틸리티
npm run clean           # scripts/clean.js 실행
```

## ⚙️ 환경 변수 설정

### 개발 환경

`.env.development` 파일 생성:
```env
VITE_APP_TITLE=VitePress Desktop Dev
VITE_API_URL=http://localhost:3000
```

### 프로덕션 환경

`.env.production` 파일 생성:
```env
VITE_APP_TITLE=VitePress Desktop
VITE_API_URL=https://api.example.com
```

## 🐛 트러블슈팅

### 일반적인 문제 해결

::: details Wails가 설치되지 않음
```bash
# GOPATH 확인
go env GOPATH

# PATH에 Go bin 추가
export PATH=$PATH:$(go env GOPATH)/bin

# 다시 설치
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Makefile로 확인
make check-deps
```
:::

::: details Windows에서 WebView2 오류
1. [Microsoft Edge WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) 다운로드
2. Evergreen Bootstrapper 실행
3. 시스템 재시작
:::

::: details Linux에서 webkit2gtk 오류
```bash
# 패키지 목록 업데이트
sudo apt update

# 필수 패키지 설치
sudo apt install libgtk-3-dev libwebkit2gtk-4.0-dev

# pkg-config 확인
pkg-config --libs webkit2gtk-4.0
```
:::

::: details macOS에서 CGO 오류
```bash
# Xcode Command Line Tools 재설치
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install

# 또는 Xcode 설치
# App Store에서 Xcode 설치 후
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```
:::

### 버전 호환성

| VitePress | Wails | Go | Node.js | 호환성 |
|-----------|-------|-----|---------|---------|
| 1.x | 2.x | 1.19+ | 18+ | ✅ |
| 1.x | 2.x | 1.18 | 16+ | ⚠️ |
| 0.x | 1.x | 1.16+ | 14+ | ❌ |

## 📚 다음 단계

설치가 완료되었다면 다음 문서를 참고하세요:

- [빠른 시작 가이드](./quick-start.md) - 첫 앱 만들기
- [설정 가이드](./configuration.md) - 상세 설정 방법
- [아키텍처](./architecture.md) - 기술 구조 이해
- [배포 가이드](./deployment.md) - 프로덕션 배포

## 🆘 도움말

설치 중 문제가 발생하면:

1. [GitHub Issues](https://github.com/yourusername/vitepress-desktop/issues) 확인
2. [Discord 커뮤니티](#) 참여
3. [공식 문서](https://wails.io/docs/gettingstarted/installation) 참고

---

설치에 성공하셨나요? [빠른 시작 가이드](./quick-start.md)로 첫 앱을 만들어보세요! 🎉