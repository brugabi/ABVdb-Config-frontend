interface Opcao {
    title: string,
    img: string,
    rota?:string,
    link?:string,
}

export const Opt = [{
    title: "Repositório de Arquivos",
    img: "src/assets/driveIcon.png",
    link: "https://drive.google.com/drive/folders/1jhEb0sqxsORQl8WzSihZt9Bx2GKch176?usp=sharing"
},
{
   title: "Histórico de operações",
   img: "src/assets/svgs/history-list-svgrepo-com.svg", 
   rota: "/"
},
{
    title: "Baixar sequências XML",
    img: "src/assets/svgs/download-window-svgrepo-com.svg",
    rota: "/download"

},
{
    title : "Tratamento de dados virais",
    img: "src/assets/svgs/xml-svgrepo-com.svg",
    rota: "/"
},

{
    title : "Acessar o Genome Detective",
    img : "src/assets/design inicial site adm.png",
    link: "https://www.genomedetective.com"
},
{
    title: "Validação dos dados tratados",
    img : "src/assets/svgs/circle-check-regular(1).svg",
    rota: "/"
},
{
    title: "Anotação das proteínas",
    img: "src/assets/design inicial site adm(1).png",
    rota: "/"
}
]