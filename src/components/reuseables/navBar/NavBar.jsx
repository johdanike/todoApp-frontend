import styles from './NavBar.module.css'
import {BiBookAlt, BiHome, BiLock} from 'react-icons/bi'
const NavBar = () => {
    return (
        <div className={styles.NavCont}>

            <div className={styles.NavLogo}>
                <BiBookAlt className={styles.icons}/>
                <h2>Todo</h2>
            </div>

            <div className={`${styles.NavLinks}`}>
                <a href="#" className={styles.item}>
                    <BiHome className={styles.icons}/>
                    Dashboard
                </a>
            </div>

            <div className={`${styles.logout}`}>
                <a href="/logout" className={styles.item}>
                    <BiLock className={styles.icons}/>
                    Logout
                </a>
            </div>

        </div>
    )
}

export default NavBar;