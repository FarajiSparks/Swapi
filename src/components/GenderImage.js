import React from 'react';

// Importing Images
import female from '../img/Female.svg';
import male from '../img/Male.svg';
import user from '../img/User.svg';
import noFaction from '../img/No Faction.svg';

const GenderImage = ({ gender }) => {
  let src;
  switch (gender) {
    case 'male':
      src = male;
      break;
    case 'female':
      src = female;
      break;
    case 'androgynous':
      src = user;
      break;
    default:
      src = noFaction;
  }

  return <img src={src} alt={gender} />;
};

export default GenderImage;