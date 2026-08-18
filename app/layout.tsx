import type { Metadata } from "next";
import { googleSans, geistMono } from "./fonts";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
    title: "The AI workspace that works for you. | Slate",
    description: "The connected workspace where better, faster work happens.",
    metadataBase: new URL("https://slate.shauryasingh.dev"),
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        title: "The AI workspace that works for you. | Slate",
        description: "The connected workspace where better, faster work happens.",
        url: "https://slate.shauryasingh.dev/",
        siteName: "Slate",
        images: [
            {
                url: "/logo.svg",
                width: 800,
                height: 600,
                alt: "Slate - The connected workspace",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "The AI workspace that works for you. | Slate",
        description: "The connected workspace where better, faster work happens.",
        images: ["/logo.svg"],
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
                        <EdgeStoreProvider>
                            <Toaster position="bottom-center" />
                            <ModalProvider />
                            {children}
                        </EdgeStoreProvider>
                    </ConvexClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
