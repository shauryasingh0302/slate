"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents & Plans. Unified. Welcome to{" "}
                <span className="underline">Slate</span>.
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Slate is the connected workspace where <br /> better, faster
                work happens.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button
                    className="h-11 w-40 gap-2"
                    nativeButton={false}
                    render={<Link href="/documents" />}
                >
                    Get Started
                    <ArrowRight className="size-4" />
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button
                        className="h-10 w-40"
                    >
                        Get Slate free
                        <ArrowRight className="size-4" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
};

export default Heading;
