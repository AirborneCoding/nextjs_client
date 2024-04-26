
import PublicationsData from "@/components/publications/PublicationsData";
import { fetchPublications } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    let title = "";
    let description = "";

    switch (params.locale) {
        case "fr":
            title = "Publications - Le Observatoire National du Crime";
            description = "Découvrez les publications du Observatoire National du Crime.";
            break;
        case "ar":
            title = "المنشورات - المرصد الوطني للإجرام";
            description = "استكشف المنشورات من المرصد الوطني للإجرام.";
            break;
        default:
            title = "المنشورات - المرصد الوطني للإجرام";
            description = "استكشف المنشورات من المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}

const page = async ({ params }: { params: { locale: string } }) => {

    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey: ["publications", params.locale, "all", "all", 1],
        queryFn: () => fetchPublications({})
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <main className="my-14 body-container">
                <PublicationsData locale={params.locale} />
            </main>
        </HydrationBoundary>
    )
};

export default page;
