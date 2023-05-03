/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pc.glb
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio/assets/models/pc.glb");
  return (
    <group {...props} dispose={null}>
       {/* <Html
          rotation={[90 * (Math.PI / 45), 1.58, 0]}
          wrapperClass="pc"
          transform
          distanceFactor={0.2}
          position={[0.47, 0, 0]}
          // rotateX={0.25}
        >
          <iframe src="https://www.codepunker.com/terminal"></iframe>
        </Html> */}
      <group
        position={[1.01, -0.92, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.11, -0.02, -0.33]}
      >
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube003_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube003_4.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials["Material.001"]}
        position={[0.58, -0.45, 0]}
        scale={[0.27, 0.27, 0.33]}
        zIndexRange={[1,1]}

      >
      </mesh>
    </group>
  );
}

useGLTF.preload("/portfolio/assets/models/pc.glb");