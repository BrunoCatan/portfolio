import { useState } from "react";
import Logo from "../../assets/logo.svg";
// import "./NavBar.css";
import scrollToElement from "scroll-to-element";
import styles from "./NavBar.module.css";

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

    const [active, setActive] = useState(styles.nav_menu);

    const navToggle = () => {
        active === styles.nav_menu
            ? setActive(styles.nav_menu + " " + styles.nav_active)
            : setActive(styles.nav_menu);
    };

    return (
        <div id="top">
            <nav className={styles.nav_container}>
                <div>
                    <a href="#top" onClick={handleClick}>
                        <img
                            src={Logo}
                            alt="Logo Bruno Catan"
                            className={styles.nav_img}
                        />
                    </a>
                </div>
                <ul className={active}>
                    <li className={styles.nav_li}>
                        <a
                            href="#top"
                            className={styles.nav_a}
                            onClick={handleClick}
                        >
                            Home
                        </a>
                    </li>
                    <li className={styles.nav_li}>
                        <a
                            href="#Skills"
                            className={styles.nav_a}
                            onClick={handleClick}
                        >
                            Skills
                        </a>
                    </li>
                    <li className={styles.nav_li}>
                        <a
                            href="#MyProjects"
                            className={styles.nav_a}
                            onClick={handleClick}
                        >
                            Projetos
                        </a>
                    </li>
                    <li className={styles.nav_li}>
                        <a
                            href="#Contact"
                            className={styles.nav_a}
                            onClick={handleClick}
                        >
                            Contatos
                        </a>
                    </li>
                </ul>
                <button onClick={navToggle} className={styles.nav_toggle}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </nav>
        </div>
    );
}
