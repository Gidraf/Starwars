import React, { useEffect, useState, ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import searchFilm from '../actions/films.actions';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';
import {
  SearchInput,
  Spinner,
  StyledDiv,
  StyledLi,
  StyledSuggesstionDiv,
  SubmitButton,
  TitleText,
} from './Components';

const SearchComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const films = useAppSelector((state: any) => {
    return state.films;
  });

  const viewFilmsDetails = (id: string, film: any) => {
    navigation(`/films/${id}`);
  };

  const toggleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  const searchForAFilm = (e: any) => {
    setValue(e.target.value);
    dispatch(searchFilm(e.target.value, toggleIsLoading));
  };
  return (
    <StyledDiv>
      <TitleText>StarWars Films Search</TitleText>
      <SearchInput
        value={value}
        onChange={searchForAFilm}
        placeholder="Search for a Film  🔍"
      />
      <SubmitButton>Search</SubmitButton>
      {films.length > 0 && value && (
        <StyledSuggesstionDiv>
          {films.map((f: any, i: number) => {
            const ids = f.url.split('/');
            return (
              <StyledLi
                onClick={() => {
                  viewFilmsDetails(ids[ids.length - 2], f);
                }}
                key={f.episode_id}
              >
                {f.title}
              </StyledLi>
            );
          })}
        </StyledSuggesstionDiv>
      )}
      {value && films.length === 0 && <StyledLi>No Records Found</StyledLi>}
      {isLoading && <Spinner />}
    </StyledDiv>
  );
};

export default SearchComponent;
