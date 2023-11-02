import { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Switch } from "@tarojs/components";
import classNames from "classnames";
import "./index.css";

export default function Settings() {
  const [developerMode, setDeveloperMode] = useState(false);

  const handleSwitchChange = value => {
    setDeveloperMode(value);
  };

  return (
    <View className={classNames("p-4")}>
      <View className={classNames("flex", "items-center", "mb-4")}>
        <Text className={classNames("text-lg", "font-bold")}>开发者模式</Text>
        <Switch
          className={classNames("ml-2")}
          checked={developerMode}
          onChange={handleSwitchChange}
          color="#10B981"
        />
      </View>
      <View className={classNames("flex", "items-center")}>
        <View
          className={classNames(
            "w-8",
            "h-8",
            "rounded-full",
            developerMode ? "bg-green-500" : "bg-gray-400",
            "transition-all",
            "duration-300",
            "transform",
            developerMode ? "translate-x-full" : "translate-x-0"
          )}
        />
        <Text className={classNames("ml-2")}>
          {developerMode ? "已开启" : "已关闭"}
        </Text>
      </View>
    </View>
  );
}
