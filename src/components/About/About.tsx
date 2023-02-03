import "./About.css";
import img from "../../assets/Image01.svg";

export function About() {
  const cv =
    "https://drive.google.com/u/0/uc?id=1Bzv_K2tMpb83FCWdmKIcOzDuz-O2DJ6h&export=download";

  return (
    <div>
      <div className="about_container">
        <div className="about_div">
          <div className="about_p">
            <span className="about_span">Bruno Catan</span>
            <p>Desenvolvedor</p>
            <p>Front-end</p>
          </div>
        </div>
        <img src={img} alt="Imagem Bruno catan" className="about_img" />
      </div>
      <div className="about_cv_container">
        <a href={cv} download className="about_cv">
          Baixar CV
        </a>
      </div>
    </div>
  );
}
