import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Ferramentas } from "./pages/Ferramentas"
import { ErrorPage } from "./pages/ErrorPage"
import {  useState } from "react"
import { UserContext, UserProvider } from "./contexts/UserContext"
import { ProtectedRoute } from "./guards/ProtectedRoute"

interface user{
  email: string,
  senha: string,
}

function App() {
 

  return (
  
    <UserProvider>
    <BrowserRouter>
    <Routes>
      
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<ProtectedRoute><Home></Home></ProtectedRoute>} path="/"/>
        <Route element={<ProtectedRoute><Ferramentas></Ferramentas></ProtectedRoute>} path="/ferramentas"></Route>
        <Route element={<ErrorPage></ErrorPage>} path="*"></Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
    
    
  )
}

export default App
