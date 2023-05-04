import React from "react";

export default function PortfolioItem({ title, imgUrl, stack, description, github }) {
  return (
    <div className=" hover:cursor-pointer rounded-xl m-1 shadow-2xl glass dark:bg-blue-950 dark:bg-opacity-60 dark:backdrop-filter: blur(80px) flex flex-col "
      onClick={() => { window.open(github, '_blank').focus();}}
    >
      <img
      style={{
        borderRadius: '1.5rem'
      }}
        src={imgUrl}
        alt="portfolio"
        className="p-3 md:h-48 object-contain cursor-pointer overflow-hidden rounded-xl"
      />
      <div className="p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>

        <p className="text-base md:text-md mb-3 font-medium font-bold">
          {description}
        </p>
      </div>
      <div className="w-full p-4">
        <p>
          {stack?.map((item) => (
            <span className="inline-block m-1 px-2 py-1 font-semibold border-2 border-stone-700 dark:border-stone-200 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
