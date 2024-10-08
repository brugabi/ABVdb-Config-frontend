import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Opcoes } from "./pages/Opcoes"
import { SequenciaDonwload } from "./pages/SequenciaDownload"
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
        <Route element={<Login></Login>} path="/"></Route>
        <Route element={<Home></Home> } path="/home"/>
        <Route element={<Opcoes></Opcoes>} path="/opcoes"></Route>
        <Route element={<SequenciaDonwload></SequenciaDonwload>} path="/download"></Route>
        <Route element={<ErrorPage></ErrorPage>} path="*"></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
