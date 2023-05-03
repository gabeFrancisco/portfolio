/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pc.glb
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio/assets/models/pc.glb");
  return (
    <group
      {...props}
      dispose={null}
      rotation={[90 * (Math.PI / 45), 90 * (Math.PI / 59), 0]}
      position={[0.0, -0.07, 0.]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_2.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_3.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_4.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_5.geometry}
        material={materials["Material.004"]}
      >
        <Html
          rotation={[90 * (Math.PI / 45), 1.58, 0]}
          wrapperClass="pc"
          transform
          distanceFactor={0.3}
          position={[0.05, 0.1, -0.012]}
          scale={[0.1, 0.1, 0.1]}
          rotateY={1.4}
          // rotateX={0.25}
        >
          <iframe src="https://www.codepunker.com/terminal"></iframe>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/portfolio/assets/models/pc.glb");
