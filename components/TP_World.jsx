/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState, use } from "react";
import { PresentationControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { gsap } from "gsap";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Models/TP_World-transformed.glb");
  const groupRef = useRef();
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
    gsap.to(groupRef.current.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration,
    });
    gsap.to(groupRef.current.rotation, {
      x: targetRot.x,
      y: targetRot.y,
      z: targetRot.z,
      duration,
    });
  }, []);

  const { pos, rot, scale } = useControls("buildings", {
    pos: {
      value: [-0.2, 0, 0],
      step: 0.01,
    },
    rot: { value: [0, -12, 0], step: 0.01 },
    scale: { value: 0.1, step: 0.01 },
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={groupRef}
      scale={0.025}
      rotation={[0, -12, 0]}
    >
      <PresentationControls enabled={true} polar={[0, 0]}>
        <group position={[12.04, 3.46, 28.66]}>
          <group position={[-15.56, 12.07, 6.84]}>
            <group position={[53.86, -11.05, -10.54]}>
              <mesh
                geometry={nodes["Entree-Mat6"].geometry}
                material={materials.Mat}
              />
              <mesh
                geometry={nodes["Entree-Pads"].geometry}
                material={materials.Pads}
              />
              <mesh
                geometry={nodes["Entree-Mat9"].geometry}
                material={materials["Mat.9"]}
              />
              <mesh
                geometry={nodes["Entree-Glass"].geometry}
                material={materials.Glass}
              />
              <mesh
                geometry={nodes["Entree-Mat9_1"].geometry}
                material={materials["Mat.9"]}
              />
            </group>
            <group position={[16.66, -8.09, 12.22]} scale={0.03}>
              <group position={[-107.88, 839.24, -366.75]} scale={40}>
                <mesh
                  geometry={nodes["HQ-Mat1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat10"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat10_1"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat1_1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat10_2"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat1_2"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat10_3"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["HQ-Mat6"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["HQ-Mat6_1"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["HQ-Mat5"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["HQ-Mat1_3"].geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[-1815.2, 94.42, -1250.54]} scale={40}>
                <mesh
                  geometry={nodes["Library-Mat1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat1_1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat1_2"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat1_3"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat1_4"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat10"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["Library-Mat6"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Library-Mat6_1"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Library-Mat6_2"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Library-Mat1_5"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat1_6"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Library-Mat6_3"].geometry}
                  material={materials.Mat}
                />
              </group>
              <group position={[-1096.52, 241.8, -892.24]} scale={40}>
                <mesh
                  geometry={nodes["Bottle-Mat6"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Bottle-Mat1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat1_1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat6_1"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Bottle-Mat10"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat1_2"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat7"].geometry}
                  material={materials["Mat.7"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat9"].geometry}
                  material={materials["Mat.9"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat9_1"].geometry}
                  material={materials["Mat.9"]}
                />
                <mesh
                  geometry={nodes["Bottle-Mat1_3"].geometry}
                  material={materials["Mat.1"]}
                />
              </group>
              <group position={[834.59, -33.95, -863.42]} scale={40}>
                <mesh
                  geometry={nodes["Gaming-Mat10"].geometry}
                  material={materials["Mat.10"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat7"].geometry}
                  material={materials["Mat.7"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat7_1"].geometry}
                  material={materials["Mat.7"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat6"].geometry}
                  material={materials.Mat}
                />
                <mesh
                  geometry={nodes["Gaming-Mat1_1"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat3"].geometry}
                  material={materials["Mat.3"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat1_2"].geometry}
                  material={materials["Mat.1"]}
                />
                <mesh
                  geometry={nodes["Gaming-Mat6_1"].geometry}
                  material={materials.Mat}
                />
              </group>
              <group
                position={[-549.5, -93.35, -2947.34]}
                rotation={[0, 0.11, 0]}
                scale={[14, 16, 14]}
              >
                <group position={[45.11, -7.38, 77.5]} rotation={[0, -1.57, 0]}>
                  <mesh
                    geometry={nodes["1-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["1-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["1-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["1-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["1-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group position={[81.03, 1.69, 59.79]} rotation={[0, 0.83, 0]}>
                  <mesh
                    geometry={nodes["2-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["2-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["2-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["2-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group
                  position={[106.09, -0.97, 101.3]}
                  rotation={[0, -0.7, 0]}
                >
                  <mesh
                    geometry={nodes["4-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["4-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                </group>
                <group position={[59.18, 32.87, 95]}>
                  <mesh
                    geometry={nodes["5-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["5-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["5-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["5-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["5-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["5-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group
                  position={[-44.57, 38.44, 69.49]}
                  rotation={[0, 0.84, 0]}
                >
                  <mesh
                    geometry={nodes["6-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["6-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["6-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["6-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["6-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["6-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["6-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group position={[40.9, 30.58, 57.39]}>
                  <mesh
                    geometry={nodes["7-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["7-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_5"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_7"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_8"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_9"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_10"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_11"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_12"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_13"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_14"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["7-Mat6_15"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group
                  position={[51.72, 32.01, 134.71]}
                  rotation={[0, 0.87, 0]}
                >
                  <mesh
                    geometry={nodes["8-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["8-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["8-Mat6"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group position={[-19.5, 39.95, 95.16]}>
                  <mesh
                    geometry={nodes["9-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["9-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["9-Mat6"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group
                  position={[-56.3, 15.45, 106.83]}
                  rotation={[-Math.PI, 0.72, Math.PI]}
                >
                  <mesh
                    geometry={nodes["10-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["10-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat1_1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_5"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat1_2"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_7"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["10-Mat6_8"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group position={[20.31, 56.46, 95.1]}>
                  <mesh
                    geometry={nodes["11-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["11-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["11-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["11-Mat1_1"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["11-Mat10_1"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["11-Mat1_2"].geometry}
                    material={materials["Mat.1"]}
                  />
                  <mesh
                    geometry={nodes["11-Mat1_3"].geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
                <group position={[-22.79, 32.91, 133.58]}>
                  <mesh
                    geometry={nodes["12-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["12-Mat1"].geometry}
                    material={materials["Mat.1"]}
                  />
                </group>
                <group
                  position={[12.64, 27.67, 134.39]}
                  rotation={[0, -0.03, 0]}
                >
                  <mesh
                    geometry={nodes["13-Mat10"].geometry}
                    material={materials["Mat.10"]}
                  />
                  <mesh
                    geometry={nodes["13-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["13-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["13-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["13-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["13-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <group position={[-27.73, 19.98, 50.67]}>
                  <mesh
                    geometry={nodes["14-Mat6"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["14-Mat6_1"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["14-Mat6_2"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["14-Mat6_3"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["14-Mat6_4"].geometry}
                    material={materials.Mat}
                  />
                  <mesh
                    geometry={nodes["14-Mat6_5"].geometry}
                    material={materials.Mat}
                  />
                </group>
                <mesh
                  geometry={nodes["3"].geometry}
                  material={materials.Mat}
                  position={[32.6, 0.68, 70.24]}
                  scale={0.78}
                />
              </group>
            </group>
            <mesh
              geometry={nodes.Landing.geometry}
              material={materials["Mat.1"]}
              position={[58.4, -11.25, -22.67]}
            />
          </group>
          <group position={[8.12, 0.32, -1.18]}>
            <mesh
              geometry={nodes.Road.geometry}
              material={materials.Mat}
              position={[1.54, 0.04, -0.42]}
            />
          </group>
          <group position={[17.37, -1.89, 0.97]}>
            <mesh
              geometry={nodes.Water_1.geometry}
              material={materials["Mat.8"]}
              position={[-25.88, 0.29, 4.45]}
            />
          </group>
          <group
            position={[-3.03, -0.73, -8.58]}
            rotation={[Math.PI, -1.52, Math.PI]}
          >
            <mesh
              geometry={nodes.Grass.geometry}
              material={materials["Mat.2"]}
              rotation={[-Math.PI, 1.52, -Math.PI]}
            />
            <mesh
              geometry={nodes.Island_1.geometry}
              material={materials["Mat.4"]}
              rotation={[-Math.PI, 1.52, -Math.PI]}
            />
          </group>
        </group>
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/TP_World-transformed.glb");
