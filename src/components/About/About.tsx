import aboutPicture from "../../assets/images/cfd22269-3ca7-4bc6-be0f-12b16eafc45c.jpg"
import styles from "./About.module.css"

const About = ()=>{
    return (
        <>
        <div className={styles.about_container}>
            <div className={styles.about_picture}>
                <img src={aboutPicture} alt="Imagem de Douglas Vitor Carlos Vieira" />
            </div>
            <div className={styles.about_me}>
                <div className={styles.title_about}>
                    <h2>Sobre mim</h2>
                </div>
               <p>Sou um desenvolvedor fullstack apaixonado por tecnologia e soluções inteligentes. Atuo profissionalmente desde 2023, trabalhando no desenvolvimento de aplicações web modernas e escaláveis.</p>

<p>Tenho experiência tanto no backend quanto no frontend, utilizando tecnologias como <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>PostgreSQL</strong>, <strong>MongoDB</strong> e ferramentas como <strong>GitHub</strong> e <strong>Insomnia</strong>. No frontend, desenvolvo interfaces dinâmicas e responsivas com <strong>React</strong>, sempre focando na melhor experiência para o usuário.</p>

<p>Busco constantemente aprimorar minhas habilidades, aprendendo novas tecnologias e boas práticas de desenvolvimento. Acredito no poder da colaboração, na qualidade do código e na entrega de soluções que realmente façam a diferença.</p>
            </div>
        </div>
        </>
    )
}

export default About