import { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, class1, onComplete }: { text: string; speed?: number; class1: string; onComplete?: () => void }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete(); // Trigger the next typewriter
        }
    }, [index, text, speed, onComplete]);

    return <div className={class1}>{displayedText}</div>;
};

export default Typewriter;
