import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const ArticlesCardGrid = (items: ArticleAttributes) => {
    // console.log(searchParams);

    const { title, image, slug, createdAt, description, locale } = items;
    // console.log(encodeURIComponent(slug));

    // const url = "..\server\public"
    // console.log(image?.data?.attributes?.url);
    // console.log(`http://localhost:1337/server/public${image?.data?.attributes?.url}`);


    return (
        <div className="shadow-xl card card-compact bg-base-100">
            <Link href={`/${locale}/articles/${encodeURIComponent(slug)}`}>
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
                <Link href={`/${locale}/articles/${encodeURIComponent(slug)}`}>
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

export default ArticlesCardGrid;

/* 
<figure>
                    <img
                        className="object-cover w-full h-80"
                        src={image.data.attributes.formats.thumbnail.url}
                        srcSet={`
                    ${image.data.attributes.formats.thumbnail.url} 208w,
                    ${image.data.attributes.formats.small.url} 500w,
                    ${image.data.attributes.formats.medium.url} 750w,
                    ${image.data.attributes.formats.large.url} 1000w
                `}
                        sizes="(max-width: 640px) 208px, (max-width: 768px) 500px, (max-width: 1024px) 750px, 1000px"
                        alt={title}
                    />
                </figure>
*/