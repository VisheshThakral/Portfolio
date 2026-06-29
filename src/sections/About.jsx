import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import TechLogo from "../components/TechLogo.jsx";
import { useInView } from "../hooks/useInView.jsx";
const CloudEarth = lazy(() => import("../components/CloudEarth.jsx"));

const About = () => {
  const [techRef, techInView] = useInView();
  const [globeRef, globeInView] = useInView();

  const logos = [
    { path: "/assets/javascript.webp", pos: [0, 3, 0] },
    { path: "/assets/react.webp", pos: [-2, 1.5, 0] },
    { path: "/assets/angular.webp", pos: [2, 1.5, 0] },
    { path: "/assets/vue.webp", pos: [2, -0.5, 0] },
    { path: "assets/node.webp", pos: [-2, -0.5, 0] },
    { path: "/assets/webpack.webp", pos: [0, -2, 0] },
  ];

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.webp"
              alt="grid-1"
              loading="lazy"
              decoding="async"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                I write code that works. Most of the time.
              </p>
              <p className="grid-subtext">
                With 3+ years in full-stack development, I’ve shipped apps,
                squashed bugs, and occasionally impressed myself.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container" style={{ gap: "0px " }}>
            <div ref={techRef} className="flex-auto max-h-[300px] min-h-[260px]">
              {techInView && (
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 50 }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: false }}
                >
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  {logos.map((logo, i) => (
                    <TechLogo
                      key={i}
                      texturePath={logo.path}
                      position={logo.pos}
                      size={[1, 1]}
                    />
                  ))}

                  <EffectComposer>
                    <Bloom
                      intensity={1}
                      luminanceThreshold={0.2}
                      luminanceSmoothing={0.9}
                      mipmapBlur
                      height={300}
                    />
                  </EffectComposer>
                </Canvas>
              )}
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                My toolbox is packed with the usual suspects — React, Angular,
                Vue, Node, TypeScript — and some power-ups like Webpack and
                Tailwind. I like to keep things clean, fast, and a little bit
                magical.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container max-h-fit">
            <div
              ref={globeRef}
              className="rounded-3xl w-full h-[350px] flex justify-center items-center cursor-grab"
            >
              {globeInView && (
                <Suspense fallback={<span className="canvas-loader" />}>
                  <CloudEarth />
                </Suspense>
              )}
            </div>
            <div>
              <p className="grid-headtext">
                Exploring the digital world one idea at a time.
              </p>
              <p className="grid-subtext">
                I build for users — not just browsers.
              </p>
            </div>
          </div>
        </div>

      </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.webp"
              alt="grid-3"
              loading="lazy"
              decoding="async"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                The Art (and Algorithms) of Programming
              </p>
              <div className="grid-subtext">
                <p>
                  I'm a problem-solver at heart. My interest in DSA goes beyond
                  interviews —
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    🏆 Top 10% in LeetCode Weekly Contest 439 (March 2025) —
                    Ranked ~3k out of 30,000+ global participants.
                  </li>
                  <li>
                    🎯 Top 8% in CodeChef July Lunchtime 2021 — Ranked 760 out
                    of 9,000+ globally.
                  </li>
                  <li>
                   🧠 I've tackled 555+ LeetCode problems, and counting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
