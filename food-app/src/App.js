// import logo from './logo.svg';
import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
import styled from 'styled-components';
// import Main from './pages/MainPage';
// import Home from './pages/HomePage';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/mainPage/MainPage';
import DishesScreen from './pages/mainPage/components/DishesSection/Dishes';
import Work from './pages/mainPage/components/WorkSection/Work';
import AboutScreen from './pages/mainPage/components/AboutSection/About';
import Chefs from './pages/mainPage/components/ChefsSection/Chefs';
import Recipes from './pages/mainPage/components/RecipesSection/Recipes';
import Social from './pages/mainPage/components/SocialSection/Social';


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
        <Social/>
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