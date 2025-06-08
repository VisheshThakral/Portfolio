import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MindPalace = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/models/brain_hologram.glb"
  );

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // Adjust speed as needed
    }
  });

  // Set emissive glow after model is loaded
  useEffect(() => {
    Object.values(materials).forEach((material) => {
      if (material.isMaterial) {
        material.emissive = new THREE.Color(0x00ffff); // cyan glow
        material.emissiveIntensity = 0.8;
        material.needsUpdate = true;
      }
    });
  }, [materials]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="07e8ba9162674e488df6dd56fc54b2e3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.15}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Icosphere001"
                  rotation={[-Math.PI / 2, 0, -2.73411]}
                  scale={[99.99999, 99.99999, 100]}
                >
                  <mesh
                    name="Icosphere001_Particle_2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_1.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_2_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_2_0_2.geometry}
                    material={materials.Particle_2}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_1.geometry}
                    material={materials.Particle_1}
                  />
                  <mesh
                    name="Icosphere001_Particle_1_0_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001_Particle_1_0_2.geometry}
                    material={materials.Particle_1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};
useGLTF.preload("/models/brain_hologram.glb");

export default MindPalace;
