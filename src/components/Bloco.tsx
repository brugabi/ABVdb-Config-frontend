interface BlocoProps{
    title?: string,
    className: string,
    img : string,
    
    onClick?: () => void
}

export const Bloco = ({title, img, className, onClick} : BlocoProps) => {
    return(
    <div onClick={onClick} className={`items-center justify-center text-center flex ${className}`}>
        <h2 className="">{title}</h2>
        <img className="w-2/5" src={img} alt="" />
    </div>
    )
}