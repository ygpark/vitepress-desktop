# vitepress-sidebar 플러그인

## 공홈

[vitepress-sidebar 플러그인 공식 홈페이지](https://vitepress-sidebar.cdget.com/introduction)

## 예제 1: 가장 기본적인 사용법

::: code-group

```js [.vitepress/config.js]
import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      scanStartPath: null,
      resolvePath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
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
      manualSortFileNameByPriority: [
        "index.md",
        "guide.md",
        "config.md",
        "api.md",
      ],
      removePrefixAfterOrdering: false,
      prefixSeparator: ".",
      excludeFiles: ["README.md", "index.md"],
      excludeFolders: ["node_modules", ".vitepress"],
      includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: true,
      includeEmptyFolder: false,
      //rootGroupText: "Contents",
      //rootGroupLink: "https://github.com/jooy2",
      rootGroupCollapsed: false,
      convertSameNameSubFileToGroupIndexPage: false,
      folderLinkNotIncludesFileName: false,
      keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),
  },
});
```

:::

## 예제 2: 실용적인 문서 사이트 설정

::: code-group

```js [.vitepress/config.js]
// .vitepress/config.js
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      scanStartPath: null,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      hyphenToSpace: true,
      capitalizeFirst: true,
      collapsed: false,
      collapseDepth: 2,
      sortMenusByName: true,
      sortMenusByFrontmatterOrder: true,
      excludeFiles: ["README.md"],
      excludeFolders: ["node_modules", ".git", "public"],
      includeRootIndexFile: true,
      rootGroupText: "📚 Documentation",
    }),
  },
});
```

:::

## 예제 3: 다중 사이드바 설정 (경로별 다른 사이드바)

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: {
      "/guide/": generateSidebar({
        documentRootPath: "/docs",
        scanStartPath: "guide",
        basePath: "/guide/",
        useTitleFromFileHeading: true,
        collapsed: false,
        sortMenusByName: true,
        rootGroupText: "가이드",
      }),
      "/api/": generateSidebar({
        documentRootPath: "/docs",
        scanStartPath: "api",
        basePath: "/api/",
        useTitleFromFileHeading: true,
        collapsed: true,
        sortMenusByName: true,
        rootGroupText: "API 문서",
      }),
      "/tutorial/": generateSidebar({
        documentRootPath: "/docs",
        scanStartPath: "tutorial",
        basePath: "/tutorial/",
        useTitleFromFileHeading: true,
        sortMenusByFrontmatterOrder: true,
        manualSortFileNameByPriority: [
          "intro.md",
          "setup.md",
          "basic.md",
          "advanced.md",
        ],
        rootGroupText: "튜토리얼",
      }),
    },
  },
});
```

:::

## 예제 4: 한국어 문서에 최적화된 설정

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      hyphenToSpace: true,
      underlineToSpace: true,
      capitalizeFirst: false, // 한국어는 대문자 변환 비활성화
      capitalizeEachWords: false,
      collapsed: false,
      collapseDepth: 3,
      sortMenusByName: true,
      sortMenusByFrontmatterOrder: true,
      excludeFiles: ["README.md", ".DS_Store"],
      excludeFolders: ["node_modules", ".vitepress", "public"],
      includeRootIndexFile: true,
      rootGroupText: "📖 문서",
      keepMarkdownSyntaxFromTitle: false,
    }),
  },
});
```

:::

## 예제 5: 블로그/포스트 스타일 설정

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      sortMenusByFrontmatterOrder: true,
      sortMenusOrderByDescending: true, // 최신 포스트가 위로
      frontmatterOrderDefaultValue: 0,
      collapsed: false,
      collapseDepth: 1,
      excludeFiles: ["index.md"],
      includeRootIndexFile: false,
      rootGroupText: "최근 포스트",
      convertSameNameSubFileToGroupIndexPage: true,
    }),
  },
});
```

:::

## 예제 6: 고급 커스터마이징 (배열 방식)

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar([
      {
        documentRootPath: "/docs",
        scanStartPath: "guide",
        basePath: "/guide/",
        resolvePath: "/guide/",
        useTitleFromFileHeading: true,
        sortMenusByName: true,
        collapsed: false,
        rootGroupText: "📝 가이드",
        excludeFiles: ["README.md"],
      },
      {
        documentRootPath: "/docs",
        scanStartPath: "examples",
        basePath: "/examples/",
        resolvePath: "/examples/",
        useTitleFromFileHeading: true,
        sortMenusByFrontmatterOrder: true,
        collapsed: true,
        rootGroupText: "💡 예제",
        manualSortFileNameByPriority: [
          "basic.md",
          "intermediate.md",
          "advanced.md",
        ],
      },
      {
        documentRootPath: "/docs",
        scanStartPath: "reference",
        basePath: "/reference/",
        resolvePath: "/reference/",
        useTitleFromFileHeading: true,
        sortMenusByName: true,
        collapsed: true,
        rootGroupText: "📚 레퍼런스",
      },
    ]),
  },
});
```

:::

## 예제 7: 번호 prefix를 사용한 순서 제어

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFileHeading: true,
      sortMenusOrderNumericallyFromTitle: true,
      removePrefixAfterOrdering: true,
      prefixSeparator: ".",
      // 폴더 구조 예시:
      // 01.시작하기/
      // 02.설정/
      // 03.사용법/
      // 04.고급기능/
      collapsed: false,
      rootGroupText: "목차",
    }),
  },
});
```

:::

## 예제 8: frontmatter order를 활용한 정렬

::: code-group

```js [.vitepress/config.js]
export default defineConfig({
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "/docs",
      useTitleFromFrontmatter: true,
      sortMenusByFrontmatterOrder: true,
      frontmatterOrderDefaultValue: 999,
      collapsed: false,
    }),
  },
});
```

:::
