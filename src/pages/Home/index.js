import React, { useEffect, useState } from 'react';
import { Message } from 'rsuite';
import Loader from '../../components/Loader';

import { ContainerVh100 } from '../../styles/containers';

export default function Home() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<div style={{ ...ContainerVh100, background: '#3333' }}>
			<Message
				style={{ width: '50%'}}
				className="teste"
				type="info"
				title="Olá,"
				description={
					<p>
						Esse é um componente de exemplo.
						<br />
						<a href="https://rsuitejs.com/components/overview/">Acesse aqui a documentação</a>
					</p>
				}
			/>
		</div>
	);
}
