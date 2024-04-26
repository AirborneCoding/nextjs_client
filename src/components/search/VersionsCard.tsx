import Image from "next/image";
import React from "react";

const VersionsCard = (props: any) => {
    const { id, title, description, image, locale } = props

    return (
        <div className="card md:card-side flex flex-col-reverse bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-base">{title}</h2>
                <p className="text-sm">{description}</p>
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
                alt={title}
                className="h-80 md:w-80"
                width={500}
                height={500}
            />
        </div>
    )
};

export default VersionsCard;
