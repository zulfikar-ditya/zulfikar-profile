const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const navyColor = {
	50: "#E7E9EF",
	100: "#C2C9D6",
	200: "#A3ADC2",
	300: "#697A9B",
	400: "#5C6B8A",
	450: "#465675",
	500: "#384766",
	600: "#313E59",
	700: "#26334D",
	750: "#222E45",
	800: "#202B40",
	900: "#192132",
};

const customColors = {
	navy: navyColor,
	light: colors.slate[50],
	dark: navyColor[900],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				inter: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: { ...customColors },
		},
	},
	plugins: [],
};
