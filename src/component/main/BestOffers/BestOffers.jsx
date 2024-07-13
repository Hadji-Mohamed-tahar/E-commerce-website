import BestOffersCard from "component/Subcomponents/BestOffersCard/BestOffersCard";
import React from "react";
import './BestOffers.css'
import BestOffers1 from "../../../assets/BestOffers (1).png";
import BestOffers2 from "../../../assets/BestOffers (2).png";
import BestOffers3 from "../../../assets/BestOffers (3).png";

const BestOffersData = [
  {
    title: "NEW ARRIVALS",
    text: "SKI CLOTHES SALE Up to 35% Off",
    img: BestOffers1,
  },
  {
    title: "BEST SELLER",
    text: "TRENDING WOMEN SUNGLASSES",
    img: BestOffers2,
  },
  {
    title: "NEW ARRIVALS",
    text: "NEW LATEST BAG COLLECTION",
    img: BestOffers3,
  },
];
const BestOffers = () => {
  return (
    <div className="BestOffers">
      {BestOffersData.map((item, index) => (
        <BestOffersCard key={index} BestOffersData={item} />
      ))}
    </div>
  );
};

export default BestOffers;
