import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../../assets/logo.png';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {HeaderContainer, NavLinks, NavLink, LogoContainer, FooterWrap, Copyright, SocialNav} from './header.styles'

const Header = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);
	
    return (
		<>
			<HeaderContainer>
				<LogoContainer to='/'>
					<img src={Logo} alt='logo'/>
				</LogoContainer>
				<NavLinks>
                    <NavLink to='shop/womens'>Womens</NavLink>
					<NavLink to='shop/mens'>mens</NavLink>

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