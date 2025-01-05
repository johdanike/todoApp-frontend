import style from '../task/Card.module.css';
import { useState } from 'react';

const TaskCard = ({title, description}) => {
    const [tasks, setTasks] = useState([
        { title: '', description: '', done: false, editing: false },
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedTasks = [...tasks];
        updatedTasks[index][field] = value;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleEdit = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].editing = !updatedTasks[index].editing;
        setTasks(updatedTasks);
    };

    const toggleDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    return (
        <div className={style.task__card}>
            {tasks.map((task, index) => (
                <div
                    className={`${style.card} ${task.done ? style.done : style.inProgress}`}
                    key={index}
                >
                    <div className={style.title}>
                        {task.editing ? (
                            <textarea
                                value={task.title}
                                placeholder="Enter title..."
                                onChange={(e) => handleInputChange(index, title, e.target.value)}
                            />
                        ) : (
                            <h2>{task.title || 'Untitled Task'}</h2>
                        )}
                    </div>
                    <div className={style.description}>
                        {task.editing ? (
                            <textarea
                                value={task.description}
                                placeholder="Enter description..."
                                onChange={(e) => handleInputChange(index, description, e.target.value)}
                            />
                        ) : (
                            <p>{task.description || 'No Description'}</p>
                        )}
                    </div>
                    <div className={style.buttons}>
                        <button onClick={() => toggleEdit(index)}>
                            {task.editing ? 'Save' : 'Edit'}
                        </button>
                        <button onClick={() => removeTask(index)}>Remove</button>
                        <button onClick={() => toggleDone(index)}>
                            {task.done ? 'Mark as In Progress' : 'Mark as Done'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { TaskCard };
