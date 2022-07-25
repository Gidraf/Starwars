import React, { useEffect, useState, ComponentType } from 'react';
import styled from 'styled-components';
import StarWarsMask from '../assets/images/starwars.jpeg';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import SearchComponent from './SearchComponent';
import FilmDetails from './FilmDetail';
import { MaskeImage, StyledContainer } from './Components';

const Container = () => {
  return (
    <StyledContainer>
      <MaskeImage src={StarWarsMask} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchComponent />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
