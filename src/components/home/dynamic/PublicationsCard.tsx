import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PublicationsCard = (props: any) => {
    const { id, attributes, locale } = props

    return (
        <div className="card flex flex-col-reverse bg-base-200 shadow-xl">
            <div className="flex justify-between py-4 px-4 card-body">
                <div>
                    <h2 className="card-title text-xs">{attributes.title}</h2>
                </div>
                <div className="card-actions justify-sart">
                    <button className="btn btn-xs btn-neutral">
                        {locale === "ar" ? "تحميل" : "télécharger"}
                    </button>
                </div>
            </div>
            {/* <figure>
                <img
                    src={attributes?.image?.data?.attributes?.url}
                    alt={attributes.title}
                    className="h-80 md:w-80 object-cover"
                /></figure> */}
            <Image
                // src={attributes?.image?.data?.attributes?.url}
                src="/website/testimg2.PNG"
                alt={attributes.title}
                className="lg:w-80 object-cover  md:h-auto"
                width={500}
                height={500}
            />
        </div>
    )
};

export default PublicationsCard;
