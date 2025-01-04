import style from '../taskCard/TaskCard.module.css'
import {BiMoveHorizontal, BiStar, BiTrophy} from "react-icons/bi";

const TaskType = [
    {
        title: 'To Start',
        icon: <BiStar />
    },
    {
        title: 'In Progress',
        icon: <BiMoveHorizontal />
    },
    {
        title: 'Completed',
        icon: <BiTrophy />
    },

];


const TaskCard = () => {
    return (
        <div className={style.taskCardContainer}>
            {TaskType.map((task, index) => (
                <div className={style.card}>
                    <div className={style.cardCover}>{task.icon}</div>
                    <div className={style.tasktitle}>
                        <h2>{task.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskCard;