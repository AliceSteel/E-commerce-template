import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 90%;
  max-width: 1191px;
  min-height: calc(100vh - 263px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 7%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const TotalWrap = styled.span`
  margin: 30px 0;
  align-self: flex-end;
  font-size: 2.1rem;
`;

