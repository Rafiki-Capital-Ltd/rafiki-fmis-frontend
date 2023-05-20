import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, VerifyEmail } from './pages';

import { BarChart, Sidebar } from './components';
import { Dashboard } from './pages';
import TableComponent from './components/TableComponent';
import RegisterFarm from './pages/RegisterFarm';
import Animals from './pages/Animals';
import Assets from './pages/Assets';
import Crops from './pages/Crops';

function App() {
	return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/farms" element={<RegisterFarm />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/*" element={<VerifyEmail />} />

          <Route path="/dashboard/assets" element={<Assets />} />
          <Route path="/dashboard/animals" element={<Animals />} />
          <Route path="/dashboard/crops" element={<Crops />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
