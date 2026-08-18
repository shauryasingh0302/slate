"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useCoverImage } from "@/hooks/useCoverImage";
import { SingleImageDropzone } from "@/components/upload/single-image";
import { UploaderProvider } from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

export const CoverImageModal = () => {
    const params = useParams();
    const documentId = params.documentId as Id<"documents">;
    const update = useMutation(api.documents.update);
    const coverImage = useCoverImage();
    const { edgestore } = useEdgeStore();

    return (
        <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
            <DialogContent>
                <DialogHeader>
                    <h2 className="text-center text-lg font-semibold">
                        Cover Image
                    </h2>
                </DialogHeader>
                <UploaderProvider
                    autoUpload
                    uploadFn={({ file, signal, onProgressChange }) =>
                        edgestore.publicFiles.upload({
                            file,
                            signal,
                            onProgressChange,
                            // Replace the old file in place so it isn't orphaned
                            options: coverImage.url
                                ? { replaceTargetUrl: coverImage.url }
                                : undefined,
                        })
                    }
                    onUploadCompleted={async ({ url }) => {
                        await update({
                            id: documentId,
                            coverImage: url,
                        });

                        coverImage.onClose();
                    }}
                >
                    <SingleImageDropzone className="w-full outline-none" />
                </UploaderProvider>
            </DialogContent>
        </Dialog>
    );
};
