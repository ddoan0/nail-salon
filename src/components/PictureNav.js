import React from 'react';
import redHandImg from './red-hands.jpg';
import pedicureImg from './manipedi.jpg';
import massageImg from './massagespa2.jpg';

const PictureNav = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Explore our options</h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Pristine services.. remarkable finishes
          </h3>
        </div>

        <div className="col-2-of-3">
          <div class="composition">
            <img
              src={redHandImg}
              alt="photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={pedicureImg}
              alt="photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={massageImg}
              alt="photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureNav;
