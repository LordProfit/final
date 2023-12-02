"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/desk/scene.gltf";
  const mesh = useRef(null);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Desk() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Canvas className='h-2xl w-2xl'>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}