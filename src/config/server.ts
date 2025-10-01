// src/config/server.ts
const base = process.env.TORRE_API_BASE_URL || "https://torre.ai/api";

export const API = {
    search: `${base}/entities/_searchStream`,
    profile: (username: string) => `${base}/genome/bios/${username}`,
};
