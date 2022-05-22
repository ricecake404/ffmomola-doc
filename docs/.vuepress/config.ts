import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "鱼糕文档",
  description: "最终幻想FF14鱼糕文档站",
  head: [["link", { rel: "icon", href: "/images/pastry-fish.webp" }]],
  themeConfig: {
    logo: "/images/pastry-fish.webp",
    repo: "ricecake404/ffmomola-doc",
    repoLabel: "查看源码",
    docsBranch: "master",
    docsDir: "docs",
    editLinkPattern: ":repo/tree/:branch/:path?tab=file",
    editLinkText: "在Github上编辑此页",
    lastUpdatedText: "上次更新",
    contributorsText: "编辑",
    sidebar: {
      "/pastry-fish/": [
        {
          text: "鱼糕",
          children: ["/pastry-fish/download.md"],
        },
      ],
    },
  },
});
