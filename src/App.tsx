import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { MyProjects } from "./components/MyProjects/MyProjects";
import { Navbar } from "./components/Navbar/NavBar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import "./styles/global.css";

// const projets = [
//   {
//     img: "https://raw.githubusercontent.com/BrunoCatan/nlw-setup-ignite/main/.github/web01.png",
//     title: "Titulo 01",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda neque, blanditiis eum deserunt nobis vero! Voluptatibus rem harum eligendi similique sit provident quod, at, ducimus et aliquid dolorum, dignissimos accusamus!",
//     deploy: "https://www.google.com",
//     repo: "https://github.com/",
//   },
//   {
//     img: "https://raw.githubusercontent.com/BrunoCatan/nlw-setup-ignite/main/.github/web02.png",
//     title: "Titulo 02",
//     description:
//       "blanditiis eum deserunt nobis vero! Voluptatibus rem harum eligendi similique sit provident quod, at, ducimus et aliquid dolorum, dignissimos accusamus!",
//     deploy: "https://www.google.com",
//     repo: "https://github.com/",
//   },
// ];

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <MyProjects />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
