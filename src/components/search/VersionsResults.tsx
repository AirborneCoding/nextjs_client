import React from "react";
import VersionsCard from "./VersionsCard";
import Pagination from "../layouts/helpers/Pagination";


type Props = {
    locale?: string,
    page?: number,
    pageCount?: number
    versionsData?: any[]
}
const VersionsResults = (props: Props) => {

    const versionsData = props.versionsData ?? [];
    const locale = props.locale ?? "ar";
    const pageCount = props.pageCount ?? 8;
    const page = props.page ?? 1;

    return (
        <>
            <section className="grid gap-12 mt-10 lg:grid-cols-2 ">
                {
                    versionsData.map((a: any) => {

                        return <VersionsCard key={a.id} {...a} locale={locale} />
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

export default VersionsResults;
