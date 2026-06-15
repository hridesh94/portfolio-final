import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
    preset: process.env.NITRO_PRESET || "vercel",
    srcDir: "src",
    publicAssets: [
        {
            dir: "../dist/client",
            maxAge: 31536000,
        },
    ],
});
