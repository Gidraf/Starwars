import React from "react";
import styled from "styled-components"
import StarWarsMask from '../assets/images/starwars.jpeg'


const StyledContainer = styled.div`
width: 100%;
height:100vh;
float:left;
position:relative;
background: rgb(44 44 44);
`

const SearchInput = styled.input`
width: 60%;
background:white;
font-size:1.5em;
margin: 2rem auto;
color:black;
padding:.5rem;
border:0;
border-radius:5px;
outline:0;
`

const TitleText = styled.h2`
color:white;
margin-top: 20%
`

const MaskeImage = styled.img`
 width:80%;
 top:1rem;
 right:3rem;
 opacity:.1;
 border: none;
 border-radius:30px;
 box-shadow: 0 0 10px rgb(44 44 44) inset;
 position:absolute;
 z-index:1;
`
const StyledDiv = styled.div`
position: absolute;
width:100%;
z-index;2;
`

const Container = ()=>
(
<StyledContainer>
    <StyledDiv>
    <TitleText >StarWars Films Search</TitleText>
    <SearchInput value={"00"} placeholder="Search your favourite Film here"/>
    </StyledDiv>
    <MaskeImage src={StarWarsMask}/>
</StyledContainer>
)

export default Container