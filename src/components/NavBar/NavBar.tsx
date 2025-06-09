import styles from "./NavBar.module.css"
import img from "../../assets/images/icon developer.png"

const NavBar = ()=>{
    return(
        <>
        <header className={styles.nav_bar}>
            <div className={styles.nav_left}>
                <a href="#" target="blank">
                    <img src={img} alt="" />
                    <p><span>Dev</span>Douglas</p>
                </a>
            </div>
            <nav className={styles.nav_right}>
                <ul>
                    <li>
                        <a href="">
                            <div>Home</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>About me</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>Projects</div>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=%2B5588992131761&text&type=phone_number&app_absent=0" target="blank">
                            <div>Contact-me</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar