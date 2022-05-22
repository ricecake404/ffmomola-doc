import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "鱼糕文档",
  description: "最终幻想FF14鱼糕文档站",

  themeConfig: {
    logo: "https://cdn.jsdelivr.net/gh/ricecake404/images@main/img/pastry-fish.png",
    repo: "https://ricecake302.coding.net/p/pastry-fish/d/pastry-fish-doc/git",
    repoLabel: "文档项目",
    docsRepo:
      "https://ricecake302.coding.net/p/pastry-fish/d/pastry-fish-doc/git",
    docsBranch: "master",
    docsDir: "docs",
    editLinkPattern: ":repo/tree/:branch/:path?tab=file",
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: [
            "/guide/download.md",
          ],
        },
      ],
    },
  },
});
