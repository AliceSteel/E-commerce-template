import React, {useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utilities/firebase/firebase';

import './header.styles.scss'

const Header = () => {
	const {currentUser} = useContext(UserContext);
	
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
					{
						currentUser ? (<span onClick={signOutUser} className='nav_link'>SIGN OUT</span>)
							: (
								<Link className='nav_link' to='/auth'>SIGN IN</Link>
							)
					}
					
                </div>
			</div>
			<Outlet />
		</>
	)
}

export default Header