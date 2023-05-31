import React, {useEffect} from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPerson } from "../actions/peopleAction";

//Components
import Card from "../components/Card";

//Styling and Tenative Animation
import styled from 'styled-components';




function Home() {
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
  min-height:80vh;
  display:grid;
  padding-left:132px;
  padding-right:132px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background-color: #E5E5E5;
  `
  
  export default Home;