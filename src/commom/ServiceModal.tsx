// Modal.tsx
import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white rounded-lg max-w-lg w-full p-6 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
                <div className="mb-4">{children}</div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    aria-label="Close modal"
                >
                    &#10005;
                </button>
            </div>
        </div>
    );
};

export default Modal;
