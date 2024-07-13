import { MenuData } from "./menuData";
import "./Header2.css";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Header2 = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className="navbar-items">
      <h1 className="logo">React</h1>
      <div className="menu-icons" onClick={() => setClicked(!clicked)}>
        {clicked ?<AiOutlineClose /> :  <CgMenuRightAlt />}
      </div>
      <ul className={clicked ? "nav-menu active":"nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header2;
