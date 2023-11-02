import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import logo from "../../static/logo.png";
import Taro from "@tarojs/taro";
function UnLogin() {
  return (
    <div className="flex flex-col justify-center items-center ft relative top-80rpx">
      <img className="h-618rpx" src={logo} />
      <div className="flex justify-around w-full">
        <button
          className="center relative top-80rpx w-200rpx h-80rpx pd text-28rpx bg-#062366 text-white rounded-2 cursor-pointer active:op"
          onClick={toRegister}
        >
          注册
        </button>
        <button
          className="center relative top-80rpx w-200rpx h-80rpx pd text-28rpx bg-#062366 text-white rounded-2 cursor-pointer active:op"
          onClick={toLogin}
        >
          登录
        </button>
      </div>
    </div>
  );
}

const toLogin = () =>
  Taro.navigateTo({ url: "/pages/login/index?pageTheme=登录" });
const toRegister = () =>
  Taro.navigateTo({ url: "/pages/login/index?pageTheme=注册" });
const toMain = (): void => {
  Taro.switchTab({ url: "/pages/main/index" });
};
export default function Login() {
  useLoad(() => {
    console.log("Page loaded.");
    const developerMode = Taro.getStorageSync("developerMode");
    if (developerMode) {
      Taro.showToast({
        title: "免登录进入",
        icon: "success",
        duration: 1500
      });
      setTimeout(toMain, 1200);
    }
  });

  return (
    <View className="login">
      <UnLogin />
    </View>
  );
}
