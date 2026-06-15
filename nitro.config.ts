import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
    preset: process.env.NITRO_PRESET || "vercel",
});
