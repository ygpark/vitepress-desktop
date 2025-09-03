# 기본 설정

VitePress 사이트를 커스터마이징하는 방법을 알아보겠습니다.

## 설정 파일

VitePress는 `docs/.vitepress/config.js` 파일을 통해 설정할 수 있습니다.

```javascript
export default {
  title: '내 문서 사이트',
  description: '멋진 문서 사이트입니다',
  
  themeConfig: {
    // 테마 설정
  }
}
```

## 기본 메타데이터

```javascript
export default {
  title: '사이트 제목',
  description: '사이트 설명',
  lang: 'ko-KR',
  base: '/', // 배포 경로
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
}
```

## 내비게이션 설정

### 헤더 내비게이션

```javascript
themeConfig: {
  nav: [
    { text: '홈', link: '/' },
    { text: '가이드', link: '/guide/' },
    { 
      text: '더보기',
      items: [
        { text: 'GitHub', link: 'https://github.com' },
        { text: '블로그', link: '/blog/' }
      ]
    }
  ]
}
```

### 사이드바

```javascript
themeConfig: {
  sidebar: [
    {
      text: '시작하기',
      items: [
        { text: '소개', link: '/guide/introduction' },
        { text: '설치', link: '/guide/installation' }
      ]
    },
    {
      text: '심화 가이드',
      items: [
        { text: '커스터마이징', link: '/advanced/customization' }
      ]
    }
  ]
}
```

## 테마 옵션

```javascript
themeConfig: {
  // 소셜 링크
  socialLinks: [
    { icon: 'github', link: 'https://github.com/username' },
    { icon: 'twitter', link: 'https://twitter.com/username' }
  ],
  
  // 푸터
  footer: {
    message: 'MIT 라이선스로 배포됩니다.',
    copyright: 'Copyright © 2024-present My Name'
  },
  
  // 검색
  search: {
    provider: 'local'
  }
}
```

## 다크 모드

VitePress는 기본적으로 다크/라이트 모드를 지원합니다. 사용자가 토글 버튼으로 전환할 수 있습니다.

```javascript
themeConfig: {
  appearance: 'dark' // 'dark' | 'light' | false
}
```

## 마크다운 설정

```javascript
export default {
  markdown: {
    theme: 'github-dark',
    lineNumbers: true
  }
}
```

## 예제 전체 설정

```javascript
export default {
  title: 'VitePress 데모',
  description: '초보자를 위한 VitePress 가이드',
  lang: 'ko-KR',
  
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '가이드', link: '/guide/getting-started' }
    ],
    
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '소개', link: '/guide/getting-started' },
          { text: '설치', link: '/guide/installation' },
          { text: '설정', link: '/guide/configuration' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: 'MIT 라이선스',
      copyright: 'Copyright © 2024'
    }
  }
}
```