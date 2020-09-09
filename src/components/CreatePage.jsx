import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateForm from "./components/CreateForm";
import Review from "./components/Review";
// import { baseURL } from "./services/constants";


function App() {
  const [display, setDisplay] = useState([]);
  const [fetchList, setFetchList] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const airtableURL = `https://api.airtable.com/v0/app4zj0QseavgyP30/trackerista`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': 'Bearer keyXZLrYJDErxjs2J',
        },
      });
      setDisplay(response.data.records);
    };
    getList();
  }, [fetchList]);

  return (
    <div className="CreatePage">
      <CreateForm
        fetchList={fetchList}
        setFetchList={setFetchList}
      />
      <Display
        display={display}
      />
    </div>
  );
}

export default App;
