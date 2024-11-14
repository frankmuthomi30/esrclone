/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Existing rule for all app files
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}", // New rule specifically for tabs folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
