import "./About.css";
import img from "../../assets/Image01.svg";

export function About() {
  const cv =
    "https://fbuqcq.ph.files.1drv.com/y4mTQ5aiG43wbGROqNngYFMdXpDbxLED3NtjNZ9j22Y5loIWKgZDh2rVJ56tBWOcukLKh2H71eighXueQfq7OFnErY2yQ3M109H5VKrDsnPh3RsY0n62xSGOu5C_HS-X1PVBb88_KkWaEtU6E07jJqiImO_UAT9_mdicU1sP-qG9-snzBoMyQ6ZPjvRdqTPpsz2IOfqNILmV1dG4yPtR06Ofw";

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
