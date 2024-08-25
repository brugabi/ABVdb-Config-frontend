import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Login = () => {
    return(
        <div className="bg-primary w-screen h-screen flex justify-center items-center">
            <div className="h-4/5 w-2/6 bg-secondary flex flex-col gap-12 text-center justify-center items-center">
            <h2 className="font-extrabold flex items-center text-4xl gap-2">
                <img src="src\assets\genetic-test-report-svgrepo-com.png" className="w-16"></img>
                ABVdb&Config
            </h2>
                <img src="src\assets\login-background.jpg" alt="" />
            <h2 className="font-extrabold text-4xl">Administração</h2>
            </div>
            <div className="h-4/5 w-2/6 bg-neutral flex flex-col text-center items-center">
            <h3 className="font-extrabold text-4xl border-b-4 border-primary-light">LOGIN</h3>
            <div>
              

            </div>
                <Button>Logar</Button>
               
            </div>
        </div>
    )
}