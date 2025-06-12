// components/TechLogo.js
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Float } from '@react-three/drei';


export default function TechLogo({ texturePath, position = [0, 0, 0], size = [1, 1] }) {
  const texture = useLoader(TextureLoader, texturePath);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <planeGeometry args={size} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>
    </Float>
  );
}
