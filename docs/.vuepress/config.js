// .vuepress/config.js
module.exports = {
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
            { text: 'Guide', link: '/guide/', target:'_blank', rel:'noopener noreferrer' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
        ],
        navbar: true,
        //侧边栏部分
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
          
    }
}