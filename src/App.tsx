import { About } from "./components/About/About";
import { ButtonTop } from "./components/ButtonTop/ButtonTop";
import { Footer } from "./components/Footer/Footer";
import { MyProjects } from "./components/MyProjects/MyProjects";
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
      <MyProjects />
      <Projects />
      <Footer />
      <ButtonTop />
    </div>
  );
}

export default App;
