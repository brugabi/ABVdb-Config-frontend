import { Footer } from "../components/Footer"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export const Home = () => {
    return(
        <div className="h-screen w-full flex flex-col justify-center bg-primary-light">
            <Header></Header>
            <div className="flex flex-col w-2/4 m-auto
            items-center justify-center bg-primary-light">
                <div>
                    <h3>Comece com o pipeline de
                        obtenção de dados

                        Pra ir pra login coloca /login na url
                    </h3>
                </div>
                <div>
                    <h3>Ou acesse aqui o ABVdb!</h3>
                </div>
            </div>
            <Footer></Footer>
            </div>
    )
}