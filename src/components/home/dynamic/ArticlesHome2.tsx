"use client"

import { fetchHomeArticles } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const ArticlesHome2 = ({ locale }: { locale: string }) => {

    // data fetching
    const { data, isPending } = useQuery({
        queryKey: ['home_articles2', locale, 5],
        queryFn: () => fetchHomeArticles({ locale, limit: 5 }),
    });
    const articles = data?.data || [];


    return (
        <section className="py-8 ac body-container md:py-10">

            <div className='my-5 lg:my-0'>
                {articles?.slice(4, 5).map((article: DataItem) => {
                    const { id, attributes } = article;
                    const imageUrl = attributes?.image?.data?.attributes?.url;
                    const title = attributes?.title;
                    return <div key={id} className='h-full cursor-pointer latest-posts'>
                        <Link
                            href={`/${locale}/articles/${encodeURIComponent(attributes.slug)}`}
                        >
                            <img src="/website/testimg.jpeg" alt={title} className="object-cover h-full rounded" loading="lazy" />
                            {/* <Image
                                src={imageUrl}
                                alt={title}
                                className="object-cover h-full rounded" loading="lazy"
                                width={500}
                                height={500}
                            /> */}
                            <div className="latest-articles">
                                <h5 className='pb-5 text-sm text-white hover:underline'>{title}</h5>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
            
            <div className='grid grid-cols-1 gap-3 mb-3 md:mb-0 lg:grid-cols-2'>
                {articles?.slice(0, 4).map((article: DataItem) => {
                    const { id, attributes } = article;
                    const imageUrl = attributes?.image?.data?.attributes?.url;
                    const title = attributes?.title;
                    return <div key={id} className='h-full cursor-pointer latest-posts'>
                        <Link href={`/${locale}/articles/${encodeURIComponent(attributes.slug)}`}>
                            <img src="/website/testimg.jpeg" alt={title} className="object-cover h-full rounded md:h-96 md:w-full" loading="lazy" />
                            {/* <Image
                                src={imageUrl} alt={title}
                                className="object-cover h-full rounded md:h-96 md:w-full"
                                loading="lazy"
                                width={500}
                                height={500}
                            /> */}
                            <div className="latest-articles">
                                <h5 className='text-sm text-white hover:underline'>{title}</h5>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
            
        </section>
    )
};

export default ArticlesHome2;
