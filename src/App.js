
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
}from "react-router-dom";
import AboutUs from './components/about';
import React, { Component } from 'react'
import Navabr from './components/Navabr';
import News from './components/News';
let Category=["entertainment","sports","science","technology"]

export default class App extends Component {
  render() {
    
    return (
      <>
      <Router>
      <Navabr Category={Category}/>
      <Routes>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/' element={<News  country='us' category='general'/>}/>
        {Category.map((category,index)=>
        <Route key={index} path={`/${category}`} element={<News  country='us' category={`${category}`}/>}/>
        )}
      </Routes>
      </Router>
      </>
    )
  }
}

