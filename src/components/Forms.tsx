import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usuario } from "../api/usuario";
import { Button } from "./Button";

interface FormData {
  email: string;
  senha: string;
}

export const Forms = () => {
  const navigate = useNavigate();
  const usuarios = usuario;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const user = usuarios.find(
      (u) => u.email === data.email && u.senha === data.senha
    );
    console.log(data);
    if (user) {
      console.log("Usuário encontrado");
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

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
          <input
            className="h-10 p-2 border-2 font-normal border-black text-xl"
            type="password"
            placeholder="Insira sua senha"
            minLength={4}
            maxLength={12}
            {...register("senha", { required: "Senha é obrigatória" })}
          />
          {errors.senha && <span className="text-red-500 text-xs">{errors.senha.message}</span>}
        </label>
        <Button className="h-10 w-48 mt-6" type="submit">
          Logar
        </Button>
      </div>
    </form>
  );
};
