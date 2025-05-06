import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="AboutMe" className="about--section py-16 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="about--section--img mb-12 lg:mb-0 lg:mr-12">
          {/* Image with Caption */}
          <div className="about--section--img mb-12 lg:mb-0 flex justify-center items-center">
            <div className="text-center">
              <img
                src="/cv/PhyoKoKoMyat_CV.png"
                alt="CV Preview"
                className="w-[75%] max-w-md justify-self-center rounded-lg shadow-lg border border-gray-200"
              />
              <p className="text-sm text-gray-500 mt-2">Preview of my resume</p>
            </div>
          </div>

          {/* Download Button */}
          <a
            href="/cv/PhyoKoKoMyat_Resume.pdf"
            download="PhyoKoKoMyat_Resume.pdf"
            className="block text-center mt-4"
          >
            <button className="bg-customPurple text-white py-2 px-6 rounded-lg hover:bg-customPurpleHover transition-colors duration-300">
              Download Resume
            </button>
          </a>
        </div>

        {/* Content Section */}
        <div className="hero--section--content--box max-w-2xl">
          <div className="hero--section--content">
            <p className="section--title text-xl font-semibold mb-2">
              About
            </p>
            <h1 className="skills-section--heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="hero--section-description text-xl mb-6">
              I’m Phyo Ko Ko Myat, a passionate Senior Mobile Developer & Mobile
              Team Lead specializing in React Native and TypeScript. With several
              years of experience in mobile app development, I have built and
              deployed high-performance applications that deliver seamless user
              experiences.
            </p>
            <p className="hero--section-description text-xl mb-6">
              I thrive on solving challenges, optimizing performance, and
              creating user-centric applications that make an impact. Whether
              it's building a feature-rich e-commerce app or optimizing a fintech
              platform, I always aim for efficiency, scalability, and innovation.
            </p>
            <p className="hero--section-description text-xl">
              Let’s build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;