import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { useRef, useState } from "react";

function BaseText() {
  const data = [
    { id: "A0001", text: "下完课就做完课后作业" },
    { id: "A0002", text: "提前一小时出考场" },
    { id: "A0003", text: "AK 2023ICPC WF" }
  ];
  return (
    <div className="base-text">
      <div className="text-2xl m4">免费一对一匹配H</div>
      <div className="text-1xl m4">在线免费匹配在校法学生一对一回答问题</div>
      <div className="center">
        <ButtonComponent />
      </div>
      
      <View className="flex">
        <InnerView />
      </View>
      <div className="b-4px h200 b-t-black overflow-scroll overscroll-y-auto">
        {data.map(({ id, text }) => (
          <InnerContent key={id} id={id} text={text} />
        ))}
      </div>
    </div>
  );
}

function ButtonComponent() {
  const [isMapping, setIsMapping] = useState<boolean>(false);
  const [mapButtonType, setMapButtonType] = useState<any>("primary");
  const refMap = useRef(null);

  function handleMap() {
    if (refMap.current) {
      setMapButtonType(isMapping ? "primary" : "warn");
    }
    setIsMapping(!isMapping);
  }

  return (
  
    <div className="outer-circle" onClick={handleMap}>
      <div className="inner-circle center text-5xl">{!isMapping ? "匹配" : "停止匹配"}</div>
    </div>

  );
}

function InnerView() {
  return (
    <View className="flex-col justify-start items-start self-start text-wrapper_2">
      <Text className="text_2">我的咨询</Text>
    </View>
  );
}

function InnerContent({ id, text }) {
  return (
    <div className="m4 b-solid h-auto b-black flex">
      <div className="w-2/5 b-r b-black p-2 flex">
        <span className="b-solid rd w90 h90 rounded-full flex justify-center items-center">
          HZ
        </span>
        <div>
          <div>祯哥</div>
          <div>武汉大学</div>
        </div>
      </div>
      <div className="p-2">
        <div>{id} 案件</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default function Main() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return <BaseText />;
}
