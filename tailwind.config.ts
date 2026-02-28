import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#3b82f6",
                    hover: "#2563eb",
                    light: "#eff6ff"
                },
                accent: {
                    DEFAULT: "#ea580c",
                    hover: "#c2410c"
                }
            },
            fontFamily: {
                sans: ['Rubik', 'Alef', 'system-ui', 'sans-serif'],
                heading: ['Rubik', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                '5xl': '64rem',
                '6xl': '72rem',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
