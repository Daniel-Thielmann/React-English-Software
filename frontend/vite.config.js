import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Porta local do Vite
  },
  build: {
    outDir: "dist",
  },
  base: "/", // Adicione essa linha para evitar problemas com refresh na Vercel
});
