import { ImageResponse } from "next/og";
import { signosMeta } from "@/lib/signos-case";

export const alt = signosMeta.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F6F7",
          color: "#21263A",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#465B7A",
            }}
          >
            Nadin Radwan · Case study
          </div>
          <div
            style={{
              width: 56,
              height: 64,
              background: "#FD3576",
              transform: "skewX(-18deg)",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            Signos Health
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#465B7A",
              maxWidth: 820,
            }}
          >
            {signosMeta.description}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
