import { useState } from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {isLogin ? (
          <Login onSwitchToSignUp={() => setIsLogin(false)} />
        ) : (
          <SignUp onSwitchToLogin={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  )
}

export default App
