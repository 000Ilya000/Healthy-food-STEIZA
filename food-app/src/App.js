import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from './pages/mainPage/MainPage';
import DishesCard from './pages/DishesCard/DishesCard';
import dishesinfo from './pages/mainPage/components/Dishes/menu';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            {dishesinfo.map((item, index) => <Route key={index} path={`/${index}`} element={<DishesCard numindex={index}/>}/>)}
        </Routes>
      </Router>
    </>
  );
}

export default App;