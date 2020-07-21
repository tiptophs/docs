module.exports = [
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
]