import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import { Canvas } from "react-three-fiber";

interface ThreeDModelPropsType {
  children: JSX.Element;
  autoRotate?: boolean;
}

const ThreeDModel: React.FC<ThreeDModelPropsType> = ({
  children,
  autoRotate,
}) => {
  return (
    <Canvas>
      <Stage environment={'city'} intensity={0.6}>
        {children}
      </Stage>
      <OrbitControls autoRotate={autoRotate || false} enableZoom={false} />
    </Canvas>
  );
};

export default ThreeDModel;
