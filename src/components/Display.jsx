import React, { useEffect, useState } from "react";
import axios from "axios";


function Display() {
  // const [setDisplay] = useState([]);
  const [fetchList] = useState(false);

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
      // setDisplay = response.data.records;
      console.log(response.data)
    };
    getList();
  }, [fetchList]);

  return (
    <div className="App">
      <h1>This is the display page</h1>
    </div>
  );
}


export default Display;