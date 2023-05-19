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
      <div className="right-0 w-4/5 bg-[#2D2D2D] absolute text-white">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <SocialLinks/> 
      </div>
    </>
  );
}

export default App;