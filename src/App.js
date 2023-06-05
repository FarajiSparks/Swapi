import React from "react";
import Home from './pages/Home';
import Header from "./components/Header"
import CardSearch from "./components/CardSearch";
import Deck from "./components/Deck";
import './App.css';

function App() {

 
  return (
  <>
    <Header/>
    <CardSearch/>
    <Home/>
    <Deck></Deck>
   </>
  );
}

export default App;
