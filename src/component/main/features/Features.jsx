import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import './Features.css'
const FeaturesData = [
  {
    title: "Fast Delivery",
    text: "Start from $10",
    icon: <TbTruckDelivery />,
  },
  {
    title: "Money Guarantee",
    text: "7 Days Back",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: "365 Days",
    text: "For free return",
    icon: <TbHours24 />,
  },
  {
    title: "Payment",
    text: "Secure system",
    icon: <MdOutlinePayment />,
  },
];
const Features = () => {
  return (
    <div className="features">
      {FeaturesData.map((feature, index) => (
        <div className="features-box" key={index}>
          <div className="features-box-icon">{feature.icon}</div>
          <div className="features-box-text">
            <h5>{feature.title}</h5>
            <h6>{feature.text}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
