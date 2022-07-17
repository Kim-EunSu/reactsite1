import React from "react";
import "./App.css"; //필요한 항상 파일을 import
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Contents from "./components/Contents";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Contents>
        <Slider fonts={["slider__wrap", "nexon"]} />
        <Image skill={["section", "nexon"]} />
        <ImgText skill={["section", "nexon", "gray"]} />
        <Card skill={["section", "nexon"]} />
        <Banner skill={["section", "gmarket"]} />
        <Text skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  );
}

export default App; // 다른파일에서 사용할 수 있게 export시키기
