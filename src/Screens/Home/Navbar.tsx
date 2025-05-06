import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar fixed top-0 w-full bg-white shadow-md z-50`}>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 px-6">
                {/* Logo and Hamburger Menu (Top Row) */}
                <div className="w-full flex items-center justify-between lg:w-auto">
                    {/* Logo */}
                    <Link to="heroSection" spy={true} smooth={true} offset={-70} duration={500}>
                        <img src="./img/logo.svg" alt="Logoipsum" className="cursor-pointer" />
                    </Link>

                    {/* Hamburger Menu (Mobile Only) */}
                    <button
                        className={`nav__hamburger block lg:hidden focus:outline-none ${navActive ? "open" : ""
                            }`}
                        onClick={toggleNav}
                    >
                        <span className="nav__hamburger__line block w-6 h-0.5 bg-black mb-2 transition-transform duration-300 ease-in-out transform origin-center"></span>
                        <span className="nav__hamburger__line block w-6 h-0.5 bg-black mb-2 transition-opacity duration-300 ease-in-out"></span>
                        <span className="nav__hamburger__line block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out transform origin-center"></span>
                    </button>
                </div>

                {/* Navbar Items (Links + Contact Me Button) */}
                <div
                    className={`navbar--items w-full lg:w-auto overflow-hidden transition-all duration-700 ease-in-out ${navActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        } lg:max-h-full lg:opacity-100 lg:flex lg:items-center lg:justify-start`}
                >
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center py-4 lg:py-0">
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="heroSection"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="AboutMe"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="CareerSection"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="mySkills"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="MyPortfolio"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            >
                                Portfolio
                            </Link>
                        </li>
                        {/* Contact Me Button Inside Mobile Menu */}
                        <li className="lg:hidden">
                            <Link
                                onClick={closeMenu}
                                activeClass="text-customPurple"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                to="Contact"
                                className="text-lg hover:text-customPurple transition-colors duration-300 cursor-pointer"
                            // className="btn btn-outline-primary text-white bg-customPurple hover:bg-blue-700 py-2 px-4 rounded block w-full text-center"
                            >
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Me Button (Visible on Desktop Only) */}
                <Link
                    onClick={closeMenu}
                    activeClass="text-customPurple"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn border border-customPurple text-customPurple hover:bg-customPurple hover:text-white cursor-pointer py-2 px-4 rounded hidden lg:block transition-colors duration-300"
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;