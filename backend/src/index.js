const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a ticket

app.post('/todos', async (req, res) => {
  try {
    const { description, name, status, email, responseEdit } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description, name, status, email, response) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [description, name, status, email, responseEdit]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a status

app.put('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updateStatus = await pool.query(
      'UPDATE todo SET status = $1 WHERE todo_id = $2',
      [status, id]
    );

    res.json('Status was updated!');
  } catch (err) {
    console.error(err.message);
  }
});

//update a response

app.put('/response/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;
    const updateResponse = await pool.query(
      'UPDATE todo SET response = $1 WHERE todo_id = $2',
      [response, id]
    );

    res.json(`Response was updated! ${response}`);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id
    ]);
    res.json('Todo was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
