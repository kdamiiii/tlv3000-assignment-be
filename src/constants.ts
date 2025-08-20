import dotenv from "dotenv";

dotenv.config();

export const WHOIS_API = process.env.WHOIS_API;
export const API_KEY = process.env.API_KEY;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") ?? [];
