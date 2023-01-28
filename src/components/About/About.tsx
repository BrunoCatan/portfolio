import "./About.css";
import img from "../../assets/Image01.svg";

export function About() {
  return (
    <div className="about_container">
      <div className="about_div">
        <div className="about_p">
          <span className="about_span">Bruno Catan</span>
          <p>Desenvolvedor</p>
          <p>Front-end</p>
        </div>
      </div>
      <img src={img} alt="" className="about_img" />
    </div>
  );
}
