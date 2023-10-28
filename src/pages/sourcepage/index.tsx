import { navigateTo } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default function() {
  const list = [
    { name: "font", path: "/pages/font/index" },
    { name: "size", path: "/pages/size/index" },
    { name: "shadow", path: "/pages/shadow/index" },
    { name: "border", path: "/pages/border/index" },
    { name: "spacing", path: "/pages/spacing/index" },
    { name: "shortcuts", path: "/pages/shortcuts/index" },
    { name: "color", path: "/pages/color/index" },
    { name: "directives", path: "/pages/directives/index" },
    { name: "首页", path: "/pages/main/index" },
    { name: "大厅", path: "/pages/lobby/index" },
    { name: "检索", path: "/pages/search/index" },
    { name: "我的", path: "/pages/profile/index" }
  ];

  function to(url: string) {
    navigateTo({
      url
    });
  }

  return (
    <View className="py-3">
      <View className="grid grid-cols-3 justify-items-center">
        {list.map((item, index) => (
          <View
            key={index}
            className="w-200 h-200 shadow-md center rounded-md"
            onClick={() => to(item.path)}
          >
            {item.name}
          </View>
        ))}
      </View>
    </View>
  );
}
