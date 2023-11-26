import React from 'react'
import './App.css'
import 'animate.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './views/Home'
import SignUp from './views/Auth/SignUp'
import Login from './views/Auth/Login'
import Onboarding from './views/Onboarding'
import Chat from './views/Chat'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <main className=' max-w-7xl mx-auto font-nunito'>
        <Routes>
          <Route path='/' element={<Navigate to='/app' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/onboarding' element={<Onboarding />} />
          <Route path='/auth/login' element={<Login />} />
          <Route
            path='/app'
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path='/app/:id'
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </Router>
  )
}

export default App
