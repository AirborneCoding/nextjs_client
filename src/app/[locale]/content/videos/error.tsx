"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";

const error = () => {
    return (
        <main className="flex flex-col items-center justify-center my-44">
            <h1 className="mb-4 text-4xl font-bold">
                something went wrong
            </h1>
            <Link href="/" className="px-4 py-2 font-bold text-white btn btn-neutral">
                Back Home
            </Link>
        </main>
    )
};

export default error;
