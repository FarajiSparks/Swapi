import React from 'react';

// Importing Images
import female from '../img/Female.svg';
import male from '../img/Male.svg';
import none from '../img/Genderless.png';

const GenderImage = ({ gender }) => {
  let src;
  switch (gender) {
    case 'male':
      src = male;
      break;
    case 'female':
      src = female;
      break;
    default:
      src = none;
  }

  return <img src={src} alt={gender} />;
};

export default GenderImage;