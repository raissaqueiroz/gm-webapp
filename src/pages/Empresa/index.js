import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconEmpresaQualidade from '../../assets/images/qualidade.png';
import iconEmpresa24H from '../../assets/images/24H.png';
import iconEmpresaGarantia from '../../assets/images/garantia.png';

import {
	ContainerEmpresa,
	CardEmpresa

} from './styles';

export default function Empresa(){
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="empresa" />
			<FlexboxGrid justify="center" className="parallaxEmpresa" style={{paddingBottom: 150,  paddingTop: 150, marginTop: '120px !important'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
					<h2 style={{textAlign: 'left', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>A Empresa</h2>
					<strong style={{marginTop: 40, textAlign: 'left', fontSize: '1.2rem', color: '#FFF', fontFamily: 'Roboto', fontWeight: 100}}>
						Localizada em Duque de Caxias, Rio de Janeiro, a GM Esquadrias teve inicio de seus primeiros serviços no ano de 2003,
						com montagens de portas de enrolar manuais e automáticas.
					</strong>
				</FlexboxGrid.Item>
				<FlexboxGrid justify="space-around">
					<FlexboxGrid.Item componentClass={Col} colspan={20} md={7} style={CardEmpresa}>
						<img src={iconEmpresaQualidade} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>QUALIDADE E RAPIDEZ</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Oferecemos serviços com profissionais altamente treinados e qualificados, buscando zelar a satisfação e nossos clientes.</p>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={20} md={7} style={CardEmpresa}>
						<img src={iconEmpresa24H} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>ASSISTÊNCIA 24H</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Nosso maior diferencial é o atendimento 24 horas. Passamos maior segurança, disponibilidade e qualidade para nossos clientes.</p>
					</FlexboxGrid.Item>
					<FlexboxGrid.Item componentClass={Col} colspan={20} md={7} style={CardEmpresa}>
					<img src={iconEmpresaGarantia} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>GARANTIA</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Em confiança da qualidade que é oferecida em nossos serviçis, damos a garantia de 1 ano em nossas instalações.</p>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</FlexboxGrid>
			<FlexboxGrid justify="center" style={{background: '#f7f7f7'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 120}}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Clientes <span style={{color: '#004DBB'}}>100% Satisfeitos</span> </h2>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<AwesomeSlider className="empresaCarrossel" animation="cubeAnimation" style={{height: '400px !important', marginTop: '80px !important'}} >
				<div className="empresa_slider_1">
					<FlexboxGrid justify="space-around" align="middle">
						<FlexboxGrid.Item componentClass={Col} colspan={20} md={4}>
							<img style={{width: '10rem', height: '10rem', borderRadius: '10rem', background: '#707070'}} />
						</FlexboxGrid.Item>
						<FlexboxGrid.Item componentClass={Col} colspan={20} md={14}>
							<em style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>"É uma empresa de qualidade e muita eficácia. Sem palavras para o excelente trabalho desempenhado por eles na minha loja."</em>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</div>
				<div className="empresa_slider_1">
					<FlexboxGrid justify="space-around" align="middle">
						<FlexboxGrid.Item componentClass={Col} colspan={20} md={4}>
							<img style={{width: '10rem', height: '10rem', borderRadius: '10rem', background: '#707070'}} />
						</FlexboxGrid.Item>
						<FlexboxGrid.Item componentClass={Col} colspan={20} md={14}>
							<em style={{color: '#707070', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>"É uma empresa de qualidade e muita eficácia. Sem palavras para o excelente trabalho desempenhado por eles na minha loja."</em>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</div>
			</AwesomeSlider>
			<Footer/>
		</>
	);
}
