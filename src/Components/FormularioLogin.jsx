import React, { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonGoToRegister from "./ButtonGoToRegister";
import RegistrationSuccessAlert from "./RegistrationSuccessAlert";

function FormularioLogin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  const inicioSesion = async (e) => {
    e.preventDefault();
    console.log(" :", user);
    console.log("Password:", password);

    const data = {
      usuario: user,
      password: password,
    };

    //consumo del servicio
    await axios
      .post("http://89.116.25.43:3500/api/login", data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", resp.data.user.usuario);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <form className="h-[31.25rem] w-[25rem] rounded-tr-[0.625rem] rounded-br-[0.625rem] flex-1 flex justify-center flex-col items-center bg-[#fefefe] accent-violet-500 select-none shadow-md">
          <h4 className="text-[30px] font-bold tracking-[0.125rem] text-[#766ce7] uppercase">
            Ingresar
          </h4>
          <div className="flex justify-center items-center mb-3 mt-8">
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              className="inputs"
              id="user-img"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-[1.875rem]">
            <input
              className="h-10 w-[18.625rem] border-none rounded-[1.25rem] bg-[#e8e6ff] px-[3.125rem] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-[0.625rem] outline-none mt-3"
              id="password-img"
              type="password"
              placeholder="Contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-[1.125rem] flex justify-between gap-[0.313rem]">
            <input
              id="checkbox-pointer"
              className="items-center justify-between cursor-pointer"
              type="checkbox"
              name="remember"
              value="remember"
            />
            <label
              className="cursor-pointer text-[0.75rem] text-[#999999] mr-[6.25rem]"
              htmlFor="checkbox-pointer"
            >
              Recordarme
            </label>
            <a
              className="text-[0.75rem] text-[#999999] ml-auto no-underline hover:text-[#5f53e7]"
              href="*"
            >
              ¿Olvidó la contraseña?
            </a>
          </div>
          <div>
            <ButtonLogin fnInicioSesion={inicioSesion} label="Ingresar" />
          </div>
          <div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
          </div>
          <div>
            <ButtonGoToRegister
              fnIrARegistro={goToRegister}
              label="Registarse"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLogin;
