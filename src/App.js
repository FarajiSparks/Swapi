import React from "react";
import HomePage from "./pages/HomePage";
import DeckPage from "./pages/DeckPage";
import DetailPage from "./pages/DetailPage";

//Router
import {Route, Routes} from 'react-router-dom';

import './App.css';





function App() {

 
  return (
  <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/decks" element={<DeckPage/>}/>
      <Route path="/:id" element={<DetailPage/>}/>
    </Routes>
   </>
  );
}

export default App;
