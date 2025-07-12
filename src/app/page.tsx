// import Home from "./home/Home";

// export default function Page() {
//   return <Home />;
// }

import Sidebar from "./components/Sidebar";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import About from "./About/About";

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
      <div id="about">
        <About />
      </div>
    </div>
  );
}
