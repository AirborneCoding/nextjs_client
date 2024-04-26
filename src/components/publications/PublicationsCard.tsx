import Image from "next/image";
import React from "react";

const PublicationsCard = (props: any) => {
    const { id, attributes, locale } = props
    return (
        <div className="card md:card-side flex flex-col-reverse bg-base-200 shadow-xl">
            <div className="card-body">
                <h4 className="card-title text-[18px]">{attributes.title}</h4>
                <p className="text-sm">{attributes.description}</p>
                <div className="card-actions justify-sart">
                    <button className="btn btn-sm btn-neutral">
                        {locale === "ar" ? "تحميل" : "télécharger"}
                    </button>
                </div>
            </div>
            {/* <figure>
                <img
                    src="/website/testimg2.PNG"
                    alt={attributes.title}
                    className="h-80 md:w-80 object-cover"
                /></figure> */}
            <Image
                // src={attributes?.image?.data?.attributes?.url}
                src="/website/testimg2.PNG"
                alt={attributes.title}
                className="w-full md:w-60 h-full"
                width={500}
                height={500}
            />
        </div>
    )
};

export default PublicationsCard;
// lg:grid-cols-2

