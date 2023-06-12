import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDeck, loadDeck } from "../actions/deckAction";
import Deck from "./Deck";
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';

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
    if (decks.decks.some(deck => deck.name === name)) {
      alert('A deck with this name already exists');
      return;
    }
    dispatch(addDeck(name, faction));
    setName('');
    setFaction('jediOrder');
  };

  //Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const decksPerPage = 15;
  const pagesVisited = pageNumber * decksPerPage;
  const displayDecks = decks?.decks.slice(pagesVisited, pagesVisited + decksPerPage);
  const pageCount = Math.ceil(displayDecks.length / decksPerPage);
  const changePage = ({ selected }) => {
      setPageNumber(selected);
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
        {displayDecks?.map(deck => {
          return <Deck name={deck.name} faction={deck.faction} key={deck.id} id={deck.id} />;
        })}
      </DeckList>
  <PagiStyling>
      <ReactPaginate
           previousLabel={"<"}
           nextLabel={">"}
           pageCount={pageCount}
           onPageChange={changePage}
           breakLabel="..."
             
           containerClassName={"paginationBttns"}
           previousLinkClassName={"previousBttn"}
           nextLinkClassName={"nextBttn"}
           disabledClassName={"paginationDisabled"}
           activeClassName={"paginationActive"}
         />
         </PagiStyling>
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
const PagiStyling = styled.div`
  display:flex;
  justify-content:left;
  @media screen and (max-width: 767px){
    justify-content:center;
  }
  
   .paginationBttns{
    display:flex;
    list-style:none;
    width:auto;
    height:40px;
    justify-content:left;
    padding-inline-start:0px;
    li{
      display:flex;
      width:36px;
      height:32px;
      margin:4px;
      border-radius:4px;
      color: #969696;
      border: 1px solid #B8B8B8;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      :hover{
        background-color:#a5a5a5;
      }
    }
  }

  .paginationActive{
    background-color:#FFFFFF;
  }
  
  `
  
export default Decks;



