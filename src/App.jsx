import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, PersistSession, Protected, PersistFarm } from './components';
import {
	Animals,
	Assets,
	Sales,
	Consumption,
	Crops,
	Dashboard,
	Farms,
	Login,
	Production,
	Register,
	VerifyEmail,
	Home,
} from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/verify' element={<VerifyEmail />} />
				<Route element={<PersistSession />}>
					<Route path='/' element={<Home />} />
					<Route element={<Protected />}>
						<Route path='/farms' element={<Farms />} />
						<Route path='/dashboard/:farmId' element={<Sidebar />}>
							<Route element={<PersistFarm />}>
								<Route index element={<Dashboard />} />
								<Route path='assets' element={<Assets />} />
								<Route path='animals' element={<Animals />} />
								<Route path='crops' element={<Crops />} />
								<Route path='consumption' element={<Consumption />} />
								<Route path='production' element={<Production />} />
								<Route path='sales' element={<Sales />} />
								<Route path='farms' element={<Farms />} />
							</Route>
						</Route>
					</Route>
				</Route>
			</Routes>
		</>
	);
}

export default App;
