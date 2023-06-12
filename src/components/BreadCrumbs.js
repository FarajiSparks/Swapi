import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location);

  let currentLink = '';
  const crumbs = decodeURIComponent(location.pathname).split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
    currentLink += `/${crumb}`;
    return (
      <div className='crumb' key={crumb}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    );
  });

if (location.pathname !== '/decks') {
  crumbs.unshift(
    <div className='crumb' key="All Cards">
      <Link to="/">All Cards</Link>
    </div>
  );
}

  return (
    <Crumbs>{crumbs}</Crumbs>
  );
};

const Crumbs = styled.div`
display:flex;
padding-top:30px;
padding-bottom:30px;

  .crumb{
    a{
      color:#757575;
      text-decoration:none;
    }
     :after{
      content: '>'; 
      margin-left:10px;
      margin-right:10px;
    }
      :last-child:after{
      display:none;
    }
  }
 
`;

export default BreadCrumbs;