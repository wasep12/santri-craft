const fs = require("fs");
const path = require("path");

// Read base URL from env or fallback
const BASE =
  process.env.VITE_APP_URL ||
  process.env.APP_URL ||
  "https://santricraft.vercel.app";

const pages = ["/", "/fiqh", "/tauhid", "/sejarah", "/quiz", "/calendar"];

const urls = pages
  .map(
    (p) =>
      `  <url>\n    <loc>${BASE.replace(
        /\/$/,
        ""
      )}${p}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

const outDir = path.resolve(process.cwd(), "dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated at", path.join(outDir, "sitemap.xml"));
