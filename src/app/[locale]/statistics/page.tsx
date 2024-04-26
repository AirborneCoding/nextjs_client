import Satistics from "@/components/statistics/Satistics";
import { useTranslations } from "next-intl";


export async function generateMetadata({ params }: { params: { locale: string } }) {
    let title = "";
    let description = "";

    switch (params.locale) {
        case "fr":
            title = "Statistiques - Le Observatoire National du Crime";
            description = "Découvrez les statistiques du Observatoire National du Crime.";
            break;
        case "ar":
            title = "الإحصائيات - المرصد الوطني للإجرام";
            description = "استكشف الإحصائيات من المرصد الوطني للإجرام.";
            break;
        default:
            title = "الإحصائيات - المرصد الوطني للإجرام";
            description = "استكشف الإحصائيات من المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}

const Page = () => {
    const t = useTranslations('SatisticsPage');
    return (
        <main className="my-16 body-container ">
            <div dangerouslySetInnerHTML={{ __html: t.raw('text') }}/>
            <Satistics />
        </main>
    )
};

export default Page;
