import LogoSection from "./sections/LogoSection";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeaturedCards from "./sections/FeaturedCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeaturedCards />
      <ExperienceSection />
      <TechStack />
      <Contact />
    </>
  );
};

export default App;
