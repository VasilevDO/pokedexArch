import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CardService from '../API/CardService';
import CardItemOnePoke from '../components/CardItem/CardItemOnePoke';
import {useFetching} from '../components/hooks/useFetching';
import OnePokeStandart from '../components/Models/OnePokeStandart';
import './CardIdPage.css';

const CardIdPage = () => {
	const params = useParams();
	const [card, setCard] = useState({});
	// Const [fetchCardById, isLoading, error] = useFetching(async () => {
	const [fetchCardById, isLoading] = useFetching(async () => {
		const response = await CardService.getById(params.id);
		const result = new OnePokeStandart(response.data);
		setCard(result);
	});

	useEffect(() => {
		fetchCardById(params.id);
	}, []);

	return (
		<div className="allSpace">
			<h1>тут будет покемонес 1 шт с id {params.id}</h1>

			{isLoading
				? <img src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" alt="this slowpoke moves" width="250" />
				: <CardItemOnePoke card={card} key={card.id}/>
			}
		</div>
	);
};

export default CardIdPage;
