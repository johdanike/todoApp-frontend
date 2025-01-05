import NavBar from "../navBar/NavBar";
import Profile from "../profile/Profile";
import Content from "../content/Content";
import style from '../../../components/reuseables/dashboard/Dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <NavBar/>
            <div className={style.dashboardContent}>
                <Content/>
                {/*<Profile/>*/}
            </div>

        </div>
    )
}

export default Dashboard;