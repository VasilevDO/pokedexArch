import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
	<div className="navbar">
		<div className="navbar__links">
			<Link to="/allPokemons">Все покемоны</Link>
			<Link to="/collected">Коллекция</Link>
		</div>
	</div>
);

export default Navbar;
