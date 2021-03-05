import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// Pages
import Main from '../Pages/MainPage/Main';
import About from '../Pages/About';
import Category from '../Pages/Category';

// Recipes
import Details from '../components/Recipe/Details';

// Category
import CategoryDetails from '../components/Category/CategoryDetails';

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
        <Route exact path="/category" component={Category} />
        <Route path="/recipes/:id" component={Details} />
        <Route path="/category/:id" component={CategoryDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={SearchResults} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Routerc;