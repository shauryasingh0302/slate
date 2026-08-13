"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface confirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
}

const confirmModal = ({children, onConfirm}: confirmModalProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e)=> e.stopPropagation()}>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default confirmModal;
