import { ImageResponse } from "next/og";
import { cholulaMeta } from "@/lib/cholula-case";

export const alt = cholulaMeta.description;
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
          background: "#1C1917",
          color: "#F4EFE4",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#E8B923",
            }}
          >
            Nadin Radwan · Case study
          </div>
          <div
            style={{
              width: 56,
              height: 18,
              background: "#C8102E",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#F4EFE4",
              marginBottom: 16,
            }}
          >
            Uncap Real Flavor
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 0.9,
            }}
          >
            Cholula Hot Sauce
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              lineHeight: 1.35,
              color: "#D8D0C3",
              maxWidth: 860,
            }}
          >
            {cholulaMeta.description}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
