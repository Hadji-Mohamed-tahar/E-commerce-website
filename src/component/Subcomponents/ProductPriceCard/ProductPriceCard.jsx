// import React from "react";
// import { CiStar } from "react-icons/ci";
// import './ProductPriceCard.css';

// const ProductPriceCard = ({ title, price, rating, img }) => {
//   return (
//     <div className="ProductPriceCard">
//       <div className="ProductPriceCard-img">
//         <img src={img} alt={title} width="150px" height="150px" />
//       </div>
//       <ul className="ProductPriceCard-text">
//         <li className="ProductPriceCard-text-title">{title}</li>
//         <li className="ProductPriceCard-text-price">{price}</li>
//         <li className="ProductPriceCard-text-rating"><CiStar /></li>
//       </ul>
//       <button className="ProductPriceCard-AddCart">Add To Cart</button>
//     </div>
//   );
// };

// export default ProductPriceCard;


import React from "react";
import { CiStar } from "react-icons/ci";
import './ProductPriceCard.css';

const ProductPriceCard = ({ title, price, rating, img }) => {
  return (
    <div className="ProductPriceCard">
      <div className="ProductPriceCard-img">
        <img src={img} alt={title} width="150px" height="150px" />
      </div>
      <ul className="ProductPriceCard-text">
        <li className="ProductPriceCard-text-title">{title}</li>
        <li className="ProductPriceCard-text-price">{price}</li>
        <li className="ProductPriceCard-text-rating">
          <CiStar /> {rating}
        </li>
      </ul>
      <button className="ProductPriceCard-AddCart">Add To Cart</button>
    </div>
  );
};

export default ProductPriceCard;

