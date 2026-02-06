import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    resolve: {
        alias: {
            'unenv/node/buffer': 'unenv/runtime/node/buffer/index',
            'unenv/node/process': 'unenv/runtime/node/process/index',
        },
    },
});
