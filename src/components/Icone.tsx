interface IconeProps{
    className?:string
}
export const Icone = ({className}: IconeProps) => {


    return(
    
        <img src="src/assets/icone.png" className={`rounded-full ${className}`} ></img>
        
    )
}