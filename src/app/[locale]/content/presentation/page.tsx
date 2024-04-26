import { useTranslations } from "next-intl";
import React from "react";

const PresentationPage = () => {
    const t = useTranslations("Content");
    return (
        <main className="my-16 body-container">
            <h3 className="mb-10 font-bold text-[18px]">{t("C1_presentation.title")}</h3>
            <div dangerouslySetInnerHTML={{ __html: t.raw('C1_presentation.text') }} />
        </main>
    );
};

export default PresentationPage;
