/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/auditorio.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sweep_1.geometry}
        material={materials["Mat.2"]}
      />
      <group position={[0, 1.2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Disc2_1.geometry}
          material={nodes.Disc2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Disc2-Mat"].geometry}
          material={nodes["Disc2-Mat"].material}
        />
      </group>
      <group rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Disc-Mat"].geometry}
          material={nodes["Disc-Mat"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Disc-Mat1"].geometry}
          material={materials["Mat.1"]}
        />
      </group>
      <group position={[0, 0.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pelvis.geometry}
          material={nodes.Pelvis.material}
          position={[0, 0.9, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LeftThigh.geometry}
            material={nodes.LeftThigh.material}
            position={[0.08, -0.05, 0]}
            rotation={[-0.07, 0, 0.05]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LeftShin.geometry}
              material={nodes.LeftShin.material}
              position={[0, -0.38, 0]}
              rotation={[0.16, 0, -0.05]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LeftFoot.geometry}
                material={nodes.LeftFoot.material}
                position={[0, -0.43, 0]}
                rotation={[-0.09, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LeftJoint_3.geometry}
                  material={nodes.LeftJoint_3.material}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LeftJoint_1.geometry}
                material={nodes.LeftJoint_1.material}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LeftJoint.geometry}
              material={nodes.LeftJoint.material}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Right_Thigh.geometry}
            material={nodes.Right_Thigh.material}
            position={[-0.08, -0.05, 0]}
            rotation={[-0.07, 0, -0.05]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Right_Shin.geometry}
              material={nodes.Right_Shin.material}
              position={[0, -0.38, 0]}
              rotation={[0.16, 0, 0.05]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Foot.geometry}
                material={nodes.Right_Foot.material}
                position={[0, -0.43, 0]}
                rotation={[-0.09, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Joint_3.geometry}
                  material={nodes.Right_Joint_3.material}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Joint_1.geometry}
                material={nodes.Right_Joint_1.material}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Right_Joint.geometry}
              material={nodes.Right_Joint.material}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Upper_Body.geometry}
            material={nodes.Upper_Body.material}
            position={[0, 0.23, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.LeftUpper_Arm.geometry}
              material={nodes.LeftUpper_Arm.material}
              position={[0.15, 0.23, 0]}
              rotation={[0, 0.17, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LeftLower_Arm.geometry}
                material={nodes.LeftLower_Arm.material}
                position={[0.33, 0, 0]}
                rotation={[0, -0.17, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LeftHand.geometry}
                  material={nodes.LeftHand.material}
                  position={[0.29, 0, 0]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.LeftJoint_5.geometry}
                    material={nodes.LeftJoint_5.material}
                  />
                </mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LeftJoint_4.geometry}
                  material={nodes.LeftJoint_4.material}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.LeftJoint_2.geometry}
                material={nodes.LeftJoint_2.material}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Right_Upper_Arm.geometry}
              material={nodes.Right_Upper_Arm.material}
              position={[-0.15, 0.23, 0]}
              rotation={[0, -0.17, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Lower_Arm.geometry}
                material={nodes.Right_Lower_Arm.material}
                position={[-0.33, 0, 0]}
                rotation={[0, 0.17, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Hand.geometry}
                  material={nodes.Right_Hand.material}
                  position={[-0.29, 0, 0]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_Joint_5.geometry}
                    material={nodes.Right_Joint_5.material}
                  />
                </mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Joint_4.geometry}
                  material={nodes.Right_Joint_4.material}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Joint_2.geometry}
                material={nodes.Right_Joint_2.material}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Head.geometry}
              material={nodes.Head.material}
              position={[0, 0.37, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Neck.geometry}
                material={nodes.Neck.material}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Joint.geometry}
              material={nodes.Joint.material}
            />
          </mesh>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[0, 12.49, 14.78]}
        rotation={[-0.49, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={nodes.Extrude.material}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc1.geometry}
        material={nodes.Disc1.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["anfiteatro-estrutura"].geometry}
        material={nodes["anfiteatro-estrutura"].material}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.arquibancada.geometry}
          material={nodes.arquibancada.material}
          position={[0, 0.7, 0]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/auditorio.gltf");