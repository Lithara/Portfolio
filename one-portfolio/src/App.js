import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <SocialLinks/> 
    </>
  );
}

export default App;