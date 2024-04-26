"use client"
import Loading from "@/app/[locale]/content/videos/Loading";
import { fetchVideos } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Pagination from "../layouts/helpers/Pagination";
import { map } from "lodash";

const VideosData = ({ locale }: { locale: string }) => {

    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const { data, isPending } = useQuery({
        queryKey: ['videos', currentPage],
        queryFn: () => fetchVideos({
            locale, page: currentPage
        }),
    });

    if (isPending) return <Loading cards={3} />

    const videos = data?.data || [];
    const pageCount = data?.meta?.pagination?.pageCount || 0;
    // console.log(videos);

    return (
        <>
            <section className="grid gap-12 mt-10 md:grid-cols-1 lg:grid-cols-2">
                {videos.map((v: any) => {
                    const { id, attributes } = v;
                    const videoData = attributes?.video?.data;
                    
                    if (!Array.isArray(videoData) || videoData.length === 0) {
                        return (
                            <div key={id}>
                                <div className='w-full h-48 md:rounded md:h-72'>
                                    <iframe
                                        src={attributes?.link}
                                        title={attributes?.title}
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        className='object-cover w-full h-full rounded'

                                    ></iframe>
                                </div>
                                <h2>{attributes?.title}</h2>
                            </div>
                        );
                    }

                    const videoUrl = videoData[0]?.attributes?.url;

                    return (
                        <div key={id}>
                            <div className='w-full h-48 md:rounded md:h-72'>
                                {videoUrl ? (
                                    <video controls className='object-cover w-full h-full rounded'>
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <p>Video URL not available</p>
                                )}
                            </div>
                            <h2>{attributes?.title}</h2>
                        </div>
                    );
                })}
            </section>
            <Pagination
                pageCount={pageCount}
                page={currentPage}
            />
        </>
    )
};

export default VideosData;


/* 
 <section className="grid gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((v: any) => {
                    const { id, attributes } = v;
                    // Check if video data exists and is an array with at least one item
                    const videoData = attributes?.video?.data;
                    if (!Array.isArray(videoData) || videoData.length === 0) {
                        // If video data is missing or empty, handle gracefully (e.g., show placeholder)
                        return (
                            <div key={id}>
                                <p>Video not available</p>
                                <h2>{attributes?.title}</h2>
                            </div>
                        );
                    }

                    // Extract the video URL from the first item in the video data array
                    const videoUrl = videoData[0]?.attributes?.url;

                    return (
                        <div key={id}>
                            <div className='w-full h-48 md:rounded md:h-72'>
                                {videoUrl ? (
                                    <video controls className='object-cover w-full h-full rounded'>
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <p>Video URL not available</p>
                                )}
                            </div>
                            <h2>{attributes?.title}</h2>
                        </div>
                    );
                })}
            </section>
*/


/* 
1
           <section className="grid gap-12 mt-10 md:grid-cols-1 lg:grid-cols-2">
                {
                    videos?.map((v: any) => {
                        const { id, attributes } = v

                        const videoUrl = v?.attributes?.video?.data[0]?.attributes?.url;
                        console.log(videoUrl);


                        return (
                            <div key={id}>
                                <div className='w-full h-48 md:rounded md:h-72'>
                                    <iframe
                                        src={attributes?.link}
                                        title={attributes?.title}
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        className='object-cover w-full h-full rounded'

                                    ></iframe>
                                </div>
                                <h2 className="mt-5 text-xl">{attributes?.title}</h2>
                                <video controls className='object-cover w-full h-full rounded'>
                                    <source src="https://res.cloudinary.com/dnjgk8snn/video/upload/v1713985674/ministry/v1_b697736159.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>


                            // <div key={id}>
                            //     <div className='w-full h-48 md:rounded md:h-72'>
                            //         <video controls className='object-cover w-full h-full rounded'>
                            //             <source src={videoUrl} type="video/mp4" />
                            //             Your browser does not support the video tag.
                            //         </video>
                            //     </div>
                            //     <h2>{attributes?.title}</h2>
                            // </div>
                        )
                    })
                }
            </section>

*/