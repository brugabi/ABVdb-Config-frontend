import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Ferramentas } from "./pages/Ferramentas"
import { ErrorPage } from "./pages/ErrorPage"
import { useState } from "react"

interface user{
  email: string,
  senha: string,
}

function App() {
  const [user, setUser] = useState<user>();
  

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Home></Home> } path="/"/>
        <Route element={<Ferramentas></Ferramentas>} path="/ferramentas"></Route>
        <Route element={<ErrorPage></ErrorPage>} path="*"></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
