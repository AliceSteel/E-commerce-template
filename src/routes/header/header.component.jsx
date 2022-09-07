import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'

import { ReactComponent as CrwLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {HeaderContainer, NavLinks, NavLink, LogoContainer} from './header.styles'

const Header = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);
	
    return (
		<>
			<HeaderContainer>
				<LogoContainer to='/'>
					<CrwLogo />
				</LogoContainer>
				<NavLinks>
                    <NavLink to='shop'>SHOP</NavLink>

					{currentUser ? (<NavLink onClick={signOutUser} >SIGN OUT</NavLink>)
							: (<NavLink to='auth'>SIGN IN</NavLink>)}
					<CartIcon/>
                </NavLinks>
				{ isCartOpen && <CartDropdown/>}
			</HeaderContainer>
			<Outlet />
		</>
	)
}

export default Header