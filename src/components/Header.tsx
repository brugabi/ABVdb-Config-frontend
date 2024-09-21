import { Icone } from "./Icone";
import { Logo } from "./Logo";


export default function Header() {

    return(
        <header className="w-screen h-12 bg-secondary flex items-center justify-between ">
            <div className="flex gap-2 ml-2">
            <Logo src="src/assets/logoSite.png" className="h-8 w-8"></Logo>
            <p className="text-black font-bold text-xl">ABVdb&Config</p>
           </div>
            <Icone className="size-8 mr-2" ></Icone>
        </header>
    )
}