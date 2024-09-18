import { Footer } from "../components/Footer"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { Bloco } from "../components/Bloco"

export const Home = () => {
    const navigate = useNavigate();
    const onBlockClick = (url : string) => {
        navigate(url);
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center bg-primary-light">
            <Header></Header>
            <div className="flex flex-row flex-wrap content-center w-full m-auto
            items-center justify-center bg-primary-light h-full">

            <Bloco className="h-2/5 w-2/5 bg-secondary flex-col font-bold" 
                             title="Comece com o pipeline de obtenção dos dados!"
                             img="src\assets\svgs\gears.svg"></Bloco>

            <Bloco className="h-2/5 w-2/5 bg-primary cursor-pointer hover:bg-primary-light"
                             onClick={() => onBlockClick("/opcoes")} 
                             title="Não era o que procurava? Acesse aqui mais opções"
                             img=""></Bloco>

            <Bloco className="h-2/5 w-2/5 bg-secondary-light flex-col-reverse font-bold"
                             title="Ou acesse aqui o ABVdb!" 
                             img="src\assets\svgs\database.svg"></Bloco>
                             
            <Bloco className="h-2/5 w-2/5 bg-primary flex-col"
                             img="src\assets\svgs\tools-folder.svg"></Bloco>
            


            </div>
            <Footer></Footer>
            </div>
    )
}