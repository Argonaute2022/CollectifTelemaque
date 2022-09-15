import React from 'react';
import collectif from '../assets/collectif_NB.png';
import "../utils/style/About.css";
import Button2 from './Buttons/Button2';
import Banner2 from './Banners/Banner2';

function About (){
	return (
		<div id="about">
			<Banner2 />
			<div>
				<h2 className='about__title'>Notre Collectif</h2>
			</div>
			<div className='about__container' id="collectif">
				
				<div>
					<img className='about__img' src={collectif} alt='Collectif Télémaque' />
				</div>
				<div className='about__text'>
					<h1 className='about__text__accroche'>
						Des citoyens engagés
					</h1>				
					<p className='about__text__parag'>
						Le Collectif Télémaque rassemble des <strong>universitaires</strong>, <strong>fonctionnaires</strong>, <strong>cadres du secteur privé</strong>, <strong>militants</strong>, <strong>élus</strong> et <strong>syndicalistes</strong> qui ne se résignent pas à la mort annoncée de la gauche de gouvernement.
						<br/>
						D’inspiration sociale-démocrate, le Collectif Télémaque entend contribuer à la vie des idées, au débat politique et à la refondation idéologique d’une gauche réformiste.
					</p>
					<div className='btn2'>
						<Button2 />
					</div>
					
				</div>
			</div>
		</div>
	)
	
}


export default About