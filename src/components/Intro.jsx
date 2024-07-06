import React, { Suspense } from "react";
import Me from "../../public/assets/me.webp";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-center lg:flex-row lg:p-10"
      >
        <div className="flex flex-col items-center justify-center mx-10 my-5 mt-16 md:mx-3 rounded-xl lg:flex-row lg:p-10 bg-opacity-20">
          <div className="flex flex-col items-center p- lg:p-20 hover:cursor-pointer">
            <img
              className="object-fill w-64 border-4 rounded-full shadow-xl lg:w-80 border-slate-300 glass"
              src={Me}
              alt=""
              loading="lazy"
              onClick={() => {
                window
                  .open("https://github.com/gabeFrancisco", "_blank")
                  .focus();
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center px-10 pt-20 pb-6 text-center">
            <h1 className="mb-1 text-4xl font-bold text-transparent md:text-7x1 md:mb-3 dark:text-white bg-gradient-to-r from-blue-800 via-blue-700 to-green-600 bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient">
              Olá, me chamo Gabriel Francisco
            </h1>
            <h3 className="text-base font-bold text-transparent md:text-xl my-7 lg:text-2xl bg-gradient-to-r from-blue-800 via-blue-700 to-green-600 bg-clip-text dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-300 dark:to-green-400 text-gradient">
              {/* <TypeAnimation
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
              /> */}
            </h3>

            <p className="max-w-xl m-3 font-bold text-md text-slate-700 dark:text-slate-300">
              "Apaixonado por tecnologia, resolvendo problemas reais por meio de
              linhas de código..."
            </p>
            <br />
            <p className="max-w-xl mb-6 font-medium text-md">
              Como um amante de tecnologia e curioso desde a infância, sempre
              procurei saber como as coisas funcionavam. Aos 10 anos tive meu
              primeiro contato com um computador e ali começou minha jornada.
              Assim como qualquer criança da minha época, sempre fui aficionado
              por video-games. Comecei então a criar meus primeiros jogos para
              computador("utilizando a infame engine The Games Factory").
            </p>
            <p className="max-w-xl mb-6 font-medium text-md">
              Então, quando fiz 18, depois de longos anos sem contato com
              computação, reascendi a minha paixão quando tive meu primeiro
              contato com Python. Como de costume, as nossas primeiras linhas de
              código nós nunca esquecemos. Decidi finalmente que ser programador
              era a minha missão. Programar me fazia e, ainda me faz me sentir
              vivo!
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
