const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json()) //for accessing req.body in routes
app.use(cors({
  origin: 'http://localhost:5173' // Allow only your frontend
}));

//------------------------Connecting ToDo routes----------------------------------------
//Import all todo routes
const todoRoutes = require('./routes/todoRoutes');
//Map the todo routes to our app
app.use('/todolist', todoRoutes);

//------------------------Connecting User routes----------------------------------------
//Import all todo routes
const userRoutes = require('./routes/userRoutes');
//Map the todo routes to our app
app.use('/user', userRoutes);

//------------------------Initiating port1----------------------------------------
app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`);
});