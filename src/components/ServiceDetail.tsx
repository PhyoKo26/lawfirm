import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBuilding, FaUsers, FaShieldAlt, FaGavel, FaHandshake, FaBalanceScale, FaCheckCircle } from "react-icons/fa";
import data from "../../public/data/index.json";

const services = data?.services;

const iconMap = {
    FaBuilding: <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />,
    FaUsers: <FaUsers className="text-pink-600 w-12 h-12 mb-4" />,
    FaShieldAlt: <FaShieldAlt className="text-red-600 w-12 h-12 mb-4" />,
    FaGavel: <FaGavel className="text-purple-600 w-12 h-12 mb-4" />,
    FaHandshake: <FaHandshake className="text-green-600 w-12 h-12 mb-4" />,
    FaBalanceScale: <FaBalanceScale className="text-yellow-600 w-12 h-12 mb-4" />,
};

const ServiceDetail: React.FC = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const navigate = useNavigate();

    const service = services.find((s) => s.id === serviceId);
    const IconComponent = iconMap[service?.icon as keyof typeof iconMap] ?? <FaBuilding className="text-blue-600 w-12 h-12 mb-4" />;

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-0">
            {/* Hero Banner */}
            <div className="relative flex flex-col items-center justify-center bg-blue-900 text-white py-16 px-4 shadow-lg">
                <div className="mb-6 animate-fade-in">
                    {IconComponent}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg animate-fade-in">
                    {service.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 opacity-90 animate-fade-in">
                    {service.description}
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-4 top-4 bg-white/20 hover:bg-white/40 text-white rounded-full px-4 py-2 font-semibold shadow transition"
                >
                    ← Back
                </button>
            </div>

            {/* Details Section */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 -mt-20 relative z-10 animate-fade-in-up">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-900">Service Details</h2>
                    <p className="text-gray-700 text-lg mb-8">{service.details}</p>
                    <h3 className="text-xl font-bold mb-4 text-blue-800">How We Can Help</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {service.howWeHelp.map((item, idx) => (
                            <div key={idx} className="flex items-start bg-blue-50 rounded-lg p-4 shadow-sm">
                                <FaCheckCircle className="text-blue-600 w-6 h-6 mt-1 mr-3" />
                                <span className="text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center mt-10 mb-20">
                <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
                >
                    Book a Consultation
                </a>
            </div>
        </section>
    );
};

export default ServiceDetail;
