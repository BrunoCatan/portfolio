import styles from "./Skills.module.css";

const imgs = [
    {
        name: "Html 5",
        alt: "Logo html 5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "Css 3",
        alt: "Logo CSS 3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Javascript",
        alt: "Logo Javascript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "Jquery",
        alt: "Logo Jquery",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    },
    {
        name: "Typescript",
        alt: "Logo Typescript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "Bootstrap",
        alt: "Logo Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
        name: "React",
        alt: "Logo React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Git",
        alt: "Logo Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "Github",
        alt: "Logo Github",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        name: "Vscode",
        alt: "Logo Vscode",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
];

export function Skills() {
    return (
        <div className={styles.skills_container} id="Skills">
            <div className={styles.skills_div}>
                <h1 className={styles.skills_h1}>Minhas Stacks</h1>
                <p className={styles.skills_p}>
                    Tecnologias com as quais tenho trabalhado recentemente
                </p>
            </div>
            <div className={styles.skills_imgs}>
                <div className={styles.skills_imgs_flex}>
                    {imgs.map((img, i) => {
                        return (
                            <div className={styles.skills_sub_imgs} key={i}>
                                <img src={img.logo} alt={img.alt} />
                                <p>{img.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
