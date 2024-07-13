import img from "../../../assets/catigory (2).png";
import "./SaleCard.css"
const SaleCard = () => {
  return (
    <div className="saleCard">
      <div className="saleCard-text">
        <h5>Final Reduction</h5>
        <h6>Sale up to 20% Off</h6>
        <h6 className="price">Only From $270.00</h6>
        <a href="#">BUY NOW</a>
      </div>
      <div className="saleCard-img">
        <img src={img} />
      </div>
    </div>
  );
};

export default SaleCard;
