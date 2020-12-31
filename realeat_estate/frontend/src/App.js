import React from 'react';
import Layout from './hoc/layout.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './containers/About'
import Home from  './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Listings from './containers/Listings'
import NotFound from './components/NotFound'
import ListingsDetail from './containers/ListingDetail'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/login' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/listings' component={Listings}/>
        <Route exact path='/listings/:id' component={ListingsDetail}/>
        <Route exact path='/' component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
);

export default App;