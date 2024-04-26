"use client"

import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import PublicationsCard from "./PublicationsCard";
import { useState } from "react";
import Image from "next/image";
import Pagination from "../layouts/helpers/Pagination";
import LoadMore from "./LoadMore";
import { fetchPublications } from "@/utils/actions";
import { usePathname, useSearchParams } from "next/navigation";
import InCategoriesPage from "./InCategoriesPage";
import BtnReset from "./BtnReset";
import Loading from "@/app/[locale]/publications/Loading";


const PublicationsData = ({ locale }: { locale: string }) => {

    const searchParams = useSearchParams();

    const searchValue = searchParams.get('search_publications') || '';
    const category = searchParams.get('category') || ''

    const currentPage = Number(searchParams.get('page')) || 1;


    const { data, isPending, isFetching } = useQuery({
        queryKey: ["publications", locale, searchValue ?? "", category ?? "", currentPage],
        queryFn: () => fetchPublications({ locale, search: searchValue, category, limit: currentPage })
    })

    const publications = data?.data || [];
    const pageCount = data?.meta?.pagination?.pageCount || 0;


    return (
        <>
            <section className="flex gap-8">
                <div className="flex-1">
                    <SearchBox
                    // searchValue={searchValue}
                    // setSearchValue={setSearchValue}
                    />
                </div>
                <BtnReset locale={locale} />
            </section>
            <section className="flex flex-col gap-8 mt-5 lg:flex-row">
                <div className="flex-grow-2">
                    <InCategoriesPage locale={locale} />
                </div>
                {
                    isPending || isFetching ? (
                        <Loading cards={4} />
                    ) : publications.length > 0 ? (
                        <div className={`flex-grow grid ${publications.length === 1 ? "lg:grid-cols-1" : "xl:grid-cols-2"} gap-5 lg:w-80`}>
                            {publications.map((pub: any) => (
                                <PublicationsCard key={pub.id} {...pub} />
                            ))}
                        </div>
                    ) : (
                        <h5 className='mt-16 text-2xl text-center'>
                            {locale === "ar" ? "عذرًا، لا توجد إصدارات تطابق بحثك..." : "Désolé, aucun Publication ne correspond à votre recherche..."}
                        </h5>
                    )
                }

            </section>
            <Pagination
                pageCount={pageCount}
                page={currentPage}
            />
        </>
    )
};

export default PublicationsData;

/* 
 <LoadMore
                                locale={locale}
                                category={category}
                                searchValue={searchValue}
                                page={page}
                                setPage={setPage}
                            /> 
*/

/* 
<Pagination
                                page={page}
                                pageCount={pageCount}
                                setPage={setPage}
                            />
*/

/* 
<section className="flex flex-col gap-8 mt-5 lg:flex-row">
                <div className="flex-grow-2">
                    <Categories
                        locale={locale}
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
                { {
                    isPending || isFetching
                        ?
                        <div className="grid place-content-center place-items-center">
                            Loading...
                        </div>
                        :
                        <div className={`flex-grow grid ${publications?.length || "lg:grid-cols-2"} gap-5 lg:w-80`}>
                            {publications.map((pub: any) => {
                                return <PublicationsCard key={pub.id} {...pub} />
                            })}
                        </div>
                } 
<div className={`flex-grow grid ${publications?.length || "lg:grid-cols-2"} gap-5 lg:w-80`}>
    {publications.map((pub: any) => {
        return <PublicationsCard key={pub.id} {...pub} />
    })}
    <LoadMore locale={locale} />
</div>
            </section >
*/