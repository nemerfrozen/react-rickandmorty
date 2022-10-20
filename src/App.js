import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}

export default App;
