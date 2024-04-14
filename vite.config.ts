import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const SERVER_PORT = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: SERVER_PORT,
  },
  plugins: [tsconfigPaths(), react()],
  base: "/",
});
