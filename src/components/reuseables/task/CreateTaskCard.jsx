import { useState } from 'react';
import style from '../../../components/reuseables/task/Card.module.css'
const CreateTaskCard = () => {
    const [tasks, setTasks] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(true); // Show/Hide the input form

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTitle && inputDescription) {
            // Add new task with title, description, and initial 'completed' status as false
            setTasks([{ title: inputTitle, description: inputDescription, completed: false }, ...tasks]);
            setInputTitle(''); // Clear input fields after adding task
            setInputDescription('');
            setIsFormVisible(false); // Hide the input fields after task is added
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleCheckboxChange = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleAddNewTask = () => {
        setIsFormVisible(true); // Show the input fields again
    };

    return (


        <div className={style.cardWrapper}>
            <div className={style.taskList}>
                {tasks.map((task, index) => (
                    <div className={style.taskCard} key={index}>
                        <div className={style.taskContent}>
                            <h3 className={style.taskTitle}>{task.title}</h3>
                            <p className={style.taskDescription}>{task.description}</p>
                            <div className={style.taskStatus}>
                                {/* Button to toggle task status */}
                                <button
                                    className={style.statusButton}
                                    onClick={() => handleCheckboxChange(index)}
                                >
                                    {task.completed ? 'Completed' : 'In Progress'}
                                </button>
                            </div>
                        </div>
                        <button
                            className={style.deleteButton}
                            onClick={() => handleDelete(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>


            {isFormVisible ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        className={style.title__details}
                        type="text"
                        value={inputTitle}
                        placeholder="Add task title here..."
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                    <textarea
                        className={style.description__details}
                        type="text"
                        value={inputDescription}
                        placeholder="Add task description here..."
                        onChange={(e) => setInputDescription(e.target.value)}
                    />
                    <button className={style.addButton} type="submit">
                        Add Task
                    </button>
                </form>
            ) : (
                <button className={style.addNewTaskButton} onClick={handleAddNewTask}>
                    Add New Task
                </button>
            )}


        </div>
    );
};

export default CreateTaskCard;
