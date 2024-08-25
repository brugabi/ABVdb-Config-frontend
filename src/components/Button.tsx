interface btnProps{
    children: React.ReactNode
}

export const Button = ({children}: btnProps) => {
    return(
        <button className="bg-primary-light w-32 text-white p-1">
            {children}
        </button>
    )
}