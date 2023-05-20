import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import {
	Animals,
	Assets,
	Crops,
	Dashboard,
	Farms,
	Login,
	Register,
	VerifyEmail,
} from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/verify' element={<VerifyEmail />} />
				<Route path='/farms' element={<Farms />} />
				<Route path='/dashboard' element={<Sidebar />}>
					<Route index element={<Dashboard />} />
					<Route path='/dashboard/*' element={<VerifyEmail />} />
					<Route path='/dashboard/assets' element={<Assets />} />
					<Route path='/dashboard/animals' element={<Animals />} />
					<Route path='/dashboard/crops' element={<Crops />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
