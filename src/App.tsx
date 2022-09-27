import { Outlet } from "react-router-dom";
import MainNav from "./components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
    </div>
  );
};

export default App;
