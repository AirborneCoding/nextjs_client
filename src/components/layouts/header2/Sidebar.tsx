"use client"
import { useNavbarContext } from "@/context/useNavbarContext";
import { sublinks2 } from "@/utils/data/data";
import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ locale }: { locale: string }) => {

    const { isSidebarOpen, closeSidebar } = useNavbarContext();

    return (
        <div
            className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
                }`}
        >
            <aside className='sidebar'>
                <button className='close-btn' onClick={() => closeSidebar()}>
                    <FaTimes />
                </button>
                {/* sidebar-links */}
                <div className='grid'>
                    {sublinks2.map((item: any, index: number) => {
                        const { links, page } = item
                        const link = item?.target === "home" ? "/" : item?.target;
                        return (
                            <article key={index} >
                                <Link
                                    href={`/${locale}/${link}`}
                                    onClick={() => closeSidebar()}
                                >
                                    <h4 className="mb-5 font-bold underline underline-offset-8 text-myBlue">{locale === "ar" ? page.ar : page.fr}</h4>
                                </Link>
                                <div className='sidebar-sublinks'>
                                    {links.map((link: any,
                                        index: number) => {
                                        const { label, url } = link
                                        return (
                                            <Link
                                                key={index}
                                                href={`/${locale}/${url}`}
                                                className='hover:underline-offset-4 hover:underline'
                                                onClick={() => closeSidebar()}
                                            >
                                                {locale === "ar" ? label.ar : label.fr}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </aside>
        </div>
    )
};

export default Sidebar;
