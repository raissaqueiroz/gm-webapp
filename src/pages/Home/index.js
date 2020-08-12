import React, { useEffect, useState } from 'react';
import { Button  } from 'rsuite';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Loader from '../../components/Loader';
import Header from '../../components/Header';

import { ContainerVh100 } from '../../styles/containers';
import {
	ContainerAtendimento24,
	ContainerHeaderAtendimento24,
	ContainerServicosParallax,
	ContainerHeaderServicosParallax,
	ContainerCardServicosParallax,
	CardServicosParallax,
	ContainerCardIconServicosParallax,
	ContainerCardDescricaoServicosParallax
} from './styles';

import img_3 from '../../assets/images/slide_1.jpg';
import img_2 from '../../assets/images/slide_2.jpg';
import img_1 from '../../assets/images/slide_3.jpg';
import iconInstalacao from '../../assets/images/instalacao.png'
import iconManutencao from '../../assets/images/manutencao.png'

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
		<>
			<Header active onSelect={handleSelect} />
			<AwesomeSlider animation="cubeAnimation" style={{height: '300px !important'}} >
				<div className="slider_1">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_2">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais">Fale Conosco</Button>
					</div>
				</div>
				<div className="slider_3">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais">Fale Conosco</Button>
					</div>
				</div>
			</AwesomeSlider>
			<div style={ContainerAtendimento24}>
				<div style={ContainerHeaderAtendimento24}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Atendimento <span style={{color: '#004DBB'}}>24 Horas</span> </h2>
					<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#6B6969', fontFamily: 'Roboto', fontWeight: 600}}>
						Com o nosso maior diferencial, solucionamos os problemas inesperados
						de nossos clientes. Damos assistência técnica 24 horas nas portas
						automáticas com atendimento especializado.
					</strong>
				</div>
			</div>
			<div style={ContainerServicosParallax} className="parallax">
				<div style={ContainerHeaderServicosParallax}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Nossos Serviços</h2>
					<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#FFF', fontFamily: 'Roboto', fontWeight: 600}}>Entregamos uma variedade de serviços, agregando para nossos clientes o compromisso com serviços de eficiência e qualidade!</strong>
				</div>
				<div style={ContainerCardServicosParallax}>
					<div style={CardServicosParallax}>
						<div style={ContainerCardIconServicosParallax}>
							<img src={iconInstalacao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>INSTALAÇÃO</h3>
							<p style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Realizamos instalações de portas automáticas e manuais com os melhores profissionais e produtos. Deixamos o cliente satisfeito com o trabalho apresentado.</p>
						</div>
					</div>
					<div style={CardServicosParallax}>
						<div style={ContainerCardIconServicosParallax}>
							<img src={iconManutencao} />
						</div>
						<div style={ContainerCardDescricaoServicosParallax}>
							<h3 style={{color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>MANUTENÇÃO</h3>
							<p style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}>Com nossos profissionais, entregamos um serviço com qualidade de forma que a manutenção faça o produto desempenhar um bom funcionamento. Desta forma, melhorando o prolongamento de sua vida útil, evitando transtornos inesperados.</p>
						</div>
					</div>
				</div>
			</div>
		</>

	);
}
