import React from "react";
// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import FreelanceProjects from "./components/FreelanceProjects";

function App() {
  //   const [data, setData] = useState({});

  //   function getData() {

  //     useEffect(() => {
  //       fetch("/")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //     }, []);
  //   }

  return (
    <main className="App">
      <Nav />

      <Header />

      <Socials />

      <About />
      <Projects />

      <FreelanceProjects />

      <Footer />
    </main>
  );
}

export default App;