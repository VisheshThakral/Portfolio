import Globe from "react-globe.gl";
import React, { useEffect, useRef } from "react";
import * as THREE from "https://esm.sh/three";

const CloudEarth = () => {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = "../../public/assets/clouds.png";
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });
  }, []);

  return (
    <Globe
      ref={globeEl}
      height={380}
      width={380}
      animateIn={false}
      backgroundColor="rgba(0, 0, 0, 0)"
      backgroundImageOpacity={0.5}
      globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
    />
  );
};

export default CloudEarth;
