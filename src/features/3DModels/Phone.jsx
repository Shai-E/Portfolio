import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Portfolio/phone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.MobilePhone_Phone_Main_0.geometry} material={nodes.MobilePhone_Phone_Main_0.material} />
            <mesh geometry={nodes.MobilePhone_Phone_Emission_0.geometry} material={nodes.MobilePhone_Phone_Emission_0.material} />
            <mesh geometry={nodes.MobilePhone_Phone_Alpha_0.geometry} material={nodes.MobilePhone_Phone_Alpha_0.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Portfolio/phone-transformed.glb')
