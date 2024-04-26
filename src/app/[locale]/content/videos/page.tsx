import VideosData from "@/components/videos/VideosData";
import { fetchVideos } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    let title = "";
    let description = "";
    switch (locale) {
        case "fr":
            title = "Couverture médiatique - Le Observatoire National du Crime";
            description = "Découvrez les derniers Couverture médiatique publiés par Le Observatoire National du Crime.";
            break;
        case "ar":
            title = "التغطيات الإعلامية - المرصد الوطني للإجرام";
            description = "اكتشف أحدث التغطيات الإعلامية التي نشرها المرصد الوطني للإجرام.";
            break;
        default:
            title = "التغطيات الإعلامية - المرصد الوطني للإجرام";
            description = "اكتشف أحدث التغطيات الإعلامية التي نشرها المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}


const VideosPage = async (params: any) => {
    // const t = useTranslations("Navbar")
    const { params: { locale }, searchParams: { } } = params;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['videos', "1"],
        queryFn: () => fetchVideos({}),
    });

    return (
        <main className="my-16 body-container">
            <h1 className="mb-10 text-2xl font-bold text-center">
                {
                    locale === "ar" ? "التغطيات الإعلامية" : "Couverture médiatique"
                }
            </h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <VideosData locale={locale} />
            </HydrationBoundary>
        </main>
    )
};

export default VideosPage;
