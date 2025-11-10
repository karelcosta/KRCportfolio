import Sidebar from "./components/Sidebar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
// import About from "./About/About";
// import Contact from "./Contact/Contact"
// import Education from "./Education/Education"
// import Experience from "./Experience/Experience"

export default function Page() {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <div id="home" className="mt-[80px] w-full h-full">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      {/* <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div> */}
      
    </div>
  );
}
