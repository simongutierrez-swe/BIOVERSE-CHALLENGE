import React, { Fragment, useState } from "react";

const EditResponse = ({ todo }) => {
  const [response , setResponse] = useState(todo.response);

  const updateResponse = async e => {
    e.preventDefault();
    try {
      const body = { response };
      const Reply = await fetch(
        `http://localhost:5000/response/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      console.log(`Would normally send email here with body: ${response}`);
      window.location = "/admin";
    } catch (err) {
      console.error(err.message);
    }
  };

   return (
    <td>
        {todo.response}
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setResponse(todo.response)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setResponse(todo.response)}
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
                onClick={() => setResponse(todo.response)}
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
