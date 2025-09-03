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
      // manualSortFileNameByPriority: [
      //   "index.md",
      //   "guide.md",
      //   "config.md",
      //   "api.md",
      // ],
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

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "VitePress로 만든 데모 사이트입니다.",
      copyright: "Copyright © 2024",
    },
  },
});
