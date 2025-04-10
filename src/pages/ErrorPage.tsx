import { Link } from "react-router-dom"
import iconePrincipal from "../assets/svgs/iconePrincipal.svg" // caso queira incluir

export const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-primary text-neutral px-4 text-center">

      <div className="flex items-center gap-4">
        <img src={iconePrincipal} className="w-12 hidden sm:block" alt="Logo" />
        <h1 className="text-4xl sm:text-5xl font-bold">ABVdb&Config</h1>
      </div>

      <div className="text-7xl font-extrabold ">404</div>
      <div className="text-3xl sm:text-4xl font-medium">Página Não Encontrada</div>
      <p className="max-w-md text-lg text-gray-300">
        A página que você está procurando não existe ou foi movida. 
        Tente voltar para a página inicial.
      </p>

      <Link
        to="/"
        className="text-xl sm:text-2xl bg-secondary hover:bg-secondary-light text-white py-4 px-8 rounded-full flex items-center gap-3 transition duration-300 ease-in-out shadow-lg"
      >
        <span className="relative w-0 h-0 border-solid border-transparent border-r-0 border-t-[10px] border-b-[10px] border-l-[20px] border-l-white"></span>
        Voltar à Página Principal
      </Link>
    </div>
  )
}
