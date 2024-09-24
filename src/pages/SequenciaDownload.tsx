import { Footer } from "../components/Footer"
import Header from "../components/Header"
import { sequencias } from "../constants/sequencias"

export const SequenciaDonwload = () => {


    return (
        <div className="h-screen w-full flex flex-col justify-center text-center items-center bg-neutral">
            <Header></Header>
            <h2 className="font-semibold border-b-2 w-1/5 pb-2 mt-4 text-3xl border-b-secondary-light">
                Selecione a sequência que deseja baixar
            </h2>
            <div className="h-full mt-8 flex">
                <select name="sequencias" className="w-96 h-10 p-2 shadow-md">
                    {sequencias.map(s => 
                        <option key={s} value={s}>{s}</option>
                    )}
                </select>
                <button className="bg-primary hover:bg-primary-light cursor-pointer text-neutral p-4 h-10 flex text-center items-center justify-center shadow-md">
                    Baixar
                </button>
            </div>
            <Footer></Footer>
        </div>
    )
}