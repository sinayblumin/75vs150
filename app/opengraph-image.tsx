import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

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
                    direction: "rtl",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg, #0f172a 0%, #172554 55%, #0f766e 100%)",
                    color: "#f8fafc",
                    padding: "54px 62px",
                    fontFamily: "Alef",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-110px",
                        left: "-70px",
                        width: "320px",
                        height: "320px",
                        borderRadius: "999px",
                        background: "rgba(56, 189, 248, 0.16)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-110px",
                        right: "-80px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "999px",
                        background: "rgba(34, 197, 94, 0.17)",
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
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignSelf: "flex-start",
                                border: "1px solid rgba(148,163,184,0.35)",
                                borderRadius: "999px",
                                padding: "8px 15px",
                                background: "rgba(15,23,42,0.5)",
                                color: "#cbd5e1",
                                fontSize: "23px",
                                fontWeight: 400,
                            }}
                        >
                            דשבורד נתונים ציבורי
                        </div>

                        <div
                            style={{
                                fontSize: "66px",
                                lineHeight: 1.1,
                                fontWeight: 700,
                                maxWidth: "980px",
                            }}
                        >
                            העלאת פטור המע״מ ביבוא אישי
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                alignSelf: "flex-start",
                                direction: "ltr",
                                gap: "14px",
                                marginTop: "4px",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "14px",
                                    padding: "8px 16px",
                                    fontSize: "44px",
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
                                    fontSize: "44px",
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
                                color: "#dbeafe",
                                fontSize: "30px",
                                maxWidth: "980px",
                                lineHeight: 1.3,
                                fontWeight: 400,
                                marginTop: "4px",
                            }}
                        >
                            השוואת ההשפעה על חיסכון לצרכנים, גביית מע״מ למדינה
                            והכנסות עסקים מקומיים
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
                                gap: "12px",
                                height: "112px",
                                minWidth: "240px",
                            }}
                        >
                            <div
                                style={{
                                    width: "36px",
                                    height: "56px",
                                    borderRadius: "9px 9px 0 0",
                                    background: "#3b82f6",
                                }}
                            />
                            <div
                                style={{
                                    width: "36px",
                                    height: "84px",
                                    borderRadius: "9px 9px 0 0",
                                    background: "#22c55e",
                                }}
                            />
                            <div
                                style={{
                                    width: "36px",
                                    height: "66px",
                                    borderRadius: "9px 9px 0 0",
                                    background: "#fb7185",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap",
                                justifyContent: "flex-end",
                                maxWidth: "760px",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "7px 13px",
                                    fontSize: "22px",
                                    border: "1px solid rgba(34,197,94,0.55)",
                                    background: "rgba(34,197,94,0.18)",
                                    color: "#dcfce7",
                                }}
                            >
                                צרכנים
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "7px 13px",
                                    fontSize: "22px",
                                    border: "1px solid rgba(96,165,250,0.55)",
                                    background: "rgba(96,165,250,0.18)",
                                    color: "#dbeafe",
                                }}
                            >
                                מדינה
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "7px 13px",
                                    fontSize: "22px",
                                    border: "1px solid rgba(251,113,133,0.55)",
                                    background: "rgba(251,113,133,0.18)",
                                    color: "#ffe4e6",
                                }}
                            >
                                עסקים מקומיים
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
