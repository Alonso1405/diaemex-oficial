import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon-diaemex.png", "apple-touch-icon.png"],
      manifest: {
        name: "DIAEMEX Oficial",
        short_name: "DIAEMEX",
        description: "Distribuidora de Aleaciones y Equipos Mexicanos. Soluciones para soldadura, corte y procesos industriales.",
        theme_color: "#080d12",
        background_color: "#080d12",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
        ]
      }
    })
  ]
});
