import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Create from "./components/Create";
import "./styling/App.css";
import MapDisplay from "./components/MapDisplay";
import Footer from "./components/Footer";

function App() {
  let [displays, setDisplays] = useState([]);
  const [fetchList, setFetchList] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const airtableURL = `https://api.airtable.com/v0/app4zj0QseavgyP30/trackerista`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': 'Bearer keyXZLrYJDErxjs2J',
        },
      });
      setDisplays(response.data.records);
    };
    getList();
  }, [fetchList]);
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <h3>Welome to Trackerista, where you can keep track of your homework and/or tasks.</h3>
            <p>First of all, DO NOT freak out. Keep your shite together.</p>
            <div>
              <script src="https://www.brainyquote.com/link/quotebr.js"></script>
              </div>
          </Route>
          <Route path="/components/display">
            <div className="display-list">
              <MapDisplay displays={displays}
                key={displays.id}/>
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
      <Footer />
    </div>
  );
}
export default App;