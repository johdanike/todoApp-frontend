import NavBar from "./navBar/NavBar";
import Profile from "./profile/Profile";
import Content from "./content/Content";

const General = () => {
    return (
        <>
            <NavBar/>
            <div className={styles.dashboardContent}>
                <Content/>
                <Profile/>
            </div>

        </>
    )
}

export default General;