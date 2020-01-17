import React from 'react';
import nailsalon from './nail-salon.jpg';
import redhands from './red-hands.jpg';
import manipedi from './manipedi.jpg';

const PictureHeader = () => {
  return (
    <header className="picture-header">
      <div className="picture-header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Diamond Nails</span>
          <span className="heading-primary--sub">
            Find your DIAMOND in the rough
          </span>
        </h1>
      </div>
    </header>
  );
};

export default PictureHeader;
