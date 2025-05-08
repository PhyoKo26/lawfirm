import React, { useState } from "react";
import { FaGavel, FaHandshake, FaAward, FaBuilding } from "react-icons/fa";

const awards = [
    "Best Corporate Law Firm 2024 – National Law Awards",
    "Top 100 Law Firms in America 2023",
    "Client Service Excellence 2022",
];

const officePhotos = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-100 py-10 px-2">
            {/* Firm History / Mission & Values */}
            <section className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">About Our Firm</h1>
                        <p className="text-lg text-blue-700 font-semibold mb-4">
                            Integrity. Expertise. Results.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Founded in 2002, <span className="font-bold text-blue-800">BluePeak Legal Group</span> has become a trusted leader in corporate, criminal, and family law. Our mission is to deliver outstanding legal services with integrity, expertise, and a client-first approach.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-1 bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                                <FaGavel className="text-3xl text-blue-700 mb-2" />
                                <h2 className="font-bold text-blue-800 mb-1">Expertise</h2>
                                <p className="text-gray-600 text-sm">
                                    Decades of experience in complex legal matters.
                                </p>
                            </div>
                            <div className="flex-1 bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                                <FaHandshake className="text-3xl text-blue-700 mb-2" />
                                <h2 className="font-bold text-blue-800 mb-1">Client Commitment</h2>
                                <p className="text-gray-600 text-sm">
                                    We put your needs at the center of every case.
                                </p>
                            </div>
                            <div className="flex-1 bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                                <FaAward className="text-3xl text-blue-700 mb-2" />
                                <h2 className="font-bold text-blue-800 mb-1">Recognition</h2>
                                <p className="text-gray-600 text-sm">
                                    Nationally awarded for excellence and ethics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <FaBuilding className="text-[100px] text-blue-200 mb-4" />
                        <div className="text-blue-900 text-xl font-bold">23 Years of Service</div>
                        <div className="text-gray-500">Established 2002</div>
                    </div>
                </div>
            </section>

            {/* Partners & Founders */}
            <section className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl px-10 mb-12">
                <LawyerList />
            </section>

            {/* Awards or Certifications */}
            <section className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 mb-12">
                <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Awards & Certifications</h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {awards.map((award) => (
                        <li key={award} className="bg-blue-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                            <FaAward className="text-3xl text-blue-700 mb-2" />
                            <span className="text-center text-blue-800 font-semibold">{award}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Office Photos / Virtual Tour (optional) */}
            <OfficeGallery officePhotos={officePhotos} />
        </div>
    );
}

import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import LawyerList from "./LawyerList";

interface OfficeGalleryProps {
    officePhotos: string[];
}

export function OfficeGallery({ officePhotos }: OfficeGalleryProps) {
    const [previewIdx, setPreviewIdx] = useState<number | null>(null);

    const openPreview = (idx: number) => setPreviewIdx(idx);
    const closePreview = () => setPreviewIdx(null);

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewIdx((prev) => (prev === 0 ? officePhotos.length - 1 : (prev as number) - 1));
    };
    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewIdx((prev) => (prev === officePhotos.length - 1 ? 0 : (prev as number) + 1));
    };

    return (
        <section className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 mb-12">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Our Office</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {officePhotos.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => openPreview(i)}
                        className="rounded-xl shadow-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label={`Preview office photo ${i + 1}`}
                    >
                        <img
                            src={src}
                            alt={`Office photo ${i + 1}`}
                            className="object-cover w-full h-48 transition-transform duration-200 hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            {/* Preview Modal with Navigation */}
            {previewIdx !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
                    onClick={closePreview}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-2xl w-full flex flex-col items-center"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePreview}
                            className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-3 py-1 text-lg font-bold shadow hover:bg-blue-800 transition"
                            aria-label="Close preview"
                        >
                            <FaTimes />
                        </button>
                        {/* Left Button */}
                        <button
                            onClick={showPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
                            aria-label="Previous photo"
                        >
                            <FaChevronLeft />
                        </button>
                        {/* Right Button */}
                        <button
                            onClick={showNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
                            aria-label="Next photo"
                        >
                            <FaChevronRight />
                        </button>
                        {/* Preview Image */}
                        <img
                            src={officePhotos[previewIdx]}
                            alt={`Office preview ${previewIdx + 1}`}
                            className="w-full h-[60vh] object-contain rounded-lg"
                        />
                        <div className="mt-2 text-gray-600 text-sm">
                            {previewIdx + 1} / {officePhotos.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
