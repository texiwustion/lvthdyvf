import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
function Box() {
  const cards = [
    {
      title: "卡片一",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    },
    {
      title: "卡片二",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    },
    {
      title: "卡片三",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    },
    {
      title: "卡片三",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    },
    {
      title: "卡片三",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    },
    {
      title: "卡片三",
      text1: "一楼：这是一楼的内容",
      text2: "二楼：这是二楼的内容"
    }
  ];

  return (
    <div className="p2 rounded flex flex-col">
      {cards.map((card, index) => (
        // <div key={index} className="bg-white p-4 rounded shadow mb-4">
        //   <h4 className="text-lg font-bold mb-2">{card.title}</h4>
        //   <p>{card.text1}</p>
        //   <p>{card.text2}</p>
        // </div>
        <div key={index} className="flex flex-col m3 section h120">
      <span className="self-start text">开发商跑路了怎么办？</span>
      <div className="divider"></div>
      <div className="self-start group_2">
        <span className="font_1">
          {card.text1}
          <br />
        </span>
        <span className="font_1">{card.text2}</span>
      </div>
    </div>
      ))}
    </div>
    
  );
}
export default function Lobby() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="lobby">
      <Box />
    </View>
  );
}
