import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
    preset: process.env.NITRO_PRESET || "vercel",
    serverDir: "src",
    handlers: [
        {
            route: "/**",
            handler: "./dist/server/server.js",
        },
    ],
    publicAssets: [
        {
            dir: "./dist/client",
            maxAge: 31536000,
        },
    ],
});
