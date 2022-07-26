import React, { useEffect, useState, ComponentType } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import { viewFilmDetails } from '../actions/films.actions';
import {
  ClearDiv,
  Spinner,
  StyledDescription,
  StyledDetailsDiv,
  StyledDiv,
  StyledDivD,
  StyledHeader,
  StyledLiMeta,
  StyledLiTitle,
} from './Components';

const FilmDetails = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState(Object);
  const [loading, setiLoading] = useState(false);
  const dispatch = useAppDispatch();
  const animations = useAppSelector((state: any) => state.animations);
  const handleSuccess = (data: any) => {
    setFilmData(data);
  };

  const toggleLoading = () => {
    setiLoading(!loading);
  };

  useEffect(() => {
    dispatch(viewFilmDetails(filmId, toggleLoading, handleSuccess));
  }, []);

  return (
    <StyledDivD>
      {Object.keys(filmData).length > 0 && (
        <StyledDiv>
          <StyledHeader>
            {filmData.title !== undefined && filmData.title}
          </StyledHeader>
          <StyledDetailsDiv>
            <StyledDescription>{filmData.opening_crawl}</StyledDescription>
          </StyledDetailsDiv>
          <hr style={{ width: '70%' }} />
          <ClearDiv>
            <StyledLiTitle> Director: </StyledLiTitle>
            <StyledLiMeta> {filmData.director}</StyledLiMeta>
          </ClearDiv>
          <ClearDiv>
            <StyledLiTitle> Producer: </StyledLiTitle>
            <StyledLiMeta> {filmData.producer}</StyledLiMeta>
          </ClearDiv>
          <ClearDiv>
            <StyledLiTitle> Release Date: </StyledLiTitle>
            <StyledLiMeta> {filmData.release_date}</StyledLiMeta>
          </ClearDiv>
          <ClearDiv>
            <StyledLiTitle>Film Link: </StyledLiTitle>
            <a
              style={{ color: 'white', cursor: 'pointer' }}
              href={filmData.url}
            >
              {' '}
              <StyledLiMeta>Visit Site</StyledLiMeta>
            </a>
          </ClearDiv>
        </StyledDiv>
      )}
      {loading === true && Object.keys(filmData).length === 0 && <Spinner />}
    </StyledDivD>
  );
};

export default FilmDetails;
