"use client"

import { fetchAllArticles, fetchSingleArticle } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from 'react-markdown'

export async function generateMetadata({ params: { slug, locale } }: { params: { slug: string, locale: string } }) {

    return {
        title: "title",
        description: "desc"
    };
}

const SingleArticle = ({ slug }: { slug: string }) => {

    const { data: singlePost, isError, isPending } = useQuery<any>({
        queryKey: ['article', slug],
        queryFn: () => async () => fetchSingleArticle(slug)
    });

    if (isPending) {
        return <div>loading</div>
    }

    const { title, image, content } = singlePost?.data?.attributes || {}
    const img = image?.data?.attributes?.url || "/website/testimg.jpeg"

    return (
        <main className="my-16 body-container">
            <Image
                style={{ height: '500px' }}
                src="/website/testimg.jpeg"
                alt={title}
                className='object-cover w-full rounded'
                width={500}
                height={500}
            />
            <section className={`my-10 body-container `}>
                <h1 className="text-2xl font-bold">{title}</h1>
                <hr className="my-10" />
                <div className='my-10 content'>
                    <ReactMarkdown>
                        {content}
                    </ReactMarkdown>
                </div>
            </section>
        </main>
    )
};

export default SingleArticle;
