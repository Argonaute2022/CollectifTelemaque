import React from 'react';
import '../utils/style/Actions.css';
import tribune from '../assets/tribune.png';
import rencontre from '../assets/rencontre.png';
import livre from '../assets/livre_telemaque.png';
import Banner3 from './Banners/Banner3';

function Actions () {
	
	return(
    
    <div id='actions'>
	<Banner3 />
	<div>
		<h2 className='actions__title'>Nos actions</h2>

	</div>
	<div className='actions__container'>
		<div className='actions__content'>
			
			<div className='actions__content__card'>
				<img className='actions__content__photo' src={livre} alt="Livre Collectif Télémaque" />
				<div className='actions__content__card__text1'><a href='https://www.jean-jaures.org'>
					<h1 className='actions__content__title'> Un ouvrage collectif</h1>
					<p className='actions__content__text'> Un livre fondateur qui présente nos réflexions de fond </p>
					</a>
				</div>
			</div>
		
			<div className='actions__content__card'>
				<img className='actions__content__photo' src={rencontre} alt="Rencontres Collectif Télémaque" />
				<div className='actions__content__card__text'>
					<h1 className='actions__content__title'> Des rencontres</h1>
					<p className='actions__content__text'> Des échanges avec des intellectuels pour nourrir nos réflexions </p>
				</div>
			</div>

			<div className='actions__content__card'>
				<img className='actions__content__photo' src={tribune} alt="PublicationsCollectif Télémaque" />
				<div className='actions__content__card__text1'><a href='https://lemanifeste.notion.site/lemanifeste/Manifeste-pour-une-gauche-sociale-d-mocrate-r-publicaine-humaniste-et-cologique-d9cdf86b9e714e6487a13dfab5bd252e'>
					<h1 className='actions__content__title'> Des tribunes</h1>
					<p className='actions__content__text'>Des prises de position relayées dans la presse </p>
					</a>
				</div>
			</div>
					
		</div>
	</div>
	</div>
  )
}

export default Actions;