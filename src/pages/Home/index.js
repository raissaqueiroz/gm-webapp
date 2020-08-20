import React, { useEffect, useState } from 'react';
import { Button, Col  } from 'rsuite';
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
	ContainerCardDescricaoServicosParallax,
	ContainerPortas,
	ContainerHeaderPortas,
	ContainerGalleryPortas,
	ContainerCardPorta,
	ContainerEmpresa,
	ContainerCardEmpresa,
	CardEmpresa
} from './styles';

import img_3 from '../../assets/images/slide_1.jpg';
import img_2 from '../../assets/images/slide_2.jpg';
import img_1 from '../../assets/images/slide_3.jpg';
import iconInstalacao from '../../assets/images/instalacao.png'
import iconManutencao from '../../assets/images/manutencao.png'
import porta_3 from '../../assets/images/porta_1.jpg';
import porta_2 from '../../assets/images/porta_2.jpg';
import porta_1 from '../../assets/images/porta_3.jpg';
import iconEmpresaQualidade from '../../assets/images/qualidade.png';
import iconEmpresa24H from '../../assets/images/24H.png';
import iconEmpresaGarantia from '../../assets/images/garantia.png';
import api from '../../services/api';

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState('home');

	const handleSelect = (activeKey) => {
		setActive(activeKey);
	}

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);

		async function teste(){
			try{

				const response = await api.get('/posts');

				console.log(response)
			} catch(error){
				console.log(error);
			}
		}

		teste();
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header active onSelect={handleSelect} />
			<AwesomeSlider animation="cubeAnimation" style={{height: '400px !important', marginTop: '120px !important'}} >
				<div className="slider_1">
					<div>
						<h2>Há mais de 17 Anos no Mercado de Portas Automáticas</h2>
						<Button size="lg" className="btn-saiba-mais rs-col-xs-10 rs-col-md-6">Fale Conosco</Button>
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
						<Button size="lg"  className="btn-saiba-mais">Fale Conosco</Button>
					</div>
				</div>
			</AwesomeSlider>
			{/* NOSSOS SERVIÇOS */}
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
			{/* NOSSAS PORTAS */}
			<div style={ContainerPortas}>
				<div style={ContainerHeaderPortas}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Nossas <span style={{color: '#004DBB'}}>Portas</span> </h2>
				</div>
				<div style={ContainerGalleryPortas}>
					<div style={ContainerCardPorta}>
						<img src={porta_1} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</div>
					<div style={ContainerCardPorta}>
						<img src={porta_2} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</div>
					<div style={ContainerCardPorta}>
						<img src={porta_3} style={{width: '250px', height: '250px'}} />
						<strong style={{padding: '20px 5%', textAlign: 'center', fontSize: '1.2rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}>Porta Automática de Enrolar Fechada</strong>
					</div>
				</div>
				<div style={ContainerHeaderPortas, { width: '20%'}}>
					<Button size="lg" className="btn-saiba-mais-portas">Saiba Mais</Button>
				</div>
			</div>
			{/* Nossos Trabalhos */}
			<div style={{...ContainerPortas, height: 1500}}>
				<div style={ContainerHeaderPortas}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> Alguns de Nossos <span style={{color: '#004DBB'}}>Trabalhos</span> </h2>
				</div>
				<div style={{...ContainerGalleryPortas, flexWrap: 'wrap', padding: '20px 10%'}}>
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />
					<img src={porta_1} style={{width: '30%', height: '30%'}} />

				</div>
			</div>
			{/* A EMPRESA */}
			<div style={ContainerEmpresa}>
				<div style={{...ContainerHeaderAtendimento24}}>
					<h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#565454', fontFamily: 'SegoeUI', fontWeight: 700}}> A <span style={{color: '#004DBB'}}>Empresa</span> </h2>
					<strong style={{marginTop: 40, textAlign: 'center', fontSize: '1.4rem', color: '#6B6969', fontFamily: 'Roboto', fontWeight: 600}}>
						Localizada em Duque de Caxias, Rio de Janeiro, a GM Esquadrias teve inicio de seus primeiros serviços np ano de 2003, com montagens de portas de enrolar manuais e automáticas.
					</strong>
				</div>
				<div style={ContainerCardEmpresa}>
					<div style={CardEmpresa}>
						<img src={iconEmpresaQualidade} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>QUALIDADE E RAPIDEZ</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Oferecemos serviços com profissionais altamente treinados e qualificados, buscando zelar a satisfação e nossos clientes.</p>
					</div>
					<div style={CardEmpresa}>
						<img src={iconEmpresa24H} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>ASSISTÊNCIA 24H</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Nosso maior diferencial é o atendimento 24 horas. Passamos maior segurança, disponibilidade e qualidade para nossos clientes.</p>
					</div>
					<div style={CardEmpresa}>
						<img src={iconEmpresaGarantia} style={{marginBottom: 20, width: '5rem'}} />
						<h3 style={{textAlign: 'center', color: '#00419F', fontFamily: 'Helvetica', fontSize: '1.2rem'}}>GARANTIA</h3>
						<p style={{textAlign: 'center', color: '#707070', fontFamily: 'Helvetica', fontSize: '1rem'}}> Em confiança da qualidade que é oferecida em nossos serviçis, damos a garantia de 1 ano em nossas instalações.</p>
					</div>
				</div>
			</div>
		</>

	);
}
