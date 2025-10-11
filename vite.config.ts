import react from "@vitejs/plugin-react-swc";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv("mock", process.cwd(), "");

const basename = String(env.VITE_BASENAME).replace(/(\/$)|(^\/)/g, "");

// Object.assign(process.env, loadEnv("mock", process.cwd(), ""));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // VitePWA({
        //   manifest: manifest,
        //   // strategies: "injectManifest",
        //   registerType: "autoUpdate",
        //   injectRegister: "auto",
        //   devOptions: {
        //     enabled: false,
        //   },
        //   workbox: {
        //     clientsClaim: true,
        //     cleanupOutdatedCaches: false,
        //     skipWaiting: true,
        //     sourcemap: true,
        //     maximumFileSizeToCacheInBytes: 3000000,
        //     globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,json}"],
        //   },

        // }),
    ],
    base: basename,
    server: {
        port: 3000,
    },

    //build options
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `[name]_[hash].js`,
                chunkFileNames: `[name]_chunk_[hash].js`,
                assetFileNames: `[name]_[hash].[ext]`,
            },
            plugins: [
                {
                    name: "404-html",
                    async writeBundle(options) {
                        const indexHtmlPath = resolve(options.dir || "", "index.html");
                        const buildIndexHtmlPath = resolve(options.dir || "", "404.html");
                        try {
                            const indexHtmlContent = await readFile(indexHtmlPath, "utf-8");
                            await writeFile(buildIndexHtmlPath, indexHtmlContent);
                        } catch (error) {
                            console.error("Error duplicating index.html:", error);
                        }
                    },
                },
                {
                    name: "manifest.webmanifest",
                    generateBundle() {
                        this.emitFile({
                            type: "asset",
                            fileName: "manifest.webmanifest",
                            source: JSON.stringify(manifest),
                        });
                    },
                },
            ],
        },
    },
});

export const manifest = {
    name: env.VITE_NAME,
    short_name: env.VITE_NAME,
    description: env.VITE_DESCRIPTION,
    background_color: env.VITE_THEME_COLOR,
    display: "fullscreen",
    scope: ".",
    start_url: ".",
    icons: [
        {
            src: "/" + basename + "/logo/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable any",
        },
        {
            src: "/" + basename + "/logo/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
        },
    ],
};
