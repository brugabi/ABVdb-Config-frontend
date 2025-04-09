import { Footer } from "../components/Footer"
import { Forms } from "../components/Forms"
import logoUneb from "../assets/logoUneb-removebg-preview.png"
import logoG2BC from "../assets/g2bc.png"
export const Login = () => {
    return(

    <div className="bg-primary w-screen h-screen flex flex-col justify-around ">
            <img src={logoG2BC} className="hidden absolute left-8 rounded-lg top-4 w-64 h-32 ct:block"></img>
            <img src={logoUneb} className="hidden absolute right-8 rounded-lg top-4 bg-neutral w-64 w-64 h-32 ct:block"></img>
                       
            <div className="flex justify-center items-center h-4/5 w-full m-auto 2xl:w-3/4 ">

            <div className="hidden h-full w-2/6 bg-secondary lg:flex flex-col gap-12 text-center justify-center items-center">
            <h2 className="font-extrabold flex items-center text-4xl gap-2">
                <img src="src\assets\svgs\iconePrincipal.svg" className="w-16"></img>
                ABVdb&Config
            </h2>
                <img src="src\assets\login-background.jpg" alt="" />
            </div>
            <div className="h-full w-5/6 bg-neutral flex flex-col text-center items-center rounded-md lg:w-2/6  md:rounded-none ">
                <Forms></Forms>
               
            </div>
        </div>
        <Footer></Footer>
        </div>
    
    
    )
}