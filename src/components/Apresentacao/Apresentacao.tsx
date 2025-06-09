import doc from "../../assets/docs/Curriculo.pdf"
import styles from "./Apresentacao.module.css"

const Apresentacao = () =>{
    return (
        <>
        <div className={styles.apres_container}>
            <div className={styles.apres_interno}>
                <h1>Desenvolvedor FullStack</h1>
                <p>Olá, eu sou Douglas Vitor. Eu sou um densevolvedor especializado no FullStack </p>
                <div className={styles.button_container}>
                    <div className={styles.linkedin_container}>
                        <button className={styles.linkedin_button}>Linkedin</button>
                    </div>
                    <div className={styles.github_container}>
                        <button className={styles.github_button}>GitHub</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Apresentacao