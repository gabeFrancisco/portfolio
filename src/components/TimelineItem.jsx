import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Python from "./models/Python";
import {
  OrbitControls,
  Environment,
  Center,
  Sparkles,
  CubeCamera,
  Float,
  SpotLight,
} from "@react-three/drei";

export default function TimelineItem({ year, title, details, model }) {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="m-7 h-60">
        <Canvas>
          <Float
            speed={3}
            rotationIntensity={2}
            floatIntensity={1.3}
            floatingRange={[0, 0.2]}
          >
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              rotateSpeed={0.3}
              autoRotate
              autoRotateSpeed={4}
            />
            <Environment preset="studio" />
            {/* <Sparkles count={300} size={0.3} scale={4}/> */}
            <Center scale={25}>
              <Suspense fallback={null}>{model}</Suspense>
            </Center>
          </Float>
        </Canvas>
      </div>
      <ol className="flex flex-col md-flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
              {year}
            </span>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
              {title}
            </h3>
          </p>
          <p className="my-2 text-base font-normal text-stone-500">{details}</p>
        </li>
      </ol>
    </div>
  );
}