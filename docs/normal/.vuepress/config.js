const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

// .vuepress/config.js
module.exports = {
    title: 'TipTop的文档',  
    description : 'tipTop的个人文档，vuePress文档',
    head:headConf,
    plugins: pluginConf,
    themeConfig: {
        lastUpdated: '上次更新', // string | boolean
        // editLinks: true,
        // editLinkText: '编辑文档！',
        nav: navConf,
        search: true,
        searchMaxSuggestions: 30,
        sidebarDepth: 2,
    }
}