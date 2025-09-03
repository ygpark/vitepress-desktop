# 설정 옵션

VitePress의 모든 설정 옵션에 대한 상세 가이드입니다.

## 사이트 설정

### title
- **타입**: `string`
- **기본값**: `VitePress`

사이트의 제목을 설정합니다. 브라우저 탭과 메타데이터에 사용됩니다.

```javascript
export default {
  title: '내 멋진 문서 사이트'
}
```

### description
- **타입**: `string`
- **기본값**: `A VitePress site`

사이트 설명을 설정합니다. SEO 메타 태그로 사용됩니다.

```javascript
export default {
  description: '개발자를 위한 최고의 문서 사이트'
}
```

### lang
- **타입**: `string`
- **기본값**: `en-US`

사이트의 언어를 설정합니다.

```javascript
export default {
  lang: 'ko-KR'
}
```

### base
- **타입**: `string`
- **기본값**: `/`

사이트의 기본 경로를 설정합니다. 서브 디렉토리에 배포할 때 사용합니다.

```javascript
export default {
  base: '/my-project/'
}
```

## 디렉토리 설정

### srcDir
- **타입**: `string`
- **기본값**: `.`

소스 파일이 위치한 디렉토리를 설정합니다.

```javascript
export default {
  srcDir: 'src'
}
```

### outDir
- **타입**: `string`
- **기본값**: `.vitepress/dist`

빌드 출력 디렉토리를 설정합니다.

```javascript
export default {
  outDir: '../dist'
}
```

## 마크다운 설정

### markdown.theme
- **타입**: `string | { light: string, dark: string }`
- **기본값**: `github-dark`

코드 블록의 문법 하이라이트 테마를 설정합니다.

```javascript
export default {
  markdown: {
    theme: 'dracula'
  }
}
```

다크/라이트 모드별로 다른 테마 사용:

```javascript
export default {
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
}
```

### markdown.lineNumbers
- **타입**: `boolean`
- **기본값**: `false`

코드 블록에 줄 번호를 표시합니다.

```javascript
export default {
  markdown: {
    lineNumbers: true
  }
}
```

## 테마 설정

### themeConfig.nav
- **타입**: `Array<NavItem>`

헤더 내비게이션을 설정합니다.

```javascript
export default {
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '가이드', link: '/guide/' },
      {
        text: '버전',
        items: [
          { text: 'v2.x', link: '/v2/' },
          { text: 'v1.x', link: '/v1/' }
        ]
      }
    ]
  }
}
```

### themeConfig.sidebar
- **타입**: `Object | Array<SidebarItem>`

사이드바를 설정합니다.

단일 사이드바:
```javascript
export default {
  themeConfig: {
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '소개', link: '/introduction' },
          { text: '설치', link: '/installation' }
        ]
      }
    ]
  }
}
```

다중 사이드바:
```javascript
export default {
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: '가이드',
          items: [
            { text: '시작하기', link: '/guide/getting-started' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: '소개', link: '/api/introduction' }
          ]
        }
      ]
    }
  }
}
```

### themeConfig.socialLinks
- **타입**: `Array<SocialLink>`

소셜 미디어 링크를 설정합니다.

```javascript
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username/repo' },
      { icon: 'twitter', link: 'https://twitter.com/username' },
      { icon: 'discord', link: 'https://discord.gg/invite' }
    ]
  }
}
```

### themeConfig.footer
- **타입**: `Footer`

푸터를 설정합니다.

```javascript
export default {
  themeConfig: {
    footer: {
      message: 'MIT 라이선스로 배포됩니다.',
      copyright: 'Copyright © 2024-present John Doe'
    }
  }
}
```

### themeConfig.search
- **타입**: `SearchOptions`

검색 기능을 설정합니다.

로컬 검색:
```javascript
export default {
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
}
```

Algolia 검색:
```javascript
export default {
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'YOUR_INDEX_NAME'
      }
    }
  }
}
```

## 고급 설정

### head
- **타입**: `Array<HeadConfig>`

HTML `<head>` 태그에 추가할 요소들을 설정합니다.

```javascript
export default {
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: '/analytics.js' }]
  ]
}
```

### vite
- **타입**: `ViteConfig`

Vite 설정을 커스터마이징합니다.

```javascript
export default {
  vite: {
    plugins: [],
    server: {
      port: 3000
    }
  }
}
```