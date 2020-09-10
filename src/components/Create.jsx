import React, { useState } from "react";
import axios from "axios";
// import { baseURL } from "../services/constants";

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

  // (label+input)*3 with emmet -- shortcut //
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="deadline">Deadline:</label>
      <input
        name="deadline"
        type="text"
        value={deadline}
        onChange={(event) => setDeadline(event.target.value)}
      />
      <label htmlFor="language">Language:</label>
      <input
        name="language"
        type="text"
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      />
      <label htmlFor="notes">Notes:</label>
      <input
        name="notes"
        type="text"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />
      <label htmlFor="priority">Priority:</label>
      <input
        name="priority"
        type="text"
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      />
      <label htmlFor="stage">Stage:</label>
      <input
        name="stage"
        type="text"
        value={stage}
        onChange={(event) => setStage(event.target.value)}
      />
      <label htmlFor="unit">Unit:</label>
      <input
        name="unit"
        type="text"
        value={unit}
        onChange={(event) => setUnit(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
