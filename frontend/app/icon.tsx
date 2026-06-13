import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#F2EFE9",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  );
}
