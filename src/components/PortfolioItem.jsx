import React from "react";

export default function PortfolioItem({
  title,
  imgUrl,
  stack,
  description,
  github,
}) {
  return (
    <div
      className="hover:cursor-pointer rounded-xl m-1 shadow-lg bg-gradient-to-br from-slate-100 to-slate-200
      dark:bg-gradient-to-tr dark:from-zinc-900 dark:to-zinc-900 dark:bg-opacity-60 flex flex-col justify-between"
      onClick={() => {
        window.open(github, "_blank").focus();
      }}
    >
      <div className="flex flex-col justify-between items-center">
        <img
         
          src={imgUrl}
          alt="portfolio"
          loading="lazy"
          className="md:h-44 object-fill cursor-pointer overflow-hidden shadow-xl xl:h-64"
        />
        <div className="p-5">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>

          <p className="text-base md:text-md mb-3 text-justify">
            {description}
          </p>
        </div>
      </div>
      <div className="w-full p-4">
        <p>
          {stack?.map((item, key) => (
            // <span className="inline-block m-1 px-2 py-1 font-semibold border-2 border-stone-700 dark:border-stone-200 rounded-md">
            //   {item}
            // </span>
            <i
              key={key}
              className={`${item} inline-block m-0 px-1 py-1 text-3xl`}
            ></i>
          ))}
        </p>
      </div>
    </div>
  );
}