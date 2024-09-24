import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usuario } from "../api/usuario";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";

interface FormData {
  email: string;
  senha: string;
}

export const Forms = () => {
  const navigate = useNavigate();
  const users = usuario;
  const [showPassword,setShowPassword] = useState(false);
  const imgRef = useRef<HTMLImageElement|null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const user = users.find(
      (u) => u.email === data.email && u.senha === data.senha
    );
    console.log(data);
    if (user) {
      console.log("Usuário encontrado");
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos");
      reset();
    }
  };

  const handleShowChange = () => {
    setShowPassword(p => !showPassword)
    
  }

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = imgRef.current.src.includes("verSenhaNao.svg")
        ? "src/assets/svgs/verSenha.svg"
        : "src/assets/svgs/verSenhaNao.svg";
    }
  },[showPassword])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-around flex-col w-full h-full">
      <div className="items-center flex flex-col">
        <img  src="src/assets/icone.png "className="size-48 rounded-full " />
        <h2 className="border-b-4 rounded pb-2 text-4xl inline-block border-primary-light">Login</h2>
      </div>
      <div className="flex gap-4 flex-col w-full h-1/2 items-center">
        <label className="text-left w-3/5 font-bold text-2xl flex-col flex gap-3">
          Email
          <input
            className="h-10 p-2 border-2 font-normal border-black text-xl"
            type="text"
            placeholder="Insira seu email"
            {...register("email", { required: "Email é obrigatório" })}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </label>
        <label className="text-left w-3/5 font-bold text-2xl flex-col flex gap-3 ">
          Senha
          <div className="relative w-full">
            <input
              className="h-10 p-2 border-2 font-normal border-black text-xl w-full"
              type={showPassword ? "text" : "password"}
              placeholder="Insira sua senha"
              minLength={4}
              maxLength={12}
              {...register("senha", { required: "Senha é obrigatória" })}
              
            />
            <button type="button"
                 className="size-6 right-0 top-0 translate-y-1/3 -translate-x-1/2 absolute"
                 onClick={handleShowChange} 
                 ><img className="w-full h-full" 
                       src="verSenhaNao.svg"
                       ref={imgRef}></img>
                 
            </button>
          </div>
          {errors.senha && <span className="text-red-500 text-xs">{errors.senha.message}</span>}
        </label>
        <Button className="h-10 w-48 mt-6" type="submit">
          Logar
        </Button>
      </div>
    </form>
  );
};
