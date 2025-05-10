import React, { useState, useEffect } from "react";
import { 
    Modal, 
    Box, 
    TextField, 
    Button, 
    Typography 
} from "@mui/material";

const TaskModal = ({ open, onClose, fetchTasks, taskToEdit, handleTaskEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (taskToEdit && taskToEdit.id) {
      setTitle(taskToEdit.title);
      setDesc(taskToEdit.desc);
    } else {
      cleanModal();
    }
  }, [taskToEdit]);

  const cleanModal = () => {
      setTitle("");
      setDesc("");
  }

  const handleSave = async () => {
    const task = { title, desc };
    await fetch("http://localhost:3000/todolist/saveTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    fetchTasks();
    onClose();
    cleanModal();
  };

  const handleUpdate = async () => {
    const task = { id: taskToEdit.id, title, desc };
    await fetch("http://localhost:3000/todolist/updateTask", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    handleTaskEdit({});
    fetchTasks();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...modalStyles }}>

        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          {taskToEdit && taskToEdit.id 
            ? "Edit Task" 
            : "New Task"}
        </Typography>

        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Description"
          fullWidth
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button 
          variant="contained" 
          onClick={taskToEdit && taskToEdit.id  ? handleUpdate : handleSave}
          sx={{ marginTop: 2 }}
        >
          {taskToEdit && taskToEdit.id  ? "Update" : "Save"}
        </Button>

      </Box>
    </Modal>
  );
};

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: 2,
  width: 400,
};

export default TaskModal;