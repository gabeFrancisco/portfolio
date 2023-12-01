import React from "react";

import { motion } from "framer-motion";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function PortfolioItem({
  title,
  imgUrl,
  stack,
  description,
  github,
}) {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="flex flex-row justify-between m-1 shadow-lg hover:cursor-pointer rounded-xl"
    >
      <div
        className="p-10 "
        onClick={() => {
          window.open(github, "_blank").focus();
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-stretch">
          <MouseParallaxChild factorX={0.3} factorY={0.3}>
            <img
              src={imgUrl}
              alt="portfolio"
              loading="lazy"
              className="object-cover shadow-xl cursor-pointer sm:w-32 md:h-40 lg:h-48 2xl:h-72"
            />
          </MouseParallaxChild>

          <div className="p-5">
            <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-3">
              {title}
            </h3>

            <p className="mb-3 text-base text-gray-700 md:text-md dark:text-gray-400">
              {description}
            </p>
            <div className="w-full py-4">
              <p>
                {stack?.map((item, key) => (
                  // <span className="inline-block px-2 py-1 m-1 font-semibold border-2 rounded-md border-stone-700 dark:border-stone-200">
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
        </div>
      </div>
    </MouseParallaxContainer>
  );
}
