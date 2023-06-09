import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import HomeImg from "./images/HomeImg.png";
import LPlogo from "./images/LPlogo.png";

function App() {
  return (
    <>
      <NavBar/>
      <div className="invisible md:visible flex">
            <img src={HomeImg} alt="my profile" className="ml-[380px] pb-10 mt-[120px] fixed h-[850px]"/>
      </div>
      <div className="left-0 w-1/5 md:w-2/3 bg-white absolute -z-10">
        <a href="#">
          <img src={LPlogo} alt="logo" className="ml-[18px] w-10 md:w-[50px] fixed"/>
        </a>
      </div>
      <div className="border-l-[1px] border-solid border-black h-full ml-[37px] -z-20 mt-[54px] fixed"></div>
      <div className="right-0 w-4/5 md:w-2/3 bg-[#2D2D2D] absolute text-white -z-10">
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