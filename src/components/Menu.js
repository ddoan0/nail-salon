import React from 'react';

import MenuList from './MenuList';

class Menu extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <h2 className="ui center aligned header">Manicures</h2>
            <MenuList item="Full Set"/> 
          </div>
          <div className="column">
            <h2 className="ui center aligned header">Pedicures</h2>
            <MenuList item="Full Set"/>
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
    );
  }
}

export default Menu;