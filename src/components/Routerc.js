import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// Pages
import Main from '../Pages/MainPage/Main';
import About from '../Pages/About';
import Recipes from '../Pages/Recipes';
import Category from '../Pages/Category';
import Details from '../components/Recipe/Details';

// Account components
import Login from '../components/Account/Login';
import Register from '../components/Account/Register';
import SearchResults from '../components/Search/SearchResults';

function Routerc() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/category" component={Category} />
        <Route path="/recipes/:id" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={SearchResults} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;