
import styles from "./Apresentacao.module.css"
import linkedinImg from "../../assets/images/linkedin.png"
import githubImg from "../../assets/images/placa-do-github.png"
const Apresentacao = () =>{
    
    return (
        <>
        <div className={styles.apres_container}>
            <div className={styles.apres_interno}>
                <h1>Desenvolvedor FullStack</h1>
                <p>Olá, eu sou Douglas Vitor. Eu sou um densevolvedor especializado em FullStack </p>
                <div className={styles.button_container}>
                    <div className={styles.linkedin_container}>
                        <a href="" className={styles.linkedin_button}><img src={linkedinImg} alt="" /></a>
                        
                    </div>
                    <div className={styles.github_container}>
                        <a href="" className={styles.github_button}><img src={githubImg} alt="" /></a>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Apresentacao