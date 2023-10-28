export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/font/index",
    "pages/size/index",
    "pages/shadow/index",
    "pages/border/index",
    "pages/spacing/index",
    "pages/shortcuts/index",
    "pages/color/index",
    "pages/directives/index",
    "pages/main/index",
    "pages/lobby/index",
    "pages/profile/index",
    "pages/search/index",
    "pages/sourcepage/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "律堂鼎臻",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "资源页"
      },
      {
        pagePath: "pages/main/index",
        text: "首页"
      },
      {
        pagePath: "pages/lobby/index",
        text: "大厅"
      },
      {
        pagePath: "pages/search/index",
        text: "检索"
      },
      {
        pagePath: "pages/profile/index",
        text: "我的"
      }
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white"
  }
});
