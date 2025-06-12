import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Button from "../components/Button.jsx";
import CloudEarth from "../components/CloudEarth.jsx";
import TechLogo from "../components/TechLogo.jsx";

const About = () => {
  const [hasEmailCopied, setHasEmailCopied] = useState(false);

  const logos = [
    { path: "/assets/javascript.png", pos: [0, 3, 0] },
    { path: "/assets/react.png", pos: [-2, 1.5, 0] },
    { path: "/assets/angular.png", pos: [2, 1.5, 0] },
    { path: "/assets/vue.png", pos: [2, -0.5, 0] },
    { path: "assets/node.png", pos: [-2, -0.5, 0] },
    { path: "/assets/webpack.png", pos: [0, -2, 0] },
  ];

  const handleCopy = (entity) => {
    const entityMap = {
      email: {
        value: "thakralvishesh@gmail.com",
        setCopied: setHasEmailCopied,
      },
    };

    const item = entityMap[entity];
    if (!item) return;

    navigator.clipboard.writeText(item.value);
    item.setCopied(true);

    setTimeout(() => item.setCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
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
            <div className="flex-auto max-h-[300px]">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
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
                    height={300}
                  />
                </EffectComposer>
              </Canvas>
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
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[350px] h-fit flex justify-center items-center cursor-grab">
              <CloudEarth />
            </div>
            <div>
              <p className="grid-headtext">
                Exploring the digital world one idea at a time.
              </p>
              <p className="grid-subtext">
                Focused on creating experiences that scale across the globe.
              </p>
              <p className="grid-subtext">
                I build for users — not just browsers.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  id="contact"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">
                The Art (and Algorithms) of Programming
              </p>
              <p className="grid-subtext">
                I'm a problem-solver at heart. My interest in
                DSA goes beyond interviews —
                <ul>
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
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="copy-container"
                onClick={() => handleCopy("email")}
              >
                <img
                  src={hasEmailCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  thakralvishesh@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
