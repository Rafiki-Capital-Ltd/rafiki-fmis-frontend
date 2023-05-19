import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, VerifyEmail } from './pages';

import { BarChart, Sidebar } from './components';
import { Dashboard } from './pages';
import TableComponent from './components/TableComponent';
import RegisterFarm from './pages/RegisterFarm';

function App() {
	return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/*" element={<TableComponent />} />
          <Route path="/dashboard/farmlist" element={<RegisterFarm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
