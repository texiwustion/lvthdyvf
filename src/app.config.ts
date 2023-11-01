export default defineAppConfig({
  pages: [
    "pages/main/index",
    "pages/unlogin/index",
    "pages/login/index",
    "pages/register/index",
    "pages/index/index",
    "pages/font/index",
    "pages/size/index",
    "pages/shadow/index",
    "pages/border/index",
    "pages/spacing/index",
    "pages/shortcuts/index",
    "pages/color/index",
    "pages/directives/index",
    "pages/lobby/index",
    "pages/profile/index",
    "pages/search/index",
    "pages/sourcepage/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#f1f1f1",
    navigationBarTitleText: "律堂鼎臻",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      // {
      //   pagePath: "pages/index/index",
      //   iconPath: "./static/首页.png",
      //   selectedIconPath: "./static/首页.png",
      //   text: "资源页"
      // },
      {
        pagePath: "pages/main/index",
        iconPath: "./static/首页.png",
        selectedIconPath: "./static/首页2.png",
        text: "首页"
      },
      {
        pagePath: "pages/lobby/index",
        iconPath: "./static/大厅.png",
        selectedIconPath: "./static/大厅2.png",
        text: "大厅"
      },
      {
        pagePath: "pages/search/index",
        iconPath: "./static/检索.png",
        selectedIconPath: "./static/检索2.png",
        text: "检索"
      },
      {
        pagePath: "pages/profile/index",
        iconPath: "./static/我的.png",
        selectedIconPath: "./static/我的2.png",
        text: "我的"
      }
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  },
  usingComponents: {
    iconfont: "@/components/iconfont/weapp/weapp"
  }
});
