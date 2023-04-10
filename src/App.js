import React from "react";
import MainRoutes from "./MainRoutes";
import MainLayout from "./components/Layout/MainLayout/MainLayout";

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
