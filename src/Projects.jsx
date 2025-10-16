import styles from "./Projects.module.css";
function Projects() {
    return(
        <>
            <div className={styles.MyProjectsDiv}>
                <h1 style={{color: 'green'}}> View my projects at this section. </h1>
                <div className={styles.showProject}>
                    <p>
                        Bellow is an E-commerce website the I have build using 
                        React and CSS. It shows the frontend side of a common 
                        e-commerce website.
                    </p>
                    <a href="https://mwangikenya.github.io/rahisi/" className={styles.myLink}> View project </a>
                </div>
            </div>
        </>
    );
}

export default Projects;