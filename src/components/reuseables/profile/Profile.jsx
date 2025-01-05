import style from '../../reuseables/profile/Profile.module.css'
import ProfileHeader from "./ProfileHeader";
import profile from '../../../../src/assets/download.jpeg'

const Profile = () => {
    return (
        <div className={style.profile }>
            <ProfileHeader />

            <div className={style.userProfile}>
                <div className={style.userDetail}>
                    <img src={profile} alt="profile" />
                    <h3 className={style.username}>John dan</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;