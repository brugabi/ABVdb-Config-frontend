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
        <div className="h-screen w-full flex flex-col justify-center bg-neutral text-3xl">
            <Header></Header>
            <div className="flex flex-row flex-wrap content-center w-4/6  m-auto
            items-center justify-center h-full">
            <div className=" h-5/6 w-3/6">
            <Bloco className="h-3/6 w-full bg-secondary flex-col font-bold" 
                             title="Comece com o pipeline de obtenção dos dados!"
                             img="src\assets\svgs\gears.svg"></Bloco>

            <Bloco className="h-3/6 w-full bg-secondary-light flex-col-reverse font-bold"
                             title="Ou acesse aqui o ABVdb!" 
                             img="src\assets\svgs\database.svg"></Bloco>
    </div>
            <div className="h-5/6 w-3/6 text-white bg-primary cursor-pointer hover:bg-primary-light"
            onClick={() => onBlockClick("/opcoes")} >
            <Bloco className="h-3/6 w-full flex-col-reverse"
                             
                             title="Não era o que procurava? Acesse aqui mais opções"
                             img="src/assets/svgs/file-circle-question-solid.svg"></Bloco>
            <Bloco className="h-3/6 w-full flex-col"
                             img="src\assets\svgs\tools-folder.svg"></Bloco>
                             <h3>Mais Ferramentas</h3>
            </div>
            

            </div>
            <Footer></Footer>
            </div>
    )
}