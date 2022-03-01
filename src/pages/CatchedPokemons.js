import React, {useState, useEffect} from 'react';
import CardFilter from '../components/CardFilter/CardFilter';
import CardsList from '../components/CardsList/CardList';
import {useFetching} from '../components/hooks/useFetching';
import Pagination from '../components/UI/pagination/Pagination';
import PokeStore from '../components/Models/PokeStore';

function CatchedPokemons() {
	const [cards, setCards] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''});
	const [totalPages, setTotalPages] = useState(0);
	const [limit] = useState(24);
	// Const [limit, setLimit] = useState(24);
	const [page, setPage] = useState(1);
	// Const currentStore=PokeStore.all

	const changePage = page => {
		setPage(page);
	};

	const [fetchCards, isCardsLoading, cardError] = useFetching(async () => {
		const [rslt, lenghtOfSorted] = await PokeStore.getCatchedPokes(limit, page, filter);
		setTotalPages(Math.ceil(lenghtOfSorted / limit));
		if (totalPages < page) {
			setPage(1);
		}

		setCards(rslt);
	});

	const reloadPoks = () => {
		fetchCards();
	};

	useEffect(() => {
		fetchCards();
	}, [page, filter]);

	return (
		<div className="App">

			<CardFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{cardError
        && <h1>Произошла ошибка ${cardError}</h1>
			}
			{isCardsLoading
				? <img src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" alt="this slowpoke moves" width="250" />
				: <CardsList cards={cards} title="Пойманные покемоны" action={reloadPoks}/>
			}

			<Pagination
				totalPages={totalPages}
				page={page}
				changePage={changePage}

			/>

		</div>
	);
}

export default CatchedPokemons;
