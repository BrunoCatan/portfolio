import "./About.css";
import img from "../../assets/Image01.svg";

export function About() {
  const cv =
    "https://public.ph.files.1drv.com/y4mQ9zzJ5xiheCgX_db2kG3lMkrvlQKN0MXAWoc79wzmib2nadBQEJIdel1VBrpiZO1fzUigFDLzA5rCgjjo7nnvHqmNoaw0cx4x7qWWS4cLLopdydHLOzmxDxifT8GCQIo_bQUWyysxbhICrm0vLsguz2lT7ZjyPwLNByb8r3EEP6teMFudfjdyZR4_wax5jhSYa2te4xCkSUiTKNjnbtUX_OOJHefA4HWE4mczB-rb2s?AVOverride=1";

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
