import { View, Button, Image, Text } from "@tarojs/components";
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
      <div className="text-2xl m4 ft">免费一对一匹配</div>
      <div className="text-1xl m4 ft">在线免费匹配在校法学生一对一回答问题</div>
      <div className="center">
        <ButtonComponent />
      </div>
      
      <View className="flex">
        <InnerView />
      </View>
      <div className="b-4px b-t-black overflow-scroll overscroll-y-auto">
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
  
    <div className="outer-circle scale-80" onClick={handleMap}>
      <div className="inner-circle center text-3xl text-white ft-2">{!isMapping ? "匹配" : "停止匹配"}</div>
    </div>

  );
}

function InnerView() {
  return (
    <View className="flex-col justify-start items-start self-start text-wrapper_2 scale-80 relative right-50">
      <Text className="text_2">我的咨询</Text>
    </View>
  );
}

function InnerContent({ id, text }) {
  return (
 <div className="flex flex-row section h160 m-b-5">
      <div className="flex items-center relative section_2 space-x-14 w-2/5">
        <img
          className="m2 m-l-4 self-center image"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653dad04ce83440011a57dd4/16985527248785418109.png"
        />
        <div className="m2 m-l-0 w-3/5">
          <span className="font_1">
            祯哥
            <br />
          </span>
          <span className="font_1">武汉大学</span>
        </div>
      </div>
      <div className="flex-col justify-start items-start flex-auto text-wrapper_3">
        <span className="font_1 text_3">{id}<br /></span>
        <span className="font_1 text_3">{text}</span>
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
