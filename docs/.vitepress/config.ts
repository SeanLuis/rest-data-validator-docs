import { HeadConfig, defineConfigWithTheme } from 'vitepress'
import path from 'path'
import baseConfig from '../../src/vitepress/config/baseConfig'
import type { Config as ThemeConfig } from '../../src/vitepress/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  vite: {
    build: {
      minify: false
    },
    resolve: {
      alias: {
        '@vue/theme': path.join(__dirname, '../../src')
      }
    }
  },

  lang: 'en-US',
  title: 'REST Data Validator',
  description:
    'REST Data Validator is a versatile library designed to offer comprehensive validation for data in RESTful APIs',

  themeConfig: {
    algolia: {
      indexName: 'rest_data_validator_docs',
      appId: '1FQGDSKECD',
      apiKey: '8603f70cd71a8af4afa0900b0f5346a4',
      placeholder: 'Search on Rest Data Validator',
      translations: {
        modal: {
          searchBox: {
            cancelButtonText: 'Abort',
            resetButtonTitle: 'Clear search term'
          },
          footer: {
            searchByText: 'Search gracefully done by '
          }
        }
      }
    },

    head: [
      ['script', { src: '/consent.js' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      [
        'script',
        {
          async: '',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-95VHHSTEN0'
        }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-95VHHSTEN0');`
      ],
      [
        'script',
        {
          id: 'Cookiebot',
          src: 'https://consent.cookiebot.com/uc.js',
          'data-cbid': '24a35cd5-88b2-497b-bb37-81610ac07f04',
          type: 'text/javascript',
          async: ''
        }
      ],
      [
        'script',
        {
          id: 'CookieDeclaration',
          src: 'https://consent.cookiebot.com/24a35cd5-88b2-497b-bb37-81610ac07f04/cd.js',
          type: 'text/javascript',
          async: ''
        }
      ]
    ] as HeadConfig[],

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/SeanLuis/rest-data-validator'
      }
    ],

    nav: [
      {
        text: 'Docs',
        activeMatch: `^/(guide|examples)/`,
        items: [
          {
            items: [
              { text: 'Features', link: '/guide/features' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' }
            ]
          }
        ]
      },
      {
        text: 'Community',
        activeMatch: `^/community/`,
        items: [
          {
            items: [
              {
                text: 'Contribution Guide',
                link: '/community/contribution-guide'
              },
              {
                text: 'Code of Conduct',
                link: '/community/code-of-conduct'
              }
            ]
          }
        ]
      },
      {
        text: 'Resources',
        activeMatch: `^/resources/`,
        items: [
          {
            items: [
              {
                text: 'License',
                link: '/resources/license'
              },
              {
                text: 'Roadmap',
                link: '/resources/roadmap'
              },
              {
                text: 'Changelog',
                link: '/resources/changelog'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Features', link: '/guide/features' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Usage', link: '/guide/usage' }
          ]
        },
        {
          text: 'Validators and Decorators',
          items: [
            { text: 'Class Decorator', link: '/guide/class-decorator' },
            { text: 'String Decorator', link: '/guide/string-decorator' },
            { text: 'Number Decorator', link: '/guide/number-decorator' },
            { text: 'Email Decorator', link: '/guide/email-decorator' },
            { text: 'Password Decorator', link: '/guide/password-decorator' },
            { text: 'Date Decorator', link: '/guide/date-decorator' },
            { text: 'Enum Decorator', link: '/guide/enum-decorator' },
            { text: 'File Decorator', link: '/guide/file-decorator' },
            { text: 'Range Decorator', link: '/guide/range-decorator' },
            { text: 'Regex Decorator', link: '/guide/regex-decorator' },
            { text: 'Custom Decorator', link: '/guide/custom-decorator' },
            { text: 'Domain Decorator', link: '/guide/domain-decorator' },
            { text: 'Array Decorator', link: '/guide/array-decorator' },
            { text: 'Nested Decorator', link: '/guide/nested-decorator' },
            {
              text: 'Contextual Decorator',
              link: '/guide/contextual-decorator'
            },
            {
              text: 'Dependency Decorator',
              link: '/guide/dependency-validators#dependency-decorator'
            },
            {
              text: 'Security Decorator',
              link: '/guide/security-validators#security-decorator'
            }
          ]
        },
        {
          text: 'Group-Based Validation',
          items: [{ text: 'Usage', link: '/guide/group-based-validations' }]
        },
        {
          text: 'Validation Utilities',
          items: [
            { text: 'Async Validators', link: '/guide/async-validators' },
            { text: 'Nested Validators', link: '/guide/nested-validators' },
            {
              text: 'Contextual Validators',
              link: '/guide/contextual-validators'
            },
            {
              text: 'Dependency Validators',
              link: '/guide/dependency-validators'
            },
            {
              text: 'Security Validators',
              link: '/guide/security-validators'
            }
          ]
        },
        {
          text: 'Sanitizer Utilities',
          items: [{ text: 'Functions', link: '/guide/sanitizer-functions' }]
        },
        {
          text: 'Decorators Utilities',
          items: [
            { text: 'Accessors Decorator', link: '/guide/accessors-decorator' },
            { text: 'Getter Decorator', link: '/guide/getter-decorator' },
            { text: 'Setter Decorator', link: '/guide/setter-decorator' }
          ]
        },
        {
          text: 'Rest CLI',
          items: [
            { text: 'Installation', link: '/guide/cli#installation' },
            { text: 'Commands', link: '/guide/cli#cli-commands' },
            { text: 'Model Generation', link: '/guide/cli#model-generation' },
            {
              text: 'Validation Generation',
              link: '/guide/cli#validation-generation'
            }
          ]
        }
      ]
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://github.com/SeanLuis/rest-data-validator/blob/master/LICENSE'
      },
      copyright: 'Copyright © 2024 Sean Rodriguez'
    }
  }
})
