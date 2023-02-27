import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
// import styled from 'styled-components';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Main from './pages/mainPage/MainPage';
import Recipes from './pages/mainPage/components/Recipes/Recipes';
import DishesScreen from './pages/mainPage/components/Dishes/Dishes';
import DishesCard from './pages/DishesCards/components/DishesCard/DishesCard';
import dishesinfo from './pages/mainPage/components/Dishes/menu';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        {/* <Main/> */}
        <Routes>
            <Route path="/" element={<Main/>}/>
            {/* <Route path={dishesinfo.map((item) => item.srcCard)} element={<DishesCard/>}/> */}
            {dishesinfo.map((item, index) => <Route key={index} path={`/${item.title}`} element={<DishesCard/>}/>)}
        </Routes>
      </Router>
    </>
  );
}

export default App;