import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-background": "rgba(242, 242, 242, 1)",
        "bg-primary": "rgba(24, 26, 28, 1)",
      },
      spacing: {
        "1": "1rem",
      },
      maxWidth: {
        container: "1360px",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: Function }) {
      const components = {
        ".container-center": {
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1360px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
        ".bg-backdrop-hero-landing-bottom": {
          backgroundImage:
            "linear-gradient(0deg, #181a1c 20.46%, rgba(24, 26, 28, 0))",
        },
      };
      addComponents(components);
    },
  ],
  function({ addUtilities }: { addUtilities: Function }) {
    const newUtilities = {
      ".transition-width": {
        transition: "width 0.5s ease-in-out",
      },
    };
    addUtilities(newUtilities);
  },
};

export default config;
