import React, {useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utilities/firebase/firebase';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './header.styles.scss'

const Header = () => {
	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);
	
    return (
		<>
			<div className='header'>
				<Link className='logo_container' to='/'>
					<CrwLogo className='logo'/>
				</Link>
				<div className="nav_links_container">
                    <Link className='nav_link' to='/shop'>
                        Shop
                    </Link>
					{currentUser ? (<span onClick={signOutUser} className='nav_link'>SIGN OUT</span>)
							: (
								<Link className='nav_link' to='/auth'>SIGN IN</Link>
					)}
					<CartIcon/>
                </div>
				{ isCartOpen && <CartDropdown/>}
			</div>
			<Outlet />
		</>
	)
}

export default Header