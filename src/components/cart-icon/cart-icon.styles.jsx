import styled from 'styled-components';
import { ReactComponent as ShoppingSVG } from '../../assets/shopping-bag.svg';

export const ShopIcon = styled(ShoppingSVG)`
  height: 40px;
  width: 40px;
`;

export const CartIconContainer = styled.div`
  height: 100%;
  padding: 10px 10px 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 1rem;
  bottom: 29px;
`;
