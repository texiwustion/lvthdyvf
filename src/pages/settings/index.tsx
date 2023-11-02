import { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Switch } from "@tarojs/components";
import classNames from "classnames";
import "./index.css";

export default function Settings() {
  const [developerMode, setDeveloperMode] = useState<boolean>(
    Taro.getStorageSync("developerMode")
  );

  const handleSwitchChange = () => {
    Taro.setStorageSync("developerMode", !developerMode);
    setDeveloperMode(!developerMode);
  };

  return (
    <View className={classNames("p-4", "h-100vh", "bg-slate-100")}>
      <View
        className={classNames(
          "flex",
          "items-center",
          "flex-justify-between",
          "mb-4",
          "h-100rpx",
          "bg-white",
          "rounded-2",
          "shadow-lg",
          "p-3",
          "box-border"
        )}
      >
        <Text className={classNames("text-35rpx")}>开发者模式(免登录)</Text>
        <Switch
          className={classNames("ml-2 scale-80")}
          checked={developerMode}
          onChange={handleSwitchChange}
          color="#10B981"
        />
      </View>
    </View>
  );
}
