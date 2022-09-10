import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  min-height: 250px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  
`;

export const ImgWrap = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const Controler = styled.span`
  cursor: pointer;
`;


