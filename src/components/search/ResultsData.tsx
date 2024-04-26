"use client"
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArticlesResults from "./ArticlesResults";
import VersionsResults from "./VersionsResults";
import { fetchAllWebsite } from "@/utils/actions";
import SelectedBtns from "./SelectedBtns";

type Props = {
    locale: string,
    articlesBtn: string,
    versionsBtn: string,
    resultsMsg: string,
    noRsltMsg: string,
}


const ResultsData = (props: Props) => {

    const { articlesBtn, locale, noRsltMsg, resultsMsg, versionsBtn } = props

    const searchParams = useSearchParams();
    const search = searchParams.get('q');
    const { push } = useRouter();

    const [selectedButton, setSelectedButton] = useState("");

    let currentPage = Number(searchParams.get('page')) || 1;

    const switchButton = (buttonType: string) => {
        setSelectedButton(buttonType);
        push(`/${locale}/search?q=${search}&${buttonType}`)
    };

    const { data, isPending, isFetching } = useQuery({
        queryKey: ['search_website', locale, search ?? "", currentPage],
        queryFn: () => fetchAllWebsite({ locale, search: search ?? "", page: currentPage }),
    });

    useEffect(() => {
        if (!isPending) {
            const { articles, versions } = data || {};
            const articlesLen = articles?.meta?.pagination?.total || 0;
            const versionsLen = versions?.meta?.pagination?.total || 0;
            const maxLen = Math.max(articlesLen, versionsLen);
            setSelectedButton(maxLen === articlesLen ? "articles" : "versions");
        }
    }, [isPending]);


    if (isPending) {
        return <div>loading</div>
    }

    const { articles, versions } = data;
    const articlesData = articles?.data ?? [];
    const versionsData = versions?.data ?? [];
    const articlesLen = articles?.meta?.pagination?.total ?? 0;
    const versionsLen = versions?.meta?.pagination?.total ?? 0


    if (articlesLen === 0 && versionsLen === 0) {
        return <>
            <div className="text-center">
                <h3 className="text-xl">
                    {noRsltMsg} :
                    <span className="text-myBlue3 font-bold text-xl md:text-2xl">{search}</span></h3>
            </div>
        </>
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-xl">
                    {resultsMsg} :
                    <span className="text-myBlue3 font-bold text-xl md:text-2xl">{search}</span></h3>
            </div>
            {(articlesLen < 1 || versionsLen < 1) || (
                <div className="bg-myBlue w-fit p-2 rounded-md flex gap-4">
                    <button className={`${selectedButton === "articles" ? "bg-yellow-500 text-myBlue" : ""} font-bold btn`} onClick={() => switchButton("articles")}>
                        {articlesBtn} ({articlesLen})
                    </button>
                    <button className={`${selectedButton === "versions" ? "bg-yellow-500 text-myBlue" : ""} font-bold btn`} onClick={() => switchButton("versions")}>
                        {versionsBtn} ({versionsLen})
                    </button>
                </div>
                // <SelectedBtns
                //     selectedButton={selectedButton}
                //     articlesBtn={articlesBtn}
                //     articlesLen={articlesLen}
                //     versionsBtn={versionsBtn}
                //     versionsLen={versionsLen}
                //     data={data}
                //     isPending={isPending}
                //     switchButton={switchButton}
                //     setSelectedButton={setSelectedButton}
                // />


            )}
            <section>
                {selectedButton === "articles" && (
                    <ArticlesResults
                        articlesData={articlesData}
                        locale={locale}
                        pageCount={articles?.meta?.pagination?.pageCount}
                        page={currentPage}
                    />
                )}
                {selectedButton === "versions" && (
                    <VersionsResults
                        versionsData={versionsData}
                        locale={locale}
                        pageCount={versions?.meta?.pagination?.pageCount}
                        page={currentPage}
                    />
                )}
            </section>
        </>
    )
};

export default ResultsData;
