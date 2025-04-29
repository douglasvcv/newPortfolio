import Img from "../../assets/images/imagem aleatoria para portfolio.avif"
import styles from "./Home.module.css"

const Home = ()=>{
    return(
        <>
        <div className={styles.homeContainer}>
            <div id="img">
                <img src={Img} alt="" />
            </div>
            <div id="description">
                <h1>Douglas Vitor</h1>
                <h2>Full Stack Developer</h2>
            </div>
        </div>
        </>
    )
}

export default Home