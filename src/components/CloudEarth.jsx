import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "../hooks/useInView.jsx";

const CloudEarth = () => {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    const reduce = prefersReducedMotion();

    // Auto-rotate (disabled when the user prefers reduced motion)
    globe.controls().autoRotate = !reduce;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = "/assets/clouds.webp";
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    let frameId;
    let clouds;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          48,
          48
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      if (!reduce) {
        (function rotateClouds() {
          clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
          frameId = requestAnimationFrame(rotateClouds);
        })();
      }
    });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (clouds) {
        globe.scene().remove(clouds);
        clouds.geometry.dispose();
        clouds.material.map?.dispose();
        clouds.material.dispose();
      }
    };
  }, []);

  return (
    <Globe
      ref={globeEl}
      height={350}
      width={380}
      animateIn={false}
      backgroundColor="rgba(0, 0, 0, 0)"
      backgroundImageOpacity={0.5}
      globeImageUrl="/assets/earth-blue-marble.webp"
      bumpImageUrl="/assets/earth-topology.webp"
    />
  );
};

export default CloudEarth;
