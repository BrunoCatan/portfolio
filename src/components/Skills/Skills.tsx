import "./Skills.css";

const imgs = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
];

export function Skills() {
  return (
    <div className="skills_container" id="Skills">
      <div className="skills_div">
        <h1 className="skills_h1">Minhas Stacks</h1>
        <p className="skills_p">
          Tecnologias com as quais tenho trabalhado recentemente
        </p>
      </div>
      <div className="skills_imgs">
        <div className="skills_imgs_flex">
          <div className="skills_sub_imgs">
            <img src={imgs[0]} alt="Logo html 5" />
            <p>Html 5</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[1]} alt="Logo CSS 3" />
            <p>Css 3</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[2]} alt="Logo Javascript" />
            <p>Javascript</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[3]} alt="Logo Jquery" />
            <p>Jquery</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[4]} alt="Logo Typescript" />
            <p>Typescript</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[5]} alt="Logo Bootstrap" />
            <p>Bootstrap</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[6]} alt="Logo React" />
            <p>React</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[7]} alt="Logo Git" />
            <p>Git</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[8]} alt="Logo Github" />
            <p>Github</p>
          </div>
          <div className="skills_sub_imgs">
            <img src={imgs[9]} alt="Logo Visual Studio Code" />
            <p>Vscode</p>
          </div>
        </div>
      </div>
    </div>
  );
}
