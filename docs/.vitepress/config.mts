import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  appearance: 'dark',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: 'NebulaIL2CPP',
      description: 'NebulaIL2CPP Android ARM64 Unity IL2CPP Native Mod Loader 开发文档',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          {
            text: '使用指南',
            items: [
              { text: '项目概览', link: '/guide/overview' },
              { text: '快速开始', link: '/guide/quick-start' },
              { text: '构建与产物', link: '/guide/build' },
              { text: '受控目标接入', link: '/guide/integration' }
            ]
          },
          { text: 'Mod 开发', link: '/development/minimal-mod' },
          { text: 'API', link: '/api/runtime' },
          { text: '参考', link: '/reference/project-structure' }
        ],
        sidebar: [
          {
            text: '使用指南',
            items: [
              { text: '项目概览', link: '/guide/overview' },
              { text: '快速开始', link: '/guide/quick-start' },
              { text: '构建与产物', link: '/guide/build' },
              { text: '受控目标接入', link: '/guide/integration' }
            ]
          },
          {
            text: 'Mod 开发',
            items: [
              { text: '创建最小 Mod', link: '/development/minimal-mod' },
              { text: 'Mod 生命周期', link: '/development/mod-lifecycle' },
              { text: '内置示例', link: '/development/examples' }
            ]
          },
          {
            text: 'API 参考',
            items: [
              { text: 'IL2CPP Runtime API', link: '/api/runtime' },
              { text: 'Hook 与 ABI', link: '/api/hooks' },
              { text: '配置系统', link: '/api/configuration' },
              { text: '日志与诊断', link: '/api/logging' },
              { text: 'MemoryPatch', link: '/api/memory-patch' },
              { text: 'Overlay 与输入', link: '/api/overlay' }
            ]
          },
          {
            text: '项目参考',
            items: [
              { text: '项目结构', link: '/reference/project-structure' },
              { text: '安全、授权与边界', link: '/reference/safety' },
              { text: '已知限制与兼容性', link: '/reference/limitations' },
              { text: '第三方依赖', link: '/reference/third-party' },
              { text: '排错手册', link: '/reference/troubleshooting' }
            ]
          }
        ],
        editLink: {
          pattern: 'https://github.com/NebulaIL2CPP/nebulaIl2cpp.github.io/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        outline: { level: [2, 3], label: '页面导航' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        lastUpdated: { text: '最后更新于' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '文档目录',
        langMenuLabel: '切换语言',
        skipToContentLabel: '跳转到正文',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'NebulaIL2CPP Documentation',
      description: 'Documentation for the NebulaIL2CPP Android ARM64 Unity IL2CPP native mod loader',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Guide',
            items: [
              { text: 'Overview', link: '/en/guide/overview' },
              { text: 'Quick Start', link: '/en/guide/quick-start' },
              { text: 'Build and Artifacts', link: '/en/guide/build' },
              { text: 'Controlled Integration', link: '/en/guide/integration' }
            ]
          },
          { text: 'Mod Development', link: '/en/development/minimal-mod' },
          { text: 'API', link: '/en/api/runtime' },
          { text: 'Reference', link: '/en/reference/project-structure' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Overview', link: '/en/guide/overview' },
              { text: 'Quick Start', link: '/en/guide/quick-start' },
              { text: 'Build and Artifacts', link: '/en/guide/build' },
              { text: 'Controlled Integration', link: '/en/guide/integration' }
            ]
          },
          {
            text: 'Mod Development',
            items: [
              { text: 'Create a Minimal Mod', link: '/en/development/minimal-mod' },
              { text: 'Mod Lifecycle', link: '/en/development/mod-lifecycle' },
              { text: 'Built-in Examples', link: '/en/development/examples' }
            ]
          },
          {
            text: 'API Reference',
            items: [
              { text: 'IL2CPP Runtime API', link: '/en/api/runtime' },
              { text: 'Hooks and ABI', link: '/en/api/hooks' },
              { text: 'Configuration', link: '/en/api/configuration' },
              { text: 'Logging and Diagnostics', link: '/en/api/logging' },
              { text: 'MemoryPatch', link: '/en/api/memory-patch' },
              { text: 'Overlay and Input', link: '/en/api/overlay' }
            ]
          },
          {
            text: 'Project Reference',
            items: [
              { text: 'Project Structure', link: '/en/reference/project-structure' },
              { text: 'Safety, Authorization, and Boundaries', link: '/en/reference/safety' },
              { text: 'Known Limitations and Compatibility', link: '/en/reference/limitations' },
              { text: 'Third-party Dependencies', link: '/en/reference/third-party' },
              { text: 'Troubleshooting', link: '/en/reference/troubleshooting' }
            ]
          }
        ],
        editLink: {
          pattern: 'https://github.com/NebulaIL2CPP/nebulaIl2cpp.github.io/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        lastUpdated: { text: 'Last updated' },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        langMenuLabel: 'Change language',
        skipToContentLabel: 'Skip to content',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    }
  },

  themeConfig: {
    logo: { src: '/logo-none-txt.png', alt: 'NebulaIL2CPP' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gaoshu705/NebulaIL2CPP' }
    ]
  }
})
