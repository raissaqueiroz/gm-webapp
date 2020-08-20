import React, { useEffect, useState } from 'React';

import Loader from '../../components/Loader';
import Header from '../../components/Header';


export default function Inicio(){
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);

	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<Header />
	);
}
