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
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000;
  text-transform: uppercase;
`;

