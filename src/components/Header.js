import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    selectedHeader: 'Nail Salon'  
  };

  onHeaderClick(pressedItem) {
    this.setState({
      selectedHeader: pressedItem
    });
  };

  render() {
    return (
      <div className="ui fluid three item menu ">
        <Link 
          onClick={() => this.onHeaderClick('Nail Salon')} 
          to="/" 
          className={this.state.selectedHeader === 'Nail Salon' ? 'active red item': 'item'}
        >
          <i className="gem outline icon"></i>
          Nail Salon
        </Link>
        <Link 
          onClick={() => this.onHeaderClick('Menu')} 
          to="/menu" 
          className={this.state.selectedHeader === 'Menu' ? 'active red item': 'item'}
        >
          <i className="file outline icon"></i>
          Menu
        </Link>
        <Link
          onClick={() => this.onHeaderClick('Reviews')} 
          to="/reviews" 
          className={this.state.selectedHeader === 'Reviews' ? 'active red item': 'item'}
        >
          <i className="edit outline icon"></i>
          Reviews
        </Link>
      </div>
    );
  }
  
};

export default Header;