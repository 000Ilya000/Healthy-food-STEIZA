// import logo from './logo.svg';
import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
import styled from 'styled-components';
// import Main from './pages/MainPage';
// import Home from './pages/HomePage';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/mainPage/MainPage';
import DishesScreen from './pages/components/Dishes';
import Work from './pages/components/Work';
import AboutScreen from './pages/components/About';
import Chefs from './pages/components/Chefs';
import Recipes from './pages/components/Recipes';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Main/>
        <AboutScreen/>
        <Work/>
        <DishesScreen/>
        <Chefs/>
        <Recipes/>
        <Routes>
            {/* <Route path="#dishes" element={<DishesScreen />}/> */}
            {/* <Route path="/About" element={<AboutScreen />}/>
            <Route path="/Work" element={<Work />}/>
            <Route path="/Dishes" element={<DishesScreen />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;