import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeck, loadDeck } from "../actions/deckAction";
import Deck from "./Deck";
import styled from 'styled-components';


const Decks = () => {

const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadDeck());
    }, [dispatch]);
 const [name, setName] = useState('');
 const [faction, setFaction] = useState('jediOrder');

 const {decks}  = useSelector((state) => state);

 const handleAddDeck = () => {
  if (!name || !faction) {
  alert('Name and faction are required');
  return;
  }
  dispatch(addDeck(name, faction));
  setName('');
  setFaction('jediOrder');
 };
 

 return (
 <div>
  <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter deck name"
      
  />
  <select value={faction} onChange={(e) => setFaction(e.target.value)}>
      <option value="jediOrder">Jedi Order</option>
      <option value="rebelAlliance">Rebel Alliance</option>
      <option value="galacticEmpire">Galactic Empire</option>
      <option value="noFaction">No Faction</option>
  </select>
  <button onClick={handleAddDeck}>Add Deck</button>
  <DeckList> 
    {decks.decks?.map(deck => {
      return <Deck name={deck.name} faction={deck.faction} key={deck.id} id={deck.id} />;
    })}
  </DeckList>

 </div>
 );
};

const DeckList = styled.div`
display:flex;
grid-column-gap: 1rem;
flex-wrap:wrap;

@media screen and (max-width: 767px){
  display:grid;
  justify-items:center;
  grid-template-columns: repeat(1, minmax(330px, 1fr));
}
`

export default Decks;
