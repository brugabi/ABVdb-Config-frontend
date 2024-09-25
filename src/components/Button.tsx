interface btnProps{
    children: React.ReactNode,
    type?: "button" | "submit",
    className?:string,
    onClick?: () => void
    
}

export const Button = ({children, type = "button", className, onClick}: btnProps) => {
    return(
        <button onClick={onClick} type={type} className={`bg-primary text-neutral p-1 hover:bg-primary-light  ${className}`}>
            {children}
        </button>
    )
}