import React from "react";

import {
  CameraControls,
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
        fov: 60,
        near: 1,
        far: 2500,
        position: [0, 2, 4],
      }}
    >
      {/* <ambientLight /> */}

      <PerspectiveCamera>
        {/* <OrbitControls
        // minAzimuthAngle={-Math.PI / 9}
        // maxAzimuthAngle={Math.PI / 9}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI - Math.PI / 2}
        /> */}
        {/* <Environment preset=""/> */}
        <PresentationControls
          global
          config={{ mass: 1, tension: 50, friction: 12 }}
        >
          <Stage
            preset="rembrandt"
            shadows="contact"
            intensity={0.5}
            environment="sunset"
            adjustCamera
          >
            <group rotation={[-0.2, 4.71, 0]}>
              <primitive object={model.scene}>
                <Html
                  // as="div"
                  occlude
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
          </Stage>
        </PresentationControls>
      </PerspectiveCamera>
    </Canvas>
  );
};

export default Computer;
