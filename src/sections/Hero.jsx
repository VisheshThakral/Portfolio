import { lazy, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
const MindPalace = lazy(() => import("./MindPalace"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3"></div>

      <div
        className="w-full h-full absolute inset-0 cursor-grab"
        id="mindpalace"
      >
        <Canvas
          className="w-full h-full"
          dpr={[1, 1.5]}
          gl={{ powerPreference: "high-performance", antialias: false }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <MindPalace isMobile />
            {/* Disable OrbitControls on mobile to allow scroll */}
            {!isMobile && (
              <OrbitControls
                autoRotate={false}
                enableZoom={false}
                enablePan={false}
              />
            )}
            <EffectComposer>
              <Bloom
                luminanceThreshold={0.1}
                luminanceSmoothing={0.5}
                mipmapBlur
                height={200}
              />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
