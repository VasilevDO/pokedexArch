import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import MyButton from '../UI/button/MyButton';
import PokeStore from '../Models/PokeStore';

import './CardItem.css';

const CardItem = props => {
	const {action} = props;

	const navigate = useNavigate();
	const handleButtonClickChangeCatched = () => {
		PokeStore.changeCatched(props.card.id);
		action();
	};

	return (
		<div className="card">
			<div className="card__content">
				<div className="imageBG">

				</div>
				<div className="imageBox">
					<img src={props.card.imageURL} className="image" onClick={() => navigate(`/allPokemons/${props.card.id}`)}/>
				</div>
				<div className="card__text">
					<strong> {props.card.id} {props.card.title} </strong>

					<div>
						{props.card.name}
					</div>
				</div>

			</div>
			<div className="card__btns">
				<MyButton
					onClick={handleButtonClickChangeCatched}
				>
					{props.card.catched ? 'Opustit' : 'Poymat'}
				</MyButton>
			</div>

		</div>
	);
};

CardItem.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		name: PropTypes.string,
		imageURL: PropTypes.string,
		catched: PropTypes.bool,
	}),
	action: PropTypes.func.isRequired,
};

export default CardItem;
