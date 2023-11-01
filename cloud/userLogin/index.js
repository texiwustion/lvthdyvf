const cloud = require("wx-server-sdk");
const request = require("request");

cloud.init({
  env: "zhen-2g23i0zxf8f9d036"
});

const db = cloud.database();
const wx = {
  appid: "wx720c112c9b5e5421",
  secret: "1a71c9de2289fed15c6ac633a8e0ed70" //server端虽然较客户端(可反编译)安全，但都不应明文存储
};

function remoteAuth(code) {
  var url = `https://api.weixin.qq.com/sns/jscode2session?appid=${wx.appid}&secret=${wx.secret}&js_code${code}&grant_type=authorization_code`;
  request({ url }, (err, response, body) => {
    if (err) rejects(err);
    else resolve(JSON.parse(body));
  });
}

function generateToken(session) {
  return "token_" + new Date().getTime();
}
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  //   db.collection("user")
  //     .add({
  //       data: {
  //         _openid: wxContext.OPENID,
  //         createdAt: db.serverDate() //createdTime is... or created at ...
  //       }
  //     })
  //     .then(res => console.log(res));
  let session = remoteAuth(event.code);
  return {
    code: event.code,
    token: generateToken(session),
    openid: wxContext.OPENID,
    appid: wxContext.APPID
  };
};
