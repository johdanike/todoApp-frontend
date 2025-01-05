// import navBar from "../reuseables/navBar/navBar";
import Dashboard from '../reuseables/dashboard/Dashboard'
import {Outlet} from "react-router-dom"

const Layout = () =>{
    return (
        <>
            {/*<navBar />*/}
            <Dashboard/>
            <Outlet />
        </>
    )
}
export default Layout;