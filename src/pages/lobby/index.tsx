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
    }
  ];

  return (
    <div className="m-4 p-4 bg-gray-200 rounded">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-4 rounded shadow mb-4">
          <h4 className="text-lg font-bold mb-2">{card.title}</h4>
          <p>{card.text1}</p>
          <p>{card.text2}</p>
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
      <Text>Hello GenShin!</Text>
      <Box />
    </View>
  );
}
