import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Passe à true pour fermer le site.
// Toujours désactivé en local (npm run dev) pour pouvoir tester le site normalement.
const MAINTENANCE_MODE = false && process.env.NODE_ENV === "production";

const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Faithful — Site en maintenance</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1a1a1a;
        color: #f0ebe2;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        text-align: center;
        padding: 24px;
      }
      h1 {
        font-size: 1.6rem;
        letter-spacing: 0.03em;
        margin-bottom: 12px;
      }
      p {
        color: #a8a29e;
        font-size: 0.95rem;
      }
    </style>
  </head>
  <body>
    <div>
      <h1>Le site est en maintenance</h1>
      <p>
        On prépare le drop de la collection Autumn.<br />
        Merci de votre patience — on rouvre très bientôt.
      </p>
    </div>
  </body>
</html>`;

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  return new NextResponse(html, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "259200",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
