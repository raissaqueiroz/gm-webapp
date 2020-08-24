import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" top="true" component={Home} />
			<Route exact path="/portas" top="true" component={Servicos} />
			<Route exact path="/empresa" top="true" component={Empresa} />
			<Route exact path="/contato" top="true" component={Contato} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
