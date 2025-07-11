// import Home from "./home/Home";

// export default function Page() {
//   return <Home />;
// }

import Sidebar from "./components/Sidebar";
import Home from "./home/Home";

export default function Page() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="mu-[80px] w-full h-full">
        <Home />
      </div>
    </div>
  );
}
