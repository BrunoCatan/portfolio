import { useState } from "react";
import Logo from "../../assets/logo.svg";
import "./NavBar.css";
import scrollToElement from "scroll-to-element";
import { GrClose } from "react-icons/gr";

export function Navbar() {
    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        if (targetId) {
            scrollToElement(targetId, {
                offset: 0,
                ease: "out-quint",
                duration: 800,
            });
        }
    };

    const [active, setActive] = useState("nav_menu");
    const navToggle = () => {
        active === "nav_menu"
            ? setActive("nav_menu nav_active")
            : setActive("nav_menu");
    };

    return (
        <div id="top">
            <nav className="nav_container">
                <div>
                    <a href="#top" onClick={handleClick}>
                        <img
                            src={Logo}
                            alt="Logo Bruno Catan"
                            className="nav_img"
                        />
                    </a>
                </div>
                <ul className={active}>
                    <li className="nav_li">
                        <a href="#top" className="nav_a" onClick={handleClick}>
                            Home
                        </a>
                    </li>
                    <li className="nav_li">
                        <a
                            href="#Skills"
                            className="nav_a"
                            onClick={handleClick}
                        >
                            Skills
                        </a>
                    </li>
                    <li className="nav_li">
                        <a
                            href="#MyProjects"
                            className="nav_a"
                            onClick={handleClick}
                        >
                            Projetos
                        </a>
                    </li>
                    <li className="nav_li">
                        <a
                            href="#Contact"
                            className="nav_a"
                            onClick={handleClick}
                        >
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
