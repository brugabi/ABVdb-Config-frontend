import { OpcaoI } from "../interfaces/opcoes"

export const Opt:OpcaoI[] = [{
    title: "Repositório de Arquivos",
    img: "src/assets/driveIcon.png",
    type: "link",
    action: "https://drive.google.com/drive/folders/1jhEb0sqxsORQl8WzSihZt9Bx2GKch176?usp=sharing"
},
{
   title: "Histórico de operações",
   img: "src/assets/svgs/history-list-svgrepo-com.svg", 
   type: "link",
   action: "/"
},
{
    title: "Baixar XML",
    img: "src/assets/svgs/download-window-svgrepo-com.svg",
    //rota: "/sequenciasbaixar"
    type: "modal",
    action: "baixarSequencias"

},
{
    title : "Tratamento de dados virais",
    img: "src/assets/svgs/xml-svgrepo-com.svg",
    type: "link"
},

{
    title : "Acessar o Genome Detective",
    img : "src/assets/design inicial site adm.png",
    type: "link",
    action: "https://www.genomedetective.com"
},
{
    title: "Validação dos dados tratados",
    img : "src/assets/svgs/circle-check-regular(1).svg",
    type: "link"
},
{
    title: "Anotação das proteínas",
    img: "src/assets/design inicial site adm(1).png",
    type: "link"
}
]