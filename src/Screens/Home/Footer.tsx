import { Link } from "react-scroll";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Links and Logo */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <img src="./img/logo.svg" alt="Logoipsum" className="w-32 text-white" />
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              About Me
            </Link>
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="CareerSection"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              Career
            </Link>
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              activeClass="text-customPurple"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="text-md hover:text-customPurple transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Phyoko.26"
              target="_blank"
              rel="noreferrer"
              className="hover:text-customPurple transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/phyo-ko-87425a187/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-customPurple transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:phyokegyi@gmail.com"
              className="hover:text-customPurple transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+959421178725"
              className="hover:text-customPurple transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Footer Content */}
        <div className="text-center text-gray-400">
          <p className="text-sm">Made with 💜 by Phyo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;