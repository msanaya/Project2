import React, { useEffect, useState } from "react";
import axios from "axios";


function Display(props) {
  // const [setDisplay] = props;
  const [fetchList] = useState([]);
  const { name, deadline, language, notes, priority, stage, unit } = props.display.fields;

  // const [display, setDisplay] = useState([]);
  // const [fetchList, setFetchList] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const airtableURL = `https://api.airtable.com/v0/app4zj0QseavgyP30/trackerista`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': 'Bearer keyXZLrYJDErxjs2J',
        },
      });
      // setDisplay(response.data.records);
      console.log(response.data.records)
    };
    getList();
  }, [fetchList]);

  return (
    <div className="Display">
      <h2>Name:{name}</h2>
      <p>Deadline:{deadline}</p>
      <p>Language:{language}</p>
      <p>Notes:{notes}</p>
      <p>Priority:{priority}</p>
      <p>Stage:{stage}</p>
      <p>Unit:{unit}</p>
    </div>
  );
}


export default Display;