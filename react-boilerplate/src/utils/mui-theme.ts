import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#F37B21',
			contrastText: '#fff',
		},
		secondary: {
			main: '#4F47A6',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 5,
				},
			},
		},
	},
});

export default theme;
