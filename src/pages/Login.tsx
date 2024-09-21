import { Footer } from "../components/Footer"
import { Forms } from "../components/Forms"
import { Logo } from "../components/Logo"

export const Login = () => {
    return(

    <div className="bg-primary w-screen h-screen flex flex-col justify-around ">
        <div className="h-auto flex justify-between mt-4">
            <Logo src="src/assets/g2bc.png" className="absolute bottom-0 left-8 rounded-lg top-4 w-64 h-32"></Logo>
            <Logo src="src/assets/logoUneb-removebg-preview.png" className="absolute right-8 rounded-lg bg-neutral top-4 w-64 h-32"></Logo>
            </div>
            <div className="flex justify-center items-center h-4/5 w-full m-auto">
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