import React from "react";
import Title from "./Title";

export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto flex justify-center">
      <div className="flex justify-center items-center m-7">
        <Title>Gostou do meu perfil? Entre em contato!</Title>
      </div>
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/2ffe61c1-e991-4ca5-8727-2f1f7905a5db"
          method="POST"
          className="m-4 p-8 flex flex-col items-stretch w-full md:w-7/12 "
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="my-2 p-4 bg-transparent border border-slate-400 dark:border-slate-300 rounded-md focus:outline-none"
          />
          <textarea
            className="my-2 p-4 bg-transparent border border-slate-400 dark:border-slate-300 rounded-md focus:outline-none"
            name="message"
            placeholder="Escreva sua mensagem aqui!"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <small className="my-3">
            Serviço de envio de mensagens ofericido gratuitamente* por{" "}
            <a
              href="https://getform.io/"
              target="_blank"
              className="underline text-blue-700 hover:text-blue-500 visited:text-blue-700 dark:text-blue-600 dark:hover:text-blue-300 dark:visited:text-violet-400"
            >
              GetForm.io
            </a>
            !
          </small>
          <button
            className="text-center inline-block px-12 py-3 
          w-max text-base font-medium 
          rounded-md text-white bg-gradient-to-r from-blue-700 via-blue-600 to-green-500
          to-cyan-500 drop-shadow-md 
          dark:bg-gradient-to-r dark:from-blue-900 dark:via-blue-800 dark:to-green-800 drop-shadow-md"
          >
            Enviar!
          </button>
        </form>
      </div>
    </div>
  );
}
