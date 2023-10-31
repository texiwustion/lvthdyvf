const cloud = require("wx-server-sdk");

cloud.init({
  env: "zhen-2g23i0zxf8f9d036"
});

const db = cloud.database();

exports.main = async (event, context) => {
  console.log(event.code);
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
    openid: wxContext.OPENID,
    appid: wxContext.APPID
  };
};
