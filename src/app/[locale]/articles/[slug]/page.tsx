import SingleArticle from "@/components/articles/SingleArticle";
import { fetchSingleArticle } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";


// todo
export async function generateMetadata({ params: { slug, locale } }: { params: { slug: string, locale: string } }) {
    let title = decodeURIComponent(slug);
    let description = decodeURIComponent(slug);

    switch (locale) {
        case "fr":
            description = "Découvrez un article du Observatoire National du Crime.";
            break;
        case "ar":
            description = "اكتشف مقالة من المرصد الوطني للإجرام.";
            break;
        default:
            description = "اكتشف مقالة من المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}

const SingleArticlePage = async ({ params }: { params: { slug: string } }) => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['article', decodeURIComponent(params.slug)],
        queryFn: async () => fetchSingleArticle(decodeURIComponent(params.slug))
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <SingleArticle slug={decodeURIComponent(params.slug)} />
        </HydrationBoundary>
    )
};

export default SingleArticlePage;


