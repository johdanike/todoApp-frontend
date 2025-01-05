import style from './TaskCategoryCard.module.css';
import { BiSolidCircle } from "react-icons/bi";

const TaskType = [
    {
        title: 'To Start',
        icon: <BiSolidCircle style={{ color: '#F7D867' }} />,
    },
    {
        title: 'In Progress',
        icon: <BiSolidCircle style={{ color: '#D8829D' }} />,
    },
    {
        title: 'Completed',
        icon: <BiSolidCircle style={{ color: '#6AB563' }} />,
    },
];

const TaskCategoryCard = () => {
    return (
        <div className={style.taskCardContainer}>
            {TaskType.map((task, index) => (
                <div key={index} className={style.card}>
                    <div className={style.cardCover}>{task.icon}</div>
                    <div className={style.tasktitle}>
                        <h2>{task.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskCategoryCard;
