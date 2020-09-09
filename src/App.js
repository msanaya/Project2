import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Display from "./components/Display";
// import create from "./components/create";
import "./App.css";

function App() {
  const [displays, setDisplays] = useState([]);
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
      setDisplays(response.data.records);
      // console.log(response.data)
    };
    getList();
  }, [fetchList]);

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <h3>This is home.Commit test</h3>
          </Route>
          <Route path="/components/display">
            <div className="display-list">
              {displays.map((display) => (
                <Display
                  display={display}
                />
              ))}
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
