import React from 'react';
import Header from "../components/Header";
import CardDetail from '../components/CardDetail';

//Styling and Tenative Animation
import styled from 'styled-components';
import {motion} from "framer-motion";

const DetailPage = () => {
  return (
    <>
    <Header/>
    <ScreenChecker>
        <CardDetail/>
    </ScreenChecker>
    </>
  )
}

const ScreenChecker = styled(motion.div)`
    display:flex;
    @media screen and (max-width: 767px){
    justify-content:right;
    
  }  
`
export default DetailPage