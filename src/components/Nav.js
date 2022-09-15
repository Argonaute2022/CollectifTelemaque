import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaTwitter } from 'react-icons/fa';
import '../utils/style/Nav.css';

function Nav() {
	const [showLinks, setShowLinks] = useState(false);

	const handleShowLinks = () => {
		setShowLinks(!showLinks)
	}

	return (
		<nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
			<div className='navbar__logo'>
				<img src={logo} alt='Collectif Télémaque'/>
			</div>
			<ul className='navbar__links'>
				<li className='navbar__item slideInDown-1'>
					<a href='#convictions' className='navbar__link'>Accueil</a>
				</li>
				<li className='navbar__item slideInDown-2'>
					<a href='#convictions' className='navbar__link'>Nos Convictions</a>
				</li>
				<li className='navbar__item slideInDown-3'>
					<a href='#about' className='navbar__link'>Notre Collectif</a>
				</li>
				<li className='navbar__item slideInDown-4'>
					<a href='#actions' className='navbar__link'>Nos Actions</a>
				</li>
				<li className='navbar__item slideInDown-5'>
					<a href='#contact' className='navbar__link'>Rejoignez-nous</a>
				</li>
				<li className='navbar__item slideInDown-6'>
					<a href='https://twitter.com/colltelemaque?lang=fr' className='navbar__link'><FaTwitter /></a>
				</li>
			</ul>
			<button className='navbar__burger' onClick={handleShowLinks}>
				<span className='burger-bar'></span>
			</button>
		</nav>	
	)
}

export default Nav;