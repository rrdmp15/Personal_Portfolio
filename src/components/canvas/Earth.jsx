import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./cute_home_robot/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor='black' />
      <spotLight
        position={[-20, 5, 6]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive 
        object={earth.scene}
        scale={1.2}
        position-y={-1}
        rotation-y={0}
      />
    </mesh>
    
  )
}

const EarthCanvas = () =>{
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position : [-4, 3, 6]
      }}
    >
      <Suspense fallback = { <CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas