import React from "react";
import HomePage from "./views/HomePage/HomePage";
import Footer from "./components/shared/Footer/Footer";
import NavBar from './components/shared/NavBar/NavBar';

const App = () => {
  return (
    <>
    <NavBar/>
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
