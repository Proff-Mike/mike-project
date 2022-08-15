import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
//import CompanyData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="What machinery are you looking for?"/>
    </div>
  );
}

export default App;