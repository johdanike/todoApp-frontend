import style from '../content/Content.module.css';
import {BiAddToQueue, BiCartAdd, BiMessageAdd, BiNotification, BiSearch} from "react-icons/bi";
import Profile from "../profile/Profile";

const ContentHeader = () => {
    return (
        <div className={style.contentHeader}>
            <h1 className={style.headerTitle}>Dashboard</h1>

            <div className={style.headerActivity}>
                <div className={style.searchBox}>
                    <input type={'text'} placeholder={"Search For tasks here...."}/>
                    <BiSearch className={style.icon}/>
                </div>

                <div className={style.notify}>
                    <BiNotification className={style.icon}/>
                </div>

                <div className={style.addTask}>
                    <BiAddToQueue className={style.icon}/>
                    <button type={'button'}>View All Tasks</button>

                </div>
            </div>


        </div>
    )
}

export default ContentHeader;