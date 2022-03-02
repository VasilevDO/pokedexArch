import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '../CardItem/CardItem';
import '../CardsList/CardList.css';

const CardsList = ({cards, title, action}) => {
	// Const dispatch = useDispatch();

	if (!cards.length) {
		return (
			<h1 className="nameOfThePage">
                Покемонов нема
			</h1>
		);
	}

	// Const getPokemonsToRender = pokemonsArr => {
	// 	const pokemonsToRender = pokemonsArr.slice((page - 1) * limit, page * limit);
	// 	const pokemonsToLoad = pokemonsToRender.filter(u => !u.isLoaded);
	// 	if (pokemonsToLoad.length) {
	// 		dispatch(getFullPokemons(pokemonsToLoad));
	// 	}

	// 	return pokemonsToRender;
	// };

	// const pokemonsToRender = getPokemonsToRender(cards);

	return (
		<div className="cardListName">
			<h1 className="nameOfThePage">
				{title}
			</h1>
			<div className="cardList">
				{cards.map(card =>
					<CardItem card={card} key={card.id} action={action}/>,
				)}
			</div>
		</div>
	);
};

CardsList.propTypes = {
	cards: PropTypes.array,
	title: PropTypes.string,
	action: PropTypes.func,
};

export default CardsList;
