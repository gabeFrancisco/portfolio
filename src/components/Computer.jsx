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
  const model = useGLTF("/assets/pc.glb");
  return (
    <Canvas
      className="rounded-lg"
      camera={{
        fov: 60,
        near: 0.1,
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
        <Environment preset="warehouse" />
        <PresentationControls global polar={[-0.1, 0.1]} azimuth={[-0.4, 0.2]}>
          <Stage preset="rembrandt" intensity={0.7} environment="city">
            <group rotation={[-0.2, 4.71, 0]}>
              <primitive object={model.scene}>
                <Html
                  as="div"
                  occlude
                  wrapperClass="laptop"
                  distanceFactor={0.08}
                  position={[0.066, 0.104, -0.0005]}
                  transform
                  rotation={[0, 90 * (Math.PI / 180), 0]}
                >
                  <iframe
                    src="https://www.google.com/webhp?igu=1"
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
