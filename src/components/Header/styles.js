import { colors } from '../../styles/colors';

export const ContainerHeader = {
	width: '100%',
	position: 'fixed',
	zIndex: 99999,
	top: 0,
	background: colors.light,
	height: 120,
	boxShadow: '1px 1px 4px 1px rgba(76,86,82, 0.4)',
	// padding: '0 5%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center'
}


export const ContainerLogo = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center'
}

export const Logo = {
	width: 100,
	height: 100,
}

