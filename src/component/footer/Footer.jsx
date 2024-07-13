import "./Footer.css";
import logo_footer from "../../assets/logo_footer.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div className="img">
          <img src={logo_footer} alt="Logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto hic
          explicabo aut. Laborum ratione repellendus numquam cupiditate,
          provident perspiciatis officia accusamus, quod in repudiandae
          necessitatibus inventore, incidunt excepturi fugiat. Debitis.
        </p>
      </div>
      <div className="download-info">
        <ul>
          <li>About Us</li>
          <li>
            <a href="#">link1</a>
          </li>
          <li>
            <a href="#">link2</a>
          </li>
          <li>
            <a href="#">link3</a>
          </li>
          <li>
            <a href="#">link4</a>
          </li>
          <li>
            <a href="#">link5</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <ul>
          <li>Customer Care</li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Track Your Order</a>
          </li>
          <li>
            <a href="#">Corporate & Bulk Purchasing</a>
          </li>
          <li>
            <a href="#">Returns & Refunds</a>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <ul>
          <li>Contact Us</li>
          <li>
            <a href="#">Ouled Mansour, Magra 28006, M'sila</a>
          </li>
          <li>
            <a href="#">Phone: +2135599999</a>
          </li>
          <li>
            <a href="#">Email: taharhadji99@gmail.com</a>
          </li>
          <li>
            <ul className="social-media">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
              <li>
                <a href="#"><BiLogoInstagramAlt /></a>
              </li>
              <li>
                <a href="#"><FaTwitter /></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
