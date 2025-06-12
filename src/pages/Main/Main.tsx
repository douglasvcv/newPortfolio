
import Apresentacao from "../../components/Apresentacao/Apresentacao"
import NavBar from "../../components/NavBar/NavBar"
import styles from "./Main.module.css"


const Main = ()=>{
    return(
        <>
        <NavBar/>
        <main>
          <Apresentacao/>  
        </main>
        </>
    )
}

export default Main