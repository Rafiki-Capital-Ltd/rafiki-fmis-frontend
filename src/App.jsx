import { useState } from 'react'
import './index.css'
import Register from './auth/Register'
import Login from './auth/Login'
import { Routes , Route,} from 'react-router-dom'
import VerifyEmail from './auth/VerifyEmail'
import Dashboard from './components/dashboard'
import Sidebar from './components/Sidebar'
import PrimeChart from './components/BarChart'
import Crops from './components/Crops'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                                       
import TableComponent from './components/TableComponent'
        

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/chart" element={<PrimeChart />} />
          <Route path="/dashboard/*" element={<TableComponent/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App
