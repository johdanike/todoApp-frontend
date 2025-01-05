import style from '../task/Card.module.css'
import CreateTaskCard from "./CreateTaskCard";
import {TaskCard} from "./TaskCard";

const TaskCategories = () => {
    return (
        <div className={style.taskCat}>

            <div className={style.todo}>
                <CreateTaskCard/>
            </div>

            <div className={style.inProgress}>
                <TaskCard/>
            </div>

            <div className={style.completed}>
                <TaskCard/>
            </div>

        </div>
    )
}

export default TaskCategories;