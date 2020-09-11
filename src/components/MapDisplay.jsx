import React from "react";
import Display from "./Display";

function MapDisplay() {
  let [displays, setDisplays] = useState([]);
  const [fetchList, setFetchList] = useState(false);

  displays.map((display) => {

    return (
    <div className="display-component"
      <Display
        key={display.id} ///I don't understand why I need the key, what is the function of it.
        display={display}
        fetchList={fetchList}
        setFetchList={setFetchList}
      />
    
    )
  }
}
export default MapDisplay