import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.css";
import { useState } from "react";

function SearchBox({ searchTerm, setSearchTerm }) {
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
    <div className="flex flex-row items-center  m-t-54rpx m-l-10px m-r-10px bg-slate-200 rounded-4 h-70rpx">
      <img
        className="image m-l-10rpx m-r-10rpx"
        onClick={handleSearch}
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/653dad04ce83440011a57dd4/16985527248050756148.png"
      />
      <input
        placeholder="检索法律条文"
        value={searchTerm}
        className="font_1 text text_2"
        onChange={e => handleChange(e)}
      />
    </div>
  );
}

function Box() {
  return (
    <div className="m-2 p-2 rounded-3 bg-white center m-t-140rpx shadow-lg">
      {/* <div className="flex justify-between mb-4">
        <div className="border-b-2 border-gray-500 font-bold">法律分类检索</div>
        <div className="border-b-2 border-gray-500 font-bold">案例分类检索</div>
      </div> */}
      <div className="grid gap-4 grid-cols-2 h-full w-full p-10rpx">
        <div className="center text-35rpx text-white bg-linear p-4 rounded-2 shadow-lg h-90rpx">
          法律分类检索
        </div>
        <div className="center text-35rpx text-white bg-linear p-4 rounded-2 shadow-lg">
          案例分类检索
        </div>
      </div>
    </div>
  );
}

function ArticleBlock({ setSearchTerm }) {
  function handleClick(event, search) {
    setSearchTerm(search);
  }
  const hotSearches = [
    "React",
    "JavaScript",
    "CSS",
    "Web 开发",
    "人工智能",
    "数据科学"
  ];

  return (
    <div className="m-4 p-2 m-t-100rpx bg-white shadow h-400rpx rounded-4 center flex-col">
      <div className="text-2xl font-bold h-60rpx">热门</div>
      <div className="h-300rpx overflow-scroll p-2 w-full">
        {hotSearches.map((search, index) => (
          <div
            key={index}
            className="mb-2 m2 line-height-8 b-b-solid b-b-4rpx b-#abc1ee"
            onClick={e => handleClick(e, search)}
          >
            {search}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="search bg-slate-100 h-100vh">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Box />
      <ArticleBlock setSearchTerm={setSearchTerm} />
    </View>
  );
}
