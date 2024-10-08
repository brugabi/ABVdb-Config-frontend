import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-8 bg-primary">
            <div className="text-8xl text-neutral">404</div>
            <div className="text-6xl text-neutral">Página Não Encontrada</div>
            <Link className="text-3xl bg-secondary hover:bg-secondary-light text-neutral p-6 rounded-full flex items-center justify-center text-center gap-2"
                to="/home">
                <span className="relative  w-0 h-0 border-solid border-transparent border-r-0 border-t-[10px] border-b-[10px] border-l-[20px] border-l-white"></span>
                Voltar à Página Principal
            </Link>



        </div>
    )
}