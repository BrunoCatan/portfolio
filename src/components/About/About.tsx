import styles from "./About.module.css";
import img from "../../assets/Image01.svg";

export function About() {
    const cv =
        "https://public.ph.files.1drv.com/y4msD2RYoC9TB6vbZKy8LOgNu1NR7bzxvghC6Z-jGOvx8T-eaUTkSUVS654T-8789AGBDN6dkG-vpAxLOss38kRcMmEmMWgx7WpF8vCshVb8OqfyCp8BWN7SeUrdh2eCiNhKz3cr3yFrZtvXKhZTWKqFHhEwV21eEc2-YTsu_cU1OVuR4L4-TI2apv26raNSJBtEUAEolC6oSeccHgMu_XxXXhJN8Brvl5LW_ukA4T1ocM?AVOverride=1";

    return (
        <div>
            <div className={styles.about_container}>
                <div className={styles.about_div}>
                    <div className={styles.about_p}>
                        <span className={styles.about_span}>Bruno Catan</span>
                        <p>Desenvolvedor</p>
                        <p>Front-end</p>
                    </div>
                </div>
                <img
                    src={img}
                    alt="Imagem Bruno catan"
                    className={styles.about_img}
                />
            </div>
            <div className={styles.about_cv_container}>
                <a href={cv} download className={styles.about_cv}>
                    Baixar CV
                </a>
            </div>
        </div>
    );
}
