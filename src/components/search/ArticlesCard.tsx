import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticlesCard = (props: ArticleAttributes) => {
    const { title, image, slug, createdAt, description, locale } = props;

    return (
        <div className="shadow-xl card card-compact bg-base-100">
            <Link href={`/${locale}/articles/${slug}`}>
                <Image
                    // src={image?.data?.attributes?.url}
                    // src={`${url}/image?.data?.attributes?.url`}
                    src="/website/testimg.jpeg"
                    alt={title}
                    width={500}
                    height={500}
                />
            </Link>
            <div className="justify-between card-body">
                <Link href={`/${locale}/articles/${slug}`}>
                    <h4 className={`text-sm font-bold card-title hover:underline`}>
                        {title}
                    </h4>
                </Link>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href={`/${locale}/articles/${slug}`} className="btn btn-sm">
                            {locale === "ar" ? "اقرأ أكثر" : "Lire Plus"}
                        </Link>
                    </div>
                    <div>
                        <p className="underline">
                            {moment(createdAt).format('L')}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ArticlesCard;
