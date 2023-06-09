import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Academics from "./components/Academics";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="main_bgimg">
        <Banner />
      </div>
        <Skills />
      <Projects />
      {/* <Academics /> */}
      <Contact />
    </div>
  );
}

export default App;
