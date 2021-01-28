import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Main from '../Pages/Main';
import About from '../Pages/About';
import Recipes from '../Pages/Recipes';

function Routerc() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;