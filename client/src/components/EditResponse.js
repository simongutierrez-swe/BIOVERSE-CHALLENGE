import React, { useState } from "react";

const EditResponse = ({ ticket }) => {
  const [response , setResponse] = useState(ticket.response);

  const updateResponse = async e => {
    e.preventDefault();
    try {
      const body = { response };
      const reply = await fetch(
        `http://localhost:5000/response/${ticket.ticket_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      console.log(`Would normally send email here with body: ${response} or I would create a seperate button called: send email.`);
      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

   return (
    <td>
        {ticket.response}
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${ticket.ticket_id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${ticket.ticket_id}`}
        onClick={() => setResponse(ticket.response)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Ticket</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setResponse(ticket.response)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={response}
                onChange={e => setResponse(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateResponse(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setResponse(ticket.response)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </td>
  );
};

export default EditResponse;
