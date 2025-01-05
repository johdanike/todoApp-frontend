import style from '../profile/Profile.module.css'
import {BiEdit} from "react-icons/bi";

const ProfileHeader = () => {
    return(
        <div className={style.profileHeaderTitle}>
            <h2 className={style.headerTitle}>Profile</h2>
            <div className={style.edit}>
                <BiEdit className={style.icon}/>
            </div>
        </div>
    )
}
export default ProfileHeader;