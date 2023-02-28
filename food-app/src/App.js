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

let i = 0;
while (i < 3) {
  i++;
}

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        {/* <Main/> */}
        <Routes>
            <Route path="/" element={<Main/>}/>
            {/* <Route path={dishesinfo.map((item) => item.srcCard)} element={<DishesCard/>}/> */}
            {dishesinfo.map((item, index) => <Route key={index} path={`/${index}`} element={<DishesCard lenght={`${item.length}`} numindex={`${index}`} nextindex={`${index+1}`} previndex={`${index-1}`}/>}/>)}
            {/* {dishesinfo.map((item, index) => <Route key={index} path={`/${item.index}`} element={<DishesCard numindex={`${index}`}/>}/>)} */}
        </Routes>
      </Router>
    </>
  );
}

export default App;