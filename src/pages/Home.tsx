import { Footer } from "../components/Footer"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { Bloco } from "../components/Bloco"
import gearsSvg from "../assets/svgs/gears.svg"
import databaseSvg from "../assets/svgs/database.svg"
import toolsFolderSvg from "../assets/svgs/tools-folder.svg"
export const Home = () => {
    const navigate = useNavigate();
    const onBlockClick = (url : string) => {
        navigate(url);
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center bg-neutral text-3xl">
            <Header></Header>
            <div className="flex flex-row flex-wrap content-center w-4/6 h-4/6 m-auto
            items-center justify-center">
            <div className=" h-full w-3/6 shadow-xl 2xl:w-2/6">
            <Bloco className="h-3/6 w-full bg-secondary flex-col font-bold" 
                             title="Comece com o pipeline de obtenção dos dados!"
                             img={gearsSvg}></Bloco>

            <Bloco className="h-3/6 w-full bg-secondary-light flex-col-reverse font-bold"
                             title="Ou acesse aqui o ABVdb!" 
                             img={databaseSvg}></Bloco>
    </div>
            <div className="h-full w-3/6 text-white bg-primary cursor-pointer hover:bg-primary-light shadow-xl
            2xl:w-2/6"
            onClick={() => onBlockClick("/opcoes")} >
            <Bloco className="h-3/6 w-full flex-col-reverse"
                             
                             title="Não era o que procurava? Acesse aqui mais opções"
                             img="src/assets/svgs/file-circle-question-solid.svg"></Bloco>
            <Bloco className="h-3/6 w-full flex-col"
                             img={toolsFolderSvg}></Bloco>
            
            </div>
            

            </div>
            <Footer></Footer>
            </div>
    )
}