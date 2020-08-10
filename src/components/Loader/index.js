import React from 'react';
import { Loader } from 'rsuite';

import { ContainerVh100 } from '../../styles/containers';

const LoaderComponent = () => (
	<div style={ContainerVh100}>
		<Loader size="md" />
	</div>
);

export default LoaderComponent;
