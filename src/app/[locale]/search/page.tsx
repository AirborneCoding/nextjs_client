import ResultsData from "@/components/search/ResultsData";
import { fetchAllWebsite } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import {
    getTranslations,
} from 'next-intl/server';

type PageProps = {
    params: {
        locale: string;
    };
    searchParams: {
        q: string;
    };
}

export async function generateMetadata(params: PageProps) {

    const { params: { locale }, searchParams: { q } } = params;

    let title = q;
    let description = "";

    switch (locale) {
        case "fr":
            description = `Résultats de recherche pour "${q}" sur Le Observatoire National du Crime.`;
            break;
        case "ar":
            description = `نتائج البحث عن "${q}" على المرصد الوطني للإجرام.`;
            break;
        default:
            description = `نتائج البحث عن "${q}" على المرصد الوطني للإجرام.`;
            break;
    }

    return {
        title: title,
        description: description
    };
}

const page = async (params: PageProps) => {
    const { params: { locale }, searchParams: { q } } = params;


    const t = await getTranslations('SearchPage');

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["search_websites", locale, "", 1],
        queryFn: () => fetchAllWebsite({})
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className="mb-16 mt-10 body-container">
                <ResultsData
                    locale={locale}
                    articlesBtn={t("articles")}
                    versionsBtn={t("publications")}
                    resultsMsg={t("resultsMsg")}
                    noRsltMsg={t("noResultMsg")}

                />
            </main>
        </HydrationBoundary>
    )
};

export default page;
