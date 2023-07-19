import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import { PlaneGeometry } from 'three';


const ShapePreview = ({ points }) => {
  const meshRef = useRef();

  useFrame(() => {
    // Update the position of the mesh in the 3D preview
    if (meshRef.current) {
      meshRef.current.position.set(points[points.length - 1]?.x || 0, points[points.length - 1]?.y || 0, 0);
    }
  });

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {points.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, 0]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="red" />
        </mesh>
      ))}

      <mesh ref={meshRef}>
        <PlaneGeometry args={[1, 1]} />
        <meshBasicMaterial color="blue" transparent opacity={0.5} />
      </mesh>
    </Canvas>
  );
};

export default ShapePreview;