import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import MainNav from "./components/Shared/Navbar/Navbar";
import { fetchAllProducts } from "./redux/slices/productSlice";

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllProducts());
  // }, [dispatch]);
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
