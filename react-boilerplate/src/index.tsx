import './styles/main.scss';

import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import theme from 'utils/mui-theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
