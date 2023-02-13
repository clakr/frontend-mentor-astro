const plugin = require("tailwindcss/plugin")

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
      },
      backgroundImage: {
        view: "url(./nft-preview-card/icon-view.svg)",
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
      })
    }),
  ],
}
