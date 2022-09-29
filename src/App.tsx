import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import MainNav from "./components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
