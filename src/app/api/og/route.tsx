import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {

  const img = "https://www.pagansdev.site/og-pic.png";

  const interRegular = await fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
    )
  ).then((res) => res.arrayBuffer());


  return new ImageResponse(
    (
      <div
        style={{
          width: "1366px",
          height: "768px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          fontFamily: '"Inter"',
        }}
      >
        {/* Glass Card - Simplified for Satori compatibility */}
        <div
          style={{
            width: "1200px",
            padding: "40px",
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <img 
          style={{
            borderRadius: "24px",
          }}
          src={img} 
          alt="imagem do portfolio" />

        </div>
      </div>
    ),
    {
      width: 1366,
      height: 768,
    }
  );
}
