import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as CrwLogo } from '../../assets/crown.svg'

const Header = () => {
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
					<Link className='nav_link' to='/auth'>
                        Sign In
                    </Link>
                </div>
			</div>
			<Outlet />
		</>
	)
}

export default Header