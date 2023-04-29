import React from "react";

export default function PortfolioItem({ title, imgUrl, stack, description }) {
  return (
    <div className="border-2 border-stone-400 rounded-md mt-2 shadow-2xl drop-shadow-2xl">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full md:h-48 object-contain cursor-pointer p-7"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
          {title}
        </h3>

        <p className="text-base md:text-xl mb-3 font-medium font-bold">
          {description}
        </p>
      </div>
      <div  className="w-full p-4">
        <p>
          {stack?.map((item) => (
            <span className="inline-block m-1 px-2 py-1 font-semibold border-2 border-stone-700 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
