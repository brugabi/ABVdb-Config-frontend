import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { Icone } from "./Icone";

export const Forms = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email, senha)
    }
    return(
    <form onSubmit={handleSubmit} className="flex justify-around flex-col w-full h-full ">
        <div className="items-center flex flex-col">
            <Icone className="size-48"></Icone>
            <h2 className="border-b-4 rounded pb-2 text-4xl inline-block border-primary-light">Login</h2>
        </div>
        <div className="flex gap-4 flex-col w-full h-1/2 items-center">
            <Input 
                value={email}
                name="Email"
                type="text"
                placeholder="Insira seu email"
                onChange={handleEmailChange}></Input>        
            <Input 
                value={senha}
                name="Senha"
                type="password"
                placeholder="Insira sua senha"
                onChange={handleSenhaChange}></Input>
            <Button className="h-10 w-48 mt-6" type="submit">Logar</Button>
        </div>
    </form>

    )
}