// Auth0
export const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
export const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
export const AUTH0_CALLBACK_URL = import.meta.env.VITE_AUTH0_CALLBACK_URL;
export const AUTH0_AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE;
// API
export const API_URL = import.meta.env.VITE_API_SERVER_URL;

if (!AUTH0_AUDIENCE) console.error("MISSING VITE_AUTH0_AUDIENCE");
if (!AUTH0_CLIENT_ID) console.error("MISSING VITE_AUTH0_CLIENT_ID");
if (!API_URL) console.error("MISSING API_URL");
if (!AUTH0_CALLBACK_URL) console.error("MISSING VITE_AUTH0_CALLBACK_URL");
if (!AUTH0_AUDIENCE) console.error("MISSING VITE_AUTH0_AUDIENCE");

console.log(API_URL);
