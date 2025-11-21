import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './styles/general.css'
import './styles/navbar.css'
import {  useEffect, useState } from "react"
import { GoogleGenAI } from "@google/genai";
import Galeria from "./components/galeria"
import Enamorado from "./components/Enamorado"
import PaginaNo from "./components/PaginaNo"
import Facinaciones from "./components/fascinaciones"


function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/enamorado" element={<Enamorado />} />
          <Route path="/fascinaciones" element={<Facinaciones />} />
          <Route path="*" element={<PaginaNo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
