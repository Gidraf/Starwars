import React, { useEffect, useState, ComponentType } from 'react';
import styled from 'styled-components';
import searchFilm, { animationsVideos } from '../actions/films.actions';
import StarWarsMask from '../assets/images/starwars.jpeg';
import { useAppDispatch, useAppSelector } from '../reducers/hooks';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  float: left;
  position: relative;
  background: rgb(44 44 44);
`;

const SearchInput = styled.input`
  width: 35rem;
  background: white;
  font-size: 1.5em;
  margin-top: 1rem;
  color: black;
  padding: 0.5rem;
  border: 0;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  float: left;
  outline: 0;
`;

const TitleText = styled.h2`
  color: white;
  margin-top: 10%;
  text-align: left;
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
const StyledDiv = styled.div`
position: absolute;
width:50%;
left:0;
right:0;
margin:13rem auto;
z-index;1;
`;

const StyledSuggesstionDiv = styled.ul`
width:36rem;
margin-top: 4rem;
padding:.8rem 0;
z-index;1;
background-color: white;

`;

const StyledLi = styled.li`
  list-style-type: none;
  padding: 1rem;
  text-align: left;
  border-top: 1px solid #888;
  cursor: pointer;
  &:hover {
    background-color: #888;
    box-shadow: 0 0 1px 4px 0 #888;
  }
`;

const SubmitButton = styled.button`
  float: left;
  padding: 0.9rem;
  backgroung: green;
  width: 5rem;
  cursor: pointer;
  background-color: green;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  outline: 0;
  margin-top: 1rem;
`;

const SearchComponent = () => {
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

  const searchForAFilm = (e: any) => {
    setValue(e.target.value);
    dispatch(searchFilm(value, toggleIsLoading));
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
      <StyledSuggesstionDiv>
        {films.length > 0 ? (
          films.map((f: any, i: number) => {
            return <StyledLi key={f.episode_id}>{f.title}</StyledLi>;
          })
        ) : (
          <StyledLi>No Result Found</StyledLi>
        )}
      </StyledSuggesstionDiv>
    </StyledDiv>
  );
};

export default SearchComponent;
