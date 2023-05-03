/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 htmlcss.glb
*/

import React, { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/portfolio/assets/models/htmlcss.glb");
  return (
    <group {...props} dispose={null}>
      <Center scale={0.8}>
        <group
          position={[2.28, 2.5, 6.6]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.06, -0.05]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_3.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_4.geometry}
            material={materials["Material.004"]}
          />
        </group>
      </Center>
    </group>
  );
}

useGLTF.preload("/portfolio/assets/models/htmlcss.glb");
