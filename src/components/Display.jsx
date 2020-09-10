import React from "react";
import axios from "axios";
import "../styling/Display.css";


const Display = (props) => {
  const { fetchList, setFetchList }
    = props;
  const { name, deadline, language, notes, priority, stage, unit } = props.display.fields;


  const getList = async () => {
    const airtableURL = `https://api.airtable.com/v0/app4zj0QseavgyP30/trackerista`;
    await axios.get(airtableURL, {
      headers: {
        'Authorization': 'Bearer keyXZLrYJDErxjs2J',
      },
    });
    setFetchList(!fetchList);
  }; getList()

  return (
    <div className="Display">
      <div className="List">
        <h2><span className="Attributes">Name:</span>{name}</h2>
        <p><span className="Attributes">Deadline:</span>{deadline}</p>
        <p><span className="Attributes">Language:</span>{language}</p>
        <p><span className="Attributes">Notes:</span>{notes}</p>
        <p><span className="Attributes">Priority:</span>{priority}</p>
        <p><span className="Attributes">Stage:</span>{stage}</p>
        <p><span className="Attributes">Unit:</span>{unit}</p>
      </div>
    </div>
  );
}


export default Display;