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

        turquoiseBlue: "var(--turquoiseBlue)",
        coral: "var(--coral)",
        rajah: "var(--rajah)",
        seashell: "var(--seashell)",
        blackRussian: "var(--blackRussian)",

        paleBlue: "var(--paleBlue)",
        brightBlue: "var(--brightBlue)",
        veryPaleBlue: "var(--veryPaleBluie)",
        desaturatedBlue: "var(--desaturatedBlue)",
        darkBlue: "var(--darkBlue)",
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
