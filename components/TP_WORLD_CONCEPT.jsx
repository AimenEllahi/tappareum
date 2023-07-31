/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 TP_WORLD_CONCEPT.gltf
*/

import React, { useRef, useEffect } from "react";
import { PresentationControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";
import * as THREE from "three";


export function Model(props) {
  const { nodes, materials } = useGLTF("/TP_WORLD_CONCEPT.gltf");
  const groupRef = useRef();

  const texture = new THREE.TextureLoader().load("/blue.png");

  const { pos, rot } = useControls("buildings", {
    pos: {
      value: [0, 0, 0],
      step: 0.01,
    },
    rot: { value: [0, 0, 0], step: 0.01 },
  });

  useEffect(() => {
    // Animation duration in seconds
    const duration = 2;

    // Initial position and rotation
    const initialPos = { x: 0, y: -0.3, z: 3 };
    const initialRot = { x: 0, y: 0, z: 0 };

    // Target position and rotation
    const targetPos = { x: 0.09, y: -0.3, z: 3.04 };
    const targetRot = { x: 0.49, y: 0.57, z: 0 };

    // Set the initial position and rotation
    gsap.set(groupRef.current.position, initialPos);
    gsap.set(groupRef.current.rotation, initialRot);

    // Animate to the target position and rotation
    gsap.to(groupRef.current.position, { x: targetPos.x, y: targetPos.y, z: targetPos.z, duration });
    gsap.to(groupRef.current.rotation, { x: targetRot.x, y: targetRot.y, z: targetRot.z, duration });
  }, []);
  return (
    <group {...props}  ref={groupRef} dispose={null} >
      <PresentationControls snap={true}>
        <group position={[-0.089, 0.081, 0]}>
          <mesh
            geometry={nodes["Land-green"].geometry}
            material={materials.green}
          />
          <mesh
            geometry={nodes["Land-Orange"].geometry}
            material={materials.Orange}
          />
        </group>
        <group position={[-0.147, 0.258, -0.033]}>
          <mesh
            geometry={nodes.jake_cntr2.geometry}
            material={nodes.jake_cntr2.material}
            position={[-0.622, -0.083, 0.674]}
          />
          <mesh
            geometry={nodes.JMRwrldwde_1.geometry}
            material={materials.wit}
            position={[-1.227, -0.063, 0.755]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            geometry={nodes.nw14.geometry}
            material={materials.wit}
            position={[-1.84, -0.038, 0.831]}
            scale={[1, 0.335, 1]}
          />
          <mesh
            geometry={nodes.w5_1.geometry}
            material={materials.wit}
            position={[1.415, -0.017, 0.742]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.old.geometry}
            material={materials.wit}
            position={[2.297, 0.001, 0.826]}
            scale={0.606}
          />
          <mesh
            geometry={nodes.JMRwrldwde.geometry}
            material={materials.wit}
            position={[1.573, -0.063, 0.842]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            geometry={nodes.NEW_GLASS.geometry}
            material={materials.wit}
            position={[1.368, 0.258, -0.373]}
            material-color={"#116A7B"}
            rotation={[0, -Math.PI / 2, 0]}
          />

          <group>
          <sprite position={[0.26,0.7700000000000005,0.9200000000000004]} scale={0.03}>
          <spriteMaterial attach="material" map={texture} />
          </sprite>
          <mesh
            name="tag2"
            geometry={nodes.HANDCOCK.geometry}
            material={materials.wit}
            position={[0.177, 0.326, 1]}
          />
          </group>
          
          <mesh
            geometry={nodes.jaker_10.geometry}
            material={materials.wit}
            position={[1.728, -0.068, 1.481]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            geometry={nodes.glen_cntr.geometry}
            material={nodes.glen_cntr.material}
            position={[0.996, -0.083, 1.181]}
          />
          <mesh
            geometry={nodes.JMRwrldwde_2.geometry}
            material={materials.wit}
            position={[0.375, -0.063, 0.842]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            geometry={nodes.Object01.geometry}
            material={materials.wit}
            position={[-0.256, -0.067, 0.848]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            geometry={nodes.sw1.geometry}
            material={nodes.sw1.material}
            position={[1.162, -0.066, 0.634]}
          />
          <mesh
            geometry={nodes.se_4.geometry}
            material={nodes.se_4.material}
            position={[-0.464, -0.06, 0.335]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            geometry={nodes.genericash.geometry}
            material={materials.wit}
            position={[-0.673, -0.068, 1.154]}
          />

          <group>
          <sprite position={[-0.45,0.65, 0.2]} scale={0.03}>
          <spriteMaterial attach="material" map={texture} />
          </sprite>
          <mesh
            name="tag1"
            geometry={nodes.bruce_4.geometry}
            material={materials.wit}
            position={[0.402, -0.228, 0.358]}
            />
          </group>

          <mesh
            geometry={nodes.glen_cnt01.geometry}
            material={nodes.glen_cnt01.material}
            position={[0.884, -0.083, 1.054]}
          />
          <mesh
            geometry={nodes.jaker_9.geometry}
            material={materials.wit}
            position={[0.611, -0.068, 1.05]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            geometry={nodes.ne_3.geometry}
            material={nodes.ne_3.material}
            position={[0.355, -0.071, 0.446]}
          />
          <mesh
            geometry={nodes.jake_cntr.geometry}
            material={nodes.jake_cntr.material}
            position={[0.431, -0.083, 0.997]}
          />
          <mesh
            geometry={nodes.jake_cntr2_2.geometry}
            material={nodes.jake_cntr2_2.material}
            position={[0.161, -0.083, 0.992]}
          />
          <mesh
            geometry={nodes.old_2.geometry}
            material={materials.wit}
            position={[1.125, 0.001, 1.405]}
            scale={0.606}
          />
          <mesh
            geometry={nodes.ne_23.geometry}
            material={materials.wit}
            position={[-0.341, 0.206, 0.064]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.ne_4.geometry}
            material={materials.wit}
            position={[-0.564, 0.098, -0.186]}
            scale={[0.87, 1.309, 0.87]}
          />
          <mesh
            geometry={nodes.homelyaveb.geometry}
            material={materials.wit}
            position={[0.95, 0.071, 0.414]}
            scale={[1, 1.11, 1]}
          />
          <mesh
            geometry={nodes.w4_1_3.geometry}
            material={materials.wit}
            position={[0.501, 0.033, 0.652]}
            scale={[0.55, 0.818, 0.55]}
          />
          <mesh
            geometry={nodes.w4_2_3.geometry}
            material={materials.wit}
            position={[1.48, -0.011, 0.385]}
            scale={[0.74, 0.533, 0.74]}
          />
          <mesh
            geometry={nodes.nw14_2.geometry}
            material={materials.wit}
            position={[0.025, -0.038, 0.763]}
            scale={[1, 0.335, 1]}
          />
          <mesh
            geometry={nodes.w5_1_2.geometry}
            material={materials.wit}
            position={[0.214, -0.017, 0.872]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.dummyroof.geometry}
            material={nodes.dummyroof.material}
            position={[0.326, 0.006, 0.702]}
            scale={0.781}
          />
          <mesh
            geometry={nodes.Detail07.geometry}
            material={materials.wit}
            position={[0.072, -0.072, 0.006]}
            scale={[5.02, 1, 5.02]}
          />
          <mesh
            geometry={nodes.w1_04.geometry}
            material={materials.wit}
            position={[-0.226, 0.206, 0.596]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.nw12.geometry}
            material={materials.wit}
            position={[0.736, 0.071, -0.572]}
            scale={[1, 1.11, 1]}
          />
          <mesh
            geometry={nodes.w4_3_03.geometry}
            material={materials.wit}
            position={[0.091, 0.029, 0.331]}
            scale={0.79}
          />
          <mesh
            geometry={nodes.w5_02.geometry}
            material={materials.wit}
            position={[0.976, -0.017, 0.939]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.w1_01.geometry}
            material={materials.wit}
            position={[1.197, 0.206, 0.498]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.w4_3_01.geometry}
            material={materials.wit}
            position={[0.794, 0.029, 0.411]}
            scale={0.79}
          />
          <mesh
            geometry={nodes.w1_02.geometry}
            material={materials.wit}
            position={[-1.036, 0.206, 0.444]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.w5_01.geometry}
            material={materials.wit}
            position={[0.948, -0.017, 0.336]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.w1_03.geometry}
            material={materials.wit}
            position={[-0.693, 0.206, 0.326]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.w1_1_01.geometry}
            material={materials.wit}
            position={[-0.86, -0.038, 2.016]}
            scale={[1, 0.335, 1]}
          />
          <mesh
            geometry={nodes.w4_2_01.geometry}
            material={materials.wit}
            position={[0.407, -0.011, -0.681]}
            rotation={[0, 1.571, 0]}
            scale={[0.74, 0.533, 0.74]}
          />
          <mesh
            geometry={nodes.w1_1_02.geometry}
            material={materials.wit}
            position={[-0.09, -0.038, 0.764]}
            scale={[1, 0.335, 1]}
          />
          <mesh
            geometry={nodes.w5_03.geometry}
            material={materials.wit}
            position={[0.366, -0.016, 0.797]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.w4_3_02.geometry}
            material={materials.wit}
            position={[0.343, 0.029, 0.178]}
            scale={0.79}
          />
          <mesh
            geometry={nodes.w1_05.geometry}
            material={materials.wit}
            position={[-0.219, 0.206, 0.539]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.glen_cntrA.geometry}
            material={nodes.glen_cntrA.material}
            position={[0.129, -0.083, -0.089]}
          />
          <mesh
            geometry={nodes.genericasA.geometry}
            material={materials.wit}
            position={[0.137, -0.068, 0.079]}
          />
          <mesh
            geometry={nodes.glen_cnt1A.geometry}
            material={nodes.glen_cnt1A.material}
            position={[0.147, -0.083, -0.085]}
          />
          <mesh
            geometry={nodes.THIN_MAN_1.geometry}
            material={materials.wit}
            position={[1.231, -0.071, 0.118]}
          />
          <mesh
            geometry={nodes.homelyaveA.geometry}
            material={materials.wit}
            position={[0.426, 0.071, 0.404]}
            scale={[1, 1.11, 1]}
          />
          <mesh
            geometry={nodes.w4_1_3A.geometry}
            material={materials.wit}
            position={[0.511, 0.033, 0.255]}
            scale={[0.55, 0.818, 0.55]}
          />
          <mesh
            geometry={nodes.Detail07A.geometry}
            material={materials.wit}
            position={[0.067, -0.072, -0.417]}
            scale={[5.02, 1, 5.02]}
          />
          <mesh
            geometry={nodes.w1_04A.geometry}
            material={materials.wit}
            position={[-1.601, 0.206, -0.748]}
            scale={[0.777, 2.056, 0.777]}
          />
          <mesh
            geometry={nodes.w5_02A.geometry}
            material={materials.wit}
            position={[0.475, -0.017, 0.749]}
            scale={0.517}
          />
          <mesh
            geometry={nodes.GLASS_TWR2.geometry}
            material={materials.wit}
            position={[-0.29, 0.268, -0.081]}
          />
          <mesh
            geometry={nodes.HYET.geometry}
            material={materials.wit}
            position={[0.356, 0.316, -0.243]}
          />
          <mesh
            geometry={nodes.HOJOES.geometry}
            material={materials.wit}
            position={[0.008, 0.25, -0.605]}
          />
          <mesh
            geometry={nodes.KUSTOMS.geometry}
            material={materials.wit}
            position={[-0.006, 0.27, 0.182]}
          />
          <mesh
            geometry={nodes.THIN_MAN_2.geometry}
            material={materials.wit}
            position={[-0.308, 0.267, -0.936]}
          />
          <mesh
            geometry={nodes.HANCOCK_SM.geometry}
            material={materials.wit}
            position={[-0.534, 0.225, -0.339]}
          />

          <group>
          <sprite position={[0.7300000000000003,0.5400000000000003,0.20999999999999984]} scale={0.04}>
          <spriteMaterial attach="material" map={texture} />
          </sprite>
          <mesh
            name="tag4"
            geometry={nodes.all_glass.geometry}
            material={materials.wit}
            position={[0.168, 0.338, 0.324]}
          />
          </group>

          <mesh
            geometry={nodes.HANDCOCK01.geometry}
            material={materials.wit}
            position={[-0.553, 0.261, -0.089]}
          />
          <mesh
            geometry={nodes.HANDCOCK_2.geometry}
            material={materials.wit}
            position={[0.019, 0.326, -0.94]}
          />
          <mesh
            geometry={nodes.CAPITAL_RC.geometry}
            material={materials.wit}
            position={[-0.583, 0.171, -0.615]}
          />

          <group>
          <sprite position={[-0.30999999999999983,0.8100000000000005,-0.5900000000000001]} scale={0.03}>
          <spriteMaterial attach="material" map={texture} />
          </sprite>
          <mesh
            name="tag3"
            geometry={nodes.CHRYSLER_.geometry}
            material={materials.wit}
            position={[-0.303, 0.33, -0.614]}
            />
          </group>

          <mesh
            geometry={nodes.NEW_DOME.geometry}
            material={materials.wit}
            position={[1.087, 0.086, -0.53]}
            rotation={[0, Math.PI / 2, 0]}
          />

          <group>
          <sprite position={[1.2200000000000006,0.5500000000000003,0.45999999999999996]} scale={0.04}>
          <spriteMaterial attach="material" map={texture} />
          </sprite>
          <mesh
            name="tag5"
            geometry={nodes.TALL_IN_BK.geometry}
            material={nodes.TALL_IN_BK.material}
            position={[1.345, 0.269, 0.479]}
          />
          </group>
          
          <mesh
            geometry={nodes.TALL_IN_01.geometry}
            material={materials.wit}
            position={[1.35, 0.255, 0.477]}
          />
          <mesh
            geometry={nodes.NEW_GLASS_2.geometry}
            material={materials.wit}
            position={[0.785, 0.258, -0.373]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes.NEW_GLAS01.geometry}
            material={materials.wit}
            position={[-0.209, 0.258, 1.05]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes.Object02.geometry}
            material={materials.wit}
            position={[1.199, -0.067, 1.391]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            geometry={nodes.homelyav01.geometry}
            material={materials.wit}
            position={[0.189, 0.071, 1.185]}
            scale={[1, 1.11, 1]}
          />
          <mesh
            geometry={nodes.NEW_DOME01.geometry}
            material={materials.wit}
            position={[-0.818, 0.086, 0.816]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            geometry={nodes.ORI_GLASS.geometry}
            material={materials.wit}
            position={[-0.294, 0.226, -0.347]}
          />
          <mesh
            geometry={nodes.roof.geometry}
            material={materials.wit}
            position={[-0.293, 0.531, -0.347]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
          />
        </group>
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/TP_WORLD_CONCEPT.gltf");
