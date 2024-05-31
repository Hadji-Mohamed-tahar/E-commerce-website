import { useContext, useState } from "react";
import { ColorModeContext } from "../../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import "./Header1.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [clicked, setClicked] = useState(false);

  return (
    <div className="hed1">
      <div className="item-left">
        <ul className="title-site">
          <li>
            <a>Hot</a>
          </li>
          <li>FREE EXPRESS SHOPING</li>
        </ul>
        <div className="show-item" onClick={() => setClicked(!clicked)}>
          {clicked ? <RiSubtractFill /> : <IoMdAdd />}
        </div>
      </div>

      <div className={clicked ? "item-right active" : "item-right"}>
        <ul className="item-mode-lang-soc">
          <li>
            <div>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined />
                </IconButton>
              )}
            </div>
          </li>
          <li>
            <select id="lang" name="lang">
              <option value="ar">ar</option>
              <option value="fr">fr</option>
              <option value="en">en</option>
            </select>
          </li>
          <li>
            <ul className="social-media">
              <li>
                <a>
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a>
                  <BiLogoInstagramAlt />
                </a>
              </li>
              <li>
                <a>
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header1;
