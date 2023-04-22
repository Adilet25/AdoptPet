import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
