// import Home from "./home/Home";

// export default function Page() {
//   return <Home />;
// }

import Sidebar from "./components/Sidebar";
import Home from "./home/Home";

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[280px] w-full">
        <Home />
      </div>
    </div>
  );
}
