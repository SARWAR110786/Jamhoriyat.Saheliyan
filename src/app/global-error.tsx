"use client";

import { useEffect } from "react";

/**
 * Last-resort screen instead of Next's bare "Application error".
 * Tries one automatic reload (usually fixes a stale page after a deploy),
 * then shows a friendly message with a reload button.
 */
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
    try {
      const k = "err-reloaded";
      const last = Number(sessionStorage.getItem(k) || 0);
      if (Date.now() - last > 30000) {
        sessionStorage.setItem(k, String(Date.now()));
        window.location.reload();
      }
    } catch {
      /* storage blocked — show the message below */
    }
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff3f8", color: "#2b1230" }}>
        <main style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
          <div>
            <h1 style={{ fontSize: 28, margin: "0 0 12px" }}>Jamhooriyat Saheliyan</h1>
            <p style={{ margin: "0 0 20px", opacity: 0.75 }}>The page needs a quick refresh.</p>
            <button
              onClick={() => window.location.reload()}
              style={{ background: "#c2185b", color: "#fff", border: 0, borderRadius: 999, padding: "12px 26px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
