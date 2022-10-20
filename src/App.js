import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// redux provider
import { Provider } from "react-redux";
import store from "./store/index";


function App() {

  
  return (
    <>
      <Header />
      <div className="container">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
