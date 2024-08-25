interface inputProps{
    type: "text" | "password",
    name: string,
    placeholder: string,
}

export const Input = ({name,type, placeholder}: inputProps) => {
    return(
        <>
        <label htmlFor={name}></label>
        <input name={name} type={type} placeholder={placeholder}/>
        </>
    )
}