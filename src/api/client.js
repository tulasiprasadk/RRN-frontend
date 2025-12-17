// src/api/client.js
// Single source of truth for backend API calls (Vercel-safe)

const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://rrnagar-backend.onrender.com/api";

// Backend origin (used only for assets if needed)
const BACKEND_ORIGIN = API_BASE.replace(/\/api$/, "");

export { API_BASE, BACKEND_ORIGIN };

// ---------- helpers ----------

async function handle(res, method, endpoint) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${endpoint} failed: ${res.status} ${text}`);
  }
  return res.json();
}

export async function get(endpoint, options = {}) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return handle(res, "GET", endpoint);
}

export async function post(endpoint, body, auth = null) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    },
    body: JSON.stringify(body),
  });
  return handle(res, "POST", endpoint);
}

export async function put(endpoint, body) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return handle(res, "PUT", endpoint);
}

export async function del(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "DELETE",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return handle(res, "DELETE", endpoint);
}
