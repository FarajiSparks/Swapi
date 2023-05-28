import React, {useEffect} from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPerson } from "../actions/peopleAction";

//Components
import Card from "../components/Card";

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

//Importing Images 
import female from '../img/Female.svg';
import male from '../img/Male.svg';

function Home() {
//Fetching Data
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadPerson());
  },[dispatch]);
//Getting Data Back
const {person, planets, vehicles} = useSelector(state => state.people);
console.log(person)
  return (
   <CardList>
        <div>{person.map((person)=>(
            <Card/>
        ))}</div>
    </CardList>
  );
}

const CardList = styled.div`
    
`
export default Home;