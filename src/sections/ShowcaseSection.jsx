import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  useGSAP(() => {
    const projectsRef = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projectsRef.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.3,
          scrollTrigger: { trigger: card, start: "top bottom-=80" },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left side */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="" />
            </div>
            <div className="text-content">
              <h2>
                Built for sharing moments, not just scrolling feeds, User
                friendly App called Snapgram
              </h2>
              <p className="text-white-50 md:text-xl">
                A scalable, user-friendly web application built with React,
                TypeScript, Tailwind CSS, and Appwrite.
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="" />
              </div>
              <div className="text-content">
                <h2>Ai Powered Weather App</h2>
              </div>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/project3.png" alt="" />
              </div>
              <div className="text-content">
                <h2>Roadmap Generator </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
