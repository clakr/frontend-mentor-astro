/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

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
        view: "url(./public/nft-preview-card/icon-view.svg)",
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
