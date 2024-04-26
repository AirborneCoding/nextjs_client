"use client"

import Categories from "@/components/publications/Categories";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import PublicationsCard from "./PublicationsCard";
import Link from "next/link";
import { fetchHomePublications } from "@/utils/actions";

const Publications = ({ locale }: { locale: string }) => {

    const [category, setCategory] = useState("")

    const { data, isPending, isFetching, isSuccess } = useQuery({
        queryKey: ["publications", locale, category ?? "", ""],
        queryFn: () => fetchHomePublications({ locale, category, search: "" }),
    })

    const publications = data?.data ?? [];

    return (
        <section className="my-12 body-container">
            <div className='flex flex-row-reverse items-center justify-between'>
                <Link
                    href={`/${locale}/publications`}
                    className='px-4 py-2 mx-1 mb-3 font-bold bg-yellow-500 rounded text-slate-800 active:text-white active:bg-myBlue'
                >
                    {locale === "ar" ? "الكل" : "Plus"}
                </Link>
                <h2 className='mb-6 text-2xl font-bold underline underline-offset-8 decoration-yellow-500'>
                    {locale === "ar" ? "الإصدارات" : "Publications"}
                </h2>
            </div>
            <article className="flex flex-col gap-8 lg:flex-row">
                <div className="flex-grow-2">
                    <Categories
                        locale={locale}
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
                <div className={`flex-grow grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:w-80`}>
                    {publications.slice(0, 4).map((pub: any) => {
                        return <PublicationsCard key={pub.id} {...pub} locale={locale} />
                    })}
                </div>
            </article>
        </section>
    )
};

export default Publications;
