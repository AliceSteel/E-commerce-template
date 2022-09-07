import styled from 'styled-components';

export const BaseBtn = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Khula', sans-serif;
  font-weight: bolder;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInBtn = styled(BaseBtn)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: 1px solid transparent;
  }
`;
  

export const InvertedBtn = styled(BaseBtn)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
}
`;

