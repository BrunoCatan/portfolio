import styles from "./MyProjects.module.css";

export function MyProjects() {
    return (
        <div className={styles.My_projects_container} id="MyProjects">
            <h1 className={styles.My_projects_h1}>Meus Projetos</h1>
            <p className={styles.My_projects_p}>
                Projetos que eu construí até o momento.
            </p>
        </div>
    );
}
