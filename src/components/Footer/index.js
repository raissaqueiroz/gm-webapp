import React from 'react';
import { Footer, FlexboxGrid, Col } from 'rsuite';

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
		<FlexboxGrid justify="space-around" align="middle" style={ContainerHeader}>
				{/* Localização */}
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}  style={(window.innerWidth < 992) ? {...ContainerLocalizacao, justifyContent: 'flex-start', paddingLeft: '0px !important', marginLeft: '25%'} : {...ContainerLocalizacao, justifyContent: 'center'}}>
					<div style={ContainerIconLocalizacao}>
						<img src={iconLocalizacao} style={IconLocalizacao} />
					</div>
					<div className="contato-descricao" style={ContainerDescricaoLocalizacao}>
						<h4>Rua Aleatporio do Desconhecido</h4>
						<span>Duque de Caxias, RJ</span>
					</div>
				</FlexboxGrid.Item>
				{/* Telefones */}
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}  style={(window.innerWidth < 992) ? {...ContainerTelefone, justifyContent: 'flex-start', paddingLeft: '0px !important', marginLeft: '25%', marginTop: 20} : {...ContainerTelefone, justifyContent: 'center'}}>
					<div style={ContainerIconTelefone}>
						<img src={iconTelefone} style={IconTelefone} />
					</div>
					<div style={ContainerDescricaoTelefone}>
						<h4 style={{lineHeight: '15px', letterSpacing: '.1rem'}}>(21) 1234-5678</h4>
						<h4 style={{ letterSpacing: '.1rem'}}>(21) 1234-5678</h4>
					</div>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={8}  style={(window.innerWidth < 992) ? {...ContainerSocial, justifyContent: 'flex-start', paddingLeft: '0px !important', marginLeft: '30%', marginTop: 20} : {...ContainerSocial, justifyContent: 'center'}}>
					<img src={iconFacebook} style={IconFacebook} onClick={() => window.location.href='https://facebook.com'}/>
					<img src={iconInstagram} style={IconInstagram} onClick={() => window.location.href='https://instagram.com'} />
				</FlexboxGrid.Item>
				<FlexboxGrid.Item style={{padding: '1% 0', display: 'flex', justifyContent: 'center'}} componentClass={Col} colspan={24} md={24}>
					<h6 style={{marginTop: 60, color: '#FFF', textAlign: 'center'}}>Todos os direitos reservados. 2020.</h6>
				</FlexboxGrid.Item>
				{console.log('vai se fode')}
				{console.log(window.innerWidth <992)}
		</FlexboxGrid>
	</Footer>
);

export default FoorterComponent;
