import React from 'react';

// Importing Images
import jediOrder from '../img/Jedi Order Watermark.svg';
import rebelAlliance from '../img/Rebel Alliance Watermark.svg';
import galacticEmpire from '../img/Galatic Empire Watermark.svg';
import noFaction from '../img/No Faction Watermark.svg'

const FactionImage = ({ faction }) => {
  let src;
  let color;
  switch (faction) {
    case 'jedi':
      src = jediOrder;
      color = "#C53030";
      break;
    case 'rebel':
      src = rebelAlliance;
      color = "#2F855A";
      break;
    case 'galactic':
      src = galacticEmpire;
      color="#3B3B3B"
      break;
    case 'no faction':
      src = noFaction;
      color = "#969696"
      break;
    default:
      src = noFaction;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: {color}, 

  };

  return <div style={backgroundImageStyle}>{}</div>;
};


export default FactionImage;