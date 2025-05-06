import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Career from "../Career";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
// import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
// import MyCV from "../MyCV";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Career />
      <MySkills />
      <MyPortfolio />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
      {/* <MyCV /> */}
    </>
  );
}
