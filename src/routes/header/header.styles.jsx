import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
	position: fixed;
	z-index: 101;
	top: 0;
	left: 0;
	background-color: transparent;
  box-shadow: 0 0 5px rgb(153, 153, 153);
	backdrop-filter: blur(4px);
	transition: all .2s ease;
	padding: 0 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;

  @media (max-width: 670px){
    padding: 0 10px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  div {
    cursor: pointer;
  }

  @media (max-width: 570px) {
    gap: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000;
  text-transform: uppercase;
  font-weight:700;
  position: relative;
	overflow: hidden;
  padding: 4px 0;

  &::after{
    background-color: #000;
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
  &:focus::after{
    opacity: 1;
	transform: translateX(0);
  }

  @media (max-width: 570px){
    font-size: .8rem;
  }
`;


