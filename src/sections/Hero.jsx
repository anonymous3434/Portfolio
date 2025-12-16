import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroExperience from "../components/models/hero_model/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h2",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <section className="relative overflow-hidden">
      {/* bg images */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      {/* Hero Layout */}
      <div className="hero-layout">
        {/* //left side(jsx) */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h2>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={word.text + index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 rounded-full bg-white-50 md:p-2 p-1"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h2>
              <h2>into Real Projects</h2>
              <h2>that Deliver Results</h2>
            </div>
            <p className="text-white/70 md:text-xl relative z-10 pointer-events-none leading-relaxed">
              <span className="block">
                Hi, I’m <span className="font-semibold text-white">Asish</span>,
                a{" "}
                <span className="font-semibold text-indigo-400">
                  React Developer
                </span>
              </span>

              <span className="block">
                with <span className="font-semibold text-white">4+ years</span>{" "}
                of experience crafting modern, performant web applications.
              </span>
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
            />
          </div>
        </header>
        {/* right side model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
