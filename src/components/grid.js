import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4,minmax(200px,1fr));
  grid-gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 100%;
    grid-template-columns: repeat(3,minmax(200px,1fr));
  }
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: repeat(2,minmax(200px,1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1,minmax(200px,1fr));
  }
`

const Grid = ({children}) => {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  );
}
 
export default Grid;