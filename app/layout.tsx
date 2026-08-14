import type { Metadata } from "next";
import { googleSans, geistMono } from "./fonts";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
            suppressHydrationWarning
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="slate-theme"
                >
                    <ConvexClientProvider>
                        <Toaster position="bottom-center" />
                        <ModalProvider />
                        {children}
                    </ConvexClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
