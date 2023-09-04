import React, { Suspense } from "react";
import Me from "../../public/assets/me.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <>
      <div id="home" className="flex flex-col items-center lg:flex-row lg:p-10 mb-10 justify-center">
        <div
          className="mt-16 mx-10 md:mx-3 rounded-xl shadow-lg bg-gradient-to-r from-slate-100 to-slate-200 dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900
            flex flex-col items-center lg:flex-row lg:p-10 my-5
            justify-center; bg-opacity-20"
        >
          <div className="p-10 lg:p-20 flex flex-col items-center hover:cursor-pointer">
            
            <img
              className="w-64 lg:w-80 border-4 rounded-full border-slate-300 object-fill shadow-xl glass"
              src={Me}
              alt=""
              loading="lazy"
              onClick={() => {
                window.open("https://github.com/gabeFrancisco", "_blank").focus();
              }}
            />
          </div>

          <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-10">
            <h1
              className="text-4xl md:text-7x1 mb-1  
            md:mb-3 font-bold dark:text-white bg-gradient-to-r from-blue-800 via-blue-700 to-green-600
            text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient"
            >
              Olá, me chamo Gabriel Francisco
            </h1>
            <h3
              className="text-base md:text-xl my-7 font-bold lg:text-2xl bg-gradient-to-r from-blue-800 via-blue-700 to-green-600
            text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient"
            >
              <TypeAnimation
                className="text-2xl"
                sequence={[
                  "Desenvolvedor Fullstack",
                  2000,
                  "Arduino e Robótica",
                  2000,
                  "Mobile",
                  2000,
                ]}
                repeat={Infinity}
              />
            </h3>
            <p className="text-md max-w-xl m-3 font-bold text-slate-700 dark:text-slate-300">
              "Apaixonado por tecnologia, resolvendo problemas reais por meio de
              linhas de código..."
            </p>
            <br />
            <p className="text-md max-w-xl mb-6 font-medium">
              Como um amante de tecnologia e curioso desde a infância, sempre
              procurei saber como as coisas funcionavam. Aos 10 anos
              tive meu primeiro contato com um computador e ali começou minha
              jornada. Assim como qualquer criança da minha época, sempre fui
              aficionado por video-games. Comecei então a criar meus primeiros
              jogos para computador("utilizando a infame engine The Games
              Factory").
            </p>
            <p className="text-md max-w-xl mb-6 font-medium">
              Então, quando fiz 18, depois de longos anos sem contato com
              computação, reascendi a minha paixão quando tive meu primeiro
              contato com Python. Como de costume, as nossas primeiras linhas
              de código nós nunca esquecemos. Decidi finalmente que ser
              programador era a minha missão. Programar me fazia e, ainda me faz
              me sentir vivo!
            </p>
            {/* <p>
            Então.. dê uma olhada no meu{" "}
            <a
              href="https://github.com/gabeFrancisco"
              target="_blank"
              className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600"
            >
              Github
            </a>{" "}
            e veja meus projetos!
          </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
