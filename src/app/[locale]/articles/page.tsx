import ArticlesData from "@/components/articles/ArticlesData";
import { fetchAllArticles } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    let title = "";
    let description = "";
    switch (locale) {
        case "fr":
            title = "Articles - Le Observatoire National du Crime";
            description = "Découvrez les derniers articles publiés par Le Observatoire National du Crime.";
            break;
        case "ar":
            title = "المقالات - المرصد الوطني للإجرام";
            description = "اكتشف أحدث المقالات التي نشرها المرصد الوطني للإجرام.";
            break;
        default:
            title = "المقالات - المرصد الوطني للإجرام";
            description = "اكتشف أحدث المقالات التي نشرها المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}


const ArticlesPage = async (params: any) => {
    const { params: { locale }, searchParams: { } } = params;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['all_articles', 'all', 1],
        queryFn: () => fetchAllArticles({}),
    });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className="my-14 body-container">
                <ArticlesData locale={locale} />
            </main>
        </HydrationBoundary>
    )
};

export default ArticlesPage;