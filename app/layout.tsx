import type { Metadata } from "next";
import { googleSans, geistMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Slate",
    description: "The connected workspace where better, faster work happens.",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${googleSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
