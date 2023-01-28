import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
