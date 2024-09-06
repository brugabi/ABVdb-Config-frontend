interface inputProps{
    type: "text" | "password",
    name: string,
    placeholder: string,
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({name,type, placeholder, onChange, value}: inputProps) => {
    return(
        <>
        <label className="text-left w-3/5 font-bold text-2xl flex-col flex gap-3" htmlFor={name}>{name}
        <input className="h-10 p-2 border-2 font-normal border-black text-xl " value={value}required id={name}
            onChange={onChange} name={name} type={type} placeholder={placeholder}/>
        </label>
        </>
    )
}