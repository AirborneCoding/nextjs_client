"use client"
import { fetchPublications } from "@/utils/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PublicationsCard from "./PublicationsCard";
import { useQuery } from "@tanstack/react-query";

export type PublicationsCard = JSX.Element


type Props = {
    locale: string;
    category: string;
    searchValue: string;
}

let page = 2

function LoadMore(props: Props) {
    const { category, locale, searchValue } = props

    const { ref, inView } = useInView()
    const [data, setData] = useState<PublicationsCard[]>([])

    useEffect(() => {
        if (inView) {
            fetchPublications({ search: searchValue, category: category, locale: locale, limit: page }).then((res) => {
                setData([...data, ...res.data])
                page++
            })
        }
    }, [inView, data, searchValue, category])



    return (
        <>

            <section className="flex gap-8">

            </section>
            <section className="flex flex-col lg:flex-row gap-8 mt-5">

                <div className={`flex-grow grid ${data.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"} gap-5 lg:w-80`}>
                    {data.map((pub: any) => {
                        return <PublicationsCard key={pub.id} {...pub} />
                    })}
                    {
                        data?.length === 0 && (
                            <div ref={ref}>
                                Loading....
                            </div>
                        )

                    }
                </div>
            </section>
        </>
    );
}

export default LoadMore;
