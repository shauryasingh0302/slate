"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src={"/error.png"}
                height={"300"}
                width={"300"}
                alt="Error"
                className="dark:hidden"
            />
            <Image
                src={"/error-dark.png"}
                height={"300"}
                width={"300"}
                alt="Error"
                className="hidden dark:block"
            />
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <Link
                href="/documents"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
                Go back
            </Link>
        </div>
    );
};

export default Error;
