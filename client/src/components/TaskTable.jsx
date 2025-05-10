import React from "react";
import TaskRow from "./TaskRow";
import { 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Paper, 
  Typography } from "@mui/material";

const TaskTable = ({ tasks, fetchTasks, handleModalOpen, handleTaskEdit }) => {
  return (
    <Paper sx={{ marginTop: 2 }}>
      <Table>
        
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks && tasks.length > 0
            ? tasks.map((task) => (
                <TaskRow key={task.id} task={task} fetchTasks={fetchTasks} handleModalOpen={handleModalOpen} handleTaskEdit={handleTaskEdit} />
              ))
            : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography variant="body1" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                      No tasks registered.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
        </TableBody>

      </Table>
    </Paper>
  );
};

export default TaskTable;