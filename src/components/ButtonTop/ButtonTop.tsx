import { useState } from "react";
import styles from "./ButtonTop.module.css";
import { BsArrowUpCircle } from "react-icons/bs";
import scrollToElement from "scroll-to-element";

export function ButtonTop() {
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

    const [pageYPosition, setPageYPosition] = useState(0);

    function getPageYAfterScroll() {
        setPageYPosition(window.scrollY);
    }

    window.addEventListener("scroll", getPageYAfterScroll);
    return (
        <div>
            {pageYPosition > 50 && (
                <a
                    href="#top"
                    className={styles.ButtonTop}
                    onClick={handleClick}
                >
                    <BsArrowUpCircle className={styles.ButtonIcon} />
                </a>
            )}
        </div>
    );
}
