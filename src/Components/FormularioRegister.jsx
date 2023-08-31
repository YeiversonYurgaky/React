import React, { useState } from "react";
import ButtonRegister from "./ButtonRegister";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ConfirmationAlert from "./ConfirmationAlert";

const FormularioRegister = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailU, setEmailU] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registarse = async (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo:", emailU);
    console.log("Usuario:", user);
    console.log("Password:", password);

    const data = {
      nombre: name,
      apellido: lastName,
      email: emailU,
      usuario: user,
      password: password,
    };

    await axios
      .post("http://89.116.25.43:3500/api/usuarios/registrar", data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.result);
        localStorage.setItem("username", resp.data.result.usuario);
        <ConfirmationAlert />;
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <main className="main">
        <form className="h-[31.25rem] w-[25rem] rounded-lg flex justify-center flex-col items-center bg-[#fefefe] select-none shadow-md">
          <h4 className="text-[30px] font-bold tracking-[0.125rem] text-[#766ce7] uppercase">
            Registarse
          </h4>
          <div className="mt-7">
            <input
              className="inputs"
              id="name-img"
              type="text"
              placeholder="Nombre"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mt-7">
            <input
              className="inputs"
              id="lastname-img"
              type="text"
              placeholder="Apellido"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="mt-7">
            <input
              className="inputs"
              id="email-img"
              type="email"
              placeholder="Correo"
              required
              onChange={(e) => {
                setEmailU(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-center mb-3 mt-8">
            <input
              className="inputs"
              id="user2-img"
              type="text"
              placeholder="Usuario"
              required
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="mb-7">
            <input
              className="h-10 w-[18.625rem] border-none rounded-[1.25rem] bg-[#e8e6ff] px-[3.125rem] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-[0.625rem] outline-none mt-3"
              id="password2-img"
              type="password"
              placeholder="Contraseña"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <ButtonRegister fnRegistarse={registarse} label="Registarse" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default FormularioRegister;
