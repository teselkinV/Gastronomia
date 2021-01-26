import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Main from '../Pages/Main';
import Category from '../Pages/Category';
import Recipe from '../Pages/Recipe';

function Routerc() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/category" component={Category} />
        <Route path="/recipe" component={Recipe} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;