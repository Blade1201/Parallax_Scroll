import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () =>
{
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Content/>
    </div>
  );
}

export default App;
