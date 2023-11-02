import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import Taro from "@tarojs/taro";
import IconFont, { IconNames } from "../../components/iconfont/index.weapp";
import logo from "../../static/logo.png";

const listStyle = "text-24rpx";

const listItems: { icon: IconNames; name: string; path: string }[] = [
  { icon: "vip_vip-one", name: "VIP", path: "vip" },
  { icon: "天平_balance-two", name: "案件处理进度", path: "process" },
  { icon: "星星_star", name: "收藏", path: "save" },
  { icon: "设置_setting-two", name: "设置", path: "settings" }
];
const to = (name: string) => {
  Taro.navigateTo({
    url: `/pages/${name}/index`
  });
};
const getUser = () => {
  Taro.getUserProfile({
    desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: res => {
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      console.log(res);
    }
  });
};

const getCode = () => Taro.login({ success: res => pushCodeBy(res) });
const pushCodeBy = async (res: Taro.login.SuccessCallbackResult) => {
  if (!res.code) return console.log("登录失败！" + res.errMsg);
  await Taro.cloud
    .callFunction({
      name: "userLogin",
      data: {
        code: res.code
      }
    })
    .then(res => {
      if (!res.result) console.log("上传 code 失败");
      else console.log("上传 code 成功");
    });
};

function UserCard({ avatar, nickname, uid }) {
  return (
    <div className="center flex-col ">
      <img
        className="w-120rpx h-120rpx rounded-full relative bottom-40rpx"
        src={avatar}
        onClick={getCode}
      />
      <div className="font_2 text_2 relative">
        <div className="m2 mb-30rpx">{nickname}</div>
        <div>UID: {uid}</div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="w-full center bg-grey relative top-50rpx">
      <div className="m-4 p-4 rounded-4 bg-white shadow-lg h-120rpx w-full bg-grey-200">
        <div className="flex no-wrap flex-justify-between items-center h-full">
          {listItems.map((item, index) => (
            <div
              key={item.icon}
              className="center flex-col"
              onClick={() => to(item.path)}
            >
              <IconFont name={item.icon} size={60} />
              <div className={listStyle}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const user = {
    avatar:
      "https://avatars.githubusercontent.com/u/47939250?s=80&u=6070fba05a6829f4168824cd4a772ad4f6d4b139&v=4",
    nickname: "John Doe",
    uid: "123456"
  };
  const user2 = {
    avatar:
      "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653dad04ce83440011a57dd4/16985494540162819140.png",
    nickname: "Zhen Huang",
    uid: "425"
  };
  return (
    <View className="profile bg-slate-100">
      <View className="w-full bg-gradient-to-br from-cyan-500 via-blue-400 to-#062366 h-400rpx "></View>
      <UserCard {...user} />
      <Box />
    </View>
  );
}
