import React, { useState } from "react";
import "../styles.css";

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabel = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //while submitting form will not get reload
    clearForm();

    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    console.log(ticketData);

    dispatch({
      type: "ADD_TICKET",
      payload: ticketData,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-input">
      <div>
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Description</label>
        <textarea
          className="form-input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabel).map(([value, label]) => {
          return (
            <label key={value} className="priority-label">
              <input
                type="radio"
                value={value}
                checked={priority === value}
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
              ></input>
              {label}
            </label>
          );
        })}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
