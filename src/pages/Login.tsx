import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Forms } from "../components/Forms"
import logoUneb from "../assets/logoUneb-removebg-preview.png"
import logoG2BC from "../assets/g2bc.png"
export const Login = () => {
    return(

    <div className="bg-primary w-screen h-screen flex flex-col justify-around ">
        <div className="h-auto flex justify-between mt-4 ">
            <img src={logoG2BC} className="absolute bottom-0 left-8 rounded-lg top-4 w-48 h-24 object-fill"></img>
            <img src={logoUneb} className="absolute right-8 rounded-lg bg-neutral top-4 w-48 h-24 object-fill "></img>
            </div>
            <div className="flex justify-center items-center h-4/5 w-full m-auto 2xl: w-3/4">

            <div className="h-full w-2/6 bg-secondary flex flex-col gap-12 text-center justify-center items-center">
            <h2 className="font-extrabold flex items-center text-4xl gap-2">
                <img src="src\assets\svgs\iconePrincipal.svg" className="w-16"></img>
                ABVdb&Config
            </h2>
                <img src="src\assets\login-background.jpg" alt="" />
            <h2 className="font-extrabold text-4xl">Administração</h2>
            </div>
            <div className="h-full w-2/6 bg-neutral flex flex-col text-center items-center">
                <Forms></Forms>
               
            </div>
        </div>
        <Footer></Footer>
        </div>
    
    
    )
}