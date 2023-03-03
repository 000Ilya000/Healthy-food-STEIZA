import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dishesinfo from '../mainPage/components/Dishes/menu';
import Header from '../../сomponents/Header/Header';
import Footer from '../../сomponents/Footer/Footer';
import MainDishes from './components/Dishes/AllDishes';
import DishesPagination from './components/Pagindtion/pagination';

function AllDishes() {
    const [dishes, setDishes] = useState([])
    const [loading, setloading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [dishesPerPage] = useState(9)

    useEffect(() => {
        const getDishes = async () => {
            setloading(true)
            console.log(dishesinfo)
            setDishes(dishesinfo)
            setloading(false)
        }

        getDishes()
    }, [])

    const lastDishesIndex = currentPage * dishesPerPage
    const firstDishesIndex = lastDishesIndex - dishesPerPage
    const currentDishes = dishes.slice(firstDishesIndex, lastDishesIndex)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }

    return (
      <MainAllDishes>
        <Header/>
        <MainDishes dishes={currentDishes} loading={loading}/>
        <DishesPagination
            dishesPerPage={dishesPerPage}
            totalDishes={dishes.length}
            paginate={paginate}
        />
        <Footer/>
      </MainAllDishes>
    );
}

export default AllDishes;

const MainAllDishes = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
    align-items: center;

    .header {
        background: rgba(26, 26, 26, 1);
        position: fixed;
        z-index: 2;
        top:0;
        left:0;

    }
`;