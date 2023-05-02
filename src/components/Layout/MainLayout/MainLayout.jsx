import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import HomeCategory from "../../HomeCategory/HomeCategory";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <HomeCategory />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
