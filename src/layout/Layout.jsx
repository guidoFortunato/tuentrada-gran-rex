import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../components/";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="w-[100%] lg:w-[95%] mx-auto"><Outlet /></div>
      <Footer />
    </>
  );
};
