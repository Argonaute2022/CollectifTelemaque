import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import '../utils/style/Footer.css'

function Footer() {
	return(

		<footer class="footer-distributed">

			<div class="footer-right">

				<a href='https://twitter.com/colltelemaque?lang=fr' className='footer__link'><FaTwitter /></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#convictions">Accueil</a>

					<a href="#convictions">Nos Convictions</a>

					<a href="#about">Notre Collectif</a>

					<a href="#actions">Nos Actions</a>

					<a href="#contact">Rejoignez-nous</a>

				</p>

				<p>Collectif Télémaque &copy; 2022</p>
			</div>

		</footer>
	)
}

export default Footer