import React, {useEffect} from "react";
import styled from 'styled-components';


function DishesPagination( {dishesPerPage, totalDishes, paginate} ) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDishes / dishesPerPage); i++) {
        pageNumbers.push(i)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MainPagination>
            {
                pageNumbers.map(number => (
                    <PaginationBut key={number} className="page-link" onClick={() => paginate(number)}>
                        <p>{number}</p>
                    </PaginationBut>
                ))
            }
        </MainPagination>
    );
}

export default DishesPagination;

const MainPagination = styled.div`
    display: flex;
    justify-content: center;
    div:first-child {
        margin-right:24px;
    }
`;

const PaginationBut = styled.div`
    margin-bottom: 24px;
    cursor: pointer;
    font-size: 24px;
    width: 80px;   
    display: flex;
    justify-content: center;
    padding: 16px 16px;
    border-radius: 43px;
    transition: 0.4s;
    color: black;
    font-family: "HelveticaNeueRegular";
    font-size: 20px;
    background: #34C759;
    border: 1px solid #34C759;  

    :hover {
        color: #34C759;
        background: none;
        border: 1px solid #34C759;   
    }
`;