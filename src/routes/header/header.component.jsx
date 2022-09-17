import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../assets/logo.png';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import {HeaderContainer, NavLinks, NavLink, LogoContainer} from './header.styles'

const Header = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	
    return (
		<>
			<HeaderContainer>
				<LogoContainer to='/'>
					<img src={Logo} alt='logo'/>
				</LogoContainer>
				<NavLinks>
                    <NavLink to='shop'>Shop</NavLink>

					 {currentUser ? (<div onClick={signOutUser} >SIGN OUT</div>)
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