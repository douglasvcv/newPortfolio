import styles from "./NavBar.module.css"

const NavBar = ()=>{
    return(
        <>
        <div className={styles.navContainer}>
        <ul>
            <li><a href="#" >Home</a></li>
            <li><a href="#" target="blank">Projects</a></li>
            <li><a href="#" target="blank">About me</a></li>
        </ul>
        <div className={styles.menuWrapper}>
        <div className={styles.menu}></div>
        <div className={styles.menu}></div>
        <div className={styles.menu}></div>
        </div>
        </div>
        </>
    )
}

export default NavBar