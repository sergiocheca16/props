import React, { useState } from "react";

const AddTaskForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim() === '') return;
        addTask(taskText);
        setTaskText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Agregar nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default AddTaskForm;