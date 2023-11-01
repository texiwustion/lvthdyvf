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

  const handleLogin = () => {
    // 登录逻辑
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
          />
          <input
            type="password"
            name="password"
            placeholder="密码"
            className="input-item"
          />
          <div className="btn bg-main-l">{pageTheme}</div>
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
