import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import data from "../../public/data/index.json";

const lawyers = data?.lawyers;

const LawyerList: React.FC = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
                    Our Legal Experts
                </h2>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {lawyers.map(({ id, name, specialty, photo, experience, facebook, linkedin, twitter, email, phone }, index) => (
                        <Link
                            to={`/lawyers/${id}`}
                            key={id}
                            className={`
                                group relative flex flex-col rounded-xl bg-white shadow-md overflow-hidden cursor-pointer p-8 items-center text-center
                                transform transition duration-500
                                hover:shadow-2xl hover:-translate-y-3
                                animate-fadeInUp
                                hover:rotate-x-2 hover:rotate-y-2
                                focus:outline-none focus:ring-4 focus:ring-indigo-400
                            `}
                            style={{ animationDelay: `${index * 150}ms` }}
                            aria-label={`View profile of ${name}`}
                            tabIndex={0}
                        >
                            {/* Floating Avatar with gradient border on hover */}
                            <div className="relative">
                                <img
                                    src={photo}
                                    alt={`${name} avatar`}
                                    className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-blue-900 transition-all duration-500 group-hover:border-indigo-600"
                                    loading="lazy"
                                />
                                {/* <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-blue-400 via-purple-500 to-blue-900 transition-opacity duration-500 blur-xl"></span> */}
                            </div>
                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-900 mt-6">{name}</h3>
                            <p className="text-blue-900 font-medium mt-1 group-hover:text-indigo-600">{specialty}</p>
                            <p className="text-gray-500 text-sm mt-1">{experience} years experience</p>
                            {/* <button
                                type="button"
                                title={`View detailed profile of ${name}`}
                                className="mt-6 bg-blue-900 text-white px-8 py-2 rounded-full font-semibold shadow-md hover:bg-indigo-600 transition-colors duration-500"
                            >
                                View Profile
                            </button> */}

                            {/* Social icons */}
                            <div className="flex space-x-6 mt-6 text-blue-900 group-hover:text-indigo-600 transition-colors duration-500">
                                {phone && (
                                    <a
                                        href={`tel:${phone}`}
                                        aria-label={`Call ${name}`}
                                        onClick={e => e.stopPropagation()}
                                        onFocus={e => e.stopPropagation()}
                                        className="hover:scale-140 transition-transform duration-300"
                                    >
                                        <FaPhone size={24} />
                                    </a>
                                )}

                                {linkedin && (
                                    <a
                                        href={linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} LinkedIn profile`}
                                        onClick={e => e.stopPropagation()}
                                        onFocus={e => e.stopPropagation()}
                                        className="hover:scale-140 transition-transform duration-300"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                )}

                                {facebook && (
                                    <a
                                        href={facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} Facebook profile`}
                                        onClick={e => e.stopPropagation()}
                                        onFocus={e => e.stopPropagation()}
                                        className="hover:scale-140 transition-transform duration-300"
                                    >
                                        <FaFacebook size={24} />
                                    </a>
                                )}

                                {twitter && (
                                    <a
                                        href={twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${name} Twitter profile`}
                                        onClick={e => e.stopPropagation()}
                                        onFocus={e => e.stopPropagation()}
                                        className="hover:scale-140 transition-transform duration-300"
                                    >
                                        <FaTwitter size={24} />
                                    </a>
                                )}

                                {email && (
                                    <a
                                        href={`mailto:${email}`}
                                        aria-label={`Email ${name}`}
                                        onClick={e => e.stopPropagation()}
                                        onFocus={e => e.stopPropagation()}
                                        className="hover:scale-140 transition-transform duration-300"
                                    >
                                        <FaEnvelope size={24} />
                                    </a>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LawyerList;
