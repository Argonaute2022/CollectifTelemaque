import React from 'react';
import '../utils/style/Convictions.css';
import Button1 from './Buttons/Button1';
import Banner1 from './Banners/Banner1';

function Convictions () {
	const ConvItems = [
		{
			title: 'Social',
			text:'Le progrès social est le souci constant de la gauche réformiste, dont la finalité est la protection et l’émancipation des classes populaires, des classes moyennes et des personnes victimes de discriminations."'
		},
		{
			title: 'Ecologie',
			text:'Sans la transition écologique,  aucun progrès n\'est possible. Face à un capitalisme prédateur, il s\'agit de poursuivre un développement humain soucieux de jsutice sociale et se gardant de ses propres excès.'
		},
		{
			title: 'Europe',
			text:'L\'Europe est le bon échelon pour répondre aux défis de notre temps - lutte contre le dérèglement climatique, régulation du capitalisme mondialisé - et construire collectivement un nouveau modèle de société à vocation mondiale.'
		},
		{
			title: 'Démocratie',
			text:'Le respect des principes démocratiques est au premier rang de nos valeurs. L\'approfondissement démocratique doit être continu et prendre appui sur la complémentarité de ses différentes formes (représentative, sociale, participative…).'
		},
	]

	return (

		<div  id="convictions"> 
			<Banner1 />
			<div>
				<h2 className='convictions__title'>Nos convictions</h2>
			</div>
			
			<div className='convictions__container'>
				<div className='convictions__text'>
					<p className='convictions__text__item'>La gauche réformiste, prise en étau entre une gauche radicale-populiste et un centre droit attrape-tout, est menacée dans son existence même. Pourtant, elle seule, en alliant éthique de la conviction et éthique de la responsabilité, peut permettre de renouer avec un progès social réel.</p>
				
					<p className='convictions__text__item'> Pour cela, elle devra reconstruire un projet en s’appuyant sur les quatre piliers indissociables qui forgent son identité idéologique : le progrès social, la transition écologique, la construction européenne et la démocratie pluraliste.</p>
					<div className='convictions__text__btn'>
						<Button1 />
					</div>
				</div>
				
				<ul className='convictions__topic'>
					{ConvItems.map((item, index)=> {
						return (
							<li key={item.index}>
								<h1 className='convictions__topic__title'>
									{item.title}
								</h1>
								<p className='convictions__topic__text'>
									{item.text}
								</p>
							</li>
							
						)
					})}
				</ul>
			</div>
		</div>
	)
}
export default Convictions