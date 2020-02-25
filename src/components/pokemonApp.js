import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import Header from './header';
import Grid from './grid';
import Pokemon from './pokemon';

function reducer(state, action) {
  switch(action.type) {
    case "START":
      return {...state, isLoading: true}
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case "FAILED":
      return {
        ...state,
        isLoading: true,
        error: true
      }
  }
}

const PokemonApp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState(`http://localhost:3001/pokemons?_page=${currentPage}&_limit=12`);
  const [state, dispatch] = useReducer(reducer, {isLoading: true, error: false, data: null});

  useEffect(()=>{
    const getPokemons = async () => {
      setUrl(`http://localhost:3001/pokemons?_page=${currentPage}&_limit=12`);
      dispatch({type: "START"});
      try {
        let res = await axios.get(url);
        dispatch({type: "SUCCESS", data: res.data})
      } catch (error) {
        console.log(error)
        dispatch({type: "FAILED"})
      }
    }
    getPokemons();
  }, [url, currentPage])

  return (
    <>
      <Header />
      <Grid>
        {!state.isLoading && 
          state.data.map((pokemon) => {
            return (
              <Pokemon 
                key={pokemon.num}
                name={pokemon.name}
                num={pokemon.num}
                imgSrc={pokemon.img}
                types={pokemon.type}
              />
            )
          })
        }
      </Grid>
      <div>
        {currentPage > 1 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous page</button>}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
      </div>
    </>
  );
}
 
export default PokemonApp;