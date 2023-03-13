import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

type ThreeSceneProps = {
  path: any;
};

function ThreeScene({ path }: ThreeSceneProps): JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);
  const [move, setMove] = useState(false);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 4.75;
    }
  }, []);

  useFrame(({ mouse }) => {
    if (move && meshRef.current) {
      mouse.x > 0 ? (meshRef.current.rotation.y += 0.025) : (meshRef.current.rotation.y -= 0.025);
    }
  });

  const texture = new THREE.TextureLoader().load(path);
  const geometry = new THREE.SphereGeometry(1.5);
  const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1, color: "#ffffff", map: texture });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      onPointerOver={({ movementX, movementY }) => {
        setMove((prevState) => !prevState);
        if (meshRef.current) meshRef.current.rotation.y = 4.75;
      }}
 
    />
  );
}

function Skill({ path }: ThreeSceneProps): JSX.Element {
  return (
    <Canvas style={{ width: 100, height: 100 }}>
      <ThreeScene path={path} />
    </Canvas>
  );
}

export default Skill;
