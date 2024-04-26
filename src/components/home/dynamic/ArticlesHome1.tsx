"use client"
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { fetchHomeArticles } from "@/utils/actions";

const ArticlesHome1 = ({ locale }: { locale: string }) => {

    // data fetching
    const { data, isPending } = useQuery({
        queryKey: ['home1_articles', locale, 4],
        queryFn: () => fetchHomeArticles({ locale, limit: 4 }),
    });
    const articles = data?.data || [];

    // console.log(articles);


    return (
        <section className="w-full h-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {articles.map((article: DataItem) => {
                    const { id, attributes } = article;
                    const imageUrl = attributes?.image?.data?.attributes?.url;
                    const title = attributes?.title;

                    return (
                        <SwiperSlide key={id}>
                            <Link href={`/${locale}/articles/${encodeURIComponent(attributes.slug)}`}>
                                <div className="section3-children">
                                    {/* <Image
                                        src={imageUrl}
                                        alt={title}
                                        loading="lazy"
                                        width={500}
                                        height={500}
                                        property=""
                                    /> */}
                                    <img
                                        src="/website/testimg.jpeg"
                                        alt={title}
                                        loading="lazy"
                                    />
                                    <div className="section3-info body-container">
                                        <h2 className="mx-10 text-xl font-semibold text-white text-start">{title}</h2>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>

    )
};

export default ArticlesHome1;
