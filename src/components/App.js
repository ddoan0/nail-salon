import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './menu-components/Menu';
import Reviews from './reviews-components/Reviews';
import Header from './Header';
import PictureHeader from './PictureHeader';
import PictureNav from './PictureNav';
import LinksNavBar from './LinksNavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PictureHeader />
        <PictureNav />
        <LinksNavBar />
        <div>
          <Route path="/menu" exact component={Menu} />
          <Route path="/reviews" exact component={Reviews} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
