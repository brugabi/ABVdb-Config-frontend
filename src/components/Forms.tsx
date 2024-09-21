import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"
import { Icone } from "./Icone";
import { useForm } from "react-hook-form";

interface FormData{
    email:string,
    senha: string,
}
export const Forms = () => {

    const {
        register,        
        handleSubmit,   
        formState: { errors },
        clearErrors,
      } = useForm<FormData>();



    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    return(
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-around flex-col w-full h-full ">
        <div className="items-center flex flex-col">
            <Icone className="size-48"></Icone>
            <h2 className="border-b-4 rounded pb-2 text-4xl inline-block border-primary-light">Login</h2>
        </div>
        <div className="flex gap-4 flex-col w-full h-1/2 items-center">
            <Input 
                {...register("email", { required: "Email é obrigatório" })}
                name="Email"
                type="text"
                placeholder="Insira seu email">   
                </Input>  
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            <Input 
                {...register("senha", { required: "Senha é obrigatória" })}
                name="Senha"
                type="password"
                placeholder="Insira sua senha"></Input>
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <Button className="h-10 w-48 mt-6" type="submit">Logar</Button>
        </div>
    </form>

    )
}