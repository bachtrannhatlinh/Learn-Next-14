module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '3': '0.75rem', // Đảm bảo p-3 hoạt động
      },
    },
  },
  plugins: [],
}
