import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
            <div className="text-8xl text-red-400">Página não encontrada</div>
            <Link className="text-2xl text-blue-400 hover:text-blue-200 underline" to="/home">Clique Aqui para Voltar</Link>
        </div>
    )
}