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
        join(process.cwd(), "node_modules", "fontsource-alef", "files", fileName)
    );
}

export default async function OpenGraphImage() {
    const [alefRegular, alefBold] = await Promise.all([
        loadFont("alef-hebrew-400-normal.woff"),
        loadFont("alef-hebrew-700-normal.woff"),
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
                    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f766e 100%)",
                    color: "#f8fafc",
                    padding: "48px 56px",
                    fontFamily: "Alef",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-90px",
                        left: "-90px",
                        width: "260px",
                        height: "260px",
                        borderRadius: "999px",
                        background: "rgba(59, 130, 246, 0.24)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-100px",
                        right: "-70px",
                        width: "280px",
                        height: "280px",
                        borderRadius: "999px",
                        background: "rgba(16, 185, 129, 0.22)",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignSelf: "flex-start",
                                border: "1px solid rgba(148,163,184,0.35)",
                                borderRadius: "999px",
                                padding: "7px 14px",
                                background: "rgba(15,23,42,0.5)",
                                color: "#e2e8f0",
                                fontSize: "22px",
                                fontWeight: 400,
                            }}
                        >
                            Public Data Dashboard
                        </div>

                        <div
                            style={{
                                direction: "rtl",
                                textAlign: "right",
                                fontSize: "60px",
                                lineHeight: 1.12,
                                fontWeight: 700,
                                maxWidth: "980px",
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
                                gap: "14px",
                                width: "100%",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "14px",
                                    padding: "8px 16px",
                                    fontSize: "42px",
                                    fontWeight: 700,
                                    background: "rgba(59,130,246,0.2)",
                                    border: "1px solid rgba(147,197,253,0.35)",
                                    color: "#eff6ff",
                                }}
                            >
                                75$
                            </div>
                            <div style={{ fontSize: "34px", color: "#bfdbfe", fontWeight: 700 }}>
                                →
                            </div>
                            <div
                                style={{
                                    borderRadius: "14px",
                                    padding: "8px 16px",
                                    fontSize: "42px",
                                    fontWeight: 700,
                                    background: "rgba(16,185,129,0.2)",
                                    border: "1px solid rgba(110,231,183,0.35)",
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
                                color: "#dbeafe",
                                fontSize: "28px",
                                maxWidth: "980px",
                                lineHeight: 1.28,
                                fontWeight: 400,
                                marginTop: "2px",
                            }}
                        >
                            {rtlSafe("השוואת ההשפעה על צרכנים, המדינה ועסקים מקומיים")}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gap: "24px",
                        }}
                    >
                        <div
                            style={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: "10px",
                            height: "96px",
                            minWidth: "210px",
                        }}
                    >
                        <div
                            style={{
                                width: "30px",
                                height: "46px",
                                borderRadius: "8px 8px 0 0",
                                background: "#3b82f6",
                            }}
                        />
                        <div
                            style={{
                                width: "30px",
                                height: "72px",
                                borderRadius: "8px 8px 0 0",
                                background: "#22c55e",
                            }}
                        />
                        <div
                            style={{
                                width: "30px",
                                height: "58px",
                                borderRadius: "8px 8px 0 0",
                                background: "#fb7185",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                            justifyContent: "flex-end",
                            maxWidth: "760px",
                        }}
                    >
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "6px 12px",
                                    fontSize: "20px",
                                border: "1px solid rgba(34,197,94,0.55)",
                                background: "rgba(34,197,94,0.18)",
                                    color: "#dcfce7",
                                }}
                            >
                                {rtlSafe("צרכנים")}
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "6px 12px",
                                    fontSize: "20px",
                                border: "1px solid rgba(96,165,250,0.55)",
                                background: "rgba(96,165,250,0.18)",
                                    color: "#dbeafe",
                                }}
                            >
                                {rtlSafe("מדינה")}
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "6px 12px",
                                    fontSize: "20px",
                                border: "1px solid rgba(251,113,133,0.55)",
                                background: "rgba(251,113,133,0.18)",
                                    color: "#ffe4e6",
                                }}
                            >
                                {rtlSafe("עסקים מקומיים")}
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
                    name: "Alef",
                    data: alefRegular,
                    style: "normal",
                    weight: 400,
                },
                {
                    name: "Alef",
                    data: alefBold,
                    style: "normal",
                    weight: 700,
                },
            ],
        }
    );
}
