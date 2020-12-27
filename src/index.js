import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import 'rsuite/dist/styles/rsuite-default.css';
import "animate.css/animate.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>,
	document.getElementById('root')
);
