"use client";

import Image from "next/image";

const DocumentsPage = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png" alt="" height="200" width="300" className="dark:hidden"/>
            <Image src="/empty-dark.png" alt="" height="200" width="300" className="hidden dark:block"/>
        </div>
    );
};

export default DocumentsPage;
