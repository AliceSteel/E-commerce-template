import styled from 'styled-components';
import {BaseBtn, GoogleSignInBtn, InvertedBtn} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, .8);
  top: 80px;
  right: 40px;
  z-index: 5;

  ${BaseBtn},
  ${GoogleSignInBtn},
  ${InvertedBtn} {
    margin-top: auto;
    width: 100%
  }
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
  color: #000;
`;

export const CartItemsContainer = styled.div`
	width: 100%;
  height: 100%;
	max-height: 340px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
  color: #000;
`;


