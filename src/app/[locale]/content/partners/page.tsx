import { fetchPartners } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const partnerData = [
    { title: 'Company A', image: 'https://res.cloudinary.com/dnjgk8snn/image/upload/v1713988707/ministry/yqqnjtijm1jubgxbbnhm.webp' },
    { title: 'Company B', image: 'https://res.cloudinary.com/dnjgk8snn/image/upload/v1713988707/ministry/tjbtwylioqujirtb9wfc.jpg' },
    { title: 'Company C', image: 'https://res.cloudinary.com/dnjgk8snn/image/upload/v1713988707/ministry/fqhxdg9fe9tme4zuhfpj.png' },
    { title: 'Company D', image: 'https://via.placeholder.com/150' },
    { title: 'Company E', image: 'https://via.placeholder.com/150' },
];


const PartnersPage = async ({ params: { locale } }: { params: { locale: string } }) => {
    // console.log(locale);

    const data = await fetchPartners({ locale })
    // console.log(partnersData);

    if (!data) {
        return <div>Loading</div>
    }

    const partnersData = data?.data
    return (
        // <main className="my-16 body-container">
        //     <h1 className="mb-8 text-3xl font-bold text-center">Our Partners</h1>
        //     <div className="grid md:grid-cols-2 lg:grid-cols-4">
        //         {partnerData.map((partner: any, index: number) => (
        //             <div key={index} className="m-4">
        //                 <p className="mt-2 font-semibold text-center">{partner.title}</p>
        //                 <Image
        //                     className='w-full mx-auto h-96 lg:h-52 lg:w-52 md:w-40 md:h-40'
        //                     src={partner.image}
        //                     alt={partner.title}
        //                     width={500}
        //                     height={500}
        //                 />

        //             </div>
        //         ))}
        //     </div>
        // </main>
        <main className="my-16 body-container">
            <h1 className="mb-8 text-3xl font-bold text-center">
                {
                    locale === "ar" ? " الشركاء" : "Our Partners"
                }
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {partnersData?.map((p: any) => {
                    const { id, attributes } = p
                    const img = attributes?.image?.data?.attributes?.url
                    console.log(attributes);

                    return (
                        <div key={p?.id} className="relative m-4 overflow-hidden">

                            <a
                                href={attributes?.link}
                                target='_blank' rel='noopener noreferrer'
                                className="relative group"
                            >
                                <Image
                                    className="w-full mx-auto transition-transform duration-300 hover:cursor-pointer h-96 lg:h-52 lg:w-52 md:w-40 md:h-40 group-hover:scale-110"
                                    src={img}
                                    alt={attributes?.title}
                                    width={500}
                                    height={500}
                                />
                                <h2 className="mt-8 font-semibold text-center">{attributes?.title}</h2>
                            </a >


                        </div >
                    )
                })}
            </div>
        </main>
    )
};

export default PartnersPage;
/* 

*/