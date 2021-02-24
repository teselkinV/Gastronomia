import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// Pages
import Main from '../Pages/MainPage/Main';
import About from '../Pages/About';
import Recipes from '../Pages/Recipes';
import Details from '../components/Recipe/Details';

// Account components
import Login from '../components/Account/Login';
import Register from '../components/Account/Register';

function Routerc() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/about" component={About} />
        <Route exact path="/recipes" component={Recipes} />
        <Route path="/recipes/:id" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;