/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins, sans-serif",
                montserrat: "Montserrat, sans-serif",
                bebasNeue: "Bebas Neue, sans-serif",
            },
        },
    },
    daisyui: {
        themes: [
            "light",
            "dark",
        ],
    },
    plugins: [require("daisyui")],
};

