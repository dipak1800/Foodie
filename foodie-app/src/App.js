import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import ScrollToTopButton from "./Component/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <ScrollToTopButton />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
