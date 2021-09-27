import Main from "./views/Main";
import HyensPage from "./components/HyensPage";
import DansPage from "./components/DansPage";
import BriansPage from "./components/BriansPage";
import RegisterAdmin from "./components/RegisterAdmin";
import { Router } from "@reach/router";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <HyensPage path="/hyens-home" />
        <DansPage path="/dans-home" />
        <BriansPage path="/brians-home" />
        <RegisterAdmin path="/register" />
      </Router>
    </div>
  );
}

export default App;
