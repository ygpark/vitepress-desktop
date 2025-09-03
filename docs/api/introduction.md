# API 소개

VitePress API에 대한 개요를 제공합니다.

## 설정 API

VitePress는 `.vitepress/config.js` 파일을 통해 설정을 관리합니다.

### 기본 설정

```javascript
export default {
  // 사이트 메타데이터
  title: '사이트 제목',
  description: '사이트 설명',
  lang: 'ko-KR',
  base: '/',
  
  // 빌드 설정
  outDir: '../dist',
  srcDir: './src',
  
  // 마크다운 설정
  markdown: {
    theme: 'github-dark',
    lineNumbers: true
  }
}
```

## 테마 설정

```javascript
export default {
  themeConfig: {
    // 네비게이션
    nav: [...],
    sidebar: [...],
    
    // 외관
    logo: '/logo.svg',
    siteTitle: false, // 로고만 표시
    
    // 소셜 링크
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    // 편집 링크
    editLink: {
      pattern: 'https://github.com/user/repo/edit/main/docs/:path',
      text: 'GitHub에서 편집'
    },
    
    // 마지막 업데이트
    lastUpdated: true
  }
}
```

## 프론트매터 API

각 마크다운 파일의 상단에 YAML 프론트매터를 사용할 수 있습니다.

```yaml
---
title: 페이지 제목
description: 페이지 설명
layout: doc
sidebar: false
prev: false
next:
  text: '다음 페이지'
  link: '/next-page'
---
```

### 사용 가능한 프론트매터

| 속성 | 타입 | 설명 |
|------|------|------|
| `title` | string | 페이지 제목 |
| `description` | string | 페이지 설명 |
| `layout` | string | 레이아웃 타입 |
| `sidebar` | boolean | 사이드바 표시 여부 |
| `outline` | boolean/number | 목차 표시 설정 |
| `lastUpdated` | boolean | 마지막 업데이트 표시 |

## 내장 컴포넌트

### Badge

<Badge type="info" text="info" />
<Badge type="tip" text="tip" />
<Badge type="warning" text="warning" />
<Badge type="danger" text="danger" />

```markdown
<Badge type="info" text="정보" />
<Badge type="tip" text="팁" />
<Badge type="warning" text="경고" />
<Badge type="danger" text="위험" />
```

### Team 페이지

```markdown
---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>팀 소개</template>
    <template #lead>우리 팀을 소개합니다</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
```

## 플러그인 시스템

VitePress는 Vite 플러그인을 사용할 수 있습니다.

```javascript
// .vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  vite: {
    plugins: [
      // Vite 플러그인들
    ]
  }
})
```

## 빌드 훅

```javascript
export default {
  buildEnd(siteConfig) {
    // 빌드 완료 후 실행
  },
  
  transformHead(context) {
    // <head> 태그 변환
  },
  
  transformPageData(pageData) {
    // 페이지 데이터 변환
  }
}
```