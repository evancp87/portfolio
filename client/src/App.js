import React from "react";
// // import "../styles/style.css"
// import "./styles"
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <main className="App">
      <Nav />
      <Header />
      <Socials/>
      <Projects  />
      <Skills/>
      <About />
      <Footer />

      {/* <div>
        <p>{!data ? "Loading..." : data}</p>
      </div> */}
    </main>
  );
}

export default App;
