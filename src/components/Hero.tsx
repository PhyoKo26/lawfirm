import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import hero1 from "/images/hero/hero-1.webp";
import hero2 from "/images/hero/hero-2.webp";
import hero3 from "/images/hero/hero-3.jpeg";

const images = [hero2, hero3, hero1];

const Hero: React.FC = () => {
    const { t } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        setAnimateText(true);
        const interval = setInterval(() => {
            setFade(false);
            setAnimateText(false);
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(true);
                setAnimateText(true);
            }, 1000);
        }, 8000); // 8 seconds per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-92px)] flex flex-col items-center justify-center overflow-visible py-16 md:pt-20 px-4 text-center"
        >
            {/* Background Image with fade and zoom */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out transform ${fade ? "opacity-100 scale-100" : "opacity-30 scale-100"
                    }`}
                style={{ backgroundImage: `url(${images[currentImage]})`, zIndex: 0 }}
                aria-hidden="true"
            />

            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-500/80 via-gray-500/60 to-gray-500/90 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl px-6 text-center text-white">
                <h1
                    className={`text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg transition-transform duration-700 ${animateText ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    {t("welcome") || "Welcome to LawFirm"}
                </h1>
                <h2
                    className={`text-3xl md:text-5xl font-semibold mb-6 drop-shadow-lg transition-transform duration-900 delay-150 ${animateText ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    {t("trusted_legal_experts")}
                </h2>
                <p
                    className={`text-lg md:text-xl mb-8 drop-shadow-md leading-relaxed max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${animateText ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Providing expert legal advice and representation to individuals and businesses. Our experienced team is committed to protecting your rights and achieving the best outcomes.
                </p>

                {/* Additional details */}
                <ul
                    className={`text-left max-w-md mx-auto mb-10 space-y-3 text-blue-200 transition-opacity duration-1000 delay-500 ${animateText ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <li>✔ Over 20 years of combined legal experience</li>
                    <li>✔ Personalized client-focused approach</li>
                    <li>✔ Proven track record of successful cases</li>
                    <li>✔ Multilingual team ready to assist you</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    {/* Contact Us - Primary Button */}
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Contact Us
                    </a>

                    {/* Learn More About Us - Secondary/Outlined Button */}
                    <a
                        href="/about"
                        className="inline-block bg-white border-2 border-blue-600 text-blue-700 font-semibold px-10 py-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Learn More About Us
                    </a>
                </div>

                {/* Social Proof */}
                <div
                    className={`mt-12 text-blue-300 transition-opacity duration-1000 delay-700 ${animateText ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <p className="italic max-w-xl mx-auto">
                        “LawFirm helped me win my case with professionalism and dedication. Highly recommended!” – <strong>Jane D.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
