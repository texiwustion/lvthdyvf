import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";

function UserCard({ avatar, nickname, uid }) {
  return (
    // <div className="m-4 p-4 bg-white rounded shadow flex items-center">
    //   <div className="rounded-full bg-gray-300 flex items-center justify-center">
    //     <img src={avatar} alt="用户头像" className="w-50 h-50 rounded-full" />
    //   </div>
    //   <div className="ml-4">
    //     <h4 className="text-xl font-bold">{nickname}</h4>
    //     <p className="text-gray-500">UID: {uid}</p>
    //   </div>
    //   <div className="center ml-auto">
    //     <button className="p-2 bg-yellow-500 text-white font-bold rounded h100 center">
    //       VIP
    //     </button>
    //   </div>
    // </div>
    <div className="flex items-center relative section_2">
      <img
        className="image_2 relative left-24"
        src={avatar}
      />
      <div className="font_2 text_2 relative left-100 bottom-10">
        <div className="m2">{nickname}</div>
        <div>UID: {uid}</div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="m-4 p-4 bg-gray-200 rounded">
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">VIP</li>
        <li className="bg-white p-4 rounded shadow">案件处理进度</li>
        <li className="bg-white p-4 rounded shadow">设置</li>
        <li className="bg-white p-4 rounded shadow">收藏</li>
      </ul>
    </div>
  );
}

export default function Profile() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const user = {
    avatar:
      "https://avatars.githubusercontent.com/u/47939250?s=80&u=6070fba05a6829f4168824cd4a772ad4f6d4b139&v=4",
    nickname: "John Doe",
    uid: "123456"
  };
  const user2 = {
    avatar: "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653dad04ce83440011a57dd4/16985494540162819140.png",
    nickname: "Zhen Huang",
    uid: "425"
  }
  return (
    <View className="profile">
      <UserCard {...user} />
      <Box />
    </View>
  );
}
