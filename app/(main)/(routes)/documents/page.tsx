"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note.",
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                alt=""
                height="200"
                width="300"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                alt=""
                height="200"
                width="300"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Slate
            </h2>
            <Button variant={"outline"} size={"icon-lg"} onClick={onCreate} className="cursor-pointer">
                <PlusCircle className="size-4 mr-2" />
                Create a note
            </Button>
        </div>
    );
};

export default DocumentsPage;
