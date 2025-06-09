import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    plugins: [
        tailwindcss(),
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
            protocolImports: true,
        }),
        viteStaticCopy({
            targets: [
                {
                    src: "node_modules/ace-builds/src-noconflict",
                    dest: "assets",
                },
            ],
        }),
    ],
});
