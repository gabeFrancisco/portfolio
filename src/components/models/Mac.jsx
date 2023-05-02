/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mac.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/mac.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['apple-ibook-2001_1'].geometry} material={materials.Aluminum} />
        <mesh geometry={nodes['apple-ibook-2001_2'].geometry} material={materials.Apple_logo} />
        <mesh geometry={nodes['apple-ibook-2001_3'].geometry} material={materials.White_plastic} />
        <mesh geometry={nodes['apple-ibook-2001_4'].geometry} material={materials.LCD} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/mac.glb')
