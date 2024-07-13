import React from "react";
import Header from "component/header/Header";
import Hero from "component/hero/Hero";
import "./Home.css"
import Main from "component/main/Main";
import Footer from "component/footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Main/>
      <Footer />
    </div>
  );
};

export default Home;
