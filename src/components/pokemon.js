import React, { useEffect } from 'react';
import styled from 'styled-components';

const PokemonBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #d4d4d4;
  background-color: ${props => 
    (props.type === 'Grass' && '#46d1b2') || 
    (props.type === 'Fire' && '#fb6c6c') ||
    (props.type === 'Water' && '#77befe') ||
    (props.type === 'Bug' && '#ffb343') ||
    (props.type === 'Poison' && '#9066da') ||
    (props.type === 'Electric' && '#ffd970') ||
    (props.type === 'Psychic' && '#FEA399') ||
    (props.type === 'Ice' && '#74CEC0')

  };
  color: #FFF;
  box-sizing: border-box;
  border-radius: 25px;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    text-align: left;
    width: fit-content;
    margin: 0;
  }
`

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const Types = styled.div`
  flex-grow: 1;
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0.5rem 1rem;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 25px;
      margin-bottom: 1rem;
    }
  }
`

const Image = styled.div`
  flex-grow: 3;
`

const Pokemon = ({name, num, imgSrc, types}) => {

  return (
    <PokemonBox
      type={types[0]}
    >
      <header>
        <h1>{name}</h1>
        <span>#{num}</span>
      </header>
      <PokemonInfo>
        <Types
          type={types[0]}
        >
          <ul>
            {types.map((type,index) => {
              return <li key={index}>{type}</li>
            })}
          </ul>
        </Types>
        <Image>
          <img src={imgSrc}></img>
        </Image>
      </PokemonInfo>
    </PokemonBox>
  );
}
 
export default Pokemon;