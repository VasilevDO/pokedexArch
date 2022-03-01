import React from 'react';
import PropTypes from 'prop-types';
// Import MyButton from '../UI/button/MyButton';
import './CardItemOnePoke.css';
import {useNavigate} from 'react-router-dom';
// Import PokeStore from '../Models/PokeStore';

const CardItemOnePoke = props => {
	const navigate = useNavigate();
	// Const handleButtonClickChangeCatched = id => {
	// 	PokeStore.changeCatched(props.card.id);
	// 	action();
	// };

	// const {action} = props;

	return (
		<div className="card">
			<div className="card__content">
				<div className="imageBG">

				</div>
				<div className="imageBox">
					<img src={props.card.imageURL} className="image" onClick={() => navigate(`/allPokemons/${props.card.id}`)}/>
				</div>
				<hr/>
				<div className="card__text">
					<strong> ID Покемонеса:  {props.card.id} {props.card.title} </strong>

					<div>
                        Имя покемонеса: {props.card.name}
					</div>

					<div>
                        Типы: {props.card.types}
					</div>

					<div>
                        Вес: {props.card.weight}
					</div>

					<div>
                        Базовый опыт: {props.card.baseExperience}
					</div>

					<div>
                        Рост: {props.card.height}
					</div>
				</div>

			</div>
			{/* <div className="card__btns">
                <MyButton
                   onClick={handleButtonClickChangeCatched}
                >
                    {props.card.catched?'Opustit':"Poymat"}
                </MyButton>
            </div> */}

		</div>
	);
};

CardItemOnePoke.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		name: PropTypes.string,
		height: PropTypes.number,
		weight: PropTypes.number,
		types: PropTypes.array,
		baseExperience: PropTypes.number,
		imageURL: PropTypes.string,
		catched: PropTypes.bool,
	}),
};

export default CardItemOnePoke;
