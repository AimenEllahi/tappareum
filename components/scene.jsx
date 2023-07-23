import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';
import { Cloud, Sky, Html } from '@react-three/drei';

const BuildingModel = () => {
    const gltf = useLoader(GLTFLoader, '/TP_WORLD_CONCEPT.gltf');
    const model = useRef();
    // const { pos, rot } = useControls({
    //     pos: { value: [0.3, -1, 0], step: 0.1 },
    //     rot: { value: [0.1, 0, 0], step: 0.1 },
    //   });
    
    return(
        <mesh ref={model} position={[0.3,-1,0]} rotation={[0.1,0,0]}>
        <primitive object={gltf.scene} scale={[2.2, 2.2, 2.2]} />
        </mesh>
    )
}

const BelleModel = () => {
    const gltf = useLoader(GLTFLoader, '/bgmi.glb');
    const model = useRef();
// const { pos, rot } = useControls("belle",{
//        pos: { value: [0, 0, 0], step: 0.1 },
//        rot: { value: [0.2, -0.4, 0.1], step: 0.1 },
//       });
    
    return(
        <mesh ref={model} position={[1.2,-1.3,3.6]} rotation={[0.2, -0.4, 0.1]}>
        <primitive object={gltf.scene} scale={[1, 1, 1]} />
        </mesh>
    )
}

const Clounds = () => {
        
        const clouds = [
            { pos: [0, -4.8, 0], rot: [0.2, 0, 0], color: 'white' },
            { pos: [4, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [4, 2.8, 5], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [3, -4.8, 0], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [-4.5, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
   
            { pos: [0, 4, -10], rot: [0.2, 0, 0], color: 'white' },
            { pos: [4, 3.5, -12], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [3, 3.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [-3, 5, -13], rot: [0.2, 0, 0], color: 'white' },
            { pos: [8, 5.5, -12], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [-7, 4.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [-15, 5, -13], rot: [0.2, 0, 0], color: 'white' },
            { pos: [15, 5.5, -12], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [-16, 5.5, -12], rot: [0.1, 0.2, 0], color: 'pink' },
            { pos: [-18, 4.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
            { pos: [-20, 4.5, -17], rot: [0.1, 0.2, 0], color: 'white' },
            
           
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
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 3, -1]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0.5} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        rayleigh={0.1} // Rayleigh scattering coefficient (default=0.0025)
        turbidity={1.5} // Turbidity factor (default=2)
        mieCoefficient={0.1} // Sun intensity (default=0.005)
        mieDirectionalG={0.7} // Sun direct intensity (default=0.8)
        elevation={0} // Elevation angle of the sun
        exposure={1} // Exposure (default=1)
        />
    )
}

function scene() {
  return (
    <div className="h-screen w-screen relative" >
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 30, 10]} />
            <BuildingModel />
            <BelleModel /> 
            <Clounds />
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