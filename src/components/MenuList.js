import React from 'react';

const MenuList = (props) => {
  return (
    <div className="ui list">
      <div className="item">{props.item}</div>
    </div>
  );
};

export default MenuList;