import React from 'react';

import MenuList from './MenuList';

class Menu extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <MenuList type='manicure' />
          <MenuList type='pedicure' />
        </div>
        <div className="ui vertical divider"></div>
      </div>
    );
  }
}

export default Menu;