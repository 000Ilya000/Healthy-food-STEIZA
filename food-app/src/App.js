import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
// import styled from 'styled-components';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/mainPage/MainPage';
import Recipes from './pages/mainPage/components/Recipes/Recipes';
import DishesScreen from './pages/mainPage/components/Dishes/Dishes';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        {/* <Main/> */}
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/menu" element={<DishesScreen/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;