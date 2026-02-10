import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routing } from './routing/AppRoutes'
import AuthProvider from './Context/AuthContext'







function App() {
  
  return (
    <>
    <AuthProvider >
    <RouterProvider  router={routing}/>
    </AuthProvider>
      <h1 className="text-3xl text-[#a12929] font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
