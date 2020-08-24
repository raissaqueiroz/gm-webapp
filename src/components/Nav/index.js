import React from 'react';
import { Nav, Icon , Col } from 'rsuite';
import { slide as Menu } from 'react-burger-menu';
import {styles} from './styles'
const NavComponent = ({ activeKey }) => {
	return(
		<>
			<Col mdHidden={'true'} lgHidden={'true'}  xs={10} md={'d-none'}>
				<Menu right  width={ '100%' } styles={ styles } outerContainerId={ "outer-container" }>
					<a id="home" className={(activeKey == 'home') ? "menu-item active" : "menu-item"} href="/">Inicio</a>
					<a id="about" className={(activeKey == 'portas') ? "menu-item active" : "menu-item"} href="/portas">Portas</a>
					<a id="contact" className={ (activeKey == 'empresa') ? "menu-item active" : "menu-item"} href="/empresa">Empresa</a>
					<a id="contact" className={ (activeKey == 'contato') ? "menu-item active" : "menu-item"} href="/contato">Contato</a>
				</Menu>
			</Col>

			<Col smHidden={'true'} xs={10}>
				<Nav style={{width: '100%'}} activeKey={activeKey}>
					<Nav.Item href="/" eventKey="home">Home</Nav.Item>
					<Nav.Item href="/portas" eventKey="portas">Portas</Nav.Item>
					<Nav.Item href="/empresa" eventKey="empresa">Empresa</Nav.Item>
					<Nav.Item href="/contato" eventKey="contato">Contato</Nav.Item>

				</Nav>
			</Col>
		</>
	);
}

export default NavComponent;
