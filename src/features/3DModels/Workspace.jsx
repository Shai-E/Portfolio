import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap'

export default function Model(props) {
  const mainref = useRef(null)
  const { nodes, materials } = useGLTF('/Portfolio/workspace-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} ref={mainref}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
        <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
        <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
        <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material} />
        <mesh geometry={nodes.Object_7.geometry} material={nodes.Object_7.material} />
        <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
        <mesh geometry={nodes.Object_9.geometry} material={nodes.Object_9.material} />
        <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
        <mesh geometry={nodes.Object_11.geometry} material={nodes.Object_11.material} />
        <mesh geometry={nodes.Object_12.geometry} material={nodes.Object_12.material} />
        <mesh geometry={nodes.Object_13.geometry} material={nodes.Object_13.material} />
        <mesh geometry={nodes.Object_14.geometry} material={nodes.Object_14.material} />
        <mesh geometry={nodes.Object_15.geometry} material={nodes.Object_15.material} />
        <mesh geometry={nodes.Object_16.geometry} material={nodes.Object_16.material} />
        <mesh geometry={nodes.Object_17.geometry} material={nodes.Object_17.material} />
        <mesh geometry={nodes.Object_18.geometry} material={nodes.Object_18.material} />
        <mesh geometry={nodes.Object_19.geometry} material={nodes.Object_19.material} />
        <mesh geometry={nodes.Object_20.geometry} material={nodes.Object_20.material} />
        <mesh geometry={nodes.Object_21.geometry} material={nodes.Object_21.material} />
        <mesh geometry={nodes.Object_22.geometry} material={nodes.Object_22.material} />
        <mesh geometry={nodes.Object_23.geometry} material={nodes.Object_23.material} />
        <mesh geometry={nodes.Object_24.geometry} material={nodes.Object_24.material} />
        <mesh geometry={nodes.Object_25.geometry} material={nodes.Object_25.material} />
        <mesh geometry={nodes.Object_26.geometry} material={nodes.Object_26.material} />
        <mesh geometry={nodes.Object_27.geometry} material={nodes.Object_27.material} />
        <mesh geometry={nodes.Object_28.geometry} material={nodes.Object_28.material} />
        <mesh geometry={nodes.Object_29.geometry} material={nodes.Object_29.material} />
        <mesh geometry={nodes.Object_30.geometry} material={nodes.Object_30.material} />
        <mesh geometry={nodes.Object_31.geometry} material={nodes.Object_31.material} />
        <mesh geometry={nodes.Object_32.geometry} material={nodes.Object_32.material} />
        <mesh geometry={nodes.Object_33.geometry} material={nodes.Object_33.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/Portfolio/workspace-transformed.glb')
