import { Footer } from "../components/Footer"
import { Forms } from "../components/Forms"
import background from "../assets/login-background.jpg"
import iconePrincipal from "../assets/svgs/iconePrincipal.svg"

export const Login = () => {
    return(

    <div className="bg-primary w-screen h-screen flex flex-col justify-around ">
                       
            <div className="flex justify-center items-center h-4/5 w-full m-auto 2xl:w-3/4 ">

            <div className="hidden h-full w-2/6 bg-secondary lg:flex flex-col gap-12 text-center justify-center items-center">
            <h2 className="font-medium flex items-center text-4xl gap-2">
                <img src={iconePrincipal} className="w-16"></img>
                ABVdb&Config
            </h2>
                <img src={background} alt="" />
            </div>
            <div className="h-full w-5/6 bg-neutral flex flex-col text-center items-center rounded-md lg:w-2/6  md:rounded-none ">
                <Forms></Forms>
               
            </div>
        </div>
        <Footer></Footer>
        </div>
    
    
    )
}