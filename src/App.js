import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import './App.css'
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <RowPost />
    
    </div>
  );
}

export default App;
