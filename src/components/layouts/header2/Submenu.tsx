"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useNavbarContext } from '@/context/useNavbarContext';
import { sublinks2 } from "@/utils/data/data"

const Submenu = ({ locale }: { locale: string }) => {

    const {
        isSubmenuOpen,
        page: { target, page, links },
        location,
    } = useNavbarContext();

    const [columns, setColumns] = useState('cols-2');

    const filteredLinks = sublinks2.find((link) => link.target === target);

    useEffect(() => {
        setColumns('cols-2');
        if (links.length === 3) {
            setColumns('cols-3');
        }
        if (links.length > 3) {
            setColumns('cols-2');
        }
    }, [page, location, links]);


    if (filteredLinks?.links.length === 0) return null

    return (
        <aside
            className={` ${isSubmenuOpen ? 'body-container absolute bg-white p-5 rounded-md top-[4.1rem] xl:top-[4.3rem] left-0 right-0 hidden lg:block' : 'submenu hidden'}`}
        >
            <section>
                <h4 className='mb-5 text-[18px] font-bold underline underline-offset-8 text-myBlue'>
                    {locale === "ar" ? page.ar : page.fr}
                </h4>
                <div className={`grid grid-${columns} gap-6`}>
                    {filteredLinks?.links?.map((link: any, index: number) => {
                        const { url, icon, label } = link
                        return (
                            <Link
                                key={index}
                                href={`/${locale}/${url}`}
                                className='hover:underline-offset-4 hover:underline'
                            >
                                {locale === "ar" ? label.ar : label.fr}
                            </Link>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
};

export default Submenu;







/* 
"use client"
import { useNavbarContext } from '@/context/useNavbarContext';
import { sublinks2 } from "@/utils/data/data"
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'

const Submenu = ({ locale }: { locale: string }) => {

    const {
        isSubmenuOpen,
        page: { target, page, links },
        location,
    } = useNavbarContext();

    const filteredLinks = sublinks2.find((link) => link.target === target);
    if (filteredLinks?.links.length === 0) return null

    const container = useRef<HTMLDivElement>(null);

    const [columns, setColumns] = useState('cols-2');

    useEffect(() => {
        setColumns('cols-2');
        const submenu = container.current;
        // console.log(submenu);

        const { center, bottom } = location;
        // console.log(location);
        // submenu?.style && (submenu.style.left = `${center}px`);
        // submenu?.style && (submenu.style.top = `${bottom}px`);

        if (links.length === 3) {
            setColumns('cols-3');
        }
        if (links.length > 3) {
            setColumns('cols-2');
        }
    }, [page, location, links]);



    // useEffect(() => {
    //     const submenu = container.current;
    //     if (submenu) {
    //         submenu.classList.toggle('open', isSubmenuOpen);
    //     }
    // }, [isSubmenuOpen]);

    // console.log(columns);


    return (
        <aside
            className={` ${isSubmenuOpen ? 'body-container absolute bg-white p-5 rounded-md top-[4.1rem] xl:top-[4.3rem] left-0 right-0 hidden lg:block' : 'submenu hidden'}`}

        >
            <section>
                <h4 className='mb-5 text-[18px] font-bold underline underline-offset-8 text-myBlue'>
                    {locale === "ar" ? page.ar : page.fr}
                </h4>
                <div className={`grid grid-${columns} gap-6`}>
                    {filteredLinks?.links?.map((link: any, index: number) => {
                        const { url, icon, label } = link
                        return (
                            <Link
                                key={index}
                                href={`/${locale}/${url}`}
                                className='hover:underline-offset-4 hover:underline'
                            >
                                {locale === "ar" ? label.ar : label.fr}
                            </Link>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
};

export default Submenu;



*/