import React, { useState } from "react";
import Display from "./Display";
import "../styling/MapDisplay.css";

function MapDisplay(props) {
  const [fetchList, setFetchList] = useState(false);

  return (
    <div>
      {props.displays.map((display) => (
          <Display
            key={display.id} 
            display={display}
            fetchList={fetchList}
            setFetchList={setFetchList}
          />
      ))}
    </div>
  )
}
export default MapDisplay