import { Route, Routes } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
//import Search from "./Pages/Search";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery.jsx";
import ArtView from "./Pages/ArtView.jsx";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer.jsx";
import FavoritesView from "./Pages/FavoritesView.jsx";
import "./App.css";
import VideoTour from "./Pages/VideoTour";

//const BtnContext = createContext(null);

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ArtView/:objectNumber" element={<ArtView />} />
        <Route path="/VideoTour" element={<VideoTour />} />
        <Route path="/FavoritesView" element={<FavoritesView />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
