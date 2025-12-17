import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {},
    extend: {
      color: {
        "foreground-color-one": "hsl(var(--foreground-one))",
      },
    },
  },
  plugins: [],
} satisfies Config;
