import React, {useEffect, useState} from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPerson } from "../actions/peopleAction";

//Components
import Card from "./Card";

//Styling and Tenative Animation
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';



function Home() {

 

    // Fetching Data
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadPerson());
  
    }, [dispatch]);

    // Getting Data Back
    const { person, planets} = useSelector((state) => state.people);


   //Pagination
   const [pageNumber, setPageNumber] = useState(0);
   const cardsPerPage = 15;
   const pagesVisited = pageNumber * cardsPerPage;
   const displayCards = person.slice(pagesVisited, pagesVisited + cardsPerPage);

   const pageCount = Math.ceil(person.length / cardsPerPage);
   const changePage = ({ selected }) => {
       setPageNumber(selected);
   };
 
   return (<>
   
     <CardList>      
         {displayCards.map((person) => {
           const homeworldName = planets[person.homeworld]?.name;
           const vehicleCount = (person.vehicles).length;
           
           return (
             <Card
               key={person.name}
               name={person.name}
               url={person.url}
               species={person.species}
               starships={person.starships}
               gender={person.gender}
               dob={person.birth_year}
               homeworld={homeworldName}
               vehicles={vehicleCount}
             />
           );
         })}
     
      </CardList>
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
     </> 
    );
  }
  
  const CardList = styled.div`
  display:grid;
  grid-column-gap: 1rem;
  grid-row-gap: 0.1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  @media screen and (min-width:768px)and (max-width: 1023px){
    grid-template-columns: repeat(2, minmax(230px, 1fr));
  }
  @media screen and (max-width: 767px){
    justify-items:center;
    grid-template-columns: repeat(1, minmax(330px, 1fr));
  }
  `
  const PagiStyling = styled.div`

  
  .paginationBttns{
    display:flex;
    list-style:none;
    width:80%;
    height:40px;
    justify-content:left;
  }
  a{
    padding:10px;
    margin:8px;
    border-radius:5px;
  }
  `
  
  export default Home;