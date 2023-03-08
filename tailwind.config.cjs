const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        softBlue: "var(--softBlue)",
        cyan: "var(--cyan)",
        veryDarkBlueMain: "var(--veryDarkBlueMain)",
        veryDarkBlueCard: "var(--veryDarkBlueCard)",
        veryDarkBlueLine: "var(--veryDarkBlueLine)",
        white: "var(--white)",

        paleBlue: "var(--paleBlue)",
        brightBlue: "var(--brightBlue)",
        veryPaleBlue: "var(--veryPaleBluie)",
        desaturatedBlue: "var(--desaturatedBlue)",
        darkBlue: "var(--darkBlue)",

        blue: "var(--blue)",
        lightRed: "var(--lightRed)",
        gray: "var(--gray)",
        veryDarkBlue: "var(--veryDarkBlue)",

        turquoiseBlue: "var(--turquoiseBlue)",
        coral: "var(--coral)",
        rajah: "var(--rajah)",
        seashell: "var(--seashell)",
        blackRussian: "var(--blackRussian)",
      },
      backgroundImage: {
        eye: "var(--bg-eye)",
        mobile: "var(--bg-main-mobile)",
        tablet: "var(--bg-main-tablet)",
        desktop: "var(--bg-main-desktop)",
      },
      boxShadow: {
        card: "var(--box-shadow-card)",
        button: "var(--box-shadow-button)",
        input: "var(--box-shadow-input)",
      },
      screens: {
        desktop: "1440px",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": { fontSize: "62.5%" },
      });
    }),
  ],
};
