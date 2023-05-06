import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Environment, Center, Float } from "@react-three/drei";

export default function TimelineItem({ year, title, details, image }) {
  return (
    <div className="flex flex-col lg:flex-row items-center m-5">
      <div className="mb-10 flex flex-col items-center justify-center object-cover w-7/12 lg:w-3/12">
        <img className="m-10 mx-20" src={image} alt="Logo da tecnologia"/>
      </div>
      <ol className="flex flex-col md-flex-row relative border-l border-stone-200 lg:mx-20">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-900 rounded-full mt-1.5 -left-1.5 border-slate-900 dark:border-white dark:border-white dark:bg-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-slate-900 dark:text-slate-900 dark:bg-white rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white ">
              {title}
            </h3>
          </p>
          <p className="my-2 text-base font-normal text-stone-600 dark:text-stone-300 text-justify">
            {details}
          </p>
        </li>
      </ol>
    </div>
  );
}
