import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';
import { Cloud, Sky, Html, Stars } from '@react-three/drei';
// import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei'
// import { LayerMaterial, Color, Depth } from 'lamina'
import * as THREE from 'three'

const BuildingModel = () => {
    const gltf = useLoader(GLTFLoader, '/new_york_city._manhattan.glb');
    const model = useRef();
    const { pos, rot } = useControls({
        pos: { value: [0.4, 0.4, 1.9], step: 0.1 },
        rot: { value: [0, 0.2, 0], step: 0.1 },
      });
    
    return(
        <mesh ref={model} position={pos} rotation={rot}>
        <primitive object={gltf.scene} scale={[.5, .5, .5]} />
        </mesh>
    )
}

const MovingLight = () => {
    const lightRef = useRef();
  
    // Use the useFrame hook to update the light position on each frame
    useFrame((state, delta) => {
      if (lightRef.current) {
        // Update the light's position here
        // You can change the light's position based on time or any other parameter
        const time = state.clock.elapsedTime;
        const radius = 15;
        const xPos = radius * Math.cos(time * 0.5);
        const zPos = radius * Math.sin(time * 0.5);
        lightRef.current.position.set(xPos, 10, zPos);
      }
    });
  
    return (
      <pointLight ref={lightRef} intensity={1} color="white" />
    );
  };
  

const BelleModel = () => {
    const gltf = useLoader(GLTFLoader, '/sf_girl.glb');
    const model = useRef();
const { pos, rot } = useControls("belle",{
       pos: { value: [0.3, -0.28, 4.7], step: 0.1 },
       rot: { value: [0, -0.8, 0], step: 0.1 },
      });
    
    return(
        <mesh ref={model} position={pos} rotation={rot}>
        <primitive object={gltf.scene} scale={[.12, .12, .12]} />
        </mesh>
    )
}

const Clounds = () => {
        
        const clouds = [
            // { pos: [0, -4.8, 0], rot: [0.2, 0, 0], color: 'white' },
            // { pos: [4, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
            // { pos: [4, 2.8, 7], rot: [0.1, 0.2, 0], color: 'pink' },
            // { pos: [3, -4.8, 0], rot: [0.1, 0.2, 0], color: 'white' },
            // { pos: [-4.5, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
            // { pos: [0, 4, -10], rot: [0.2, 0, 0], color: 'white' },
            { pos: [8.1, 0, -13], rot: [0.1, 0.2, 0], color: '#C0C0C0' },
            //{ pos: [3, 3.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [-3, 5, -13], rot: [0.2, 0, 0], color: '#C0C0C0' },
            { pos: [8, 5.5, -12], rot: [0.1, 0.2, 0], color: '#C0C0C0' },
            //{ pos: [-7, 4.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            //{ pos: [-15, 5, -13], rot: [0.2, 0, 0], color: 'white' },
            { pos: [15, 5.5, -12], rot: [0.1, 0.2, 0], color: '#C0C0C0' },
            { pos: [-16, 5.5, -12], rot: [0.1, 0.2, 0], color: '#C0C0C0' },
            //{ pos: [-18, 4.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            //{ pos: [-20, 4.5, -17], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [12, 6, -18], rot: [0.15, 0, 0], color: '#C0C0C0' },
            //{ pos: [18, 6, -17], rot: [0.1, 0.1, 0], color: 'white' },
            { pos: [-8, 4.5, -15], rot: [0.2, 0.15, 0], color: '#C0C0C0' },
            { pos: [-12, 5, -18], rot: [0.1, 0.1, 0], color: '#C0C0C0' },
            //{ pos: [20, 6, -16], rot: [0.12, 0.18, 0], color: 'white' },
            //{ pos: [-20, 5, -18], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [22, 4.5, -17], rot: [0.15, 0.1, 0], color: '#C0C0C0' },
            { pos: [-24, 5, -14], rot: [0.1, 0.1, 0], color: '#C0C0C0' },
            //{ pos: [-18, 6.5, -18], rot: [0.1, 0.2, 0], color: 'white' },
            //{ pos: [-22, 6.5, -17], rot: [0.12, 0.18, 0], color: 'white' },
            //{ pos: [28, 6, -19], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [30, 4.5, -15], rot: [0.2, 0.1, 0], color: '#C0C0C0' },
            
           
            // Add more clouds here with different positions, rotations, and colors
          ];
    return(
        <>
        {clouds.map((cloud, index) => (
            <Cloud
              key={index}
              position={cloud.pos}
              rotation={cloud.rot}
              opacity={5}
              speed={0.4} // Rotation speed
              width={0.05} // Width of the full cloud
              depth={1.5} // Z-dir depth
              segments={2} // Number of particles
              color={cloud.color} // Cloud color
            />
          ))}
        </>
    )
}

const Skybox = () => {
    return(
        <Sky
        distance={450000}
        sunPosition={[0, 0, -1]}
        inclination={0.5}
        azimuth={0.25}
        rayleigh={0.1}
        turbidity={1.5}
        mieCoefficient={0.1}
        mieDirectionalG={0.7}
        elevation={0}
        exposure={0.1} // Lower exposure for a darker effect
      />
    )
}

function scene() {
  return (
    <div className="h-screen w-screen relative" >
        <Canvas >
            <ambientLight />
            <pointLight position={[0, 10, 0]} intensity={1} color={'white'} />
            <pointLight position={[0, 10, 0]} intensity={1} color={'black'} />
            <BuildingModel />
            <BelleModel /> 
            <Clounds />
            <MovingLight />
            <Stars
            count={5000} // Number of stars (default=5000)
            radius={100} // Size of the star field (default=100)
            depth={50} // Depth of the star field (default=50)
            factor={2} // Density factor (default=4)
            saturation={1.5} // Saturation level of stars (default=1.5)
            fade // Enable fading effect (default=true)
            />
            <Skybox />
            <Html center>
            <div className=' flex flex-col justify-between items-center'>

            <div className="text-white text-3xl flex flex-col justify-between items-center" style={{
                height: "20vh",
                width: "22vw"
            }}>
                <span className="text-center">WELCOME TO THE WORLD OF TAPPAREUM</span>
               
            </div>
            <button className="bg-[#D7C0AE] text-white py-2 px-4 rounded text-center">
                <span className='pb-4 text-l' >Explore</span>
            </button>
            </div>
            </Html>
          
        </Canvas>
    </div>
  )
}

export default scene