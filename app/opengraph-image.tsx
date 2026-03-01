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
                    background:
                        "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.22), transparent 42%), radial-gradient(circle at 88% 82%, rgba(16, 185, 129, 0.2), transparent 40%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                    color: "#f8fafc",
                    padding: "56px 64px",
                    fontFamily: "Alef",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-90px",
                        left: "-120px",
                        width: "380px",
                        height: "380px",
                        borderRadius: "999px",
                        background: "rgba(59,130,246,0.25)",
                        filter: "blur(56px)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-120px",
                        right: "-90px",
                        width: "360px",
                        height: "360px",
                        borderRadius: "999px",
                        background: "rgba(16,185,129,0.2)",
                        filter: "blur(56px)",
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
                                padding: "8px 16px",
                                background: "rgba(15,23,42,0.45)",
                                color: "#cbd5e1",
                                fontSize: "24px",
                                fontWeight: 400,
                            }}
                        >
                            דשבורד נתונים ציבורי
                        </div>

                        <div
                            style={{
                                fontSize: "68px",
                                lineHeight: 1.15,
                                fontWeight: 700,
                                maxWidth: "1000px",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            העלאת פטור המע״מ: 75$ מול 150$
                        </div>

                        <div
                            style={{
                                color: "#cbd5e1",
                                fontSize: "31px",
                                maxWidth: "1000px",
                                lineHeight: 1.35,
                                fontWeight: 400,
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
                                gap: "14px",
                                height: "122px",
                                minWidth: "240px",
                            }}
                        >
                            <div
                                style={{
                                    width: "42px",
                                    height: "62px",
                                    borderRadius: "10px 10px 0 0",
                                    background: "#60a5fa",
                                }}
                            />
                            <div
                                style={{
                                    width: "42px",
                                    height: "96px",
                                    borderRadius: "10px 10px 0 0",
                                    background: "#22c55e",
                                }}
                            />
                            <div
                                style={{
                                    width: "42px",
                                    height: "74px",
                                    borderRadius: "10px 10px 0 0",
                                    background: "#fb7185",
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                flexWrap: "wrap",
                                justifyContent: "flex-end",
                                maxWidth: "760px",
                            }}
                        >
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "8px 14px",
                                    fontSize: "23px",
                                    border: "1px solid rgba(34,197,94,0.55)",
                                    background: "rgba(34,197,94,0.16)",
                                    color: "#bbf7d0",
                                }}
                            >
                                צרכנים
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "8px 14px",
                                    fontSize: "23px",
                                    border: "1px solid rgba(96,165,250,0.55)",
                                    background: "rgba(96,165,250,0.16)",
                                    color: "#bfdbfe",
                                }}
                            >
                                מדינה
                            </div>
                            <div
                                style={{
                                    borderRadius: "999px",
                                    padding: "8px 14px",
                                    fontSize: "23px",
                                    border: "1px solid rgba(251,113,133,0.55)",
                                    background: "rgba(251,113,133,0.16)",
                                    color: "#fecdd3",
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
