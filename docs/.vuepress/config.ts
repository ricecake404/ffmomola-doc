import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: '鱼糕文档',
    description: '最终幻想FF14鱼糕文档站',

    themeConfig: {
        logo: 'https://cdn.jsdelivr.net/gh/ricecake404/images@main/img/pastry-fish.png',
    },
})