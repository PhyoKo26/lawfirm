import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaFacebook,
    FaPhone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../public/data/index.json";

const tabNames = [
    "Biography",
    "Practice Areas",
    "Awards & Recognitions",
    "Featured Wins",
];

const lawyers = data?.lawyers;

const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
};

const LawyerDetail: React.FC = () => {
    const { lawyerId } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState(0);

    const lawyer = lawyers.find((l) => l.id.toString() === lawyerId);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [tab]);

    if (!lawyer) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Lawyer Not Found</h2>
                <button
                    onClick={() => navigate("/lawyers")}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Back to Lawyer List
                </button>
            </div>
        );
    }

    const {
        title,
        name,
        specialty,
        photo,
        experience,
        phone,
        facebook,
        linkedin,
        twitter,
        email,
        bio,
        education,
        practiceAreas,
        awards,
        featuredWins,
    } = lawyer;

    return (
        <motion.section
            className="min-h-[calc(100vh-148px)] bg-gradient-to-br from-white to-blue-50 py-12 px-4 md:px-0"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="relative max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate("/lawyers")}
                    className="absolute -top-8 left-0 z-20 flex items-center space-x-2 bg-white shadow-md hover:bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold transition-colors duration-300"
                >
                    <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mr-2"
                    >
                        <path d="M15 5l-7 7 7 7" />
                    </svg>
                    <span>Back</span>
                </button>

                <div className="flex flex-col shadow-lg rounded-3xl overflow-hidden bg-white">
                    {/* Sidebar */}
                    <aside className="flex flex-col md:flex-row items-center p-8 w-full bg-blue-900 rounded-3xl border border-gray-200 shadow-sm gap-8">
                        {/* Left side: Profile Image */}
                        <motion.img
                            src={photo}
                            alt={name}
                            className="w-36 h-36 rounded-full border-4 border-white shadow-md object-cover"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(253, 253, 253, 0.5)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        {/* Right side: Content */}
                        <div className="flex flex-col flex-1">
                            <h1 className="text-3xl font-bold text-white">{name}</h1>
                            <h2 className="text-lg text-white mt-1">{title}</h2>
                            <p className="text-white text-sm mt-2">{specialty}</p>

                            {/* Social / Contact Icons */}
                            <div className="flex flex-wrap gap-4 mt-6 justify-start overflow-visible pb-5">
                                {phone && (
                                    <a
                                        href={`tel:${phone}`}
                                        aria-label={`Call ${name}`}
                                        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] hover:scale-110 transition-transform duration-300 shadow overflow-visible"
                                    >
                                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                            <FaPhone
                                                size={20}
                                                className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-blue-700 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                                            Call
                                        </span>
                                    </a>
                                )}
                                {linkedin && (
                                    <a
                                        href={linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} LinkedIn profile`}
                                        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] hover:scale-110 transition-transform duration-300 shadow overflow-visible"
                                    >
                                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                            <FaLinkedin
                                                size={20}
                                                className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-blue-700 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                                            LinkedIn
                                        </span>
                                    </a>
                                )}
                                {facebook && (
                                    <a
                                        href={facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} Facebook profile`}
                                        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] hover:scale-110 transition-transform duration-300 shadow overflow-visible"
                                    >
                                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                            <FaFacebook
                                                size={20}
                                                className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-blue-700 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                                            Facebook
                                        </span>
                                    </a>
                                )}
                                {twitter && (
                                    <a
                                        href={twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} Twitter profile`}
                                        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] hover:scale-110 transition-transform duration-300 shadow overflow-visible"
                                    >
                                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                            <FaTwitter
                                                size={20}
                                                className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-blue-700 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                                            Twitter
                                        </span>
                                    </a>
                                )}
                                {email && (
                                    <a
                                        href={email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} Email profile`}
                                        className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] hover:scale-110 transition-transform duration-300 shadow overflow-visible"
                                    >
                                        <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                                            <FaEnvelope
                                                size={20}
                                                className="text-blue-600 group-hover:text-blue-800 transition-colors duration-300"
                                            />
                                        </div>
                                        <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-blue-700 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                                            Email
                                        </span>
                                    </a>
                                )}
                                {/* Add Facebook, Twitter, Email similarly */}
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-8 text-gray-900">
                        <div className="flex overflow-x-auto no-scrollbar space-x-2 px-2 sm:px-0 border-b border-gray-300 mb-8">
                            {tabNames.map((tabName, idx) => (
                                <button
                                    key={tabName}
                                    onClick={() => setTab(idx)}
                                    className={`flex-shrink-0 px-5 py-3 font-semibold transition border-b-2 -mb-px rounded-md whitespace-nowrap ${tab === idx
                                        ? "border-blue-700 text-blue-700 bg-blue-50"
                                        : "border-transparent text-gray-500 hover:text-blue-700 hover:bg-blue-50"
                                        }`}
                                >
                                    {tabName}
                                </button>
                            ))}
                        </div>


                        {/* Animated Tab Content */}
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={tab}
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="min-h-[200px]"
                            >
                                {tab === 0 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-blue-800">
                                            Biography
                                        </h3>
                                        <p className="mb-4">{bio}</p>
                                        <div className="mb-8">
                                            <h4 className="text-xl font-semibold text-blue-700 mb-2">
                                                Education & Experience
                                            </h4>
                                            <div className="relative pl-6 border-blue-100">
                                                <div className="mb-6">
                                                    <div className="absolute -left-0.5 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                                        🎓
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-semibold">{education}</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="absolute -left-0.5 w-7 h-7 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                                                        💼
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-semibold">{experience}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {tab === 1 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-blue-800">
                                            Practice Areas
                                        </h3>
                                        <div className="space-y-4">
                                            {practiceAreas.map((area, idx) => (
                                                <div key={area}>
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span>{area}</span>
                                                        <span>{Math.min(100, 60 + idx * 10)}%</span>
                                                    </div>
                                                    <div className="w-full bg-blue-100 rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-indigo-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                                                            style={{ width: `${Math.min(100, 60 + idx * 10)}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {tab === 2 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-blue-800">
                                            Awards & Recognitions
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {awards.map((award) => (
                                                <div
                                                    key={award}
                                                    className="bg-blue-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
                                                >
                                                    <span className="text-3xl mb-2">🏆</span>
                                                    <span className="text-center">{award}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {tab === 3 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-blue-800">
                                            Featured Wins
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {featuredWins.map((win) => (
                                                <div
                                                    key={win}
                                                    className="bg-green-50 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
                                                >
                                                    <span className="text-3xl mb-2">⭐</span>
                                                    <span className="text-center">{win}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </motion.section>
    );
};

export default LawyerDetail;
