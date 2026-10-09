import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                // main.scss collects base and blocks with @import
                silenceDeprecations: ["import"]
            }
        }
    }
});
