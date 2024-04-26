import ArticlesHome1 from "@/components/home/dynamic/ArticlesHome1";
import ArticlesHome2 from "@/components/home/dynamic/ArticlesHome2";
import PermaLinks from "@/components/home/dynamic/PermaLinks";
import Publications from "@/components/home/dynamic/Publications";
import Boss from "@/components/home/static/Boss";
import MinistryNbr from "@/components/home/static/MinistryNbr";
import UsefullLinks from "@/components/home/static/UsefulLinks";
import Videos from "@/components/home/static/Videos";
import { fetchHomeArticles, fetchHomePublications } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";

const HomePage = async ({ params }: { params: { locale: string } }) => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['permalink_articles'],
        queryFn: () => fetchHomeArticles({}),
    });

    await queryClient.prefetchQuery({
        queryKey: ['home1_articles'],
        queryFn: () => fetchHomeArticles({}),
    });

    await queryClient.prefetchQuery({
        queryKey: ['home2_articles'],
        queryFn: () => fetchHomeArticles({}),
    });

    await queryClient.prefetchQuery({
        queryKey: ["home_publications", params.locale, "all", ""],
        queryFn: () => fetchHomePublications({})
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className="mb-16">
                <PermaLinks locale={params.locale} />
                <ArticlesHome1 locale={params.locale} />
                <Boss />
                <Publications locale={params.locale} />
                <ArticlesHome2 locale={params.locale} />
                <MinistryNbr />
                <Videos locale={params.locale} />
                <UsefullLinks locale={params.locale} />
            </main>
        </HydrationBoundary>
    )
};

export default HomePage;
