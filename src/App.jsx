import { useState } from 'react'
import './index.css'
import Register from './auth/Register'
import Login from './auth/Login'
import { Routes , Route,} from 'react-router-dom'
import VerifyEmail from './auth/VerifyEmail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
    </>
  );
}

export default App
