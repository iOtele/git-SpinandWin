import React from "react"
import Login from "./components/Login"
import Upload from "./components/Upload"
import Spin from "./components/Spin"
import './SpinWheel.css'; // Import the CSS file
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/upload" element={<Upload/>}/>
       <Route path="/spin" element={<Spin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
