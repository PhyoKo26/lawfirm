import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import logo from "/images/logo.png";

const languages = [
    { code: "en", label: "English" },
    { code: "jp", label: "Japan" },
    { code: "mm", label: "Myanmar" },
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const langRef = useRef<HTMLDivElement>(null);

    // Close language dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langRef.current && !langRef.current.contains(event.target as Node)) {
                setLangOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleScroll = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setOpen(false);
        if (window.location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setLangOpen(false);
        setOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold hover:underline">
                    {/* LawFirm */}
                    <img src={logo} alt="Company Logo" className="h-17 object-contain" />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        <li>
                            <NavLink
                                to="/lawyers"
                                className={({ isActive }) =>
                                    isActive ? "underline" : "hover:underline"
                                }
                            >
                                Lawyers
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="hover:underline"
                                onClick={(e) => handleScroll(e, "services")}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:underline"
                                onClick={(e) => handleScroll(e, "contact")}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Language Icon & Dropdown */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            aria-haspopup="true"
                            aria-expanded={langOpen}
                            className="flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-white rounded"
                            title="Select Language"
                        >
                            <FaGlobe size={20} />
                            <span className="sr-only">Select Language</span>
                            <svg
                                className={`w-4 h-4 ml-1 transition-transform duration-200 ${langOpen ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        {langOpen && (
                            <ul className="absolute right-0 mt-2 w-40 bg-white text-blue-900 rounded shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                {languages.map(({ code, label }) => (
                                    <li key={code}>
                                        <button
                                            onClick={() => handleLanguageChange(code)}
                                            className={`block w-full text-left px-4 py-2 hover:bg-blue-100 ${i18n.resolvedLanguage === code ? "font-bold" : ""
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Hamburger icon */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white my-1 transition-opacity duration-300 ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-blue-900 transition-all duration-300 overflow-hidden ${open ? "max-h-72 py-2" : "max-h-0 py-0"
                    }`}
            >
                <ul className="flex flex-col space-y-2 px-6">
                    <li>
                        <NavLink
                            to="/lawyers"
                            className={({ isActive }) =>
                                isActive ? "underline" : "hover:underline"
                            }
                            onClick={() => setOpen(false)}
                        >
                            Lawyers
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="hover:underline"
                            onClick={(e) => handleScroll(e, "services")}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:underline"
                            onClick={(e) => handleScroll(e, "contact")}
                        >
                            Contact
                        </a>
                    </li>
                    {/* Mobile Language Selector */}
                    <li className="pt-2 border-t border-blue-800">
                        <div className="flex space-x-2">
                            {languages.map(({ code, label }) => (
                                <button
                                    key={code}
                                    onClick={() => handleLanguageChange(code)}
                                    className={`flex-1 px-3 py-2 rounded text-center ${i18n.resolvedLanguage === code
                                        ? "bg-white text-blue-900 font-bold"
                                        : "hover:bg-blue-800"
                                        }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
