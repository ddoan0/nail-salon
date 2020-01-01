import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Menu from './menu-components/Menu';
import Reviews from './reviews-components/Reviews';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reviews" exact component={Reviews} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;