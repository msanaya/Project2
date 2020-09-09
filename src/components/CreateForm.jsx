import React, { useState } from "react";
import axios from "axios";
// import { baseURL } from "../services/constants";

const CreateReview = (props) => {
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
    // await axios.post(url, data, options (headers))
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

  // (label+input)*3 with emmet
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="Name"
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
      {/* <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      /> */}
      <button type="submit">Fry Me Cap'n</button>
    </form>
  );
};

export default CreateForm;
