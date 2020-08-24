import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar  } from 'rsuite';
import Iframe from 'react-iframe';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconTelefone from '../../assets/images/contato.png'
import iconWhatsapp from '../../assets/images/wpp.png'

export default function Contato(){
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="contato" />
			<FlexboxGrid justify="flex-start" className="parallaxContato" style={{paddingBottom: 150, marginTop: '120px !important'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={15} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80, marginLeft: '10%'}}>
					<h2 style={{textAlign: 'left', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Entre em Contato!</h2>
					<p style={{marginTop: 40, textAlign: 'left', fontSize: '1.2rem', color: '#FFF', fontFamily: 'Roboto', fontWeight: 100}}>
						Estamos prontos para atende-lo(a)! Entretanto, precisamos que você realize o preenchimento do formulário ao lado.
						Desta forma, retornaremos o contato!
					</p>
					<strong style={{width: '100%', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700, marginTop: 40, fontSize: '1rem' }}>
						<img src={iconTelefone} style={{ width: '2rem', height: '2rem', marginRight: '2%'}} /> (21) 1234 5678 | (21) 1234 5678
					</strong>
					<Button size="lg" className="rs-col-xs-10 rs-col-md-6" style={{background: '#4CAF50', marginTop: 60, color: '#FFF'}}>
						<img src={iconWhatsapp} style={{ width: '2rem', height: '2rem', marginRight: '2%'}} /> Whatsapp
					</Button>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<FlexboxGrid justify="space-around" style={{background: '#f7f7f7'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={20} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 150, paddingBottom: 80}}>
					<Form fluid className="rs-col-xs-24 rs-col-md-24">
						<FormGroup>
							<ControlLabel>Nome</ControlLabel>
							<FormControl name="name" />
						</FormGroup>
						<FormGroup>
							<ControlLabel>E-mail</ControlLabel>
							<FormControl name="email" type="email" />
						</FormGroup>
						<FormGroup>
							<ControlLabel>Telefone</ControlLabel>
							<FormControl name="telefone" type="telephone" />
						</FormGroup>
						<FormGroup>
							<ControlLabel>Mensagem</ControlLabel>
							<FormControl rows={5} name="textarea" componentClass="textarea" />
						</FormGroup>
						<FormGroup>
							<ButtonToolbar>
								<Button style={{alignSelf: 'center'}} className="btn-enviar rs-col-xs-24 rs-col-md-12">Enviar</Button>
							</ButtonToolbar>
						</FormGroup>
					</Form>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={20} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 150, paddingBottom: 80}}>
					<Iframe
						url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14727.327248983573!2d-43.303643581150446!3d-22.660058562203247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9972544a2d8821%3A0xf470d066ebd30b24!2sCampo%20Grande%2C%20Duque%20de%20Caxias%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1598213293273!5m2!1spt-BR!2sbr"
						width="100%" height={500}
					/>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<Footer/>
		</>
	);
}
