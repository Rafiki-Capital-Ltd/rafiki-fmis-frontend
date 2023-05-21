import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
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
} from './pages';

function App() {
	return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/farms" element={<Farms />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/assets" element={<Assets />} />
          <Route path="/dashboard/animals" element={<Animals />} />
          <Route path="/dashboard/crops" element={<Crops />} />
          <Route path="/dashboard/consumption" element={<Consumption/>} />
          <Route path="/dashboard/production" element={<Production/>} />
          <Route path="/dashboard/sales" element={<Sales />} />
		  <Route path="/dashboard/farms" element={<Farms />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
