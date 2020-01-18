import React from 'react';
import { Link } from 'react-router-dom';

const LinksNavBar = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-2">
          <div className="feature-box">
            <Link to="/Menu" className="heading-tertiary u-margin-bottom-small">
              <i className="file outline icon"></i>
              Menu
            </Link>
          </div>
        </div>

        <div className="col-1-of-2">
          <div className="feature-box">
            <Link
              to="/Reviews"
              className="heading-tertiary u-margin-bottom-small"
            >
              <i className="edit outline icon"></i>
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksNavBar;
