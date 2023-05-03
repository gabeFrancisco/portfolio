/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 flutter.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/portfolio/assets/models/flutter.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]} scale={[0.01, 0.02, 0.08]} rotation={[0.3,0,0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials['Material.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/portfolio/assets/models/flutter.glb')