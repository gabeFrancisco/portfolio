import React, { Suspense } from "react";
import Me from "../../public/assets/me.png";

export default function Intro() {
  return (
    <>
      <div className="p-3 flex flex-col items-center lg:flex-row lg:p-10 mb-10  justify-center">
        <div className="p-10 lg:p-20 flex flex-col items-center">
          <img
            className="w-64 lg:w-80 border-4 rounded-full border-slate-300 object-fill shadow-xl glass"
            src={Me}
            alt=""
          />
          
         
        </div>

        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 px-10">
          <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold dark:text-white">
            Olá, me chamo Gabriel Francisco
          </h1>
          <p className="text-base md:text-xl mb-3 font-medium font-bold">
            Desenvolvedor Fullstack
          </p>
          <p className="text-sm max-w-xl mb-3 font-bold">
            "Apaixonado por tecnologia, resolvendo problemas reais através do
            código..."
          </p>
          <br />
          <p className="text-sm max-w-xl mb-6 font-medium">
            Como um amante de tecnologia e curioso desde a infância, sempre
            procurei saber como as coisas funcionavam. Aos 10 anos de idade tive
            meu primeiro contato com um computador e ali começou minha jornada.
            Assim como qualquer criança da minha época, sempre fui aficcionado
            por video-games. Comecei então a criar meus primeiros jogos para
            computador("utilizando a infâme engine The Games Factory").
          </p>
          <p className="text-sm max-w-xl mb-6 font-medium">
            Então, quando fiz 18, depois de longos anos sem contato com
            computação, reascendi a minha paixão quando tive meu primeiro
            contato com Python. E como de costume, as nossas primeiras linhas de
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
    </>
  );
}
