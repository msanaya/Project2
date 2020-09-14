import React, { useState } from "react";
import axios from "axios";
import "../styling/Create.css";





const Create = (props) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [language, setLanguage] = useState("");
  const [notes, setNotes] = useState("");
  const [priority, setPriority] = useState("High");
  const [stage, setStage] = useState("");
  const [unit, setUnit] = useState("");
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      deadline,
      language,
      notes,
      priority,
      stage,
      unit,
    };  
    await axios.post(
      'https://api.airtable.com/v0/app4zj0QseavgyP30/trackerista',
      { fields },
      {
        headers: {
          'Authorization': 'Bearer keyXZLrYJDErxjs2J',
          "Content-Type": "application/json",
        },
      }
    );
    props.setFetchList(!props.fetchList);
    setName("");
    setDeadline("");
    setLanguage("");
    setNotes("");
    setPriority("");
    setStage("");
    setUnit("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <h2>To add a task/homework to the list please fill out the following form. Follow instructions closely.</h2>
      </div>
      <div className="intake-form">
        <h3>Write the name of your task or homework.</h3>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
        <h3>Write the deadline in the following format mm/dd/yyyy</h3>
      <label htmlFor="deadline">Deadline:</label>
      <input
        name="deadline"
        type="text"
        value={deadline}
        onChange={(event) => setDeadline(event.target.value)}
        />
        <h3>Write exactly one of the following languages: ReactJS, Javascripy, CSS or HTML.</h3>
      <label htmlFor="language">Language:</label>
      <input
        name="language"
        type="text"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        />
        <h3>Write your notes. Make them short and concise. </h3>
      <label htmlFor="notes">Notes:</label>
      <textarea
        name="notes"
        type="text"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
        />
        <h3>Write exactly what priority level your task/homework is: Low, Medium, High</h3>
      <label htmlFor="priority">Priority:</label>
      <input
        name="priority"
        type="text"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
        />
        <h3>Write exactly what stage your task/homework is: Brainstorm, InProgress. Complete.</h3>
      <label htmlFor="stage">Stage:</label>
      <input
        name="stage"
        type="text"
        value={stage}
        onChange={(event) => setStage(event.target.value)}
        />
        <h3>Write exactly what unit your task/homework belongs to: One, Two, Three, Four</h3>
      <label htmlFor="unit">Unit:</label>
      <input
        name="unit"
        type="text"
        value={unit}
        onChange={(event) => setUnit(event.target.value)}
        />
        </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
