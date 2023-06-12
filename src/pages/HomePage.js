import React from 'react';
import Header from '../components/Header';
import CardSearch from '../components/CardSearch';
import Home from '../components/Home';
import BreadCrumbs from '../components/BreadCrumbs';



const HomePage = () => {
  return (
    <>
        <Header/>
        <BreadCrumbs/>
        <CardSearch/>
        <Home/>
    </>
  )
}

export default HomePage