import logo from './logo.svg';
import React, { Suspense } from 'react';
import Container from './components/Container';
import styled from 'styled-components';

const StyledApp = styled.div`
  text-align: center;
  overflow: hidden;
`;

const App = () => {
  return (
    <StyledApp>
      <Container />
    </StyledApp>
  );
};

export default App;
