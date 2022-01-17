import React from "react";
import "./App.css";
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">

<Nav/>
<div className="sidebar"></div>
<div className="main-content"></div>
<Footer/>

        <div>
          <p>{!data ? "Loading..." : data}</p>
        </div>
      </div>
  );
}

export default App;
