//引入时间插件
const moment = require('moment');
// const secretKeyConf = require('./secretKeyConf.js');

moment.locale("zh-cn");

module.exports = {
//   '@vuepress/pwa': {
//     serviceWorker: true,
//     updatePopup: {
//       message: "发现新内容可用.",
//       buttonText: "刷新"
//     }
//   },
//   '@vuepress/back-to-top': true,
//   '@vuepress/google-analytics': {
//     'ga': secretKeyConf.ga
//   },
//   '@vuepress/medium-zoom': {
//     selector: '.content__default img',
//   },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "default",
    titleMap: {},
    collapseList: [],
    sidebarDepth: 3,
  }
    /**插件相关参数 */
    //   sort: "asc", // 排序
    //   titleMode: "default", // 标题模式
    //   titleMap: {}, // 标题映射
    //   nav: false, // 导航栏
    //   sidebarDepth: 1, // 标题深度
    //   collapsable: false, // 折叠
    //   collapseList: [], // 折叠列表
    //   uncollapseList: [], // 不折叠列表
};