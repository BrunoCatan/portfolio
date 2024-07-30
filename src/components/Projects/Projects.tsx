import styles from "./Projects.module.css";
import { BsLink45Deg, BsGithub } from "react-icons/bs";

const projets = [
    {
        img: "https://raw.githubusercontent.com/BrunoCatan/CalculadoraDeConsumo/master/.github/Project.png",
        title: "Calculadora Consumo",
        description:
            "Projeto desenvolvido para facilitar a vida de quem não sabe como calcular o consumo de combustível do seu veiculo.",
        deploy: "https://calculadora-de-consumo.vercel.app/",
        repo: "https://github.com/BrunoCatan/CalculadoraDeConsumo",
    },
    {
        img: "https://raw.githubusercontent.com/BrunoCatan/portifolio/main/.github/project.png?token=GHSAT0AAAAAABZRJJOVKAZPDIVBARUHWQ5WY6YK5XA",
        title: "Meu Portfólio",
        description:
            "Projeto desenvolvido para demostrar um poucos mais dos meus projetos, um portfólio profissional.",
        deploy: "https://www.brunocatan.dev",
        repo: "https://github.com/BrunoCatan/portifolio",
    },
    {
        img: "https://media.discordapp.net/attachments/666981266008309770/1069048216563228702/projectWeb.png?ex=66a9823c&is=66a830bc&hm=b6c590333e21082a0f92547ccc0f85a1ec1a9f7cd3ca371b6a38766bc66139b1&=&format=webp&quality=lossless&width=1205&height=614",
        title: "Rocket web site",
        description: "Projeto web para o Rocket Roleplay.",
        deploy: "https://rocketrp.com.br/",
        repo: "#",
    },
    {
        img: "https://media.discordapp.net/attachments/666981266008309770/1069048216873603112/project.png?ex=66a9823c&is=66a830bc&hm=ea2bca45db6b7701258f261ce0f7028fcf83638f08de3dc5f337e30a0f8081b7&=&format=webp&quality=lossless&width=1203&height=614",
        title: "Rocket Garage",
        description:
            "O Rocket garage é um script de garagem para seus players poder retirar seu veículos em game.",
        deploy: "https://media.discordapp.net/attachments/666981266008309770/1069048216873603112/project.png?ex=66a9823c&is=66a830bc&hm=ea2bca45db6b7701258f261ce0f7028fcf83638f08de3dc5f337e30a0f8081b7&=&format=webp&quality=lossless&width=1203&height=614",
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
];

export function Projects() {
    return (
        <div className={styles.Project_main}>
            <div className={styles.Project_container}>
                <div className={styles.Project_div}>
                    {projets.map((project, i) => {
                        return (
                            <ul className={styles.Projects_cards_div} key={i}>
                                <li className={styles.Projects_cards}>
                                    <a
                                        href={project.deploy}
                                        target="_blank"
                                        className={styles.Projects_a_primary}
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className={
                                                styles.Projects_cards_img
                                            }
                                        />
                                        <div
                                            className={
                                                styles.Projects_cards_flex
                                            }
                                        >
                                            <h1
                                                className={
                                                    styles.Projects_cards_h1
                                                }
                                            >
                                                {project.title}
                                            </h1>
                                            <p
                                                className={
                                                    styles.Projects_cards_p
                                                }
                                            >
                                                {project.description}
                                            </p>
                                            <div
                                                className={
                                                    styles.Projects_cards_a_flex
                                                }
                                            >
                                                <a
                                                    href={project.deploy}
                                                    className={
                                                        styles.Projects_card_a
                                                    }
                                                    target="_blank"
                                                >
                                                    <BsLink45Deg
                                                        className={
                                                            styles.Projects_card_icons
                                                        }
                                                    />
                                                    Deploy
                                                </a>
                                                <a
                                                    href={project.repo}
                                                    className={
                                                        styles.Projects_card_a
                                                    }
                                                    target="_blank"
                                                >
                                                    <BsGithub
                                                        className={
                                                            styles.Projects_card_icons
                                                        }
                                                    />
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
                className={styles.Projects_Button}
            >
                Mais Projetos
            </a>
        </div>
    );
}
