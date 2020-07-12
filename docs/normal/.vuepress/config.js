// .vuepress/config.js
module.exports = {
    title: 'TipTop的文档',  // 设置网站标题
    description : 'tipTop的个人文档，vuePress文档',     //设置网站的描述
    base: '/',
    head:[
        ['link',{rel:'icon',href:'/assets/img/favicon.png'}]
    ],
    themeConfig: {
        //导航栏设置
        logo: '',
        nav: [
            { text: '首页', link: '/' },
            { text: '导读', link: '/guide'},
            {
                text: '前端',
                items: [
                    { text: '渐进式框架', items: [
                        { text: 'Vue', link: '/vue' },
                    ]},
                    { text: 'JS相关', items: [
                        { text: 'es6', link: '/es6' },
                    ]},
                    { text: '桌面组件库', items: [
                        { text: 'ElementUi', link: '/el' },
                    ]}, 
                ]
            },
            {
                text: '后端',
                items: [
                    { text: 'PHP', link: '/php' },
                    { text: 'NodeJs', link: '/node' }                
                ]
            },
            {
                text: '开发工具',
                items: [
                    { text: '开发工具', items: [
                        { text: 'Vscode', link: '/vscode' },
                    ] },
                    { text: '版本管理', items: [
                        { text: 'git', link: '/git/' },
                    ] },
                    { text: '打包管理', items: [
                        { text: 'webpack', link: '/webpack' },
                    ] },                  
                ]
            },
            { text: 'soln', link: 'https://google.com', target:'_blank', rel:'' },
        ],
        navbar: true,
        //侧边栏部分
        sidebar: {
            '/git/': [
              '',     /* /foo/ */
              'git-a',  /* /foo/one.html */
              'git-b'   /* /foo/two.html */
            ],
      
            '/bar/': [
              '',      /* /bar/ */
              'three', /* /bar/three.html */
              'four'   /* /bar/four.html */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
          },
        displayAllHeaders: false, // 默认值：false,
        activeHeaderLinks: true, // 默认值：true
        search: true,
        searchMaxSuggestions: 30,
        lastUpdated: 'Last Updated', // string | boolean
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true
    }
}