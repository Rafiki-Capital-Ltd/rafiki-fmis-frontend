import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, VerifyEmail } from './pages';

import { BarChart, Sidebar } from './components';
import { Dashboard } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/verify' element={<VerifyEmail />} />
				<Route path='/dashboard' element={<Sidebar />}>
					<Route index element={<Dashboard />} />
					<Route path='/dashboard/*' element={<VerifyEmail />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
