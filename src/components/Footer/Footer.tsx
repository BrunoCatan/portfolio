import "../Footer/Footer.css";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";

export function Footer() {
  return (
    <div className="Footer_main">
      <div className="Footer_division">
        <div className="Footer_division_div"></div>
      </div>
      <div className="Footer_container">
        <div className="Footer_icons_container">
          <a
            href="https://www.linkedin.com/in/brunocatan/"
            className="Footer_a"
            target="_blank"
          >
            <BsLinkedin className="Footer_icons" />
            <p>Linkedin</p>
          </a>
          <a
            href="https://wa.me/+5517992817472"
            className="Footer_a"
            target="_blank"
          >
            <BsWhatsapp className="Footer_icons" />
            <p>Whatsapp</p>
          </a>
          <a
            href="mailto:devbrunocatan@gmail.com"
            className="Footer_a"
            target="_blank"
          >
            <AiFillMail className="Footer_icons" />
            <p>Email</p>
          </a>
          <a
            href="https://github.com/brunocatan"
            className="Footer_a"
            target="_blank"
          >
            <GoMarkGithub className="Footer_icons" />
            <p>Github</p>
          </a>
        </div>
        <p className="Footer_Developed">
          Developed by
          <a href="https://www.linkedin.com/in/brunocatan/"> BrunoCatan</a>
        </p>
      </div>
    </div>
  );
}
