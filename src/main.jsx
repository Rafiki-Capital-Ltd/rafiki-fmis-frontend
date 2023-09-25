import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider, FarmProvider } from './context';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<FarmProvider>
				<HashRouter>
					<App />
				</HashRouter>
			</FarmProvider>
		</AuthProvider>
	</React.StrictMode>
);
