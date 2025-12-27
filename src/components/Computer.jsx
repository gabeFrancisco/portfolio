import React from "react";

import {
  Bounds,
  CameraControls,
  Center,
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Computer = () => {
  const model = useGLTF("/portfolio/assets/pc.glb");
  return (
    <Canvas
      // frameloop="demand"
      className="rounded-lg"
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 1, 2],
      }}
    >
      {/* <ambientLight /> */}
      {/* <PerspectiveCamera> */}

      <OrbitControls
        enablePan={false} // Desabilita arrastar lateralmente
        enableZoom={true} // Habilita o zoom
        makeDefault // Define como o controlador principal
        minDistance={0.2} // Limite mínimo de zoom (perto)
        maxDistance={2} // Limite máximo de zoom (longe)
        enableDamping={true} // O "suave" do movimento
        dampingFactor={0.05}
        target={[0, 0.7, 0]}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        // Limites Verticais (Cima/Baixo)
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      {/* <Bounds fit clip observe margin={0.18}> */}
      {/* <PresentationControls
          global
          config={{ mass: 1, tension: 50, friction: 12 }}
        > */}
      <Stage
        preset="rembrandt"
        shadows="contact"
        intensity={0.2}
        environment="sunset"
        adjustCamera={false}
      >
        <Bounds fit clip observe margin={0.22}>
          {/* <Center> */}
            <group rotation={[-0.2, 4.71, 0]}>
              <primitive object={model.scene}>
                <mesh position={[0.066, 0.104, -0.0005]} visible={false}>
                  <boxGeometry args={[0.5, 0.7, 0.01]} />
                </mesh>
                <Html
                  as="div"
                  // occlude
                  wrapperClass="laptop"
                  distanceFactor={0.08}
                  position={[0.066, 0.104, -0.0005]}
                  transform
                  rotation={[0, 90 * (Math.PI / 180), 0]}
                  zIndexRange={[0, 0]}
                >
                  <iframe
                    src="https://gabrielos.netlify.app/"
                    frameborder="0"
                  ></iframe>
                </Html>
              </primitive>
            </group>
          {/* </Center> */}
        </Bounds>
      </Stage>
      {/* </PresentationControls> */}
      {/* </Bounds> */}
      {/* </PerspectiveCamera> */}
    </Canvas>
  );
};

export default Computer;
