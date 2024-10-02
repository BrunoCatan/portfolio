import styles from "./About.module.css";
import img from "../../assets/Image01.svg";

export function About() {
    const cv =
        "https://my.microsoftpersonalcontent.com/personal/431e94ad3967e099/_layouts/15/download.aspx?UniqueId=3967e099-94ad-201e-8043-4e2408000000&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiIzZWVjZDBlNy1jMWZjLTRiYzUtOTlhZS1hYTEwYjVlYTJkOGEiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3Mjc4NzMzNzcifQ.PDPTVdjR1E7ZjCL_OROuCLu43AqYx37O1fzy5xGrB_ArV7xIMIemMtHkdJj2E5qnP-U5M3RWYGSbwj-Qu95g8ws2baLDsQ0e3nxiU-3UTKrtNtzB2P3JAxxa9Muay_wknfWN_fr81Y5dX99sA3b38iIVepAssi0JGgbR_KqsV_oEPun00GQfwgWPqPUKcrYAEjuXUTAk6ogwWWRwagPsMk9UVuSOyBL1Xd9xwRQNHcatHOrRqWd8OKE3A_ESKQdsVQiBT8MBV4XWm7_2metfO3t5hA2lV6ybqtBnEEchvf7sP2axbQ50ElPL5rgMYJ5Vvrroaz0wGv4HPD_zEgeR3mtRAM1pPfk6c6qd2tzFgMUCd3LzI6kx_N24LSw-ZPND06qkhl4lf-z18qhmM9ivig.Q6rFpcG_dLpiiZJbqeqOIz-Pd6x826jwKgZKV8H6wow&ApiVersion=2.0&AVOverride=1";

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
