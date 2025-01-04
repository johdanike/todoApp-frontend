import NavBar from "../reuseables/NavBar/NavBar";
import {Outlet} from "react-router-dom"
import Footer from "../reuseables/Footer/Footer";

const Layout = () =>{
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer/>
        </>
    )
}
export default Layout;