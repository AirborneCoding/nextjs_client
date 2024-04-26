import React from "react";
import Pagination from "../layouts/helpers/Pagination";
import ArticlesCard from "./ArticlesCard";

type Props = {
    locale?: string,
    page?: number,
    pageCount?: number
    articlesData?: ArticleAttributes[]
}

const ArticlesResults = (props: Props) => {

    const articlesData = props.articlesData ?? []
    const locale = props.locale ?? "ar"
    const pageCount = props.pageCount ?? 12
    const page = props.page ?? 1

    return (
        <>
            <section className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    articlesData.map((a: ArticleAttributes) => {
                        return <ArticlesCard key={a.id} {...a} locale={locale} />
                    })
                }
            </section>
            <Pagination
                pageCount={pageCount}
                page={page}
            />
        </>
    )
};

export default ArticlesResults;
