import styled from 'styled-components';
import {BaseBtn, GoogleSignInBtn, InvertedBtn} from '../button/button.styles';

export const ProductCardContainer = styled.div`
  width: 100%;
  max-width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    height: 95%;
    margin-bottom: 5px;
  }

  ${BaseBtn},
  ${GoogleSignInBtn},
  ${InvertedBtn} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 80%;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseBtn},
    ${GoogleSignInBtn},
    ${InvertedBtn} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export const CardName = styled.span`
  text-transform: uppercase;
  font-weight: bolder;
`;
    
