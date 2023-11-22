import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EditStatus from "./EditStatus";
import EditResponse from "./EditResponse";

const ListTickets = () => {
  const [tickets, setTickets] = useState([]);

  //delete ticket function

  const deleteTicket = async id => {
    try {
      const deleteTicket = await fetch(`http://localhost:5000/tickets/${id}`, {
        method: "DELETE"
      });

      setTickets(tickets.filter(ticket => ticket.ticket_id !== id));
      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/tickets");
      const jsonData = await response.json();

      setTickets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Status</th>
            <th>Response</th> 
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.ticket_id}>
              <td>{ticket.name}</td>
              <td>{ticket.email}</td>
              <td>{ticket.description}</td>
              <EditStatus ticket={ticket} />
              <EditResponse ticket={ticket} />
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTicket(ticket.ticket_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="btn btn-primary">Home</Link>
    </>
  );
};

export default ListTickets;
