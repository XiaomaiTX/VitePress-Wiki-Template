import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
import renpy_tmLanguage from "./renpy.tmLanguage.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiki",
  description: "wiki",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/static/icon.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "Wiki", link: "/wiki" },
    ],
    sidebarMenuLabel: "目录",
    outlineTitle: "文章导航",
    returnToTopLabel: "返回顶部",
    sidebar: generateSidebar({
      /* Options... */
      debugPrint: true,
      documentRootPath: "/",
      excludePattern: ["README.md"],
      // scanStartPath: "/wiki",
      // useTitleFromFileHeading: true, // 使用 文件标题 作为 侧边栏标题
      // useFolderTitleFromIndexFile: true, // 使用 文件夹 index.md 的标题 作为 侧边栏标题
      removePrefixAfterOrdering: true,
      prefixSeparator: "-",
      // sortMenusByName: true,
      sortMenusOrderNumericallyFromTitle: true, // 开启会导致文件夹与文件乱序
      // sortFolderTo: "bottom",
    }),
    socialLinks: [{ icon: "github", link: "https://github.com/<UserName>" }],
    footer: {
      message: "",
      copyright: "Copyright © <CopyrightName>",
    },
    // feature
    editLink: {
      pattern: "https://github.com/<UserName>/<RepoName>/blob/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
    },
  },
  markdown: {
    lineNumbers: true,
    shikiSetup: (shiki) => {
      shiki.loadLanguageSync([renpy_tmLanguage as any]);
    },
  },
});
