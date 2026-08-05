import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

// Google Sans, subset to latin + latin-ext and converted to woff2.
// Every entry below is emitted with <link rel="preload">, so keep this list to
// the weights actually used — see app/fonts/README.md before adding more.
export const googleSans = localFont({
    src: [
        {
            path: "./fonts/GoogleSans-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/GoogleSans-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/GoogleSans-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/GoogleSans-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-google-sans",
    display: "swap",
    fallback: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
    ],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
