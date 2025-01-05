import style from '../content/Content.module.css'
import ContentHeader from "./ContentHeader";
import TaskCategoryCard from '../taskCategory/TaskCategoryCard'
import CreateTaskCard from "../task/CreateTaskCard";
import TaskCategories from "../task/TaskCategories";

const Content = () => {
    return <div className={style.content}>
        <ContentHeader/>
        <TaskCategoryCard/>
        <TaskCategories/>
        {/*<CreateTaskCard/>*/}
    </div>
}
export default Content;