import React from 'react';
import '../utils/style/ContactUs.css';
import Banner4 from './Banners/Banner4';

function ContactUs (){
	return (
		<div id="contact">
			<Banner4 />
			<div>
				<h2 className='contact__title'> Nous suivre </h2>
			</div>
			<div  id="collectif">
				
				<div className='contact__container'>
					<p className='contact__text'>Si notre projet vous intéresse, que vous souhaitez nous rejoindre ou simplement recevoir plus d'information, n'hésitez pas à nous écrire :</p>							
					
					<p className='contact__text lien'><a href="mailto:contact@telemaque.eu"> contact@telemaque.eu </a></p>


				</div>
			</div>
		</div>
	)
}

export default ContactUs