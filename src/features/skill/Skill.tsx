import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

type ThreeSceneProps = {
  path: any;
};

function ThreeScene({ path }: ThreeSceneProps): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.02;
    }
  });

  const texture = new THREE.TextureLoader().load(path);
  const geometry = new THREE.SphereGeometry(1.5);
  const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1, color: "none", map: texture });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

function Skill({ path }: ThreeSceneProps): JSX.Element {
  return (
    <Canvas style={{ width: 100, height: 100 }}>
      <ThreeScene path={path} />
    </Canvas>
  );
}

export default Skill;
