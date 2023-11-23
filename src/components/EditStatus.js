import React, { useState } from "react";

const EditStatus = ({ ticket }) => {
  const [status, setStatus] = useState(ticket.status);

  const updateStatus = async e => {
    e.preventDefault();
    try {
      const body = { status };
      const response = await fetch(
        `http://localhost:5000/status/${ticket.ticket_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <td>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="new">New</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button 
      className="btn btn-success"
      type="button"
      onClick={e => updateStatus(e)}
      >
        Add
      </button>
    </td>
  );
};

export default EditStatus;
