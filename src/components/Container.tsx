import React, { useEffect, useState, ComponentType } from 'react';
import styled from 'styled-components';
import searchFilm, { animationsVideos } from '../actions/films.actions';
import StarWarsMask from '../assets/images/starwars.jpeg';
import { PageTransition } from '@steveeeie/react-page-transition';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import SearchComponent from './SearchComponent';
import FilmDetails from './FilmDetail';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  float: left;
  position: relative;
  background: rgb(44 44 44);
`;

const MaskeImage = styled.img`
  width: 80%;
  top: 1rem;
  right: 3rem;
  opacity: 0.1;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 10px rgb(44 44 44) inset;
  position: absolute;
  z-index: 0;
`;

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const films = useAppSelector((state: any) => {
    console.log(state);
    return state.films;
  });

  useEffect(() => {
    dispatch(animationsVideos());
  }, []);

  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };
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
