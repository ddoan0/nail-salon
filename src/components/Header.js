import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <i className="gem outline icon"></i>
        Nail Salon
      </Link>
      <Link to="/menu" className="item">
        <i className="file outline icon"></i>
        Menu
      </Link>
    </div>
  );
};

export default Header;