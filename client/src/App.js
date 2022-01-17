import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
<div className="sidebar"></div>
<div className="main-content"></div>


        <div>
          <p>{!data ? "Loading..." : data}</p>
        </div>
      </div>
  );
}

export default App;
