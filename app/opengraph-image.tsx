import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

// Satori (next/og) still has RTL rendering quirks with Hebrew in some crawlers.
// We reverse Hebrew strings so the final rendered output appears in correct order.
function rtlSafe(text: string) {
    return text.split("").reverse().join("");
}

async function loadFont(fileName: string) {
    return readFile(
        join(process.cwd(), "node_modules", "@fontsource", "rubik", "files", fileName)
    );
}

export default async function OpenGraphImage() {
    const [rubikRegular, rubikBold, rubikBlack] = await Promise.all([
        loadFont("rubik-hebrew-400-normal.woff"),
        loadFont("rubik-hebrew-700-normal.woff"),
        loadFont("rubik-hebrew-900-normal.woff"),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    direction: "ltr",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #0a1222 0%, #13294b 62%, #155e75 100%)",
                    color: "#f8fafc",
                    padding: "38px 42px",
                    fontFamily: "RubikHebrew",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-120px",
                        left: "-120px",
                        width: "280px",
                        height: "280px",
                        borderRadius: "999px",
                        background: "rgba(59, 130, 246, 0.22)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-130px",
                        right: "-100px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "999px",
                        background: "rgba(16, 185, 129, 0.20)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: "10px",
                        borderRadius: "24px",
                        border: "1px solid rgba(148,163,184,0.28)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "100%",
                        height: "100%",
                        gap: "18px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "73%",
                            padding: "10px 2px 8px 0",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    alignSelf: "flex-end",
                                    border: "1px solid rgba(148,163,184,0.34)",
                                    borderRadius: "999px",
                                    padding: "8px 13px",
                                    background: "rgba(15,23,42,0.58)",
                                    color: "#cbd5e1",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                }}
                            >
                                {rtlSafe("דשבורד נתונים לציבור")}
                            </div>

                            <div
                                style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                    fontSize: "88px",
                                    lineHeight: 0.96,
                                    fontWeight: 900,
                                    letterSpacing: "-0.8px",
                                }}
                            >
                                {rtlSafe("העלאת פטור מע״מ")}
                            </div>
                            <div
                                style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                    color: "#e2e8f0",
                                    fontSize: "46px",
                                    lineHeight: 1.02,
                                    fontWeight: 700,
                                    letterSpacing: "-0.4px",
                                }}
                            >
                                {rtlSafe("75$ מול 150$")}
                            </div>
                            <div
                                style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                    color: "#cbd5e1",
                                    fontSize: "30px",
                                    lineHeight: 1.2,
                                    fontWeight: 400,
                                }}
                            >
                                {rtlSafe("השפעה על צרכנים, מדינה ועסקים מקומיים")}
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "center" }}>
                                <span style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#22c55e" }} />
                                <div style={{ width: "186px", height: "10px", borderRadius: "999px", background: "rgba(34,197,94,0.76)" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "center" }}>
                                <span style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#3b82f6" }} />
                                <div style={{ width: "138px", height: "10px", borderRadius: "999px", background: "rgba(59,130,246,0.76)" }} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "center" }}>
                                <span style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#fb7185" }} />
                                <div style={{ width: "160px", height: "10px", borderRadius: "999px", background: "rgba(251,113,133,0.76)" }} />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "stretch",
                            width: "24%",
                            borderRadius: "20px",
                            border: "1px solid rgba(148,163,184,0.32)",
                            background: "rgba(15,23,42,0.62)",
                            padding: "16px 13px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div
                                style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                    color: "#e2e8f0",
                                    fontSize: "23px",
                                    fontWeight: 700,
                                }}
                            >
                                {rtlSafe("בעלי עניין")}
                            </div>
                            <div
                                style={{
                                    direction: "rtl",
                                    textAlign: "right",
                                    color: "#94a3b8",
                                    fontSize: "14px",
                                    lineHeight: 1.3,
                                    fontWeight: 400,
                                }}
                            >
                                {rtlSafe("חלוקה לפי קבוצות מושפעות")}
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    direction: "rtl",
                                    borderRadius: "10px",
                                    padding: "8px 10px",
                                    background: "rgba(34,197,94,0.16)",
                                    border: "1px solid rgba(110,231,183,0.32)",
                                }}
                            >
                                <span style={{ color: "#dcfce7", fontSize: "18px", fontWeight: 700 }}>{rtlSafe("צרכנים")}</span>
                                <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#22c55e" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    direction: "rtl",
                                    borderRadius: "10px",
                                    padding: "8px 10px",
                                    background: "rgba(59,130,246,0.16)",
                                    border: "1px solid rgba(147,197,253,0.32)",
                                }}
                            >
                                <span style={{ color: "#dbeafe", fontSize: "18px", fontWeight: 700 }}>{rtlSafe("מדינה")}</span>
                                <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#3b82f6" }} />
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    direction: "rtl",
                                    borderRadius: "10px",
                                    padding: "8px 10px",
                                    background: "rgba(251,113,133,0.16)",
                                    border: "1px solid rgba(253,164,175,0.32)",
                                }}
                            >
                                <span style={{ color: "#ffe4e6", fontSize: "18px", fontWeight: 700 }}>{rtlSafe("עסקים מקומיים")}</span>
                                <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#fb7185" }} />
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "8px",
                                height: "70px",
                                paddingTop: "4px",
                            }}
                        >
                            <div style={{ width: "18px", height: "58px", borderRadius: "6px 6px 0 0", background: "#22c55e" }} />
                            <div style={{ width: "18px", height: "46px", borderRadius: "6px 6px 0 0", background: "#3b82f6" }} />
                            <div style={{ width: "18px", height: "52px", borderRadius: "6px 6px 0 0", background: "#fb7185" }} />
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "RubikHebrew",
                    data: rubikRegular,
                    style: "normal",
                    weight: 400,
                },
                {
                    name: "RubikHebrew",
                    data: rubikBold,
                    style: "normal",
                    weight: 700,
                },
                {
                    name: "RubikHebrew",
                    data: rubikBlack,
                    style: "normal",
                    weight: 900,
                },
            ],
        }
    );
}
