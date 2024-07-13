import React from "react";
import ProductPriceCard from "../ProductPriceCard/ProductPriceCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselProducts.css";

const CarouselProducts = ({ CarouselData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="CarouselProducts">
      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        showDots={false}
      >
        {CarouselData.map((item, index) => (
          <div key={index} style={{ margin: 2 }}>
            <ProductPriceCard
              title={item.title}
              price={item.price}
              rating={item.rating}
              img={item.img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselProducts;
