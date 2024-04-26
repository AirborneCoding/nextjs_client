import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const UsefullLinks = ({ locale }: { locale: string }) => {
    const t = useTranslations("UsefullLinks")
    const t2 = useTranslations("Global")

    const usefulLinks = [
        {
            id: 1,
            img: '/useful/humansell1.jpg',
            title: t("humans"),
            link: 'https://www.ohchr.org/ar/trafficking-in-persons',
        },
        {
            id: 2,
            img: '/useful/prison.jfif',
            title: t("prison"),
            link: 'https://www.dgapr.gov.ma/',
        },
        {
            id: 3,
            img: '/useful/logoamazigh.svg',
            title: t("judge"),
            link: 'https://cspj.ma/',
        },
        {
            id: 4,
            img: '/website/logo.png',
            title: t("general"),
            link: 'http://www.presidenceministerepublic.ma/',
        },
        {
            id: 5,
            img: '/useful/police.png',
            title: t("police"),
            link: 'https://concours.dgsn.gov.ma/',
        },
        {
            id: 6,
            img: '/website/logo.png',
            title: t("justice"),
            link: 'https://justice.gov.ma/',
        },
    ]

    return (
        <section className='bg-white'>
            <div className='py-8 md:py-10 body-container'>
                {/* <h2 className='mb-6 ml-2 mr-5 text-2xl font-bold underline underline-offset-8 decoration-yellow-500 text-myBlue'>
                    {t("title")}
                </h2> */}
                <div className='flex flex-row-reverse items-center justify-between'>
                    <Link
                        href={`/${locale}/content/partners`}
                        className='px-4 py-2 mx-1 mb-3 font-bold bg-yellow-500 rounded text-slate-800 active:text-white active:bg-myBlue'
                    >
                        {t2("more")}
                    </Link>
                    <h2 className='mb-6 text-2xl font-bold underline underline-offset-8 decoration-yellow-500'>
                        {/* {t("videos")} */}
                        {t("title")}
                    </h2>
                </div>
                <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mt-14'>
                    {usefulLinks.filter((link) => link.id === 6).map((link) => (
                        <div key={link.id} className='text-center'>
                            <a href={link.link} target='_blank' rel='noopener noreferrer'>
                                {/* <img
                                    className='w-32 h-32 mx-auto md:w-40 md:h-40'
                                    src={link.img}
                                    alt={link.link}
                                /> */}
                                <Image
                                    className='w-32 h-32 mx-auto md:w-40 md:h-40'
                                    src={link.img}
                                    alt={link.link}
                                    width={500}
                                    height={500}
                                />
                                <h4 className='mt-4 text-base font-bold text-myBlue'>{link.title}</h4>
                            </a>
                        </div>
                    ))}
                    {usefulLinks.filter((link) => link.id !== 6).map((link) => (
                        <div key={link.id} className='text-center'>
                            <a href={link.link} target='_blank' rel='noopener noreferrer'>
                                {/* <img
                                    className='w-32 h-32 mx-auto md:w-40 md:h-40'
                                    src={link.img}
                                    alt={link.link}
                                /> */}
                                <Image
                                    className='w-16 h-16 mx-auto md:w-24 md:h-24'
                                    src={link.img}
                                    alt={link.link}
                                    width={500}
                                    height={500}
                                />

                                <h4 className='mt-4 text-base font-bold text-myBlue'>{link.title}</h4>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default UsefullLinks;
