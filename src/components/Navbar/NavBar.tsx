import { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./NavBar.css";

export function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };

  return (
    <div>
      <nav className="nav_container">
        <div>
          <a href="">
            <img src={Logo} alt="Logo Bruno Catan" className="nav_img" />
          </a>
        </div>
        <ul className={active}>
          <li className="nav_li">
            <a href="" className="nav_a">
              Home
            </a>
          </li>
          <li className="nav_li">
            <a href="" className="nav_a">
              Skills
            </a>
          </li>
          <li className="nav_li">
            <a href="" className="nav_a">
              Projetos
            </a>
          </li>
          <li className="nav_li">
            <a href="" className="nav_a">
              Contatos
            </a>
          </li>
        </ul>
        <button onClick={navToggle} className="nav_toggle">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
      </nav>
    </div>
  );
}
