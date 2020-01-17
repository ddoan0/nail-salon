import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectHeader } from '../actions';

const Header = props => {
  // state = {
  //   selectedHeader: 'Nail Salon'
  // };

  // onHeaderClick(pressedItem) {
  //   this.setState({
  //     selectedHeader: pressedItem
  //   });
  // }
  return (
    <div className="ui fluid three item menu ">
      <Link
        onClick={() => props.selectHeader('Nail Salon')}
        to="/"
        className={
          props.selectedHeader === 'Nail Salon' ? 'active red item' : 'item'
        }
      >
        <i className="gem outline icon"></i>
        Nail Salon
      </Link>
      <Link
        onClick={() => props.selectHeader('Menu')}
        to="/menu"
        className={props.selectedHeader === 'Menu' ? 'active red item' : 'item'}
      >
        <i className="file outline icon"></i>
        Menu
      </Link>
      <Link
        onClick={() => props.selectHeader('Reviews')}
        to="/reviews"
        className={
          props.selectedHeader === 'Reviews' ? 'active red item' : 'item'
        }
      >
        <i className="edit outline icon"></i>
        Reviews
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedHeader: state.header };
};

export default connect(mapStateToProps, {
  selectHeader
})(Header);
