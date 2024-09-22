import { useNavigate } from "react-router-dom"
import { Bloco } from "../components/Bloco"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import { Opt } from "../constants/opcoes"

export const Opcoes = () => {
    const navigate = useNavigate();
    return(
        <div className="h-screen w-full flex flex-col justify-center text-center items-center bg-neutral">
            <Header></Header>
            <h2 className="font-semibold border-b-2 w-1/5 pb-2 mt-4 text-3xl border-b-secondary-light">Navegue pelas Opções</h2>
            <div className="h-full w-full flex justify-center mt-16">
                <div className="w-full grid grid-cols-5 content-start justify-start gap-4 max-w-screen-2xl">
                {Opt.map( o => 
                <Bloco 
                    key={o.title}
                    className="w-72 h-52 flex-col text-xl font-semibold bg-secondary hover:bg-secondary-light cursor-pointer" 
                    title={o.title} 
                    img={o.img}
                    onClick={() => navigate(o.rota)}
                    >
                </Bloco>
                )}
                </div>
            </div>
            <Footer></Footer>
            </div>
    )
}