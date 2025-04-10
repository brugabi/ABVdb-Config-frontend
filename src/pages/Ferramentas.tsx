import { useNavigate } from "react-router-dom"
import { Bloco } from "../components/Bloco"
import { Footer } from "../components/Footer"
import { Opt } from "../constants/options"
import Header from "../components/Header"
import { OptionsType } from "../interfaces/opcoes"
import { useState } from "react"
import { Modal} from "../components/Modal/Modal"
import { modalContents } from "../constants/modalContents"

export const Ferramentas = () => {
    const navigate = useNavigate();
  
    const [modalId, setModalId] = useState<string | null>(null)

    const handleClick = (type:OptionsType, action?:string ) => {
      switch (type) {
        case "link":
          if (action) window.open(action, "_blank");
          break;
        case "rota":
          if (action) navigate(action);
          break;
        case "modal":
          console.log(action)
          if (action) {setModalId(action)
          console.log(modalContents[action])
          }
          break;
        default:
          break;
      }
        
      };

    return(
      <>
        <div className="min-h-screen w-full flex flex-col text-center items-center  bg-neutral ">
            <Header></Header>
            <main className="flex-grow w-full flex flex-col items-center  max-w-screen-2xl mb-6">
                <div className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 px-4 mt-16">
                {Opt.map( opt => 
                <Bloco 
                    key={opt.title}
                    className="w-full h-48 flex-col text-xl gap-6 font-semibold bg-secondary hover:bg-secondary-light cursor-pointer rounded-xl" 
                    {...opt}
                    onClick={() => handleClick(opt.type, opt.action)}
                    >
                </Bloco>
                )}

                {modalId && modalContents[modalId] && (
                  <Modal
                  isOpen={true}
                  
                  onClose={() => setModalId(null)}
                  >
                    {modalContents[modalId].content}
                  </Modal>
                )}
                </div>
               
                </main>
            <Footer></Footer>
            </div>
            </>
    )
}