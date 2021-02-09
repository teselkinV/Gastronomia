import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Main from '../Pages/Main';
import About from '../Pages/About';
import Recipes from '../Pages/Recipes';
import Details from '../components/Recipe/Details';

function Routerc() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/about" component={About} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/recipes/:id" component={Details} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;