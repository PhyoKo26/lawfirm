import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch('/lottie/loading.json')
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error('Error loading animation:', error));
    }, []);

    // if (!animationData) {
    //     return <div>Loading...</div>; // Optional loading state
    // }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                zIndex: 9999, // Ensure it appears above other elements
            }}
        >
            {animationData ? (
                <Lottie
                    animationData={animationData}
                    loop={false}
                    onComplete={() => onComplete()}
                    style={{ width: '100%', height: '100%' }}
                />
            ) : (
                <div>Loading...</div> // Optional loading state
            )}
        </div>
    );
};

export default LoadingScreen;
