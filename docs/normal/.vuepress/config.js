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
            { text: '导读', link: '/guide/'},
            {
                text: '文档/笔记',
                items: [
                    { text: '前端开发', items: [
                        { text: 'Vue', link: '/vue' },
                        { text: 'Bootstrap', link: '/bootstrap' },
                        { text: 'ElementUI', link: '/element' },
                    ] },
                    { text: '后端开发', items: [
                        { text: 'PHP', link: '/language/chinese/' },
                        { text: 'NodeJs', link: '/language/japanese/' }
                    ] },
                    { text: '开发工具', items: [
                        { text: 'Vscode', link: '/language/chinese/' },
                        { text: 'Git', link: '/language/japanese/' }
                    ] },                  
                ]
            },
            { text: 'soln', link: 'https://google.com', target:'_blank', rel:'' },
        ],
        navbar: true,
        //侧边栏部分
        sidebar: 'auto',
        displayAllHeaders: false, // 默认值：false,
        activeHeaderLinks: false, // 默认值：true
        search: true,
        searchMaxSuggestions: 30,
        lastUpdated: 'Last Updated', // string | boolean
    }
}