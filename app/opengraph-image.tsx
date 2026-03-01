import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = {
    width: 2400,
    height: 1260,
};
export const contentType = "image/png";

// Workaround for Hebrew RTL rendering quirks in some OG renderers.
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
                    background: "#0b1220",
                }}
            >
                <div
                    style={{
                        width: "1200px",
                        height: "630px",
                        transform: "scale(2)",
                        transformOrigin: "top left",
                        display: "flex",
                        position: "relative",
                        overflow: "hidden",
                        background: "linear-gradient(135deg, #0b1220 0%, #163263 58%, #0f766e 100%)",
                        color: "#f8fafc",
                        fontFamily: "RubikHebrew",
                    padding: "48px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-120px",
                        left: "-120px",
                        width: "320px",
                        height: "320px",
                        borderRadius: "9999px",
                        background: "rgba(59,130,246,0.22)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-120px",
                        right: "-90px",
                        width: "340px",
                        height: "340px",
                        borderRadius: "9999px",
                        background: "rgba(16,185,129,0.20)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
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
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                borderRadius: "9999px",
                                padding: "7px 14px",
                                border: "1px solid rgba(148,163,184,0.34)",
                                background: "rgba(15,23,42,0.48)",
                                fontSize: "20px",
                                color: "#cbd5e1",
                            }}
                        >
                            75vs150
                        </div>

                        <div
                            style={{
                                display: "flex",
                                direction: "ltr",
                                alignItems: "center",
                                gap: "12px",
                                fontWeight: 700,
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "12px",
                                    padding: "7px 14px",
                                    fontSize: "38px",
                                    lineHeight: 1,
                                    background: "rgba(37,99,235,0.24)",
                                    border: "1px solid rgba(147,197,253,0.45)",
                                    color: "#eff6ff",
                                }}
                            >
                                75$
                            </div>
                            <div style={{ fontSize: "28px", color: "#bfdbfe" }}>→</div>
                            <div
                                style={{
                                    borderRadius: "12px",
                                    padding: "7px 14px",
                                    fontSize: "38px",
                                    lineHeight: 1,
                                    background: "rgba(5,150,105,0.24)",
                                    border: "1px solid rgba(110,231,183,0.45)",
                                    color: "#ecfdf5",
                                }}
                            >
                                150$
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "16px",
                            direction: "rtl",
                            textAlign: "right",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "92px",
                                lineHeight: 0.95,
                                fontWeight: 900,
                                letterSpacing: "-1px",
                            }}
                        >
                            {rtlSafe("העלאת פטור מע״מ")}
                        </div>
                        <div
                            style={{
                                fontSize: "50px",
                                lineHeight: 1,
                                fontWeight: 700,
                                color: "#e2e8f0",
                            }}
                        >
                            {rtlSafe("ביבוא אישי")}
                        </div>
                        <div
                            style={{
                                fontSize: "34px",
                                lineHeight: 1.15,
                                fontWeight: 400,
                                color: "#cbd5e1",
                            }}
                        >
                            {rtlSafe("השפעה על צרכנים, המדינה ועסקים מקומיים")}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            gap: "12px",
                            height: "72px",
                        }}
                    >
                        <div style={{ width: "18px", height: "62px", borderRadius: "6px 6px 0 0", background: "#22c55e" }} />
                        <div style={{ width: "18px", height: "46px", borderRadius: "6px 6px 0 0", background: "#3b82f6" }} />
                        <div style={{ width: "18px", height: "54px", borderRadius: "6px 6px 0 0", background: "#fb7185" }} />
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
