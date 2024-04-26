import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { getTranslations } from 'next-intl/server';


export async function generateMetadata() {

    const t = await getTranslations('MissionPage');

    return {
        title: t('title'),
        description: t.raw("text").replace(/<[^>]*>?/gm, '')
    }
}


const Page = () => {

    const t = useTranslations('MissionPage');

    return (
        <main className="py-8 mx-5 md:py-10 body-container">
            <h2 className="mb-10 ml-2 mr-2 text-3xl font-bold underline underline-offset-1 decoration-yellow-500">
                {t('title')}
            </h2>
            <article className="flex justify-between gap-12 flex-col-reverse">
                <div className="flex-1 p-5 missions">
                    <div dangerouslySetInnerHTML={{ __html: t.raw('text') }} />
                </div>
                <Image
                    width={500}
                    height={500}
                    src="/website/Ministere-de-la-justice.jpg"
                    className="w-full md:h-[530px] h-[430px]"
                    alt={t('title')}
                />
            </article>
        </main>

    )
};

export default Page;
