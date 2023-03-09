import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function ThreeScene(): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      //   meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y -= 0.01;
    }
  });

  const texture = new THREE.TextureLoader().load(require("../../assets/node.png"));
  const geometry = new THREE.SphereGeometry(1.5);
  const material = new THREE.MeshBasicMaterial({  transparent: true, opacity: 1, color: 'none', map: texture });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function Skill(): JSX.Element {
  return (
    <Canvas>
      <ThreeScene />
    </Canvas>
  );
}

export default Skill;
