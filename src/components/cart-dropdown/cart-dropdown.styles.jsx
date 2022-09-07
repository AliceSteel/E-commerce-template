import styled from 'styled-components';
import {BaseBtn, GoogleSignInBtn, InvertedBtn} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseBtn},
  ${GoogleSignInBtn},
  ${InvertedBtn} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
	width: 100%;
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
`;


