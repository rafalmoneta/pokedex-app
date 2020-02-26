import React, { createContext, useState, useEffect } from 'react';

export const PaginationContext = createContext();

const range = (from, to) => {
  let start = from;
  let step = 1;
  let arr = [];

  while(start <= to) {
    arr.push(start);
    start += step;
  }

  return arr;
}

const PaginationContextProvider = ({children}) => {
  const [state, setState] = useState({
    startPage: 2,
    endPage: 12,
    totalPages: 13,
    numOfPage: 4, //numbers to display in center box 
    currPage: 2,
    pages: [1, 2, 3, 4, 5, 'RIGTH']
  });

  const setStartPage = (num) => {
    setState({...state, startPage: num});
  }

  const setCurrPage = (num) => {
    setState({...state, currPage: num});
  }

  const range = (from, to) => {
    let start = from;
    let step = 1;
    let arr = [];
  
    while(start <= to) {
      arr.push(start);
      start += step;
    }
  
    return arr;
  }
    

  return (
    <PaginationContext.Provider value={{state, setStartPage, setCurrPage, range}}>
      {children}
    </PaginationContext.Provider>
  )
}

export default PaginationContextProvider;