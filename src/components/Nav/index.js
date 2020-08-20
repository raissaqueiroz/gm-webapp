import React from 'react';
import { Nav, Icon , Col } from 'rsuite';
import { slide as Menu } from 'react-burger-menu';
import {styles} from './styles'
const NavComponent = () => {

	return(
		<>
			<Col mdHidden={'true'} lgHidden={'true'}  xs={10} md={'d-none'}>
				<Menu right  width={ '100%' } styles={ styles } outerContainerId={ "outer-container" }>
					<a id="home" className="menu-item" href="/">Inicio</a>
					<a id="about" className="menu-item" href="/about">Portas</a>
					<a id="contact" className="menu-item" href="/contact">Empresa</a>
					<a id="contact" className="menu-item" href="/contact">Contato</a>
				</Menu>
			</Col>
			<Col smHidden={'true'} xs={10}>
				<Nav style={{width: '100%'}}>
					<Nav.Item>Home</Nav.Item>
					<Nav.Item>Portas</Nav.Item>
					<Nav.Item>Empresa</Nav.Item>
					<Nav.Item>Contato</Nav.Item>

				</Nav>
			</Col>
		</>
	);
}

export default NavComponent;
