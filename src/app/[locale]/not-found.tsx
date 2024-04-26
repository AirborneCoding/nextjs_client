import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export async function generateMetadata({ locale }: { locale: string }) {
    let title = "";
    let description = "";

    switch (locale) {
        case "fr":
            title = "Page non trouvée - Le Observatoire National du Crime";
            description = "La page que vous recherchez n'a pas été trouvée sur Le Observatoire National du Crime.";
            break;
        case "ar":
            title = "الصفحة غير موجودة - المرصد الوطني للإجرام";
            description = "لم يتم العثور على الصفحة التي تبحث عنها على المرصد الوطني للإجرام.";
            break;
        default:
            title = "الصفحة غير موجودة - المرصد الوطني للإجرام";
            description = "لم يتم العثور على الصفحة التي تبحث عنها على المرصد الوطني للإجرام.";
            break;
    }

    return {
        title: title,
        description: description
    };
}

const NotFoundPage = () => {
    const t = useTranslations("NotFoundPage")
    return (
        <main className="flex flex-col items-center justify-center text-center my-44">
            <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
            <p className="mb-8 text-lg">{t("text")}</p>
            <Link href="/" className="px-4 py-2 font-bold text-white btn btn-neutral">
                {t("btnText")}
            </Link>
        </main>
    )
};

export default NotFoundPage
