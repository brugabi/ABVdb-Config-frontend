import { Bloco } from "../components/Bloco"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import { Opt } from "../constants/opcoes"

export const Opcoes = () => {
    
    return(
        <div className="h-screen w-full flex flex-col justify-center text-center items-center bg-neutral">
            <Header></Header>
            <h2 className="font-semibold border-b-2 w-1/5 pb-2 mt-4 text-3xl border-b-secondary-light">Navegue pelas Opções</h2>
            <div className="h-full w-full flex justify-center mt-16">
                <div className="w-4/5 flex gap-4 flex-wrap content-start">
                {Opt.map( o => 
                <Bloco 
                    className="w-72 h-52 flex-col text-xl font-semibold bg-secondary hover:bg-secondary-light cursor-pointer" 
                    title={o.title} 
                    img={o.img}>
                </Bloco>
                )}
                </div>
            </div>
            <Footer></Footer>
            </div>
    )
}