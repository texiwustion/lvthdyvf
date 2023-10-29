import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {};

  return (
    // <div className="center m-4 h100">
    //   <input
    //     type="input"
    //     className="p-2 border b-solid border-gray-300 rounded"
    //     placeholder="搜索..."
    //     value={searchTerm}
    //     onChange={handleChange}
    //   />
    //   <Button
    //     className="p-2 text-sm font-bold rounded-1/2 center h100 w100"
    //     type="primary"
    //     onClick={handleSearch}
    //   >
    //     搜索
    //   </Button>
    // </div>
    <div className="flex flex-row items-center input section space-x-31">
      <img
        className="image m-r-2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653dad04ce83440011a57dd4/16985527248050756148.png"
      />
      <input placeholder="检索法律条文" className="font_1 text text_2" />
    </div>
  );
}

function Box() {
  return (
    <div className="m-4 p-4 bg-gray-200 rounded">
      {/* <div className="flex justify-between mb-4">
        <div className="border-b-2 border-gray-500 font-bold">法律分类检索</div>
        <div className="border-b-2 border-gray-500 font-bold">案例分类检索</div>
      </div> */}
      <div className="grid gap-4 grid-cols-2">
        <div className="bg-white p-4 rounded shadow">法律分类检索</div>
        <div className="bg-white p-4 rounded shadow">案例分类检索</div>
      </div>
    </div>
  );
}

function ArticleBlock() {
  const hotSearches = [
    "React",
    "JavaScript",
    "CSS",
    "Web 开发",
    "人工智能",
    "数据科学"
  ];

  return (
    <div className="m-4 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">热门</h2>
      {hotSearches.map((search, index) => (
        <p key={index} className="mb-2">
          {search}
        </p>
      ))}
    </div>
  );
}
export default function Search() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="search">
      <SearchBox />
      <Box />
      <ArticleBlock />
    </View>
  );
}
