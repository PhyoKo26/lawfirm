import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaUsers, FaShieldAlt, FaGavel, FaHandshake, FaBalanceScale } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../public/data/index.json";

const iconMap = {
    FaBuilding: <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />,
    FaUsers: <FaUsers className="text-pink-600 w-12 h-12 mb-4" />,
    FaShieldAlt: <FaShieldAlt className="text-red-600 w-12 h-12 mb-4" />,
    FaGavel: <FaGavel className="text-purple-600 w-12 h-12 mb-4" />,
    FaHandshake: <FaHandshake className="text-green-600 w-12 h-12 mb-4" />,
    FaBalanceScale: <FaBalanceScale className="text-yellow-600 w-12 h-12 mb-4" />,
};

const services = data?.services;

const Services: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section id="services" className="py-20 px-6 bg-gray-50 text-gray-900">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 md:grid-cols-3">
                {services.map(({ id, title, description, icon }) => {
                    const IconComponent = iconMap[icon as keyof typeof iconMap] ?? <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />;
                    return (
                        <div
                            key={id}
                            data-aos="fade-up"
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            {IconComponent}
                            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                            <p className="mb-6 text-gray-700">{description}</p>
                            <button
                                onClick={() => navigate(`/services/${id}`)}
                                className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer"
                            >
                                Learn More
                            </button>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default Services;
