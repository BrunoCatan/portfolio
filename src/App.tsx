import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/NavBar";
import { Skills } from "./components/Skills/Skills";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
