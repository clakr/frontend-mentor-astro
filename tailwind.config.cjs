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
      },
      backgroundImage: {
        view: "url(./nft-preview-card/icon-view.svg)",
        mobile: "url(./equalizer/bg-main-mobile.png)",
        tablet: "url(./equalizer/bg-main-tablet.png)",
        desktop: "url(./equalizer/bg-main-desktop.png)",
      },
      boxShadow: {
        nftPreviewCard: "0 2.5em 5em rgba(0, 0, 0, 0.1)",
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
