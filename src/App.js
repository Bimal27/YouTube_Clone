import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/video/:id" exact element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
