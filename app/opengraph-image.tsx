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
    const [rubikRegular, rubikBold] = await Promise.all([
        loadFont("rubik-hebrew-400-normal.woff"),
        loadFont("rubik-hebrew-700-normal.woff"),
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
                    background: "linear-gradient(135deg, #0b1220 0%, #132a53 52%, #0f5f66 100%)",
                    color: "#f8fafc",
                    padding: "52px 58px",
                    fontFamily: "RubikHebrew",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-120px",
                        left: "-120px",
                        width: "330px",
                        height: "330px",
                        borderRadius: "999px",
                        background: "rgba(56, 189, 248, 0.16)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-125px",
                        right: "-95px",
                        width: "350px",
                        height: "350px",
                        borderRadius: "999px",
                        background: "rgba(52, 211, 153, 0.16)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: "16px",
                        borderRadius: "24px",
                        border: "1px solid rgba(148,163,184,0.20)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "100%",
                        height: "100%",
                        gap: "24px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            width: "71%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignSelf: "flex-start",
                                border: "1px solid rgba(148,163,184,0.30)",
                                borderRadius: "999px",
                                padding: "8px 15px",
                                background: "rgba(15,23,42,0.52)",
                                color: "#cbd5e1",
                                fontSize: "20px",
                                fontWeight: 400,
                            }}
                        >
                            75vs150 Data Brief
                        </div>

                        <div
                            style={{
                                direction: "rtl",
                                textAlign: "right",
                                fontSize: "66px",
                                lineHeight: 1.05,
                                fontWeight: 700,
                                letterSpacing: "-0.5px",
                            }}
                        >
                            {rtlSafe("פטור מע״מ ביבוא אישי")}
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                direction: "ltr",
                                gap: "12px",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "12px",
                                    padding: "8px 14px",
                                    fontSize: "38px",
                                    fontWeight: 700,
                                    background: "rgba(37,99,235,0.24)",
                                    border: "1px solid rgba(147,197,253,0.42)",
                                    color: "#eff6ff",
                                }}
                            >
                                75$
                            </div>
                            <div style={{ fontSize: "30px", color: "#bfdbfe", fontWeight: 700 }}>
                                →
                            </div>
                            <div
                                style={{
                                    borderRadius: "12px",
                                    padding: "8px 14px",
                                    fontSize: "38px",
                                    fontWeight: 700,
                                    background: "rgba(5,150,105,0.24)",
                                    border: "1px solid rgba(110,231,183,0.40)",
                                    color: "#ecfdf5",
                                }}
                            >
                                150$
                            </div>
                        </div>

                        <div
                            style={{
                                direction: "rtl",
                                textAlign: "right",
                                color: "#d1e5ff",
                                fontSize: "29px",
                                lineHeight: 1.25,
                                fontWeight: 400,
                            }}
                        >
                            {rtlSafe("השוואת ההשפעה על צרכנים, המדינה ועסקים מקומיים")}
                        </div>
                    </div>

                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "27%",
                        borderRadius: "18px",
                        border: "1px solid rgba(148,163,184,0.26)",
                        background: "rgba(15,23,42,0.42)",
                        padding: "18px 16px",
                    }}
                    >
                        <div
                            style={{
                                direction: "rtl",
                                textAlign: "right",
                                color: "#e2e8f0",
                                fontSize: "22px",
                                fontWeight: 700,
                            }}
                        >
                            {rtlSafe("בעלי עניין")}
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
                                <span style={{ color: "#dcfce7", fontSize: "19px", fontWeight: 700 }}>{rtlSafe("צרכנים")}</span>
                                <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#22c55e" }} />
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
                                <span style={{ color: "#dbeafe", fontSize: "19px", fontWeight: 700 }}>{rtlSafe("מדינה")}</span>
                                <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#3b82f6" }} />
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
                                <span style={{ color: "#ffe4e6", fontSize: "19px", fontWeight: 700 }}>{rtlSafe("עסקים מקומיים")}</span>
                                <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#fb7185" }} />
                            </div>
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
            ],
        }
    );
}
