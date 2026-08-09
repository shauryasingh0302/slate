import type { Metadata } from "next";
import { googleSans, geistMono } from "./fonts";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "The AI workspace that works for you. | Slate",
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
            <body className="min-h-full flex flex-col">
                <ConvexClientProvider>
                    <Toaster position="bottom-center" />
                    {children}
                </ConvexClientProvider>
            </body>
        </html>
    );
}
