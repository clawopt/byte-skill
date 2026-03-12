import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ByteTech',
  description: '迈向AI · 计算机教程与学习大全',
  base: '/byte-skill/',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'ByteTech',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '职业教程',
        items: [
          { text: '后端开发工程师 · 数据库开发', link: '/career/backend/db-dev/' }
        ]
      },
      {
        text: '技术教程',
        items: [
          { text: 'C++ 教程', link: '/tutorials/cpp/' },
          { text: '操作系统', link: '/tutorials/os/' },
          { text: '计算机网络', link: '/tutorials/network/' }
        ]
      }
    ],
    sidebar: {
      '/career/backend/db-dev/': [
        {
          text: '学习路线总览',
          items: [
            { text: '路线导读', link: '/career/backend/db-dev/' },
            { text: '数据库原理', link: '/career/backend/db-dev/db-theory/' },
            { text: '存储引擎', link: '/career/backend/db-dev/storage-engine/' },
            { text: 'SQL 与索引优化', link: '/career/backend/db-dev/sql-advanced/' },
            { text: '分布式与高可用数据库', link: '/career/backend/db-dev/distributed-db/' },
            { text: '性能调优与排障', link: '/career/backend/db-dev/performance-tuning/' }
          ]
        }
      ],
      '/tutorials/cpp/': [
        {
          text: 'C++ 入门教程',
          items: [
            { text: '第 1 章 · 语言与环境简介', link: '/tutorials/cpp/' }
          ]
        }
      ],
      '/tutorials/os/': [
        {
          text: '操作系统教程',
          items: [
            { text: '第 1 章 · 操作系统是什么', link: '/tutorials/os/' }
          ]
        }
      ],
      '/tutorials/network/': [
        {
          text: '计算机网络教程',
          items: [
            { text: '第 1 章 · 走进计算机网络世界', link: '/tutorials/network/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clawopt/byte-skill' }
    ],
    footer: {
      message: 'ByteTech · 迈向AI',
      copyright: 'Copyright © 2026 ByteTech'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/byte-skill/_pagefind/pagefind-ui.css'
      }
    ],
    [
      'script',
      {
        type: 'module',
        src: '/byte-skill/_pagefind/pagefind-ui.js'
      }
    ]
  ]
})

