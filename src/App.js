import React from "react";
import MainRoutes from "./MainRoutes";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import "./components/Layout/MainLayout/Authorization/auth.scss"

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </div>
  );
};

export default App;
