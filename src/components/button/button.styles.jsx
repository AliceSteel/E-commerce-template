import styled from 'styled-components';

export const BaseBtn = styled.button`
  width: 80%;
  max-width: 300px;
  height: 50px;
  font-size: 1rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
 
  &:hover {
    background-color: rgba(255, 255, 255, .7);
    color: black;
    border: 2px solid black;
  }
`;

export const GoogleSignInBtn = styled(BaseBtn)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: 2px solid transparent;
  }
`;
  

export const InvertedBtn = styled(BaseBtn)`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 2px solid transparent;
}
`;
export const TransparentBtn = styled(BaseBtn)`
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    min-width: 200px;
    height: 70px;
    letter-spacing: 0.5px;
    font-size: 1.2rem;
`;

