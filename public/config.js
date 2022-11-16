// 配置
window.Config = {

  // 显示标题
  SiteName: '匿名在线聊天',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'm793013708-8e8b0dad84f63a1887a1ba19',
  ],

    // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '匿名在线聊天（点击注册，验证码记得查看垃圾箱）',
      url: 'https://chat.homeroute.eu.org/'
    },
    {
      text: '博客',
      url: 'https://cbrblog.eu.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/cbr252522489/uptime-status'
    },
  ],
};
