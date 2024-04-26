"use client"
import SearchBox from "./SearchBox";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import PostCardGrid from "./ArticlesCardGrid";
import Pagination from "../layouts/helpers/Pagination";
import { fetchAllArticles } from "@/utils/actions";
import LoadingPosts from "../layouts/helpers/LoadingPosts";
import Loading from "@/app/[locale]/articles/Loading";

const ArticlesData = ({ locale }: { locale: string }) => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';

    const currentPage = Number(searchParams.get('page')) || 1;

    const { data, isPending } = useQuery({
        queryKey: ['all_articles', search ?? '', currentPage],
        queryFn: () => fetchAllArticles({
            locale, search: search ?? "", page: currentPage
        }),
    });

    if (isPending) return <Loading cards={3} />

    const articles = data?.data || [];
    const pageCount = data?.meta?.pagination?.pageCount || 0;
    // console.log(articles);

    return (
        <main>
            <section className={`flex items-center justify-between`}>
                {/* <div className="w-2/3">
                    <SearchBox />
                </div> */}
            </section>
            <section>
                {articles.length < 1 ? (
                    <h5 className='mt-16 text-2xl text-center'>
                        {locale === "ar" ? "عذرًا، لا توجد مقالات تطابق بحثك..." : "Désolé, aucun article ne correspond à votre recherche..."}
                    </h5>
                ) : (
                    <section className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                        {
                            articles?.map((article: DataItem) => {
                                const { id, attributes } = article
                                return <PostCardGrid
                                    key={id}
                                    {...attributes}
                                    locale={locale}
                                />
                            })
                        }

                    </section>
                )}
            </section>
            <Pagination
                pageCount={pageCount}
                page={currentPage}
            />
        </main>
    );
};

export default ArticlesData;