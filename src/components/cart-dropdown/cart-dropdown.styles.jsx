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
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .8);
  top: 80px;
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


