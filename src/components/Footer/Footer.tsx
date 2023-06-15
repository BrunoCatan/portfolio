import styles from "./Footer.module.css";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

export function Footer() {
    return (
        <div className={styles.Footer_main} id="Contact">
            <div className={styles.Footer_division}>
                <div className={styles.Footer_division_div}></div>
            </div>
            <div className={styles.Footer_container}>
                <div className={styles.Footer_icons_container}>
                    <a
                        href="https://www.linkedin.com/in/brunocatan/"
                        className={styles.Footer_a}
                        target="_blank"
                    >
                        <BsLinkedin className={styles.Footer_icons} />
                        <p>Linkedin</p>
                    </a>
                    <a
                        href="https://wa.me/+5517992817472"
                        className={styles.Footer_a}
                        target="_blank"
                    >
                        <BsWhatsapp className={styles.Footer_icons} />
                        <p>Whatsapp</p>
                    </a>
                    <a
                        href="mailto:devbrunocatan@gmail.com"
                        className={styles.Footer_a}
                        target="_blank"
                    >
                        <AiFillMail className={styles.Footer_icons} />
                        <p>Email</p>
                    </a>
                    <a
                        href="https://github.com/brunocatan"
                        className={styles.Footer_a}
                        target="_blank"
                    >
                        <GoMarkGithub className={styles.Footer_icons} />
                        <p>Github</p>
                    </a>
                </div>
                <p className={styles.Footer_Developed}>
                    Developed by
                    <a
                        href="https://www.linkedin.com/in/brunocatan/"
                        target="_blank"
                    >
                        {" "}
                        BrunoCatan
                    </a>
                </p>
            </div>
        </div>
    );
}
