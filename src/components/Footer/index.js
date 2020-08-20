import React from 'react';
import { Footer } from 'rsuite';

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

import logo from '../../assets/images/logo.png';
import iconLocalizacao from '../../assets/images/localizacao.png'
import iconTelefone from '../../assets/images/contato.png'
import iconFacebook from '../../assets/images/facebook.png'
import iconInstagram from '../../assets/images/instagram.png'

const FoorterComponent = ({ active, onSelect }) => (
	<Footer>
		<div style={ContainerHeader}>
			<div style={ContainerLogo}>
				<img src={logo} style={Logo} />
			</div>
			<div style={ContainerContato}>
				{/* Localização */}
				<div style={ContainerLocalizacao}>
					<div style={ContainerIconLocalizacao}>
						<img src={iconLocalizacao} style={IconLocalizacao} />
					</div>
					<div className="contato-descricao" style={ContainerDescricaoLocalizacao}>
						<h4>Rua Aleatporio do Desconhecido</h4>
						<span>Duque de Caxias, RJ</span>
					</div>
				</div>
				{/* Telefones */}
				<div style={ContainerTelefone}>
					<div style={ContainerIconTelefone}>
						<img src={iconTelefone} style={IconTelefone} />
					</div>
					<div style={ContainerDescricaoTelefone}>
						<h4 style={{lineHeight: '15px', letterSpacing: '.1rem'}}>(21) 1234-5678</h4>
						<h4 style={{ letterSpacing: '.1rem'}}>(21) 1234-5678</h4>
					</div>
				</div>
				<div style={{ContainerSocial}}>
					<img src={iconFacebook} style={IconFacebook} onClick={() => window.location.href='https://facebook.com'}/>
					<img src={iconInstagram} style={IconInstagram} onClick={() => window.location.href='https://instagram.com'} />
				</div>
			</div>
		</div>
	</Footer>
);

export default FooterComponent;
