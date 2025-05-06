module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customPurple: '#7851a9', // Add your custom color here
                customPurpleHover: "#5a3d7f", // Custom hover color
            },
            fontSize: {
                xs: ['12px', '16px'],
                sm: ['14px', '20px'],
                md: ['16px', '24px'],
                lg: ['18px', '28px'],
                xl: ['20px', '28px'],
                '2xl': ['24px', '32px'],
                '3xl': ['30px', '36px'],
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                black: 900,
            },
        },
    },
    plugins: [],
};
