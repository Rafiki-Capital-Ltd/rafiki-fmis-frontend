import './index.css';
import { Routes, Route } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import Register from './auth/Register';
import Login from './auth/Login';
import VerifyEmail from './auth/VerifyEmail';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import PrimeChart from './components/BarChart';

function App() {
	return (
		<>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/verify' element={<VerifyEmail />} />
				<Route path='/dashboard' element={<Sidebar />}>
					<Route index element={<Dashboard />} />
					<Route path='/dashboard/chart' element={<PrimeChart />} />
					<Route path='/dashboard/*' element={<VerifyEmail />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
