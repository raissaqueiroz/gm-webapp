import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../components/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import porta_1 from '../../assets/images/porta_1.jpg';
import porta_2 from '../../assets/images/porta_2.jpg';
import porta_3 from '../../assets/images/porta_3.jpg';

export default function Servicos(){
	const [loading, setLoading] = useState(true);
	const images_1 = [
		{
			original: porta_1,
			thumbnail: porta_1
		},
		{
			original: porta_1,
			thumbnail: porta_1
		},
		{
			original: porta_1,
			thumbnail: porta_1
		},
		{
			original: porta_1,
			thumbnail: porta_1
		},
	];

	const images_2 = [
		{
			original: porta_2,
			thumbnail: porta_2
		},
		{
			original: porta_2,
			thumbnail: porta_2
		},
		{
			original: porta_2,
			thumbnail: porta_2
		},
		{
			original: porta_2,
			thumbnail: porta_2
		},
	];

	const images_3 = [
		{
			original: porta_3,
			thumbnail: porta_3
		},
		{
			original: porta_3,
			thumbnail: porta_3
		},
		{
			original: porta_3,
			thumbnail: porta_3
		},
		{
			original: porta_3,
			thumbnail: porta_3
		},
	];

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="portas" />
			<FlexboxGrid justify="center" className="parallaxPortas" style={{paddingBottom: 100, paddingTop: 150, marginTop: '120px !important'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
					<h2 style={{textAlign: 'left', fontSize: '2.5rem', color: '#FFF', fontFamily: 'SegoeUI', fontWeight: 700}}>Nossas Portas</h2>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<FlexboxGrid justify="space-around" style={{paddingBottom: 150, marginTop: '120px !important', background: '#f7f7f7'}}>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
					<FlexboxGrid justify="space-around">
						{/* Carrossel */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<ImageGallery items={images_1} showFullscreenButton={false} showPlayButton={false} />
						</FlexboxGrid.Item>
						{/* Detalhes */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginBottom: 20}}>Porta de Enrolar Fechada</h2>
								<p style={{fontFamily: 'Helvetica', fontSize: '1rem'}}>
									Tem como finalidade proporcionar privacidade, onde o cliente é beneficiado por mais segurança.
								</p>
							</div>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginTop: 40, marginBottom: 20}}>Especifiações: </h2>
								<div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>8m</span>
										<span>Largura<br/>max.</span>
									</div>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>4m</span>
										<span>Altura<br/>max.</span>
									</div>
								</div>
							</div>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 40}}>
					<FlexboxGrid justify="space-around">
						{/* Carrossel */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<ImageGallery items={images_2} showFullscreenButton={false} showPlayButton={false} />
						</FlexboxGrid.Item>
						{/* Detalhes */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginBottom: 20}}>Porta de Enrolar Tranvision</h2>
								<p style={{fontFamily: 'Helvetica', fontSize: '1rem'}}>
									Porta com maior design, onde os clientes possuem maior visibilidade do inteior de seu estabelecimento. É recomendado em lojas de Shopping e estabelecimento que precise de ventilação.
								</p>
							</div>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginTop: 40, marginBottom: 20}}>Especifiações: </h2>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>8m</span>
										<span>Largura<br/>max.</span>
									</div>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>4m</span>
										<span>Altura<br/>max.</span>
									</div>
								</div>
							</div>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</FlexboxGrid.Item>
				<FlexboxGrid.Item componentClass={Col} colspan={24} md={20} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 40}}>
					<FlexboxGrid justify="space-around">
						{/* Carrossel */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<ImageGallery items={images_3} showFullscreenButton={false} showPlayButton={false} />
						</FlexboxGrid.Item>
						{/* Detalhes */}
						<FlexboxGrid.Item componentClass={Col} colspan={24} md={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 80}}>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginBottom: 20}}>Porta de Enrolar Manual</h2>
								<p style={{fontFamily: 'Helvetica', fontSize: '1rem'}}>
									Porta com maior design, onde os clientes possuem maior visibilidade do inteior de seu estabelecimento. É recomendado em lojas de Shopping e estabelecimento que precise de ventilação.
								</p>
							</div>
							<div>
								<h2 style={{fontFamily: 'Helvetica', color: '#00419F', marginTop: 40, marginBottom: 20}}>Especifiações: </h2>
								<div style={{display: 'flex', justifyContent: 'space-between'}}>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>8m</span>
										<span>Largura<br/>max.</span>
									</div>
									<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
										<span style={{textAlign: 'center', width: '4rem', height: '4rem', borderRadius: '4rem', padding: '25%', background: '#00419F', color: '#FFF', fontFamily: 'Helvetica', fontWeight: 700, fontSize: '1.2rem'}}>4m</span>
										<span>Altura<br/>max.</span>
									</div>
								</div>
							</div>
						</FlexboxGrid.Item>
					</FlexboxGrid>
				</FlexboxGrid.Item>
			</FlexboxGrid>
			<Footer />
		</>
	);
}
