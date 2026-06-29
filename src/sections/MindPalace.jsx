import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion } from "../hooks/useInView.jsx";

// World-space size the brain should occupy (camera sits at z=30, fov 50).
const TARGET_SIZE = 26;

const MindPalace = (props) => {
  const group = useRef();
  // Render the loaded scene directly via <primitive>. This is robust to the
  // model's internal node naming (the GLTF has dotted/duplicate mesh names that
  // don't map cleanly onto a hardcoded `nodes.*` lookup) and to Draco
  // compression, while preserving the authored geometry and materials.
  const { scene } = useGLTF("/models/brain_hologram.glb", "/draco/");
  const reduce = prefersReducedMotion();

  // Clone so the same cached scene can be reused safely (e.g. StrictMode),
  // then auto-fit: measure the bounding box and derive a scale + centering
  // offset so the brain reliably fills the viewport at a consistent size.
  const { model, scale, offset } = useMemo(() => {
    const model = scene.clone(true);
    model.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const scale = TARGET_SIZE / maxDim;

    return { model, scale, offset: [-center.x, -center.y, -center.z] };
  }, [scene]);

  // Give every material the cyan holographic glow.
  useEffect(() => {
    model.traverse((obj) => {
      if (obj.isMesh && obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((material) => {
          material.emissive = new THREE.Color(0x00ffff);
          material.emissiveIntensity = 0.8;
          material.needsUpdate = true;
        });
      }
    });
  }, [model]);

  useFrame(() => {
    if (group.current && !reduce) {
      group.current.rotation.y += 0.005 * 0.5;
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={scale}>
      <primitive object={model} position={offset} />
    </group>
  );
};

useGLTF.preload("/models/brain_hologram.glb", "/draco/");

export default MindPalace;
