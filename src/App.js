import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom';
import Display from "./components/Display";
// import create from "./components/create";
import "./App.css";

function App() {
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/components/display">Display</Link>
        <Link to="/components/create">Create</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Home!</h3>
          </Route>
          <Route path="/components/display">
            <Display />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
