import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import logo from "../../static/logo.png";
import Taro from "@tarojs/taro";
function UnLogin() {
  return (
    <div className="flex justify-center items-center flex-col h-100vh ft">
      <img className="h-60vh" src={logo} />
      <div className="flex flex-justify-between">
        <button
          className="relative bottom-80 h125 pd text-18Px bg-#062366 text-white rounded-2 cursor-pointer hover:op"
          onClick={toRegister}
        >
          注册
        </button>
        <button
          className="relative bottom-80 h125 pd text-18Px bg-#062366 text-white rounded-2 cursor-pointer hover:op"
          onClick={toLogin}
        >
          登录
        </button>
      </div>
    </div>
  );
}

const toLogin = () => Taro.navigateTo({ url: "/pages/login/index" });
const toRegister = () => Taro.navigateTo({ url: "/pages/register/index" });
export default function Login() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="login">
      <UnLogin />
    </View>
  );
}
