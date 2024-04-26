import { useTranslations } from "next-intl";
import Link from "next/link";

const Videos = ({ locale }: { locale: string }) => {

    const t = useTranslations("Global")
    return (
        <section className='my-10 body-container'>
            <div className='flex flex-row-reverse items-center justify-between'>
                <Link href={`/${locale}/content/videos`}
                    className='px-4 py-2 mx-1 mb-3 font-bold bg-yellow-500 rounded text-slate-800 active:text-white active:bg-myBlue'
                >
                    {t("more")}
                </Link>
                <h2 className='mb-6 text-2xl font-bold underline underline-offset-8 decoration-yellow-500'>
                    {t("videos")}
                </h2>
            </div>
            <article className='flex flex-col space-y-3 lg:space-y-0 lg:h-72 lg:space-x-2 lg:flex-row'>
                <div className='w-full h-48 md:rounded md:h-72'>
                    <iframe
                        src='https://www.youtube.com/embed/JMcTsfQjldw'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        className='object-cover w-full h-full rounded'
                    ></iframe>
                </div>
                <div className='w-full h-48 md:rounded md:h-72'>
                    <iframe
                        src='https://www.youtube.com/embed/tNxzSiy0I2A'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        className='object-cover w-full h-full rounded'
                    ></iframe>
                </div>
                <div className='w-full h-48 md:rounded md:h-72'>
                    <iframe
                        src='https://www.youtube.com/embed/gjaOw3J1zhM'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        className='object-cover w-full h-full rounded'
                    ></iframe>
                </div>
            </article>
        </section>
    )
};

export default Videos;



/* 
<a
                    href='https://www.youtube.com/@user-hz8tv1xz1g'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 mx-1 mb-3 font-bold bg-yellow-500 rounded text-slate-800 active:text-white active:bg-myBlue'
                >
                    {t("more")}
                </a> 
*/