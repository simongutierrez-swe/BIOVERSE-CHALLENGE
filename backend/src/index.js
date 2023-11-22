const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a ticket

app.post('/tickets', async (req, res) => {
  try {
    const { description, name, status, email, responseEdit } = req.body;
    const newTicket = await pool.query(
      'INSERT INTO tickets (description, name, status, email, response) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [description, name, status, email, responseEdit]
    );

    res.json(newTicket.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all tickets

app.get('/tickets', async (req, res) => {
  try {
    const allTickets = await pool.query('SELECT * FROM tickets');
    res.json(allTickets.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a ticket

app.get('/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await pool.query('SELECT * FROM todo WHERE ticket_id = $1', [
      id
    ]);

    res.json(ticket.rows[0]);
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
      'UPDATE tickets SET status = $1 WHERE ticket_id = $2',
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
      'UPDATE tickets SET response = $1 WHERE ticket_id = $2',
      [response, id]
    );

    res.json(`Response was updated!`);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a ticket

app.delete('/tickets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM tickets WHERE ticket_id = $1', [
      id
    ]);
    res.json('Ticket was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
