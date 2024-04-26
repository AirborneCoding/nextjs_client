import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

const TextsPage = ({ params: { locale } }: { params: { locale: string } }) => {

    const t = useTranslations('observatoryPage');

  


    return (
        <main className="my-16 body-container">
            <h3 className="mb-10 font-bold text-[18px]">
                {t("obPage.title")}
            </h3>

            <div
                // className="missions"
                dangerouslySetInnerHTML={{ __html: t.raw('obPage.text') }} />

        </main>
    )
};

export default TextsPage;


/* 
  if (locale === "ar") {
        return (
            <main className="my-16 body-container">
                <h3 className="mb-10 font-bold text-[18px]">
                    النصوص المرجعية لإحداث المرصد الوطني للإجرام:
                </h3>

                <div className="">
                    <p className="mb-4 font-bold">•	المرسوم رقم 400-22-2 صادر في 21 من ربيع الأول 1444 (18 أكتوبر 2022) بتحديد اختصاصات وتنظيم وزارة العدل
                        حيث جاء في المادة 7 منه :</p>

                    <ul className="pl-4 mb-4 space-y-3 list-disc">
                        <li>وضع وتنفيذ استراتيجية الوزارة في تطوير المنظومة الجنائية.</li>
                        <li>الإسهام في وضع التوجهات والمضامين العامة للسياسة الجنائية؛</li>
                        <li>الإسهام في إعداد مشاريع النصوص التشريعية والتنظيمية ذات الطابع الجنائي</li>
                        <li>رصد وتتبع وتحليل ظاهرة الجريمة واقتراح الخطط الاستراتيجية الكفيلة بالوقاية من الجريمة ومكافحتها؛
                            القيام بدراسات وإنجاز أبحاث في المادة الجنائية
                        </li>
                        <li>إعداد ملفات طلبات واقتراحات العفو والإفراج المقيد، وتتبع تنفيذها</li>
                        <li>تدبير آليات التعاون في الميدان الجنائي.</li>
                    </ul>

                    <p className="mb-4">يتولى «المرصد الوطني للإجرام» المهام التالية::</p>

                    <ul className="pl-4 mb-4 list-disc">
                        <li>تجميع المعطيات الإحصائية من الجهات المعنية المختصة برصد ظاهرة الجريمة واقتراح الحلول للوقاية منها والتصدي لها.</li>
                    </ul>

                    <p className="font-bold">• ويضم المصالح التالية:</p>

                    <ul className="pl-4 space-y-3 list-disc">
                        <li>مصلحة رصد الجريمة</li>
                        <li>مصلحة دراسة وتحليل الظاهرة الإجرامية</li>
                        <li>مصلحة الوقاية من الجريمة</li>
                        <li>مصلحة السجل العدلي الوطني</li>
                        <li>مصلحة تبادل بطائق السجل العدلي على الصعيد الدولي</li>
                        <li>مصلحة التوثيق</li>
                    </ul>
                </div>
            </main>
        )
    }

    ------
    <div className="">
                <p className="mb-4 font-bold">Le décret numéro 400-22-2 émis le 21 du Rabi' al-Awwal 1444 (18 octobre 2022) définit les compétences et l'organisation du Ministère de la Justice. Selon l'article 7 :</p>

                <ul className="pl-4 mb-4 space-y-3 list-disc">
                    <li>Élaboration et mise en œuvre de la stratégie du ministère pour le développement du système judiciaire.</li>
                    <li>Contribution à l'élaboration des orientations et des contenus généraux de la politique criminelle.</li>
                    <li>Participation à l'élaboration de projets de textes législatifs et réglementaires à caractère pénal.</li>
                    <li>Surveillance, suivi et analyse du phénomène criminel, avec proposition de plans stratégiques efficaces pour la prévention et la lutte contre la criminalité.</li>
                    <li>Réalisation d'études et de recherches en matière criminelle.</li>
                    <li>Préparation des dossiers de demandes et de propositions de grâce et de libération conditionnelle, avec suivi de leur exécution.</li>
                    <li>Gestion des mécanismes de coopération dans le domaine judiciaire.</li>
                </ul>

                <p className="mb-4">Le "Observatoire national de la criminalité" assume les tâches suivantes :</p>

                <ul className="pl-4 mb-4 list-disc">
                    <li>Compilation des données statistiques des entités concernées chargées de surveiller et de proposer des solutions pour la prévention et la lutte contre la criminalité.</li>
                </ul>

                <p className="font-bold">Il comprend les divisions suivantes :</p>

                <ul className="pl-4 space-y-3 list-disc">
                    <li>Division de surveillance du crime.</li>
                    <li>Division d'étude et d'analyse du phénomène criminel.</li>
                    <li>Division de prévention de la criminalité.</li>
                    <li>Division du casier judiciaire national.</li>
                    <li>Division d'échange de fichiers du casier judiciaire au niveau international.</li>
                    <li>Division de documentation.</li>
                </ul>
            </div>
*/