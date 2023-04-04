import "./Projects.css";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

const projets = [
    {
        img: "https://raw.githubusercontent.com/BrunoCatan/portifolio/main/.github/project.png?token=GHSAT0AAAAAABZRJJOVKAZPDIVBARUHWQ5WY6YK5XA",
        title: "Meu Portfólio",
        description:
            "Projeto desenvolvido para demostrar um poucos mais dos meus projetos, uma portfólio profissional.",
        deploy: "https://portifolio-brunocatan.vercel.app/",
        repo: "https://github.com/BrunoCatan/portifolio",
    },
    {
        img: "https://cdn.discordapp.com/attachments/666981266008309770/1069048216563228702/projectWeb.png",
        title: "Rocket web site",
        description: "Projeto web para o Rocket Roleplay.",
        deploy: "https://rocketrp.com.br/",
        repo: "#",
    },
    {
        img: "https://cdn.discordapp.com/attachments/666981266008309770/1069048216873603112/project.png",
        title: "Rocket Garage",
        description:
            "O Rocket garage é um script de garagem para seus players poder retirar seu veículos em game.",
        deploy: "https://cdn.discordapp.com/attachments/666981266008309770/1069048216873603112/project.png",
        repo: "#",
    },
    {
        img: "https://raw.githubusercontent.com/BrunoCatan/secret_word/main/.github/project.png",
        title: "Secret word",
        description:
            "Jogo de palavras, a onde você tem que adivinhar a palavra de acordo com a dica.",
        deploy: "https://secret-word-tau.vercel.app/",
        repo: "https://github.com/BrunoCatan/secret_word",
    },
    {
        img: "https://raw.githubusercontent.com/BrunoCatan/pesquisador-github/main/.github/project.png",
        title: "Pesquisador Github",
        description:
            "Com ele você consegui pesquisar coisa dentro do github, desde usuários a repositório e muito mais...",
        deploy: "https://pesquisador-github.vercel.app/",
        repo: "https://github.com/BrunoCatan/pesquisador-github",
    },
    {
        img: "https://user-images.githubusercontent.com/75697499/229916544-148ebd54-fbd9-4904-b1be-844ea9a16270.png",
        title: "Pokedex",
        description:
            "Projeto de uma pokedex com o uso de Api, pesquise seus pokemon favoritos...",
        deploy: "https://brunocatan.github.io/projeto-pokedex/",
        repo: "https://github.com/BrunoCatan/projeto-pokedex",
    },
];

export function Projects() {
    return (
        <div className="Project_main">
            <div className="Project_container">
                <div className="Project_div">
                    {projets.map((project, i) => {
                        return (
                            <ul className="Projects_cards_div" key={i}>
                                <li className="Projects_cards">
                                    <a
                                        href={project.deploy}
                                        target="_blank"
                                        className="Projects_a_primary"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="Projects_cards_img"
                                        />
                                        <div className="Projects_cards_flex">
                                            <h1 className="Projects_cards_h1">
                                                {project.title}
                                            </h1>
                                            <p className="Projects_cards_p">
                                                {project.description}
                                            </p>
                                            <div className="Projects_cards_a_flex">
                                                <a
                                                    href={project.deploy}
                                                    className="Projects_card_a"
                                                    target="_blank"
                                                >
                                                    <BsLink45Deg className="Projects_card_icons" />
                                                    Deploy
                                                </a>
                                                <a
                                                    href={project.repo}
                                                    className="Projects_card_a"
                                                    target="_blank"
                                                >
                                                    <BsGithub className="Projects_card_icons" />
                                                    Repositório
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </div>
            <a
                href="https://github.com/BrunoCatan?tab=repositories"
                target="_blank"
                className="Projects_Button"
            >
                Mais Projetos
            </a>
        </div>
    );
}
