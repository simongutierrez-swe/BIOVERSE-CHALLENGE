import React, { Fragment, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status] = useState("New");
  const [responseEdit] = useState("None");


  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { 
        description,
        name,
        email,
        status,
        responseEdit
      };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Create Support Ticket</h1>
      <form className="mt-5" onSubmit={onSubmitForm}>
        <label>
          Name:
          <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        </label>
        <br />
        <label>
          Email:
          <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>
        <button className="btn btn-success">Add</button>
      </form>
      <Link to="/admin" className="btn btn-primary">Tickets in Queue</Link>
    </Fragment>
  );
};

export default InputTodo;
