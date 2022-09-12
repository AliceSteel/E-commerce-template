import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: #000;
    padding: 0 50px;
    position: relative;
    left:0;
    bottom:0;
    right:0;
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
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 50px 0;
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
    cursor: pointer;
    text-transform: capitilize;
    position: relative;
    overflow: hidden;
    padding: 4px 0;

  &::after {
    background-color: #fff;
    content: "";
    opacity: 0;
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5px;
    transform: translateX(calc(-100% - .1rem));
    transition: opacity 400ms, transform 400ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
	  transform: translateX(0);
  }
`;


