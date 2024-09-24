import { useNavigate } from "react-router-dom";



export default function Header() {
    const navigate =  useNavigate();
    return(
        <header className="w-screen h-12 bg-secondary flex items-center justify-between ">
            <div className="flex gap-2 ml-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src="src/assets/logoSite.png" className="h-8 w-8"></img>
            <p className="text-black font-bold text-xl">ABVdb&Config</p>
           </div>
            <img src="src/assets/icone.png" className="size-8 mr-2 rounded-full" ></img>
        </header>
    )
}