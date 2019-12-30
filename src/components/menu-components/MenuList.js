import React from 'react';

const MenuList = (props) => {
  if (props.type === 'manicure') {
    return (
      <div className="column">
        <h2 className="ui center aligned header">Manicures</h2>
        <div className="ui list">
          <div className="item">
            <div className="content">
              <h4 className="header">Polish Change</h4>
              <div className="description">
                trim, shape, buff, cuticle oil and polish
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Classic Manicure</h4>
              <div className="description">
                a classic manicure followed by a full hand and forearm massage
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Gel Manicure</h4>
              <div className="description">
              a classic manicure that finishes with a gel polish application  
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Hot Oil Manicure</h4>
              <div className="description">
                a manicure that includes an oil soak to help dry cuticles  
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Gel Add On</h4>
              <div className="description">
                add gel polish to any of our other manicures  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="column">
        <h2 className="ui center aligned header">Pedicures</h2>
        <div className="ui list">
          <div className="item">
            <div className="content">
              <h4 className="header">Polish Change</h4>
              <div className="description">
                trim, shape, buff, cuticle oil and polish  
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Express Pedicure</h4>
              <div className="description">
                includes mint soaking, cuticle maintenance, quick pumice exfoliation  
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Heel Therapy Pedicure</h4>
              <div className="description">
                includes lemongrass essential soak, mineral salt exfoliation and massage
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Spa Pedicure</h4>
              <div className="description">
                our most luxurious pedicure with an essential oil soak, multiple massages and exfoliations
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h4 className="header">Gel Add On</h4>
              <div className="description">
                add gel polish to any of our other pedicures  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
};

export default MenuList;