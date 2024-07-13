import React from "react";
import Features from "./features/Features";
import Catigory from "./catigory/Catigory";
import DealsOfDay from "./DealsOfDay/DealsOfDay";
import "./Main.css";
import BestOffers from "./BestOffers/BestOffers";
import Products from "./products/Products";
import Sale from "./sale/Sale";
import FeaturedBrands from "./featuredBrands/FeaturedBrands";

const Main = () => {
  return (
    <div className="Main container">
      <Features />
      <Catigory />
      <DealsOfDay />
      <BestOffers />
      <Products />
      <Sale />
      <Products />
      <FeaturedBrands />
    </div>
  );
};

export default Main;
