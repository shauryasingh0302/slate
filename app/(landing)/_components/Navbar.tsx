"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import React from "react";
import { Logo } from "./Logo";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    return (
        <div
            className={cn(
                "z-50 bg-background fixed top-0 flex items-center w-full p-6",
                scrolled && "border-b shadow-sm",
            )}
        >
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <div className="mr-13">
                        <Spinner />
                    </div>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant={"ghost"}>Login</Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button className={"rounded-sm"}>
                                Get Slate Free
                            </Button>
                        </SignInButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
