import React from "react";

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div>
      <span 
        onClick={() => toggleTaskCompletion(task.id)}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default Task;
