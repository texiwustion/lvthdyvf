import "./index.css";

import { useState } from "react";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { View, Input, Button } from "@tarojs/components";
import classNames from "classnames";

export default function Login() {
  const _pageTheme = getCurrentInstance().router?.params.pageTheme;
  const [pageTheme, setPageTheme] = useState(_pageTheme);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toMain = (): void => {
    Taro.switchTab({ url: "/pages/main/index" });
  };

  const checkData = (): Boolean => {
    if (username == "" || password == "") return false;
    return true;
  };
  const handleLogin = async () => {
    if (!checkData()) {
      return Taro.showToast({
        title: `表单不能为空！`,
        icon: "error",
        duration: 2000
      });
    }

    Taro.setStorageSync("username", username);
    Taro.setStorageSync("password", password);

    if (pageTheme == "登录") {
      await Taro.showToast({
        title: `成功${pageTheme}`,
        icon: "success",
        duration: 2000
      });
      setTimeout(toMain, 1500);
    } else {
      await Taro.showModal({
        title: "提示",
        content: "注册成功！是否跳转到登录页？",
        success: function(res) {
          if (res.confirm) {
            setTimeout(() => setPageTheme("登录"), 400);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
  };

  return (
    <div className="container flex justify-center bg-main-r">
      <div className="login-wrapper">
        <div className="header">{pageTheme}</div>
        <div className="form-wrapper">
          <input
            type="nickname"
            name="username"
            placeholder="用户名或手机号"
            className="input-item"
            onChange={e => setUsername(e.currentTarget.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="密码"
            className="input-item"
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <div className="btn bg-main-l" onClick={handleLogin}>
            {pageTheme}
          </div>
        </div>
        <div className="msg no-wrap center">
          {pageTheme == "登录" ? "还没有账号？" : "已有账号？"}
          <span
            className="text-#abc1ee bg-transparent b-0 h-80rpx flex center"
            onClick={e => setPageTheme(pageTheme == "登录" ? "注册" : "登录")}
          >
            {pageTheme == "登录" ? "注册" : "立即登录"}
          </span>
        </div>
      </div>
    </div>
  );
}
