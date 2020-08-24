import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
	ContainerAtendimento24,
	ContainerHeaderAtendimento24,
	ContainerServicosParallax,
	ContainerHeaderServicosParallax,
	ContainerCardServicosParallax,
	CardServicosParallax,
	ContainerCardIconServicosParallax,
	ContainerCardDescricaoServicosParallax,
	ContainerPortas,
	ContainerHeaderPortas,
	ContainerGalleryPortas,
	ContainerCardPorta,
	ContainerEmpresa,
	ContainerCardEmpresa,
	CardEmpresa
} from './styles';


import iconInstalacao from '../../assets/images/instalacao.png'
import iconManutencao from '../../assets/images/manutencao.png'
import porta_3 from '../../assets/images/porta_1.jpg';
import porta_2 from '../../assets/images/porta_2.jpg';
import porta_1 from '../../assets/images/porta_3.jpg';

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState('home');

	const handleSelect = (activeKey) => {
		setActive(activeKey);
	}

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<div style={{width: '100%'}}>
			<Header activeKey="home" />
			<AwesomeSlider className="homeCarrossel" animation="cubeAnimation" style={{height: '400px !important', marginTop: '120px !important'}} >
				<div className="slider_1">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_2">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_3">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg"  className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
					</div>
				</div>
			</AwesomeSlider>
			{/* NOSSOS SERVIÇOS */}
			<Grid style={ContainerAtendimento24}>
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item componentClass={Col} colspan={24} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
						<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Atendimento <span style={{color: '#004DBB'}}>24 Horas</span> </h2>
						<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#6B6969', fontFamily: 'Roboto', fontWeight: 600}}>
							Com o nosso maior diferencial, solucionamos os problemas inesperados
							de nossos clientes. Damos assistência técnica 24 horas nas portas
							automáticas com atendimento especializado.
						</strong>
					</FlexboxGrid.Item >
				</FlexboxGrid>
			</Grid>
			<Grid style={ContainerServicosParallax} className="parallax">
				<FlexboxGrid justify="center">
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
						<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Nossos Serviços</h2>
						<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#FFF', fontFamily: 'Roboto', fontWeight: 600}}>Entregamos uma variedade de serviços, agregando para nossos clientes o compromisso com serviços de eficiência e qualidade!</strong>
					</FlexboxGrid.Item>
				</FlexboxGrid>
				<FlexboxGrid  justify="space-around" style={ContainerCardServicosParallax}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={10} style={CardServicosParallax}>
						<div style={ContainerCardIconServicosParallax}>
							<img src={iconInstalacao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>INSTALAÇÃO</h3>
							<p style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Realizamos instalações de portas automáticas e manuais com os melhores profissionais e produtos. Deixamos o cliente satisfeito com o trabalho apresentado.</p>
						</div>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={10} style={CardServicosParallax}>
						<div style={ContainerCardIconServicosParallax}>
							<img src={iconManutencao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>MANUTENÇÃO</h3>
							<p style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}>Com nossos profissionais, entregamos um serviço com qualidade de forma que a manutenção faça o produto desempenhar um bom funcionamento. Desta forma, melhorando o prolongamento de sua vida útil, evitando transtornos inesperados.</p>
						</div>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</Grid>

			{/* NOSSAS PORTAS */}

			<FlexboxGrid justify="center" style={ContainerPortas}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 80}}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Nossas <span style={{color: '#004DBB'}}>Portas</span> </h2>
				</FlexboxGrid.Item>
				<FlexboxGrid justify="space-between">
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={6} style={ContainerCardPorta}>
						<img src={porta_1} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</FlexboxGrid.Item >
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={6} style={ContainerCardPorta}>
						<img src={porta_2} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</FlexboxGrid.Item >
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={6} style={ContainerCardPorta}>
						<img src={porta_3} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</FlexboxGrid.Item >
				</FlexboxGrid>
				{/* <div style={ContainerHeaderPortas, { width: '20%'}}>
					<Button size="lg" className="btn-saiba-mais-portas">Saiba Mais</Button>
				</div> */}
			</FlexboxGrid>
			{/* Nossos Trabalhos */}
			<FlexboxGrid className="rs-hidden-xs rs-hidden-sm" justify="center" style={{...ContainerPortas, marginBottom: 150}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Alguns de Nossos <span style={{color: '#004DBB'}}>Trabalhos</span> </h2>
				</FlexboxGrid.Item>
				<FlexboxGrid justify="space-around" align="middle" style={{paddingTop: 150, paddingLeft: '10%', paddingRight: '10%'}}>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={24} md={7} style={{marginBottom: 10}}>
						<img src={porta_1} style={{width: '100%', height: '100%'}} />
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</FlexboxGrid>
			<Footer/>
		</div>

	);
}
