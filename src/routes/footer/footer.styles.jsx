import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #000;
    padding: 0 50px;
`;

export const FooterWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1191px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap-reverse;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 70px 0;
`;
  
export const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.37);
`;

export const SocialNav = styled.div`
  width: 100%;
  max-width: 325px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

`;
export const NavLink = styled(Link)`
    color: #fff;
    text-align: left;
`;
