import styled, { keyframes } from 'styled-components';

export const StyledDivD = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.h2`
  color: white;
  width: 50%;
  margin: 2rem auto;
`;

export const StyledDetailsDiv = styled.div`
  width: 70%;
  margin: 1rem auto;
  border-radius: 3px;
  padding: 1rem;
  background-color: rgb(243 237 237 / 34%);
`;

export const StyledMetaDiv = styled.div`
  width: 80%;
  border-radius: 3px;
`;

export const StyledDescription = styled.p`
  font-size: 1.2em;
  color: white;
`;

export const StyledLiTitle = styled.li`
  list-style-type: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
`;

export const StyledLiMeta = styled.li`
  list-style-type: none;
  margin-left: 2rem;
  color: white;
`;

export const ClearDiv = styled.div`
  list-style-type: none;
  display: flex;
  width: 85%;
  margin-left: auto;
  color: white;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  float: left;
  position: relative;
  background: rgb(44 44 44);
`;

export const SearchInput = styled.input`
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

export const TitleText = styled.h2`
  color: white;
  margin-top: 10%;
  text-align: left;
`;

export const MaskeImage = styled.img`
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
export const StyledDiv = styled.div`
position: absolute;
width:50%;
left:0;
right:0;
margin:13rem auto;
z-index;1;
`;

export const StyledSuggesstionDiv = styled.ul`
width:36rem;
margin-top: 4rem;
padding:.8rem 0;
z-index;1;
background-color: white;

`;

export const StyledLi = styled.li`
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

export const SubmitButton = styled.button`
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

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 4px solid wheat;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
