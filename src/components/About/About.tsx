import styles from "./About.module.css"
import img from "../../assets/Image01.svg"

export function About() {
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
        <a
          href="/public/BrunoCatanDev.pdf"
          download
          className={styles.about_cv}
        >
          Baixar CV
        </a>
      </div>
    </div>
  )
}
