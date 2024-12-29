// Import React and necessary libraries (React와 필요한 라이브러리 import)
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Photos from "./components/Photos";
import Payment from "./components/Payment";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

// Import CSS styles (CSS 스타일 가져오기)
import "./App.css";

function App() {

  return (
    <div className="App">
    {/*컴포넌트 별로 나눈 화면*/}
     <Header></Header>
     <Hero />
     <About></About>
     <Contact />
     <Photos />
     <Payment />
     <SocialMedia />
     <Footer />
    </div>
  );
}

export default App;
