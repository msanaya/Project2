import React, { useState } from "react";
import Display from "./Display";
import "../styling/MapDisplay.css";

function MapDisplay(props) {
  const [fetchList, setFetchList] = useState(false);

  return (
    <div>
      {props.displays.map((display) => (
        <div className="display-component">
          <Display
            key={display.id} ///I don't understand why I need the key, what is the function of it.
            display={display}
            fetchList={fetchList}
            setFetchList={setFetchList}
          />
        </div>
      ))}
    </div>
  )
}
export default MapDisplay