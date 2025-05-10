//--------------- Module 7 - Lab Work Ex4 ----------------------

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import TaskTable from "../components/TaskTable.jsx";
import TaskModal from "../components/TaskModal.jsx";
import { useAuthContext } from '../contex/AuthenticationContex/AuthContext';
import { Link } from "react-router-dom";

import { Button, Container } from "@mui/material";

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [ searchTask, setSearchTask ] = useState('');

  const { handleIsAuthenticated } = useAuthContext();

  useEffect(() => {
    // Fetch tasks when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/todolist/");
    const data = await response.json();
    setTasks(data);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleTaskEdit = (task) => {
    setTaskToEdit(task);
  };

   const handleSearchTask = (searchTask) => {
    setSearchTask(searchTask);
  };

  const handleSignOut = () => {
    handleIsAuthenticated('');
  };

  const applySearchTask = () => {

    if (searchTask.trim() !== '') {
      const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(searchTask.toLowerCase()) 
        ||
        task.desc.toLowerCase().includes(searchTask.toLowerCase())
        
      );
  
      if (filteredTasks.length === 0) {
        console.log("banna")
        {alert("No tasks were found.")}
        fetchTasks();
        setSearchTask('');
      } else {
        setTasks(filteredTasks);
        setSearchTask('');
      }
    } else {
      fetchTasks();
    }
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4, // margin top
        py: 4, // vertical padding
        display: "flex",
        flexDirection: "column",
        gap: 3, // vertical spacing between children
        alignItems: "center",
      }}
    >
      <Navbar 
        searchTask={searchTask} 
        handleSearchTask={handleSearchTask} 
        applySearchTask={applySearchTask}
      />

      <Button 
        variant="contained"
        color="primary" 
        onClick={handleModalOpen}
      >
        New Task
      </Button>

      <TaskTable
        tasks={tasks}
        fetchTasks={fetchTasks}
        handleModalOpen={handleModalOpen}
        handleTaskEdit={handleTaskEdit}
      />

      <Link onClick={() => handleSignOut()}>
            Sign-out
      </Link>

      <TaskModal
        open={isModalOpen}
        onClose={handleModalClose}
        fetchTasks={fetchTasks}
        taskToEdit={taskToEdit}
        handleTaskEdit={handleTaskEdit}
      />
    </Container>
  );
}
