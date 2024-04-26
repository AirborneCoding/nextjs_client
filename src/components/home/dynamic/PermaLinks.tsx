"use client"

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchHomeArticles } from "@/utils/actions";

const PermaLinks = ({ locale }: { locale: string }) => {

    // data fetching
    const { data, isPending, isError } = useQuery({
        queryKey: ["permalink_articles", locale, 4],
        queryFn: () => fetchHomeArticles({ locale, limit: 4 }),
    });

    const articles = data?.data || [];
    // console.log(articles);

    // style logic
    const [isPaused, setIsPaused] = useState(false);
    const handleMouseEnter = () => {
        setIsPaused(true);
    };
    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className='bg-myBlue'>
            <div
                className="news-ticker"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul className={`ticker-list ${isPaused ? 'paused' : ''}`}>
                    {articles.map((item: any) => (
                        <li key={item.id} className="text-white ticker-item">
                            <Link
                                href={`/${locale}/posts/${encodeURIComponent(item.attributes.slug)}`}
                            >
                                {item.attributes.title}
                                <div
                                    style={{ padding: "1px" }}
                                    className="bg-yellow-500"
                                ></div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default PermaLinks;
