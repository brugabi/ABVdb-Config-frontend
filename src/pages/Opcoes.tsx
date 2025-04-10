import { useNavigate } from "react-router-dom"
import { Bloco } from "../components/Bloco"
import { Footer } from "../components/Footer"
import { Opt } from "../constants/opcoes"
import Header from "../components/Header"
import dnaBackground from "../assets/svgs/iconePrincipal.svg"

export const Opcoes = () => {
    const navigate = useNavigate();

    const handleClick = (link: string | undefined, rota: string | undefined) => {
        if (link) {
          window.open(link, "_blank");
        } else {
            if(rota)
          navigate(rota);
        }
      };

    return(
      <>
        <div className="min-h-screen w-full flex flex-col text-center items-center  bg-neutral ">
            <Header></Header>
            <main className="flex-grow w-full flex flex-col items-center  max-w-screen-2xl mb-6">
            <h2 className="font-semibold border-b-2 w-1/5 m-6 text-3xl border-b-secondary-light ">Opções</h2>
                <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 px-4">
                {Opt.map( o => 
                <Bloco 
                    key={o.title}
                    className="w-full h-48 flex-col text-xl gap-6 font-semibold bg-secondary hover:bg-secondary-light cursor-pointer rounded-xl" 
                    title={o.title} 
                    img={o.img}
                    onClick={() => handleClick(o.link, o.rota)}
                    >
                </Bloco>
                )}
                </div>
                </main>
            <Footer></Footer>
            </div>
            </>
    )
}