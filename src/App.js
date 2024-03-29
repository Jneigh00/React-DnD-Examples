import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import TowersOfHanio from "./TowersOfHanio";
import Number from "./Number";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Welcome/>}></Route>
            <Route exact path="/TowersOfHanio" element={<TowersOfHanio/>}></Route>
            <Route exact path="/Numbers" element={<Number/>}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
