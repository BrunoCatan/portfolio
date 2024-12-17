import styles from "./About.module.css"
import img from "../../assets/Image01.svg"

export function About() {
  const cv =
    "https://my.microsoftpersonalcontent.com/personal/431e94ad3967e099/_layouts/15/download.aspx?UniqueId=3967e099-94ad-201e-8043-4e2408000000&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiIzZWVjZDBlNy1jMWZjLTRiYzUtOTlhZS1hYTEwYjVlYTJkOGEiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3MzQ0NTY1MDkifQ.HYO5dCBEWHukMCS7ayB_CaclzcvJ_nyJFLweqtVSMDAEjI1ftKYM-iJly-6kBcMHZn1RF3xShhkB5AlWh0FTRAGwPi36K-bt7nvg18ODfxgMaI8gMO2htPc2FGZ9kpyyR78Yfvuw4JIi6Qi-D-je_Y7IP9fXhvBLfEHIPkNvtb7SFBkct5dCpZAaaRbMRvwBQFWnd6VYSpkX125MfcGEVQfl7w85v4EPwNlNOcTEDKSiTSmGSczHvKpfnLoPjw4S7H5ZKXE9KcC1iwqFslifZNVJQNSujgCnMuay0wtT3MnlsdJVLjF2hqF2D7Ip04e7e7hHk8bbNdfUKzjsdLmmPHuTJVsyyQFJsF-mOQG9RXXvhBGn8f0Xqich_3oA1fBrTicO6LRsSSwdBr1a0PVatg.Z88fDGyhoWy-p_RXXxoA0ET2mUnGoWBlZbuOELyzqds&ApiVersion=2.0&AVOverride=1"

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
        <img src={img} alt="Imagem Bruno catan" className={styles.about_img} />
      </div>
      <div className={styles.about_cv_container}>
        <a href={cv} download className={styles.about_cv}>
          Baixar CV
        </a>
      </div>
    </div>
  )
}
