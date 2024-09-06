interface btnProps{
    children: React.ReactNode,
    type?: "button" | "submit",
    className?:string
}

export const Button = ({children, type = "button", className}: btnProps) => {
    return(
        <button type={type} className={`bg-primary-light text-white p-1 ${className}`}>
            {children}
        </button>
    )
}