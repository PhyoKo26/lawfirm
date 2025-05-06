import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Typewriter from "../TypingScreen";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      scroll.scrollTo(contactSection.offsetTop - 70, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  const texts = [
    "Hey, I'm Phyo Ko Ko Myat",
    "Mobile",
    "Developer",
    "Your Vision, My Code – Creating Impactful Mobile Apps 🔥",
    "Bringing Speed, Stability & Innovation to Every Project."
  ];
  const classes = [
    "text-xl font-bold mb-2",
    "text-5xl lg:text-6xl text-customPurple font-bold",
    "text-5xl lg:text-6xl text-customPurple font-bold mb-6",
    "text-xl font-semibold",
    "text-xl font-semibold mb-8"
  ];
  // const texts = [
  //   "👋 Hi, I'm Phyo Ko Ko Myat.",
  //   "💻 A Senior Mobile Developer, specialized in React Native.",
  //   "⚡ Creating fast, responsive, and scalable applications.",
  //   "🌍 Bridging the gap between user experience and performance.",
  //   "📲 Let's transform your ideas into powerful mobile solutions!"
  // ];
  // const classes = [
  //   "text-2xl text-customPurple font-bold mb-2",
  //   "text-xl font-semibold mb-2",
  //   "text-xl font-semibold mb-2",
  //   "text-xl font-semibold mb-2",
  //   "text-xl font-semibold mb-8"
  // ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="heroSection"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#f5fcff] p-6 pt-24 lg:pt-6" // Added pt-24 for mobile
    >
      {/* Content Box */}
      <div className="hero--section--content--box text-center lg:text-left max-w-2xl lg:mr-16">
        <div className="hero--section--content">
          {texts.slice(0, currentIndex + 1).map((text, index) => (
            <Typewriter
              key={index}
              text={text}
              speed={50}
              class1={classes[index % classes.length]}
              onComplete={() => {
                if (index === currentIndex && currentIndex < texts.length) {
                  setTimeout(() => setCurrentIndex((prev) => prev + 1), 200);
                } else if (currentIndex == texts.length) {
                  setIsLoading(false);
                }
              }}
            />
          ))}
          {/* <p className="text-xl font-bold mb-2">Hey, I'm Phyo Ko Ko Myat</p>
          <h1 className="text-5xl lg:text-6xl text-customPurple font-bold mb-6">
            <span className="text-customPurple">Mobile</span>{" "}
            <br />
            Developer
          </h1>
          <p className="text-xl font-semibold mb-8">
            Your Vision, My Code – Creating Impactful Mobile Apps 🔥
            <br /> Bringing Speed, Stability & Innovation to Every Project.
          </p> */}
        </div>
        {!isLoading &&
          <button
            onClick={scrollToContact}
            className="btn border border-customPurple bg-customPurple text-white hover:bg-transparent hover:border hover:border-customPurple hover:text-customPurple cursor-pointer py-2 px-4 rounded hidden lg:block transition-colors duration-300"
          >
            Get In Touch
          </button>
        }
      </div>

      {/* Image Box */}
      <div className="hero--section--img mt-12 lg:mt-0">
        <img
          src="./img/hero_img.jpg"
          alt="Hero Section"
          className="rounded-lg w-full max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;