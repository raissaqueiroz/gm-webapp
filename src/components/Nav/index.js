import React from 'react';
import { Nav, Dropdown } from 'rsuite';

const NavComponent = ({ active, onSelect }) => {

	return(
		<Nav appearance="subtle">
			<Nav.Item active eventKey="home">HOME</Nav.Item>
			<Nav.Item eventKey="news">SERVIÇOS</Nav.Item>
			<Nav.Item eventKey="solutions">EMPRESA</Nav.Item>
			<Nav.Item eventKey="products">CLIENTES</Nav.Item>
			<Nav.Item eventKey="about">CONTATO</Nav.Item>
    	</Nav>
	);
}

export default NavComponent;
