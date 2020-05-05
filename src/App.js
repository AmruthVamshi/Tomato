import React from 'react';
import './css/App.css';
import Navbar from './components/navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import IndividualCategory from './components/individualCategory';
import IndividualRestaurant from './components/individualRestaurant';
import SearchResults from './components/searchResults';
import {connect} from 'react-redux';
import getLocation from './actions/getLoaction';
var App = (props)=> {
    return (
     <BrowserRouter>
      <div className="Tomato">
        <Navbar />
        <Switch>
        <Route  exact path='/' component={Home} />  
        <Route path='/about' component={About} />
        <Route path='/Categories/:id' component={IndividualCategory} />
        <Route path='/restaurant/:id' component={IndividualRestaurant} />
        <Route path='/search' component={SearchResults}/>
        <Route component={NotFound} />
        </Switch>
      </div>
     </BrowserRouter>
    );
}
const mapStateToProps =(state)=>{
  return{
    location: state,
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    Location:()=>dispatch(getLocation()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
