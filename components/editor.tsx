"use client";

import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteViewRaw, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
    const { resolvedTheme } = useTheme();

    const editor = useCreateBlockNote({
        editable,
        initialContent: initialContent
            ? (JSON.parse(initialContent) as PartialBlock[])
            : undefined,
        onEditorContentChange: (editor: BlockNoteEditor) => {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        },
    });

    return (
        <BlockNoteViewRaw
            editor={editor}
            editable={editable}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onChange={() => onChange(JSON.stringify(editor.document, null, 2))}
        />
    );
};

export default Editor;
