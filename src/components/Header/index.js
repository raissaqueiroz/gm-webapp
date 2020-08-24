import React from 'react';
import { Header, Grid, Row, Col } from 'rsuite';

import Nav from '../../components/Nav';

import {
	ContainerHeader,
	ContainerLogo,
	Logo,
	ContainerContato,
	ContainerLocalizacao,
	ContainerIconLocalizacao,
	IconLocalizacao,
	ContainerDescricaoLocalizacao,
	ContainerTelefone,
	ContainerIconTelefone,
	IconTelefone,
	ContainerDescricaoTelefone,
	ContainerSocial,
	IconFacebook,
	IconInstagram


} from './styles';

import '../../styles/fonts.css';

import logo from '../../assets/images/logo_nova.png';
import iconLocalizacao from '../../assets/images/localizacao.png'
import iconTelefone from '../../assets/images/contato.png'
import iconFacebook from '../../assets/images/facebook.png'
import iconInstagram from '../../assets/images/instagram.png'

const HeaderComponent = ({ activeKey }) => (
	<Header style={{marginBottom: 120}}>
		<Grid  style={ContainerHeader} id="outer-container">
			<Col xs={3} style={ContainerLogo}>
				<img src={logo} style={Logo} />
			</Col>
			<Nav activeKey={activeKey} />
		</Grid>
	</Header>

);

export default HeaderComponent;
