import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-app/", // Adjust if your repo name is different
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
