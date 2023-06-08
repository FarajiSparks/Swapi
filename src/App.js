import React from "react";
import Home from './pages/Home';
import Header from "./components/Header";
import DeckHeader from "./components/DeckHeader";
import CardSearch from "./components/CardSearch";
import DeckSearch from "./components/DeckSearch";
import Decks from "./pages/Decks";
import CardDetail from './components/CardDetail';

//Router
import {Route, Routes} from 'react-router-dom';

import './App.css';


function App() {

 
  return (
  <>
    
    <Routes>
      <Route path="/" element={[<Header/>,<CardSearch/>,<Home/>]}/>
      <Route path="/decks" element={[<DeckHeader/>,<DeckSearch/>,<Decks/>]}/>
      <Route path="/:id" element={[<Header/>, <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CardDetail/></div>]}/>
    </Routes>
   </>
  );
}

export default App;
