// @ts-nocheck
import "./FeaturedBrands.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from "../../../assets/Brands (1).png";
import brand2 from "../../../assets/Brands (2).png";
import brand3 from "../../../assets/Brands (3).png";
import brand4 from "../../../assets/Brands (4).png";
import brand5 from "../../../assets/Brands (5).png";
import brand6 from "../../../assets/Brands (6).png";

const FeaturedBrands = () => {
  const brandsImg = [brand1, brand2, brand3, brand4, brand5, brand6];
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
    <div className="featuredBrands">
      <div className="featuredBrands-title">
        <h5>Featured Brands</h5>
      </div>
      <div className="featuredBrands-content">
        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={true}
          showDots={false}
          className="featuredBrands-content-Carousel"
        >
          {brandsImg.map((item, index) => (
            <div
              key={index}
              style={{ margin: 3 }}
              className="featuredBrands-card"
            >
              <img src={item} key={index} className="featuredBrands-card-img" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedBrands;
