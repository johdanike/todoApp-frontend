import styles from './NavBar.module.css'
import Frame from '../../../../src/assets/Frame.png'
import Chowdeck from '../../../../src/assets/Chowdeck.png'
import svg from '../../../../src/assets/svg.png'
import svg2 from '../../../../src/assets/sec.png'

const NavBar = () => {
    return (
        <div className={styles.NavCont}>

            <div className={styles.NavLogo}>
                <img src={Frame} alt="Logo"/>
                <img src={Chowdeck} alt={"Logowriteup"}/>
            </div>

            <div className={`${styles.NavLinksCenter}`}>
                <p><span>Company</span></p>
                <p><span>FAQs</span></p>
                <p><span>Blog</span></p>
                <p><span>Contact</span></p>
            </div>
            <div className={`${styles.NavLinksRight} `}>
                <div className={`${styles.Customers}`}>
                    <p><span>Customers</span></p>
                    <p><span><img src={svg} alt={"jhhh"}/></span></p>
                </div>
                <p><span><img src={svg2} alt={"jhjjkjk"}/></span></p>
            </div>
        </div>
    )
}

export default NavBar;