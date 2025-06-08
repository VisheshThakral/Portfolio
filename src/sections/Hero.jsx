import { Suspense, useEffect, useState } from "react";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import MindPalace from "./MindPalace.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Button from "../components/Button.jsx";

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
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <MindPalace isMobile />
            {/* Disable OrbitControls on mobile to allow scroll */}
            {!isMobile && (
              <OrbitControls autoRotate={false} enableZoom={false} />
            )}
            <EffectComposer>
              <Bloom
                luminanceThreshold={0.1}
                luminanceSmoothing={0.5}
                height={200}
              />
            </EffectComposer>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="About me"
            containerClass="bg-white uppercase sm:w-fit w-full sm:min-w-[500px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
