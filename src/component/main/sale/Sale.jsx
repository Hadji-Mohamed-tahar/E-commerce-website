import "./Sale.css";
import img from "../../../assets/catigory (2).png";
import SaleCard from "component/Subcomponents/saleCard/SaleCard";
const Sale = () => {
  return (
    <div className="sale">
      <SaleCard />
      <SaleCard />
    </div>
  );
};

export default Sale;
