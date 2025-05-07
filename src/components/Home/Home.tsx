import Img from "../../assets/images/imagem aleatoria para portfolio.avif"
import styles from "./Home.module.css"
import doc from "../../assets/docs/Curriculo.pdf"
import Typerwriter from 'typewriter-effect'

const Home = ()=>{
    return(
        <>
        <div className={styles.homeContainer}>
            <div className={styles.img}>
                <img src={Img} alt="" />
            </div>
            <div className={styles.description}>
                <h1>Douglas Vitor</h1>
                <div style={{minHeight: '110px', color:'var(--text)'}}>
                <Typerwriter options={{
                    strings: [`Full Stack Developer`],
                    loop:true,
                    autoStart:true,
                    cursor:'',
                    delay:"natural",
                    wrapperClassName:styles.h1name,
                    
                }}/>
                </div>
                <div className={styles.links}>
                <a href={doc} target="blank">
                CV</a>
                <a href="https://www.linkedin.com/in/douglas-vitor-vieira/" target="blank">
                Contact me</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home