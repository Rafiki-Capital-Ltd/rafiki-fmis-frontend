import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, FarmProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<FarmProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FarmProvider>
		</AuthProvider>
	</React.StrictMode>
);
