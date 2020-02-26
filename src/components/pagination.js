import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import left from './assets/svg/left.svg';
import right from './assets/svg/right.svg'; 
import PaginationContextProvider, { PaginationContext } from './contexts/paginationContext';

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 3rem 1rem;
  box-sizing: border-box;
`

const PaginationBox = styled.div`
  display: flex;
  width: 350px;
  heigh: 30px;
  justify-content: space-between;
  align-items: center;
`

const Side = styled.div`
  display: flex;
  height: 100%;
`

const Pages = styled.div`
  display: flex;
  height: 100%;
  button {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 2px;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: transparent;
  }
`

const Pagination = ({setCurrentPage}) => {
  const {state, setStartPage, setCurrPage, range } = useContext(PaginationContext);

  const setPage = (num) => {
    setCurrentPage(num);
    setCurrPage(num);
  }

  const setFirstPage = () => {
    setCurrPage(1);
    setCurrentPage(1);
    setStartPage(2);
  }

  const setLastPage = () => {
    setCurrPage(13);
    setCurrentPage(13);
    setStartPage(8);
  }

  return (
    <PaginationContainer>
      <PaginationBox>
        <Pages>
          <button onClick={setFirstPage}>1</button>
          {state.startPage > 2 && <button onClick={()=> setStartPage(state.startPage - 1)}> &#8656;	 </button>}
          {range(state.startPage, state.startPage + state.numOfPage).map((num, ind) => {
            return(
              <button key={ind} onClick={() => setPage(num)}>{num}</button>
            )
          })}
          {state.startPage < 8 && <button onClick={()=> setStartPage(state.startPage + 1)}> &#8658;	</button>}
          <button onClick={setLastPage}>13</button>
        </Pages>
      </PaginationBox>

    </PaginationContainer>
  );
}
 
export default Pagination;