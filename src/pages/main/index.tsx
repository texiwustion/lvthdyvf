import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { useRef, useState } from "react";
import { Header } from "@/components/Header";

function BaseText() {
  const data = [
    { id: "A0001", text: "下完课就做完课后作业" },
    { id: "A0002", text: "提前一小时出考场" },
    { id: "A0003", text: "AK 2023ICPC WF" }
  ];
  return (
    <div className="base-text">
      <Header />
      <div className="text-2xl m4">免费一对一匹配H</div>
      <div className="text-1xl m4">在线免费匹配在校法学生一对一回答问题</div>
      <ButtonComponent />
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
    <div className="center">
      <Button
        ref={refMap}
        className="border b-solid m4 flex justify-center items-center text-4xl w300 h300 relative"
        type={mapButtonType}
        style={{ borderRadius: "50%" }}
        onClick={handleMap}
      >
        {!isMapping ? "匹配" : "停止匹配"}
      </Button>
    </div>
  );
}

function InnerView() {
  return (
    <View className="float-revert text-2xl b-l-4 b-t-4 b-l-black b-t-black relative w-1_2 trapsode">
      我的咨询
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
