"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
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
            <Button className='h-11 w-40 gap-2'>
                Get Started
                <ArrowRight className="size-4" />
            </Button>
        </div>
    );
};

export default Heading;
