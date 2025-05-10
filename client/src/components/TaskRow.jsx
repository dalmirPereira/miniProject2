import React from "react";
import { 
    TableRow, 
    TableCell, 
    Button, 
    Checkbox, 
    IconButton 
} from "@mui/material";

import { 
    Delete, 
    Edit 
} from "@mui/icons-material";

const TaskRow = ({ task, fetchTasks, handleModalOpen, handleTaskEdit }) => {
  const handleComplete = async () => {
    await fetch(`http://localhost:3000/todolist/completeTask/${task.id}`, { method: "PUT" });
    fetchTasks();
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/todolist/deleteTask/${task.id}`, { method: "DELETE" });
    fetchTasks();
  };

  const handleEdit = () => {
    handleModalOpen(true);
    handleTaskEdit(task)
  };

  return (
    <TableRow>
      <TableCell>{task.id}</TableCell>
      <TableCell>{task.isCompleted ? <del>{task.title}</del> : task.title}</TableCell>
      <TableCell>{task.isCompleted ? <del>{task.desc}</del> : task.desc}</TableCell>
      <TableCell>{task.createdAt}</TableCell>
      <TableCell>
        <IconButton onClick={handleEdit} color="primary">
          <Edit />
        </IconButton>
        <IconButton onClick={handleDelete} color="secondary">
          <Delete />
        </IconButton>
        <Checkbox checked={task.isCompleted} onChange={handleComplete} />
      </TableCell>
    </TableRow>
  );
};

export default TaskRow;