import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Display from "./components/Display";
import Create from "./components/Create";
import "./styling/App.css";

function App() {
  let [displays, setDisplays] = useState([]);
  const [fetchList, setFetchList] = useState(false);

  // // const [display, setDisplay] = useState([]);
  // // const [fetchList, setFetchList] = useState(false);

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
                  key={display.id} ///I don't understand why I need the key, what is the function of it.
                  display={display}
                  fetchList={fetchList}
                  setFetchList={setFetchList}
                />
              ))}
            </div>
          </Route>
          <Route path="/components/createpage">
            <Create
              fetchList={fetchList}
              setFetchList={setFetchList}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
