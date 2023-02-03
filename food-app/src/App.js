// import logo from './logo.svg';
import './assets/styles/App.css';
import GlobalStyle from './assets/styles/GlobalStyle';
import styled from 'styled-components';
import Main from './pages/MainPage';
// import Home from './pages/HomePage';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";



function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/Main" element={<Main />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
