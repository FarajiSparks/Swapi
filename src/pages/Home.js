import React, {useEffect} from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPerson } from "../actions/peopleAction";

//Components
import Card from "../components/Card";

//Styling and Tenative Animation
import styled from 'styled-components';

import {useLocation} from 'react-router-dom'



function Home() {

    const location = useLocation();
    console.log(location);

    // Fetching Data
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadPerson());
  
    }, [dispatch]);
    
    
  
    // Getting Data Back
    const { person, planets} = useSelector((state) => state.people);

  
    return (
      <CardList>      
          {person.map((person) => {
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
  
  export default Home;