import { Input } from "./Input"

export const Forms = () => {
    return(
    <>
        <label htmlFor="Email">Email</label>
        <Input name="Email" type="text" placeholder="Insira seu email"></Input>
        <Input name="Senha" type="password" placeholder="Insira sua senha"></Input>
    </>
    )
}