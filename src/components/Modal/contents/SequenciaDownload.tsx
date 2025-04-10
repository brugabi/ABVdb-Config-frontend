import { Button } from "../../Button"

import { sequencias } from "../../../constants/sequencias"

export const SequenciaDownload = () => {
    return (
        <>
            <h2 className="font-semibold border-b-2  pb-2 mt-4 text-xl border-b-secondary-light">
                Selecione a sequência que deseja baixar
            </h2>
            <div className="h-full mt-8 flex">
                <select name="sequencias" className="w-96 h-10 p-2 shadow-md">
                    {sequencias.map(s => 
                        <option key={s} value={s}>{s}</option>
                    )}
                </select>
                <Button className= "cursor-pointer p-4 h-10 flex text-center items-center justify-center shadow-md">
                    Baixar
                </Button>
            </div>
        
        </>
    )
}