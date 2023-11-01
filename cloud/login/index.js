// 云函数入口文件
const cloud = require("wx-server-sdk");

cloud.init({
  env: "zhen-2g23i0zxf8f9d036"
});

const db = cloud.database();
// await db.createCollection('user')
// const userCollection = db.collection('user')

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log("event: ", event)
  // console.log("context: ", context)

  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  const wxContext = cloud.getWXContext();

  db.collection("user")
    .add({
      data: {
        _openid: wxContext.OPENID,
        createdAt: db.serverDate() //createdTime is... or created at ...
      }
    })
    .then(res => console.log(res));
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID
    // unionid: wxContext.UNIONID,
  };
};
